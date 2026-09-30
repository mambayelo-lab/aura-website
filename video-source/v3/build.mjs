// Films v4 : fondus enchaînés d'un temps musical entre chaque plan (xfade), 1080p, CRF 18.
import { chromium } from '/home/user/aura-decision-zen/node_modules/playwright/index.mjs';
import fs from 'fs'; import { execFileSync } from 'child_process'; import { story } from './story.mjs';
const F='/usr/local/lib/python3.11/dist-packages/imageio_ffmpeg/binaries/ffmpeg-linux-x86_64-v7.0.2';
// Originaux hors dépôt déployé : dossier passé par AURA_ORIGINALS (scratchpad videos/original, ou historique git avant e50ac8f).
const O=process.env.AURA_ORIGINALS||'../original';
const [film,L]=process.argv.slice(2);const segs=story(L)[film];
const X=film==='supply'?0.5:0.604; // durée du fondu = un temps
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--allow-file-access-from-files']});
const p=await b.newPage({viewport:{width:1920,height:1080}});
const args=['-y','-loglevel','error','-i',`${O}/aura-${film}-${L}.mp4`];const fc=[];const durs=[];let inp=1;
for(const [k,s] of segs.entries()){const last=k===segs.length-1;const ext=last?0:X;
 if(s[0]==='O'){fc.push(`[0:v]trim=start=${s[1]}:end=${s[2]+ext},setpts=PTS-STARTPTS,fps=30,format=yuv420p,setsar=1[v${k}]`);durs.push(s[2]-s[1]);}
 else{const sc=s[1].map((x,i)=>i===s[1].length-1?{...x,dur:x.dur+ext,hold:true}:x);
  const dir=`frames/${film}-${L}-${k}`;fs.rmSync(dir,{recursive:true,force:true});fs.mkdirSync(dir,{recursive:true});
  await p.goto('file://'+process.cwd()+'/ins.html?s='+encodeURIComponent(JSON.stringify({scenes:sc})));await p.waitForFunction(()=>window.ready);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(300);
  const n=Math.round(await p.evaluate(()=>TOTAL)*30);
  for(let f=0;f<n;f++){await p.evaluate(t=>render(t),f/30);await p.screenshot({path:`${dir}/f${String(f).padStart(4,'0')}.jpg`,quality:95,type:'jpeg'});}
  args.push('-framerate','30','-i',`${dir}/f%04d.jpg`);fc.push(`[${inp++}:v]fps=30,format=yuv420p,setsar=1[v${k}]`);durs.push(n/30-ext);}
}
await b.close();
let prev='[v0]',acc=durs[0];
for(let k=1;k<segs.length;k++){fc.push(`${prev}[v${k}]xfade=transition=fade:duration=${X}:offset=${acc.toFixed(3)}[x${k}]`);prev=`[x${k}]`;acc+=durs[k];}
const total=acc;
fc.push(`[0:a]atrim=0:${total},asetpts=PTS-STARTPTS,afade=t=out:st=${total-2.5}:d=2.5[a]`);
fs.mkdirSync('out',{recursive:true});const out=`out/aura-${film}-${L}.mp4`;
execFileSync(F,[...args,'-filter_complex',fc.join(';'),'-map',prev,'-map','[a]','-c:v','libx264','-preset','slow','-crf','18','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-movflags','+faststart',out]);
console.log(out,total.toFixed(1));
