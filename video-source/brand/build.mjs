// Film de marque Aura (accueil) : node build.mjs fr|en
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
 ['C','4012',4,2,'Aura Supply',t('Tenir sa promesse client, où que soit la marchandise.','Keeping your promise to customers, wherever the goods are.')],
 ['C','4011',18,2,t('La tension','The tension'),t('Un navire retardé. Le réassort n’arrivera pas à temps.','A ship delayed. The restock won’t make it in time.')],
 ['C','4445',2,2,t('La tension','The tension'),t('Au port, les conteneurs attendent. En rayon, le stock fond.','At the port, containers wait. On the shelf, stock runs down.')],
 ['C','918',0,2,t('Voir venir','See it coming'),t('L’équipe repère la rupture avant qu’elle n’arrive.','The team spots the shortage before it happens.')],
 ['S','cockpit',2,t('Voir venir','See it coming'),t('Les alertes prioritaires, tirées de vos données.','Priority alerts, drawn from your own data.')],
 ['S','detail',2,t('Comprendre','Understand'),t('La chaîne de causes, jusqu’à la donnée source.','The chain of causes, down to the source data.')],
 ['C','4547',6,2,t('Comparer','Compare'),t('Ensemble, on met les options sur la table.','Together, the team puts the options on the table.')],
 ['S','decision2',2,t('Comparer','Compare'),t('Chaque option, ses effets, et ce qui ferait changer d’avis.','Each option, its effects, and what would change the call.')],
 ['C','42666',1,2,t('Choisir','Choose'),t('Le comité tranche, en sachant pourquoi.','The committee makes the call, knowing why.')],
 ['C','44284',0,2,t('Agir','Act'),t('Le plan s’exécute : on sécurise, on réoriente les flux.','The plan runs: supply secured, flows rerouted.')],
 ['C','31346',2,2,t('Résultat','Outcome'),t('Le client est livré, à l’heure.','The customer gets delivered, on time.')],
 ['C','41389',0,2,t('Résultat','Outcome'),t('Un réseau plus robuste, et plus durable.','A sturdier network, and a more sustainable one.')],
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
  await p.screenshot({path:`${W}/cap-${L}-${k}.png`,omitBackground:true});
  args.push('-ss',String(s[2]),'-t',dd.toFixed(3),'-i',`clips/${s[1]}.mp4`,'-loop','1','-t',dd.toFixed(3),'-i',`${W}/cap-${L}-${k}.png`);
  const vi=inp++, ci=inp++, dir=k%2?1:-1;
  const z=s[1]==='4011'?'scale=3072:1728:flags=lanczos,crop=1920:1080:x=\'576+'+dir*60+'*t/'+dd.toFixed(2)+'\':y=0':`scale=2016:1134:flags=lanczos,crop=1920:1080:x='48+${dir*40}*t/${dd.toFixed(2)}':y=27`; // 4011 : cadrage haut, sans marquage de conteneur lisible
  fc.push(`[${vi}:v]fps=30,${z},setsar=1,format=yuv420p[b${k}]`,
   `[${ci}:v]format=rgba,fade=in:st=${k===0?1.2:0.5}:d=0.7:alpha=1[c${k}]`,`[b${k}][c${k}]overlay=0:0:shortest=1,fps=30,format=yuv420p[v${k}]`);
 } else {
  const sc=s[0]==='S'?[{type:'shot',dur:dd,img:`${L}-${s[1]}.jpg`,chip:s[3],text:s[4],note}]
   :[{type:'en',dur:dd,hold:true,eb:t('Voir venir. Comparer. Agir, ensemble.','See it coming. Compare. Act, together.'),cta:t('Demander une démo','Request a demo')}];
  const dir=`${W}/f-${L}-${k}`;fs.rmSync(dir,{recursive:true,force:true});fs.mkdirSync(dir);
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
const out=`${O}/aura-brand-${L}.mp4`;
execFileSync(F,[...args,'-filter_complex',fc.join(';'),'-map','[vo]','-map','[a]','-c:v','libx264','-preset','slow','-crf','23','-maxrate','3M','-bufsize','6M','-profile:v','high','-pix_fmt','yuv420p','-c:a','aac','-b:a','160k','-ar','48000','-movflags','+faststart',out],{stdio:'inherit'});
execFileSync(F,['-y','-loglevel','error','-ss','44','-i',out,'-frames:v','1','-vf','scale=1280:-1','-c:v','libwebp','-quality','82',`${O}/aura-brand-${L}-poster.webp`]);
console.log(out, acc.toFixed(2)+'s');
