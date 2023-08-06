# -*- coding: utf-8 -*-
import click
import json
from ..utils.spinner import (
    init_spinner,
    start_spinner,
    stop_spinner,
)
from ..utils.print import (
    tbprint,
    eprint,
    oprint,
    opprint,
)


@click.group()
@click.pass_obj
@click.pass_context
def file(ctx, obj):
    """DNA Center File API (version: 1.3.3).

    Wraps the DNA Center File API and exposes the API as native Python commands.

    """
    ctx.obj = obj.file


@file.command()
@click.option('--headers', type=str, help='''Dictionary of HTTP Headers to send with the Request.''',
              default=None,
              show_default=True)
@click.option('-pp', '--pretty_print', type=int, help='''Pretty print indent''',
              default=None,
              show_default=True)
@click.option('--beep', is_flag=True, help='''Spinner beep (on)''')
@click.pass_obj
def get_list_of_available_namespaces(obj, pretty_print, beep,
                                     headers):
    """Returns list of available namespaces.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        result = obj.get_list_of_available_namespaces(
            headers=headers)
        stop_spinner(spinner)
        opprint(result, indent=pretty_print)
    except Exception as e:
        stop_spinner(spinner)
        tbprint()
        eprint('Error:', e)
        click.Context.exit(-1)


@file.command()
@click.option('--name_space', type=str,
              help='''A listing of fileId's.''',
              required=True,
              show_default=True)
@click.option('--headers', type=str, help='''Dictionary of HTTP Headers to send with the Request.''',
              default=None,
              show_default=True)
@click.option('-pp', '--pretty_print', type=int, help='''Pretty print indent''',
              default=None,
              show_default=True)
@click.option('--beep', is_flag=True, help='''Spinner beep (on)''')
@click.pass_obj
def get_list_of_files(obj, pretty_print, beep,
                      name_space,
                      headers):
    """Returns list of files under a specific namespace.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        result = obj.get_list_of_files(
            name_space=name_space,
            headers=headers)
        stop_spinner(spinner)
        opprint(result, indent=pretty_print)
    except Exception as e:
        stop_spinner(spinner)
        tbprint()
        eprint('Error:', e)
        click.Context.exit(-1)


@file.command()
@click.option('--file_id', type=str,
              help='''File Identification number.''',
              required=True,
              show_default=True)
@click.option('--dirpath', type=str,
              help='''Directory absolute path. Defaults to os.getcwd().''',
              required=False,
              show_default=True)
@click.option('--save_file', type=bool,
              help='''Enable or disable automatic file creation of raw response.''',
              required=False,
              show_default=True)
@click.option('--headers', type=str, help='''Dictionary of HTTP Headers to send with the Request.''',
              default=None,
              show_default=True)
@click.option('-pp', '--pretty_print', type=int, help='''Pretty print indent''',
              default=None,
              show_default=True)
@click.option('--beep', is_flag=True, help='''Spinner beep (on)''')
@click.pass_obj
def download_a_file_by_fileid(obj, pretty_print, beep,
                              file_id,
                              dirpath,
                              save_file,
                              headers):
    """Downloads a file specified by fileId.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        result = obj.download_a_file_by_fileid(
            file_id=file_id,
            dirpath=dirpath,
            save_file=save_file,
            headers=headers)
        stop_spinner(spinner)
        opprint(result, indent=pretty_print)
    except Exception as e:
        stop_spinner(spinner)
        tbprint()
        eprint('Error:', e)
        click.Context.exit(-1)
