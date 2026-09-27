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
  /** Real screenshots of the application (demo data). The first one is the main visual. */
  screens: { src: string; width: number; height: number; alt: T; caption: T }[];
  screensTitle: T;
  audience: T[];
  /** Problem-first framing: what the reader lives with, what it costs, why current tools fall short, what Aura changes. */
  problem: { title: T; lead: T; pain: T[]; cost: T[]; why: T[]; gain: T[] };
  features: Detail[];
  journey: { title: T; lead: T; steps: Detail[] };
  architecture: { title: T; lead: T; layers: { name: T; items: T[] }[] };
  integrations: { title: T; lead: T; items: { name: string; text: T }[] };
  governance: Detail[];
  notThis: { title: T; text: T; product?: ProductKey }[];
  faq: { q: T; a: T }[];
  sprint: SprintKey;
  /** One sentence anchoring the product in the Decision Intelligence frame. */
  diAnchor?: T;
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
  tagline: [
    "Repérez la rupture dans vos données, comprenez sa cause, décidez avant l’impact client.",
    "Spot the shortage in your data, understand its cause, decide before your customers feel it.",
  ],
  trigger: ["Un risque vu trop tard", "A risk spotted too late"],
  question: [
    "« Qu’est-ce qui menace mon service client, pourquoi, et que dois-je décider aujourd’hui ? »",
    "“What is putting my customer service at risk, why, and what do I need to decide today?”",
  ],
  headline: [
    "Vous apprenez la rupture quand le client appelle. Aura la repère dans vos données, remonte à sa cause et vous fait décider avant l’impact.",
    "You hear about the shortage when the customer calls. Aura spots it in your data, traces it to its cause and gets you deciding before it hits.",
  ],
  lead: [
    "Aura ne remplace ni SAP, ni Kinaxis, ni o9 : c’est la couche qui transforme leurs alertes en décisions explicables, validées, exécutables et mémorisées. Elle se branche sur les systèmes que vous avez déjà, modélise votre réseau et évalue des règles causales explicites sur vos valeurs réelles. Le cockpit ne montre que ce qui compte : ce qui est critique, ce qui est à surveiller, ce qui attend une décision. Chaque alerte ouvre une décision déjà remplie avec les faits ; votre équipe choisit, justifie et signe.",
    "Aura does not replace SAP, Kinaxis or o9: it is the layer that turns their alerts into decisions that are explainable, validated, actionable and remembered. It plugs into the systems you already run, models your network and evaluates explicit causal rules against your real values. The cockpit shows only what matters: what is critical, what to watch, what is waiting for a decision. Every alert opens a decision already filled in with the facts; your team chooses, justifies and signs.",
  ],
  image: {
    src: "/images/aura/supply-map.webp",
    alt: [
      "Salle de supervision : carte du monde lumineuse des flux logistiques au-dessus d’un port et de porte-conteneurs",
      "Supervision room: glowing world map of logistics flows above a port and container ships",
    ],
  },
  screensTitle: ["Du signal à la décision signée, en trois écrans.", "From signal to signed decision, in three screens."],
  screens: [
    {
      src: "/images/product/supply-cockpit.webp",
      width: 1440,
      height: 900,
      alt: [
        "Cockpit Aura Supply Chain : quatre repères (4 alertes critiques, 1 à surveiller, 0 décision en cours, données à jour) et des alertes condensées — rupture fournisseur, stock projeté sous seuil, retard transport, dérive de prévision — chacune avec sa valeur, l’enregistrement concerné, le nombre concerné et un bouton Décider ; copilote Aura à droite.",
        "Aura Supply Chain cockpit: four markers (4 critical alerts, 1 to watch, 0 decisions in progress, data up to date) and condensed alerts — supplier disruption, projected stock below threshold, transport delay, forecast drift — each with its value, the record concerned, the count concerned and a Decide button; Aura copilot on the right.",
      ],
      caption: [
        "Cockpit : quatre repères, des alertes condensées et un bouton Décider sur chacune.",
        "Cockpit: four markers, condensed alerts and a Decide button on each.",
      ],
    },
    {
      src: "/images/product/supply-studio.webp",
      width: 1440,
      height: 900,
      alt: [
        "Studio Aura Supply Chain : les cinq phases Connecter, Modéliser, Mapper, Raisonner, Publier avec leurs voyants, et le catalogue de sources (SAP, Salesforce, Microsoft Dynamics, Oracle, Snowflake, SI de démonstration Maison Lucie).",
        "Aura Supply Chain Studio: the five phases Connect, Model, Map, Reason, Publish with their status lights, and the source catalogue (SAP, Salesforce, Microsoft Dynamics, Oracle, Snowflake, Maison Lucie demo system).",
      ],
      caption: ["Studio : cinq phases avec voyants, de la connexion à la publication.", "Studio: five phases with status lights, from connection to publication."],
    },
    {
      src: "/images/product/supply-decision.webp",
      width: 1280,
      height: 800,
      alt: [
        "Décision Aura Supply Chain ouverte depuis l’alerte « Risque de rupture fournisseur » : étape Comprendre, question préremplie avec les faits observés (score 88/100 pour SUP-001 Tessitura Milano, seuil 60, 5 sur 15 concernés, source et date).",
        "Aura Supply Chain decision opened from the “Supplier disruption risk” alert: Understand step, question pre-filled with the observed facts (score 88/100 for SUP-001 Tessitura Milano, threshold 60, 5 of 15 concerned, source and date).",
      ],
      caption: ["Décision : préremplie avec les faits observés, complétée par l’humain.", "Decision: pre-filled with the observed facts, completed by a human."],
    },
  ],
  audience: [
    ["Directions Supply Chain et opérations, garantes du service et du stock", "Supply chain and operations leaders accountable for service and inventory"],
    ["Achats et approvisionnement, exposés au risque fournisseur", "Procurement and sourcing teams exposed to supplier risk"],
    ["Planification (S&OP, S&OE), qui arbitre chaque semaine", "Planning teams (S&OP, S&OE) making trade-offs every week"],
    ["Tous secteurs : industrie, distribution, santé, énergie…", "Every sector: manufacturing, retail, healthcare, energy…"],
  ],
  problem: {
    title: [
      "Vous ne manquez pas de données. Vous manquez de temps entre le signal et la décision.",
      "You are not short of data. You are short of time between the signal and the decision.",
    ],
    lead: [
      "Un délai fournisseur dérive, une couverture de stock fond, un transport glisse. L’information existe quelque part dans vos systèmes, mais elle arrive tard, sans sa cause, et sans personne clairement chargé de trancher.",
      "A supplier lead time drifts, stock cover melts, a shipment slips. The information is somewhere in your systems, but it arrives late, without its cause, and with no one clearly in charge of the call.",
    ],
    pain: [
      ["Trop d’alertes, aucune hiérarchie économique : tout paraît urgent, rien n’est chiffré.", "Too many alerts and no economic ranking: everything looks urgent, nothing is quantified."],
      ["Des données dispersées et contradictoires, réconciliées à la main dans un export Excel.", "Scattered, conflicting data, reconciled by hand in a spreadsheet export."],
      ["Supply, Finance, Commerce et Achats défendent chacun leur lecture ; les options de mitigation s’évaluent à la main.", "Supply, Finance, Sales and Procurement each defend their own reading; mitigation options are assessed by hand."],
      ["Des décisions lentes, peu tracées, rarement réévaluées une fois prises.", "Decisions that are slow, barely documented and rarely revisited once made."],
    ],
    cost: [
      ["Des ruptures et des livraisons en retard qui dégradent l’OTIF et la confiance de vos clients.", "Shortages and late deliveries that erode OTIF and customer trust."],
      ["Du stock de sécurité ajouté « au cas où », qui immobilise votre trésorerie.", "Safety stock added “just in case”, tying up working capital."],
      ["Des transports express et des arbitrages de dernière minute qui entament la marge.", "Expedited freight and last-minute trade-offs that eat into margin."],
    ],
    why: [
      ["Les tours de contrôle affichent des alertes, mais ne disent ni la cause, ni les options, ni qui décide ; et rien ne relie la décision à la transformation du SI.", "Control towers display alerts, but not the cause, the options or who decides; and nothing links the decision to how your systems evolve."],
      ["Leur branchement au SI réel est long et coûteux ; elles risquent de finir en tableau de bord de plus.", "Wiring them into your real systems is slow and costly; they risk becoming one more dashboard."],
      ["Une IA générative seule peut produire un chiffre plausible et faux : inacceptable pour engager un fournisseur.", "Generative AI on its own can produce a plausible but wrong figure: not acceptable when you commit a supplier."],
    ],
    gain: [
      ["Le risque repéré dans vos données réelles, avec sa cause et les références touchées.", "The risk spotted in your real data, with its cause and the items affected."],
      ["Une décision préremplie avec les faits : votre équipe complète les options, choisit et signe.", "A decision pre-filled with the facts: your team completes the options, chooses and signs."],
      ["Une trace complète (règle, données, auteur) pour la revue S&OP comme pour l’audit.", "A complete trail (rule, data, author) for the S&OP review and for audit."],
      ["Une mémoire qui s’enrichit : critères, hypothèses, bascules et résultats réels éclairent la décision suivante.", "A memory that grows: criteria, assumptions, tipping points and actual outcomes inform the next decision."],
    ],
  },
  features: [
    {
      id: "connect",
      kicker: ["Studio", "Studio"],
      title: ["Vos systèmes, tels qu’ils sont", "Your systems, as they are"],
      summary: [
        "Pas de nouvel entrepôt de données à construire : Aura lit ERP, WMS, TMS, fichiers et flux d’événements là où ils se trouvent.",
        "No new data warehouse to build: Aura reads your ERP, WMS, TMS, files and event streams where they already live.",
      ],
      body: [
        [
          "Le Studio déclare chaque source comme un connecteur : protocole, authentification, fréquence d’interrogation et périmètre. Aura interroge vos systèmes à la fréquence utile au lieu de copier toute votre donnée dans un nouvel entrepôt.",
          "The Studio declares each source as a connector: protocol, authentication, polling frequency and scope. Aura queries your systems at the useful frequency instead of copying all your data into yet another warehouse.",
        ],
        [
          "Les connexions sont progressives : deux ou trois sources suffisent pour produire une première alerte utile. D’autres s’ajoutent ensuite sans refaire le modèle.",
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
      title: ["Ce qu’Aura lit, vous le voyez", "You see what Aura reads"],
      summary: [
        "Structure, échantillons et qualité de chaque source, visibles par vos équipes avant toute mise en production.",
        "Structure, samples and quality of every source, visible to your teams before anything goes live.",
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
        ["Qualité : valeurs manquantes, doublons", "Quality: missing values, duplicates"],
      ],
    },
    {
      id: "indicators",
      kicker: ["Studio", "Studio"],
      title: ["Un seul chiffre pour tout le monde", "One number everyone agrees on"],
      summary: [
        "Couverture de stock, OTIF, délais fournisseurs : définis une fois, avec leurs seuils, pour ne plus débattre du chiffre en réunion.",
        "Stock cover, OTIF, supplier lead times: defined once, with their thresholds, so meetings stop arguing about the number.",
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
        "Couverture de stock = stock disponible ÷ consommation moyenne journalière ; orange sous 10 jours, rouge sous 5.",
        "Stock cover = available stock ÷ average daily consumption; amber below 10 days, red below 5.",
      ],
    },
    {
      id: "mapping",
      kicker: ["Studio", "Studio"],
      title: ["Vos données comprises, validées par vos équipes", "Your data understood, validated by your people"],
      summary: [
        "Un modèle Supply Chain prêt à l’emploi ; Aura propose la correspondance de vos champs, un responsable valide chaque proposition.",
        "A ready-to-use supply chain model; Aura proposes how your fields map to it, and an owner validates every proposal.",
      ],
      body: [
        [
          "Fournisseur, article, site, commande, expédition : Aura raisonne sur des objets métier, pas sur des noms de colonnes. Le LLM suggère le mapping à partir des métadonnées et des échantillons ; chaque suggestion reste en attente tant qu’un responsable ne l’a pas acceptée ou corrigée.",
          "Supplier, item, site, order, shipment: Aura reasons about business objects, not column names. The LLM suggests the mapping from metadata and samples; each suggestion stays pending until an owner accepts or corrects it.",
        ],
        [
          "Le mapping validé est tracé : qui a validé quoi, quand, et sur quel échantillon.",
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
        "Le champ « LIFNR » de l’ERP est proposé comme identifiant Fournisseur ; l’acheteur confirme et la jointure avec les commandes devient disponible.",
        "The ERP field “LIFNR” is proposed as the Supplier identifier; the buyer confirms and the join with orders becomes available.",
      ],
    },
    {
      id: "rules",
      kicker: ["Studio", "Studio"],
      title: ["La cause, pas seulement le symptôme", "The cause, not just the symptom"],
      summary: [
        "Des règles causales lisibles qui relient un événement à ses effets sur le service, le stock, le coût et la marge.",
        "Readable causal rules linking an event to its effects on service, inventory, cost and margin.",
      ],
      body: [
        [
          "Une règle causale décrit un mécanisme : « si le délai d’un fournisseur critique dépasse X alors que la couverture de ses composants est inférieure à Y, le service client du site Z est menacé ». Les règles sont éditables, versionnées et testables sur l’historique.",
          "A causal rule describes a mechanism: “if a critical supplier’s lead time exceeds X while cover for its components is below Y, customer service at site Z is at risk”. Rules are editable, versioned and testable on history.",
        ],
        [
          "C’est le cœur de la promesse : une alerte n’est jamais une corrélation opaque, c’est une règle explicite évaluée sur des données réelles.",
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
      title: ["L’effet domino, vu avant qu’il ne tombe", "The domino effect, seen before it falls"],
      summary: [
        "Une ontologie vivante relie fournisseurs, composants, sites et clients : un retard devient une liste précise de commandes menacées.",
        "A living ontology links suppliers, components, sites and customers: one delay becomes a precise list of orders at risk.",
      ],
      body: [
        [
          "L’ontologie relie fournisseurs, composants, sites, clients et flux. Elle permet de propager un signal : un retard fournisseur devient un composant exposé, puis un produit, puis une commande client.",
          "The ontology links suppliers, components, sites, customers and flows. It lets a signal propagate: a supplier delay becomes an exposed component, then a product, then a customer order.",
        ],
        [
          "Elle est « vivante » : un nouveau site, un nouveau fournisseur ou une nouvelle source enrichit le modèle sans le reconstruire.",
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
      title: ["L’essentiel en un regard", "What matters, at a glance"],
      summary: [
        "Quatre repères (critique, à surveiller, décisions en cours, fraîcheur des données) et des alertes condensées, prêtes à décider.",
        "Four markers (critical, to watch, decisions in progress, data freshness) and condensed alerts, ready for a decision.",
      ],
      body: [
        [
          "Chaque alerte tient en une carte : la valeur observée, l’enregistrement concerné, le nombre d’objets touchés et un bouton Décider. Le détail technique — règle, version, données justificatives — s’ouvre dans une vue agrandie.",
          "Each alert fits on one card: the observed value, the record concerned, the number of objects affected and a Decide button. The technical detail — rule, version, justifying data — opens in an expanded view.",
        ],
        [
          "Aucune alerte n’est générée par le LLM : s’il n’y a pas de règle et de donnée, il n’y a pas d’alerte.",
          "No alert is generated by the LLM: without a rule and data, there is no alert.",
        ],
      ],
      points: [
        ["Valeur, enregistrement, nombre concerné", "Value, record, count concerned"],
        ["Bouton Décider sur chaque alerte", "A Decide button on every alert"],
        ["Vue agrandie : règle, version, données", "Expanded view: rule, version, data"],
      ],
    },
    {
      id: "copilot",
      kicker: ["Cockpit", "Cockpit"],
      title: ["Des réponses sourcées, jamais inventées", "Sourced answers, never made up"],
      summary: [
        "Posez votre question en langage courant : le copilote répond graphique à l’appui, en citant la règle et la donnée. S’il ne sait pas, il le dit.",
        "Ask in plain language: the copilot answers with a chart, citing the rule and the data. If it does not know, it says so.",
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
        "« Pourquoi le site de Lyon passe-t-il en orange ? » → graphique de couverture sur 8 semaines, règle concernée, fournisseur en cause.",
        "“Why is the Lyon site turning amber?” → 8-week cover chart, the rule involved, the supplier at the root.",
      ],
    },
    {
      id: "decision",
      kicker: ["Décision", "Decision"],
      title: ["De l’alerte à la décision signée", "From alert to signed decision"],
      summary: [
        "Un clic sur Décider ouvre une fiche déjà remplie avec les faits : valeur, seuil, objets concernés, source et date. Vous complétez, choisissez et signez.",
        "One click on Decide opens a form already filled with the facts: value, threshold, objects concerned, source and date. You complete, choose and sign.",
      ],
      body: [
        [
          "La fiche reprend le contexte de l’alerte et les chiffres qui la justifient. L’utilisateur complète les options (réallocation, expédition express, second fournisseur…), choisit, justifie et signe.",
          "The form carries over the alert’s context and the figures that justify it. The user completes the options (reallocation, express shipment, second source…), chooses, justifies and signs.",
        ],
        [
          "La décision est enregistrée avec son contexte : on peut la relire, la rejouer et apprendre des suivantes.",
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
    title: ["De vos sources à une première alerte utile, en cinq phases.", "From your sources to a first useful alert, in five phases."],
    lead: [
      "Chaque phase du Studio a son voyant : vous savez à tout moment ce qui est prêt, ce qui attend une validation et ce qui bloque. Pas d’effet tunnel.",
      "Each Studio phase has its own status light: you always know what is ready, what is awaiting validation and what is blocked. No black box.",
    ],
    steps: [
      {
        id: "j-connect",
        kicker: ["Phase 1", "Phase 1"],
        title: ["Connecter", "Connect"],
        summary: ["Déclarer les sources, lire métadonnées et échantillons.", "Declare sources, read metadata and samples."],
        body: [
          [
            "REST, OAuth2, SOAP, GraphQL, événements Kafka, fichier, batch ou MCP. On commence par les deux ou trois sources qui portent le risque prioritaire.",
            "REST, OAuth2, SOAP, GraphQL, Kafka events, file, batch or MCP. Start with the two or three sources that carry the priority risk.",
          ],
        ],
      },
      {
        id: "j-model",
        kicker: ["Phase 2", "Phase 2"],
        title: ["Modéliser", "Model"],
        summary: ["Partir du modèle objet Supply Chain.", "Start from the Supply Chain object model."],
        body: [
          [
            "Fournisseurs, articles, sites, commandes, expéditions : le modèle objet est fourni, vous l’ajustez à votre réseau.",
            "Suppliers, items, sites, orders, shipments: the object model is provided, you adjust it to your network.",
          ],
        ],
      },
      {
        id: "j-map",
        kicker: ["Phase 3", "Phase 3"],
        title: ["Mapper", "Map"],
        summary: ["Aura propose, un humain valide.", "Aura proposes, a human validates."],
        body: [
          [
            "Chaque proposition de mapping reste en attente tant qu’un responsable ne l’a pas acceptée ou corrigée. Les validations sont tracées.",
            "Each mapping proposal stays pending until an owner accepts or corrects it. Validations are traced.",
          ],
        ],
      },
      {
        id: "j-reason",
        kicker: ["Phase 4", "Phase 4"],
        title: ["Raisonner", "Reason"],
        summary: ["L’ontologie vivante évalue les règles sur vos valeurs.", "The living ontology evaluates rules over your values."],
        body: [
          [
            "Les règles causales sont évaluées sur les valeurs réelles mappées. Pas de règle et de donnée, pas d’alerte.",
            "Causal rules are evaluated over real mapped values. No rule and no data, no alert.",
          ],
        ],
      },
      {
        id: "j-publish",
        kicker: ["Phase 5", "Phase 5"],
        title: ["Publier", "Publish"],
        summary: ["Les faits arrivent au cockpit, prêts à décider.", "Facts reach the cockpit, ready to decide."],
        body: [
          [
            "Le cockpit exécutif affiche les alertes publiées ; chacune ouvre une décision préremplie avec les faits observés.",
            "The executive cockpit shows the published alerts; each opens a decision pre-filled with the observed facts.",
          ],
        ],
      },
    ],
  },
  architecture: {
    title: ["Au-dessus de vos systèmes, pas à leur place", "On top of your systems, not instead of them"],
    lead: [
      "Vous gardez votre ERP, votre WMS et votre BI. Aura lit ce qui est utile, à la fréquence utile, et raisonne sur un modèle explicite de votre réseau.",
      "You keep your ERP, WMS and BI. Aura reads what is useful, as often as useful, and reasons over an explicit model of your network.",
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
      "Tous les modes d’accès courants d’un SI d’entreprise, sans vous imposer de nouvelle plateforme de données.",
      "Every common enterprise access pattern, without forcing a new data platform on you.",
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
          "Version de la règle, données au moment de l’évaluation, auteur du mapping, auteur de la décision : tout est historisé.",
          "Rule version, data at evaluation time, mapping author, decision author: everything is versioned.",
        ],
      ],
    },
    {
      id: "g-demo",
      title: ["Démo sur SI synthétique", "Demo on a synthetic system"],
      summary: ["« Maison Lucie » : un SI fictif, jamais les données d’un client.", "“Maison Lucie”: a fictional system, never a client’s data."],
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
      title: ["Vous devez trancher une question stratégique ?", "Facing a strategic call?"],
      text: [
        "Investir, réorganiser, relocaliser, sans données connectées : c’est le rôle d’Aura Décider.",
        "Invest, reorganise, relocate, with no connected data: that is what Aura Decide is for.",
      ],
      product: "decide",
    },
    {
      title: ["Vous transformez votre SI ?", "Transforming your IT landscape?"],
      text: [
        "Cartographier l’existant, concevoir la cible et la trajectoire : c’est le rôle d’Aura Architect.",
        "Mapping the current state, designing the target and the roadmap: that is what Aura Architect is for.",
      ],
      product: "architect",
    },
    {
      title: ["Pas un entrepôt de données de plus", "Not one more data warehouse"],
      text: [
        "Aura lit vos sources à la fréquence utile ; il ne remplace ni votre ERP ni votre BI, et n’en impose pas de nouvelle.",
        "Aura reads your sources as often as needed; it replaces neither your ERP nor your BI, and does not impose a new one.",
      ],
    },
  ],
  faq: [
    {
      q: ["Faut-il connecter tout notre SI pour commencer ?", "Do we need to connect our whole landscape before we start?"],
      a: [
        "Non. Deux ou trois sources qui portent votre risque prioritaire suffisent pour une première alerte utile. C’est précisément l’objet du Sprint Résilience.",
        "No. Two or three sources that carry your priority risk are enough for a first useful alert. That is exactly what the Resilience Sprint is for.",
      ],
    },
    {
      q: ["L’IA peut-elle déclencher une alerte à tort ?", "Can the AI raise a false alert on its own?"],
      a: [
        "Non. Les alertes viennent exclusivement de règles causales évaluées sur vos données réelles. Le modèle de langage aide à relier vos champs au modèle (sous validation humaine) et à expliquer ; il ne crée ni alerte ni chiffre.",
        "No. Alerts come exclusively from causal rules evaluated on your real data. The language model helps map your fields (under human validation) and explain; it creates neither alerts nor figures.",
      ],
    },
    {
      q: ["Est-ce spécifique à un secteur ?", "Is it specific to one sector?"],
      a: [
        "Non. L’ontologie et les règles se paramètrent pour toute chaîne d’approvisionnement : industrie, distribution, santé, énergie, agroalimentaire.",
        "No. The ontology and rules are configured for any supply chain: manufacturing, retail, healthcare, energy, food.",
      ],
    },
    {
      q: ["Que montre la démo publique ?", "What does the public demo show?"],
      a: [
        "Le SI synthétique « Maison Lucie ». Toutes les données y sont fictives et servent à illustrer le parcours Studio → Cockpit → Décision.",
        "The synthetic “Maison Lucie” system. All its data is fictional and illustrates the Studio → Cockpit → Decision journey.",
      ],
    },
    {
      q: ["Où sont hébergées nos données ?", "Where is our data hosted?"],
      a: [
        "Aura lit les sources plutôt que de tout copier. L’hébergement et le choix du modèle de langage sont cadrés avec vous, y compris des options souveraines.",
        "Aura reads sources rather than copying everything. Hosting and the choice of language model are agreed with you, including sovereign options.",
      ],
    },
  ],
  sprint: "resilience",
  diAnchor: [
    "Gartner prévoit que des agents d’IA exécuteront de plus en plus de décisions supply chain. Avant de leur en confier, Aura Supply Chain pose des règles causales explicites et une validation humaine tracée.",
    "Gartner expects AI agents to execute more and more supply chain decisions. Before you hand any over, Aura Supply Chain puts explicit causal rules and traced human validation in place.",
  ],
};

/* -------------------------------------------------------------------------- */
/*                                  Aura Décider                               */
/* -------------------------------------------------------------------------- */

const decide: Product = {
  key: "decide",
  name: ["Aura Décider", "Aura Decide"],
  short: ["Décider", "Decide"],
  tagline: [
    "Tranchez vos décisions à fort enjeu, et gardez la preuve de pourquoi.",
    "Make your high-stakes calls, and keep the proof of why.",
  ],
  trigger: ["Une décision stratégique à trancher", "A strategic call to make"],
  question: [
    "« Faut-il investir, réorganiser, lancer, relocaliser ? Et à quelles conditions ? »",
    "“Should we invest, reorganise, launch, relocate? And under what conditions?”",
  ],
  headline: [
    "Votre comité débat, reporte, puis rouvre le dossier. Aura Décider transforme une question ouverte en décision argumentée, signée et révisable.",
    "Your committee debates, postpones, then reopens the file. Aura Decide turns an open question into a reasoned, signed decision you can revisit.",
  ],
  lead: [
    "Sans donnée préalable ni connexion au SI, Aura Décider conduit votre comité de la question initiale à une décision enregistrée, en cinq étapes : Comprendre, Impacter, Composer, Arbitrer, Suivre. L’IA prépare ; vos décideurs valident chaque étape et signent le verdict.",
    "With no prior data and no system connection, Aura Decide takes your committee from the initial question to a recorded decision in five steps: Understand, Impact, Compose, Arbitrate, Track. AI prepares; your decision-makers validate each step and sign the verdict.",
  ],
  image: {
    src: "/images/aura/exec-meeting.webp",
    alt: [
      "Une dirigeante présente des options chiffrées à un comité réuni autour d’une table",
      "An executive presents quantified options to a committee gathered around a table",
    ],
  },
  screensTitle: ["Partez de votre question, Aura guide la suite.", "Start from your question, Aura guides the rest."],
  screens: [
    {
      src: "/images/product/decide-home.webp",
      width: 1440,
      height: 900,
      alt: [
        "Accueil d’Aura Décider : « Une intention. Un chemin clair jusqu’à l’action. », quatre points d’entrée (produit, offre, stratégie, autre enjeu) avec un bouton Décider, et les travaux récents.",
        "Aura Decide home: “One intention. A clear path to action.”, four entry points (product, offer, strategy, other challenge) each with a Decide button, and recent work.",
      ],
      caption: ["Accueil : choisir un enjeu, Aura guide la suite.", "Home: pick a challenge, Aura guides the rest."],
    },
  ],
  audience: [
    ["Comités de direction qui doivent engager l’entreprise", "Executive committees that must commit the company"],
    ["Stratégie, finance, RH, produit, industrie", "Strategy, finance, HR, product, operations"],
    ["Fonds et conseils d’administration qui demandent des comptes", "Funds and boards that hold management to account"],
    ["Toute équipe face à un choix difficile à défaire", "Any team facing a choice that is hard to undo"],
  ],
  problem: {
    title: [
      "Une décision stratégique échoue rarement faute d’intelligence. Elle échoue faute de cadre.",
      "Strategic decisions rarely fail for lack of intelligence. They fail for lack of structure.",
    ],
    lead: [
      "Chacun arrive avec ses chiffres et ses convictions. Le comité débat de la réponse avant de s’accorder sur la question, et six mois plus tard, plus personne ne sait exactement pourquoi il a tranché ainsi.",
      "Everyone brings their own numbers and convictions. The committee argues about the answer before agreeing on the question, and six months later nobody quite remembers why it decided the way it did.",
    ],
    pain: [
      ["Des réunions qui tournent en rond, parce que la question, le périmètre et le décideur ne sont écrits nulle part.", "Meetings that go round in circles, because the question, the scope and the decision-maker are written down nowhere."],
      ["Des options présentées pour convaincre, pas pour être comparées ; les options écartées disparaissent.", "Options presented to persuade, not to be compared; the rejected ones simply vanish."],
      ["Des hypothèses implicites que personne n’ose contester en séance.", "Unstated assumptions that nobody dares to challenge in the room."],
    ],
    cost: [
      ["Des mois entre la première discussion et l’engagement, pendant que la fenêtre d’opportunité se referme.", "Months between the first discussion and the commitment, while the window of opportunity closes."],
      ["Des décisions rouvertes à chaque changement d’interlocuteur, faute de trace des raisons.", "Decisions reopened whenever someone new joins, because the reasons were never recorded."],
      ["Un risque de gouvernance : impossible de montrer au conseil ou à l’auditeur sur quoi reposait le choix.", "A governance risk: no way to show the board or the auditor what the choice was based on."],
    ],
    why: [
      ["Une grille de scoring pondérée affiche un chiffre précis sur des pondérations discutables, et une bonne moyenne peut masquer un point bloquant.", "A weighted scoring grid shows a precise number built on debatable weights, and a good average can hide a deal-breaker."],
      ["Un LLM rédige une recommandation convaincante, mais n’arbitre pas des objectifs qui ne se compensent pas.", "An LLM writes a convincing recommendation, but cannot arbitrate between objectives that do not offset each other."],
      ["Une étude de conseil éclaire le sujet, mais la trace de la décision finit dans une présentation.", "A consulting study sheds light on the topic, but the record of the decision ends up in a slide deck."],
    ],
    gain: [
      ["Une question écrite, un périmètre et un décideur identifiés dès le premier jour.", "A written question, a clear scope and a named decision-maker from day one."],
      ["Des options comparées de façon robuste à l’incertitude, contraintes non négociables comprises.", "Options compared in a way that holds up under uncertainty, non-negotiable constraints included."],
      ["Une note de décision signée, avec ses conditions et ses déclencheurs de révision.", "A signed decision note, with its conditions and its review triggers."],
    ],
  },
  features: [
    {
      id: "understand",
      kicker: ["Étape 1", "Step 1"],
      title: ["Comprendre", "Understand"],
      summary: ["Répondre à la bonne question : périmètre, horizon et décideurs écrits noir sur blanc.", "Answer the right question: scope, horizon and decision-makers in black and white."],
      body: [
        [
          "Beaucoup de mauvaises décisions répondent à la mauvaise question. L’atelier force à écrire la décision, ce qui est hors périmètre, qui décide, qui est consulté et pour quand.",
          "Many bad decisions answer the wrong question. The workspace forces you to write down the decision, what is out of scope, who decides, who is consulted and by when.",
        ],
        [
          "L’IA aide à reformuler et à repérer les angles morts ; elle ne tranche pas.",
          "AI helps reframe and spot blind spots; it does not decide.",
        ],
      ],
      example: [
        "« Faut-il ouvrir un deuxième site ? » devient « Quelle capacité supplémentaire, où et quand, pour servir la demande 2028 sans dégrader la marge ? »",
        "“Should we open a second site?” becomes “What additional capacity, where and when, to serve 2028 demand without eroding margin?”",
      ],
    },
    {
      id: "impact",
      kicker: ["Étape 2", "Step 2"],
      title: ["Impacter", "Impact"],
      summary: ["Voir tout ce que la décision engage : objectifs, critères, contraintes non négociables, parties prenantes.", "See everything the decision affects: objectives, criteria, non-negotiable constraints, stakeholders."],
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
      summary: ["Sortir du « oui ou non » : des options réellement différentes, confrontées à des futurs contrastés.", "Move beyond “yes or no”: genuinely different options, tested against contrasting futures."],
      body: [
        [
          "Les options sont composées à partir de leviers ; les scénarios décrivent des futurs plausibles. Chaque hypothèse est déclarée, sourcée ou marquée comme estimation.",
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
      summary: ["Savoir quelle option tient dans la plupart des futurs, et à quelles conditions dire oui.", "Know which option holds up in most futures, and on what conditions to say yes."],
      body: [
        [
          "L’arbitrage est explicite : quelles options respectent les contraintes, lesquelles tiennent dans la plupart des scénarios, et quels changements minimaux rendraient une option bloquée acceptable.",
          "Arbitration is explicit: which options meet the constraints, which hold across most scenarios, and which minimal changes would make a blocked option acceptable.",
        ],
        [
          "Le verdict — Go, Go sous conditions, No-Go — est proposé ; il est pris par les décideurs.",
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
      summary: ["Ne plus rouvrir le dossier par défaut : la décision est consignée avec ses déclencheurs de révision.", "Stop reopening the file by default: the decision is recorded with its review triggers."],
      body: [
        [
          "La décision est consignée avec ses hypothèses, ses conditions et des déclencheurs de révision : « si le prix de l’énergie dépasse X, on réexamine ». On sait quand et pourquoi revenir dessus.",
          "The decision is recorded with its assumptions, conditions and review triggers: “if energy prices exceed X, we revisit”. You know when and why to come back to it.",
        ],
      ],
    },
    {
      id: "record",
      kicker: ["Registre", "Record"],
      title: ["Une décision que vous pouvez défendre", "A decision you can defend"],
      summary: ["Une note de décision opposable : qui, quoi, pourquoi, sur quelles hypothèses. Relisible dans six mois.", "A defensible decision note: who, what, why, on which assumptions. Still readable six months later."],
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
    title: ["Cinq étapes pour passer du débat à l’engagement.", "Five steps from debate to commitment."],
    lead: [
      "Investissement, organisation, produit ou implantation : le parcours est le même, quelle que soit la fonction. Votre comité sait toujours où il en est et ce qu’il reste à trancher.",
      "Investment, organisation, product or location: the journey is the same whatever the function. Your committee always knows where it stands and what is left to settle.",
    ],
    steps: [],
  },
  architecture: {
    title: ["Partir de ce que vous savez déjà", "Start from what you already know"],
    lead: [
      "Aucune donnée préalable n’est nécessaire. Aura Décider structure ce que votre comité sait déjà, rend visible ce qu’il ignore, et conserve la trace.",
      "No prior data is required. Aura Decide structures what your committee already knows, exposes what it does not, and keeps the record.",
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
      "Volontairement légères : aucun projet informatique n’est nécessaire pour commencer.",
      "Deliberately light: no IT project is needed to get started.",
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
      summary: ["L’IA prépare ; les décideurs tranchent et signent.", "AI prepares; decision-makers decide and sign."],
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
          "Sans données préalables, la rigueur vient de la déclaration explicite : ce qu’on sait, ce qu’on suppose, ce qu’on ignore.",
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
      title: ["Vous voulez détecter les risques en continu ?", "Need to detect risks continuously?"],
      text: [
        "Aura Décider ne se connecte pas à vos données et n’émet pas d’alertes. Pour surveiller votre réseau, c’est Aura Supply Chain.",
        "Aura Decide does not connect to your data and issues no alerts. To monitor your network, use Aura Supply Chain.",
      ],
      product: "supply",
    },
    {
      title: ["Pas réservé à la Supply Chain", "Not limited to supply chain"],
      text: [
        "Investissement, organisation, produit, fusion-acquisition, énergie : la méthode vaut pour toute décision à fort enjeu.",
        "Investment, organisation, product, M&A, energy: the method works for any high-stakes decision.",
      ],
    },
    {
      title: ["La décision est prise, reste à la traduire dans le SI ?", "Decision made, now it must land in IT?"],
      text: [
        "Concevoir la cible et la trajectoire du système d’information, c’est le rôle d’Aura Architect.",
        "Designing the target and roadmap of your IT landscape is what Aura Architect is for.",
      ],
      product: "architect",
    },
  ],
  faq: [
    {
      q: ["Faut-il des données pour commencer ?", "Do we need data to start?"],
      a: [
        "Non. Aura Décider structure ce que votre comité sait déjà : documents, entretiens, estimations. Ce qui est supposé est déclaré comme tel, ce qui est inconnu reste visible.",
        "No. Aura Decide structures what your committee already knows: documents, interviews, estimates. Assumptions are declared as such, and unknowns stay visible.",
      ],
    },
    {
      q: ["Quelle différence avec la décision d’Aura Supply Chain ?", "How does it differ from the decision in Aura Supply Chain?"],
      a: [
        "Aura Supply Chain traite des décisions opérationnelles et tactiques déclenchées par une alerte sur vos données. Aura Décider traite une question stratégique ponctuelle, sans données connectées, dans n’importe quelle fonction. Les deux applications sont indépendantes.",
        "Aura Supply Chain handles operational and tactical decisions triggered by an alert on your data. Aura Decide handles a one-off strategic question, without connected data, in any function. The two applications are independent.",
      ],
    },
    {
      q: ["Quel rôle joue l’IA ?", "What role does AI play?"],
      a: [
        "Elle prépare : reformulation, extraction de faits, repérage des manques. L’arbitrage est explicite et la décision est prise par des personnes.",
        "It prepares: reframing, fact extraction, gap spotting. Arbitration is explicit and the decision is made by people.",
      ],
    },
    {
      q: ["Que garde-t-on à la fin ?", "What do we keep at the end?"],
      a: [
        "Une note de décision opposable, avec les options écartées, les hypothèses et les déclencheurs de révision, consultable dans l’application. De quoi répondre au conseil, à l’auditeur ou à votre successeur.",
        "A defensible decision note, with rejected options, assumptions and review triggers, available in the application. Enough to answer the board, the auditor or your successor.",
      ],
    },
  ],
  sprint: "decision",
  diAnchor: [
    "Pour Gartner, les décisions stratégiques restent affaire de jugement humain. Aura Décider ne le remplace pas : il le structure, avec une évaluation robuste à l’incertitude.",
    "Gartner sees strategic decisions as a matter of human judgement. Aura Decide does not replace that judgement: it structures it, with evaluation that holds up under uncertainty.",
  ],
};
decide.journey.steps = decide.features.slice(0, 5);

/* -------------------------------------------------------------------------- */
/*                                 Aura Architect                              */
/* -------------------------------------------------------------------------- */

const architect: Product = {
  key: "architect",
  name: ["Aura Architect", "Aura Architect"],
  short: ["Architect", "Architect"],
  tagline: [
    "Cadrez votre transformation SI avant qu’elle ne dérive.",
    "Frame your IT transformation before it drifts.",
  ],
  trigger: ["Un programme de transformation à cadrer", "A transformation programme to frame"],
  question: [
    "« Quelle cible, quelle trajectoire, dans quel ordre, et pourquoi ? »",
    "“Which target, which roadmap, in what order, and why?”",
  ],
  headline: [
    "Refonte ERP, fusion de SI, modernisation : chaque exigence reliée à la cible, à la trajectoire et aux dossiers que vos équipes peuvent exécuter.",
    "ERP overhaul, IT merger, modernisation: every requirement linked to the target, the roadmap and the files your teams can deliver from.",
  ],
  lead: [
    "Aura Architect réunit exigences, capacités métier, applications, données et flux dans un modèle unique. Vous en tirez une cible, une trajectoire par paliers, des dossiers d’architecture à jour et des notes de décision qui gardent le pourquoi de chaque choix.",
    "Aura Architect brings requirements, business capabilities, applications, data and flows into a single model. From it you get a target, a staged roadmap, up-to-date architecture files and decision notes that keep the why behind every choice.",
  ],
  image: {
    src: "/images/aura/architecture-workshop.webp",
    alt: [
      "Atelier d’architecture : quatre personnes annotent un schéma de système au tableau blanc",
      "Architecture workshop: four people annotate a system diagram on a whiteboard",
    ],
  },
  screensTitle: ["Cadrer le problème avant de dessiner la solution.", "Frame the problem before you draw the solution."],
  screens: [
    {
      src: "/images/product/architect-frame.webp",
      width: 1440,
      height: 900,
      alt: [
        "Aura Architect, étape Cadrer la transformation : parcours en six étapes, question « Quel problème voulez-vous traiter, et quel résultat en attendez-vous ? », champs intention et périmètre, et panneau « Ce qu’Aura comprend » (intention, périmètre, enjeux, parties prenantes, applications, données).",
        "Aura Architect, Frame the transformation step: six-step journey, question “What problem do you want to address, and what outcome do you expect?”, intention and scope fields, and the “What Aura understands” panel (intention, scope, stakes, stakeholders, applications, data).",
      ],
      caption: ["Cadrage : l’intention et le périmètre, confirmés élément par élément.", "Framing: intention and scope, confirmed item by item."],
    },
  ],
  audience: [
    ["DSI et architectes d’entreprise qui portent la cible", "CIOs and enterprise architects who own the target"],
    ["Directions de programme tenues par un budget et un calendrier", "Programme directors held to a budget and a schedule"],
    ["Métiers porteurs d’une transformation", "Business owners of a transformation"],
    ["Intégrateurs et PMO qui doivent exécuter", "Integrators and PMOs who have to deliver"],
  ],
  problem: {
    title: [
      "Un programme de transformation dérape rarement d’un coup. Il dérive, exigence après exigence.",
      "Transformation programmes rarely derail overnight. They drift, one requirement at a time.",
    ],
    lead: [
      "Les besoins arrivent de partout, l’existant est mal connu, les schémas vivent dans des présentations différentes. Chaque arbitrage d’architecture se prend en réunion, puis s’oublie.",
      "Requirements come from everywhere, the current state is poorly known, diagrams live in different slide decks. Every architecture trade-off is made in a meeting, then forgotten.",
    ],
    pain: [
      ["Une cartographie applicative incomplète ou périmée au moment de lancer le programme.", "An application map that is incomplete or out of date just as the programme starts."],
      ["Des exigences métier qu’on ne sait plus relier aux applications, aux données et aux flux qu’elles touchent.", "Business requirements that can no longer be traced to the applications, data and flows they affect."],
      ["Des dossiers d’architecture réécrits à la main, qui divergent des schémas en quelques semaines.", "Architecture files rewritten by hand, drifting away from the diagrams within weeks."],
    ],
    cost: [
      ["Des dépendances découvertes en cours de réalisation, qui se transforment en retards et en surcoûts.", "Dependencies discovered mid-delivery, turning into delays and cost overruns."],
      ["De la dette SI en plus : doublons applicatifs, interfaces ad hoc, référentiels concurrents.", "More IT debt: duplicate applications, ad hoc interfaces, competing master data."],
      ["Des choix structurants rediscutés à chaque arrivée d’un intégrateur ou d’un nouvel architecte.", "Structural choices reopened every time an integrator or a new architect comes on board."],
    ],
    why: [
      ["Les référentiels d’architecture sont riches mais lourds à tenir : rarement à jour au moment où il faut décider.", "Enterprise architecture repositories are rich but heavy to maintain: rarely current when a decision is due."],
      ["Les études de cadrage longues livrent une cible figée, déjà dépassée au premier palier.", "Long scoping studies deliver a frozen target that is outdated by the first stage."],
      ["Les décisions d’architecture restent dans des e-mails et des comptes rendus, sans lien avec le modèle.", "Architecture decisions stay buried in emails and minutes, disconnected from the model."],
    ],
    gain: [
      ["Un modèle unique où exigences, capacités, applications, données et flux sont reliés.", "One model where requirements, capabilities, applications, data and flows are linked."],
      ["Une cible et une trajectoire par paliers, chaque palier étant un état cohérent du SI.", "A target and a staged roadmap, each stage a coherent state of your landscape."],
      ["Des dossiers générés depuis le modèle et des notes de décision datées et argumentées.", "Files generated from the model, and dated, reasoned decision notes."],
    ],
  },
  features: [
    {
      id: "requirements",
      kicker: ["Cadrage", "Framing"],
      title: ["Chaque exigence a une raison d’être", "Every requirement has a reason to exist"],
      summary: ["Besoins, exigences et contraintes qualifiés et rattachés à un objectif métier : fini les exigences orphelines.", "Needs, requirements and constraints qualified and tied to a business objective: no more orphan requirements."],
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
      title: ["Un langage commun métier et SI", "One language for business and IT"],
      summary: ["La carte des capacités métier : ce que l’entreprise doit savoir faire, indépendamment des outils.", "The business capability map: what the company must be able to do, independent of tools."],
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
      title: ["Doublons et trous, enfin visibles", "Overlaps and gaps in plain sight"],
      summary: ["Votre portefeuille applicatif et son devenir : garder, faire évoluer, remplacer, construire.", "Your application portfolio and its future: keep, evolve, replace, build."],
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
      title: ["Un propriétaire pour chaque donnée", "An owner for every data object"],
      summary: ["Objets de données, référentiels et responsabilités explicites, pour ne plus avoir trois vérités du client.", "Data objects, master data and explicit ownership, so you stop having three versions of the customer."],
      body: [
        [
          "Qui est maître de la donnée client, article, fournisseur ? Aura Architect le rend explicite et le relie aux flux.",
          "Who masters customer, item and supplier data? Aura Architect makes it explicit and links it to flows.",
        ],
      ],
    },
    {
      id: "flows",
      kicker: ["Modèle", "Model"],
      title: ["Les dépendances avant les retards", "Dependencies before delays"],
      summary: ["Le catalogue des échanges entre systèmes, pour voir les dépendances avant qu’elles ne bloquent la réalisation.", "The catalogue of exchanges between systems, so dependencies show up before they block delivery."],
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
      title: ["Une trajectoire par paliers réalistes", "A roadmap in realistic stages"],
      summary: ["De l’existant à la cible, des paliers séquencés selon la valeur, le risque et les dépendances.", "From current state to target, stages sequenced by value, risk and dependencies."],
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
      title: ["Des dossiers toujours à jour", "Architecture files that stay current"],
      summary: ["Générés depuis le modèle, ils ne divergent plus des schémas.", "Generated from the model, they no longer drift from the diagrams."],
      body: [
        [
          "Vue fonctionnelle, applicative, données, intégration : les dossiers sont produits depuis le modèle et non réécrits à la main.",
          "Functional, application, data and integration views: files are produced from the model, not rewritten by hand.",
        ],
      ],
    },
    {
      id: "adr",
      kicker: ["Livrables", "Deliverables"],
      title: ["Le pourquoi de chaque choix, conservé", "The why behind every choice, kept"],
      summary: ["Des notes de décision d’architecture argumentées et datées, pour ne pas rouvrir les débats tranchés.", "Reasoned, dated architecture decision notes, so settled debates stay settled."],
      body: [
        [
          "Une note d’architecture consigne un choix de conception (par exemple : bus d’événements ou API synchrones) dans le périmètre du programme. Ce ne sont pas des arbitrages stratégiques — ceux-là relèvent d’Aura Décider.",
          "An architecture note records a design choice (for example: event bus or synchronous APIs) within the programme’s scope. These are not strategic arbitrations — those belong to Aura Decide.",
        ],
      ],
    },
  ],
  journey: {
    title: ["Du besoin au dossier que vos équipes peuvent exécuter.", "From the need to a file your teams can deliver from."],
    lead: [
      "Chaque étape enrichit le même modèle : rien n’est ressaisi entre la cartographie et les livrables, et rien ne se perd entre deux ateliers.",
      "Each step enriches the same model: nothing is re-entered between mapping and deliverables, and nothing gets lost between workshops.",
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
    title: ["Un modèle, plusieurs vues", "One model, many views"],
    lead: [
      "Vos livrables sont des projections du modèle, pas des documents indépendants : quand le modèle change, ils suivent.",
      "Your deliverables are projections of the model, not standalone documents: when the model changes, they follow.",
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
      "Aura Architect part de ce que vous avez déjà : inventaires, cartographies, exports. Pas de page blanche.",
      "Aura Architect starts from what you already have: inventories, maps, exports. No blank page.",
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
      title: ["Faut-il lancer le programme ?", "Should the programme go ahead?"],
      text: [
        "Cette question se tranche avec Aura Décider. Aura Architect intervient ensuite, pour dire comment le réaliser.",
        "That call belongs to Aura Decide. Aura Architect comes next, to work out how to deliver it.",
      ],
      product: "decide",
    },
    {
      title: ["Vous voulez surveiller vos flux physiques ?", "Need to monitor physical flows?"],
      text: [
        "La détection des risques opérationnels sur vos données, c’est le rôle d’Aura Supply Chain.",
        "Detecting operational risks in your data is what Aura Supply Chain is for.",
      ],
      product: "supply",
    },
    {
      title: ["Pas un outil de gestion de projet de plus", "Not one more project management tool"],
      text: [
        "La trajectoire alimente votre outil de pilotage ; elle ne le remplace pas.",
        "The roadmap feeds your delivery tooling; it does not replace it.",
      ],
    },
  ],
  faq: [
    {
      q: ["Faut-il une cartographie existante ?", "Do we need an existing map?"],
      a: [
        "Non, mais elle fait gagner du temps. Un inventaire applicatif, même partiel, suffit pour démarrer le Design Sprint Architecture.",
        "No, but it saves time. An application inventory, even a partial one, is enough to start the Architecture Design Sprint.",
      ],
    },
    {
      q: ["Aura Architect remplace-t-il nos architectes ?", "Does Aura Architect replace our architects?"],
      a: [
        "Non. Il leur donne un modèle partagé et des livrables générés : moins de temps sur la mise en forme, plus de temps sur les choix qui comptent.",
        "No. It gives them a shared model and generated deliverables: less time on formatting, more time on the choices that matter.",
      ],
    },
    {
      q: ["Les notes de décision font-elles doublon avec Aura Décider ?", "Do the decision notes overlap with Aura Decide?"],
      a: [
        "Non. Les notes d’Aura Architect consignent des choix de conception dans un programme déjà décidé. Aura Décider sert à décider s’il faut engager ce programme.",
        "No. Aura Architect’s notes record design choices within a programme already decided. Aura Decide is for deciding whether to commit to the programme.",
      ],
    },
  ],
  sprint: "architecture",
  diAnchor: [
    "Gartner décrit la Decision Intelligence comme la modélisation explicite des décisions. Pour qu’elle fonctionne dans votre SI, il faut d’abord l’architecture et l’ontologie qu’Aura Architect vous aide à poser.",
    "Gartner describes Decision Intelligence as explicitly modelling decisions. For it to work in your IT landscape, you first need the architecture and ontology Aura Architect helps you lay down.",
  ],
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
    "En quelques semaines, votre risque prioritaire est surveillé sur vos propres données, et la première alerte réelle devient une décision signée.",
    "Within weeks, your priority risk is monitored on your own data, and the first real alert becomes a signed decision.",
  ],
  trigger: [
    "Un risque récurrent que vous découvrez trop tard : ruptures, retards fournisseurs, couverture de stock qui fond.",
    "A recurring risk you discover too late: stock-outs, supplier delays, stock cover running down.",
  ],
  forWhom: [
    ["Direction Supply Chain ou opérations qui porte le risque", "Supply chain or operations leadership that owns the risk"],
    ["Un référent SI capable d’ouvrir 2 ou 3 accès", "An IT contact able to open 2 or 3 accesses"],
    ["Experts métier pour écrire les règles", "Domain experts to write the rules"],
  ],
  steps: [
    {
      id: "r-w1",
      kicker: ["Semaine 1", "Week 1"],
      title: ["Brancher", "Plug in"],
      summary: ["Choisir le risque qui vous coûte le plus, connecter 2 ou 3 sources, vérifier la qualité des données.", "Pick the risk that costs you most, connect 2 or 3 sources, check data quality."],
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
      summary: ["Relier vos données aux objets métier et construire l’ontologie du périmètre, validée par vos référents.", "Link your data to business objects and build the scope’s ontology, validated by your owners."],
      body: [
        [
          "Le LLM propose le mapping ; vos référents valident. L’ontologie relie fournisseurs, articles, sites et clients du périmètre.",
          "The LLM proposes the mapping; your owners validate. The ontology links the scope’s suppliers, items, sites and customers.",
        ],
      ],
    },
    {
      id: "r-w3",
      kicker: ["Semaine 3", "Week 3"],
      title: ["Calibrer", "Calibrate"],
      summary: ["Indicateurs, seuils et règles causales rejoués sur votre historique pour limiter les fausses alertes.", "Indicators, thresholds and causal rules replayed on your history to keep false alerts down."],
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
      summary: ["Première alerte réelle, décision préremplie, signée par votre équipe ; plan d’extension.", "First real alert, pre-filled decision signed by your team; extension plan."],
      body: [
        [
          "Le cockpit tourne sur vos données. La première alerte réelle ouvre une décision préremplie que votre équipe complète. Revue de fin de sprint et plan d’extension.",
          "The cockpit runs on your data. The first real alert opens a pre-filled decision your team completes. End-of-sprint review and extension plan.",
        ],
      ],
    },
  ],
  inputs: [
    ["Accès en lecture à 2 ou 3 sources", "Read access to 2 or 3 sources"],
    ["Un référent SI et un référent métier", "An IT owner and a business owner"],
    ["L’historique disponible du périmètre", "Available history for the scope"],
    ["Deux ateliers d’experts pour les règles", "Two expert workshops for the rules"],
  ],
  deliverables: [
    {
      id: "rd-cockpit",
      title: ["Cockpit vivant sur votre SI", "Live cockpit on your systems"],
      summary: ["Connecteurs, ontologie et règles en production sur le périmètre.", "Connectors, ontology and rules in production on the scope."],
      body: [["Ce n’est pas une maquette : il lit vos sources et évalue vos règles.", "It is not a mock-up: it reads your sources and evaluates your rules."]],
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
      summary: ["Une alerte réelle transformée en décision signée par votre équipe.", "A real alert turned into a decision signed by your team."],
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
    ["Pas un atelier de stratégie : on traite un risque opérationnel précis.", "Not a strategy workshop: we tackle one specific operational risk."],
    ["Pas un projet d’intégration de tout le SI : 2 ou 3 sources, un risque.", "Not a full-landscape integration project: 2 or 3 sources, one risk."],
    ["Pas une démo sur données fictives : le livrable tourne sur vos données.", "Not a demo on fictional data: the deliverable runs on your data."],
  ],
  after: [
    "Abonnement Aura Supply Chain : vous étendez à d’autres risques, sources et sites, et le cockpit entre dans le quotidien des équipes.",
    "Aura Supply Chain subscription: you extend to more risks, sources and sites, and the cockpit becomes part of your teams’ daily routine.",
  ],
  outcome: ["Cockpit vivant sur votre SI", "Live cockpit on your systems"],
};

const decision: Sprint = {
  key: "decision",
  product: "decide",
  name: ["Decision Sprint", "Decision Sprint"],
  duration: ["5 jours à 2 semaines", "5 days to 2 weeks"],
  promise: [
    "Votre décision à fort enjeu tranchée en quelques jours, et consignée dans une note que vous pouvez défendre.",
    "Your high-stakes decision settled in days, and recorded in a note you can defend.",
  ],
  trigger: [
    "Une question stratégique qui traîne ou divise : investir, réorganiser, lancer, céder, relocaliser.",
    "A strategic question that drags on or divides: invest, reorganise, launch, divest, relocate.",
  ],
  forWhom: [
    ["Un décideur responsable et son comité", "An accountable decision-maker and their committee"],
    ["Toute fonction : stratégie, finance, RH, produit, industrie", "Any function: strategy, finance, HR, product, operations"],
    ["Aucune donnée ni connexion SI requise", "No data or system connection required"],
  ],
  steps: [
    {
      id: "d-d1",
      kicker: ["Jour 1", "Day 1"],
      title: ["Comprendre", "Understand"],
      summary: ["S’accorder sur la question : périmètre, horizon, décideurs.", "Agree on the question: scope, horizon, decision-makers."],
      body: [["Entretiens courts et atelier de cadrage. La question est reformulée jusqu’à faire consensus.", "Short interviews and a framing workshop. The question is reframed until it is agreed."]],
    },
    {
      id: "d-d2",
      kicker: ["Jour 2", "Day 2"],
      title: ["Impacter", "Impact"],
      summary: ["Objectifs, critères et contraintes non négociables posés.", "Objectives, criteria and non-negotiable constraints set out."],
      body: [["Chaque critère reçoit un propriétaire et une méthode d’évaluation.", "Each criterion gets an owner and an assessment method."]],
    },
    {
      id: "d-d3",
      kicker: ["Jour 3", "Day 3"],
      title: ["Composer", "Compose"],
      summary: ["Des options réellement différentes, des hypothèses déclarées.", "Genuinely different options, declared assumptions."],
      body: [["Trois à cinq options réellement différentes, confrontées à des futurs contrastés.", "Three to five genuinely different options, tested against contrasting futures."]],
    },
    {
      id: "d-d4",
      kicker: ["Jour 4", "Day 4"],
      title: ["Arbitrer", "Arbitrate"],
      summary: ["L’option qui tient, ses conditions, le verdict proposé.", "The option that holds, its conditions, the proposed verdict."],
      body: [["Séance d’arbitrage avec les décideurs. Les conditions d’un Go sont explicitées.", "Arbitration session with decision-makers. The conditions for a Go are made explicit."]],
    },
    {
      id: "d-d5",
      kicker: ["Jour 5", "Day 5"],
      title: ["Suivre", "Track"],
      summary: ["Note de décision signée et déclencheurs de révision.", "Signed decision note and review triggers."],
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
    ["Pas une connexion à vos données : aucune intégration SI.", "Not a connection to your data: no system integration."],
    ["Pas une surveillance continue : une question, un verdict.", "Not continuous monitoring: one question, one verdict."],
    ["Pas un conseil qui décide à votre place : ce sont vos décideurs qui signent.", "Not advice that decides for you: your decision-makers are the ones who sign."],
  ],
  after: [
    "Accès à Aura Décider pour suivre la décision et ses déclencheurs, puis instruire vos décisions suivantes en autonomie.",
    "Access to Aura Decide to track the decision and its triggers, then run your next decisions on your own.",
  ],
  outcome: ["Note de décision opposable", "Defensible decision note"],
};

const architecture: Sprint = {
  key: "architecture",
  product: "architect",
  name: ["Design Sprint Architecture", "Architecture Design Sprint"],
  duration: ["2 à 3 semaines", "2 to 3 weeks"],
  promise: [
    "Votre programme cadré avant d’engager le budget : une cible, une trajectoire et un dossier d’architecture dont vos équipes et vos intégrateurs peuvent partir.",
    "Your programme framed before the budget is committed: a target, a roadmap and an architecture file your teams and integrators can work from.",
  ],
  trigger: [
    "Un programme de transformation à lancer ou à reprendre en main : refonte ERP, nouveau canal, fusion de SI, modernisation.",
    "A transformation programme to launch or bring back on track: ERP overhaul, new channel, IT merger, modernisation.",
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
      body: [["Deux ou trois cibles confrontées aux exigences ; notes de décision d’architecture.", "Two or three targets tested against requirements; architecture decision notes."]],
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
    ["Pas la décision de lancer le programme : elle relève d’un Decision Sprint.", "Not the decision to launch the programme: that is a Decision Sprint."],
    ["Pas une surveillance opérationnelle : aucune alerte Supply.", "Not operational monitoring: no Supply alerts."],
    ["Pas une étude de plusieurs mois : juste assez de modèle pour décider et lancer.", "Not a months-long study: just enough model to decide and get going."],
  ],
  after: [
    "Accès à Aura Architect pour tenir le modèle, les dossiers et la trajectoire à jour pendant tout le programme.",
    "Access to Aura Architect to keep the model, files and roadmap current throughout the programme.",
  ],
  outcome: ["Dossier d’architecture et feuille de route", "Architecture file and roadmap"],
};

export const sprints: Record<SprintKey, Sprint> = { resilience, decision, architecture };

/** Rows of the “Which entry point?” comparison. */
export const comparisonRows: { label: T; values: Record<ProductKey, T> }[] = [
  {
    label: ["Votre situation", "Your situation"],
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
      supply: ["Oui : SI connecté (2 ou 3 sources pour démarrer)", "Yes: connected systems (2 or 3 sources to start)"],
      decide: ["Aucune : documents et hypothèses déclarées", "None: documents and declared assumptions"],
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
    label: ["Ce que vous obtenez", "What you get"],
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
