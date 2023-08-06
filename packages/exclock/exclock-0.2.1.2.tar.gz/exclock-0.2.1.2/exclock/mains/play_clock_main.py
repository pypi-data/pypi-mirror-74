#!/usr/bin/env python
# -*- coding: utf-8 -*-

from pathlib import Path
from sys import exit, stderr

import json5 as json

from exclock.entities import ClockTimer
from exclock.util import get_real_json_filename, get_real_sound_filename, is_time_delta_str


def get_title_from_json_filename(json_filename: str) -> str:
    basename = Path(json_filename).name
    return basename.split('.')[0].capitalize()


def check_raw_clock(d) -> None:
    if type(d) != dict:
        raise ValueError("clock file err: doesn't mean dict.")

    if "sounds" not in d:
        raise ValueError("clock file err: doesn't include sounds property.")

    if type(d["sounds"]) != dict:
        raise ValueError("clock file err: sounds is not dict object.")

    loop_number = d.get("loop", 1)
    if type(loop_number) != int and loop_number is not None:
        raise ValueError("clock file err: loop is not int object more than or equal to zero.")

    if type(d.get("title", "")) != str:
        raise ValueError("clock file err: title is not str object.")

    for time_s, sound in d["sounds"].items():
        if not is_time_delta_str(time_s):
            raise ValueError(f"clock file err: {time_s} is not time.")
        if type(sound) != dict:
            raise ValueError(f"clock file err: sound at {time_s} is not dict object.")
        if "message" not in sound:
            raise ValueError(f"clock file err: message is not defined at {time_s}.")
        if type(sound["message"]) != str:
            raise ValueError(f"clock file err: message is not str object at {time_s}")
        if "sound_filename" not in sound:
            raise ValueError(f"clock file err: sound_filename is not defined at {time_s}.")
        if type(sound["sound_filename"]) != str:
            raise ValueError(f"clock file err: sound_filename is not str object at {time_s}")

        filename = get_real_sound_filename(sound["sound_filename"])
        if not Path(filename).exists():
            raise FileNotFoundError(f"clock file err: {sound['sound_filename']} is not found.")


def main(opt, args) -> None:
    if len(args) != 1:
        print("Length of argument should be 1.", file=stderr)
        exit(1)

    json_filename = get_real_json_filename(args[0])
    try:
        with open(json_filename) as f:
            jdata = json.load(f)
    except ValueError as err:
        print(
            f"{json_filename} is Incorrect format for json5:\n" + f"    {err.args[0]}",
            file=stderr)
        exit(1)
    except FileNotFoundError:
        print(f"{args[0]} is not found.", file=stderr)
        exit(1)

    try:
        check_raw_clock(jdata)
    except Exception as err:
        print(err.args[0], file=stderr)
        exit(1)

    jdata['title'] = jdata.get('title', get_title_from_json_filename(json_filename))
    clock_timer = ClockTimer.from_dict(jdata)
    try:
        clock_timer.run()
    except KeyboardInterrupt:
        ...
    finally:
        print('bye')
