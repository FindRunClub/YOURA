"""Read the passes of a multilayer EXR written by hall.py."""
import numpy as np
import OpenEXR


def load(path):
    f = OpenEXR.File(path)
    out = {}
    for part in f.parts:
        name = part.header.get('name', '')
        short = name.split('.', 1)[1] if '.' in name else name
        ks = list(part.channels.keys())
        if len(ks) == 1:
            a = part.channels[ks[0]].pixels
        else:
            a = np.stack([part.channels[k].pixels for k in ks], -1)
        out[short] = np.asarray(a, dtype=np.float32)
    return out


def rgb(a):
    return a[..., :3] if a.ndim == 3 else np.repeat(a[..., None], 3, -1)
