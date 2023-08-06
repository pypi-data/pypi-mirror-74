# -*- coding: utf-8 -*-
import sys

from suite_py.lib.handler.youtrack_handler import YoutrackHandler
from suite_py.lib.handler import git_handler as git
from suite_py.lib.logger import Logger
from suite_py.lib.qainit import qainit_shutdown


youtrack = YoutrackHandler()
logger = Logger()


def entrypoint(project):
    branch_name = git.current_branch_name(project)

    logger.info("Spengo il qa se esite...")
    qainit_shutdown(branch_name)

    sys.exit()
