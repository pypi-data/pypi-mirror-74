# -*- coding: utf-8 -*-
import subprocess
import sys
import yaml

from halo import Halo

from suite_py.lib.handler.youtrack_handler import YoutrackHandler
from suite_py.lib.handler.github_handler import GithubHandler
from suite_py.lib.handler import git_handler as git
from suite_py.lib.handler import drone_handler as drone
from suite_py.lib.handler import prompt_utils
from suite_py.lib.logger import Logger
from suite_py.lib.qainit import get_qa_projects, qainit_deploy
from suite_py.lib.config import Config


youtrack = YoutrackHandler()
github = GithubHandler()
logger = Logger()
config = Config()


def entrypoint(project):
    qa_projects = get_qa_projects()
    if project not in qa_projects:
        logger.error(
            f"Il progetto {project} non fa parte degli ambienti di QA, niente da fare"
        )
        sys.exit(0)

    with Halo(text="Updating prima-twig...", spinner="dots", color="magenta"):
        try:
            subprocess.run(
                ["gem", "update", "prima-twig"],
                check=True,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
            )
        except Exception:
            logger.error(
                "Errore durante l'aggiornamento di prima-twig, per favore esegui manualmente `gem update prima-twig`"
            )
            sys.exit(-1)

    branch_name = git.current_branch_name(project)
    youtrack_id = youtrack.get_card_from_name(branch_name)

    if youtrack_id:
        if prompt_utils.ask_confirm(
            f"Ci sono altri progetti da aggiungere al QA che fanno riferimento alla card {youtrack_id}?",
            default=False,
        ):
            twig_arg = multi_repo_qa(youtrack_id, qa_projects)
        else:
            twig_arg = mono_repo_qa(project, branch_name)
    else:
        logger.warning(
            "Non sono riuscito a trovare una issue YouTrack collegata al branch, non e' possibile collegare automaticamente altri progetti a questo QA"
        )
        logger.warning(
            "Se vuoi creare il QA con diversi branch su diversi progetti per favore interrompi il comando ed utilizza twig"
        )
        twig_arg = mono_repo_qa(project, branch_name)

    qainit_deploy(twig_arg)

    if youtrack_id:
        logger.info("Aggiorno la card su youtrack...")
        youtrack.update_state(youtrack_id, config.load()["youtrack"]["test_state"])

    drone_url = drone.get_last_build_url("qainit", git.get_username())
    if drone_url:
        logger.info(f"Puoi seguire la creazione del QA su {drone_url}")

    logger.info("Configurazione del QA effettuata con successo!")


def multi_repo_qa(youtrack_id, qa_projects):
    logger.info("Cerco gli altri branch su github...")
    repos = list(map(github.get_repo, qa_projects))

    selected_repos = []
    for repo in repos:
        print(".", end="", flush=True)
        for branch in repo.get_branches():
            if youtrack_id in branch.name:
                selected_repos.append((repo.name, branch))

    print(".")
    logger.info("Progetti trovati:")
    for elem in selected_repos:
        logger.info(f"{elem[0]} --> {elem[1].name}")

    return twigify(selected_repos)


def mono_repo_qa(project, branch_name):
    logger.info(f"Creo il qa con il progetto {project} e branch {branch_name}")
    gh_branch = github.get_repo(project).get_branch(branch_name)
    selected_repos = [(project, gh_branch)]

    return twigify(selected_repos)


def twigify(projects_list):
    projects_dict = {}
    for project in projects_list:
        committer = ""

        try:
            committer = project[1].commit.committer.email or ""
        except Exception:
            committer = project[1].commit.commit.committer.email or ""

        projects_dict[project[0]] = {
            "name": project[1].name,
            "revision": project[1].commit.sha[:15],
            "committer": committer,
            "default_branch": False,
        }

    return yaml.dump(projects_dict, explicit_start=True, default_flow_style=False)
