import type { Article } from "./articles";

export const articlesFr: Article[] = [
  {
    slug: "llm-arbitrer-decision",
    category: "Décision explicable",
    title: "Pourquoi un LLM ne sait pas arbitrer une décision",
    standfirst: "Comprendre un dossier n’est pas encore décider. Une décision robuste exige des objectifs, des contraintes, des scénarios et une preuve rejouable.",
    readTime: "7 min",
    body: [
      "Les grands modèles de langage excellent à lire, résumer et expliquer. Ils peuvent analyser un dossier d’investissement, extraire des risques et proposer des options plausibles. Cette puissance crée pourtant une confusion dangereuse : produire une réponse convaincante n’équivaut pas à arbitrer une décision d’entreprise.",
      "Une décision engage plusieurs objectifs qui ne se compensent pas toujours. Un projet très rentable peut rester inacceptable s’il compromet la sécurité, la conformité ou la continuité d’activité. Une recommandation utile doit donc distinguer les préférences des contraintes non négociables, expliciter les inconnues et montrer comment le résultat évolue lorsque les hypothèses changent.",
      "AURA utilise l’IA pour préparer le contexte : extraire les faits, clarifier le vocabulaire, formuler les options et signaler les informations manquantes. Le calcul reste confié à des mécanismes déterministes. BORA évalue les améliorations et les dégradations, applique les contraintes et empêche qu’une bonne moyenne masque un point bloquant.",
      "La preuve est aussi importante que la recommandation. Chaque résultat doit conserver ses sources, ses hypothèses, les règles appliquées et la date de validité. Le décideur peut ainsi rejouer l’analyse, contester un paramètre et comprendre pourquoi une autre option n’a pas été retenue.",
      "Le futur n’est donc pas un agent qui décide seul. C’est une coopération structurée : l’IA comprend et prépare, le moteur arbitre, l’expert valide les hypothèses et le responsable humain engage la décision."
    ],
    takeaways: ["Séparer compréhension et arbitrage", "Rendre contraintes et inconnues explicites", "Conserver une preuve rejouable", "Maintenir la validation humaine"]
  },
  {
    slug: "forward-backward-changement-minimal",
    category: "Méthode AURA",
    title: "Forward et Backward : décider puis trouver le changement minimal",
    standfirst: "Comparer les options ne suffit pas. Il faut aussi savoir ce qu’il faudrait changer pour rendre une stratégie acceptable.",
    readTime: "8 min",
    body: [
      "La plupart des outils d’aide à la décision répondent à une seule question : quelle option semble la meilleure aujourd’hui ? Cette réponse est utile, mais souvent insuffisante. Dans une transformation ou un investissement, l’option préférée peut échouer à cause d’un petit nombre de blocages précis.",
      "Le raisonnement Forward part d’une option et en propage les effets sur les indicateurs, les critères et les objectifs. Il montre où l’option améliore la situation, où elle la dégrade et quelles contraintes elle viole. Plusieurs scénarios peuvent être rejoués afin de vérifier la robustesse de la recommandation.",
      "Le raisonnement Backward part au contraire de la cible. Il descend vers les facteurs qui empêchent son atteinte, identifie des réparations bornées, puis fait rejouer chaque candidat par le moteur Forward. Le Forward demeure le juge : une réparation n’est retenue que si elle corrige le blocage sans créer d’effets secondaires inacceptables.",
      "Pour un projet de batterie, le Backward peut révéler que le projet devient acceptable si le CAPEX diminue de 8 %, si le raccordement intervient avant une date précise ou si une garantie de disponibilité est renforcée. Pour une Supply Chain, il peut établir le niveau de stock ou la capacité du second fournisseur nécessaires pour sécuriser le service.",
      "Cette logique change la conversation du comité de direction. Au lieu d’opposer simplement oui et non, AURA fournit une option recommandée, les raisons de son classement et les changements minimaux susceptibles de rendre les autres trajectoires viables."
    ],
    takeaways: ["Forward évalue les conséquences", "Backward recherche les réparations", "Forward rejoue et valide", "Le décideur obtient des conditions d’acceptabilité"]
  },
  {
    slug: "tri-decision-investissement-energetique",
    category: "AURA Energy",
    title: "Du TRI à la décision d’investissement énergétique",
    standfirst: "Le projet au meilleur rendement n’est pas nécessairement le meilleur investissement lorsque réseau, sécurité, contrats et résilience entrent en jeu.",
    readTime: "8 min",
    body: [
      "VAN, TRI et DSCR sont indispensables pour analyser un investissement énergétique. Ils ne suffisent cependant pas à décider. Deux projets affichant un rendement proche peuvent présenter des profils radicalement différents en matière de raccordement, de dégradation, de disponibilité, de contrepartie ou de dépendance réglementaire.",
      "La première étape consiste à rendre les hypothèses visibles : CAPEX, OPEX, durée de vie, dette, prix, revenus, cycles, rendement et valeur terminale. Chaque hypothèse doit avoir une source, une unité, une date et, lorsque l’incertitude est importante, une fourchette plutôt qu’un chiffre artificiellement précis.",
      "AURA transforme ensuite les résultats financiers en faits décisionnels et les met en regard des objectifs techniques et stratégiques. Une contrainte de DSCR, de continuité d’activité ou de date de raccordement peut éliminer une option même si son TRI est supérieur. La non-compensation protège le décideur contre une moyenne flatteuse.",
      "Les scénarios jouent un rôle central : prix bas, scénario central, forte volatilité, congestion ou retard de raccordement. Le but n’est pas de prédire parfaitement l’avenir mais de sélectionner une option qui reste acceptable dans plusieurs futurs crédibles.",
      "Enfin, le Backward calcule les conditions économiques et contractuelles nécessaires : CAPEX maximal, revenu plancher, garantie technique, niveau de dette ou date limite. L’investissement devient négociable et pilotable, au lieu d’être résumé par un unique taux de rendement."
    ],
    takeaways: ["Rendre les hypothèses traçables", "Combiner finance et risques non compensables", "Tester plusieurs futurs", "Négocier les conditions de finançabilité"]
  },
  {
    slug: "batteries-data-centers-resilience",
    category: "AURA Energy",
    title: "Batteries, data centers et résilience : rendre un projet finançable",
    standfirst: "Raccordement, puissance, refroidissement et flexibilité forment une seule décision d’infrastructure.",
    readTime: "9 min",
    body: [
      "L’implantation d’un data center ou d’une infrastructure industrielle ne peut plus être réduite au choix d’un terrain. La puissance disponible, le délai de raccordement, le refroidissement, l’eau, le prix de l’électricité, les permis et la capacité d’extension déterminent ensemble la viabilité du projet.",
      "Une batterie peut répondre à plusieurs besoins : écrêtement de pointe, secours, arbitrage, services réseau ou sécurisation d’un raccordement limité. Mais ces revenus et usages interagissent. Une stratégie agressive de cyclage peut dégrader plus vite l’actif ; une réserve de sécurité importante réduit la capacité disponible pour le marché.",
      "AURA structure la décision autour des sites et architectures possibles. Chaque option combine raccordement, production locale, PPA, stockage, secours et refroidissement. Les indicateurs financiers côtoient les critères de disponibilité, de résilience, de carbone, de délai et de réversibilité.",
      "Le moteur identifie ensuite les blocages. Un site peut être éliminé pour un délai réseau trop long malgré un foncier avantageux. Une batterie peut devenir attractive si un contrat de capacité est sécurisé ou si la puissance de raccordement évitée dépasse un seuil précis.",
      "La sortie fournit l’architecture préliminaire, les hypothèses critiques, les études à lancer, les exigences contractuelles et les conditions de go/no-go. Elle prépare ainsi la décision d’investissement tout en réduisant le risque des études détaillées."
    ],
    takeaways: ["Évaluer le système complet", "Modéliser les usages concurrents de la batterie", "Éliminer les sites non viables", "Relier décision et architecture préliminaire"]
  },
  {
    slug: "resilience-energetique-usine",
    category: "AURA Energy",
    title: "La résilience énergétique d’une usine est un problème de décision",
    standfirst: "Prévoir la demande ne dit pas quel portefeuille d’actions choisir lorsque coût, continuité et carbone s’opposent.",
    readTime: "7 min",
    body: [
      "Une usine peut disposer d’excellentes prévisions énergétiques et rester vulnérable. La question stratégique n’est pas seulement combien consommerons-nous, mais que devons-nous financer pour préserver la production lorsque les prix, le réseau ou les contrats deviennent défavorables.",
      "Les options sont rarement exclusives : efficacité, effacement, solaire, batterie, PPA, groupe de secours ou adaptation des horaires. Chacune produit des effets différents sur la facture, le carbone, la continuité, l’autonomie et la complexité d’exploitation.",
      "AURA commence par les charges critiques, le coût réel des arrêts, la courbe de charge, la puissance souscrite, les incidents et les contraintes du site. Les données incomplètes restent visibles sous forme de fourchettes et de niveaux de confiance.",
      "BORA compare les portefeuilles sans permettre qu’une économie moyenne compense une dégradation critique de sécurité ou de continuité. Les scénarios de prix, de coupure et de limitation réseau montrent la robustesse de chaque combinaison.",
      "La recommandation fournit un ordre d’implémentation : actions sans regret, investissements conditionnels et options à différer. L’architecture fonctionnelle précise ensuite les mesures, responsabilités, systèmes et interfaces nécessaires au pilotage de cette résilience."
    ],
    takeaways: ["Partir des charges critiques", "Comparer des portefeuilles de leviers", "Protéger les contraintes de continuité", "Séquencer les investissements"]
  },
  {
    slug: "control-tower-decision-operating-system",
    category: "AURA Supply Chain",
    title: "De la Control Tower au Decision Operating System",
    standfirst: "Une alerte n’a de valeur que si elle conduit à un arbitrage, une action et un apprentissage.",
    readTime: "7 min",
    body: [
      "Les Control Towers promettent une visibilité de bout en bout. Elles consolident des alertes provenant de l’ERP, du WMS, de l’APS ou du TMS. Pourtant, lorsqu’un fournisseur est en retard ou qu’une rupture apparaît, l’essentiel reste souvent traité dans Excel, par e-mail et en réunion.",
      "Le problème n’est pas l’absence de signal. C’est l’absence d’un modèle reliant ce signal à la décision : quels produits sont touchés, quels objectifs sont menacés, quelles options sont disponibles, quelles contraintes s’appliquent et qui doit valider l’action.",
      "AURA se place au-dessus des systèmes d’exécution. Il transforme l’alerte en contexte décisionnel, recherche les causes, construit les scénarios et compare les actions. Le système source conserve son rôle opérationnel ; AURA apporte l’arbitrage et la mémoire.",
      "Une ontologie minimale relie seulement les objets utiles : fournisseur, produit, commande, stock, site, contrat et marge. Les mappings vers les données réelles sont introduits progressivement, à partir des décisions payées, plutôt que par un programme massif de modélisation.",
      "Le Decision Operating System ferme enfin la boucle : alerte, option, arbitrage, validation, action, résultat observé. La décision devient un actif réutilisable et peut ensuite être surveillée par un agent spécialisé."
    ],
    takeaways: ["Passer de la visibilité à l’arbitrage", "Préserver les systèmes d’exécution", "Connecter une ontologie minimale", "Capitaliser le résultat des décisions"]
  },
  {
    slug: "double-sourcing-stock-redesign",
    category: "AURA Supply Chain",
    title: "Double sourcing, stock ou redesign : comment arbitrer ?",
    standfirst: "La réponse dépend du coût de rupture, de la dépendance, du cash et du temps nécessaire pour créer une alternative crédible.",
    readTime: "8 min",
    body: [
      "Lorsqu’un fournisseur critique se fragilise, quatre réponses reviennent immédiatement : augmenter le stock, qualifier un second fournisseur, relocaliser ou redessiner le produit. Aucune n’est universellement supérieure.",
      "Le stock protège rapidement mais immobilise du cash et peut devenir obsolète. Le double sourcing réduit la dépendance mais augmente les coûts et la complexité qualité. La relocalisation améliore parfois le délai sans garantir la capacité. Le redesign traite la dépendance à la racine mais demande du temps et de l’ingénierie.",
      "AURA rassemble les faits nécessaires : OTIF, taux de défaut, dépendance par nomenclature, capacité, minimums de commande, stock, prévisions, risque pays, santé financière et coûts de qualification. Les objectifs sont traduits en disponibilité, marge, cash, qualité et délai.",
      "BORA évite qu’un gain de prix compense une rupture critique. Forward montre les conséquences de chaque stratégie ; Backward identifie la capacité secondaire, le stock de sécurité ou la réduction de délai nécessaires pour atteindre la cible de service.",
      "La décision devient spécifique à chaque famille : stock temporaire pour l’une, double sourcing pour une autre, redesign pour les composants réellement structurels. Le comité obtient un portefeuille d’actions cohérent plutôt qu’une politique uniforme."
    ],
    takeaways: ["Comparer les mécanismes de résilience", "Relier risque et nomenclature", "Éviter les compensations dangereuses", "Décider par famille critique"]
  },
  {
    slug: "ontologie-minimale-fait-decisionnel",
    category: "Contexte vivant",
    title: "De la donnée SI au fait décisionnel : pourquoi une ontologie minimale suffit",
    standfirst: "Il n’est pas nécessaire de modéliser toute l’entreprise. Il faut relier les objectifs aux quelques faits qui peuvent changer la décision.",
    readTime: "8 min",
    body: [
      "Les projets d’ontologie d’entreprise échouent souvent par ambition excessive. Ils cherchent à représenter tout le vocabulaire, toutes les données et toutes les applications avant de produire une première valeur métier.",
      "AURA inverse la démarche. Il part d’une décision : sécuriser la marge, choisir un fournisseur, investir dans une batterie ou définir une architecture cible. Cette question détermine les objectifs, les objets métier et les attributs réellement nécessaires.",
      "Une donnée source ne devient pas automatiquement un fait. Le montant doit être associé à une définition, une unité, une période, une source, un propriétaire et un niveau de confiance. Le mapping relie alors le langage métier au champ réel du SI sans exposer le décideur à la complexité technique.",
      "Le contexte devient vivant lorsque fichiers, API et validations humaines actualisent ces faits. Mais la connexion reste orientée par la décision. Aucun connecteur spécifique n’est construit avant qu’un cas d’usage payé n’en justifie le coût.",
      "Cette discipline protège la vitesse commerciale et crée progressivement un actif défendable. Les données changent, les systèmes sont remplacés, mais les objectifs, les décisions, les contraintes et leur preuve restent organisés."
    ],
    takeaways: ["Commencer par la décision", "Qualifier les données comme faits", "Connecter progressivement", "Conserver une mémoire indépendante des applications"]
  }
];
