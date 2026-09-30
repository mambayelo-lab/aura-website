// Films v4 : 45–55 s, coupes calées sur les temps forts de la musique d'origine
// (supply : grille 0,5 s à partir de 7,5 s ; architect : temps 0,604 s à partir de 5,43 s).
// ['O',début,fin] = plan de l'original ; ['R',[scènes]] = plan rendu. Aucun nom de produit Bora/Décider.
const cr=(n,fr)=>`${fr?'Photo : ':'Photo: '}${n} / Unsplash`;
export function story(L){const fr=L==='fr';const t=(a,b)=>fr?a:b;
const note=t('Capture réelle · démo, données fictives','Real screenshot · demo, fictional data');
const img=n=>`v4-${L}-${n}.png`;const B=0.604;
return {
 supply:[
  ['O',0,7.5],
  ['R',[
   {type:'photo',img:'container-ship-5.jpg',dur:3.5,pan:-40,eb:t('Le problème','The problem'),text:t('Un navire bloqué en mer Rouge. Le réassort n’arrivera pas à temps.','A ship held up in the Red Sea. The restock won’t arrive on time.'),credit:cr('Bent Van Aeken',fr)},
   {type:'photo',img:'shipping-port-4.jpg',dur:3.5,pan:40,eb:t('Le problème','The problem'),text:t('Au port, les conteneurs attendent. En magasin, le stock fond.','At the port, containers wait. In store, stock runs down.'),credit:cr('Foto K.',fr)},
   {type:'shot',dur:4,img:img('cockpit'),chip:t('Voir venir','See it coming'),text:t('Les ruptures probables, repérées dans vos données avant qu’elles n’arrivent.','Likely shortages, spotted in your data before they happen.'),note},
   {type:'shot',dur:4,img:img('detail'),chip:t('Comprendre','Understand'),text:t('La chaîne de causes, jusqu’à la donnée source.','The chain of causes, down to the source data.'),note},
   {type:'shot',dur:4,img:img('decision'),chip:t('Comparer','Compare'),text:t('Les options comparées sur les mêmes critères.','Options compared on the same criteria.'),note},
   {type:'shot',dur:4,img:img('decision2'),chip:t('Choisir','Choose'),text:t('La meilleure réponse, avec le pourquoi. Un humain signe.','The best response, with the reasons why. A person signs.'),note}]],
  ['O',37,41],
  ['R',[
   {type:'photo',img:'truck-highway-2.jpg',dur:3,pan:-30,eb:t('Le résultat','The outcome'),text:t('Le réassort repart par la route, avant la rupture.','The restock is back on the road, before the shortage.'),credit:cr('Joseph Corl',fr)},
   {type:'photo',img:'warehouse-worker-4.jpg',dur:3,pan:30,eb:t('Le résultat','The outcome'),text:t('En entrepôt, on prépare sans urgence.','In the warehouse, the team prepares without panic.'),credit:cr('Pickawood',fr)},
   {type:'photo',img:'delivery-van-0.jpg',dur:3.5,pan:-30,eb:t('Le résultat','The outcome'),text:t('Le client est livré à la date promise. La décision est tracée.','The customer is delivered on time. The decision is on record.'),credit:cr('Jan Kopřiva',fr)}]],
  ['O',58.5,62.5],
  ['R',[{type:'en',dur:5,eb:'Aura Supply',cta:t('Réservez un diagnostic','Book a diagnostic')}]]],
 architect:[
  ['O',0,5.43],
  ['R',[{type:'ti',dur:8*B,eb:'Aura Architect',title:t('Pas un référentiel d’architecture de plus','Not another architecture repository'),text:t('Une sorte de jumeau numérique de l’architecte : il raisonne et échange avec les acteurs de la transformation.','A kind of digital twin of the architect: it reasons and works with the people driving the transformation.')}]],
  ['O',6,6+6*B],
  ['O',12,12+9*B],
  ['O',18,18+8*B],
  ['O',24,24+5*B],
  ['O',33,33+7*B],
  ['O',41.5,41.5+4*B],
  ['R',[{type:'ti',dur:8*B,eb:t('Le résultat','The outcome'),title:t('Un cadrage industrialisé, un programme dé-risqué','Scoping industrialised, a programme de-risked'),text:t('Cible, écarts, feuille de route et choix argumentés, au même endroit.','Target, gaps, roadmap and reasoned choices, in one place.')}]],
  ['O',45,45+8*B],
  ['R',[{type:'en',dur:8*B,eb:'Aura Architect',cta:t('Réservez un diagnostic','Book a diagnostic')}]]]
};}
