import type { Locale, ProductKey } from "@/lib/i18n";

/** A bilingual string: [français, English]. */
export type T = readonly [string, string];

export function tr(value: T, locale: Locale): string {
  return locale === "fr" ? value[0] : value[1];
}

/** Everything a zoomable card can reveal in its detail panel. */
export type Detail = {
  id: string;
  kicker?: T;
  title: T;
  summary: T;
  body: T[];
  /** Short chain of labels drawn as a schema in the detail panel. */
  flow?: T[];
  points?: T[];
  example?: T;
};

export type SprintKey = "resilience" | "decision" | "architecture";

export type Product = {
  key: ProductKey;
  name: T;
  short: T;
  tagline: T;
  trigger: T;
  question: T;
  headline: T;
  lead: T;
  image: { src: string; alt: T };
  audience: T[];
  features: Detail[];
  journey: { title: T; lead: T; steps: Detail[] };
  architecture: { title: T; lead: T; layers: { name: T; items: T[] }[] };
  integrations: { title: T; lead: T; items: { name: string; text: T }[] };
  governance: Detail[];
  notThis: { title: T; text: T; product?: ProductKey }[];
  faq: { q: T; a: T }[];
  sprint: SprintKey;
};

export type Sprint = {
  key: SprintKey;
  product: ProductKey;
  name: T;
  duration: T;
  promise: T;
  trigger: T;
  forWhom: T[];
  steps: Detail[];
  inputs: T[];
  deliverables: Detail[];
  notThis: T[];
  after: T;
  outcome: T;
};

/* -------------------------------------------------------------------------- */
/*                                Aura Supply Chain                            */
/* -------------------------------------------------------------------------- */

