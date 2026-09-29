# Génère film_supply.html et film_architect.html à partir de film.html (CSS + moteur communs).
import json, re
base = open('film.html').read()
head = base[:base.index('<div id="stage">')]
script = base[base.index('<script>') + len('<script>\n'):base.index('</script>')]
script = re.sub(r'^const EN=\[.*?\];\n', '', script, flags=re.S)
script = re.sub(r'const T=\[.*?\];\n', '', script, flags=re.S)
script = re.sub(r'const DUR=[0-9.]+;\n', '', script)

K0 = '0.806,720,450;'
def shot(id, img, app, kb, hl, eb, t, who='', sub='', tabs='', cls='shot'):
    x = f' <div class="scene {cls}" id="{id}" data-img="{img}" data-app="{app}" data-kb="{kb}" data-hl="{hl}"\n  data-eb="{eb}" data-t="{t}" data-who="{who}"'
    if sub: x += f' data-s="{sub}"'
    if tabs: x += f' data-tabs="{tabs}"'
    return x + '></div>\n'
def inter(id, word):
    return f' <div class="scene inter" id="{id}"><canvas class="full" id="c{id}" width="1920" height="1080"></canvas><div class="center"><div class="ititle">{word}</div></div></div>\n'
def impact(id, eb, l1, l2, tag):
    return f''' <div class="scene impact" id="{id}"><div class="center">
  <div class="eyebrow a">{eb}</div>
  <div class="huge"><span class="line k" style="font-size:92px">{l1}</span><span class="line k accent" style="font-size:92px">{l2}</span></div>
  <div class="tag a">{tag}</div></div></div>\n'''
def cta(product):
    return f''' <div class="scene" id="cta"><div class="center">
  <img class="a" src="assets/logo-white.png" style="width:380px">
  <div class="sub a" style="font-size:26px;letter-spacing:.2em;text-transform:uppercase;margin-top:-6px">{product}</div>
  <div class="a" style="margin-top:34px"><span class="cta">Réservez un cadrage</span></div>
  <div class="sub a" style="font-size:22px;margin-top:8px;letter-spacing:.04em">aura-website-one.vercel.app</div>
 </div></div>\n'''
def res(l1, l2, l3):
    return f''' <div class="scene" id="res"><div class="center">
  <div class="big" style="font-size:88px"><span class="line k">{l1}</span><span class="line k">{l2}</span><span class="line k accent">{l3}</span></div>
 </div></div>\n'''
def offer(sprint, dur, text):
    return f''' <div class="scene" id="offer"><div class="center" style="gap:40px">
  <div class="eyebrow a">Pour démarrer</div>
  <div class="big a" style="font-size:70px">{text}</div>
  <div class="a"><div class="glass pane" style="width:auto;padding:26px 44px"><div class="eyebrow">{dur}</div><div class="pt">{sprint}</div></div></div>
 </div></div>\n'''

EXTRA_CSS = '''
.pair .before{position:absolute;inset:0;z-index:5;background:#23252f}
.pair .before canvas{position:absolute;inset:0;width:1160px;height:725px}
.pair .edge{position:absolute;top:0;bottom:0;width:3px;z-index:6;background:linear-gradient(180deg,transparent,#fff,transparent);box-shadow:0 0 24px #8d8aff,0 0 6px #fff;opacity:0}
.ba{position:absolute;top:18px;z-index:7;font-family:Sora;font-weight:600;font-size:15px;letter-spacing:.2em;text-transform:uppercase;padding:8px 14px;border-radius:999px}
.ba.av{left:18px;color:#d5d7de;background:rgba(40,42,52,.85);border:1px solid rgba(255,255,255,.2)}
.ba.ap{right:18px;color:#fff;background:var(--indigo);box-shadow:0 0 18px rgba(71,67,230,.8)}
.tswap{position:relative;min-height:200px}.tswap .title{position:absolute;left:0;top:0}
.tswap .t0{color:#b8bac4}
.dsi-grid{display:grid;grid-template-columns:repeat(5,300px);gap:18px}
.dsi-grid .glass{padding:26px 24px;text-align:left;display:grid;gap:12px;align-content:start;min-height:210px}
.dsi-grid b{font-family:Sora;font-weight:600;font-size:24px;line-height:1.2}
.dsi-grid span{font-size:18px;line-height:1.45;color:#c3c6ea}
.dsi-grid i{width:44px;height:44px;border-radius:12px;background:var(--indigo);box-shadow:0 0 20px rgba(71,67,230,.8);display:grid;place-items:center;font-style:normal;font-family:Sora;font-weight:700;font-size:18px}
#heroSvg{position:absolute;left:50%;top:50%;transform:translate(-50%,-52%)}
'''
BP_CSS = '''
body.bp #bg{background:linear-gradient(160deg,#081034 0%,#0d1848 55%,#131c5a 100%)}
body.bp #grid{opacity:1;inset:0;background-image:linear-gradient(rgba(140,165,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(140,165,255,.07) 1px,transparent 1px),linear-gradient(rgba(140,165,255,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(140,165,255,.14) 1px,transparent 1px);background-size:16px 16px,16px 16px,80px 80px,80px 80px;mask-image:none}
body.bp #bgfx{opacity:.35}
body.bp .frame{border-radius:6px;box-shadow:0 30px 80px rgba(0,0,0,.45),0 0 0 1px #8fa8ff,0 0 40px rgba(71,67,230,.3)}
body.bp .frame:after{background:none}
body.bp .bar{background:#0b1440;border-bottom:1px solid #8fa8ff55}
body.bp .bar span,body.bp .eyebrow,body.bp .who,body.bp .tab{font-family:"DejaVu Sans Mono",monospace;letter-spacing:.12em}
body.bp .eyebrow{font-size:17px}
body.bp .rule{height:1px;width:120px;box-shadow:none;background:#8fa8ff}
.dim{position:absolute;font-family:"DejaVu Sans Mono",monospace;font-size:14px;color:#8fa8ff;letter-spacing:.1em}
.ticks{position:absolute;width:26px;height:26px;border-color:#a5b8ff;border-style:solid;opacity:.9}
'''

