# -*- coding: utf-8 -*-

"""Console script for chibi_xl_deploy."""
import argparse
import sys


def main():
    """Console script for chibi_xl_deploy."""
    parser = argparse.ArgumentParser()
    parser.add_argument('_', nargs='*')
    args = parser.parse_args()

    print("Arguments: " + str(args._))
    print("Replace this message by putting your code into "
          "chibi_xl_deploy.cli.main")
    return 0


if __name__ == "__main__":
    sys.exit(main())  # pragma: no cover
