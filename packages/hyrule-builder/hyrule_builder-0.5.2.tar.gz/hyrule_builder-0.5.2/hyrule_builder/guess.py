# pylint: disable=missing-docstring
from pathlib import Path
from typing import Union

from oead import yaz0


def guess_bfres_size(file: Union[Path, bytes], be: bool, name: str = "") -> int:
    if isinstance(file, bytes):
        if file[0:4] == b"Yaz0":
            real_size = yaz0.get_header(memoryview(file[0:16])).uncompressed_size
        else:
            real_size = len(file)
        del file
    else:
        if file.suffix.startswith(".s"):
            with file.open("rb") as f:
                real_size = yaz0.get_header(f.read(16)).uncompressed_size
        else:
            real_size = file.stat().st_size
    real_size = int(real_size * 1.05)
    if name == "":
        if isinstance(file, Path):
            name = file.name
        else:
            raise ValueError("BFRES name must not be blank if passing file as bytes.")
    value: int
    if be:
        if ".Tex" in name:
            if real_size < 100:
                value = real_size * 9
            elif 100 < real_size <= 2000:
                value = real_size * 7
            elif 2000 < real_size <= 3000:
                value = real_size * 5
            elif 3000 < real_size <= 4000:
                value = real_size * 4
            elif 4000 < real_size <= 8500:
                value = real_size * 3
            elif 8500 < real_size <= 12000:
                value = real_size * 2
            elif 12000 < real_size <= 17000:
                value = real_size * 1.75
            elif 17000 < real_size <= 30000:
                value = real_size * 1.5
            elif 30000 < real_size <= 45000:
                value = real_size * 1.3
            elif 45000 < real_size <= 100000:
                value = real_size * 1.2
            elif 100000 < real_size <= 150000:
                value = real_size * 1.1
            elif 150000 < real_size <= 200000:
                value = real_size * 1.07
            elif 200000 < real_size <= 250000:
                value = real_size * 1.045
            elif 250000 < real_size <= 300000:
                value = real_size * 1.035
            elif 300000 < real_size <= 600000:
                value = real_size * 1.03
            elif 600000 < real_size <= 1000000:
                value = real_size * 1.015
            elif 1000000 < real_size <= 1800000:
                value = real_size * 1.009
            elif 1800000 < real_size <= 4500000:
                value = real_size * 1.005
            elif 4500000 < real_size <= 6000000:
                value = real_size * 1.002
            else:
                value = real_size * 1.0015
        else:
            if real_size < 500:
                value = real_size * 7
            elif 500 < real_size <= 750:
                value = real_size * 4
            elif 750 < real_size <= 2000:
                value = real_size * 3
            elif 2000 < real_size <= 400000:
                value = real_size * 1.75
            elif 400000 < real_size <= 600000:
                value = real_size * 1.7
            elif 600000 < real_size <= 1500000:
                value = real_size * 1.6
            elif 1500000 < real_size <= 3000000:
                value = real_size * 1.5
            else:
                value = real_size * 1.25
    else:
        if ".Tex" in name:
            if 50000 < real_size:
                value = real_size * 1.2
            elif 30000 < real_size:
                value = real_size * 1.3
            elif 10000 < real_size:
                value = real_size * 1.5
            else:
                value = real_size * 2
        else:
            if 4000000 < real_size:
                value = real_size * 1.5
            elif 3000000 < real_size:
                value = real_size * 1.667
            elif 2000000 < real_size:
                value = real_size * 2.5
            elif 800000 < real_size:
                value = real_size * 3.15
            elif 100000 < real_size:
                value = real_size * 3.5
            elif 50000 < real_size:
                value = real_size * 3.66
            elif 2500 < real_size:
                value = real_size * 4.25
            elif 1250 < real_size:
                value = real_size * 6
            else:
                value = real_size * 9.5
    return int(value)