JS_EXTRA = r'''
const LANG=document.documentElement.lang==='en'?'en':'fr';
function ctx2(c){const g=c.getContext('2d');g.clearRect(0,0,c.width,c.height);return g}
// --- avant : visuels générés, désaturés
function box(g,x,y,w,h,label,sub){g.fillStyle='#3a3d4a';g.strokeStyle='#707585';g.lineWidth=2;g.beginPath();g.roundRect(x,y,w,h,10);g.fill();g.stroke();g.fillStyle='#c9cbd3';g.font='600 22px Sora';g.fillText(label,x+18,y+36);if(sub){g.fillStyle='#8a8e9c';g.font='400 16px Lexend';g.fillText(sub,x+18,y+62)}}
function sheet(g,x,y,cols,rows,cw,ch,marks){g.fillStyle='#e4e5e9';g.fillRect(x,y,cols*cw,rows*ch);g.strokeStyle='#a9acb6';g.lineWidth=1;for(let i=0;i<=cols;i++){g.beginPath();g.moveTo(x+i*cw,y);g.lineTo(x+i*cw,y+rows*ch);g.stroke()}for(let j=0;j<=rows;j++){g.beginPath();g.moveTo(x,y+j*ch);g.lineTo(x+cols*cw,y+j*ch);g.stroke()}g.fillStyle='#6b6f7c';g.font='14px Lexend';(marks||[]).forEach(([c,r,t])=>g.fillText(t,x+c*cw+6,y+r*ch+ch-7))}
const FR=LANG==='fr';
const BEFORE={
 scatter(g,lt){const L=[['SAP S/4HANA','ERP',70,70],['WMS','Entrepôts',640,60],['Data lake',FR?'Historique':'History',120,420],['TMS',FR?'Transport':'Transport',760,440],['Mail',FR?'Fournisseurs':'Suppliers',430,560]];
  L.forEach(([a,b,x,y],i)=>{const k=eo((lt-0.1-i*0.15)/0.5);g.globalAlpha=k;box(g,x,y,300,90,a,b)});g.globalAlpha=1;
  g.setLineDash([8,10]);g.strokeStyle='#6f7383';g.lineWidth=2;[[220,160,250,420],[790,150,880,440],[370,110,640,100]].forEach(([a,b,c,d])=>{g.beginPath();g.moveTo(a,b);g.lineTo(c,d);g.stroke()});g.setLineDash([]);
  const k=eo((lt-0.8)/0.6);g.globalAlpha=k;sheet(g,420,230,6,6,52,30,[[0,0,'Réf.'],[1,1,'??'],[3,2,'#N/A'],[2,4,'v3_final']]);g.globalAlpha=1;
  g.fillStyle='#b9bcc6';g.font='600 18px Sora';g.fillText(FR?'export_hebdo_V7.xlsx':'weekly_export_V7.xlsx',420,220)},
 late(g,lt){ // stock qui tombe à zéro, camion à l'arrêt
  g.strokeStyle='#8a8e9c';g.lineWidth=2;g.beginPath();g.moveTo(80,80);g.lineTo(80,420);g.lineTo(640,420);g.stroke();
  const pts=[[80,140],[180,170],[280,200],[380,260],[480,340],[560,420],[640,420]];const n=Math.floor(eo(lt/1.4)*(pts.length-1))+1;
  g.strokeStyle='#c9cbd3';g.lineWidth=4;g.beginPath();pts.slice(0,n).forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.stroke();
  g.fillStyle='#9a9ea9';g.font='16px Lexend';g.fillText(FR?'Stock ZIP-ARGENT':'ZIP-ARGENT stock',90,70);
  if(lt>1.3){g.fillStyle='#b4525c';g.font='700 30px Sora';g.save();g.translate(470,470);g.rotate(-0.08);g.strokeStyle='#b4525c';g.lineWidth=3;g.strokeRect(-10,-38,300,52);g.fillText(FR?'RUPTURE · J+0':'STOCKOUT · D+0',0,0);g.restore()}
  // camion
  const tx=760,ty=250;g.fillStyle='#4a4d5a';g.fillRect(tx,ty,230,110);g.fillRect(tx+230,ty+40,80,70);g.fillStyle='#2a2c35';[[tx+50,ty+120],[tx+180,ty+120],[tx+270,ty+120]].forEach(([x,y])=>{g.beginPath();g.arc(x,y,22,0,6.283);g.fill()});
  g.fillStyle='#9a9ea9';g.font='600 18px Sora';g.fillText(FR?'Camion à quai, à l\'arrêt':'Truck idle at the dock',tx,ty+185);
  // rayonnage vide
  g.strokeStyle='#6f7383';g.lineWidth=3;for(let i=0;i<4;i++){g.beginPath();g.moveTo(760,470+i*50);g.lineTo(1080,470+i*50);g.stroke()}g.fillStyle='#8a8e9c';g.font='16px Lexend';g.fillText(FR?'Rayons vides':'Empty shelves',760,700);
  if(lt>1.6){g.fillStyle='#3a3d4a';g.strokeStyle='#8a8e9c';g.beginPath();g.roundRect(120,520,520,120,12);g.fill();g.stroke();g.fillStyle='#d5d7de';g.font='600 20px Sora';g.fillText(FR?'Alerte reçue : 3 jours après':'Alert received: 3 days late',145,565);g.fillStyle='#9a9ea9';g.font='16px Lexend';g.fillText(FR?'« Le client a appelé ce matin. »':'“The customer called this morning.”',145,600)}},
 guess(g,lt){ // réunion de crise
  g.fillStyle='#3a3d4a';g.strokeStyle='#6f7383';g.lineWidth=2;g.beginPath();g.ellipse(580,380,300,120,0,0,6.283);g.fill();g.stroke();
  const P=[[330,300],[450,230],[600,215],[740,240],[850,320],[330,470],[500,520],[680,520],[840,460]];
  P.forEach(([x,y],i)=>{g.fillStyle='#5a5e6c';g.beginPath();g.arc(x,y,26,0,6.283);g.fill()});
  const Q=[[FR?'On attend ?':'Wait?',380,150],[FR?'Double source ?':'Dual source?',640,120],[FR?'Stock tampon !':'Buffer stock!',860,190],['?',250,560],[FR?'Au feeling…':'Gut feeling…',720,630]];
  Q.forEach(([t,x,y],i)=>{const k=eo((lt-0.2-i*0.3)/0.4);if(k<=0)return;g.globalAlpha=k;g.fillStyle='#e4e5e9';g.font='600 20px Sora';const w=g.measureText(t).width+30;g.beginPath();g.roundRect(x-15,y-30,w,44,22);g.fill();g.fillStyle='#3a3d4a';g.fillText(t,x,y);g.globalAlpha=1});
  g.fillStyle='#9a9ea9';g.font='600 18px Sora';g.fillText(FR?'Réunion de crise · 18h40':'Crisis meeting · 6:40 pm',440,390)},
 nolog(g,lt){sheet(g,110,110,8,12,110,38,[[0,0,FR?'Décision':'Decision'],[1,0,FR?'Qui':'Who'],[2,0,FR?'Effet':'Effect'],[0,2,'?'],[2,2,'?'],[0,4,FR?'voir mail':'see email'],[2,5,'??'],[0,7,'—'],[4,3,'#REF!']]);
  g.strokeStyle='#8a8e9c';g.lineWidth=3;if(lt>0.8){g.beginPath();g.moveTo(130,300);g.lineTo(900,420);g.stroke();g.beginPath();g.moveTo(130,420);g.lineTo(900,300);g.stroke()}
  g.fillStyle='#d8d2a8';g.save();g.translate(880,470);g.rotate(0.06);g.fillRect(0,0,190,150);g.fillStyle='#55544a';g.font='600 18px Sora';g.fillText(FR?'ROI ?':'ROI?',20,40);g.font='16px Lexend';g.fillText(FR?'à retrouver…':'to dig up…',20,80);g.restore()}
};
// --- ouverture Supply : animation du héros (signal → règle → décision), en HD
function heroSvg(){const W=1500,H=760;const S=['ERP','WMS','TMS','Kafka','API'];const on={x:780,y:250},ru={x:780,y:520},al={x:1100,y:385},de={x:1320,y:385};
 const cv=(x1,y1,x2,y2)=>{const m=(x1+x2)/2;return `M${x1} ${y1} C${m} ${y1} ${m} ${y2} ${x2} ${y2}`};
 const P=[];S.forEach((s,i)=>{const y=130+i*125;P.push(cv(250,y,i<3?on.x-44:ru.x-60,i<3?on.y:ru.y))});P.push(`M${on.x} ${on.y+44} L${ru.x} ${ru.y-40}`);P.push(cv(on.x+44,on.y,al.x-34,al.y));P.push(cv(ru.x+60,ru.y,al.x-34,al.y));P.push(`M${al.x+34} ${al.y} L${de.x-52} ${de.y}`);
 let h=`<svg id="heroSvg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs><filter id="gl"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;
 ['SIGNAL',LANG==='fr'?'RÈGLE':'RULE','DÉCISION'].forEach((t,i)=>{h+=`<text class="hs-col" x="${[170,780,1210][i]}" y="40" text-anchor="middle" fill="#a5a8ff" font-family="DejaVu Sans Mono,monospace" font-size="20" letter-spacing="6">${LANG==='en'&&i==2?'DECISION':t}</text>`});
 P.forEach((d,i)=>{h+=`<path class="hs-p" d="${d}" fill="none" stroke="#6f6bff" stroke-width="2.4" stroke-dasharray="6 8" opacity=".85"/>`});
 S.forEach((s,i)=>{const y=130+i*125;h+=`<g class="hs-s"><rect x="90" y="${y-30}" width="160" height="60" rx="12" fill="#151D52" stroke="#8d8aff" stroke-width="2"/><text x="170" y="${y+9}" text-anchor="middle" fill="#fff" font-family="DejaVu Sans Mono,monospace" font-size="24">${s}</text></g>`});
 h+=`<g class="hs-n" id="hsOn"><circle cx="${on.x}" cy="${on.y}" r="44" fill="#151D52" stroke="#a5a8ff" stroke-width="3"/><circle cx="${on.x}" cy="${on.y}" r="12" fill="#fff"/><text x="${on.x}" y="${on.y+80}" text-anchor="middle" fill="#fff" font-family="Sora" font-weight="600" font-size="26">${LANG==='fr'?'Ontologie':'Ontology'}</text></g>`;
 h+=`<g class="hs-n" id="hsRu"><rect x="${ru.x-60}" y="${ru.y-40}" width="120" height="80" rx="14" fill="#151D52" stroke="#a5a8ff" stroke-width="3"/><text x="${ru.x}" y="${ru.y+8}" text-anchor="middle" fill="#fff" font-family="DejaVu Sans Mono,monospace" font-size="20">if · then</text><text x="${ru.x}" y="${ru.y+78}" text-anchor="middle" fill="#fff" font-family="Sora" font-weight="600" font-size="26">${LANG==='fr'?'Règle causale':'Causal rule'}</text></g>`;
 h+=`<g class="hs-n" id="hsAl"><circle cx="${al.x}" cy="${al.y}" r="34" fill="#3a1d10" stroke="#f59e0b" stroke-width="3"/><circle cx="${al.x}" cy="${al.y}" r="14" fill="#f59e0b"/><text x="${al.x}" y="${al.y+70}" text-anchor="middle" fill="#fff" font-family="Sora" font-weight="600" font-size="26">${LANG==='fr'?'Alerte':'Alert'}</text></g>`;
 h+=`<g class="hs-n" id="hsDe" filter="url(#gl)"><circle cx="${de.x}" cy="${de.y}" r="52" fill="#4743E6" stroke="#a5a8ff" stroke-width="3"/><path d="M${de.x-22} ${de.y} l15 16 l30 -34" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><text x="${de.x}" y="${de.y+92}" text-anchor="middle" fill="#fff" font-family="Sora" font-weight="600" font-size="26">${LANG==='fr'?'Décision':'Decision'}</text><text x="${de.x}" y="${de.y+122}" text-anchor="middle" fill="#a5a8ff" font-family="Lexend" font-size="19">${LANG==='fr'?'validée par un humain':'human-validated'}</text></g>`;
 h+=`<g id="hsDots"></g></svg>`;return h}
function drawHero(lt){const svg=document.getElementById('heroSvg');if(!svg)return;
 svg.querySelectorAll('.hs-col').forEach((e,i)=>e.style.opacity=eo((lt-0.1-i*0.2)/0.5));
 svg.querySelectorAll('.hs-s').forEach((e,i)=>{const k=eo((lt-0.2-i*0.1)/0.5);e.style.opacity=k});
 const ps=[...svg.querySelectorAll('.hs-p')];ps.forEach((p,i)=>{const k=eo((lt-0.6-(i>4?0.6+(i-5)*0.35:i*0.08))/0.7);p.style.opacity=.85*k});
 [['hsOn',1.1],['hsRu',1.3],['hsAl',1.9],['hsDe',2.4]].forEach(([id,t0])=>{const e=document.getElementById(id);const k=eo((lt-t0)/0.5);e.style.opacity=k;e.style.transform=`scale(${0.85+0.15*k})`;e.style.transformOrigin='center';e.style.transformBox='fill-box'});
 const dg=document.getElementById('hsDots');let h='';ps.forEach((p,i)=>{if(lt<1.2)return;const L=p.getTotalLength();const u=((lt*0.55+i*0.17)%1);const q=p.getPointAtLength(u*L);h+=`<circle cx="${q.x}" cy="${q.y}" r="6" fill="#fff" filter="url(#gl)"/>`});dg.innerHTML=h;
 const ti=document.getElementById('heroTitle');if(ti){const k=eo((lt-2.9)/0.8);ti.style.opacity=k;ti.style.transform=`translateY(${(1-k)*20}px)`}
 svg.style.opacity=1-0.55*eo((lt-2.9)/0.8)}
// --- ouverture Architect : plan qui se dessine
function drawBlueprint(c,lt,dense){const g=ctx2(c);g.strokeStyle='#a5b8ff';g.fillStyle='#a5b8ff';g.lineWidth=1.6;
 const B=[[420,250,300,170,'CRM'],[820,200,300,170,'ERP'],[1220,260,300,170,'WMS'],[620,560,300,170,'API Gateway'],[1030,600,300,170,'Data']];
 B.forEach(([x,y,w,h,t],i)=>{const k=cl((lt-0.2-i*0.25)/0.9);const per=2*(w+h);let rem=per*k;g.beginPath();g.moveTo(x,y);const seg=[[x+w,y],[x+w,y+h],[x,y+h],[x,y]];let px=x,py=y;for(const [qx,qy] of seg){const d=Math.hypot(qx-px,qy-py);if(rem<=0)break;const f=Math.min(1,rem/d);g.lineTo(px+(qx-px)*f,py+(qy-py)*f);rem-=d;px=qx;py=qy}g.stroke();
  if(k>0.9){g.globalAlpha=eo((lt-1.1-i*0.25)/0.5);g.font='600 26px "DejaVu Sans Mono"';g.fillText(t,x+22,y+48);g.font='14px "DejaVu Sans Mono"';g.fillText(`${w} × ${h}`,x+22,y+h-18);g.globalAlpha=1}});
 const E=[[720,335,820,285],[1120,285,1220,345],[770,560,970,370],[920,645,1030,685],[1370,430,1180,600]];
 E.forEach(([a,b,cx,d],i)=>{const k=cl((lt-1.4-i*0.15)/0.6);if(k<=0)return;g.setLineDash([6,6]);g.beginPath();g.moveTo(a,b);g.lineTo(a+(cx-a)*k,b+(d-b)*k);g.stroke();g.setLineDash([])});
 // cotes
 const k=cl((lt-0.5)/1);g.globalAlpha=k;g.beginPath();g.moveTo(420,200);g.lineTo(1520,200);g.stroke();g.font='14px "DejaVu Sans Mono"';g.fillText('A-01 · '+(FR?'MODÈLE UNIQUE':'SINGLE MODEL'),900,188);g.globalAlpha=1}
'''

