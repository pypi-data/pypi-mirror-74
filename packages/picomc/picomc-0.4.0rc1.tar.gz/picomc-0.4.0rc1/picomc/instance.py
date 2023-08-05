import os
import shlex
import shutil
import subprocess
import zipfile
from operator import attrgetter
from string import Template
from tempfile import mkdtemp

import requests

import picomc
from picomc.config import Config
from picomc.env import Env, assert_java, get_filepath
from picomc.logging import logger
from picomc.rules import match_ruleset
from picomc.utils import join_classpath, sanitize_name


class NativesExtractor:
    def __init__(self, instance, natives):
        self.instance = instance
        self.natives = natives
        self.ndir = mkdtemp(prefix="natives-", dir=instance.get_relpath())

    def get_natives_path(self):
        return self.ndir

    def extract(self):
        dedup = set()
        for library in self.natives:
            fullpath = library.get_abspath(get_filepath("libraries"))
            if fullpath in dedup:
                logger.debug(
                    "Skipping duplicate natives archive: " "{}".format(fullpath)
                )
                continue
            dedup.add(fullpath)
            logger.debug("Extracting natives archive: {}".format(fullpath))
            with zipfile.ZipFile(fullpath) as zf:
                # TODO take exclude into account
                zf.extractall(path=self.ndir)

    def __enter__(self):
        self.extract()
        return self.ndir

    def __exit__(self, ext_type, exc_value, traceback):
        logger.debug("Cleaning up natives.")
        shutil.rmtree(self.ndir)


def process_arguments(arguments_dict, java_info):
    def subproc(obj):
        args = []
        for a in obj:
            if isinstance(a, str):
                args.append(a)
            else:
                if "rules" in a and not match_ruleset(a["rules"], java_info):
                    continue
                if isinstance(a["value"], list):
                    args.extend(a["value"])
                elif isinstance(a["value"], str):
                    args.append(a["value"])
                else:
                    logger.error("Unknown type of value field.")
        return args

    return (subproc(arguments_dict["game"]), subproc(arguments_dict.get("jvm")))


class Instance:
    def __init__(self, name):
        self.name = sanitize_name(name)
        self.directory = get_filepath("instances", self.name)

    def __enter__(self):
        self.config = Config(self.get_relpath("config.json"), bottom=Env.gconf)
        Env.commit_manager.add(self.config)
        return self

    def __exit__(self, ext_type, exc_value, traceback):
        pass

    def get_relpath(self, rel=""):
        return os.path.join(self.directory, rel)

    def get_java(self):
        return self.config["java.path"]

    def populate(self, version):
        self.config["version"] = version

    def launch(self, account, version=None, verify_hashes=False):
        vobj = Env.vm.get_version(version or self.config["version"])
        logger.info("Launching instance: {}".format(self.name))
        if version or vobj.version_name == self.config["version"]:
            logger.info("Using version: {}".format(vobj.version_name))
        else:
            logger.info(
                "Using version: {} -> {}".format(
                    self.config["version"], vobj.version_name
                )
            )
        logger.info("Using account: {}".format(account))
        gamedir = self.get_relpath("minecraft")
        os.makedirs(gamedir, exist_ok=True)

        java = self.get_java()
        java_info = assert_java(java)

        libraries = vobj.get_libraries(java_info)
        vobj.prepare_launch(gamedir, java_info, verify_hashes)
        # Do this here so that configs are not needlessly overwritten after
        # the game quits
        Env.commit_manager.commit_all_dirty()
        with NativesExtractor(
            self, filter(attrgetter("is_native"), libraries)
        ) as natives_dir:
            self._exec_mc(
                account,
                vobj,
                java,
                java_info,
                gamedir,
                filter(attrgetter("is_classpath"), libraries),
                natives_dir,
            )

    def extract_natives(self):
        vobj = Env.vm.get_version(self.config["version"])
        java_info = assert_java(self.get_java())
        libs = vobj.get_libraries(java_info)
        ne = NativesExtractor(self, filter(attrgetter("is_native"), libs))
        ne.extract()
        logger.info("Extracted natives to {}".format(ne.get_natives_path()))

    def _exec_mc(self, account, v, java, java_info, gamedir, libraries, natives):
        libs = [lib.get_abspath(get_filepath("libraries")) for lib in libraries]
        libs.append(v.jarfile)
        classpath = join_classpath(*libs)

        version_type, user_type = (
            ("picomc", "mojang") if account.online else ("picomc/offline", "offline")
        )

        mc = v.vspec.mainClass

        if hasattr(v.vspec, "minecraftArguments"):
            mcargs = shlex.split(v.vspec.minecraftArguments)
            sjvmargs = ["-Djava.library.path={}".format(natives), "-cp", classpath]
        elif hasattr(v.vspec, "arguments"):
            mcargs, jvmargs = process_arguments(v.vspec.arguments, java_info)
            sjvmargs = []
            for a in jvmargs:
                tmpl = Template(a)
                res = tmpl.substitute(
                    natives_directory=natives,
                    launcher_name="picomc",
                    launcher_version=picomc.__version__,
                    classpath=classpath,
                )
                sjvmargs.append(res)

        try:
            account.refresh()
        except requests.exceptions.ConnectionError:
            logger.warning(
                "Failed to refresh account due to a connectivity error. Continuing."
            )

        smcargs = []
        for a in mcargs:
            tmpl = Template(a)
            res = tmpl.substitute(
                auth_player_name=account.gname,
                auth_uuid=account.uuid,
                auth_access_token=account.access_token,
                # Only used in old versions.
                auth_session="token:{}:{}".format(account.access_token, account.uuid),
                user_type=user_type,
                user_properties={},
                version_type=version_type,
                version_name=v.version_name,
                game_directory=gamedir,
                assets_root=get_filepath("assets"),
                assets_index_name=v.vspec.assets,
                game_assets=v.get_virtual_asset_path(),
            )
            smcargs.append(res)

        my_jvm_args = [
            "-Xms{}".format(self.config["java.memory.min"]),
            "-Xmx{}".format(self.config["java.memory.max"]),
        ]
        my_jvm_args += shlex.split(self.config["java.jvmargs"])

        fargs = [java] + sjvmargs + my_jvm_args + [mc] + smcargs
        if Env.debug:
            logger.debug("Launching: " + " ".join(fargs))
        else:
            logger.info("Launching the game")
        subprocess.run(fargs, cwd=gamedir)

    @classmethod
    def exists(cls, name):
        inst = cls(name)
        return os.path.exists(inst.get_relpath("config.json"))

    @staticmethod
    def delete(name):
        shutil.rmtree(get_filepath("instances", name))

    @staticmethod
    def rename(old, new):
        oldpath = get_filepath("instances", old)
        newpath = get_filepath("instances", new)
        assert not os.path.exists(newpath)
        assert os.path.exists(oldpath)
        shutil.move(oldpath, newpath)
