# Bande-son originale v2 du film Aura, composée par programme (numpy/scipy).
# Registre : électro sombre et groovy, rétro-électronique, 93 BPM, fa dièse mineur.
# Composition entièrement originale : progression, basse et motifs écrits pour Aura,
# sans échantillon ni emprunt à une œuvre existante.
import json
import numpy as np, soundfile as sf
from scipy.signal import butter, sosfilt, fftconvolve

TL = json.load(open('timeline.json'))
BPM = TL['BPM']; B = 60 / BPM; S16 = B / 4
SR = 48000; DUR = TL['DUR'] + 1.2; N = int(SR * DUR)
starts = {k: a for k, a, b in TL['T']}
rng = np.random.default_rng(11)
L = np.zeros(N); R = np.zeros(N)

def f(m): return 440 * 2 ** ((m - 69) / 12)
def lp(x, fc, o=2): return sosfilt(butter(o, min(fc, SR / 2 - 100), 'low', fs=SR, output='sos'), x)
def hp(x, fc, o=2): return sosfilt(butter(o, fc, 'high', fs=SR, output='sos'), x)
def add(sig, t0, gl=1.0, gr=1.0):
    i = int(t0 * SR); j = min(N, i + len(sig))
    if i >= N: return
    L[i:j] += sig[:j - i] * gl; R[i:j] += sig[:j - i] * gr
def saw(fr, n, ph=0.0):
    t = np.arange(n) / SR
    return 2 * ((t * fr + ph) % 1) - 1

# Structure (en secondes), calée sur les chapitres du montage
t_groove = starts['i1']; t_break = starts['i2']; t_arch = starts['ap']
t_build = starts['i4'] - 4 * B; t_hit = starts['res']; t_end = starts['cta']
def energy(x):
    pts = [(0, .35), (t_groove, .75), (t_break, .45), (t_arch, .85), (starts['i3'], .9), (t_build, .95), (t_hit, 1.15), (t_end, .8), (DUR, .5)]
    xs, ys = zip(*pts); return float(np.interp(x, xs, ys))

# Progression originale (2 mesures par accord) : F#m9 - Dmaj9 - Bm11 - C#7sus4
chords = [[54, 57, 61, 64, 68], [50, 54, 57, 61, 64], [47, 50, 54, 57, 64], [49, 54, 56, 59, 63]]
roots = [30, 26, 35, 25]  # basses (très grave)
BAR = 4 * B

# Nappes sombres : scies désaccordées, filtre qui s'ouvre avec l'énergie
t = 0.0; k = 0
while t < DUR - 0.5:
    c = chords[k % 4] if t < t_end else chords[0]
    n = int((2 * BAR + 0.6) * SR); e = energy(t)
    sig = sum(saw(f(m) * 2 ** (d / 1200), n, rng.random()) for m in c for d in (-9, 0, 9)) / (3 * len(c))
    sig = lp(sig, 600 + 1600 * e) * np.minimum(1, np.arange(n) / (0.4 * SR)) * np.minimum(1, (n - np.arange(n)) / (0.5 * SR))
    add(sig * 0.30 * e, t, 1.0, 0.85); add(np.roll(sig, 700) * 0.30 * e, t, 0.85, 1.0)
    t += 2 * BAR; k += 1

# Grille rythmique (doubles croches)
def kick():
    n = int(0.4 * SR); tt = np.arange(n) / SR
    ph = 2 * np.pi * np.cumsum(45 + 110 * np.exp(-tt * 30)) / SR
    return np.sin(ph) * np.exp(-tt * 7) * 0.9
def snare():
    n = int(0.22 * SR); tt = np.arange(n) / SR
    nz = hp(rng.standard_normal(n), 1800) * np.exp(-tt * 22) * 0.35
    body = np.sin(2 * np.pi * 190 * tt) * np.exp(-tt * 30) * 0.25
    return nz + body
def hat(open_=False):
    n = int((0.16 if open_ else 0.045) * SR); tt = np.arange(n) / SR
    return hp(rng.standard_normal(n), 8000) * np.exp(-tt * (18 if open_ else 90)) * 0.12