def build(name, body_cls, lang_title, stage, T, EN, extra_handlers, css_extra=''):
    DUR = T[-1][2]
    h = head.replace('</style>', EXTRA_CSS + css_extra + '</style>')
    h = h.replace('<body>', f'<body class="{body_cls}">')
    js = script
    js = js.replace('const DUR', 'const _unused')  # safety (none expected)
    pre = 'const EN=' + json.dumps(EN, ensure_ascii=False) + ';\n' + \
        "if(new URLSearchParams(location.search).get('lang')==='en'){const st=document.getElementById('stage');let h=st.innerHTML;for(const [a,b] of EN){h=h.split(a).join(b);}st.innerHTML=h;document.documentElement.lang='en'}\n"
    # le script d'origine commence par la traduction : on la remplace par la nôtre
    js = re.sub(r"^if\(new URLSearchParams[^\n]*\n[^\n]*document.documentElement.lang='en'}\n", '', js, count=1)
    js = pre + 'const T=' + json.dumps(T) + ';\nconst DUR=' + str(DUR) + ';\n' + js
    js = js.replace('function render(t){', JS_EXTRA + '\nfunction render(t){')
    js = js.replace("if(id==='sp')drawGlobe(lt);", "if(id==='sp')drawGlobe(lt);\n" + extra_handlers)
    open(name, 'w').write(h + '<div id="stage">\n <div id="bg"></div><div id="grid"></div><canvas id="bgfx" class="full" width="1920" height="1080"></canvas>\n' + stage + '</div>\n<script>\n' + js + '</script></body></html>\n')
    return DUR

