// Film de marque Aura Architect (page Architect) : node build-architect.mjs fr|en
// Plans vidéo Mixkit (clips/, hors dépôt, voir CREDITS.md), captures réelles (caps/), cartons rendus avec work/ins.html.
// Coupes sur la mesure de « Motivating Mornings » (≈123 BPM : mesure 1,951 s, premier temps 0,464 s), fondus d'un temps.
import { chromium } from '/home/user/aura-decision-zen/node_modules/playwright/index.mjs';
import fs from 'fs'; import { execFileSync } from 'child_process';
const F='/usr/local/lib/python3.11/dist-packages/imageio_ffmpeg/binaries/ffmpeg-linux-x86_64-v7.0.2';
const L=process.argv[2]; const fr=L==='fr'; const t=(a,b)=>fr?a:b;
const BAR=60/123*4, X=60/123, P0=0.464;
const note=t('Capture réelle · démo, données fictives','Real screenshot · demo, fictional data');
// ['C', clip, début, mesures, surtitre, texte] | ['S', capture, mesures, pastille, texte] | ['E', mesures]
const segs=[
 ['C','914',2,2,'Aura Architect',t('Une transformation se joue à plusieurs.','A transformation is a team effort.')],
 ['C','4809',5,2,t('La transformation','The transformation'),t('Métiers, DSI, direction : chacun voit une partie du système.','Business, IT, leadership: each sees one part of the system.')],
 ['C','42643',1,2,t('Le défi','The challenge'),t('L’architecte doit tout relier, et convaincre chacun.','The architect must connect it all, and bring everyone along.')],
 ['S','arch-dialog',2,t('Dialoguer','Dialogue'),t('Aura Architect pose les bonnes questions, dans les mots de chacun.','Aura Architect asks the right questions, in everyone’s words.')],
 ['S','arch-diagram',2,t('Dessiner','Design'),t('Il dessine la cible : applications, flux, sécurité.','It draws the target: applications, flows, security.')],
 ['C','4813',3,2,t('Raisonner','Reason'),t('Chaque choix d’architecture s’explique.','Every architecture choice comes with its reasons.')],
 ['S','arch-ask',2,t('Raisonner','Reason'),t('« Et si on retire l’ERP ? » Il mesure l’impact, flux par flux.','“What if we remove the ERP?” It traces the impact, flow by flow.')],
 ['C','42644',2,2,t('Aligner','Align'),t('Le comité partage la même carte.','The committee shares one map.')],
 ['S','arch-map',2,t('Vérifier','Align'),t('Il relie enjeux, objectifs et capacités, et signale ce qui manque.','Capabilities and changes, readable by all.')],
 ['C','4547',6,2,t('Avancer','Move forward'),t('L’équipe avance, sur des bases partagées.','The team moves forward, on shared ground.')],
 ['C','918',0,2,'Aura Architect',t('Le jumeau numérique de l’architecte, qui raisonne et dialogue avec les acteurs de la transformation.','The architect’s digital twin, which reasons and talks with the people driving the transformation.')],
 ['E',3],
];
const W='work', O=`out`; fs.mkdirSync(O,{recursive:true});
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--allow-file-access-from-files']});
const p=await b.newPage({viewport:{width:1920,height:1080}});
const capHtml=(eb,tx)=>`<!doctype html><meta charset=utf-8><style>
@font-face{font-family:Sora;font-weight:600;src:url(file:///root/.fonts/sora-600.ttf)}
@font-face{font-family:Lexend;src:url(file:///root/.fonts/lexend-400.ttf)}
body{margin:0;width:1920px;height:1080px;background:transparent;font-family:Lexend}
.sh{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,11,46,0) 50%,rgba(10,11,46,.7) 100%)}
.cap{position:absolute;left:110px;bottom:100px;max-width:1100px;border-left:6px solid #4743e6;padding:18px 30px;background:rgba(21,29,82,.8);border-radius:0 16px 16px 0;color:#fff}
.eb{font-family:Sora;font-weight:600;font-size:22px;letter-spacing:.22em;text-transform:uppercase;color:#a5a8ff}
.tx{font-family:Sora;font-weight:600;font-size:46px;line-height:1.22;margin-top:10px}
img{position:absolute;right:70px;top:56px;width:170px}</style>
<div class=sh></div><img src="file://${process.cwd()}/${W}/logo-white.png"><div class=cap><div class=eb>${eb}</div><div class=tx>${tx}</div></div>`;
const args=['-y','-loglevel','error'], fc=[], durs=[]; let inp=0;
for(const [k,s] of segs.entries()){
 const last=k===segs.length-1, bars=s[0]==='C'?s[3]:s[0]==='S'?s[2]:s[1];
 const d=bars*BAR+(k===0?P0:0), dd=d+(last?0:X);
 if(s[0]==='C'){
  fs.writeFileSync(`${W}/cap.html`,capHtml(s[4],s[5]));await p.goto('file://'+process.cwd()+`/${W}/cap.html`);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(200);
  await p.screenshot({path:`${W}/acap-${L}-${k}.png`,omitBackground:true});
  args.push('-ss',String(s[2]),'-t',dd.toFixed(3),'-i',`clips/${s[1]}.mp4`,'-loop','1','-t',dd.toFixed(3),'-i',`${W}/acap-${L}-${k}.png`);
  const vi=inp++, ci=inp++, dir=k%2?1:-1;
  const z=s[1]==='4011'?'scale=3072:1728:flags=lanczos,crop=1920:1080:x=\'576+'+dir*60+'*t/'+dd.toFixed(2)+'\':y=0':`scale=2016:1134:flags=lanczos,crop=1920:1080:x='48+${dir*40}*t/${dd.toFixed(2)}':y=27`; // 4011 : cadrage haut, sans marquage de conteneur lisible
  fc.push(`[${vi}:v]fps=30,${z},setsar=1,format=yuv420p[b${k}]`,
   `[${ci}:v]format=rgba,fade=in:st=${k===0?1.2:0.5}:d=0.7:alpha=1[c${k}]`,`[b${k}][c${k}]overlay=0:0:shortest=1,fps=30,format=yuv420p[v${k}]`);
 } else {
  const sc=s[0]==='S'?[{type:'shot',dur:dd,img:`${s[1].replace('arch-','arch-'+L+'-')}.jpg`,chip:s[3],text:s[4],note}]
   :[{type:'en',dur:dd,hold:true,eb:t('Le jumeau numérique de l’architecte.','The architect’s digital twin.'),cta:t('Demander une démo','Request a demo')}];
  const dir=`${W}/af-${L}-${k}`;fs.rmSync(dir,{recursive:true,force:true});fs.mkdirSync(dir);
  await p.goto('file://'+process.cwd()+`/${W}/ins.html?s=`+encodeURIComponent(JSON.stringify({scenes:sc})));await p.waitForFunction(()=>window.ready);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(300);
  const n=Math.round(dd*30);
  for(let f=0;f<n;f++){await p.evaluate(x=>render(x),f/30);await p.screenshot({path:`${dir}/f${String(f).padStart(4,'0')}.jpg`,quality:92,type:'jpeg'});}
  args.push('-framerate','30','-i',`${dir}/f%04d.jpg`);fc.push(`[${inp++}:v]fps=30,format=yuv420p,setsar=1[v${k}]`);
 }
 durs.push(d);
}
await b.close();
let prev='[v0]',acc=durs[0];
for(let k=1;k<segs.length;k++){fc.push(`${prev}[v${k}]xfade=transition=fade:duration=${X.toFixed(3)}:offset=${(acc).toFixed(3)}[x${k}]`);prev=`[x${k}]`;acc+=durs[k];}
fc.push(`${prev}fade=in:st=0:d=0.8[vo]`);
args.push('-i','clips/music-33.mp3');
fc.push(`[${inp}:a]atrim=0:${acc.toFixed(3)},asetpts=PTS-STARTPTS,afade=t=out:st=${(acc-3).toFixed(2)}:d=3,loudnorm=I=-16:TP=-1.5[a]`);
const out=`${O}/aura-architect-brand-${L}.mp4`;
execFileSync(F,[...args,'-filter_complex',fc.join(';'),'-map','[vo]','-map','[a]','-c:v','libx264','-preset','slow','-crf','23','-maxrate','3M','-bufsize','6M','-profile:v','high','-pix_fmt','yuv420p','-c:a','aac','-b:a','160k','-ar','48000','-movflags','+faststart',out],{stdio:'inherit'});
execFileSync(F,['-y','-loglevel','error','-ss','11','-i',out,'-frames:v','1','-vf','scale=1280:-1','-c:v','libwebp','-quality','82',`${O}/aura-architect-brand-${L}-poster.webp`]);
console.log(out, acc.toFixed(2)+'s');
