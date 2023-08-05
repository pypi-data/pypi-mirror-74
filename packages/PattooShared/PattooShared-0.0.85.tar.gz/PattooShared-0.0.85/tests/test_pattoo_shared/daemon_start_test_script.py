#!/usr/bin/env python3
"""Creates test environment for daemon to start"""

# Standard imports
import os
import sys

# Try to create a working PYTHONPATH
EXEC_DIR = os.path.dirname(os.path.realpath(__file__))
ROOT_DIR = os.path.abspath(os.path.join(
    os.path.abspath(os.path.join(EXEC_DIR, os.pardir)), os.pardir))
_EXPECTED = '{0}pattoo-shared{0}tests{0}test_pattoo_shared'.format(os.sep)
if EXEC_DIR.endswith(_EXPECTED) is True:
    # We need to prepend the path in case PattooShared has been installed
    # elsewhere on the system using PIP. This could corrupt expected results
    sys.path.insert(0, ROOT_DIR)
else:
    print('''This script is not installed in the "{0}" directory. Please fix.\
'''.format(_EXPECTED))
    sys.exit(2)

# Pattoo imports
from pattoo_shared.daemon import Daemon
from pattoo_shared.agent import Agent
from pattoo_shared.configuration import Config

# Importing MockDaemon for start test
from tests.test_pattoo_shared.test_daemon import MockDaemon, AGENT_NAME, create_agent

def start_daemon():
    """Creates a mock daemon for testing start

    Args:
        None

    Return:
        None

    """
    _agent = create_agent()

    # Setting up MockDaemon and starting process for testing
    _daemon = MockDaemon(_agent)
    _daemon.start()

def restart_daemon():
    """Creates a mock daemon for testing restart

    Args:
        None

    Return:
        None

    """
    _agent = create_agent()

    # Setting up MockDaemon and testing restart method
    _daemon = MockDaemon(_agent)
    _daemon.restart()

def daemonize_daemon():
    """Creates a mock daemon for testing daemonizing

    Args:
        None

    Return:
        None

    """
    _agent = create_agent()

    # Setting up MockDaemon and testing daemonize method
    _daemon = MockDaemon(_agent)
    _daemon._daemonize()

if __name__ == '__main__':
    command = sys.argv[1]

    if command == '--start':
        start_daemon()
    elif command == '--restart':
        restart_daemon()
    elif command == '--daemonize':
        daemonize_daemon()
    else:
        print('No command matches')