PAIR_JS = r'''
  if(el.classList.contains('pair')){
   const wipe=+el.dataset.wipe;const w=ease((lt-wipe)/0.9);
   const bf=el.querySelector('.before');if(!bf.dataset.init){bf.dataset.init=1}
   const cv=bf.querySelector('canvas');const g=ctx2(cv);g.fillStyle='#23252f';g.fillRect(0,0,1160,725);BEFORE[el.dataset.before](g,lt);
   bf.style.clipPath=`inset(0 0 0 ${w*100}%)`;const ed=el.querySelector('.edge');ed.style.left=(w*1160-1)+'px';ed.style.opacity=(w>0&&w<1)?1:0;
   el.querySelector('.ba.av').style.opacity=1-w;el.querySelector('.ba.ap').style.opacity=w;
   const t0=el.querySelector('.t0'),t1=el.querySelector('.t1');if(t0){const k=cl((lt-wipe-0.1)/0.6);t0.style.opacity=(1-k)*t0.style.opacity;t1.style.opacity=k*cl((lt-0.1)/0.7);t1.style.transform=`translateY(${(1-k)*16}px)`}
   const fr=el.querySelector('.frame');fr.style.filter=`saturate(${0.2+0.8*w})`;
   const imgs=el.querySelectorAll('.cam img');if(imgs.length>1){const len=(+el.dataset.len)-wipe;const seg=len/imgs.length;imgs.forEach((im,i)=>{im.style.opacity=i===0?1:cl((lt-wipe-i*seg+0.2)/0.4)});el.querySelectorAll('.tab').forEach((tb,i)=>tb.classList.toggle('on',lt>wipe&&Math.min(imgs.length-1,Math.floor((lt-wipe+0.2)/seg))===i))}
  }
'''

