# Bande-son originale composée par programme (numpy/scipy) pour le film Aura.
# 120 BPM, la mineur. Aucune ressource externe : œuvre originale, libre de droits.
import numpy as np, soundfile as sf
from scipy.signal import butter, sosfilt, fftconvolve
SR=48000; DUR=90.0; N=int(SR*DUR); BEAT=0.5
t=np.arange(N)/SR
rng=np.random.default_rng(7)
L=np.zeros(N); R=np.zeros(N)
def f(m): return 440*2**((m-69)/12)
def lp(x,fc,o=2): return sosfilt(butter(o,fc,'low',fs=SR,output='sos'),x)
def hp(x,fc,o=2): return sosfilt(butter(o,fc,'high',fs=SR,output='sos'),x)
def env(n,a,r):
    e=np.ones(n); a=int(a*SR); r=int(r*SR)
    e[:a]=np.linspace(0,1,a); e[-r:]*=np.linspace(1,0,r); return e
def add(sig,start,gl=1,gr=1):
    i=int(start*SR); j=min(N,i+len(sig)); L[i:j]+=sig[:j-i]*gl; R[i:j]+=sig[:j-i]*gr
# accords (4 s chacun) : Am9, Fmaj7, Cadd9, G6/B
chords=[[57,60,64,67,71],[53,57,60,64,67],[48,55,60,62,64],[47,55,59,62,64]]
bass=[45,41,48,43]
def pad(notes,dur,amp):
    n=int(dur*SR); tt=np.arange(n)/SR; s=np.zeros(n)
    for m in notes:
        for d in (-0.08,0.0,0.08):
            fr=f(m)*2**(d/12); ph=rng.random()*6.28
            s+= (2*((tt*fr+ph/6.28)%1)-1)*0.33
    s=lp(s,1400)*env(n,1.2,1.4)
    return s*amp/len(notes)
# intensité globale par section
def inten(x):
    pts=[(0,.55),(4,.7),(12,.85),(34,.95),(41,1.0),(70,1.1),(74.5,1.25),(80.5,1.0),(90,.9)]
    xs,ys=zip(*pts); return np.interp(x,xs,ys)
for k,st in enumerate(np.arange(0,88,4.0)):
    c=chords[k%4]; a=inten(st)
    if st>=80: c=chords[0]  # résolution finale sur la tonique
    p=pad(c,4.6,0.22*a); add(p,st,1.0,0.8); add(np.roll(p,int(0.012*SR)),st,0.8,1.0)
    # sous-basse tenue
    n=int(4.2*SR); tt=np.arange(n)/SR
    b=np.sin(2*np.pi*f(bass[k%4] if st<80 else 45)*tt)*env(n,0.3,0.8)*0.20*a*(1 if st>=6 else st/6+0.2)
    add(b,st)
# pulsation : kick doux sur les temps, de 7,5 s à 80,5 s ; charleston sur les contretemps
def kick():
    n=int(0.35*SR); tt=np.arange(n)/SR
    fr=50+90*np.exp(-tt*28); ph=2*np.pi*np.cumsum(fr)/SR
    return np.sin(ph)*np.exp(-tt*9)*0.45
def hat():
    n=int(0.06*SR); return hp(rng.standard_normal(n),7000)*np.exp(-np.arange(n)/SR*70)*0.05
K=kick()
for b in np.arange(7.5,80.5,BEAT):
    g=0.55 if b<12 else (0.75 if b<41 else 0.9)
    if 72.5<=b<74.5: g*=0.4
    add(K*g,b)
    if b>=12: add(hat()*(1.2 if b>=42 else .8),b+BEAT/2,0.7,1.0)
# arpège pincé en croches de 43 s à 72,5 s
def pluck(m,amp):
    n=int(0.45*SR); tt=np.arange(n)/SR
    s=(np.sin(2*np.pi*f(m)*tt)+0.3*np.sin(4*np.pi*f(m)*tt))*np.exp(-tt*7)
    return lp(s,3000)*amp
for i,b in enumerate(np.arange(43,72.5,BEAT/2)):
    c=chords[int(b//4)%4]; m=c[[0,2,4,3,1,2,4,3][i%8]]+12
    add(pluck(m,0.07),b,0.6+0.4*(i%2),1.0-0.4*(i%2))
# montée 70,5-74,5 s, impact à 74,5 s, accents aux intercalaires (12, 41, 59, 72,5 s)
n=int(4*SR); nz=rng.standard_normal(n); tt=np.arange(n)/SR
riser=hp(nz,2000)*(tt/4)**2*0.10; add(riser,70.5)
imp=lp(rng.standard_normal(int(2.5*SR)),600)*np.exp(-np.arange(int(2.5*SR))/SR*2.2)*0.25
add(imp,74.5); add(K*1.0,74.5)
for h in (12,41,59,72.5): add(imp*0.45,h)
# cloche finale (logo) 80,5 s
for m in (69,76,81):
    n=int(6*SR); tt=np.arange(n)/SR
    add(np.sin(2*np.pi*f(m)*tt)*np.exp(-tt*0.9)*0.06,80.55)
# réverbération (réponse impulsionnelle synthétique)
ir_n=int(2.8*SR); irt=np.arange(ir_n)/SR
irL=rng.standard_normal(ir_n)*np.exp(-irt*2.2); irR=rng.standard_normal(ir_n)*np.exp(-irt*2.2)
irL=lp(irL,5000); irR=lp(irR,5000)
wL=fftconvolve(L,irL)[:N]; wR=fftconvolve(R,irR)[:N]
wL/=np.abs(wL).max(); wR/=np.abs(wR).max()
L2=L/np.abs(L).max()*0.8+wL*0.35; R2=R/np.abs(R).max()*0.8+wR*0.35
st=np.stack([L2,R2],1); st=np.tanh(st*1.1)
# fondus
fi=int(1.5*SR); fo=int(4*SR)
st[:fi]*=np.linspace(0,1,fi)[:,None]; st[-fo:]*=np.linspace(1,0,fo)[:,None]**1.5
sf.write('music_raw.wav',st.astype(np.float32),SR,subtype='FLOAT')
print('ok')