const supply: Product = {
  key: "supply",
  name: ["Aura Supply Chain", "Aura Supply Chain"],
  short: ["Supply Chain", "Supply Chain"],
  tagline: ["La tour de contrôle qui transforme un signal en décision.", "The control tower that turns a signal into a decision."],
  trigger: ["Un signal dans vos données", "A signal in your data"],
  question: [
    "« Que se passe-t-il dans mon réseau, pourquoi, et que dois-je décider maintenant ? »",
    "“What is happening in my network, why, and what must I decide now?”",
  ],
  headline: [
    "Voir le risque dans vos données réelles. Comprendre sa cause. Décider avant l’impact.",
    "See risk in your real data. Understand its cause. Decide before impact.",
  ],
  lead: [
    "Aura Supply Chain se branche sur vos systèmes existants, modélise vos objets métier dans une ontologie vivante et évalue en continu des règles causales. Chaque alerte provient d’une règle appliquée à des données réelles mappées — jamais d’une donnée inventée — et débouche sur une décision préremplie que vos équipes complètent et valident.",
    "Aura Supply Chain plugs into your existing systems, models your business objects in a living ontology and continuously evaluates causal rules. Every alert comes from a rule applied to real mapped data — never from invented data — and leads to a pre-filled decision your teams complete and validate.",
  ],
  image: {
    src: "/images/family/port-control-tower.webp",
    alt: ["Porte-conteneurs entrant dans un port industriel", "Container ship entering an industrial port"],
  },
  audience: [
    ["Directions Supply Chain et opérations", "Supply Chain and operations leaders"],
    ["Achats et approvisionnement", "Procurement and sourcing"],
    ["Planification (S&OP, S&OE)", "Planning (S&OP, S&OE)"],
    ["Tous secteurs : industrie, distribution, santé, énergie…", "Every sector: manufacturing, retail, healthcare, energy…"],
  ],
  features: [
    {
      id: "connect",
      kicker: ["Studio", "Studio"],
      title: ["Connexion aux SI", "System connections"],
      summary: [
        "REST, OAuth2, SOAP, GraphQL, événements Kafka, fichiers, batch et MCP : Aura lit vos systèmes là où ils sont.",
        "REST, OAuth2, SOAP, GraphQL, Kafka events, files, batch and MCP: Aura reads your systems where they are.",
      ],
      body: [
        [
          "Le Studio déclare chaque source comme un connecteur : protocole, authentification, fréquence d’interrogation et périmètre. Aura interroge vos systèmes à la fréquence utile au lieu de copier toute votre donnée dans un nouvel entrepôt.",
          "The Studio declares each source as a connector: protocol, authentication, polling frequency and scope. Aura queries your systems at the useful frequency instead of copying all your data into yet another warehouse.",
        ],
        [
          "Les connexions sont progressives : deux ou trois sources suffisent pour produire une première alerte utile. D’autres s’ajoutent ensuite sans refaire le modèle.",
          "Connections are progressive: two or three sources are enough to produce a first useful alert. Others are added later without rebuilding the model.",
        ],
      ],
      flow: [
        ["ERP / WMS / TMS", "ERP / WMS / TMS"],
        ["Connecteur", "Connector"],
        ["Métadonnées", "Metadata"],
        ["Studio Aura", "Aura Studio"],
      ],
      example: [
        "Un ERP exposé en REST/OAuth2, un fichier de prévisions déposé chaque nuit en SFTP et un flux Kafka d’événements transport.",
        "An ERP exposed through REST/OAuth2, a nightly forecast file dropped on SFTP and a Kafka stream of transport events.",
      ],
    },
    {
      id: "metadata",
      kicker: ["Studio", "Studio"],
      title: ["Métadonnées & échantillons", "Metadata & samples"],
      summary: [
        "Aura découvre la structure de chaque source et travaille sur des échantillons avant toute mise en production.",
        "Aura discovers each source’s structure and works on samples before anything goes live.",
      ],
      body: [
        [
          "Pour chaque source, le Studio récupère les métadonnées (champs, types, clés, volumétrie) et un échantillon représentatif. Vos équipes voient exactement ce qu’Aura lit — rien n’est supposé.",
          "For each source, the Studio retrieves metadata (fields, types, keys, volumes) and a representative sample. Your teams see exactly what Aura reads — nothing is assumed.",
        ],
        [
          "Les échantillons servent à tester le mapping et les règles avant de les activer sur le flux complet.",
          "Samples are used to test mapping and rules before activating them on the full stream.",
        ],
      ],
      points: [
        ["Schéma et types détectés", "Detected schema and types"],
        ["Clés et jointures candidates", "Candidate keys and joins"],
        ["Qualité : valeurs manquantes, doublons", "Quality: missing values, duplicates"],
      ],
    },
    {
      id: "indicators",
      kicker: ["Studio", "Studio"],
      title: ["Indicateurs & seuils", "Indicators & thresholds"],
      summary: [
        "Couverture de stock, OTIF, délais fournisseurs… définis une fois, avec leurs seuils d’alerte.",
        "Stock cover, OTIF, supplier lead times… defined once, with their alert thresholds.",
      ],
      body: [
        [
          "Chaque indicateur est une formule explicite sur des objets métier mappés, avec une unité, une granularité et des seuils vert / orange / rouge. Les seuils sont des paramètres métier, modifiables et historisés.",
          "Each indicator is an explicit formula over mapped business objects, with a unit, a granularity and green / amber / red thresholds. Thresholds are business parameters, editable and versioned.",
        ],
      ],
      flow: [
        ["Données mappées", "Mapped data"],
        ["Formule", "Formula"],
        ["Seuils", "Thresholds"],
        ["Voyant d’état", "Status light"],
      ],
      example: [
        "Couverture de stock = stock disponible ÷ consommation moyenne journalière ; orange sous 10 jours, rouge sous 5.",
        "Stock cover = available stock ÷ average daily consumption; amber below 10 days, red below 5.",
      ],
    },
    {
      id: "mapping",
      kicker: ["Studio", "Studio"],
      title: ["Objets métier & mapping sémantique", "Business objects & semantic mapping"],
      summary: [
        "Un LLM propose la correspondance entre vos champs et les objets métier ; un humain la valide.",
        "An LLM proposes how your fields map to business objects; a human validates it.",
      ],
      body: [
        [
          "Fournisseur, article, site, commande, expédition : Aura raisonne sur des objets métier, pas sur des noms de colonnes. Le LLM suggère le mapping à partir des métadonnées et des échantillons ; chaque suggestion reste en attente tant qu’un responsable ne l’a pas acceptée ou corrigée.",
          "Supplier, item, site, order, shipment: Aura reasons about business objects, not column names. The LLM suggests the mapping from metadata and samples; each suggestion stays pending until an owner accepts or corrects it.",
        ],
        [
          "Le mapping validé est tracé : qui a validé quoi, quand, et sur quel échantillon.",
          "The validated mapping is traced: who validated what, when, and on which sample.",
        ],
      ],
      flow: [
        ["Champ source", "Source field"],
        ["Suggestion LLM", "LLM suggestion"],
        ["Validation humaine", "Human validation"],
        ["Objet métier", "Business object"],
      ],
      example: [
        "Le champ « LIFNR » de l’ERP est proposé comme identifiant Fournisseur ; l’acheteur confirme et la jointure avec les commandes devient disponible.",
        "The ERP field “LIFNR” is proposed as the Supplier identifier; the buyer confirms and the join with orders becomes available.",
      ],
    },
    {
      id: "rules",
      kicker: ["Studio", "Studio"],
      title: ["Règles causales", "Causal rules"],
      summary: [
        "Des règles lisibles qui relient une cause à ses effets sur le service, le stock, le coût et la marge.",
        "Readable rules linking a cause to its effects on service, stock, cost and margin.",
      ],
      body: [
        [
          "Une règle causale décrit un mécanisme : « si le délai d’un fournisseur critique dépasse X alors que la couverture de ses composants est inférieure à Y, le service client du site Z est menacé ». Les règles sont éditables, versionnées et testables sur l’historique.",
          "A causal rule describes a mechanism: “if a critical supplier’s lead time exceeds X while cover for its components is below Y, customer service at site Z is at risk”. Rules are editable, versioned and testable on history.",
        ],
        [
          "C’est le cœur de la promesse : une alerte n’est jamais une corrélation opaque, c’est une règle explicite évaluée sur des données réelles.",
          "This is the core of the promise: an alert is never an opaque correlation, it is an explicit rule evaluated on real data.",
        ],
      ],
      flow: [
        ["Cause", "Cause"],
        ["Condition", "Condition"],
        ["Effet propagé", "Propagated effect"],
        ["Alerte", "Alert"],
      ],
    },
    {
      id: "ontology",
      kicker: ["Studio", "Studio"],
      title: ["Ontologie vivante", "Living ontology"],
      summary: [
        "Le modèle de votre réseau — objets, relations, dépendances — évolue avec votre activité.",
        "The model of your network — objects, relationships, dependencies — evolves with your business.",
      ],
      body: [
        [
          "L’ontologie relie fournisseurs, composants, sites, clients et flux. Elle permet de propager un signal : un retard fournisseur devient un composant exposé, puis un produit, puis une commande client.",
          "The ontology links suppliers, components, sites, customers and flows. It lets a signal propagate: a supplier delay becomes an exposed component, then a product, then a customer order.",
        ],
        [
          "Elle est « vivante » : un nouveau site, un nouveau fournisseur ou une nouvelle source enrichit le modèle sans le reconstruire.",
          "It is “living”: a new site, supplier or source enriches the model without rebuilding it.",
        ],
      ],
      flow: [
        ["Fournisseur", "Supplier"],
        ["Composant", "Component"],
        ["Site", "Site"],
        ["Client", "Customer"],
      ],
    },
    {
      id: "cockpit",
      kicker: ["Cockpit", "Cockpit"],
      title: ["Alertes explicables", "Explainable alerts"],
      summary: [
        "Le cockpit ne montre que des alertes issues de règles évaluées sur vos données mappées.",
        "The cockpit only shows alerts produced by rules evaluated on your mapped data.",
      ],
      body: [
        [
          "Chaque alerte affiche la règle déclenchée, les données qui la justifient, les objets touchés et un voyant d’état. Un clic remonte jusqu’à l’enregistrement source.",
          "Each alert shows the rule that fired, the data that justifies it, the objects affected and a status light. One click goes back to the source record.",
        ],
        [
          "Aucune alerte n’est générée par le LLM : s’il n’y a pas de règle et de donnée, il n’y a pas d’alerte.",
          "No alert is generated by the LLM: without a rule and data, there is no alert.",
        ],
      ],
      points: [
        ["Règle déclenchée et version", "Rule fired and its version"],
        ["Chiffres justificatifs, horodatés", "Justifying figures, time-stamped"],
        ["Objets et sites exposés", "Exposed objects and sites"],
      ],
    },
    {
      id: "copilot",
      kicker: ["Cockpit", "Cockpit"],
      title: ["Copilote qui raisonne", "A copilot that reasons"],
      summary: [
        "Posez une question en langage naturel : le copilote répond avec des graphiques, en citant règles et données.",
        "Ask in natural language: the copilot answers with charts, citing rules and data.",
      ],
      body: [
        [
          "Le copilote LLM s’appuie sur l’ontologie, les règles et les données mappées. Il explique une alerte, compare des périodes, trace un graphique et indique toujours d’où viennent les chiffres.",
          "The LLM copilot relies on the ontology, the rules and the mapped data. It explains an alert, compares periods, draws a chart and always states where the figures come from.",
        ],
        [
          "S’il manque une donnée pour répondre, il le dit — il ne comble pas le vide.",
          "If a piece of data is missing, it says so — it does not fill the gap.",
        ],
      ],
      example: [
        "« Pourquoi le site de Lyon passe-t-il en orange ? » → graphique de couverture sur 8 semaines, règle concernée, fournisseur en cause.",
        "“Why is the Lyon site turning amber?” → 8-week cover chart, the rule involved, the supplier at the root.",
      ],
    },
    {
      id: "decision",
      kicker: ["Décision", "Decision"],
      title: ["Décision Supply préremplie", "Pre-filled Supply decision"],
      summary: [
        "L’alerte ouvre une fiche de décision déjà renseignée : contexte, chiffres, options. Vous complétez et validez.",
        "The alert opens a decision form already filled in: context, figures, options. You complete and validate.",
      ],
      body: [
        [
          "La fiche reprend le contexte de l’alerte et les chiffres qui la justifient. L’utilisateur complète les options (réallocation, expédition express, second fournisseur…), choisit, justifie et signe.",
          "The form carries over the alert’s context and the figures that justify it. The user completes the options (reallocation, express shipment, second source…), chooses, justifies and signs.",
        ],
        [
          "La décision est enregistrée avec son contexte : on peut la relire, la rejouer et apprendre des suivantes.",
          "The decision is recorded with its context: it can be re-read, replayed and learnt from.",
        ],
      ],
      flow: [
        ["Alerte", "Alert"],
        ["Contexte + chiffres", "Context + figures"],
        ["Options complétées", "Options completed"],
        ["Décision signée", "Signed decision"],
      ],
    },
  ],
  journey: {
    title: ["Du système source à la décision signée.", "From source system to signed decision."],
    lead: [
      "Deux espaces, un fil continu : le Studio construit le modèle, le Cockpit l’exploite au quotidien.",
      "Two spaces, one continuous thread: the Studio builds the model, the Cockpit runs it day to day.",
    ],
    steps: [
      {
        id: "j-connect",
        kicker: ["Studio", "Studio"],
        title: ["Connecter", "Connect"],
        summary: ["Déclarer les sources et lire leurs métadonnées.", "Declare sources and read their metadata."],
        body: [
          [
            "On commence petit : deux ou trois sources qui portent le risque prioritaire. Aura lit la structure et un échantillon de chacune.",
            "Start small: two or three sources carrying the priority risk. Aura reads the structure and a sample of each.",
          ],
        ],
      },
      {
        id: "j-model",
        kicker: ["Studio", "Studio"],
        title: ["Modéliser", "Model"],
        summary: ["Mapper les objets métier et construire l’ontologie.", "Map business objects and build the ontology."],
        body: [
          [
            "Le LLM propose, l’humain valide. Les objets validés s’assemblent en un graphe de dépendances.",
            "The LLM proposes, the human validates. Validated objects assemble into a dependency graph.",
          ],
        ],
      },
      {
        id: "j-rules",
        kicker: ["Studio", "Studio"],
        title: ["Calibrer", "Calibrate"],
        summary: ["Indicateurs, seuils et règles causales.", "Indicators, thresholds and causal rules."],
        body: [
          [
            "Les règles sont écrites avec les experts métier et testées sur l’historique pour éviter le bruit.",
            "Rules are written with domain experts and tested on history to avoid noise.",
          ],
        ],
      },
      {
        id: "j-monitor",
        kicker: ["Cockpit", "Cockpit"],
        title: ["Surveiller & expliquer", "Monitor & explain"],
        summary: ["Alertes issues des règles, copilote qui explique.", "Rule-based alerts, a copilot that explains."],
        body: [
          [
            "Le cockpit évalue les règles à chaque rafraîchissement. Le copilote répond aux questions avec graphiques et sources.",
            "The cockpit evaluates rules at every refresh. The copilot answers questions with charts and sources.",
          ],
        ],
      },
      {
        id: "j-decide",
        kicker: ["Décision", "Decision"],
        title: ["Décider", "Decide"],
        summary: ["Fiche préremplie, complétée et signée.", "Pre-filled form, completed and signed."],
        body: [
          [
            "La décision part des chiffres de l’alerte. L’humain complète, arbitre et engage.",
            "The decision starts from the alert’s figures. The human completes, arbitrates and commits.",
          ],
        ],
      },
    ],
  },
  architecture: {
    title: ["Comment ça fonctionne", "How it works"],
    lead: [
      "Aura ne remplace pas vos systèmes. Il se place au-dessus, lit ce qui est utile et raisonne sur un modèle explicite.",
      "Aura does not replace your systems. It sits above them, reads what is useful and reasons over an explicit model.",
    ],
    layers: [
      {
        name: ["Vos systèmes", "Your systems"],
        items: [["ERP", "ERP"], ["WMS", "WMS"], ["TMS", "TMS"], ["APS", "APS"], ["Fichiers", "Files"], ["Événements", "Events"]],
      },
      {
        name: ["Studio", "Studio"],
        items: [["Connecteurs", "Connectors"], ["Mapping sémantique", "Semantic mapping"], ["Ontologie", "Ontology"], ["Règles causales", "Causal rules"]],
      },
      {
        name: ["Moteur", "Engine"],
        items: [["Évaluation des règles", "Rule evaluation"], ["Propagation", "Propagation"], ["Traçabilité", "Lineage"]],
      },
      {
        name: ["Cockpit", "Cockpit"],
        items: [["Alertes", "Alerts"], ["Copilote", "Copilot"], ["Décision préremplie", "Pre-filled decision"]],
      },
    ],
  },
  integrations: {
    title: ["Intégrations", "Integrations"],
    lead: [
      "Tous les modes d’accès courants d’un SI d’entreprise, sans imposer de plateforme de données.",
      "Every common enterprise access pattern, without imposing a data platform.",
    ],
    items: [
      { name: "REST", text: ["API HTTP/JSON", "HTTP/JSON APIs"] },
      { name: "OAuth2", text: ["Authentification déléguée", "Delegated authentication"] },
      { name: "SOAP", text: ["Services web historiques", "Legacy web services"] },
      { name: "GraphQL", text: ["Requêtes ciblées", "Targeted queries"] },
      { name: "Kafka", text: ["Flux d’événements", "Event streams"] },
      { name: "Fichiers", text: ["CSV, Excel, SFTP", "CSV, Excel, SFTP"] },
      { name: "Batch", text: ["Chargements planifiés", "Scheduled loads"] },
      { name: "MCP", text: ["Model Context Protocol", "Model Context Protocol"] },
    ],
  },
  governance: [
    {
      id: "g-nodata",
      title: ["Aucune donnée inventée", "No invented data"],
      summary: ["Une alerte = une règle + des données réelles mappées.", "An alert = a rule + real mapped data."],
      body: [
        [
          "Le LLM n’émet pas d’alerte et ne comble pas les trous. Si la donnée manque, l’interface l’indique.",
          "The LLM issues no alerts and fills no gaps. If data is missing, the interface says so.",
        ],
      ],
    },
    {
      id: "g-human",
      title: ["Validation humaine", "Human validation"],
      summary: ["Mapping, règles et décisions sont validés par une personne.", "Mapping, rules and decisions are validated by a person."],
      body: [
        [
          "Chaque suggestion de l’IA reste en attente jusqu’à validation. Chaque décision est signée par son responsable.",
          "Every AI suggestion stays pending until validated. Every decision is signed by its owner.",
        ],
      ],
    },
    {
      id: "g-trace",
      title: ["Traçabilité de bout en bout", "End-to-end traceability"],
      summary: ["De la décision à l’enregistrement source.", "From the decision back to the source record."],
      body: [
        [
          "Version de la règle, données au moment de l’évaluation, auteur du mapping, auteur de la décision : tout est historisé.",
          "Rule version, data at evaluation time, mapping author, decision author: everything is versioned.",
        ],
      ],
    },
    {
      id: "g-demo",
      title: ["Démo sur SI synthétique", "Demo on a synthetic system"],
      summary: ["« Maison Lucie » : un SI fictif, jamais des données client.", "“Maison Lucie”: a fictional system, never client data."],
      body: [
        [
          "L’application publique tourne sur Maison Lucie, un SI synthétique conçu pour la démonstration. Les chiffres visibles ne décrivent aucune entreprise réelle.",
          "The public application runs on Maison Lucie, a synthetic system built for demonstration. Figures shown describe no real company.",
        ],
      ],
    },
  ],
  notThis: [
    {
      title: ["Pas un atelier de stratégie", "Not a strategy workshop"],
      text: [
        "Une question stratégique ponctuelle, sans données connectées, relève d’Aura Décider.",
        "A one-off strategic question, without connected data, belongs to Aura Decide.",
      ],
      product: "decide",
    },
    {
      title: ["Pas un outil d’architecture SI", "Not an IT architecture tool"],
      text: [
        "Cartographier et transformer le SI relève d’Aura Architect.",
        "Mapping and transforming the IT landscape belongs to Aura Architect.",
      ],
      product: "architect",
    },
    {
      title: ["Pas un nouvel entrepôt de données", "Not another data warehouse"],
      text: [
        "Aura lit vos sources à la fréquence utile ; il ne remplace ni votre ERP, ni votre BI.",
        "Aura reads your sources at the useful frequency; it replaces neither your ERP nor your BI.",
      ],
    },
  ],
  faq: [
    {
      q: ["Faut-il connecter tout notre SI pour commencer ?", "Do we need to connect our whole landscape to start?"],
      a: [
        "Non. Deux ou trois sources qui portent le risque prioritaire suffisent pour une première alerte utile. C’est l’objet du Sprint Résilience.",
        "No. Two or three sources carrying the priority risk are enough for a first useful alert. That is what the Resilience Sprint is for.",
      ],
    },
    {
      q: ["Le LLM peut-il générer des alertes ?", "Can the LLM generate alerts?"],
      a: [
        "Non. Les alertes viennent exclusivement de règles causales évaluées sur des données réelles mappées. Le LLM aide à mapper (avec validation humaine) et à expliquer.",
        "No. Alerts come exclusively from causal rules evaluated on real mapped data. The LLM helps with mapping (with human validation) and with explanation.",
      ],
    },
    {
      q: ["Est-ce spécifique à un secteur ?", "Is it specific to one sector?"],
      a: [
        "Non. L’ontologie et les règles se paramètrent pour toute chaîne d’approvisionnement : industrie, distribution, santé, énergie, agroalimentaire.",
        "No. The ontology and rules are configured for any supply chain: manufacturing, retail, healthcare, energy, food.",
      ],
    },
    {
      q: ["Que montre la démo publique ?", "What does the public demo show?"],
      a: [
        "Le SI synthétique « Maison Lucie ». Toutes les données y sont fictives et servent à illustrer le parcours Studio → Cockpit → Décision.",
        "The synthetic “Maison Lucie” system. All its data is fictional and illustrates the Studio → Cockpit → Decision journey.",
      ],
    },
    {
      q: ["Où sont hébergées nos données ?", "Where is our data hosted?"],
      a: [
        "Aura lit les sources plutôt que de tout copier. L’hébergement et le choix du modèle de langage sont cadrés avec vous, y compris des options souveraines.",
        "Aura reads sources rather than copying everything. Hosting and the choice of language model are agreed with you, including sovereign options.",
      ],
    },
  ],
  sprint: "resilience",
};