PAIR_SETUP = r'''
document.querySelectorAll('.pair').forEach(s=>{
 const vp=s.querySelector('.vp');vp.insertAdjacentHTML('beforeend',`<div class="before"><canvas width="1160" height="725"></canvas></div><div class="edge"></div><span class="ba av">${s.dataset.av}</span><span class="ba ap">${s.dataset.ap}</span>`);
 const t=s.querySelector('.left .title');t.outerHTML=`<div class="tswap"><div class="title t0" style="font-size:50px">${s.dataset.t0}</div><div class="title t1" style="font-size:50px;opacity:0">${s.dataset.t}</div></div>`;
});
'''
def patch_script():
    global script
    script = script.replace("// ---------- background particles", PAIR_SETUP + "\n// ---------- background particles", 1)
    script = script.replace("if(imgs.length>1){", "if(imgs.length>1&&!el.classList.contains('pair')){", 1)
    script = script.replace("el.querySelectorAll('.a').forEach((n,i)=>", "el.querySelectorAll('.a').forEach((n,i)=>", 1)
patch_script()

def pair(id, before, t0, imgs, app, t, who, tabs, T):
    a, b = [(x[1], x[2]) for x in T if x[0] == id][0]
    x = shot(id, imgs, app, K0 + '0.9,720,450', '', 'Aura Supply · <b>' + ('Avant → Après') + '</b>', t, who, '', tabs, cls='shot pair')
    return x.replace('></div>\n', f' data-before="{before}" data-t0="{t0}" data-wipe="2.6" data-len="{b-a}" data-av="Avant" data-ap="Après"></div>\n')

