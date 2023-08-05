#!/usr/bin/env python3

"""
The file containing the main function for the bot, as well as all the command line argument parsing
required to make the bot easily configurable.
"""

import logging
import argparse

from rr_bot.rhythm import RegressionRhythm, WaitForUserRhythm
from rr_bot.tower import RingingRoomTower
from rr_bot.bot import Bot
from rr_bot.page_parser import get_load_balancing_url
from rr_bot.row_generation import RowGenerator, ComplibCompositionGenerator
from rr_bot.row_generation import MethodPlaceNotationGenerator


def row_generator(args):
    """ Generates a row generator according to the given CLI arguments. """

    if "comp" in args and args.comp is not None:
        row_gen = ComplibCompositionGenerator(args.comp)
    elif "method" in args:
        row_gen = MethodPlaceNotationGenerator(args.method)
    else:
        assert False, \
            "This shouldn't be possible because one of --method and --comp should always be defined"

    # row_gen = PlainHuntGenerator(8)
    # row_gen = PlaceNotationGenerator(8, "x1", bob={1: "6"})
    # row_gen = DixonoidsGenerator(6, DixonoidsGenerator.DixonsRules)
    # row_gen = PlaceNotationGenerator.stedman(11)

    return row_gen


def rhythm(args):
    """ Generates a rhythm object according to the given CLI arguments. """

    regression = RegressionRhythm(args.inertia)

    if args.wait:
        return WaitForUserRhythm(regression)

    return regression


def configure_logging():
    """ Sets up the logging for the bot. """

    logging.basicConfig(level=logging.WARNING)

    logging.getLogger(RingingRoomTower.logger_name).setLevel(logging.INFO)
    logging.getLogger(RowGenerator.logger_name).setLevel(logging.INFO)
    logging.getLogger(RegressionRhythm.logger_name).setLevel(logging.INFO)
    logging.getLogger(WaitForUserRhythm.logger_name).setLevel(logging.INFO)


def main():
    """
    The main function of the bot.
    This parses the CLI arguments, creates the Rhythm, RowGenerator and Bot objects, then starts
    the bot's mainloop.
    """

    # Parse the arguments
    parser = argparse.ArgumentParser(
        description="A bot to fill in bells during ringingroom.com practices"
    )

    parser.add_argument(
        "room_id",
        type=int,
        help="The numerical ID of the tower to join, represented as a row on 9 bells, \
              e.g. 763451928."
    )
    parser.add_argument(
        "--url",
        default="https://ringingroom.com",
        type=str,
        help="The URL of the server to join (defaults to 'https://ringingroom.com')"
    )
    parser.add_argument(
        "-u", "--use-up-down-in",
        action="store_true",
        help="If set, then the bot will automatically go into changes after two rounds have been \
              rung."
    )
    parser.add_argument(
        "-s", "--stop-at-rounds",
        action="store_true",
        help="If set, then the bot will stand its bells after rounds is reached."
    )
    parser.add_argument(
        "-H", "--handbell-style",
        action="store_true",
        help="If set, then the bot will ring 'handbell style', i.e. ringing two strokes of \
              rounds then straight into changes, and stopping at the first set of rounds. By \
              default, it will ring 'towerbell style', i.e. only taking instructions from the \
              ringing-room calls. This is equivalent to using the '-us' flags."
    )

    # Rhythm arguments
    parser.add_argument(
        "-w", "--wait",
        action="store_true",
        help="If set, the bot will wait for users to ring rather than pushing on with the rhythm."
    )

    parser.add_argument(
        "-i", "--inertia",
        type=float,
        default=0.5,
        help="Overrides the bot's 'inertia' - now much the bot will take other ringers' positions \
              into account when deciding when to ring.  0.0 means it will cling as closely as \
              possible to the current rhythm, 1.0 means that it will completely ignore the other \
              ringers. By default, it will set a value depending on what proportion of the bells \
              are user controlled."
    )

    # Row generator arguments
    row_gen_group = parser.add_mutually_exclusive_group(required=True)
    row_gen_group.add_argument(
        "--comp",
        type=int,
        help="The ID of the complib composition you want to ring"
    )
    row_gen_group.add_argument(
        "--method",
        type=str,
        help="The title of the method you want to ring"
    )

    args = parser.parse_args()

    # Run the program
    configure_logging()

    tower = RingingRoomTower(args.room_id, get_load_balancing_url(args.room_id, args.url))
    bot = Bot(tower, row_generator(args), args.use_up_down_in or args.handbell_style,
              args.stop_at_rounds or args.handbell_style, rhythm=rhythm(args))

    with tower:
        tower.wait_loaded()

        print("=== LOADED ===")

        bot.main_loop()


if __name__ == "__main__":
    main()