/* -------------------------------------------------------------------------- */
/*                                  Aura Décider                               */
/* -------------------------------------------------------------------------- */

const decide: Product = {
  key: "decide",
  name: ["Aura Décider", "Aura Decide"],
  short: ["Décider", "Decide"],
  tagline: ["L’atelier pour prendre — et défendre — une décision stratégique.", "The workspace to make — and defend — a strategic decision."],
  trigger: ["Une question stratégique", "A strategic question"],
  question: [
    "« Faut-il investir, réorganiser, lancer, relocaliser ? Et à quelles conditions ? »",
    "“Should we invest, reorganise, launch, relocate? And under what conditions?”",
  ],
  headline: [
    "Une décision à fort enjeu, cadrée, arbitrée et traçable. Tout secteur, toute fonction.",
    "A high-stakes decision, framed, arbitrated and traceable. Any sector, any function.",
  ],
  lead: [
    "Aura Décider est un atelier agnostique : il ne nécessite aucune donnée préalable ni connexion au SI. Il guide un collectif de la question initiale jusqu’à une décision enregistrée, en cinq étapes — Comprendre, Impacter, Composer, Arbitrer, Suivre — avec une validation humaine à chaque passage.",
    "Aura Decide is an agnostic workspace: it needs no prior data and no system connection. It guides a group from the initial question to a recorded decision in five steps — Understand, Impact, Compose, Arbitrate, Track — with human validation at every stage.",
  ],
  image: {
    src: "/images/family/decide-options.webp",
    alt: ["Une décideuse face à des options reliées", "A decision-maker facing connected options"],
  },
  audience: [
    ["Comités de direction", "Executive committees"],
    ["Stratégie, finance, RH, produit, industrie", "Strategy, finance, HR, product, operations"],
    ["Fonds et conseils d’administration", "Funds and boards"],
    ["Toute équipe face à un choix engageant", "Any team facing a committing choice"],
  ],
  features: [
    {
      id: "understand",
      kicker: ["Étape 1", "Step 1"],
      title: ["Comprendre", "Understand"],
      summary: ["Reformuler la question, son périmètre, son horizon et ses décideurs.", "Reframe the question, its scope, horizon and decision-makers."],
      body: [
        [
          "Beaucoup de mauvaises décisions répondent à la mauvaise question. L’atelier force à écrire la décision, ce qui est hors périmètre, qui décide, qui est consulté et pour quand.",
          "Many bad decisions answer the wrong question. The workspace forces you to write down the decision, what is out of scope, who decides, who is consulted and by when.",
        ],
        [
          "L’IA aide à reformuler et à repérer les angles morts ; elle ne tranche pas.",
          "AI helps reframe and spot blind spots; it does not decide.",
        ],
      ],
      example: [
        "« Faut-il ouvrir un deuxième site ? » devient « Quelle capacité supplémentaire, où et quand, pour servir la demande 2028 sans dégrader la marge ? »",
        "“Should we open a second site?” becomes “What additional capacity, where and when, to serve 2028 demand without eroding margin?”",
      ],
    },
    {
      id: "impact",
      kicker: ["Étape 2", "Step 2"],
      title: ["Impacter", "Impact"],
      summary: ["Cartographier ce que la décision touche : objectifs, critères, contraintes, parties prenantes.", "Map what the decision touches: objectives, criteria, constraints, stakeholders."],
      body: [
        [
          "On distingue ce qui se compense (coût, délai) de ce qui ne se négocie pas (sécurité, conformité). Chaque critère a un propriétaire et une manière d’être évalué.",
          "We separate what can be traded off (cost, time) from what is non-negotiable (safety, compliance). Each criterion has an owner and a way to be assessed.",
        ],
      ],
      flow: [
        ["Objectifs", "Objectives"],
        ["Critères", "Criteria"],
        ["Contraintes", "Constraints"],
        ["Parties prenantes", "Stakeholders"],
      ],
    },
    {
      id: "compose",
      kicker: ["Étape 3", "Step 3"],
      title: ["Composer", "Compose"],
      summary: ["Construire des options et des scénarios contrastés.", "Build contrasting options and scenarios."],
      body: [
        [
          "Les options sont composées à partir de leviers ; les scénarios décrivent des futurs plausibles. Chaque hypothèse est déclarée, sourcée ou marquée comme estimation.",
          "Options are composed from levers; scenarios describe plausible futures. Every assumption is declared, sourced or flagged as an estimate.",
        ],
      ],
      points: [
        ["Options composées de leviers", "Options composed of levers"],
        ["Scénarios contrastés", "Contrasting scenarios"],
        ["Hypothèses déclarées", "Declared assumptions"],
      ],
    },
    {
      id: "arbitrate",
      kicker: ["Étape 4", "Step 4"],
      title: ["Arbitrer", "Arbitrate"],
      summary: ["Comparer, tester la robustesse, trouver les conditions d’acceptabilité.", "Compare, test robustness, find the conditions for acceptability."],
      body: [
        [
          "L’arbitrage est explicite : quelles options respectent les contraintes, lesquelles tiennent dans la plupart des scénarios, et quels changements minimaux rendraient une option bloquée acceptable.",
          "Arbitration is explicit: which options meet the constraints, which hold across most scenarios, and which minimal changes would make a blocked option acceptable.",
        ],
        [
          "Le verdict — Go, Go sous conditions, No-Go — est proposé ; il est pris par les décideurs.",
          "The verdict — Go, Go under conditions, No-Go — is proposed; it is taken by the decision-makers.",
        ],
      ],
      flow: [
        ["Options", "Options"],
        ["Scénarios", "Scenarios"],
        ["Robustesse", "Robustness"],
        ["Verdict", "Verdict"],
      ],
    },
    {
      id: "track",
      kicker: ["Étape 5", "Step 5"],
      title: ["Suivre", "Track"],
      summary: ["Enregistrer la décision et ses déclencheurs de révision.", "Record the decision and its review triggers."],
      body: [
        [
          "La décision est consignée avec ses hypothèses, ses conditions et des déclencheurs de révision : « si le prix de l’énergie dépasse X, on réexamine ». On sait quand et pourquoi revenir dessus.",
          "The decision is recorded with its assumptions, conditions and review triggers: “if energy prices exceed X, we revisit”. You know when and why to come back to it.",
        ],
      ],
    },
    {
      id: "record",
      kicker: ["Registre", "Record"],
      title: ["Registre de décision", "Decision record"],
      summary: ["Une note de décision opposable : qui, quoi, pourquoi, sur quelles hypothèses.", "A defensible decision note: who, what, why, on which assumptions."],
      body: [
        [
          "Le registre conserve la question, les options écartées et pourquoi, les hypothèses, les contraintes, le verdict, les signataires et la date de validité. Il se relit dans six mois sans reconstituer la réunion.",
          "The record keeps the question, the rejected options and why, the assumptions, constraints, verdict, signatories and validity date. It can be re-read in six months without reconstructing the meeting.",
        ],
      ],
      points: [
        ["Options écartées et raisons", "Rejected options and reasons"],
        ["Hypothèses et sources", "Assumptions and sources"],
        ["Signataires et date de validité", "Signatories and validity date"],
      ],
    },
  ],
  journey: {
    title: ["Cinq étapes, de la question à l’engagement.", "Five steps, from question to commitment."],
    lead: [
      "Le parcours est le même quelle que soit la fonction : c’est ce qui rend Aura Décider agnostique.",
      "The journey is the same whatever the function: that is what makes Aura Decide agnostic.",
    ],
    steps: [],
  },
  architecture: {
    title: ["Comment ça fonctionne", "How it works"],
    lead: [
      "Aucune donnée préalable n’est nécessaire. L’atelier structure ce que le collectif sait déjà, rend visible ce qu’il ne sait pas, et conserve la trace.",
      "No prior data is required. The workspace structures what the group already knows, makes visible what it does not, and keeps the record.",
    ],
    layers: [
      {
        name: ["Entrées", "Inputs"],
        items: [["Question", "Question"], ["Documents", "Documents"], ["Entretiens", "Interviews"], ["Hypothèses", "Assumptions"]],
      },
      {
        name: ["Atelier", "Workspace"],
        items: [["Comprendre", "Understand"], ["Impacter", "Impact"], ["Composer", "Compose"], ["Arbitrer", "Arbitrate"], ["Suivre", "Track"]],
      },
      {
        name: ["Assistance", "Assistance"],
        items: [["IA de préparation", "Preparation AI"], ["Arbitrage déterministe", "Deterministic arbitration"]],
      },
      {
        name: ["Registre", "Record"],
        items: [["Note de décision", "Decision note"], ["Déclencheurs de révision", "Review triggers"], ["Signatures", "Signatures"]],
      },
    ],
  },
  integrations: {
    title: ["Intégrations", "Integrations"],
    lead: [
      "Volontairement légères : Aura Décider fonctionne sans connexion au SI.",
      "Deliberately light: Aura Decide works without any system connection.",
    ],
    items: [
      { name: "Documents", text: ["Notes, études, présentations", "Notes, studies, decks"] },
      { name: "Saisie", text: ["Hypothèses et estimations", "Assumptions and estimates"] },
      { name: "Export", text: ["Note de décision partageable", "Shareable decision note"] },
      { name: "Aucun SI", text: ["Pas de connecteur requis", "No connector required"] },
    ],
  },
  governance: [
    {
      id: "d-human",
      title: ["Les humains décident", "Humans decide"],
      summary: ["L’IA prépare ; les décideurs tranchent et signent.", "AI prepares; decision-makers decide and sign."],
      body: [
        [
          "L’IA extrait, reformule et signale les manques. Le verdict et la signature restent humains.",
          "AI extracts, reframes and flags gaps. The verdict and signature remain human.",
        ],
      ],
    },
    {
      id: "d-assumptions",
      title: ["Hypothèses déclarées", "Declared assumptions"],
      summary: ["Toute valeur est sourcée ou marquée comme estimation.", "Every value is sourced or flagged as an estimate."],
      body: [
        [
          "Sans données préalables, la rigueur vient de la déclaration explicite : ce qu’on sait, ce qu’on suppose, ce qu’on ignore.",
          "Without prior data, rigour comes from explicit declaration: what we know, what we assume, what we do not know.",
        ],
      ],
    },
    {
      id: "d-trace",
      title: ["Traçabilité", "Traceability"],
      summary: ["Chaque étape laisse une trace relisible.", "Every step leaves a readable trace."],
      body: [
        [
          "Le registre relie le verdict aux critères, aux options et aux hypothèses qui l’ont produit.",
          "The record links the verdict to the criteria, options and assumptions that produced it.",
        ],
      ],
    },
    {
      id: "d-review",
      title: ["Révision programmée", "Scheduled review"],
      summary: ["Une décision a une date de validité.", "A decision has a validity date."],
      body: [
        [
          "Les déclencheurs de révision évitent qu’une décision survive à des hypothèses devenues fausses.",
          "Review triggers stop a decision from outliving assumptions that have become false.",
        ],
      ],
    },
  ],
  notThis: [
    {
      title: ["Pas un outil de surveillance", "Not a monitoring tool"],
      text: [
        "Aura Décider ne se connecte pas à vos données et n’émet pas d’alertes. La détection continue relève d’Aura Supply Chain.",
        "Aura Decide does not connect to your data and issues no alerts. Continuous detection belongs to Aura Supply Chain.",
      ],
      product: "supply",
    },
    {
      title: ["Pas réservé à la Supply Chain", "Not limited to Supply Chain"],
      text: [
        "Investissement, organisation, produit, M&A, énergie : l’atelier est agnostique.",
        "Investment, organisation, product, M&A, energy: the workspace is agnostic.",
      ],
    },
    {
      title: ["Pas un cadrage d’architecture", "Not an architecture framing"],
      text: [
        "Une fois la décision prise, sa traduction dans le SI relève d’Aura Architect.",
        "Once the decision is made, translating it into the IT landscape belongs to Aura Architect.",
      ],
      product: "architect",
    },
  ],
  faq: [
    {
      q: ["Faut-il des données pour commencer ?", "Do we need data to start?"],
      a: [
        "Non. Aura Décider structure ce que le collectif sait déjà : documents, entretiens, estimations. Les hypothèses sont déclarées comme telles.",
        "No. Aura Decide structures what the group already knows: documents, interviews, estimates. Assumptions are declared as such.",
      ],
    },
    {
      q: ["Quelle différence avec la décision d’Aura Supply Chain ?", "How does it differ from the decision in Aura Supply Chain?"],
      a: [
        "Aura Supply Chain traite des décisions opérationnelles et tactiques déclenchées par une alerte sur vos données. Aura Décider traite une question stratégique ponctuelle, sans données connectées, dans n’importe quelle fonction. Les deux applications sont indépendantes.",
        "Aura Supply Chain handles operational and tactical decisions triggered by an alert on your data. Aura Decide handles a one-off strategic question, without connected data, in any function. The two applications are independent.",
      ],
    },
    {
      q: ["Quel rôle joue l’IA ?", "What role does AI play?"],
      a: [
        "Elle prépare : reformulation, extraction de faits, repérage des manques. L’arbitrage est explicite et la décision est prise par des personnes.",
        "It prepares: reframing, fact extraction, gap spotting. Arbitration is explicit and the decision is made by people.",
      ],
    },
    {
      q: ["Que garde-t-on à la fin ?", "What do we keep at the end?"],
      a: [
        "Une note de décision opposable et ses déclencheurs de révision, consultables dans l’application.",
        "A defensible decision note and its review triggers, available in the application.",
      ],
    },
  ],
  sprint: "decision",
};
decide.journey.steps = decide.features.slice(0, 5);

