"""Commandline setup for snapchat_dl."""
import concurrent.futures
import re
import sys
import time
from threading import Event
from threading import Thread

import pyperclip
from loguru import logger

from snapchat_dl.cli import parse_arguments
from snapchat_dl.snapchat_dl import SnapchatDL
from snapchat_dl.utils import search_usernames
from snapchat_dl.utils import use_batch_file
from snapchat_dl.utils import use_prefix_dir


def main():
    """Download user stories from Snapchat."""
    args = parse_arguments()
    usernames = args.username + use_batch_file(args) + use_prefix_dir(args)

    downlaoder = SnapchatDL(
        directory_prefix=args.save_prefix,
        max_workers=args.max_workers,
        limit_story=args.limit_story,
        quiet=args.quiet,
    )

    history = list()

    def download_users(users: list, respect_history=False):
        """Download user story from usernames.

        Args:
            users (list): List of usernames to download.
            respect_history (bool, optional): append username to history. Defaults to False.
            log_str (str, optional): Log log_str to terminal. Defaults to None.
        """
        for username in users:
            if respect_history is True:
                if username not in history:
                    history.append(username)
                    downlaoder.download(username)
            else:
                downlaoder.download(username)

    try:
        download_users(usernames)
        if args.scan_clipboard is True:
            if args.quiet is False:
                logger.info("Listening for clipboard change")

            while True:
                usernames = search_usernames(pyperclip.paste())
                if args.quiet is False and len(usernames) > 0:
                    logger.info("Adding {} user to download".format(len(usernames)))
                download_users(usernames, respect_history=True)

                time.sleep(1)

        if args.check_update is True:
            if args.quiet is False:
                logger.info(
                    "Scheduling story updates for {} users".format(len(usernames))
                )

            while True:
                started_at = int(time.time())
                download_users(usernames)
                if started_at < args.interval:
                    time.sleep(args.interval - started_at)

    except KeyboardInterrupt:
        exit(0)


if __name__ == "__main__":
    sys.exit(main())
