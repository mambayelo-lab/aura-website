const cr=(n,fr)=>`${fr?'Photo : ':'Photo: '}${n} / Unsplash`;
export function specs(L){const fr=L==='fr';
const C={ship:'Bent Van Aeken',port:'Foto K.',truck:'Joseph Corl',van:'Jan Kopřiva',fork:'Pickawood'};
return {
 supply:[
  {at:5.5,scenes:[
   {type:'photo',img:'container-ship-5.jpg',dur:3,pan:-40,eb:fr?'Sur le terrain':'In the field',text:fr?'Un porte-conteneurs retardé en mer Rouge : la marchandise n’arrivera pas à temps.':'A container ship delayed in the Red Sea: the goods won’t arrive on time.',credit:cr(C.ship,fr)},
   {type:'photo',img:'shipping-port-4.jpg',dur:3,pan:40,eb:fr?'Sur le terrain':'In the field',text:fr?'Au port, les conteneurs attendent. En magasin, le stock fond.':'At the port, containers wait. In store, stock runs down.',credit:cr(C.port,fr)}]},
  {at:13.0,scenes:[{type:'carton',dur:4,eb:fr?'Aura Supply · la méthode':'Aura Supply · the method',title:fr?'Comment Aura résout le problème':'How Aura solves the problem',
   steps:fr?[['Constater','Une alerte chiffrée, avant la rupture'],['Comprendre','Sa chaîne de causes, jusqu’à la donnée'],['Décider','Bora recommande, un humain signe'],['Suivre','Le résultat mesuré dans le journal']]
          :[['Spot','A costed alert, before the shortage'],['Understand','Its chain of causes, down to the data'],['Decide','Bora recommends, a person signs'],['Track','The outcome measured in the log']]}]},
  {at:27.0,scenes:[{type:'shot',dur:4,img:fr?'v1-2-detail.png':'en-v1-2-detail.png',chip:fr?'2 · Comprendre':'2 · Understand',text:fr?'L’alerte et sa chaîne de causes, de la donnée source à la conséquence.':'The alert and its chain of causes, from source data to consequence.',note:fr?'Capture réelle · démo Maison Lucie, données fictives':'Real screenshot · Maison Lucie demo, fictional data'}]},
  {at:32.5,scenes:[{type:'shot',dur:4,img:fr?'v1-5-solide.png':'en-v1-5-solide.png',chip:fr?'3 · Décider':'3 · Decide',text:fr?'Bora recommande une option et explique pourquoi elle est solide.':'Bora recommends an option and explains why it holds.',note:fr?'Capture réelle · démo Maison Lucie, données fictives':'Real screenshot · Maison Lucie demo, fictional data'}]},
  {at:63.0,scenes:[
   {type:'photo',img:'truck-highway-2.jpg',dur:8/3,pan:-30,eb:fr?'4 · Suivre · le résultat':'4 · Track · the outcome',text:fr?'Le réapprovisionnement repart par la route, avant la rupture.':'Replenishment is back on the road, before the shortage.',credit:cr(C.truck,fr)},
   {type:'photo',img:'warehouse-worker-4.jpg',dur:8/3,pan:30,eb:fr?'4 · Suivre · le résultat':'4 · Track · the outcome',text:fr?'En entrepôt, l’équipe prépare sans urgence : la décision est prise et tracée.':'In the warehouse, the team prepares calmly: the decision is made and on record.',credit:cr(C.fork,fr)},
   {type:'photo',img:'delivery-van-0.jpg',dur:8/3,pan:-30,eb:fr?'4 · Suivre · le résultat':'4 · Track · the outcome',text:fr?'Le client est livré à la date promise.':'The customer is delivered on the promised date.',credit:cr(C.van,fr)}]}],
 architect:[
  {at:12.5,scenes:[{type:'carton',dur:4,eb:fr?'Aura Architect · la méthode':'Aura Architect · the method',title:fr?'Comment Aura transforme votre SI':'How Aura transforms your IT',
   steps:fr?[['Cadrer','Enjeux, périmètre, parties prenantes'],['Modéliser','L’existant et la cible, en vues cohérentes'],['Décider','Bora compare les scénarios, un humain signe'],['Livrer','Feuille de route, backlog et spécifications']]
          :[['Scope','Stakes, perimeter, stakeholders'],['Model','Current and target, in consistent views'],['Decide','Bora compares scenarios, a person signs'],['Deliver','Roadmap, backlog and specifications']]}]}]
};}