/* -------------------------------------------------------------------------- */
/*                                 Aura Architect                              */
/* -------------------------------------------------------------------------- */

const architect: Product = {
  key: "architect",
  name: ["Aura Architect", "Aura Architect"],
  short: ["Architect", "Architect"],
  tagline: ["Le studio pour cadrer une transformation SI exécutable.", "The studio to frame an executable IT transformation."],
  trigger: ["Un programme de transformation", "A transformation programme"],
  question: [
    "« Quelle cible, quelle trajectoire, et dans quel ordre ? »",
    "“Which target, which roadmap, and in what order?”",
  ],
  headline: [
    "Des besoins aux dossiers d’architecture : une transformation lisible, argumentée, séquencée.",
    "From requirements to architecture files: a transformation that is readable, argued and sequenced.",
  ],
  lead: [
    "Aura Architect relie besoins et exigences, capacités métier, applications, données et flux dans un même modèle. Il en déduit une cible et une trajectoire, et produit les dossiers d’architecture et notes de décision qui permettent aux équipes d’exécuter.",
    "Aura Architect links requirements, business capabilities, applications, data and flows in one model. It derives a target and a roadmap, and produces the architecture files and decision notes teams need to execute.",
  ],
  image: {
    src: "/images/family/architect-team.webp",
    alt: ["Équipe travaillant sur une trajectoire de transformation", "Team working on a transformation roadmap"],
  },
  audience: [
    ["DSI et architectes d’entreprise", "CIOs and enterprise architects"],
    ["Directions de programme", "Programme directors"],
    ["Métiers porteurs d’une transformation", "Business owners of a transformation"],
    ["Intégrateurs et PMO", "Integrators and PMOs"],
  ],
  features: [
    {
      id: "requirements",
      kicker: ["Cadrage", "Framing"],
      title: ["Besoins & exigences", "Needs & requirements"],
      summary: ["Recueillir et qualifier les besoins, les exigences et les contraintes.", "Capture and qualify needs, requirements and constraints."],
      body: [
        [
          "Chaque exigence est rattachée à un objectif métier et à une capacité, avec sa priorité et sa source. On sait pourquoi elle existe et ce qu’elle touche.",
          "Each requirement is tied to a business objective and a capability, with its priority and source. You know why it exists and what it touches.",
        ],
      ],
    },
    {
      id: "capabilities",
      kicker: ["Modèle", "Model"],
      title: ["Capacités métier", "Business capabilities"],
      summary: ["La carte de ce que l’entreprise doit savoir faire, indépendante des outils.", "The map of what the business must be able to do, independent of tools."],
      body: [
        [
          "La carte des capacités sert de langage commun entre métiers et SI. On y superpose maturité, criticité et couverture applicative.",
          "The capability map is the common language between business and IT. Maturity, criticality and application coverage are overlaid on it.",
        ],
      ],
      flow: [
        ["Objectif", "Objective"],
        ["Capacité", "Capability"],
        ["Application", "Application"],
        ["Donnée", "Data"],
      ],
    },
    {
      id: "applications",
      kicker: ["Modèle", "Model"],
      title: ["Applications", "Applications"],
      summary: ["Le portefeuille applicatif et son devenir : garder, faire évoluer, remplacer, construire.", "The application portfolio and its future: keep, evolve, replace, build."],
      body: [
        [
          "Chaque application est reliée aux capacités qu’elle sert et aux données qu’elle manipule. Les recouvrements et les trous deviennent visibles.",
          "Each application is linked to the capabilities it serves and the data it handles. Overlaps and gaps become visible.",
        ],
      ],
    },
    {
      id: "data",
      kicker: ["Modèle", "Model"],
      title: ["Données", "Data"],
      summary: ["Objets de données, référentiels et responsabilités.", "Data objects, master data and ownership."],
      body: [
        [
          "Qui est maître de la donnée client, article, fournisseur ? Aura Architect le rend explicite et le relie aux flux.",
          "Who masters customer, item and supplier data? Aura Architect makes it explicit and links it to flows.",
        ],
      ],
    },
    {
      id: "flows",
      kicker: ["Modèle", "Model"],
      title: ["Flux", "Flows"],
      summary: ["Le catalogue des échanges entre systèmes et leurs dépendances.", "The catalogue of exchanges between systems and their dependencies."],
      body: [
        [
          "Chaque flux a une source, une cible, un protocole, une fréquence et une donnée. Les dépendances apparaissent avant de devenir des retards.",
          "Each flow has a source, target, protocol, frequency and data. Dependencies surface before they become delays.",
        ],
      ],
      flow: [
        ["Application A", "Application A"],
        ["Flux", "Flow"],
        ["Application B", "Application B"],
      ],
    },
    {
      id: "roadmap",
      kicker: ["Cible", "Target"],
      title: ["Trajectoire", "Roadmap"],
      summary: ["Des étapes réalistes de l’existant vers la cible.", "Realistic steps from current state to target."],
      body: [
        [
          "La trajectoire séquence les chantiers selon leurs dépendances, leur valeur et leur risque. Chaque palier est un état cohérent du SI.",
          "The roadmap sequences workstreams by dependency, value and risk. Each stage is a coherent state of the landscape.",
        ],
      ],
      flow: [
        ["Existant", "Current"],
        ["Palier 1", "Stage 1"],
        ["Palier 2", "Stage 2"],
        ["Cible", "Target"],
      ],
    },
    {
      id: "files",
      kicker: ["Livrables", "Deliverables"],
      title: ["Dossiers d’architecture", "Architecture files"],
      summary: ["Des dossiers générés depuis le modèle, toujours à jour.", "Files generated from the model, always up to date."],
      body: [
        [
          "Vue fonctionnelle, applicative, données, intégration : les dossiers sont produits depuis le modèle et non réécrits à la main.",
          "Functional, application, data and integration views: files are produced from the model, not rewritten by hand.",
        ],
      ],
    },
    {
      id: "adr",
      kicker: ["Livrables", "Deliverables"],
      title: ["Notes de décision d’architecture", "Architecture decision notes"],
      summary: ["Les choix techniques structurants, argumentés et datés.", "Structuring technical choices, argued and dated."],
      body: [
        [
          "Une note d’architecture consigne un choix de conception (par exemple : bus d’événements ou API synchrones) dans le périmètre du programme. Ce ne sont pas des arbitrages stratégiques — ceux-là relèvent d’Aura Décider.",
          "An architecture note records a design choice (for example: event bus or synchronous APIs) within the programme’s scope. These are not strategic arbitrations — those belong to Aura Decide.",
        ],
      ],
    },
  ],
  journey: {
    title: ["Du besoin au dossier exécutable.", "From need to executable file."],
    lead: [
      "Chaque étape enrichit le même modèle : rien n’est ressaisi entre la cartographie et les livrables.",
      "Each step enriches the same model: nothing is re-entered between mapping and deliverables.",
    ],
    steps: [
      {
        id: "a-frame",
        title: ["Cadrer", "Frame"],
        summary: ["Ambition, périmètre, exigences.", "Ambition, scope, requirements."],
        body: [["Objectifs métier et contraintes posés et priorisés.", "Business objectives and constraints set and prioritised."]],
      },
      {
        id: "a-map",
        title: ["Cartographier", "Map"],
        summary: ["Capacités, applications, données, flux.", "Capabilities, applications, data, flows."],
        body: [["L’existant modélisé juste assez pour décider.", "The current state modelled just enough to decide."]],
      },
      {
        id: "a-target",
        title: ["Concevoir la cible", "Design the target"],
        summary: ["Options de cible et compromis.", "Target options and trade-offs."],
        body: [["Plusieurs cibles comparées avant d’en retenir une.", "Several targets compared before one is retained."]],
      },
      {
        id: "a-sequence",
        title: ["Séquencer", "Sequence"],
        summary: ["Paliers, dépendances, priorités.", "Stages, dependencies, priorities."],
        body: [["Une trajectoire réaliste, palier par palier.", "A realistic roadmap, stage by stage."]],
      },
      {
        id: "a-document",
        title: ["Documenter", "Document"],
        summary: ["Dossiers et notes de décision.", "Files and decision notes."],
        body: [["Des livrables générés depuis le modèle.", "Deliverables generated from the model."]],
      },
    ],
  },
  architecture: {
    title: ["Comment ça fonctionne", "How it works"],
    lead: [
      "Un modèle unique, plusieurs vues. Les livrables sont des projections du modèle, pas des documents indépendants.",
      "One model, many views. Deliverables are projections of the model, not independent documents.",
    ],
    layers: [
      { name: ["Pourquoi", "Why"], items: [["Objectifs", "Objectives"], ["Besoins", "Needs"], ["Exigences", "Requirements"]] },
      { name: ["Quoi", "What"], items: [["Capacités", "Capabilities"], ["Processus", "Processes"]] },
      { name: ["Avec quoi", "With what"], items: [["Applications", "Applications"], ["Données", "Data"], ["Flux", "Flows"]] },
      { name: ["Comment et quand", "How and when"], items: [["Cible", "Target"], ["Trajectoire", "Roadmap"], ["Dossiers", "Files"]] },
    ],
  },
  integrations: {
    title: ["Intégrations", "Integrations"],
    lead: [
      "Aura Architect part de ce que vous avez déjà : inventaires, cartographies, exports.",
      "Aura Architect starts from what you already have: inventories, maps, exports.",
    ],
    items: [
      { name: "Inventaires", text: ["Listes d’applications, CMDB", "Application lists, CMDB"] },
      { name: "Tableurs", text: ["Imports CSV / Excel", "CSV / Excel imports"] },
      { name: "Documents", text: ["Cahiers des charges, études", "Specifications, studies"] },
      { name: "Export", text: ["Dossiers et feuille de route", "Files and roadmap"] },
    ],
  },
  governance: [
    {
      id: "ar-human",
      title: ["Architectes aux commandes", "Architects in control"],
      summary: ["L’IA propose, les architectes valident.", "AI proposes, architects validate."],
      body: [["Suggestions de rattachement et de rédaction soumises à validation.", "Linking and drafting suggestions submitted for validation."]],
    },
    {
      id: "ar-trace",
      title: ["Exigence → livrable", "Requirement → deliverable"],
      summary: ["Chaque élément de cible remonte à une exigence.", "Every target element traces back to a requirement."],
      body: [["La traçabilité évite les chantiers orphelins.", "Traceability avoids orphan workstreams."]],
    },
    {
      id: "ar-single",
      title: ["Une seule source de vérité", "A single source of truth"],
      summary: ["Les dossiers sont générés depuis le modèle.", "Files are generated from the model."],
      body: [["Pas de divergence entre schémas et documents.", "No drift between diagrams and documents."]],
    },
    {
      id: "ar-adr",
      title: ["Choix datés et argumentés", "Dated, argued choices"],
      summary: ["Les notes de décision gardent le pourquoi.", "Decision notes keep the why."],
      body: [["Un nouvel arrivant comprend pourquoi la cible est ainsi.", "A newcomer understands why the target is the way it is."]],
    },
  ],
  notThis: [
    {
      title: ["Pas un arbitrage stratégique", "Not a strategic arbitration"],
      text: [
        "Savoir s’il faut lancer le programme relève d’Aura Décider ; Aura Architect dit comment le réaliser.",
        "Whether to launch the programme belongs to Aura Decide; Aura Architect says how to deliver it.",
      ],
      product: "decide",
    },
    {
      title: ["Pas une tour de contrôle", "Not a control tower"],
      text: [
        "La surveillance opérationnelle des flux physiques relève d’Aura Supply Chain.",
        "Operational monitoring of physical flows belongs to Aura Supply Chain.",
      ],
      product: "supply",
    },
    {
      title: ["Pas un outil de gestion de projet", "Not a project management tool"],
      text: [
        "La trajectoire alimente votre outil de pilotage ; elle ne le remplace pas.",
        "The roadmap feeds your delivery tooling; it does not replace it.",
      ],
    },
  ],
  faq: [
    {
      q: ["Faut-il une cartographie existante ?", "Do we need an existing map?"],
      a: [
        "Non, mais elle accélère. Un inventaire applicatif, même partiel, suffit pour démarrer le Design Sprint Architecture.",
        "No, but it helps. An application inventory, even partial, is enough to start the Architecture Design Sprint.",
      ],
    },
    {
      q: ["Aura Architect remplace-t-il nos architectes ?", "Does Aura Architect replace our architects?"],
      a: [
        "Non. Il leur donne un modèle partagé et des livrables générés, pour passer plus de temps sur les choix et moins sur la mise en forme.",
        "No. It gives them a shared model and generated deliverables, so they spend more time on choices and less on formatting.",
      ],
    },
    {
      q: ["Les notes de décision font-elles doublon avec Aura Décider ?", "Do the decision notes overlap with Aura Decide?"],
      a: [
        "Non. Les notes d’Aura Architect consignent des choix de conception dans un programme déjà décidé. Aura Décider sert à décider s’il faut engager ce programme.",
        "No. Aura Architect’s notes record design choices within a programme already decided. Aura Decide is for deciding whether to commit to the programme.",
      ],
    },
  ],
  sprint: "architecture",
};

