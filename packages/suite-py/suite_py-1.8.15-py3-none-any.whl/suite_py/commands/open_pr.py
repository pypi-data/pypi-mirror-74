# -*- encoding: utf-8 -*-
import sys

from github import GithubException

from suite_py.lib.handler.youtrack_handler import YoutrackHandler
from suite_py.lib.handler.github_handler import GithubHandler
from suite_py.lib.logger import Logger
from suite_py.lib.config import Config
from suite_py.lib.handler import git_handler as git
from suite_py.lib.handler import prompt_utils
from suite_py.commands import ask_review


youtrack = YoutrackHandler()
github = GithubHandler()
config = Config()
logger = Logger()


def entrypoint(project):
    branch_name = git.current_branch_name(project)

    if not git.remote_branch_exists(project, branch_name):
        logger.warning(f"Non ho trovato il branch {branch_name} su GitHub")
        if prompt_utils.ask_confirm("Vuoi commitare tutti i file e pusharlo?"):
            git.add(project)
            git.commit(project, "Initial commit")
            git.push(project, branch_name)
        else:
            logger.error("Per favore esegui un 'git push' manualmente")
            sys.exit(-1)

    youtrack_id = youtrack.get_card_from_name(branch_name)
    if youtrack_id:
        pulls = github.get_pr_from_branch(project, branch_name)
        if pulls.totalCount:
            pr = pulls[0]
            logger.info(
                f"Esiste una pull request su GitHub per il branch {branch_name}"
            )

            if prompt_utils.ask_confirm(
                "Vuoi modificare la description della pull request?"
            ):
                edit_pr(pr)
                sys.exit(0)

        else:
            create_pr(project, branch_name, youtrack_id)
    else:
        logger.warning(
            "Non sono riuscito a trovare una issue YouTrack nel nome del branch o la issue indicata non esiste"
        )
        if not prompt_utils.ask_confirm(
            "Vuoi collegare la pull request con una issue?"
        ):
            create_pr(project, branch_name)
        else:
            create_pr(project, branch_name, ask_for_id_card())


def edit_pr(pr):
    pr_body = ask_for_description(pr.body)
    pr.edit(body=pr_body)
    logger.info("Pull request modificata")


def create_pr(repo, branch_name, id_card=None):
    if id_card:
        logger.info(
            f"Creo una pull request sul progetto {repo} per il branch {branch_name} collegato con la card {id_card}"
        )
        link = youtrack.get_link(id_card)
        title = f"[{id_card}]: {youtrack.get_issue(id_card)['summary']}"
    else:
        logger.warning(
            f"Creo una pull request sul progetto {repo} per il branch {branch_name} SENZA collegamenti a YouTrack"
        )
        link = ""
        title = ask_for_title()

    base_branch = ask_for_base_branch()
    pr_body = ask_for_description()

    body = f"{link} \n\n {pr_body}"

    is_draft = prompt_utils.ask_confirm(
        "Vuoi aprire la pull request come draft?", default=False
    )

    try:
        pr = github.create_pr(repo, branch_name, title, body, base_branch, is_draft)
        logger.info(f"Pull request numero {pr.number} creata! {pr.html_url}")
    except GithubException as e:
        logger.error("Errore durante la richiesta a GitHub: ")
        logger.error(e.data["errors"][0])
        sys.exit(-1)

    if id_card:
        update_card(id_card, repo, pr.html_url)
        logger.info(f"Inserito link della pull request nella card {id_card}")

    if prompt_utils.ask_confirm("Vuoi inserire i reviewers?"):
        ask_review.entrypoint(repo, config.load()["user"]["captainhook_timeout"])


def ask_for_base_branch():
    branch = prompt_utils.ask_questions_input(
        "Inserisci il base branch della pull request: ", "master"
    )
    return branch


def ask_for_description(pr_body=""):
    input(
        "Inserisci la description della pull request. Premendo invio si aprira l'editor di default"
    )
    description = prompt_utils.ask_questions_editor(
        "Inserisci la description della PR: ", pr_body
    )
    if description == "":
        logger.warning("La descrizione della pull request non può essere vuota")
        return ask_for_description(pr_body)
    return description


def ask_for_id_card():
    id_card = prompt_utils.ask_questions_input(
        "Inserisci ID della card (ex: PRIMA-1234): "
    )
    if youtrack.validate_issue(id_card):
        return id_card
    logger.error("ID non esistente su YouTrack")
    return ask_for_id_card()


def update_card(id_card, repo, link):
    youtrack.comment(id_card, f"PR {repo} -> {link}")


def ask_for_title():
    title = prompt_utils.ask_questions_input("Inserisci il titolo della pull request: ")
    if title == "":
        logger.warning("Il titolo della pull request non può essere vuoto")
        return ask_for_title()
    return title
