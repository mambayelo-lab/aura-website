import type { Article } from "./articles";

export const articlesFr: Article[] = [
  {
    slug: "decision-intelligence-gartner-aura",
    category: "Decision Intelligence",
    title: "Decision Intelligence : ce que dit Gartner et où se situe Aura",
    standfirst: "Vous allez confier des décisions à des agents d’IA. Gartner prévient : sans décisions explicites et gouvernées, beaucoup de ces projets seront abandonnés. Ce que disent ses publications, et comment Aura en applique les principes.",
    readTime: "8 min",
    body: [
      "Gartner définit la Decision Intelligence comme une discipline pratique qui améliore la prise de décision en comprenant et en concevant explicitement la manière dont les décisions sont prises, puis dont leurs résultats sont évalués, gérés et améliorés par retour d’expérience. Le point important est là : ce n’est pas une technologie de plus, mais une façon de traiter la décision elle-même comme un actif que l’on modélise.",
      "Le sujet a quitté la marge. Gartner classait déjà la Decision Intelligence parmi ses tendances technologiques stratégiques pour 2022. Son Hype Cycle de l’IA 2025 lui attribue un bénéfice « transformationnel », avec une adoption généralisée attendue d’ici deux à cinq ans. En janvier 2026, Gartner a publié son premier Magic Quadrant consacré aux plateformes de Decision Intelligence, qu’il décrit comme combinant modélisation des décisions, analytique et IA pour assister et automatiser la décision.",
      "Les prévisions chiffrées vont dans le même sens, avec une nuance forte. Gartner prévoit que d’ici 2027, 50 % des décisions métier seront assistées ou automatisées par des agents d’IA dédiés à la Decision Intelligence, et que d’ici 2030 la moitié des solutions supply chain transverses utiliseront des agents capables d’exécuter des décisions. Mais Gartner prévoit aussi que plus de 40 % des projets d’IA agentique seront abandonnés d’ici fin 2027, faute de valeur claire, pour cause de coûts ou de contrôle des risques insuffisant. Et en septembre 2026, que seulement 5 % des organisations prendront au moins 10 % de leurs décisions de planification supply chain de façon autonome d’ici 2030 : les décisions stratégiques, comme la conception du réseau ou la politique de stock, restent affaire de jugement humain.",
      "Ce double message décrit bien le problème. Les agents arrivent, mais ils n’ont de valeur que si la décision est explicite : quels objectifs, quelles contraintes, quelles données, quelles règles, qui valide. Sans ce modèle, un agent automatise surtout l’opacité. C’est précisément là qu’Aura se place. Aura n’est pas évalué par Gartner et ne prétend pas l’être ; il applique, à son échelle, les principes que Gartner décrit.",
      "Modélisation explicite des décisions : chaque décision Aura porte son contexte, ses options, ses hypothèses, la règle appliquée, la personne qui valide et le résultat observé. Évaluation robuste à l’incertitude : issue de travaux de thèse, l’évaluation ordinale qualifie chaque option par son potentiel d’amélioration et son risque de dégradation, sans pondérations inventées ni moyenne qui masque un point bloquant. Règles causales et ontologie : un modèle explicite des objets de l’entreprise simplifie la connexion aux SI existants et donne aux agents un cadre sûr, sous validation humaine.",
      "Les trois applications couvrent trois moments de la décision. Aura Supply Chain part d’un signal dans les données et le transforme en décision opérationnelle tracée. Aura Décider traite une question stratégique ponctuelle, là où Gartner juge le jugement humain indispensable. Aura Architect prépare la transformation : l’architecture et l’ontologie qui rendront l’entreprise agentique sans lui faire perdre la maîtrise de ses décisions."
    ],
    takeaways: ["La Decision Intelligence traite la décision comme un actif modélisé", "Gartner la juge transformationnelle et lui consacre un Magic Quadrant depuis 2026", "L’autonomie des agents restera limitée sans décisions explicites et gouvernées", "Aura applique ces principes : modèle de décision, évaluation robuste, validation humaine"],
    references: [
      { label: "Gartner, Glossary — Decision Intelligence", href: "https://www.gartner.com/en/information-technology/glossary/decision-intelligence" },
      { label: "Gartner, Hype Cycle for Artificial Intelligence, 2025", href: "https://www.gartner.com/en/documents/6579402" },
      { label: "Gartner, Magic Quadrant for Decision Intelligence Platforms (2026)", href: "https://www.gartner.com/en/documents/7363830" },
      { label: "Gartner, Top Data & Analytics Predictions (17/06/2025)", href: "https://www.gartner.com/en/newsroom/press-releases/2025-06-17-gartner-announces-top-data-and-analytics-predictions" },
      { label: "Gartner, Over 40% of Agentic AI Projects Will Be Canceled by End of 2027 (25/06/2025)", href: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027" },
      { label: "Gartner, Half of SCM Solutions Will Include Agentic AI Capabilities by 2030 (21/05/2025)", href: "https://www.gartner.com/en/newsroom/press-releases/2025-05-21-gartner-predicts-half-of-supply-chain-management-solutions-will-include-agentic-ai-capabilities-by-2030" },
      { label: "Gartner, Only 5% of Organizations Will Make At Least 10% of Supply Chain Planning Decisions Autonomously by 2030 (24/09/2026)", href: "https://www.gartner.com/en/newsroom/press-releases/2026-09-24-gartner-predicts-only-5-percent-of-organizations-will-make-at-least-10-percent-of-supply-chain-planning-decisions-autonomously-by-2030" }
    ]
  },
  {
    slug: "llm-arbitrer-decision",
    category: "Décision explicable",
    title: "Pourquoi un LLM ne sait pas arbitrer une décision",
    standfirst: "Votre équipe demande à un LLM de recommander une option, et la réponse est brillante. Le problème : comprendre un dossier n’est pas encore décider. Une décision robuste exige des objectifs, des contraintes, des scénarios et une preuve rejouable.",
    readTime: "7 min",
    body: [
      "Les grands modèles de langage excellent à lire, résumer et expliquer. Ils peuvent analyser un dossier d’investissement, extraire des risques et proposer des options plausibles. Cette puissance crée pourtant une confusion dangereuse : produire une réponse convaincante n’équivaut pas à arbitrer une décision d’entreprise.",
      "Une décision engage plusieurs objectifs qui ne se compensent pas toujours. Un projet très rentable peut rester inacceptable s’il compromet la sécurité, la conformité ou la continuité d’activité. Une recommandation utile doit donc distinguer les préférences des contraintes non négociables, expliciter les inconnues et montrer comment le résultat évolue lorsque les hypothèses changent.",
      "Aura utilise l’IA pour préparer le contexte : extraire les faits, clarifier le vocabulaire, formuler les options et signaler les informations manquantes. Le calcul reste confié à des mécanismes déterministes. Son moteur d’évaluation mesure les améliorations et les dégradations, applique les contraintes et empêche qu’une bonne moyenne masque un point bloquant.",
      "La preuve est aussi importante que la recommandation. Chaque résultat doit conserver ses sources, ses hypothèses, les règles appliquées et la date de validité. Le décideur peut ainsi rejouer l’analyse, contester un paramètre et comprendre pourquoi une autre option n’a pas été retenue.",
      "Le futur n’est donc pas un agent qui décide seul. C’est une coopération structurée : l’IA comprend et prépare, le moteur arbitre, l’expert valide les hypothèses et le responsable humain engage la décision."
    ],
    takeaways: ["Séparer compréhension et arbitrage", "Rendre contraintes et inconnues explicites", "Conserver une preuve rejouable", "Maintenir la validation humaine"]
  },
  {
    slug: "forward-backward-changement-minimal",
    category: "Méthode Aura",
    title: "Forward et Backward : décider puis trouver le changement minimal",
    standfirst: "Votre comité bloque sur un « non » alors que l’option était presque acceptable. Comparer les options ne suffit pas : il faut savoir ce qu’il faudrait changer pour la rendre acceptable.",
    readTime: "8 min",
    body: [
      "La plupart des outils d’aide à la décision répondent à une seule question : quelle option semble la meilleure aujourd’hui ? Cette réponse est utile, mais souvent insuffisante. Dans une transformation ou un investissement, l’option préférée peut échouer à cause d’un petit nombre de blocages précis.",
      "Le raisonnement Forward part d’une option et en propage les effets sur les indicateurs, les critères et les objectifs. Il montre où l’option améliore la situation, où elle la dégrade et quelles contraintes elle viole. Plusieurs scénarios peuvent être rejoués afin de vérifier la robustesse de la recommandation.",
      "Le raisonnement Backward part au contraire de la cible. Il descend vers les facteurs qui empêchent son atteinte, identifie des réparations bornées, puis fait rejouer chaque candidat par le moteur Forward. Le Forward demeure le juge : une réparation n’est retenue que si elle corrige le blocage sans créer d’effets secondaires inacceptables.",
      "Pour un projet de batterie, le Backward peut révéler, par exemple, que le projet devient acceptable si le CAPEX diminue de quelques points, si le raccordement intervient avant une date précise ou si une garantie de disponibilité est renforcée. Pour une Supply Chain, il peut établir le niveau de stock ou la capacité du second fournisseur nécessaires pour sécuriser le service.",
      "Cette logique change la conversation du comité de direction. Au lieu d’opposer simplement oui et non, Aura fournit une option recommandée, les raisons de son classement et les changements minimaux susceptibles de rendre les autres trajectoires viables."
    ],
    takeaways: ["Forward évalue les conséquences", "Backward recherche les réparations", "Forward rejoue et valide", "Le décideur obtient des conditions d’acceptabilité"]
  },
  {
    slug: "tri-decision-investissement-energetique",
    category: "Énergie",
    title: "Du TRI à la décision d’investissement énergétique",
    standfirst: "Deux projets affichent un TRI proche ; l’un sera bloqué par son raccordement, l’autre non. Le meilleur rendement n’est pas forcément le meilleur investissement quand réseau, sécurité, contrats et résilience entrent en jeu.",
    readTime: "8 min",
    body: [
      "VAN, TRI et DSCR sont indispensables pour analyser un investissement énergétique. Ils ne suffisent cependant pas à décider. Deux projets affichant un rendement proche peuvent présenter des profils radicalement différents en matière de raccordement, de dégradation, de disponibilité, de contrepartie ou de dépendance réglementaire.",
      "La première étape consiste à rendre les hypothèses visibles : CAPEX, OPEX, durée de vie, dette, prix, revenus, cycles, rendement et valeur terminale. Chaque hypothèse doit avoir une source, une unité, une date et, lorsque l’incertitude est importante, une fourchette plutôt qu’un chiffre artificiellement précis.",
      "Aura transforme ensuite les résultats financiers en faits décisionnels et les met en regard des objectifs techniques et stratégiques. Une contrainte de DSCR, de continuité d’activité ou de date de raccordement peut éliminer une option même si son TRI est supérieur. La non-compensation protège le décideur contre une moyenne flatteuse.",
      "Les scénarios jouent un rôle central : prix bas, scénario central, forte volatilité, congestion ou retard de raccordement. Le but n’est pas de prédire parfaitement l’avenir mais de sélectionner une option qui reste acceptable dans plusieurs futurs crédibles.",
      "Enfin, le Backward calcule les conditions économiques et contractuelles nécessaires : CAPEX maximal, revenu plancher, garantie technique, niveau de dette ou date limite. L’investissement devient négociable et pilotable, au lieu d’être résumé par un unique taux de rendement."
    ],
    takeaways: ["Rendre les hypothèses traçables", "Combiner finance et risques non compensables", "Tester plusieurs futurs", "Négocier les conditions de finançabilité"]
  },
  {
    slug: "batteries-data-centers-resilience",
    category: "Énergie",
    title: "Batteries, data centers et résilience : rendre un projet finançable",
    standfirst: "Un terrain avantageux peut cacher un raccordement impossible dans les délais. Raccordement, puissance, refroidissement et flexibilité forment une seule décision d’infrastructure, à instruire comme telle.",
    readTime: "9 min",
    body: [
      "L’implantation d’un data center ou d’une infrastructure industrielle ne peut plus être réduite au choix d’un terrain. La puissance disponible, le délai de raccordement, le refroidissement, l’eau, le prix de l’électricité, les permis et la capacité d’extension déterminent ensemble la viabilité du projet.",
      "Une batterie peut répondre à plusieurs besoins : écrêtement de pointe, secours, arbitrage, services réseau ou sécurisation d’un raccordement limité. Mais ces revenus et usages interagissent. Une stratégie agressive de cyclage peut dégrader plus vite l’actif ; une réserve de sécurité importante réduit la capacité disponible pour le marché.",
      "Aura structure la décision autour des sites et architectures possibles. Chaque option combine raccordement, production locale, PPA, stockage, secours et refroidissement. Les indicateurs financiers côtoient les critères de disponibilité, de résilience, de carbone, de délai et de réversibilité.",
      "Le moteur identifie ensuite les blocages. Un site peut être éliminé pour un délai réseau trop long malgré un foncier avantageux. Une batterie peut devenir attractive si un contrat de capacité est sécurisé ou si la puissance de raccordement évitée dépasse un seuil précis.",
      "La sortie fournit l’architecture préliminaire, les hypothèses critiques, les études à lancer, les exigences contractuelles et les conditions de go/no-go. Elle prépare ainsi la décision d’investissement tout en réduisant le risque des études détaillées."
    ],
    takeaways: ["Évaluer le système complet", "Modéliser les usages concurrents de la batterie", "Éliminer les sites non viables", "Relier décision et architecture préliminaire"]
  },
  {
    slug: "resilience-energetique-usine",
    category: "Énergie",
    title: "La résilience énergétique d’une usine est un problème de décision",
    standfirst: "Vos prévisions énergétiques sont excellentes, et votre usine reste vulnérable. Prévoir la demande ne dit pas quel portefeuille d’actions financer lorsque coût, continuité et carbone s’opposent.",
    readTime: "7 min",
    body: [
      "Une usine peut disposer d’excellentes prévisions énergétiques et rester vulnérable. La question stratégique n’est pas seulement combien consommerons-nous, mais que devons-nous financer pour préserver la production lorsque les prix, le réseau ou les contrats deviennent défavorables.",
      "Les options sont rarement exclusives : efficacité, effacement, solaire, batterie, PPA, groupe de secours ou adaptation des horaires. Chacune produit des effets différents sur la facture, le carbone, la continuité, l’autonomie et la complexité d’exploitation.",
      "Aura commence par les charges critiques, le coût réel des arrêts, la courbe de charge, la puissance souscrite, les incidents et les contraintes du site. Les données incomplètes restent visibles sous forme de fourchettes et de niveaux de confiance.",
      "Le moteur d’évaluation d’Aura compare les portefeuilles sans permettre qu’une économie moyenne compense une dégradation critique de sécurité ou de continuité. Les scénarios de prix, de coupure et de limitation réseau montrent la robustesse de chaque combinaison.",
      "La recommandation fournit un ordre d’implémentation : actions sans regret, investissements conditionnels et options à différer. L’architecture fonctionnelle précise ensuite les mesures, responsabilités, systèmes et interfaces nécessaires au pilotage de cette résilience."
    ],
    takeaways: ["Partir des charges critiques", "Comparer des portefeuilles de leviers", "Protéger les contraintes de continuité", "Séquencer les investissements"]
  },
  {
    slug: "control-tower-decision-operating-system",
    category: "Supply Chain",
    title: "De la Control Tower au Decision Operating System",
    standfirst: "Votre tour de contrôle signale le retard fournisseur, et la suite se joue encore dans Excel, par e-mail et en réunion. Une alerte n’a de valeur que si elle conduit à un arbitrage, une action et un apprentissage.",
    readTime: "7 min",
    body: [
      "Les Control Towers promettent une visibilité de bout en bout. Elles consolident des alertes provenant de l’ERP, du WMS, de l’APS ou du TMS. Pourtant, lorsqu’un fournisseur est en retard ou qu’une rupture apparaît, l’essentiel reste souvent traité dans Excel, par e-mail et en réunion.",
      "Le problème n’est pas l’absence de signal. C’est l’absence d’un modèle reliant ce signal à la décision : quels produits sont touchés, quels objectifs sont menacés, quelles options sont disponibles, quelles contraintes s’appliquent et qui doit valider l’action.",
      "Aura se place au-dessus des systèmes d’exécution. Il transforme l’alerte en contexte décisionnel, recherche les causes, construit les scénarios et compare les actions. Le système source conserve son rôle opérationnel ; Aura apporte l’arbitrage et la mémoire.",
      "Une ontologie minimale relie seulement les objets utiles : fournisseur, produit, commande, stock, site, contrat et marge. Les correspondances avec les données réelles sont introduites progressivement, à partir de décisions réelles, plutôt que par un programme massif de modélisation.",
      "Le Decision Operating System ferme enfin la boucle : alerte, option, arbitrage, validation, action, résultat observé. La décision devient un actif réutilisable et peut ensuite être surveillée par un agent spécialisé."
    ],
    takeaways: ["Passer de la visibilité à l’arbitrage", "Préserver les systèmes d’exécution", "Connecter une ontologie minimale", "Capitaliser le résultat des décisions"]
  },
  {
    slug: "double-sourcing-stock-redesign",
    category: "Supply Chain",
    title: "Double sourcing, stock ou redesign : comment arbitrer ?",
    standfirst: "Un fournisseur critique se fragilise et chacun défend sa solution : stock, second fournisseur, relocalisation, redesign. La bonne réponse dépend du coût de rupture, de la dépendance, de la trésorerie et du temps nécessaire pour créer une alternative crédible.",
    readTime: "8 min",
    body: [
      "Lorsqu’un fournisseur critique se fragilise, quatre réponses reviennent immédiatement : augmenter le stock, qualifier un second fournisseur, relocaliser ou redessiner le produit. Aucune n’est universellement supérieure.",
      "Le stock protège rapidement mais immobilise du cash et peut devenir obsolète. Le double sourcing réduit la dépendance mais augmente les coûts et la complexité qualité. La relocalisation améliore parfois le délai sans garantir la capacité. Le redesign traite la dépendance à la racine mais demande du temps et de l’ingénierie.",
      "Aura rassemble les faits nécessaires : OTIF, taux de défaut, dépendance par nomenclature, capacité, minimums de commande, stock, prévisions, risque pays, santé financière et coûts de qualification. Les objectifs sont traduits en disponibilité, marge, cash, qualité et délai.",
      "Le moteur d’évaluation d’Aura évite qu’un gain de prix compense une rupture critique. Forward montre les conséquences de chaque stratégie ; Backward identifie la capacité secondaire, le stock de sécurité ou la réduction de délai nécessaires pour atteindre la cible de service.",
      "La décision devient spécifique à chaque famille : stock temporaire pour l’une, double sourcing pour une autre, redesign pour les composants réellement structurels. Le comité obtient un portefeuille d’actions cohérent plutôt qu’une politique uniforme."
    ],
    takeaways: ["Comparer les mécanismes de résilience", "Relier risque et nomenclature", "Éviter les compensations dangereuses", "Décider par famille critique"]
  },
  {
    slug: "ontologie-minimale-fait-decisionnel",
    category: "Contexte vivant",
    title: "De la donnée SI au fait décisionnel : pourquoi une ontologie minimale suffit",
    standfirst: "Votre projet d’ontologie promet de tout modéliser et n’a encore rien livré. Inutile de modéliser toute l’entreprise : il suffit de relier vos objectifs aux quelques faits qui peuvent changer la décision.",
    readTime: "8 min",
    body: [
      "Les projets d’ontologie d’entreprise échouent souvent par ambition excessive. Ils cherchent à représenter tout le vocabulaire, toutes les données et toutes les applications avant de produire une première valeur métier.",
      "Aura inverse la démarche. Il part d’une décision : sécuriser la marge, choisir un fournisseur, investir dans une batterie ou définir une architecture cible. Cette question détermine les objectifs, les objets métier et les attributs réellement nécessaires.",
      "Une donnée source ne devient pas automatiquement un fait. Le montant doit être associé à une définition, une unité, une période, une source, un propriétaire et un niveau de confiance. Le mapping relie alors le langage métier au champ réel du SI sans exposer le décideur à la complexité technique.",
      "Le contexte devient vivant lorsque fichiers, API et validations humaines actualisent ces faits. Mais la connexion reste orientée par la décision. Aucun connecteur spécifique n’est construit avant qu’un cas d’usage réel n’en justifie le coût.",
      "Cette discipline vous fait gagner du temps dès la première décision et construit progressivement un actif durable. Les données changent, les systèmes sont remplacés, mais les objectifs, les décisions, les contraintes et leur preuve restent organisés."
    ],
    takeaways: ["Commencer par la décision", "Qualifier les données comme faits", "Connecter progressivement", "Conserver une mémoire indépendante des applications"]
  }
];
