# Bande-son originale du film Aura Architect (numpy/scipy) : nappes architecturales,
# pulsation discrète, 100 BPM, ré majeur modal. Composition originale, sans échantillon.
import json, numpy as np, soundfile as sf
from scipy.signal import butter, sosfilt, fftconvolve
TL=json.load(open('timeline_duo.json'))['architect']; T={k:a for k,a,b in TL['T']}
SR=48000; DUR=TL['DUR']+0.6; N=int(SR*DUR); B=0.6; BAR=4*B
rng=np.random.default_rng(3); L=np.zeros(N); R=np.zeros(N)
f=lambda m:440*2**((m-69)/12)
lp=lambda x,fc:sosfilt(butter(2,fc,'low',fs=SR,output='sos'),x)
hp=lambda x,fc:sosfilt(butter(2,fc,'high',fs=SR,output='sos'),x)
def add(s,t0,gl=1,gr=1):
    i=int(t0*SR);j=min(N,i+len(s))
    if i<N: L[i:j]+=s[:j-i]*gl; R[i:j]+=s[:j-i]*gr
def energy(x):
    pts=[(0,.45),(T['ap'],.6),(T['a1'],.75),(T['d1'],.85),(T['ai'],1.0),(T['res'],1.15),(T['cta'],.75),(DUR,.4)]
    xs,ys=zip(*pts); return float(np.interp(x,xs,ys))
chords=[[50,57,62,64,69],[47,54,59,62,66],[43,50,55,59,64],[45,52,57,61,64]]  # Dadd9, Bm7, Gmaj7, A
t=0;k=0
while t<DUR-0.5:
    c=chords[k%4] if t<T['cta'] else chords[0]; n=int((2*BAR+1.0)*SR); x=np.arange(n)/SR; e=energy(t)
    s=sum(np.sin(2*np.pi*f(m)*x*(1+d))+0.25*np.sin(4*np.pi*f(m)*x*(1+d)) for m in c for d in (-0.0015,0.0015))/(2*len(c))
    s*=np.minimum(1,x/1.2)*np.minimum(1,(x[-1]-x)/1.2)*(1+0.12*np.sin(2*np.pi*x/3.1))
    add(s*0.32*e,t,1,.8); add(np.roll(s,900)*0.32*e,t,.8,1)
    n2=int(2*BAR*SR); x2=np.arange(n2)/SR; add(np.sin(2*np.pi*f(c[0]-12)*x2)*np.minimum(1,x2/.4)*np.minimum(1,(x2[-1]-x2)/.6)*0.22*e,t)
    t+=2*BAR;k+=1
def tick(): n=int(.05*SR); x=np.arange(n)/SR; return hp(rng.standard_normal(n),6000)*np.exp(-x*80)*0.06
def pulse(): n=int(.3*SR); x=np.arange(n)/SR; return np.sin(2*np.pi*(55+60*np.exp(-x*25))*x)*np.exp(-x*9)*0.5
PU=pulse()
tt=T['ap']
while tt<T['cta']:
    e=energy(tt); j=round((tt-T['ap'])/B)
    add(PU*0.55*e,tt); add(tick()*e,tt+B/2,.7,1)
    if j%4==2 and tt>T['a1']: add(tick()*1.4*e,tt+B*0.75,1,.7)
    tt+=B
for i,tt in enumerate(np.arange(T['a2'],T['res'],B/2)):
    c=chords[int(tt/(2*BAR))%4]; m=c[[1,3,2,4][i%4]]+12; n=int(.5*SR); x=np.arange(n)/SR
    s=np.sin(2*np.pi*f(m)*x)*np.exp(-x*6)*0.045*energy(tt); add(s,tt,.6,1); add(s*.4,tt+3*B/2,1,.6)
n=int((T['res']-T['i4'])*SR); x=np.arange(n)/SR; add(hp(rng.standard_normal(n),3000)*(x/x[-1])**2*0.09,T['i4'])
imp=lp(rng.standard_normal(int(2.4*SR)),450)*np.exp(-np.arange(int(2.4*SR))/SR*2.2)*0.3
add(imp,T['res']); add(PU,T['res'])
for h in ('i3','i2','i4'): add(imp*0.35,T[h])
for m in (62,69,74,78):
    n=int(7*SR); x=np.arange(n)/SR; add(np.sin(2*np.pi*f(m)*x)*np.exp(-x*.7)*0.05,T['cta'])
ir=int(3*SR); it=np.arange(ir)/SR
wl=fftconvolve(L,lp(rng.standard_normal(ir)*np.exp(-it*1.8),4000))[:N]; wr=fftconvolve(R,lp(rng.standard_normal(ir)*np.exp(-it*1.8),4000))[:N]
st=np.stack([L/np.abs(L).max()*.8+wl/np.abs(wl).max()*.3, R/np.abs(R).max()*.8+wr/np.abs(wr).max()*.3],1); st=np.tanh(st*1.1)
fi=int(1.5*SR); fo=int(5*SR); st[:fi]*=np.linspace(0,1,fi)[:,None]; st[-fo:]*=np.linspace(1,0,fo)[:,None]**1.5
sf.write('music3_raw.wav',st.astype(np.float32),SR,subtype='FLOAT'); print('ok',DUR)