# ================= FILM SUPPLY (74 s, bande-son v1 montée) =================
TS = [['hero',0,6],['pb',6,12],['i1',12,14],['p1',14,21],['p2',21,27.5],['p3',27.5,34],['p4',34,41],['i2',41,43],
      ['dsi',43,49],['si',49,53],['offer',53,56.5],['i4',56.5,58.5],['res',58.5,64.5],['cta',64.5,74]]
red='<div class="rule a" style="background:var(--red);box-shadow:0 0 18px var(--red)"></div>'
S = ''' <div class="scene" id="hero"><div class="center" style="justify-content:flex-end;padding-bottom:120px"></div></div>
 <div class="scene" id="pb"><canvas class="full" id="globe" width="1920" height="1080"></canvas>
  <div class="left" style="width:600px"><div class="eyebrow red a">Supply · Le problème</div>''' + red + '''
  <div class="title a">Vos données sont éparpillées.</div><div class="sub a">SAP, WMS, data lake : les ruptures se voient trop tard.</div></div>
  <div class="label red" id="milan" style="opacity:0">Fournisseur · Milan</div></div>
''' + inter('i1', 'Anticiper')
S += pair('p1','scatter','Des sources éparpillées.','fs_connect.png,fs_map.png,fs_onto.png','Aura Supply Chain · Studio','Connecté sans copie, ontologie vivante.','DSI · Équipes data','Connexion et sollicitation,Mapping scoré,Ontologie vivante',TS)
S += pair('p2','late','Une rupture découverte trop tard.','fs_cockpit.png,fs_cause.png','Aura Supply Chain · Cockpit','Une alerte anticipée, avec sa cause.','Directeur supply chain','Alerte,Chaîne de causalité',TS)
S += pair('p3','guess','Un arbitrage au doigt mouillé.','n_decide.png','Aura Supply Chain · Décision','Une décision chiffrée, le plus petit changement.','Acheteurs · DAF','',TS)
S += pair('p4','nolog','Aucun suivi des décisions.','s3.png','Aura Supply Chain · Journal','Chaque décision suivie, son effet mesuré.','DAF · COMEX','',TS)
S += inter('i2', 'Intégrer')
S += ''' <div class="scene" id="dsi"><div class="center" style="gap:44px">
  <div class="eyebrow a">Pour les DSI</div>
  <div class="big a" style="font-size:64px">Intégration sans risque <span class="accent">pour votre SI.</span></div>
  <div class="dsi-grid a">
   <div class="glass"><i>1</i><b>Aucune copie massive</b><span>Les données restent chez vous ; seuls des agrégats légers.</span></div>
   <div class="glass"><i>2</i><b>SI protégé</b><span>Sollicitation plafonnée, extractions lourdes la nuit.</span></div>
   <div class="glass"><i>3</i><b>Intégration propre</b><span>Anticorruption par source, un maître par attribut.</span></div>
   <div class="glass"><i>4</i><b>Connexion guidée</b><span>Questionnaire, métadonnées, mapping scoré, validation.</span></div>
   <div class="glass"><i>5</i><b>Identifiants serveur</b><span>Jamais dans le navigateur, accès limités.</span></div>
  </div></div></div>
'''
S += impact('si','Supply · Impact',"Chaque rupture anticipée,","c'est un coût évité.","Moins de pénalités, d'urgences et de surstocks")
S += offer('Sprint Résilience','3 à 4 semaines','Commencez par votre risque prioritaire.')
S += inter('i4', 'Décider')
S += res('Moins de ruptures.',"Moins d'urgences.",'Des décisions tracées.')
S += cta('Supply Chain')
EN_COMMON = [["Réservez un cadrage","Book a scoping session"],["Pour démarrer","To get started"],["Avant → Après","Before → After"],['data-av="Avant"','data-av="Before"'],['data-ap="Après"','data-ap="After"']]
EN_S = EN_COMMON + [["Supply · Le problème","Supply · The problem"],["Vos données sont éparpillées.","Your data is scattered."],["SAP, WMS, data lake : les ruptures se voient trop tard.","SAP, WMS, data lake: shortages surface too late."],["Fournisseur · Milan","Supplier · Milan"],
 ["Anticiper","Anticipate"],["Des sources éparpillées.","Scattered sources."],["Connecté sans copie, ontologie vivante.","Connected without copying, living ontology."],["DSI · Équipes data","CIO · Data teams"],["Connexion et sollicitation,Mapping scoré,Ontologie vivante","Connection and load policy,Scored mapping,Living ontology"],
 ["Une rupture découverte trop tard.","A shortage found too late."],["Une alerte anticipée, avec sa cause.","An early alert, with its cause."],["Directeur supply chain","Supply chain director"],["Alerte,Chaîne de causalité","Alert,Causal chain"],
 ["Un arbitrage au doigt mouillé.","A call made on gut feeling."],["Une décision chiffrée, le plus petit changement.","A quantified decision, the smallest change."],["Acheteurs · DAF","Buyers · CFO"],
 ["Aucun suivi des décisions.","No decision follow-up."],["Chaque décision suivie, son effet mesuré.","Every decision tracked, its effect measured."],["DAF · COMEX","CFO · Executive committee"],
 ["Intégrer","Integrate"],["Pour les DSI","For CIOs"],["Intégration sans risque ","Risk-free integration "],["pour votre SI.","for your IT landscape."],["Aucune copie massive","No bulk copy"],["Les données restent chez vous ; seuls des agrégats légers.","Data stays with you; only light aggregates."],
 ["SI protégé","Systems protected"],["Sollicitation plafonnée, extractions lourdes la nuit.","Load capped, heavy extractions at night."],["Intégration propre","Clean integration"],["Anticorruption par source, un maître par attribut.","Anti-corruption per source, one master per attribute."],
 ["Connexion guidée","Guided connection"],["Questionnaire, métadonnées, mapping scoré, validation.","Questionnaire, metadata, scored mapping, validation."],["Identifiants serveur","Server-side credentials"],["Jamais dans le navigateur, accès limités.","Never in the browser, limited access."],
 ["Chaque rupture anticipée,","Every shortage anticipated"],["c'est un coût évité.","is a cost avoided."],["Moins de pénalités, d'urgences et de surstocks","Fewer penalties, rush orders and overstock"],
 ["Sprint Résilience","Resilience Sprint"],["3 à 4 semaines","3 to 4 weeks"],["Commencez par votre risque prioritaire.","Start with your priority risk."],["Décider","Decide"],
 ["Moins de ruptures.","Fewer shortages."],["Moins d'urgences.","Fewer emergencies."],["Des décisions tracées.","Decisions on record."],["Aura Supply Chain · Journal","Aura Supply Chain · Log"],["Aura Supply Chain · Décision","Aura Supply Chain · Decision"],
 ["fs_connect.png","es_connect.png"],["fs_map.png","es_map.png"],["fs_onto.png","es_onto.png"],["fs_cockpit.png","es_cockpit.png"],["fs_cause.png","es_cause.png"],["n_decide.png","es_decide.png"],["s3.png","es_journal.png"]]