export const products: Record<ProductKey, Product> = { supply, decide, architect };
export const productOrder: ProductKey[] = ["supply", "decide", "architect"];

/* -------------------------------------------------------------------------- */
/*                                     Sprints                                 */
/* -------------------------------------------------------------------------- */

const resilience: Sprint = {
  key: "resilience",
  product: "supply",
  name: ["Sprint Résilience", "Resilience Sprint"],
  duration: ["3 à 4 semaines", "3 to 4 weeks"],
  promise: [
    "Un cockpit vivant branché sur votre SI, et une première alerte réelle transformée en décision préremplie.",
    "A live cockpit plugged into your systems, and a first real alert turned into a pre-filled decision.",
  ],
  trigger: [
    "Un risque récurrent que vous voyez trop tard dans vos données : ruptures, retards fournisseurs, couverture de stock.",
    "A recurring risk you see too late in your data: stock-outs, supplier delays, stock cover.",
  ],
  forWhom: [
    ["Direction Supply Chain ou opérations", "Supply Chain or operations leadership"],
    ["Référent SI capable d’ouvrir 2-3 accès", "An IT contact able to open 2-3 accesses"],
    ["Experts métier pour écrire les règles", "Domain experts to write the rules"],
  ],
  steps: [
    {
      id: "r-w1",
      kicker: ["Semaine 1", "Week 1"],
      title: ["Brancher", "Plug in"],
      summary: ["Choisir le risque prioritaire, connecter 2-3 sources, lire métadonnées et échantillons.", "Pick the priority risk, connect 2-3 sources, read metadata and samples."],
      body: [
        [
          "Atelier de lancement pour choisir un risque et les sources qui le portent. Ouverture des accès (REST, fichiers, Kafka…), lecture des métadonnées, premiers échantillons et diagnostic de qualité.",
          "Kick-off workshop to choose one risk and the sources that carry it. Accesses opened (REST, files, Kafka…), metadata read, first samples and a quality diagnosis.",
        ],
      ],
      points: [
        ["Risque prioritaire choisi", "Priority risk chosen"],
        ["Connecteurs actifs", "Active connectors"],
        ["Diagnostic de qualité", "Quality diagnosis"],
      ],
    },
    {
      id: "r-w2",
      kicker: ["Semaine 2", "Week 2"],
      title: ["Modéliser", "Model"],
      summary: ["Mapper les objets métier et construire l’ontologie du périmètre.", "Map business objects and build the scope’s ontology."],
      body: [
        [
          "Le LLM propose le mapping ; vos référents valident. L’ontologie relie fournisseurs, articles, sites et clients du périmètre.",
          "The LLM proposes the mapping; your owners validate. The ontology links the scope’s suppliers, items, sites and customers.",
        ],
      ],
    },
    {
      id: "r-w3",
      kicker: ["Semaine 3", "Week 3"],
      title: ["Calibrer", "Calibrate"],
      summary: ["Indicateurs, seuils et règles causales testés sur l’historique.", "Indicators, thresholds and causal rules tested on history."],
      body: [
        [
          "Les règles sont écrites avec vos experts, rejouées sur l’historique disponible et ajustées pour limiter les fausses alertes.",
          "Rules are written with your experts, replayed on available history and tuned to limit false alerts.",
        ],
      ],
    },
    {
      id: "r-w4",
      kicker: ["Semaine 4", "Week 4"],
      title: ["Activer", "Activate"],
      summary: ["Première alerte sur vos données → décision préremplie → revue.", "First alert on your data → pre-filled decision → review."],
      body: [
        [
          "Le cockpit tourne sur vos données. La première alerte réelle ouvre une décision préremplie que votre équipe complète. Revue de fin de sprint et plan d’extension.",
          "The cockpit runs on your data. The first real alert opens a pre-filled decision your team completes. End-of-sprint review and extension plan.",
        ],
      ],
    },
  ],
  inputs: [
    ["Accès en lecture à 2-3 sources", "Read access to 2-3 sources"],
    ["Un référent SI et un référent métier", "An IT owner and a business owner"],
    ["L’historique disponible du périmètre", "Available history for the scope"],
    ["Deux ateliers d’experts pour les règles", "Two expert workshops for the rules"],
  ],
  deliverables: [
    {
      id: "rd-cockpit",
      title: ["Cockpit vivant sur votre SI", "Live cockpit on your systems"],
      summary: ["Connecteurs, ontologie et règles en production sur le périmètre.", "Connectors, ontology and rules in production on the scope."],
      body: [["Ce n’est pas une maquette : il lit vos sources et évalue vos règles.", "It is not a mock-up: it reads your sources and evaluates your rules."]],
    },
    {
      id: "rd-rules",
      title: ["Bibliothèque de règles", "Rule library"],
      summary: ["Règles causales documentées, versionnées, testées.", "Causal rules documented, versioned, tested."],
      body: [["Chaque règle a un propriétaire, un seuil et un historique de test.", "Each rule has an owner, a threshold and a test history."]],
    },
    {
      id: "rd-decision",
      title: ["Première décision tracée", "First traced decision"],
      summary: ["Une alerte réelle transformée en décision signée.", "A real alert turned into a signed decision."],
      body: [["La preuve que la chaîne signal → règle → décision fonctionne chez vous.", "Proof that the signal → rule → decision chain works in your context."]],
    },
    {
      id: "rd-plan",
      title: ["Plan d’extension", "Extension plan"],
      summary: ["Sources, règles et sites suivants, priorisés.", "Next sources, rules and sites, prioritised."],
      body: [["Pour passer du périmètre pilote à l’usage courant.", "To move from the pilot scope to everyday use."]],
    },
  ],
  notThis: [
    ["Pas un atelier de stratégie : on ne débat pas du modèle d’affaires.", "Not a strategy workshop: the business model is not debated."],
    ["Pas une intégration de tout le SI : 2-3 sources, un risque.", "Not a full-landscape integration: 2-3 sources, one risk."],
    ["Pas une démo sur données fictives : le livrable tourne sur vos données.", "Not a demo on fictional data: the deliverable runs on your data."],
  ],
  after: [
    "Abonnement Aura Supply Chain : ajout de sources, de règles et de sites, usage quotidien du cockpit.",
    "Aura Supply Chain subscription: more sources, rules and sites, daily use of the cockpit.",
  ],
  outcome: ["Cockpit vivant sur votre SI", "Live cockpit on your systems"],
};

