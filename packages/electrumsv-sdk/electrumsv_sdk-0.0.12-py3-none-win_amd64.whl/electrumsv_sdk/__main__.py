import json
import logging
import os
import shutil
import stat
import sys
import platform

from electrumsv_node import electrumsv_node
from electrumsv_sdk.config import Config
from electrumsv_sdk.install_tools import create_if_not_exist
from electrumsv_sdk.runners import start, stop, reset, node
from electrumsv_sdk.argparsing import setup_argparser, manual_argparsing
from electrumsv_sdk.handlers import handle


logging.basicConfig(
    format="%(asctime)s %(levelname)s %(message)s",
    level=logging.DEBUG,
    datefmt="%Y-%m-%d %H-%M-%S",
)
logger = logging.getLogger("main")


def purge_prev_installs_if_exist():
    def remove_readonly(func, path, excinfo):  # .git is read-only
        os.chmod(path, stat.S_IWRITE)
        func(path)

    if Config.depends_dir.exists():
        shutil.rmtree(Config.depends_dir.__str__(), onerror=remove_readonly)
        create_if_not_exist(Config.depends_dir.__str__())
    if Config.run_scripts_dir.exists():
        shutil.rmtree(Config.run_scripts_dir.__str__(), onerror=remove_readonly)
        create_if_not_exist(Config.run_scripts_dir.__str__())

def handle_first_ever_run():
    """nukes previously installed dependencies and .bat/.sh scripts for the first ever run of the
    electrumsv-sdk."""
    try:
        with open(Config.electrumsv_sdk_config_path.__str__(), 'r') as f:
            config = json.loads(f.read())
    except FileNotFoundError:
        with open(Config.electrumsv_sdk_config_path.__str__(), 'w') as f:
            config = {"is_first_run": True}
            f.write(json.dumps(config))

    if config.get("is_first_run") or config.get("is_first_run") is None:
        logger.debug("running SDK for the first time. please wait for configuration to complete...")
        logger.debug("purging previous server installations (if any)...")
        purge_prev_installs_if_exist()
        with open(Config.electrumsv_sdk_config_path.__str__(), 'w') as f:
            config = {"is_first_run": False}
            f.write(json.dumps(config))
        logger.debug("purging completed successfully")

        electrumsv_node.reset()

def main():
    """
    Command-line interface for the ElectrumSV Software Development Kit

    The argparser module does not seem to naturally support the use of
    multiple subcommands simultaneously (which we need to support). This is handled
    manually by parsing sys.argv and feeding the correct options to the correct
    ArgumentParser instance (for the given subcommand). So in the end we get both
    a) the help menu interface via built-in argparser module
    b) the ability to string multiple subcommands + optional args together into a single cli
    command.
    """
    print("ElectrumSV Software Development Kit")
    print(
        f"-Python version {sys.version_info.major}.{sys.version_info.minor}."
        f"{sys.version_info.micro}-{platform.architecture()[0]}"
    )
    print()

    create_if_not_exist(Config.depends_dir.__str__())
    create_if_not_exist(Config.run_scripts_dir.__str__())
    handle_first_ever_run()

    setup_argparser()
    manual_argparsing(sys.argv)
    handle()
    if Config.NAMESPACE == Config.START:
        start()

    if Config.NAMESPACE == Config.STOP:
        stop()

    if Config.NAMESPACE == Config.RESET:
        reset()

    if Config.NAMESPACE == Config.NODE:
        node()

if __name__ == "__main__":
    main()