HS = r'''
  if(id==='hero'){if(!document.getElementById('heroSvg')){el.insertAdjacentHTML('afterbegin',heroSvg());el.querySelector('.center').innerHTML=`<div id="heroTitle" style="text-align:center"><img src="assets/logo-white.png" style="width:300px"><div class="sub" style="font-size:24px;letter-spacing:.2em;text-transform:uppercase;margin-top:10px">Supply Chain</div></div>`}drawHero(lt)}
  if(id==='pb')drawGlobe(lt);
  if(id==='i1')drawConverge(lt);if(id==='i2')drawMesh(lt);if(id==='i4')drawHorizon(lt);
  if(el.classList.contains('inter')){const ti=el.querySelector('.ititle');const p=eo((lt-0.25)/0.7);ti.style.opacity=p*cl((2.2-lt)/0.4+0.2);ti.style.letterSpacing=((1-p)*0.3-0.03)+'em';ti.style.filter=`blur(${(1-p)*10}px)`}
  if(id==='dsi'){el.querySelectorAll('.dsi-grid .glass').forEach((c,i)=>{const k=eo((lt-0.9-i*0.25)/0.6);c.style.opacity=k;c.style.transform=`translateY(${(1-k)*24}px)`})}
''' + PAIR_JS
dS = build('film_supply.html', '', 'fr', S, TS, EN_S, HS)

