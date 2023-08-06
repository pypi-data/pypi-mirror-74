#!/usr/bin/env python
import argparse
import sys
from os.path import dirname, join, abspath
from .repo import fetch_code, ungitify, complete_url
from .template import read
from .replace import replace_strings

root = abspath(join(dirname(__file__), '.')) # The root of this file

def get_options(args=sys.argv[1:]):
    parser = argparse.ArgumentParser(description='Generates new project from an existing repository')
    parser.add_argument('project', type=str, help='name of the project you want to create')
    parser.add_argument('url', type=str, help='url of the repository you want to base this project on')
    parser.add_argument('-p', '--preserve', dest='preserve', action='store_true' ,help='preserve the git history of the template')
    # parser.add_argument('-v', '--verbose', dest='verbose', action='store_true', help='display extra information such as diffs')
    # parser.add_argument('-k', '--keep', dest='keep', action='store_true', help='keep the .new.yml config file')
    return parser.parse_args(args)

def print_repo_details(project_name, git_url):
    print(f'Project name: {project_name}\nGit URL: {git_url}')

def main():
    options = get_options()
    url = complete_url(options.url)

    print_repo_details(options.project, url)
    fetch_code(options.project, url)
    if not options.preserve:
        ungitify(options.project)
    else:
        print('Preserving git history')
    stringmap = read(options.project)
    replace_strings(options.project, stringmap)

if __name__ == "__main__":
    main()
