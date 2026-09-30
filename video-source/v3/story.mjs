// Films v3 : une histoire par produit. ['O',début,fin] = plan de l'original ; ['R',[scènes]] = plan rendu.
const cr=(n,fr)=>`${fr?'Photo : ':'Photo: '}${n} / Unsplash`;
export function story(L){const fr=L==='fr';const t=(a,b)=>fr?a:b;
const note=t('Capture réelle · démo Maison Lucie, données fictives','Real screenshot · Maison Lucie demo, fictional data');
const img=n=>(fr?'':'en-')+n;
return {
 supply:[
  ['O',0,5.5],
  ['R',[
   {type:'photo',img:'container-ship-5.jpg',dur:4,pan:-40,eb:t('1 · Le problème','1 · The problem'),text:t('Un porte-conteneurs bloqué en mer Rouge. Le réassort n’arrivera pas à temps.','A container ship held up in the Red Sea. The restock won’t arrive on time.'),credit:cr('Bent Van Aeken',fr)},
   {type:'photo',img:'shipping-port-4.jpg',dur:4,pan:40,eb:t('1 · Le problème','1 · The problem'),text:t('Au port, les conteneurs attendent. En magasin, le stock fond. Personne ne le voit venir.','At the port, containers wait. In store, stock runs down. Nobody sees it coming.'),credit:cr('Foto K.',fr)}]],
  ['O',6.5,12],
  ['O',12,14],
  ['O',17,20.5],
  ['O',24,27.8],
  ['R',[{type:'shot',dur:4.5,img:img('v1-2-detail.png'),chip:t('2 · Ce qu’Aura voit','2 · What Aura sees'),text:t('L’alerte, son coût et sa chaîne de causes, jusqu’à la donnée source.','The alert, its cost and its chain of causes, down to the source data.'),note}]],
  ['O',56.8,58.3],
  ['R',[
   {type:'shot',dur:4.5,img:img('v1-3-decision.png'),chip:t('3 · La décision','3 · The decision'),text:t('Décider met les options côte à côte, chiffrées.','Decide puts the options side by side, costed.'),note},
   {type:'shot',dur:4.5,img:img('v1-5-solide.png'),chip:t('3 · La décision','3 · The decision'),text:t('Bora recommande et explique pourquoi. Un humain signe.','Bora recommends and explains why. A person signs.'),note}]],
  ['O',37,41],
  ['R',[
   {type:'photo',img:'truck-highway-2.jpg',dur:3,pan:-30,eb:t('4 · Le résultat','4 · The outcome'),text:t('Le réassort repart par la route, avant la rupture.','The restock is back on the road, before the shortage.'),credit:cr('Joseph Corl',fr)},
   {type:'photo',img:'warehouse-worker-4.jpg',dur:3,pan:30,eb:t('4 · Le résultat','4 · The outcome'),text:t('En entrepôt, on prépare sans urgence.','In the warehouse, the team prepares without panic.'),credit:cr('Pickawood',fr)},
   {type:'photo',img:'delivery-van-0.jpg',dur:3,pan:-30,eb:t('4 · Le résultat','4 · The outcome'),text:t('Le client est livré à la date promise. La décision est tracée.','The customer is delivered on the promised date. The decision is on record.'),credit:cr('Jan Kopřiva',fr)}]],
  ['O',58.3,63.8],
  ['R',[{type:'en',dur:5,eb:'Aura Supply',cta:t('Réservez un diagnostic','Book a diagnostic')}]]],
 architect:[
  ['O',0,5],
  ['R',[{type:'ti',dur:4.5,eb:t('1 · Le problème','1 · The problem'),title:t('Une transformation à défendre en comité','A transformation to defend before the board'),text:t('Et des semaines de schémas faits à la main, qui se contredisent.','And weeks of hand-drawn diagrams that contradict each other.')}]],
  ['O',5,11],
  ['O',11,29.5],
  ['O',30,37],
  ['O',37,44.4],
  ['R',[{type:'ti',dur:5,eb:t('4 · Le résultat','4 · The outcome'),title:t('Un dossier défendable en comité','A case you can defend before the board'),text:t('Cible, écarts, feuille de route et choix argumentés, au même endroit.','Target, gaps, roadmap and reasoned choices, in one place.')}]],
  ['O',55.4,61.5],
  ['R',[{type:'en',dur:5,eb:'Aura Architect',cta:t('Réservez un diagnostic','Book a diagnostic')}]]]
};}
