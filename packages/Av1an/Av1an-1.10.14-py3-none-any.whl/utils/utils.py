#!/bin/env python

import atexit
import json
import os
import re
import statistics
import subprocess
import sys
from pathlib import Path
from subprocess import PIPE
from threading import Lock

import cv2
import numpy as np

def terminate():
    sys.exit(1)


def process_inputs(inputs):
    # Check input file for being valid
    if not inputs:
        print('No input file')
        terminate()

    if inputs[0].is_dir():
        inputs = [x for x in inputs[0].iterdir() if x.suffix in (".mkv", ".mp4", ".mov", ".avi", ".flv", ".m2ts")]

    valid = np.array([i.exists() for i in inputs])

    if not all(valid):
        print(f'File(s) do not exist: {", ".join([str(inputs[i]) for i in np.where(not valid)[0]])}')
        terminate()

    return inputs

def get_keyframes(file: Path):
    """
    Read file info and return list of all keyframes

    :param file: Path for input file
    :return: list with frame numbers of keyframes
    """

    keyframes = []

    ff = ["ffmpeg", "-hide_banner", "-i", file.as_posix(),
    "-vf", "select=eq(pict_type\,PICT_TYPE_I)",
    "-f", "null", "-loglevel", "debug", "-"]

    pipe = subprocess.Popen(ff, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)

    while True:
        line = pipe.stdout.readline().strip().decode("utf-8")

        if len(line) == 0 and pipe.poll() is not None:
            break

        match = re.search(r"n:([0-9]+)\.[0-9]+ pts:.+key:1", line)
        if match:
            keyframe = int(match.group(1))
            keyframes.append(keyframe)

    return keyframes


def get_cq(command):
    """
    Return cq values from command
    :param command: string with commands for encoder
    :return: list with frame numbers of keyframes

    """
    matches = re.findall(r"--cq-level= *([^ ]+?) ", command)
    return int(matches[-1])


def man_q(command: str, q: int):
    """Return command with new cq value"""
    if 'aomenc' in command:
        mt = '--cq-level='
        cmd = command[:command.find(mt) + 11] + str(q) + ' ' + command[command.find(mt) + 13:]
    elif 'x265' in command:
        mt = '--crf'
        cmd = command[:command.find(mt) + 6] + str(q) + ' ' +  command[command.find(mt) + 9:]

    return cmd



def frame_probe_fast(source: Path):
    video = cv2.VideoCapture(source.as_posix())
    total = int(video.get(cv2.CAP_PROP_FRAME_COUNT))
    return total


def frame_probe(source: Path):
    """Get frame count."""
    cmd = ["ffmpeg", "-hide_banner", "-i", source.as_posix(), "-map", "0:v:0", "-f", "null", "-"]
    r = subprocess.run(cmd, stdout=PIPE, stderr=PIPE)
    matches = re.findall(r"frame=\s*([0-9]+)\s", r.stderr.decode("utf-8") + r.stdout.decode("utf-8"))
    return int(matches[-1])


doneFileLock = Lock()
def frame_check(source: Path, encoded: Path, temp, check):
    """Checking is source and encoded video frame count match."""
    try:
        status_file = Path(temp / 'done.json')

        if check:
            s1 = frame_probe(source)
            doneFileLock.acquire()
            with status_file.open() as f:
                d = json.load(f)
            d['done'][source.name] = s1
            with status_file.open('w') as f:
                json.dump(d, f)
        else:
            s1, s2 = [frame_probe(i) for i in (source, encoded)]
            if s1 == s2:
                doneFileLock.acquire()
                with status_file.open() as f:
                    d = json.load(f)
                d['done'][source.name] = s1
                with status_file.open('w') as f:
                    json.dump(d, f)
            else:
                print(f'Frame Count Differ for Source {source.name}: {s2}/{s1}')
    except IndexError:
        print('Encoding failed, check validity of your encoding settings/commands and start again')
        terminate()
    except Exception as e:
        _, _, exc_tb = sys.exc_info()
        print(f'\nError frame_check: {e}\nAt line: {exc_tb.tb_lineno}\n')
    finally:
        if doneFileLock.locked():
            doneFileLock.release()


def get_brightness(video):
    """Getting average brightness value for single video."""
    brightness = []
    cap = cv2.VideoCapture(video)
    try:
        while True:
            # Capture frame-by-frame
            _, frame = cap.read()

            # Our operations on the frame come here
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

            # Display the resulting frame
            mean = cv2.mean(gray)
            brightness.append(mean[0])
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
    except cv2.error:
        pass

    # When everything done, release the capture
    cap.release()
    brig_geom = round(statistics.geometric_mean([x + 1 for x in brightness]), 1)

    return brig_geom
