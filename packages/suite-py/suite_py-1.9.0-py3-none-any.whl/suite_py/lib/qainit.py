# -*- encoding: utf-8 -*-
import subprocess
import yaml

from suite_py.lib.logger import Logger
from suite_py.lib.config import Config
from suite_py.lib.handler import git_handler as git
from suite_py.lib.handler.github_handler import GithubHandler


config = Config()
logger = Logger()
github = GithubHandler()

# development only
# twig_command = "{}/twig-binaries/bin/twig-feature".format(
#     config.load()["user"]["projects_home"]
# )

qainit_dir = f"{config.load()['user']['projects_home']}/qainit"


def get_qa_projects():
    git.check_repo_cloned("qainit")
    git.sync("qainit")
    with open(f"{qainit_dir}/projects.yml", "r") as file:
        branches_obj = yaml.safe_load(file.read())

    return list(branches_obj.keys())


def qainit_deploy(args):
    with open(f"{qainit_dir}/suitepy-projects.yml", "w+") as file:
        file.write(args)

    return subprocess.run(
        # [twig_command, "suite", "deploy"], # development only
        ["twig", "feature", "suite", "deploy"],
        cwd=qainit_dir,
        check=True,
    )


def qainit_shutdown(youtrack_id):
    git.check_repo_cloned("qainit")
    git.sync("qainit")
    branch = git.search_remote_branch("qainit", f"*{youtrack_id}*")
    if branch:
        git.checkout("qainit", branch)
        git.commit("qainit", "shutdown", dummy=True)
        git.push("qainit", branch)

    else:
        logger.warning(
            "Non sono riuscito a trovare un qa per questa issue, se il qa esiste, per favore spegnilo manualmente\nDevops are watching you! ( •͡˘ _•͡˘)"
        )
