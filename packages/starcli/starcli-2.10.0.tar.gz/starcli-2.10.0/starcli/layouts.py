""" starcli.layouts """

# Standard library imports
import textwrap
import math
from shutil import get_terminal_size

# Third party imports
from rich.align import Align
from rich.console import Console, render_group
from rich.rule import Rule
from rich.table import Table
from rich.text import Text
from rich.panel import Panel
from rich.columns import Columns


def shorten_count(number):
    """Shortens number"""
    if number < 1000:
        return str(number)

    number = int(number)
    new_number = math.ceil(round(number / 100.0, 1)) * 100

    if new_number % 1000 == 0:
        return str(new_number)[0] + "k"
    if new_number < 1000:
        # returns the same old integer if no changes were made
        return number
    else:
        # returns a new string if the number was shortened
        return str(new_number / 1000.0) + "k"


def list_layout(repos):
    """ Displays repositories in list layout using rich """

    LAYOUT_WIDTH = 80

    @render_group()
    def render_repo(repo):
        """Yields renderables for a single repo."""
        yield Rule(style="bright_yellow")
        yield ""
        # Table with description and stats
        title_table = Table.grid(padding=(0, 1))
        title_table.expand = True
        stats = "{stargazers_count} ⭐ {forks_count} 🍴 {watchers_count} 👀".format(**repo)
        title = Text(repo["full_name"], overflow="fold")
        title.stylize_all(f"yellow link {repo['html_url']}")
        title_table.add_row(title, Text(stats, style="bold blue"))
        title_table.columns[1].no_wrap = True
        title_table.columns[1].justify = "right"
        yield title_table
        yield ""
        # Language
        language = repo["language"]
        if language:
            yield Text(language, style="bold cyan")
        else:
            yield "[i cyan]unknown language"
        yield ""
        # Descripion
        description = repo["description"]
        if description:
            yield Text(description.strip(), style="green")
        else:
            yield "[i green]no description"
        yield ""

    def column(renderable):
        """Constrain width and align to center to create a column."""
        return Align.center(renderable, width=LAYOUT_WIDTH, pad=False)

    console = Console()  # initialise rich
    for repo in repos:
        console.print(column(render_repo(repo)))
    console.print(column(Rule(style="bright_yellow")))


def table_layout(repos):
    """ Displays repositories in a table format using rich """

    table = Table(leading=1)

    # make the columns
    table.add_column("Name", style="bold cyan")
    table.add_column("Language", style="green")
    table.add_column("Description", style="blue")
    table.add_column("Stats", style="magenta")

    for repo in repos:

        stats = (  # construct the stats info
            str(repo["stargazers_count"])
            + "⭐, "
            + str(repo["forks_count"])
            + "🍴, "
            + str(repo["watchers_count"])
            + "👀"
        )

        if not repo["language"]:  # if language is not provided
            repo["language"] = "None"  # make it a string
        if not repo["description"]:  # same here
            repo["description"] = "None"

        table.add_row(
            repo["name"],
            repo["language"],  # so that it can work here
            repo["description"],
            stats,
        )

    console = Console()
    console.print(table)


def grid_layout(repos):
    """ Displays repositories in a grid format using rich """

    max_desc_len = 90

    panels = []
    for repo in repos:

        # constructing the stats info
        stats = (
            str(repo["stargazers_count"])
            + "⭐, "
            + str(repo["forks_count"])
            + "🍴, "
            + str(repo["watchers_count"])
            + "👀"
        )

        if not repo["language"]:  # if language is not provided
            repo["language"] = "None"  # make it a string
        if not repo["description"]:
            repo["description"] = "None"

        name = Text(repo["name"], style="bold yellow")
        language = Text(repo["language"], style="magenta")
        description = Text(repo["description"], style="green")
        stats = Text(stats, style="blue")

        # truncate rest of the description if
        # it's more than 90 (max_desc_len) chars
        # using truncate() is better because it also
        # takes care of asian characters
        description.truncate(max_desc_len, overflow="ellipsis")

        repo_summary = Text.assemble(
            name, "\n", stats, "\n", language, "\n", description,
        )
        panels.append(Panel(repo_summary, expand=True))

    console = Console()
    console.print((Columns(panels, width=30, expand=True)))
