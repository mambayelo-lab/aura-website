import type { Locale } from "@/lib/i18n";

type Item = { title: string; text: string };

export type DecisionCase = {
  title: string;
  situation: string;
  analyse: string[];
  deliver: string[];
  angle: string;
};

export type Positioning = {
  why: {
    eyebrow: string;
    title: string;
    lead: string;
    question: { before: string; not: string; but: string; answer: string };
    capabilitiesTitle: string;
    capabilities: Item[];
  };
  cases: {
    eyebrow: string;
    title: string;
    situation: string;
    analyse: string;
    deliver: string;
    angle: string;
    energy: DecisionCase[];
    supplyChain: DecisionCase[];
  };
  example: {
    eyebrow: string;
    title: string;
    inputsTitle: string;
    inputs: string[];
    analysisTitle: string;
    analysis: string[];
    finding: string;
    resultTitle: string;
    verdict: string;
    detail: string;
    conditions: string[];
    takeaway: string;
    note: string;
  };
};

const en: Positioning = {
  why: {
    eyebrow: "Why AURA",
    title: "A decision layer above your analyses.",
    lead: "AURA does not replace your models, your experts or your data. It sits above them: it structures the business problem, compares scenarios, surfaces contradictions and risks, explains the recommendation and sets the conditions for implementation.",
    question: {
      before: "The question is rarely only",
      not: "“Which option is optimal?”",
      but: "It is",
      answer: "“Which decision is truly acceptable, bankable, resilient and executable?”",
    },
    capabilitiesTitle: "Five capabilities rarely found together",
    capabilities: [
      {
        title: "Explicit business model",
        text: "Margin, capacity, supplier, asset, risk, dependency, constraint: the decision is built on the concepts your business actually uses.",
      },
      {
        title: "Forward–Backward reasoning",
        text: "Start from a proposed decision, detect what blocks it, trace the causes and propose the repairs.",
      },
      {
        title: "Qualitative uncertainty",
        text: "“Strong upside, but high risk” can be stated and reasoned about — even when the data is incomplete.",
      },
      {
        title: "Side effects made visible",
        text: "An energy choice can degrade maintenance, financing or resilience. AURA makes these knock-on impacts explicit.",
      },
      {
        title: "From decision to execution",
        text: "Architecture, flows, backlog, investment and conditions for success: the decision arrives ready to be carried out.",
      },
    ],
  },
  cases: {
    eyebrow: "Decisions we secure",
    title: "Four typical decisions.",
    situation: "Situation",
    analyse: "What we analyse",
    deliver: "What you get",
    angle: "The AURA angle",
    energy: [
      {
        title: "Investing in a battery",
        situation:
          "An energy company hesitates between a grid-scale battery, a behind-the-meter industrial battery, a battery paired with solar — or not investing at all.",
        analyse: [
          "Power, capacity, CAPEX, OPEX and lifetime",
          "Historical prices and future price scenarios",
          "Arbitrage and grid-services revenues",
          "Grid connection and network availability",
          "Battery degradation and cost of financing",
          "Regulatory, contractual and supplier risks",
        ],
        deliver: [
          "Recommended scenario and sizing",
          "NPV, IRR, DSCR and payback period",
          "Adverse scenarios and breakeven thresholds",
          "Blocking risks and financing conditions",
          "Go / Go under conditions / No-Go",
          "Deployment plan and target architecture",
        ],
        angle: "A decision an investment committee can understand, challenge and approve.",
      },
      {
        title: "Solar + storage or a PPA?",
        situation:
          "An industrial company must choose between buying on the market, signing a PPA, building solar, building solar plus storage — or combining several options.",
        analyse: [
          "Hourly consumption profile and production forecasts",
          "Electricity prices, PPA duration and clauses",
          "Construction costs, available land and grid constraints",
          "Carbon targets and industrial flexibility",
          "Price risk and counterparty risk",
        ],
        deliver: [
          "Preferred combination of options",
          "Total cost of ownership",
          "Residual market exposure and energy autonomy",
          "Contractual risks and margin impact",
          "Investment trajectory",
        ],
        angle:
          "Wider than a levelised-cost calculation: strategic, contractual, industrial and organisational risks are part of the decision.",
      },
      {
        title: "Connecting a data centre",
        situation:
          "An operator must choose a site, a connection capacity, a backup architecture and a mix of grid, batteries, generators and renewables.",
        analyse: [
          "Current and future IT load, demand and load factor",
          "Connection lead time and local grid capacity",
          "Electricity cost and availability requirements",
          "Cooling constraints and carbon emissions",
          "Land cost, equipment lead times and costs",
        ],
        deliver: [
          "Recommended site and electrical architecture",
          "Connection capacity and generation / backup mix",
          "Investment costs and schedule risks",
          "Resilience level",
          "Expansion trajectory",
        ],
        angle: "Is this architecture feasible on schedule, bankable and consistent with the industrial strategy?",
      },
      {
        title: "Factory energy resilience",
        situation:
          "A plant faces outages, volatile prices, dependence on a single supplier, grid limitation risk and decarbonisation constraints.",
        analyse: [
          "Consumption curves and critical equipment",
          "Outage scenarios and cost of downtime",
          "Energy contracts and local generation capacity",
          "Batteries, backup generators and maintenance lead times",
          "Continuity objectives",
        ],
        deliver: [
          "Equipment to secure first",
          "Storage required and microgrid architecture",
          "Load-shedding strategy",
          "Cost of each avoided hour of downtime",
          "Investment plan and sequence of actions",
        ],
        angle: "Resilience investments ranked by the downtime they actually avoid.",
      },
    ],
    supplyChain: [
      {
        title: "Supplier risk",
        situation: "A manufacturer depends heavily on a single supplier in Asia.",
        analyse: [
          "Suppliers, subcontractors, volumes and spend",
          "Lead times and defect rates",
          "Geographic dependence and geopolitical exposure",
          "Alternative capacity and qualification costs",
          "Stock levels and component criticality",
        ],
        deliver: [
          "Critical suppliers and components to secure",
          "Recommended alternative supplier",
          "Safety stock and dual-sourcing strategy",
          "Cost of resilience and residual risks",
          "Prioritised action plan",
        ],
        angle: "AURA decides which risks truly deserve to be addressed — including those that are hard to quantify.",
      },
      {
        title: "Inventory allocation",
        situation: "A company must allocate limited capacity across several markets.",
        analyse: [
          "Available stock and demand forecast",
          "Margin by product and country",
          "Expected service level and stock-out penalties",
          "Transport lead times and customer criticality",
          "Commercial commitments",
        ],
        deliver: [
          "Recommended allocation",
          "Customers to serve first",
          "Protected margin and accepted stock-outs",
          "Alternative scenarios",
          "Justification of the trade-off",
        ],
        angle:
          "Beyond margin: strategic priorities, customer reputation and contractual commitments are weighed explicitly.",
      },
      {
        title: "Logistics network redesign",
        situation: "Keep a warehouse, open a new one, outsource, relocate — or reroute supplier-to-store flows?",
        analyse: [
          "Supplier locations, volumes and transport costs",
          "Fixed costs, lead times and stock",
          "Customs constraints and carbon emissions",
          "Geopolitical risks",
          "Dependence on ERP, WMS and OMS systems",
        ],
        deliver: [
          "Recommended network scenario",
          "Total cost and service level",
          "Investment required",
          "Application impacts and migration risks",
          "Transition roadmap",
        ],
        angle:
          "Not just a theoretical network: AURA checks that your information systems and organisation can actually support it.",
      },
      {
        title: "ERP / WMS / APS transformation",
        situation: "A company wants to modernise its planning and logistics systems.",
        analyse: [
          "Current processes and existing applications",
          "Available data and interfaces",
          "Business capabilities and technical debt",
          "Country constraints and regulatory requirements",
          "Budget and programme dependencies",
        ],
        deliver: [
          "Target architecture and transformation scenarios",
          "Applications to keep or retire, flows to create",
          "Investment estimates",
          "Prioritised backlog and migration trajectory",
          "Consistency risks",
        ],
        angle:
          "This is where AURA Architect delivers the functional, application and integration vision — with investment estimates.",
      },
    ],
  },
  example: {
    eyebrow: "Worked example",
    title: "Should a plant invest in a 20 MW / 80 MWh battery?",
    inputsTitle: "Inputs",
    inputs: [
      "Annual consumption 250 GWh · peak demand 45 MW",
      "Battery CAPEX €32M · lifetime 15 years · financing cost 6%",
      "Electricity price €40–180/MWh",
      "Grid services €1.8M/yr · arbitrage savings €2.2M/yr",
      "Downtime cost €250,000/hour · 8 outages/yr of ~1.5 h",
      "Carbon target −40% in five years",
    ],
    analysisTitle: "Analysis",
    analysis: [
      "Compare battery alone, solar + battery, PPA and no investment",
      "Test price and availability scenarios",
      "Assess resilience during outages",
      "Check grid connection constraints",
      "Weigh impacts on maintenance, contracts and operations",
      "Compute breakeven thresholds and financing conditions",
    ],
    finding:
      "At full size, annualised CAPEX and OPEX (≈ €3.9M/yr) absorb almost all market revenues (€4.0M/yr): the project only works in favourable price scenarios.",
    resultTitle: "Result",
    verdict: "Go under conditions",
    detail: "A 12 MW / 48 MWh battery (≈ €19M) sized on the critical load.",
    conditions: [
      "Grid-services contract secured",
      "Grid connection confirmed",
      "10-year supplier warranty",
      "Breakeven at ≈ €2.4M/yr of market revenues — before up to €3M/yr of avoided downtime",
    ],
    takeaway: "Not just the mathematically optimal answer: a decision that is defensible, explained and actionable.",
    note: "Illustrative example — indicative figures.",
  },
};

