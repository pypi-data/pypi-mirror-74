#!/usr/bin/env python
# -*- coding: utf-8 -*-

from typing import Tuple
from unittest import mock

import pytest

from exclock.util import (
    CLOCK_DIR_IN_PROG,
    SOUND_DIR_IN_PROG,
    convert_specific_time_to_time_delta,
    get_clock_basenames,
    get_real_json_filename,
    get_real_sound_filename,
    get_specific_time_from_str,
    get_time_delta_from_str,
    is_specific_time_str,
    is_time_delta_str,
)

from .test_const import TEST_CLOCK_DIR_IN_SYS, TEST_SOUND_DIR_IN_SYS

GET_CLOCK_BASENAMES_PARAMS = [
    ("pomodoro", True),
    ("3", True),
    ("not_exists", False),
]


@pytest.mark.parametrize("basename, expect", GET_CLOCK_BASENAMES_PARAMS)
def test_get_clock_basenames(basename: str, expect: bool):
    assert (basename in get_clock_basenames()) is expect


@mock.patch('exclock.util.CLOCK_DIR_IN_SYS', TEST_CLOCK_DIR_IN_SYS)
def test_get_clock_basenames2():
    """ 同じ名前のclockは一度だけ登場すること """
    basenames = get_clock_basenames()
    assert 'pomodoro' in basenames
    assert basenames.count('pomodoro') == 1


def test_get_clock_basenames3():
    """ ソート済みであること """
    basenames = get_clock_basenames()
    assert basenames == sorted(basenames)


@mock.patch('exclock.util.CLOCK_DIR_IN_SYS', TEST_CLOCK_DIR_IN_SYS)
def test_get_clock_basenames4():
    """ json5以外の拡張子は省略されないこと """
    assert 'clock_in_sys.json' in get_clock_basenames()


IS_TIME_STR_PARAMS = [
    ("1", True), ("abc", False), ("17m", True), ("12s", True), ("17m12s", True),
    ("17m12sklm", False)
]


@pytest.mark.parametrize("s, expect", IS_TIME_STR_PARAMS)
def test_is_time_delta_str(s: str, expect: bool):
    assert is_time_delta_str(s) is expect


GET_TIME_DELTA_FROM_STR_PARAMS = [
    ("1", 1),
    ("17m", 17 * 60),
    ("12s", 12),
    ("17m12s", 17 * 60 + 12),
]


@pytest.mark.parametrize("s, expect", GET_TIME_DELTA_FROM_STR_PARAMS)
def test_get_time_delta_from_str(s: str, expect: int):
    assert get_time_delta_from_str("3") == 3


IS_SPECIFIC_TIME_STR_PARAMS = [
    ("1 : 59", True),
    ("1", False),
    ("1 : 2 : 3 : 4", False),
    ("2 : 1a", False),
    ("1 : 60", False),
    ("13 : 59", True),
    ("59 : 59 : 59", True),
    ("60 : 59 : 59", True),
    ("60 : 59a : 59", False),
    ("59 : 59 : 60", False),
    ("59 : 60 : 59", False),
]


@pytest.mark.parametrize("s, expect", IS_SPECIFIC_TIME_STR_PARAMS)
def test_is_specific_time_str(s: str, expect: bool):
    assert is_specific_time_str(s) is expect


GET_SPECIFIC_TIME_STR_PARAMS = [
    ("1 : 59", (1, 59, 0)),
    ("13 : 59", (13, 59, 0)),
    ("59 : 59 : 59", (59, 59, 59)),
    ("60 : 59 : 59", (60, 59, 59)),
]


@pytest.mark.parametrize("s, expect", GET_SPECIFIC_TIME_STR_PARAMS)
def test_get_specific_time_from_str(s: str, expect: int):
    assert get_specific_time_from_str(s) == expect


CONVERT_SPECIFIC_TIME_TO_TIME_DELTA_PARAMS = [
    ((3, 0, 0), (1, 0, 0), 2 * 60 * 60), ((1, 0, 0), (3, 0, 0), (24 - 2) * 60 * 60)
]


@pytest.mark.parametrize("time_, now_, expect", CONVERT_SPECIFIC_TIME_TO_TIME_DELTA_PARAMS)
def test_convert_specific_time_to_time_delta(
        time_: Tuple[int, int, int], now_: Tuple[int, int, int], expect: int):
    assert convert_specific_time_to_time_delta(time_, now_) == expect


def test_get_real_json_filename():
    assert get_real_json_filename("_pomodoro") == str(CLOCK_DIR_IN_PROG / "pomodoro.json5")


@mock.patch('exclock.util.CLOCK_DIR_IN_SYS', TEST_CLOCK_DIR_IN_SYS)
def test_get_real_json_filename2():
    assert get_real_json_filename("warning.json5") == str(TEST_CLOCK_DIR_IN_SYS / "warning.json5")


def test_get_real_sound_filename():
    """ プログラムの中のwarning.mp3のフルパスを引数として渡すとwarning.mp3のフルパスが返ってくること """
    assert get_real_sound_filename(SOUND_DIR_IN_PROG / "warning.mp3") == str(
        SOUND_DIR_IN_PROG / "warning.mp3")


@mock.patch('exclock.util.SOUND_DIR_IN_SYS', TEST_SOUND_DIR_IN_SYS)
def test_get_real_sound_filename2():
    assert get_real_sound_filename("warning.mp3") == \
        str(TEST_SOUND_DIR_IN_SYS / "warning.mp3")
