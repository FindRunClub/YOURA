"""Look-dev previews from a hall render: the lit panorama, and views as a phone would frame them."""
import sys, math, argparse, os
import numpy as np
from PIL import Image
import exrio

ap = argparse.ArgumentParser()
ap.add_argument('exr')
ap.add_argument('--out', default='preview')
ap.add_argument('--mix', default='', help='group weights, e.g. base=1,neon=1,scr3=1.2')
ap.add_argument('--exposure', type=float, default=1.0)
ap.add_argument('--views', default='0:0,-64:0,64:0,180:-5,0:35,0:-60', help='heading:pitch list for phone views')
ap.add_argument('--denoise', action='store_true')
args = ap.parse_args()

P = exrio.load(args.exr)
groups = [k[len('Combined_'):] for k in P if k.startswith('Combined_')]
W = {g: 1.0 for g in groups}
TINT = {g: np.ones(3, np.float32) for g in groups}
for kv in filter(None, args.mix.split(',')):
    k, v = kv.split('=')
    if ':' in v:                       # weight:r:g:b
        parts = [float(x) for x in v.split(':')]
        W[k] = parts[0]; TINT[k] = np.array(parts[1:4], np.float32)
    else:
        W[k] = float(v)

alb = exrio.rgb(P['Denoising Albedo']) if 'Denoising Albedo' in P else None
nrm = exrio.rgb(P['Denoising Normal']) if 'Denoising Normal' in P else None


def group(g):
    a = exrio.rgb(P['Combined_' + g])
    if args.denoise:
        import oidn2
        a = oidn2.denoise(a, alb, nrm)
    return a


img = None
for g in groups:
    if W[g] == 0:
        continue
    c = group(g) * W[g] * TINT[g]
    img = c if img is None else img + c
img = img * args.exposure


def tonemap(x):
    # ACES-like filmic curve (Narkowicz), then sRGB
    a, b, c, d, e = 2.51, 0.03, 2.43, 0.59, 0.14
    y = np.clip((x * (a * x + b)) / (x * (c * x + d) + e), 0, 1)
    return np.where(y <= 0.0031308, y * 12.92, 1.055 * np.power(y, 1 / 2.4) - 0.055)


def save(a, path, q=90):
    Image.fromarray((np.clip(tonemap(a), 0, 1) * 255 + 0.5).astype(np.uint8)).save(path, quality=q)


h, w, _ = img.shape
os.makedirs(os.path.dirname(args.out) or '.', exist_ok=True)
save(img, args.out + '-pano.jpg')


def view(heading, pitch, vw=390, vh=844, tan_x=0.4619, tan_y=1.0):
    """A perspective view (phone portrait by default) sampled from the panorama. heading/pitch in degrees."""
    ys, xs = np.mgrid[0:vh, 0:vw]
    nx = (xs + 0.5) / vw * 2 - 1
    ny = 1 - (ys + 0.5) / vh * 2
    hd, pt = math.radians(heading), math.radians(pitch)
    F = np.array([math.sin(hd) * math.cos(pt), math.cos(hd) * math.cos(pt), math.sin(pt)])   # blender axes
    R = np.array([math.cos(hd), -math.sin(hd), 0.0])
    U = np.cross(R, F)
    d = F[None, None, :] + nx[..., None] * tan_x * R + ny[..., None] * tan_y * U
    d /= np.linalg.norm(d, axis=-1, keepdims=True)
    lon = np.arctan2(d[..., 0], d[..., 1])
    lat = np.arcsin(np.clip(d[..., 2], -1, 1))
    u = (0.5 + lon / (2 * math.pi)) * w - 0.5
    v = (0.5 - lat / math.pi) * h - 0.5
    x0 = np.floor(u).astype(int); y0 = np.clip(np.floor(v).astype(int), 0, h - 2)
    fx = (u - x0)[..., None]; fy = (v - y0)[..., None]
    x1 = (x0 + 1) % w; x0 = x0 % w
    return (img[y0, x0] * (1 - fx) * (1 - fy) + img[y0, x1] * fx * (1 - fy) + img[y0 + 1, x0] * (1 - fx) * fy + img[y0 + 1, x1] * fx * fy)


tiles = []
for hv in args.views.split(','):
    hd, pt = [float(x) for x in hv.split(':')]
    tiles.append(view(hd, pt))
sheet = np.concatenate(tiles, 1)
save(sheet, args.out + '-views.jpg')
if os.environ.get('EACH'):
    # one front view per light group, each on its own exposure, to judge the groups separately
    cells = []
    full = img
    for g in groups:
        img = group(g)
        k = 0.6 / max(1e-6, float(np.percentile(img, 99.5)))
        img = img * k
        cells.append(np.concatenate([view(0, 5), view(180, 0)], 1))
    save(np.concatenate(cells, 1), args.out + '-each.jpg')
    img = full
print('groups', groups, 'mean', float(img.mean()), 'p99', float(np.percentile(img, 99)))