def guess_aamp_size(file: Union[Path, bytes], be: bool, ext: str = "") -> int:
    if isinstance(file, bytes):
        real_size = len(file)
        del file
    else:
        if file.suffix.startswith(".s"):
            with file.open("rb") as f:
                real_size = yaz0.get_header(f.read(16)).uncompressed_size
        else:
            real_size = file.stat().st_size
    real_size = int(real_size * 1.05)
    if ext == "":
        if isinstance(file, Path):
            ext = file.suffix
        else:
            raise ValueError(
                "AAMP extension must not be blank if passing file as bytes."
            )
    ext = ext.replace(".s", ".")
    value: int
    if ext == ".baiprog":
        if real_size <= 380:
            value = real_size * 7
        elif 380 < real_size <= 400:
            value = real_size * 6
        elif 400 < real_size <= 450:
            value = real_size * 5.5
        elif 450 < real_size <= 600:
            value = real_size * 5
        elif 600 < real_size <= 1000:
            value = real_size * 4
        elif 1000 < real_size <= 1750:
            value = real_size * 3.5
        else:
            value = real_size * 3
    elif ext == ".bgparamlist":
        if real_size <= 100:
            value = real_size * 20
        elif 100 < real_size <= 150:
            value = real_size * 12
        elif 150 < real_size <= 250:
            value = real_size * 10
        elif 250 < real_size <= 350:
            value = real_size * 8
        elif 350 < real_size <= 450:
            value = real_size * 7
        else:
            value = real_size * 6
    elif ext == ".bdrop":
        if real_size < 200:
            value = real_size * 8.5
        elif 200 < real_size <= 250:
            value = real_size * 7
        elif 250 < real_size <= 350:
            value = real_size * 6
        elif 350 < real_size <= 450:
            value = real_size * 5.25
        elif 450 < real_size <= 850:
            value = real_size * 4.5
        else:
            value = real_size * 4
    elif ext == ".bxml":
        if real_size < 350:
            value = real_size * 6
        elif 350 < real_size <= 450:
            value = real_size * 5
        elif 450 < real_size <= 550:
            value = real_size * 4.5
        elif 550 < real_size <= 650:
            value = real_size * 4
        elif 650 < real_size <= 800:
            value = real_size * 3.5
        else:
            value = real_size * 3
    elif ext == ".brecipe":
        if real_size < 100:
            value = real_size * 12.5
        elif 100 < real_size <= 160:
            value = real_size * 8.5
        elif 160 < real_size <= 200:
            value = real_size * 7.5
        elif 200 < real_size <= 215:
            value = real_size * 7
        else:
            value = real_size * 6.5
    elif ext == ".bshop":
        if real_size < 200:
            value = real_size * 7.25
        elif 200 < real_size <= 400:
            value = real_size * 6
        elif 400 < real_size <= 500:
            value = real_size * 5
        else:
            value = real_size * 4.05
    elif ext == ".bas":
        real_size = real_size * 1.05
        if real_size < 100:
            value = real_size * 20
        elif 100 < real_size <= 200:
            value = real_size * 12.5
        elif 200 < real_size <= 300:
            value = real_size * 10
        elif 300 < real_size <= 600:
            value = real_size * 8
        elif 600 < real_size <= 1500:
            value = real_size * 6
        elif 1500 < real_size <= 2000:
            value = real_size * 5.5
        elif 2000 < real_size <= 15000:
            value = real_size * 5
        else:
            value = real_size * 4.5
    elif ext == ".baslist":
        if real_size < 100:
            value = real_size * 15
        elif 100 < real_size <= 200:
            value = real_size * 10
        elif 200 < real_size <= 300:
            value = real_size * 8
        elif 300 < real_size <= 500:
            value = real_size * 6
        elif 500 < real_size <= 800:
            value = real_size * 5
        elif 800 < real_size <= 4000:
            value = real_size * 4
        else:
            value = real_size * 3.5
    elif ext == ".bdmgparam":
        value = (((-0.0018 * real_size) + 6.6273) * real_size) + 500
    else:
        value = 0
    if not be:
        value = value * 1.5
    return int(value)
