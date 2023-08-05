"""Plugin that runs javac on all files in a repo.

.. important::

    Requires ``javac`` to be installed and accessible by the script!

This plugin is mostly for demonstrational purposes, showing off some of the
more advanced features of the plugin system. It, very unintelligently, finds
all of the ``.java`` files in a repository and tries to compile them all at the
same time. Duplicate files etc. will cause this to fail.

The point of this plugin is however mostly to demonstrate how to use the hooks,
and specifically the more advanced use of the ``clone_parser_hook`` and
``parse_args`` hooks.

.. module:: javac
    :synopsis: Plugin that tries to compile all .java files in a repo.

.. moduleauthor:: Simon Larsén
"""
import subprocess
import sys
import argparse
import configparser
import pathlib
from typing import Union, Iterable, Tuple

from _repobee import util

import repobee_plug as plug

PLUGIN_NAME = "javac"


class JavacCloneHook(plug.Plugin):
    """Containe for the plugin hooks allowing for persistence between
    adding/parsing arguments and acting on the repo.
    """

    def __init__(self):
        self._ignore = []

    def clone_task(self) -> plug.Task:
        return self._to_task()

    def setup_task(self) -> plug.Task:
        return self._to_task()

    def config_hook(self, config_parser: configparser.ConfigParser) -> None:
        """Check for configured ignore files.

        Args:
            config: the config parser after config has been read.
        """
        self._ignore = [
            file.strip()
            for file in config_parser.get(
                PLUGIN_NAME, "ignore", fallback=""
            ).split(",")
            if file.strip()
        ]

    def _to_task(self) -> plug.Task:
        return plug.Task(
            act=self._act,
            add_option=self._add_option,
            handle_args=self._handle_args,
            persist_changes=False,
        )

    def _act(self, path: pathlib.Path, api: plug.API) -> plug.Result:
        """Run ``javac`` on all .java files in the repo.

        Args:
            path: Path to the repo.
            api: A platform API class instance.
        Returns:
            a Result specifying the outcome.
        """
        java_files = [
            str(file)
            for file in util.find_files_by_extension(path, ".java")
            if file.name not in self._ignore
        ]

        if not java_files:
            msg = "no .java files found"
            status = plug.Status.WARNING
            return plug.Result(PLUGIN_NAME, status, msg)

        status, msg = self._javac(java_files)
        return plug.Result(PLUGIN_NAME, status, msg)

    def _javac(
        self, java_files: Iterable[Union[str, pathlib.Path]]
    ) -> Tuple[str, str]:
        """Run ``javac`` on all of the specified files, assuming that they are
        all ``.java`` files.

        Args:
            java_files: paths to ``.java`` files.
        Returns:
            (status, msg), where status is e.g. is a
            :py:class:`repobee_plug.Status` code and the message describes the
            outcome in plain text.
        """
        command = ["javac", *[str(path) for path in java_files]]
        proc = subprocess.run(
            command, stdout=subprocess.PIPE, stderr=subprocess.PIPE
        )

        if proc.returncode != 0:
            status = plug.Status.ERROR
            msg = proc.stderr.decode(sys.getdefaultencoding())
        else:
            msg = "all files compiled successfully"
            status = plug.Status.SUCCESS

        return status, msg

    def _add_option(self, clone_parser: argparse.ArgumentParser) -> None:
        """Add ignore files option to the clone parser.

        Args:
            clone_parser: The ``clone`` subparser.
        """
        clone_parser.add_argument(
            "--javac-ignore", help="File names to ignore.", nargs="+"
        )

    def _handle_args(self, args: argparse.Namespace) -> None:
        """Get the option stored in the ``--ignore`` option added by
        :py:func:`clone_parser_hook`.

        Args:
            args: The full namespace returned by
                :py:meth:`argparse.ArgumentParser.parse_args`
        """
        if args.javac_ignore:
            self._ignore = args.javac_ignore