const decision: Sprint = {
  key: "decision",
  product: "decide",
  name: ["Decision Sprint", "Decision Sprint"],
  duration: ["5 jours à 2 semaines", "5 days to 2 weeks"],
  promise: [
    "Une décision à fort enjeu cadrée, arbitrée et consignée dans une note de décision opposable.",
    "One high-stakes decision framed, arbitrated and recorded in a defensible decision note.",
  ],
  trigger: [
    "Une question stratégique ponctuelle qui doit être tranchée : investir, réorganiser, lancer, céder, relocaliser.",
    "A one-off strategic question that must be settled: invest, reorganise, launch, divest, relocate.",
  ],
  forWhom: [
    ["Un décideur responsable et son comité", "An accountable decision-maker and their committee"],
    ["Toute fonction : stratégie, finance, RH, produit, industrie", "Any function: strategy, finance, HR, product, operations"],
    ["Aucune donnée ni connexion SI requise", "No data or system connection required"],
  ],
  steps: [
    {
      id: "d-d1",
      kicker: ["Jour 1", "Day 1"],
      title: ["Comprendre", "Understand"],
      summary: ["Écrire la question, le périmètre, l’horizon, les décideurs.", "Write the question, scope, horizon, decision-makers."],
      body: [["Entretiens courts et atelier de cadrage. La question est reformulée jusqu’à faire consensus.", "Short interviews and a framing workshop. The question is reframed until it is agreed."]],
    },
    {
      id: "d-d2",
      kicker: ["Jour 2", "Day 2"],
      title: ["Impacter", "Impact"],
      summary: ["Objectifs, critères, contraintes non négociables.", "Objectives, criteria, non-negotiable constraints."],
      body: [["Chaque critère reçoit un propriétaire et une méthode d’évaluation.", "Each criterion gets an owner and an assessment method."]],
    },
    {
      id: "d-d3",
      kicker: ["Jour 3", "Day 3"],
      title: ["Composer", "Compose"],
      summary: ["Options et scénarios, hypothèses déclarées.", "Options and scenarios, declared assumptions."],
      body: [["Trois à cinq options réellement différentes, confrontées à des futurs contrastés.", "Three to five genuinely different options, tested against contrasting futures."]],
    },
    {
      id: "d-d4",
      kicker: ["Jour 4", "Day 4"],
      title: ["Arbitrer", "Arbitrate"],
      summary: ["Robustesse, conditions d’acceptabilité, verdict proposé.", "Robustness, conditions for acceptability, proposed verdict."],
      body: [["Séance d’arbitrage avec les décideurs. Les conditions d’un Go sont explicitées.", "Arbitration session with decision-makers. The conditions for a Go are made explicit."]],
    },
    {
      id: "d-d5",
      kicker: ["Jour 5", "Day 5"],
      title: ["Suivre", "Track"],
      summary: ["Note de décision, signatures, déclencheurs de révision.", "Decision note, signatures, review triggers."],
      body: [["La décision est consignée et signée. Au-delà de 5 jours, le sprint s’étend pour les consultations nécessaires, jusqu’à 2 semaines.", "The decision is recorded and signed. Beyond 5 days, the sprint extends for required consultations, up to 2 weeks."]],
    },
  ],
  inputs: [
    ["La question et son décideur", "The question and its decision-maker"],
    ["Les documents existants (études, notes)", "Existing documents (studies, notes)"],
    ["3 à 6 entretiens de parties prenantes", "3 to 6 stakeholder interviews"],
    ["Deux demi-journées de comité", "Two half-day committee sessions"],
  ],
  deliverables: [
    {
      id: "dd-note",
      title: ["Note de décision opposable", "Defensible decision note"],
      summary: ["Question, options, verdict, raisons, signataires.", "Question, options, verdict, reasons, signatories."],
      body: [["Relisible dans six mois sans reconstituer la réunion.", "Readable in six months without reconstructing the meeting."]],
    },
    {
      id: "dd-options",
      title: ["Options et scénarios comparés", "Compared options and scenarios"],
      summary: ["Y compris les options écartées et pourquoi.", "Including rejected options and why."],
      body: [["Ce qui a été considéré compte autant que ce qui a été retenu.", "What was considered matters as much as what was retained."]],
    },
    {
      id: "dd-conditions",
      title: ["Conditions d’acceptabilité", "Conditions for acceptability"],
      summary: ["Ce qui doit être vrai pour que la décision tienne.", "What must be true for the decision to hold."],
      body: [["Les conditions deviennent des jalons de suivi.", "Conditions become tracking milestones."]],
    },
    {
      id: "dd-triggers",
      title: ["Déclencheurs de révision", "Review triggers"],
      summary: ["Quand et pourquoi revenir sur la décision.", "When and why to revisit the decision."],
      body: [["Une décision a une date de validité et des signaux de remise en cause.", "A decision has a validity date and signals that call it into question."]],
    },
  ],
  notThis: [
    ["Pas une connexion à vos données : aucune intégration SI.", "Not a connection to your data: no system integration."],
    ["Pas une surveillance continue : une question, un verdict.", "Not continuous monitoring: one question, one verdict."],
    ["Pas un conseil qui décide à votre place : vos décideurs signent.", "Not advice that decides for you: your decision-makers sign."],
  ],
  after: [
    "Accès à Aura Décider pour suivre la décision, ses déclencheurs, et instruire les décisions suivantes en autonomie.",
    "Access to Aura Decide to track the decision and its triggers, and to run the next decisions autonomously.",
  ],
  outcome: ["Note de décision opposable", "Defensible decision note"],
};

