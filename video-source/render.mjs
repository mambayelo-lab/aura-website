import { chromium } from '/home/user/aura-decision-zen/node_modules/playwright/index.mjs';
import fs from 'fs';
const L=process.env.LANG_FILM||'fr';const FD='frames_'+L;
const mode=process.argv[2]||'preview';
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium/chrome-linux/chrome'}).catch(()=>chromium.launch({executablePath:'/opt/pw-browsers/chromium'}));
const p=await b.newPage({viewport:{width:1920,height:1080}});
await p.goto('file:///tmp/claude-0/video/film.html?lang='+(process.env.LANG_FILM||'fr'));await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(500);
if(mode==='preview'){fs.mkdirSync('prev',{recursive:true});
 for(const t of process.argv.slice(3).map(Number)){await p.evaluate(t=>render(t),t);await p.screenshot({path:`prev/${L}t${String(t).padStart(5,'0')}.jpg`,quality:85});}
}else{fs.mkdirSync(FD,{recursive:true});const [a,z]=[+process.argv[3],+process.argv[4]];
 for(let f=a;f<z;f++){await p.evaluate(t=>render(t),f/30);await p.screenshot({path:`${FD}/f${String(f).padStart(5,'0')}.jpg`,quality:93});}}
await b.close();
