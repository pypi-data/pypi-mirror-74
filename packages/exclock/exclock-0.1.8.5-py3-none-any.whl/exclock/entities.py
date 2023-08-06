#!/usr/bin/env python
# -*- coding: utf-8 -*-

from __future__ import annotations

from dataclasses import dataclass
from time import sleep as time_sleep
from typing import Callable, Dict, List, Optional

import vlc

from exclock.util import get_real_sound_filename, get_time_delta_from_str, notify_all

DEFAULT_TITLE = "ExClock"


def inner_str(s: str, d: dict) -> str:
    start_secs: List[int] = []
    end_secs: List[int] = []
    for i, c in enumerate(s):
        if len(start_secs) == len(end_secs) and c == "{":
            start_secs.append(i)
        if len(start_secs) == len(end_secs) + 1 and c == "}":
            end_secs.append(i)

    calcs = dict()
    for start, end in zip(start_secs, end_secs):
        target = s[start + 1:end]
        calcs[target] = eval(target, {}, d)

    for key, val in calcs.items():
        s = s.replace("{" + key + "}", str(val))
    return s


def confirm_dummy() -> None:
    ...


def confirm_input() -> None:
    input(">>> ")


def conv_confirm_f(s: str) -> Callable:
    s = s.lower()
    if s == 'input':
        return confirm_input
    else:
        return confirm_dummy


@dataclass
class Sound:
    message: str
    sound_filename: str
    confirm_f: Callable

    def __post_init__(self) -> None:
        self.sound_filename = get_real_sound_filename(self.sound_filename)

    def run(self) -> vlc.MediaPlayer:
        p = vlc.MediaPlayer(self.sound_filename)
        p.play()
        return p

    @classmethod
    def from_dict(cls, json: dict) -> Sound:
        return Sound(
            message=json["message"],
            sound_filename=json["sound_filename"],
            confirm_f=conv_confirm_f(json.get("confirm", "")))

    def __eq__(self, other) -> bool:
        return self.message == other.message and self.sound_filename == other.sound_filename


def any_ended_sounds(ps: List[vlc.MediaPlayer]) -> bool:
    for p in ps:
        if p.get_state() != vlc.State.Ended:
            return False

    return True


@dataclass
class ClockTimer:
    sounds: Dict[int, Sound]  # Dict from sec to sound
    loop: Optional[int]
    title: str

    @property
    def sorted_sounds(self) -> Dict[int, Sound]:
        return {sec: self.sounds[sec] for sec in sorted(self.sounds)}

    def run_once(self, count: int) -> None:
        sounds = self.sorted_sounds

        ps = []

        secs = list(sounds.keys())
        for i, (sec, sound) in enumerate(sounds.items()):
            spend_time = secs[i] - (0 if i == 0 else secs[i - 1])
            message = inner_str(sound.message, {"count": count})
            notify_all(
                title=self.title,
                message=message,
                spend_time=spend_time,
                is_first=sec == 0 and count == 1)

            ps.append(sound.run())
            sound.confirm_f()

        while not any_ended_sounds(ps):
            time_sleep(1)

    def run(self) -> None:
        count = 1
        if isinstance(self.loop, int):
            for _ in range(self.loop):
                self.run_once(count=count)
                count += 1
        else:
            while True:
                self.run_once(count=count)
                count += 1

    @classmethod
    def from_dict(cls, json: dict) -> ClockTimer:
        sounds = {}
        for sec, sound in json["sounds"].items():
            sec = get_time_delta_from_str(sec)
            sounds[sec] = Sound.from_dict(sound)

        return ClockTimer(sounds=sounds, loop=json["loop"], title=json["title"])