const architecture: Sprint = {
  key: "architecture",
  product: "architect",
  name: ["Design Sprint Architecture", "Architecture Design Sprint"],
  duration: ["2 à 3 semaines", "2 to 3 weeks"],
  promise: [
    "Une cible, une trajectoire et un dossier d’architecture exploitable par les équipes de delivery.",
    "A target, a roadmap and an architecture file delivery teams can work from.",
  ],
  trigger: [
    "Un programme de transformation à cadrer : refonte ERP, nouveau canal, fusion de SI, modernisation.",
    "A transformation programme to frame: ERP overhaul, new channel, IT merger, modernisation.",
  ],
  forWhom: [
    ["DSI, architectes, direction de programme", "CIO, architects, programme leadership"],
    ["Métiers porteurs de la transformation", "Business owners of the transformation"],
    ["Intégrateurs à embarquer", "Integrators to onboard"],
  ],
  steps: [
    {
      id: "a-w1",
      kicker: ["Semaine 1", "Week 1"],
      title: ["Cadrer & cartographier", "Frame & map"],
      summary: ["Exigences, capacités, applications, données et flux de l’existant.", "Requirements, capabilities, applications, data and current flows."],
      body: [["Ateliers métier et SI, import des inventaires existants, carte des capacités.", "Business and IT workshops, import of existing inventories, capability map."]],
    },
    {
      id: "a-w2",
      kicker: ["Semaine 2", "Week 2"],
      title: ["Concevoir la cible", "Design the target"],
      summary: ["Options de cible comparées, choix consignés.", "Target options compared, choices recorded."],
      body: [["Deux ou trois cibles confrontées aux exigences ; notes de décision d’architecture.", "Two or three targets tested against requirements; architecture decision notes."]],
    },
    {
      id: "a-w3",
      kicker: ["Semaine 3", "Week 3"],
      title: ["Trajectoire & dossiers", "Roadmap & files"],
      summary: ["Paliers, dépendances, dossier d’architecture, restitution.", "Stages, dependencies, architecture file, read-out."],
      body: [["La trajectoire est séquencée et les dossiers générés depuis le modèle.", "The roadmap is sequenced and files are generated from the model."]],
    },
  ],
  inputs: [
    ["Inventaire applicatif, même partiel", "Application inventory, even partial"],
    ["Objectifs et contraintes du programme", "Programme objectives and constraints"],
    ["Accès aux architectes et référents métier", "Access to architects and business owners"],
    ["Documents existants (études, cahiers des charges)", "Existing documents (studies, specifications)"],
  ],
  deliverables: [
    {
      id: "ad-file",
      title: ["Dossier d’architecture", "Architecture file"],
      summary: ["Vues fonctionnelle, applicative, données, intégration.", "Functional, application, data and integration views."],
      body: [["Généré depuis le modèle, maintenu dans Aura Architect.", "Generated from the model, maintained in Aura Architect."]],
    },
    {
      id: "ad-roadmap",
      title: ["Feuille de route", "Roadmap"],
      summary: ["Paliers cohérents et dépendances explicites.", "Coherent stages and explicit dependencies."],
      body: [["Chaque palier est un état exploitable du SI.", "Each stage is a workable state of the landscape."]],
    },
    {
      id: "ad-flows",
      title: ["Catalogue des flux", "Flow catalogue"],
      summary: ["Tous les échanges cible, avec leur protocole.", "All target exchanges, with their protocol."],
      body: [["La base du travail des intégrateurs.", "The basis for integrators’ work."]],
    },
    {
      id: "ad-notes",
      title: ["Notes de décision d’architecture", "Architecture decision notes"],
      summary: ["Choix de conception argumentés et datés.", "Design choices, argued and dated."],
      body: [["Le pourquoi de la cible, transmissible.", "The why of the target, transferable."]],
    },
  ],
  notThis: [
    ["Pas la décision de lancer le programme : elle relève d’un Decision Sprint.", "Not the decision to launch the programme: that is a Decision Sprint."],
    ["Pas une surveillance opérationnelle : aucune alerte Supply.", "Not operational monitoring: no Supply alerts."],
    ["Pas une étude de 6 mois : juste assez de modèle pour décider et lancer.", "Not a 6-month study: just enough model to decide and start."],
  ],
  after: [
    "Accès à Aura Architect pour maintenir le modèle, les dossiers et la trajectoire pendant le programme.",
    "Access to Aura Architect to maintain the model, files and roadmap throughout the programme.",
  ],
  outcome: ["Dossier d’architecture et feuille de route", "Architecture file and roadmap"],
};

