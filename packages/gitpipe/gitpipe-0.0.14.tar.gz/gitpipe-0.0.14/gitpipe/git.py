"""
git.py
written in Python3
author: C. Lockhart <chris@lockhartlab.org>
"""

from subprocess import Popen, PIPE
import sys

# Contents
__all__ = [
    'Git'
]


# Class to help with git version control
# TODO clean up this method, _execute could be written more elegantly
class Git:
    """
    This class allows one to upload and retrieve files from a git repository
    """

    # Initialize version of Git class
    def __init__(self, cwd='.'):
        """
        Initialize an instance of ``Git``

        Parameters
        ----------
        cwd : str
            Current working directory (Default: '.')
        """

        self.cwd = cwd

    # Helper function to execute git commands
    def _execute(self, cmd, verbose=True, output=False):
        """
        Execute git commands

        Parameters
        ----------
        cmd : str
            Command to be executed, e.g., "git push origin master"
        verbose : bool
            Should the command be outputted? (Default: True)
        """

        # Do we need to add "git" to the command?
        # if cmd[:3] != 'git':
        #     cmd = 'git ' + cmd

        # If verbose, output the command
        if verbose:
            print(cmd)

        # Run the command and wait for it to finish
        process = Popen(cmd, stdout=PIPE, stderr=PIPE, cwd=self.cwd, shell=True)
        process.wait()
        if process.poll() != 0:
            raise RuntimeError('error with gitpipe: %s' % process.communicate()[1].strip().decode('UTF-8'))

        # Output?
        if output:
            return process.communicate()[0].strip().decode('UTF-8')

    # Add files to the repository
    def add(self, filename='', options=''):
        """
        Add files to the git repository

        Parameters
        ----------
        filename : str
            Name of file to add (Default: '')
        options : str
            Additional options (Default: '')
        """

        self._execute('git add {0} {1}'.format(options, filename))

    # Checkout branch
    def checkout(self, branch):
        """
        Checkout a branch

        Parameters
        ----------
        branch : str
            Branch to checkout
        """

        self._execute('git checkout {}'.format(branch))

    # Commit files
    def commit(self, message=''):
        """
        Commit files to the git repository

        Parameters
        ----------
        message : str
            Commit message
        """

        self._execute('git commit -m "{}"'.format(message))

    # Get the current branch
    def get_branch(self):
        """
        Return the name of the current branch

        Returns
        -------
        str
            Name of current branch
        """

        return self._execute('git rev-parse --abbrev-ref HEAD', output=True)

    # Merge branch to the current one
    def merge(self, branch, options=''):
        """
        Merge `branch` to current

        Parameters
        ----------
        branch : str
            Branch to merge
        options : str
            (Optional) arguments (Default: '')
        """

        self._execute('git merge {0} {1}'.format(branch, options))

    # Push branch to remote
    def push(self, remote='origin', branch='master', options=None):
        """
        Push committed files in `branch` to `remote`

        Parameters
        ----------
        remote : str
            Remote (Default: 'origin')
        branch : str
            Branch (Default: 'master')
        options : str
            (Optional) arguments (Default: '')
        """

        if options is None:
            options = ''

        self._execute('git push {0} {1} {2}'.format(remote, branch, options))

    # Tag the commit
    def tag(self, tag):
        """
        Tag the commit

        Parameters
        ----------
        tag : str
            Tag
        """
        self._execute('git tag {}'.format(tag))

    # Which git executable are we using?
    def which(self):
        """
        Which git executable are we using?
        """

        # If we use Windows, we can get the location with where; otherwise, use which
        if sys.platform == 'win32':
            cmd = 'where git'
        else:
            cmd = 'which git'

        # Execute the command
        return self._execute(cmd, output=True)