# ================= FILM ARCHITECT (69,6 s, 100 BPM, style plan technique) =================
bar = 2.4
seq = [('open',2),('ap',2.5),('i3',1),('a1',1.5),('a2',2.5),('a6',1.5),('a7',1.5),('i2',1),('d1',1.5),('ab',2),('a8',1.5),('ai',2),('offer',1.5),('i4',1),('res',2.5),('cta',3.5)]
TA=[];t=0
for k,n in seq: TA.append([k,round(t,3),round(t+n*bar,3)]); t+=n*bar
A = ''' <div class="scene" id="open"><canvas class="full" id="cbp" width="1920" height="1080"></canvas>
  <div class="center" style="justify-content:flex-end;padding-bottom:110px"><div id="bpTitle"><img src="assets/logo-white.png" style="width:300px"><div class="sub" style="font-size:24px;letter-spacing:.3em;text-transform:uppercase;margin-top:10px;font-family:'DejaVu Sans Mono',monospace">Architect</div></div></div></div>
 <div class="scene" id="ap"><canvas class="full" id="tangle" width="1920" height="1080"></canvas>
  <div class="left" style="width:560px"><div class="eyebrow red a">Architect · Le problème</div>''' + red + '''
  <div class="title a">Des semaines de schémas manuels.</div><div class="sub a">Des vues qui se contredisent, des reprises sans fin.</div></div></div>
''' + inter('i3','Cadrer')
A += shot('a1','n_cadrage.png','A-01 · Cadrage',K0+'1.0,560,480','','A-01 · <b>Cadrage</b>','Une demande, un cadrage guidé.',"Architectes d'entreprise et de solution")
A += shot('a2','n_inter.png,fa_fonct.png,n_objets.png,n_bpmn.png','A-02 · Modèle unique',K0+'0.86,760,450','','A-02 · <b>Modèle unique</b>','Un modèle, des vues cohérentes.','Architectes · Architectes data','','Inter-applicatif,Fonctionnel,Objets métier et données,BPMN')
A += shot('a6','n_bp.png','A-03 · Bonnes pratiques',K0+'1.0,860,500','','A-03 · <b>Contrôle</b>','Vérifié par les bonnes pratiques.','Architectes · DSI')
A += shot('a7','n_estim.png','A-04 · Estimation',K0+'1.0,860,650','','A-04 · <b>Estimation</b>','Chaque changement, estimé.','PMO · Transformation')
A += inter('i2','Décider')
A += shot('d1','d1.png','A-05 · Décision (moteur Bora)',K0+'1.0,760,640','','A-05 · <b>Décision</b>','Le scénario prudent, expliqué.','DSI · CTO','Et le plus petit changement qui le ferait basculer.')
A += shot('ab','b_epics.png,x_exig.png','A-06 · Backlog et exigences',K0+'0.9,720,450','','A-06 · <b>Backlog</b>','Backlog en cartes, exigences reliées.','Chefs de projet · PMO','','Backlog en cartes,Exigences')
A += shot('a8','x1c.png','A-07 · Spécification et exports',K0+'1.0,860,560','325,392,1070,340','A-07 · <b>Livrables</b>','Spécification et exports vers vos outils.','Chefs de projet · PMO')
A += impact('ai','Architect · Impact','Des semaines de schémas','ramenées à une conversation.','Cohérente dès le départ : moins de reprises')
A += offer('Design Sprint Architecture','2 à 3 semaines','Commencez par votre programme prioritaire.')
A += inter('i4','Livrer')
A += res('Moins de schémas manuels.','Moins de reprises.','Des choix prouvés.')
A += cta('Architect')
EN_A = EN_COMMON + [["Architect · Le problème","Architect · The problem"],["Des semaines de schémas manuels.","Weeks of manual diagrams."],["Des vues qui se contredisent, des reprises sans fin.","Views that contradict each other, endless rework."],
 ["Cadrer","Scope"],["A-01 · Cadrage","A-01 · Scoping"],["<b>Cadrage</b>","<b>Scoping</b>"],["Une demande, un cadrage guidé.","A request, a guided scoping."],["Architectes d'entreprise et de solution","Enterprise and solution architects"],
 ["A-02 · Modèle unique","A-02 · Single model"],["<b>Modèle unique</b>","<b>Single model</b>"],["Un modèle, des vues cohérentes.","One model, consistent views."],["Architectes · Architectes data","Architects · Data architects"],["Inter-applicatif,Fonctionnel,Objets métier et données,BPMN","Applications,Functional,Business objects and data,BPMN"],
 ["A-03 · Bonnes pratiques","A-03 · Best practice"],["<b>Contrôle</b>","<b>Check</b>"],["Vérifié par les bonnes pratiques.","Checked against best practice."],["Architectes · DSI","Architects · CIO"],
 ["A-04 · Estimation","A-04 · Estimate"],["<b>Estimation</b>","<b>Estimate</b>"],["Chaque changement, estimé.","Every change, estimated."],["PMO · Transformation","PMO · Transformation office"],["Décider","Decide"],
 ["A-05 · Décision (moteur Bora)","A-05 · Decision (Bora engine)"],["<b>Décision</b>","<b>Decision</b>"],["Le scénario prudent, expliqué.","The prudent scenario, explained."],["Et le plus petit changement qui le ferait basculer.","Plus the smallest change that would flip it."],["DSI · CTO","CIO · CTO"],
 ["A-06 · Backlog et exigences","A-06 · Backlog and requirements"],["Backlog en cartes, exigences reliées.","Backlog cards, linked requirements."],["Chefs de projet · PMO","Project managers · PMO"],["Backlog en cartes,Exigences","Backlog cards,Requirements"],
 ["A-07 · Spécification et exports","A-07 · Specification and exports"],["<b>Livrables</b>","<b>Deliverables</b>"],["Spécification et exports vers vos outils.","Specification and exports to your tools."],
 ["Des semaines de schémas","Weeks of diagrams,"],["ramenées à une conversation.","down to one conversation."],["Cohérente dès le départ : moins de reprises","Consistent from day one: less rework"],
 ["Design Sprint Architecture","Architecture Design Sprint"],["2 à 3 semaines","2 to 3 weeks"],["Commencez par votre programme prioritaire.","Start with your priority programme."],["Livrer","Deliver"],
 ["Moins de schémas manuels.","Fewer manual diagrams."],["Moins de reprises.","Less rework."],["Des choix prouvés.","Choices you can prove."],
 ["n_cadrage.png","ea_cadrage.png"],["n_inter.png","ea_inter.png"],["fa_fonct.png","ea_fonct.png"],["n_objets.png","ea_objets.png"],["n_bpmn.png","ea_bpmn.png"],["n_bp.png","ea_bp.png"],["n_estim.png","ea_estim.png"],["d1.png","ea_decide.png"],["b_epics.png","ea_backlog.png"],["x1c.png","ea_exports.png"]]
HA = r'''
  if(id==='open'){drawBlueprint(document.getElementById('cbp'),lt);const ti=document.getElementById('bpTitle');const k=eo((lt-2.6)/0.8);ti.style.opacity=k}
  if(id==='i3')drawOrder(lt);if(id==='i2')drawMesh(lt);if(id==='i4')drawHorizon(lt);
  if(el.classList.contains('inter')){const ti=el.querySelector('.ititle');const p=eo((lt-0.25)/0.7);ti.style.opacity=p*cl((2.2-lt)/0.4+0.2);ti.style.letterSpacing=((1-p)*0.3-0.03)+'em';ti.style.filter=`blur(${(1-p)*10}px)`}
  if(id==='ap')drawTangle(lt);
'''
dA = build('film_architect.html', 'bp', 'fr', A, TA, EN_A, HA, BP_CSS)
json.dump({'supply': {'T': TS, 'DUR': dS}, 'architect': {'T': TA, 'DUR': dA, 'BPM': 100}}, open('timeline_duo.json', 'w'))
print('ok', dS, dA)
