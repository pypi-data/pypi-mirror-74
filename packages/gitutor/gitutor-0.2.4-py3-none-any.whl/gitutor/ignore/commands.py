import os
import re
import click
import difflib
from pprint import pprint
from PyInquirer import prompt

def get_files(path:str, git_path:str):
    '''
    Get all files in path, including hidden files
    '''
    files = os.listdir(path)

    # remove git files from list
    for f in ['.git', '.gitignore', '.github']:
        try:
            files.remove(f)
        except:
            pass
    
    # get dir relative path to git's repo
    relative_path = ''.join([x[-1] for x in difflib.ndiff(path, git_path) if x[0] == '-'])
    relative_path = re.sub('^/', '', relative_path)

    # create dictionary with files (key is the plain file name)
    dir_files = {}
    for key in files:
        full_path = '{}/{}'.format(path,key)
        folder = os.path.isdir(full_path)

        if folder: key = key + '/'

        dir_files[key] = {
            'file_name': '{}/{}'.format(relative_path, key) if len(relative_path) > 1 else key,
            'is_folder': folder
        }

    return dir_files

def get_gitignore_files(git_path:str):  
    '''
    Get the files that already are in the .gitignore file
    '''
    gitignore_path = git_path + '/.gitignore'
    files = []

    if os.path.exists(gitignore_path):
        with open(gitignore_path, 'r') as _:
            files = re.sub(r'\n$', '', _.read())

        files = files.split("\n")

    return files

def create_choices(dir_files:dict, gitignore_files:list):
    '''
    Create choices list for the interactive menu.
    Files in .gitignore are checked
    '''
    choices = []

    for file in dir_files:
        choice = {
            'name': file
        }

        if dir_files[file]['file_name'] in gitignore_files:
            choice['checked'] = True

        choices.append(choice)

    return choices

def update_gitignore(answers:list, dir_files:dict, gitignore_files:list, git_path: str):
    '''
    Update gitignore file
    '''
    new_files = []

    for file in answers:
        # add new files to gitignore
        if dir_files[file]['file_name'] not in gitignore_files:
            gitignore_files.append(dir_files[file]['file_name'])  
            new_files.append(file)

    gitignore = '\n'.join(gitignore_files)

    # write gitignore file
    gitignore_path = '{}/.gitignore'.format(git_path)
    with open(gitignore_path, 'w') as _:
        _.write(gitignore)

    return new_files

def remove_tracked_files(ignored_files:list, repo):
    '''
    Remove tracked files in gitignore from repo
    '''
    tracked_files = repo.git.execute(["git", "ls-files", "-i", "--exclude-standard"])
    
    if len(tracked_files) > 0:
        repo.git.rm(tracked_files, "-r", "--cached")
        repo.git.commit("-m", "Remove ignored files from repo")

@click.command()
@click.pass_context
def ignore(ctx):
    '''
    Add files to gitignore
    '''
    # recover repository's object from context
    repo = ctx.obj['REPO']

    # get current ignored files
    git_path = repo.working_tree_dir
    ignored_files = get_gitignore_files(git_path)

    # get files in current directory
    full_path = os.getcwd()
    dir_files = get_files(full_path, git_path)

    questions = [
        {
            'type': 'checkbox',
            'message': 'Select files to ignore',
            'name': 'files',
            'choices': create_choices(dir_files, ignored_files)
        }
    ]

    answers = prompt(questions)

    if 'files' in answers:
        new_ignored_files = update_gitignore(answers['files'], dir_files, ignored_files, git_path)
        remove_tracked_files(new_ignored_files, repo)