export const sprints: Record<SprintKey, Sprint> = { resilience, decision, architecture };

/** Rows of the “Which entry point?” comparison. */
export const comparisonRows: { label: T; values: Record<ProductKey, T> }[] = [
  {
    label: ["Déclencheur", "Trigger"],
    values: { supply: supply.trigger, decide: decide.trigger, architect: architect.trigger },
  },
  {
    label: ["Nature", "Nature"],
    values: {
      supply: ["Récurrente, opérationnelle ou tactique", "Recurring, operational or tactical"],
      decide: ["Ponctuelle, stratégique", "One-off, strategic"],
      architect: ["Programme pluriannuel", "Multi-year programme"],
    },
  },
  {
    label: ["Données requises", "Data required"],
    values: {
      supply: ["Oui — SI connecté (2-3 sources pour démarrer)", "Yes — connected systems (2-3 sources to start)"],
      decide: ["Aucune — documents et hypothèses déclarées", "None — documents and declared assumptions"],
      architect: ["Inventaires et documents existants", "Existing inventories and documents"],
    },
  },
  {
    label: ["Périmètre", "Scope"],
    values: {
      supply: ["Supply Chain, tous secteurs", "Supply Chain, any sector"],
      decide: ["Toute fonction, tout secteur", "Any function, any sector"],
      architect: ["Système d’information", "IT landscape"],
    },
  },
  {
    label: ["Sprint", "Sprint"],
    values: { supply: resilience.name, decide: decision.name, architect: architecture.name },
  },
  {
    label: ["Durée", "Duration"],
    values: { supply: resilience.duration, decide: decision.duration, architect: architecture.duration },
  },
  {
    label: ["Livrable", "Deliverable"],
    values: { supply: resilience.outcome, decide: decision.outcome, architect: architecture.outcome },
  },
  {
    label: ["Ensuite", "Afterwards"],
    values: {
      supply: ["Abonnement, usage quotidien", "Subscription, daily use"],
      decide: ["Suivi et décisions suivantes", "Tracking and next decisions"],
      architect: ["Modèle maintenu pendant le programme", "Model maintained through the programme"],
    },
  },
];

/** A detail resolved in one language, ready to be passed to client components. */
export type LocalDetail = {
  id: string;
  kicker?: string;
  title: string;
  summary: string;
  body: string[];
  flow?: string[];
  points?: string[];
  example?: string;
};

export function localize(detail: Detail, locale: Locale): LocalDetail {
  const l = (value: T) => tr(value, locale);
  return {
    id: detail.id,
    kicker: detail.kicker && l(detail.kicker),
    title: l(detail.title),
    summary: l(detail.summary),
    body: detail.body.map(l),
    flow: detail.flow?.map(l),
    points: detail.points?.map(l),
    example: detail.example && l(detail.example),
  };
}
