import { chromium } from '/home/user/aura-decision-zen/node_modules/playwright/index.mjs';
import fs from 'fs';import {specs} from './specs.mjs';
const [film,L]=process.argv.slice(2);const list=specs(L)[film];
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--allow-file-access-from-files']});
const p=await b.newPage({viewport:{width:1920,height:1080}});
for(const [k,ins] of list.entries()){
 const dir=`frames/${film}-${L}-${k}`;fs.rmSync(dir,{recursive:true,force:true});fs.mkdirSync(dir,{recursive:true});
 await p.goto('file://'+process.cwd()+'/ins.html?s='+encodeURIComponent(JSON.stringify(ins)));await p.waitForFunction(()=>window.ready);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(300);
 const total=await p.evaluate(()=>TOTAL);const n=Math.round(total*30);
 for(let f=0;f<n;f++){await p.evaluate(t=>render(t),f/30);await p.screenshot({path:`${dir}/f${String(f).padStart(4,'0')}.jpg`,quality:92,type:'jpeg'});}
 console.log(dir,n);
}
await b.close();