K = kick(); SN = snare(); HC = hat(); HO = hat(True)
# Basse syncopée originale (en doubles croches, par mesure) : 1 = note, 0 = silence ; octave en +12
bass_pat = [(0, 0), (3, 0), (6, 12), (8, 0), (10, 0), (11, 7), (14, 0)]
step = 0; tt0 = 0.0
while tt0 < t_end + BAR:
    bar_i = int(tt0 / BAR); pos = step % 16; e = energy(tt0)
    in_break = t_break <= tt0 < t_arch
    groove = tt0 >= t_groove and tt0 < t_end + 0.01
    if groove and not in_break:
        if pos % 4 == 0: add(K * (0.9 if pos in (0, 8) else 0.75) * e, tt0)
        if pos in (4, 12): add(SN * e, tt0, 0.95, 1.0)
        add((HO if pos % 4 == 2 else HC) * e, tt0, 0.8, 1.0)
    elif in_break and pos in (0, 8):
        add(K * 0.35, tt0)
    if tt0 >= t_groove * 0.5:
        for p, o in bass_pat:
            if p == pos:
                r = roots[(bar_i // 2) % 4] if tt0 < t_end else roots[0]
                n = int(S16 * (2.2 if p in (0, 8) else 1.4) * SR); x = np.arange(n) / SR
                s = np.sign(np.sin(2 * np.pi * f(r + o) * x)) * 0.5 + np.sin(2 * np.pi * f(r + o) * x)
                s = lp(s, 380 + 500 * e) * np.exp(-x * 5) * 0.45 * (0.6 if in_break else 1.0)
                add(s, tt0)
    step += 1; tt0 += S16

# Touches rétro : arpège en doubles croches avec écho, sur le chapitre Architect et la montée
for i, tt in enumerate(np.arange(t_arch, t_hit, S16)):
    c = chords[int(tt / (2 * BAR)) % 4]; m = c[[0, 2, 4, 2, 1, 3, 4, 3][i % 8]] + 12
    n = int(0.18 * SR); x = np.arange(n) / SR
    s = lp(np.sign(np.sin(2 * np.pi * f(m) * x)), 2600) * np.exp(-x * 16) * 0.05 * energy(tt)
    add(s, tt, 0.7, 1.0); add(s * 0.35, tt + 3 * S16, 1.0, 0.6)

# Montée maîtrisée puis temps fort
n = int((t_hit - t_build) * SR); x = np.arange(n) / SR
riser = hp(rng.standard_normal(n), 2500) * (x / x[-1]) ** 2 * 0.12
add(riser, t_build)
imp = lp(rng.standard_normal(int(2.2 * SR)), 500) * np.exp(-np.arange(int(2.2 * SR)) / SR * 2.4) * 0.35
add(imp, t_hit); add(K * 1.1, t_hit)
for h in (starts['i1'], starts['i2'], starts['i3'], starts['i4']):
    add(imp * 0.35, h)
# Accord final (logo)
for m in (66, 69, 73, 78):
    n = int(6 * SR); x = np.arange(n) / SR
    add(np.sin(2 * np.pi * f(m) * x) * np.exp(-x * 0.8) * 0.05, t_end)

# Réverbération légère, bus et fondus
ir = int(2.2 * SR); it = np.arange(ir) / SR
irL = lp(rng.standard_normal(ir) * np.exp(-it * 2.8), 4500); irR = lp(rng.standard_normal(ir) * np.exp(-it * 2.8), 4500)
wL = fftconvolve(L, irL)[:N]; wR = fftconvolve(R, irR)[:N]
wL /= np.abs(wL).max(); wR /= np.abs(wR).max()
L2 = L / np.abs(L).max() * 0.85 + wL * 0.22; R2 = R / np.abs(R).max() * 0.85 + wR * 0.22
st = np.tanh(np.stack([L2, R2], 1) * 1.15)
fi = int(1.2 * SR); fo = int(5 * SR)
st[:fi] *= np.linspace(0, 1, fi)[:, None]; st[-fo:] *= np.linspace(1, 0, fo)[:, None] ** 1.5
sf.write('music2_raw.wav', st.astype(np.float32), SR, subtype='FLOAT')
print('ok', DUR)