const fr: Positioning = {
  why: {
    eyebrow: "Pourquoi AURA",
    title: "Une couche de décision au-dessus de vos analyses.",
    lead: "AURA ne remplace ni vos modèles, ni vos experts, ni vos données. Elle se place au-dessus : elle structure le problème métier, compare les scénarios, détecte les contradictions et les risques, explique la recommandation et fixe les conditions de mise en œuvre.",
    question: {
      before: "La question n’est pas seulement",
      not: "« Quelle solution est optimale ? »",
      but: "mais plutôt",
      answer: "« Quelle décision est réellement acceptable, finançable, résiliente et transformable ? »",
    },
    capabilitiesTitle: "Cinq capacités rarement réunies",
    capabilities: [
      {
        title: "Modèle métier explicite",
        text: "Marge, capacité, fournisseur, actif, risque, dépendance, contrainte : la décision repose sur les notions qu’utilise réellement votre métier.",
      },
      {
        title: "Raisonnement Forward–Backward",
        text: "Partir d’une décision proposée, détecter les blocages, remonter aux causes et proposer des réparations.",
      },
      {
        title: "Incertitude qualitative",
        text: "« Fort potentiel, mais risque élevé » peut être exprimé et raisonné — même quand les données sont incomplètes.",
      },
      {
        title: "Effets secondaires visibles",
        text: "Un choix énergétique peut dégrader la maintenance, le financement ou la résilience. AURA rend ces impacts visibles.",
      },
      {
        title: "De la décision à l’exécution",
        text: "Architecture, flux, backlog, investissements et conditions de réussite : la décision arrive prête à être exécutée.",
      },
    ],
  },
  cases: {
    eyebrow: "Décisions que nous sécurisons",
    title: "Quatre décisions types.",
    situation: "Situation",
    analyse: "Ce que nous analysons",
    deliver: "Ce que vous obtenez",
    angle: "L’apport d’AURA",
    energy: [
      {
        title: "Investir dans une batterie",
        situation:
          "Un énergéticien hésite entre une batterie réseau, une batterie derrière compteur industriel, une batterie couplée à du solaire — ou l’absence d’investissement.",
        analyse: [
          "Puissance, capacité, CAPEX, OPEX et durée de vie",
          "Prix spot historiques et scénarios futurs",
          "Revenus d’arbitrage et de services système",
          "Contraintes de raccordement et disponibilité réseau",
          "Dégradation de la batterie et coût du financement",
          "Risques réglementaires, contractuels et fournisseurs",
        ],
        deliver: [
          "Scénario recommandé et dimensionnement",
          "VAN, TRI, DSCR et délai de retour",
          "Scénarios défavorables et seuils de rentabilité",
          "Risques bloquants et conditions de financement",
          "Go / Go sous conditions / No-Go",
          "Plan de déploiement et architecture cible",
        ],
        angle: "Une décision qu’un comité d’investissement peut comprendre, contester et approuver.",
      },
      {
        title: "Solaire + stockage ou PPA ?",
        situation:
          "Un industriel doit choisir entre acheter sur le marché, signer un PPA, construire du solaire, construire solaire + batterie — ou combiner plusieurs options.",
        analyse: [
          "Profil de consommation horaire et prévisions de production",
          "Prix de l’électricité, durée et clauses du PPA",
          "Coûts de construction, foncier disponible et contraintes réseau",
          "Objectifs carbone et flexibilité industrielle",
          "Risque de prix et risque de contrepartie",
        ],
        deliver: [
          "Combinaison d’options préférable",
          "Coût total de possession",
          "Exposition résiduelle au marché et autonomie énergétique",
          "Risques contractuels et impact sur la marge",
          "Trajectoire d’investissement",
        ],
        angle:
          "Plus large qu’un calcul de coût actualisé : les risques stratégiques, contractuels, industriels et organisationnels font partie de la décision.",
      },
      {
        title: "Raccordement d’un data center",
        situation:
          "Un opérateur doit choisir un site, une capacité de raccordement, une architecture de secours et un mix réseau, batterie, groupe électrogène et renouvelables.",
        analyse: [
          "Charge informatique actuelle et future, puissance appelée",
          "Délai de raccordement et capacité réseau locale",
          "Coût de l’électricité et exigences de disponibilité",
          "Contraintes de refroidissement et émissions carbone",
          "Coût du foncier, délais et coûts des équipements",
        ],
        deliver: [
          "Site recommandé et architecture électrique",
          "Capacité de raccordement et mix production / secours",
          "Coûts d’investissement et risques de délai",
          "Niveau de résilience",
          "Trajectoire d’extension",
        ],
        angle:
          "Cette architecture est-elle réalisable dans les délais, finançable et compatible avec la stratégie industrielle ?",
      },
      {
        title: "Résilience énergétique d’une usine",
        situation:
          "Une usine subit des coupures, des prix volatils, la dépendance à un fournisseur, un risque de limitation réseau et des contraintes de décarbonation.",
        analyse: [
          "Courbes de consommation et équipements critiques",
          "Scénarios de panne et coût d’arrêt de production",
          "Contrats énergétiques et capacités de production locale",
          "Batteries, groupes de secours et délais de maintenance",
          "Objectifs de continuité",
        ],
        deliver: [
          "Équipements à sécuriser en priorité",
          "Stockage nécessaire et architecture de micro-réseau",
          "Stratégie d’effacement",
          "Coût d’une heure d’arrêt évitée",
          "Plan d’investissement et ordre des actions",
        ],
        angle: "Des investissements de résilience classés selon les arrêts qu’ils évitent réellement.",
      },
    ],
    supplyChain: [
      {
        title: "Risque fournisseur",
        situation: "Un industriel dépend fortement d’un fournisseur unique en Asie.",
        analyse: [
          "Fournisseurs, sous-traitants, volumes et dépenses",
          "Délais et taux de défaut",
          "Dépendance géographique et exposition géopolitique",
          "Capacité alternative et coûts de qualification",
          "Niveaux de stock et criticité des composants",
        ],
        deliver: [
          "Fournisseurs critiques et composants à sécuriser",
          "Fournisseur alternatif recommandé",
          "Stock de sécurité et stratégie de double sourcing",
          "Coût de la résilience et risques résiduels",
          "Plan d’action priorisé",
        ],
        angle:
          "AURA décide quels risques méritent réellement d’être traités — y compris ceux qui sont difficiles à quantifier.",
      },
      {
        title: "Allocation des stocks",
        situation: "Une entreprise doit répartir une capacité limitée entre plusieurs marchés.",
        analyse: [
          "Stock disponible et demande prévisionnelle",
          "Marge par produit et par pays",
          "Niveau de service attendu et pénalités de rupture",
          "Délais de transport et criticité des clients",
          "Engagements commerciaux",
        ],
        deliver: [
          "Allocation recommandée",
          "Clients à servir en priorité",
          "Marge protégée et ruptures acceptées",
          "Scénarios alternatifs",
          "Justification de l’arbitrage",
        ],
        angle:
          "Au-delà de la marge : priorités stratégiques, réputation client et engagements contractuels sont pesés explicitement.",
      },
      {
        title: "Reconfiguration du réseau logistique",
        situation:
          "Faut-il conserver un entrepôt, en ouvrir un nouveau, externaliser, relocaliser — ou modifier les flux fournisseurs-magasins ?",
        analyse: [
          "Localisation des fournisseurs, volumes et coûts de transport",
          "Coûts fixes, délais et stocks",
          "Contraintes douanières et émissions carbone",
          "Risques géopolitiques",
          "Dépendance aux systèmes ERP, WMS et OMS",
        ],
        deliver: [
          "Scénario de réseau recommandé",
          "Coût total et niveau de service",
          "Investissement nécessaire",
          "Impacts applicatifs et risques de migration",
          "Feuille de route de transition",
        ],
        angle:
          "Pas seulement un réseau théorique : AURA vérifie que le système d’information et l’organisation peuvent réellement le supporter.",
      },
      {
        title: "Transformation ERP / WMS / APS",
        situation: "Une entreprise veut moderniser son système de planification et de logistique.",
        analyse: [
          "Processus actuels et applications existantes",
          "Données disponibles et interfaces",
          "Capacités métier et dette technique",
          "Contraintes pays et exigences réglementaires",
          "Budget et dépendances entre programmes",
        ],
        deliver: [
          "Architecture cible et scénarios de transformation",
          "Applications à conserver ou supprimer, flux à créer",
          "Estimation des investissements",
          "Backlog priorisé et trajectoire de migration",
          "Risques de cohérence",
        ],
        angle:
          "C’est ici qu’AURA Architecturer produit la vision fonctionnelle, applicative et d’intégration — avec l’estimation des investissements.",
      },
    ],
  },
  example: {
    eyebrow: "Exemple complet",
    title: "Une usine doit-elle investir dans une batterie de 20 MW / 80 MWh ?",
    inputsTitle: "Données",
    inputs: [
      "Consommation annuelle 250 GWh · puissance maximale 45 MW",
      "CAPEX batterie 32 M€ · durée de vie 15 ans · coût du financement 6 %",
      "Prix de l’électricité 40–180 €/MWh",
      "Services réseau 1,8 M€/an · économies d’arbitrage 2,2 M€/an",
      "Coût d’arrêt 250 000 €/heure · 8 coupures/an d’environ 1 h 30",
      "Objectif carbone −40 % en cinq ans",
    ],
    analysisTitle: "Analyse",
    analysis: [
      "Comparer batterie seule, solaire + batterie, PPA et absence d’investissement",
      "Tester des scénarios de prix et de disponibilité",
      "Évaluer la résilience en cas de panne",
      "Vérifier les contraintes de raccordement",
      "Analyser les impacts sur la maintenance, les contrats et l’exploitation",
      "Calculer les seuils de rentabilité et les conditions de financement",
    ],
    finding:
      "À pleine taille, CAPEX et OPEX annualisés (≈ 3,9 M€/an) absorbent presque tous les revenus de marché (4,0 M€/an) : le projet ne tient que dans les scénarios de prix favorables.",
    resultTitle: "Résultat",
    verdict: "Go sous conditions",
    detail: "Une batterie de 12 MW / 48 MWh (≈ 19 M€) dimensionnée sur la charge critique.",
    conditions: [
      "Contrat de services réseau sécurisé",
      "Raccordement confirmé",
      "Garantie fournisseur de dix ans",
      "Point mort à ≈ 2,4 M€/an de revenus de marché — avant jusqu’à 3 M€/an d’arrêts évités",
    ],
    takeaway:
      "Pas seulement la solution mathématiquement optimale : une décision défendable, expliquée et actionnable.",
    note: "Exemple illustratif — chiffres indicatifs.",
  },
};

const positioning: Record<Locale, Positioning> = { en, fr };

export function getPositioning(locale: Locale): Positioning {
  return positioning[locale];
}
