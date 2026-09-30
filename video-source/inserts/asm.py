import subprocess,sys,json,glob
F='/usr/local/lib/python3.11/dist-packages/imageio_ffmpeg/binaries/ffmpeg-linux-x86_64-v7.0.2'
V='/home/user/mambayelo-lab/aura-website/public/video/original'
film,L=sys.argv[1],sys.argv[2]
ats={'supply':[5.5,13.0,27.0,32.5,63.0],'architect':[12.5]}[film]
src=f'{V}/aura-{film}-{L}.mp4'
dur=float(subprocess.run([F,'-i',src],capture_output=True,text=True).stderr.split('Duration: ')[1].split(',')[0].split(':')[-1])+60*int(subprocess.run([F,'-i',src],capture_output=True,text=True).stderr.split('Duration: ')[1].split(',')[0].split(':')[-2])
args=[F,'-y','-loglevel','error','-i',src];ins=[]
for k,a in enumerate(ats):
    d=f'frames/{film}-{L}-{k}';n=len(glob.glob(d+'/*.jpg'));ins.append(n/30)
    args+=['-framerate','30','-i',d+'/f%04d.jpg']
fc=[];vs=[];as_=[];pts=[0]+ats+[dur]
for i in range(len(pts)-1):
    s,e=pts[i],pts[i+1]
    fc.append(f'[0:v]trim=start={s}:end={e},setpts=PTS-STARTPTS,fps=30,format=yuv420p[v{i}]');vs.append(f'[v{i}]')
    fc.append(f'[0:a]atrim=start={s}:end={e},asetpts=PTS-STARTPTS,afade=t=in:d=0.02,afade=t=out:st={e-s-0.02}:d=0.02[a{i}]');as_.append(f'[a{i}]')
    if i<len(ats):
        d=ins[i]
        fc.append(f'[{i+1}:v]fps=30,format=yuv420p,setsar=1[w{i}]');vs.append(f'[w{i}]')
        fc.append(f'[0:a]atrim=start={e}:end={e+d},asetpts=PTS-STARTPTS,afade=t=in:d=0.02,afade=t=out:st={d-0.02}:d=0.02[b{i}]');as_.append(f'[b{i}]')
N=len(vs)
fc.append(''.join(v+a for v,a in zip(vs,as_))+f'concat=n={N}:v=1:a=1[v][a]')
out=f'../film-out/aura-{film}-{L}.mp4'
args+=['-filter_complex',';'.join(fc),'-map','[v]','-map','[a]','-c:v','libx264','-preset','slow','-crf','27','-pix_fmt','yuv420p','-c:a','aac','-b:a','128k','-movflags','+faststart',out]
subprocess.run(args,check=True);print(out,dur,sum(ins))
