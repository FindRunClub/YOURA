"""Minimal ctypes binding to the Open Image Denoise library that ships inside Blender's Python module.
Run with LD_LIBRARY_PATH pointing at <site-packages>/bpy/lib."""
import ctypes, os, numpy as np

_lib = None
FLOAT3 = 3


def _load():
    global _lib
    if _lib is not None:
        return _lib
    import importlib.util
    spec = importlib.util.find_spec('bpy')
    libdir = os.path.join(os.path.dirname(spec.origin), 'lib')
    for dep in ('libtbb.so.12',):
        try:
            ctypes.CDLL(os.path.join(libdir, dep), mode=ctypes.RTLD_GLOBAL)
        except OSError:
            pass
    L = ctypes.CDLL(os.path.join(libdir, 'libOpenImageDenoise.so.2'), mode=ctypes.RTLD_GLOBAL)
    L.oidnNewDevice.restype = ctypes.c_void_p; L.oidnNewDevice.argtypes = [ctypes.c_int]
    L.oidnCommitDevice.argtypes = [ctypes.c_void_p]
    L.oidnNewFilter.restype = ctypes.c_void_p; L.oidnNewFilter.argtypes = [ctypes.c_void_p, ctypes.c_char_p]
    L.oidnSetSharedFilterImage.argtypes = [ctypes.c_void_p, ctypes.c_char_p, ctypes.c_void_p, ctypes.c_int,
                                           ctypes.c_size_t, ctypes.c_size_t, ctypes.c_size_t, ctypes.c_size_t, ctypes.c_size_t]
    L.oidnSetFilterBool.argtypes = [ctypes.c_void_p, ctypes.c_char_p, ctypes.c_bool]
    L.oidnSetFilterInt.argtypes = [ctypes.c_void_p, ctypes.c_char_p, ctypes.c_int]
    L.oidnCommitFilter.argtypes = [ctypes.c_void_p]
    L.oidnExecuteFilter.argtypes = [ctypes.c_void_p]
    L.oidnReleaseFilter.argtypes = [ctypes.c_void_p]
    L.oidnReleaseDevice.argtypes = [ctypes.c_void_p]
    L.oidnGetDeviceError.restype = ctypes.c_int
    L.oidnGetDeviceError.argtypes = [ctypes.c_void_p, ctypes.POINTER(ctypes.c_char_p)]
    _lib = L
    return L


def denoise(color, albedo=None, normal=None, hdr=True, clean_aux=False):
    """color, albedo, normal: float32 arrays (h, w, 3). Returns the denoised colour."""
    L = _load()
    color = np.ascontiguousarray(color, dtype=np.float32)
    h, w, _ = color.shape
    out = np.zeros_like(color)
    dev = L.oidnNewDevice(1)  # 1 = CPU
    L.oidnCommitDevice(dev)
    flt = L.oidnNewFilter(dev, b'RT')
    keep = [color, out]

    def img(name, a):
        a = np.ascontiguousarray(a, dtype=np.float32); keep.append(a)
        L.oidnSetSharedFilterImage(flt, name, a.ctypes.data_as(ctypes.c_void_p), FLOAT3, w, h, 0, 0, 0)
    img(b'color', color)
    if albedo is not None: img(b'albedo', albedo)
    if normal is not None: img(b'normal', normal)
    L.oidnSetSharedFilterImage(flt, b'output', out.ctypes.data_as(ctypes.c_void_p), FLOAT3, w, h, 0, 0, 0)
    L.oidnSetFilterBool(flt, b'hdr', bool(hdr))
    L.oidnSetFilterInt(flt, b'maxMemoryMB', 5000)        # large renders are denoised in tiles rather than running out of memory
    if clean_aux: L.oidnSetFilterBool(flt, b'cleanAux', True)
    L.oidnCommitFilter(flt)
    L.oidnExecuteFilter(flt)
    msg = ctypes.c_char_p()
    if L.oidnGetDeviceError(dev, ctypes.byref(msg)) != 0:
        raise RuntimeError('OIDN: ' + (msg.value or b'').decode())
    L.oidnReleaseFilter(flt); L.oidnReleaseDevice(dev)
    return out
