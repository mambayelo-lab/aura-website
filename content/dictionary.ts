import type { Locale } from "@/lib/i18n";

type Item = { title: string; text: string };
type Question = { q: string; a: string };

export type Offer = {
  name: string;
  sprint: string;
  headline: string;
  summary: string;
  price: string;
  duration: string;
  imageAlt: string;
  highlights: string[];
  deliverables: Item[];
  process: { eyebrow: string; title: string; lead: string; steps: Item[] };
  faq: Question[];
};

export type Industry = {
  kicker: string;
  name: string;
  headline: string;
  lead: string;
  imageAlt: string;
  audienceTitle: string;
  audience: string[];
  decisionsTitle: string;
  decisions: Item[];
};

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    offers: string;
    industries: string;
    insights: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    skip: string;
    main: string;
  };
  common: {
    startingFrom: string;
    learnMore: string;
    readArticle: string;
    allInsights: string;
    backToInsights: string;
    keyTakeaways: string;
    related: string;
    previous: string;
    next: string;
    illustrative: string;
    minRead: string;
    discoverOffer: string;
    otherOffer: string;
  };
  home: {
    badge: string;
    titleStart: string;
    titleEmphasis: string;
    titleEnd: string;
    lead: string;
    primary: string;
    secondary: string;
    facts: { value: string; label: string }[];
    offers: { eyebrow: string; title: string; lead: string };
    method: {
      eyebrow: string;
      title: string;
      lead: string;
      steps: Item[];
      forward: Item & { chain: string[] };
      backward: Item & { chain: string[] };
    };
    industries: { eyebrow: string; title: string; lead: string };
    cases: { eyebrow: string; title: string; lead: string; items: (Item & { tag: string })[] };
    insights: { eyebrow: string; title: string; lead: string };
  };
  mockup: {
    title: string;
    subtitle: string;
    columns: string[];
    options: { name: string; detail: string; scores: number[]; verdict: string; tone: "good" | "warn" | "bad" }[];
    recommendation: string;
    recommended: string;
    robustness: string;
    backwardTitle: string;
    backwardItems: string[];
    evidence: { value: string; label: string }[];
    replayable: string;
    constraintsTitle: string;
    constraints: { label: string; kind: string; hard: boolean }[];
  };
  offers: { decide: Offer; architect: Offer };
  offerPage: {
    deliverablesEyebrow: string;
    deliverablesTitle: string;
    faqEyebrow: string;
    faqTitle: string;
    investment: string;
  };
  industries: { energy: Industry; supplyChain: Industry };
  industryPage: { casesTitle: string; insightsTitle: string };
  insightsPage: { eyebrow: string; title: string; lead: string; featured: string };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    includeTitle: string;
    include: string[];
    emailTitle: string;
    form: {
      name: string;
      email: string;
      company: string;
      interest: string;
      interests: string[];
      message: string;
      placeholder: string;
      submit: string;
      sending: string;
      successTitle: string;
      successText: string;
      error: string;
      fallback: string;
      privacy: string;
      required: string;
    };
  };
  cta: { eyebrow: string; title: string; button: string; secondary: string };
  footer: { tagline: string; location: string; rights: string; resources: string };
  notFound: { title: string; text: string; home: string };
};

const en: Dictionary = {
  meta: {
    title: "AURA — Decision Intelligence & Transformation Architecture",
    description:
      "AURA secures complex investment, transformation and architecture decisions when data is incomplete, objectives conflict and industrial consequences are significant.",
  },
  nav: {
    home: "AURA home",
    offers: "Offers",
    industries: "Industries",
    insights: "Insights",
    contact: "Contact",
    cta: "Discuss a decision",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    skip: "Skip to content",
    main: "Main navigation",
  },
  common: {
    startingFrom: "Starting from",
    learnMore: "Learn more",
    readArticle: "Read the article",
    allInsights: "All insights",
    backToInsights: "All insights",
    keyTakeaways: "Key takeaways",
    related: "Related insights",
    previous: "Previous",
    next: "Next",
    illustrative: "Illustrative example",
    minRead: "read",
    discoverOffer: "Discover the offer",
    otherOffer: "The other sprint",
  },
  home: {
    badge: "Decision Sprint — an explainable decision in 20 days max.",
    titleStart: "Decide what must change.",
    titleEmphasis: "Architect",
    titleEnd: "what comes next.",
    lead: "AURA secures complex investment, transformation and architecture decisions — when data is incomplete, objectives conflict and industrial consequences are significant.",
    primary: "Frame a decision",
    secondary: "Explore the offers",
    facts: [
      { value: "20 days", label: "maximum to an explainable decision" },
      { value: "5 steps", label: "from framing to commitment" },
      { value: "2 sprints", label: "decide, then architect" },
      { value: "Zero", label: "heavy integration to get started" },
    ],
    offers: {
      eyebrow: "Two offers. One value chain.",
      title: "From the right decision to an executable transformation.",
      lead: "AURA does not replace domain expertise or accountable leaders. It makes arbitration rigorous, collective and defensible.",
    },
    method: {
      eyebrow: "The AURA method",
      title: "Speed comes from structure.",
      lead: "No heavy integration is needed to begin: documents, interviews and targeted data are enough to build the first robust decision.",
      steps: [
        { title: "Frame", text: "The decision, horizon, decision-makers and value at stake." },
        { title: "Structure", text: "Objectives, constraints, criteria and relevant facts." },
        { title: "Evaluate", text: "Scenarios, uncertainties, risks and trade-offs." },
        { title: "Repair", text: "The minimum changes that make an option acceptable." },
        { title: "Decide", text: "The recommendation, its evidence and execution conditions." },
      ],
      forward: {
        title: "Forward",
        text: "Starts from an option and propagates its effects on indicators, criteria and objectives — across every scenario.",
        chain: ["Option", "Indicators", "Criteria", "Objectives"],
      },
      backward: {
        title: "Backward",
        text: "Starts from the target, finds what blocks it and proposes bounded repairs. Forward replays each one before it is retained.",
        chain: ["Target", "Blockers", "Repairs", "Forward replay"],
      },
    },
    industries: {
      eyebrow: "Priority industries",
      title: "Where decisions commit assets, operations and capital.",
      lead: "One decision core. Two environments where uncertainty, dependencies and value at stake demand a more rigorous approach.",
    },
    cases: {
      eyebrow: "Use cases",
      title: "The decisions we make safer.",
      lead: "Decisions where a wrong call is expensive, slow to reverse and hard to explain afterwards.",
      items: [
        {
          tag: "Energy",
          title: "Battery or microgrid investment",
          text: "Arbitrate returns, grid connection, flexibility, safety and risk — then identify the changes that make the project bankable.",
        },
        {
          tag: "Product",
          title: "New industrial product",
          text: "Test the value proposition, market assumptions, business model and design choices before industrialisation.",
        },
        {
          tag: "Supply chain",
          title: "Supplier and inventory resilience",
          text: "Compare dual sourcing, strategic inventory, redesign or relocation without automatically sacrificing margin and service.",
        },
        {
          tag: "Transformation",
          title: "Complex digital programme",
          text: "Align the business target with functional, application and integration architectures, investment estimates and an executable backlog.",
        },
      ],
    },
    insights: {
      eyebrow: "AURA Perspectives",
      title: "A different way to think about complex decisions.",
      lead: "Insights connecting strategy, architecture, energy, supply chain, finance and artificial intelligence.",
    },
  },
  mockup: {
    title: "Decision Record",
    subtitle: "Battery investment · Industrial site",
    columns: ["Option", "Return", "Grid", "Safety", "Resilience", "Verdict"],
    options: [
      { name: "Option A", detail: "20 MW / 80 MWh", scores: [46, 58, 80, 88], verdict: "Fragile", tone: "warn" },
      {
        name: "Option B",
        detail: "12 MW / 48 MWh",
        scores: [78, 84, 88, 81],
        verdict: "Go · conditions",
        tone: "good",
      },
      { name: "Option C", detail: "No investment", scores: [60, 95, 92, 22], verdict: "No-Go", tone: "bad" },
    ],
    recommendation: "Recommendation",
    recommended: "Option B",
    robustness: "Robust in 4 of 5 scenarios",
    backwardTitle: "Conditions for Go",
    backwardItems: ["Grid-services contract secured", "Grid connection confirmed", "10-year supplier warranty"],
    evidence: [
      { value: "14", label: "sources" },
      { value: "9", label: "assumptions" },
      { value: "3", label: "constraints" },
    ],
    replayable: "Replayable",
    constraintsTitle: "Objectives & constraints",
    constraints: [
      { label: "Site safety standard", kind: "Non-negotiable", hard: true },
      { label: "Grid connection date", kind: "Non-negotiable", hard: true },
      { label: "Return on capital", kind: "Objective", hard: false },
      { label: "Energy resilience", kind: "Objective", hard: false },
    ],
  },
  offers: {
    decide: {
      name: "AURA Decide",
      sprint: "Decision Sprint",
      headline: "De-risk strategies and the preliminary design of new products.",
      summary:
        "In no more than 20 days, move from an ambiguous question to an evidence-based decision tested under uncertainty, with explicit conditions for success.",
      price: "€15,000",
      duration: "20 days max.",
      imageAlt: "AURA-assisted multicriteria decision",
      highlights: [
        "Objectives, criteria and constraints",
        "Scenarios, assumptions and uncertainty",
        "Forward and Backward analysis",
        "Recommendation and Decision Record",
      ],
      deliverables: [
        {
          title: "Objectives, criteria and constraints",
          text: "What matters, what can be traded off and what is non-negotiable — made explicit and shared by the decision-makers.",
        },
        {
          title: "Scenarios, assumptions and uncertainty",
          text: "Each option is replayed across plausible futures, so the recommendation still holds when the assumptions move.",
        },
        {
          title: "Forward and Backward analysis",
          text: "Forward evaluates the consequences of each option. Backward finds the minimum changes that make a blocked option acceptable.",
        },
        {
          title: "Recommendation and Decision Record",
          text: "A Go / Go under conditions / No-Go verdict with its sources, assumptions, applied rules and validity date — replayable and open to challenge.",
        },
      ],
      process: {
        eyebrow: "How the sprint runs",
        title: "Five steps, from an ambiguous question to a committed decision.",
        lead: "Documents, interviews and targeted data are enough to begin. No heavy integration, no months of preparation.",
        steps: [
          { title: "Frame", text: "The decision, horizon, decision-makers and value at stake." },
          { title: "Structure", text: "Objectives, constraints, criteria and relevant facts." },
          { title: "Evaluate", text: "Scenarios, uncertainties, risks and trade-offs." },
          { title: "Repair", text: "The minimum changes that make an option acceptable." },
          { title: "Decide", text: "The recommendation, its evidence and execution conditions." },
        ],
      },
      faq: [
        {
          q: "Do we need to connect our systems first?",
          a: "No. Documents, interviews and targeted data are enough to build the first robust decision. No heavy integration is needed to begin.",
        },
        {
          q: "Does AURA replace our experts or decision-makers?",
          a: "No. AURA does not replace domain expertise or accountable leaders. It makes arbitration rigorous, collective and defensible.",
        },
        {
          q: "What role does AI play?",
          a: "AI prepares the context: extracting facts, clarifying vocabulary, framing options and identifying missing information. The arbitration remains deterministic, experts validate the assumptions and accountable people commit the decision.",
        },
        {
          q: "What do we keep at the end of the sprint?",
          a: "A recommendation and its Decision Record: sources, assumptions, applied rules and validity date. You can replay the analysis, challenge a parameter and understand why another option was not selected.",
        },
      ],
    },
    architect: {
      name: "AURA Architect",
      sprint: "Architecture Sprint",
      headline: "De-risk and accelerate digital transformation programmes.",
      summary:
        "Turn a business ambition into a coherent target vision, estimated investment and an immediately actionable backlog.",
      price: "€35,000",
      duration: "4 to 8 weeks",
      imageAlt: "Team defining a transformation architecture",
      highlights: [
        "Vision and functional architecture",
        "Target application architecture",
        "Integration architecture and flow catalogue",
        "Estimates, roadmap and backlog",
      ],
      deliverables: [
        {
          title: "Vision and functional architecture",
          text: "The business target translated into capabilities, processes and functional building blocks that everyone can read.",
        },
        {
          title: "Target application architecture",
          text: "Which applications to keep, evolve, replace or build — and how they fit together in the target.",
        },
        {
          title: "Integration architecture and flow catalogue",
          text: "Every flow between systems made explicit, so dependencies surface before they turn into delays.",
        },
        {
          title: "Estimates, roadmap and backlog",
          text: "Investment estimates, a sequenced trajectory and a backlog your teams can start on immediately.",
        },
      ],
      process: {
        eyebrow: "How the sprint runs",
        title: "From business ambition to executable backlog.",
        lead: "Each step produces an artefact your teams keep — not a slide deck that ages on a shelf.",
        steps: [
          { title: "Frame the ambition", text: "Business goals, scope, constraints and the decisions already made." },
          { title: "Design the target", text: "Functional and application architecture, options and trade-offs." },
          { title: "Map the flows", text: "Integrations, data exchanges and dependencies between systems." },
          { title: "Estimate and sequence", text: "Investment, trajectory and a prioritised, executable backlog." },
        ],
      },
      faq: [
        {
          q: "How long does an Architecture Sprint take?",
          a: "Four to eight weeks depending on the scope of the programme, starting from €35,000.",
        },
        {
          q: "Can it follow a Decision Sprint?",
          a: "Yes — that is the value chain. AURA Decide secures the right decision; AURA Architect turns it into an executable transformation.",
        },
        {
          q: "What do our teams get at the end?",
          a: "A coherent target vision, an estimate of the investment and a backlog they can act on immediately.",
        },
        {
          q: "Does AURA replace our architects?",
          a: "No. AURA does not replace domain expertise or accountable leaders. It makes the trade-offs explicit, collective and defensible.",
        },
      ],
    },
  },
  offerPage: {
    deliverablesEyebrow: "What you get",
    deliverablesTitle: "Four deliverables. Nothing left implicit.",
    faqEyebrow: "Questions",
    faqTitle: "Frequently asked questions",
    investment: "Investment",
  },
  industries: {
    energy: {
      kicker: "Industry 01",
      name: "AURA Energy",
      headline: "Energy investments that hold up under real-world constraints.",
      lead: "Investment and resilience decisions for utilities, industrial companies, data centres, developers and investors.",
      imageAlt: "Circular energy, renewables and industry",
      audienceTitle: "Who we work with",
      audience: ["Utilities", "Industrial companies", "Data centres", "Developers", "Investors"],
      decisionsTitle: "Decisions we cover",
      decisions: [
        { title: "Batteries", text: "Sizing, business case and safety of storage projects." },
        { title: "PPAs", text: "Power purchase agreements weighed against risk and flexibility." },
        { title: "Grid connection", text: "Timing and capacity constraints that make or break a project." },
        { title: "Microgrids", text: "Local generation, storage and control arbitrated together." },
        { title: "Data centres", text: "Power security and resilience for critical loads." },
        { title: "Factory resilience", text: "Energy continuity for industrial sites under uncertainty." },
      ],
    },
    supplyChain: {
      kicker: "Industry 02",
      name: "AURA Supply Chain",
      headline: "Resilience without automatically sacrificing margin and service.",
      lead: "Resilience and transformation arbitrations for manufacturers, retailers, procurement, operations and post-acquisition funds.",
      imageAlt: "Industrial network and resilient supply chain",
      audienceTitle: "Who we work with",
      audience: ["Manufacturers", "Retailers", "Procurement", "Operations", "Post-acquisition funds"],
      decisionsTitle: "Decisions we cover",
      decisions: [
        { title: "Suppliers", text: "Dual sourcing, supplier capacity and dependency risk." },
        { title: "Inventory", text: "Strategic stock levels that secure service at the right cost." },
        { title: "Margin", text: "Resilience measures weighed against their real margin impact." },
        { title: "Make or buy", text: "Internalise, outsource or redesign — with explicit trade-offs." },
        { title: "Logistics network", text: "Sites, flows and relocation options compared under scenarios." },
        { title: "Control Tower", text: "From monitoring dashboards to a decision operating system." },
      ],
    },
  },
  industryPage: {
    casesTitle: "Typical decision",
    insightsTitle: "Related insights",
  },
  insightsPage: {
    eyebrow: "AURA Perspectives",
    title: "A different way to think about complex decisions.",
    lead: "Insights connecting strategy, architecture, energy, supply chain, finance and artificial intelligence.",
    featured: "Featured",
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us about the decision in front of you.",
    lead: "A few lines of context are enough. We will come back to you to frame the right sprint.",
    includeTitle: "Useful to mention",
    include: [
      "The decision to make and its horizon",
      "Who decides and who is involved",
      "The value at stake",
      "What is already known — and what is not",
    ],
    emailTitle: "Prefer email?",
    form: {
      name: "Full name",
      email: "Work email",
      company: "Company",
      interest: "What are you interested in?",
      interests: ["AURA Decide — Decision Sprint", "AURA Architect — Architecture Sprint", "Not sure yet"],
      message: "Message",
      placeholder: "The decision, its context and its timing…",
      submit: "Send message",
      sending: "Sending…",
      successTitle: "Message sent.",
      successText: "Thank you — we will get back to you shortly.",
      error: "Something went wrong. Please email us directly at",
      fallback: "Your email app has opened with your message ready to send.",
      privacy: "We only use these details to reply to you.",
      required: "Required",
    },
  },
  cta: {
    eyebrow: "Facing an important decision?",
    title: "Make it explicit before it becomes expensive.",
    button: "Frame an AURA Sprint",
    secondary: "Email us",
  },
  footer: {
    tagline: "Decision Intelligence & Transformation Architecture",
    location: "Paris · France",
    rights: "All rights reserved.",
    resources: "Resources",
  },
  notFound: {
    title: "Page not found",
    text: "The page you are looking for does not exist or has moved.",
    home: "Back to home",
  },
};

const fr: Dictionary = {
  meta: {
    title: "AURA — Intelligence décisionnelle & architecture de transformation",
    description:
      "AURA sécurise les décisions complexes d’investissement, de transformation et d’architecture lorsque les données sont incomplètes, les objectifs contradictoires et les conséquences industrielles importantes.",
  },
  nav: {
    home: "Accueil AURA",
    offers: "Offres",
    industries: "Secteurs",
    insights: "Perspectives",
    contact: "Contact",
    cta: "Parler d’une décision",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
    skip: "Aller au contenu",
    main: "Navigation principale",
  },
  common: {
    startingFrom: "À partir de",
    learnMore: "En savoir plus",
    readArticle: "Lire l’article",
    allInsights: "Toutes les perspectives",
    backToInsights: "Toutes les perspectives",
    keyTakeaways: "À retenir",
    related: "À lire aussi",
    previous: "Précédent",
    next: "Suivant",
    illustrative: "Exemple illustratif",
    minRead: "de lecture",
    discoverOffer: "Découvrir l’offre",
    otherOffer: "L’autre sprint",
  },
  home: {
    badge: "Decision Sprint — une décision explicable en 20 jours max.",
    titleStart: "Décidez ce qu’il faut changer.",
    titleEmphasis: "Architecturez",
    titleEnd: "ce qui vient ensuite.",
    lead: "AURA sécurise les décisions complexes d’investissement, de transformation et d’architecture — lorsque les données sont incomplètes, les objectifs contradictoires et les conséquences industrielles importantes.",
    primary: "Cadrer une décision",
    secondary: "Découvrir les offres",
    facts: [
      { value: "20 jours", label: "maximum pour une décision explicable" },
      { value: "5 étapes", label: "du cadrage à l’engagement" },
      { value: "2 sprints", label: "décider, puis architecturer" },
      { value: "Zéro", label: "intégration lourde pour démarrer" },
    ],
    offers: {
      eyebrow: "Deux offres. Une chaîne de valeur.",
      title: "De la bonne décision à une transformation exécutable.",
      lead: "AURA ne remplace ni l’expertise métier ni les décideurs. Elle rend l’arbitrage rigoureux, collectif et défendable.",
    },
    method: {
      eyebrow: "La méthode AURA",
      title: "La vitesse vient de la structure.",
      lead: "Pas d’intégration lourde pour commencer : documents, entretiens et données ciblées suffisent à construire une première décision robuste.",
      steps: [
        { title: "Cadrer", text: "La décision, l’horizon, les décideurs et la valeur en jeu." },
        { title: "Structurer", text: "Les objectifs, contraintes, critères et faits utiles." },
        { title: "Évaluer", text: "Les scénarios, incertitudes, risques et compromis." },
        { title: "Réparer", text: "Les modifications minimales qui rendent une option acceptable." },
        { title: "Décider", text: "La recommandation, ses preuves et ses conditions d’exécution." },
      ],
      forward: {
        title: "Forward",
        text: "Part d’une option et propage ses effets sur les indicateurs, les critères et les objectifs — dans chaque scénario.",
        chain: ["Option", "Indicateurs", "Critères", "Objectifs"],
      },
      backward: {
        title: "Backward",
        text: "Part de la cible, identifie ce qui la bloque et propose des réparations bornées. Le Forward rejoue chacune avant de la retenir.",
        chain: ["Cible", "Blocages", "Réparations", "Rejeu Forward"],
      },
    },
    industries: {
      eyebrow: "Secteurs prioritaires",
      title: "Là où les décisions engagent des actifs, des opérations et du capital.",
      lead: "Un même noyau de décision. Deux terrains où l’incertitude, les dépendances et la valeur en jeu justifient une approche plus rigoureuse.",
    },
    cases: {
      eyebrow: "Cas d’usage",
      title: "Les décisions que nous rendons plus sûres.",
      lead: "Des décisions où une erreur coûte cher, se corrige lentement et s’explique difficilement après coup.",
      items: [
        {
          tag: "Énergie",
          title: "Investissement batterie ou micro-réseau",
          text: "Arbitrer rentabilité, raccordement, flexibilité, sécurité et risques — puis identifier les changements qui rendent le projet finançable.",
        },
        {
          tag: "Produit",
          title: "Nouveau produit industriel",
          text: "Tester la proposition de valeur, les hypothèses de marché, le modèle économique et les choix de conception avant l’industrialisation.",
        },
        {
          tag: "Supply chain",
          title: "Résilience fournisseurs et stocks",
          text: "Comparer double sourcing, stock stratégique, redesign ou relocalisation sans sacrifier mécaniquement la marge et le service.",
        },
        {
          tag: "Transformation",
          title: "Programme digital complexe",
          text: "Aligner la cible métier avec l’architecture fonctionnelle, applicative et d’intégration, les investissements et le backlog exécutable.",
        },
      ],
    },
    insights: {
      eyebrow: "AURA Perspectives",
      title: "Penser les décisions complexes autrement.",
      lead: "Des analyses qui relient stratégie, architecture, énergie, supply chain, finance et intelligence artificielle.",
    },
  },
  mockup: {
    title: "Decision Record",
    subtitle: "Investissement batterie · Site industriel",
    columns: ["Option", "Rentabilité", "Réseau", "Sécurité", "Résilience", "Verdict"],
    options: [
      { name: "Option A", detail: "20 MW / 80 MWh", scores: [46, 58, 80, 88], verdict: "Fragile", tone: "warn" },
      {
        name: "Option B",
        detail: "12 MW / 48 MWh",
        scores: [78, 84, 88, 81],
        verdict: "Go · conditions",
        tone: "good",
      },
      { name: "Option C", detail: "Pas d’investissement", scores: [60, 95, 92, 22], verdict: "No-Go", tone: "bad" },
    ],
    recommendation: "Recommandation",
    recommended: "Option B",
    robustness: "Robuste dans 4 scénarios sur 5",
    backwardTitle: "Conditions du Go",
    backwardItems: ["Contrat de services réseau sécurisé", "Raccordement confirmé", "Garantie fournisseur de dix ans"],
    evidence: [
      { value: "14", label: "sources" },
      { value: "9", label: "hypothèses" },
      { value: "3", label: "contraintes" },
    ],
    replayable: "Rejouable",
    constraintsTitle: "Objectifs & contraintes",
    constraints: [
      { label: "Norme de sécurité du site", kind: "Non négociable", hard: true },
      { label: "Date de raccordement", kind: "Non négociable", hard: true },
      { label: "Rentabilité du capital", kind: "Objectif", hard: false },
      { label: "Résilience énergétique", kind: "Objectif", hard: false },
    ],
  },
  offers: {
    decide: {
      name: "AURA Décider",
      sprint: "Decision Sprint",
      headline: "Dérisquer les stratégies et la conception préliminaire de nouveaux produits.",
      summary:
        "En 20 jours maximum, passer d’une question ambiguë à une décision argumentée, testée sous incertitude et assortie de conditions de succès explicites.",
      price: "15 000 €",
      duration: "20 jours max.",
      imageAlt: "Décision multicritère assistée par AURA",
      highlights: [
        "Objectifs, critères et contraintes",
        "Scénarios, hypothèses et incertitudes",
        "Analyse Forward et Backward",
        "Recommandation et Decision Record",
      ],
      deliverables: [
        {
          title: "Objectifs, critères et contraintes",
          text: "Ce qui compte, ce qui peut se compenser et ce qui n’est pas négociable — rendu explicite et partagé par les décideurs.",
        },
        {
          title: "Scénarios, hypothèses et incertitudes",
          text: "Chaque option est rejouée sur des futurs plausibles : la recommandation tient même quand les hypothèses bougent.",
        },
        {
          title: "Analyse Forward et Backward",
          text: "Le Forward évalue les conséquences de chaque option. Le Backward trouve les changements minimaux qui rendent une option bloquée acceptable.",
        },
        {
          title: "Recommandation et Decision Record",
          text: "Un verdict Go / Go sous conditions / No-Go avec ses sources, hypothèses, règles appliquées et date de validité — rejouable et contestable.",
        },
      ],
      process: {
        eyebrow: "Déroulé du sprint",
        title: "Cinq étapes, d’une question ambiguë à une décision engagée.",
        lead: "Documents, entretiens et données ciblées suffisent pour démarrer. Pas d’intégration lourde, pas de mois de préparation.",
        steps: [
          { title: "Cadrer", text: "La décision, l’horizon, les décideurs et la valeur en jeu." },
          { title: "Structurer", text: "Les objectifs, contraintes, critères et faits utiles." },
          { title: "Évaluer", text: "Les scénarios, incertitudes, risques et compromis." },
          { title: "Réparer", text: "Les modifications minimales qui rendent une option acceptable." },
          { title: "Décider", text: "La recommandation, ses preuves et ses conditions d’exécution." },
        ],
      },
      faq: [
        {
          q: "Faut-il d’abord connecter nos systèmes ?",
          a: "Non. Documents, entretiens et données ciblées suffisent à construire une première décision robuste. Aucune intégration lourde n’est nécessaire pour commencer.",
        },
        {
          q: "AURA remplace-t-elle nos experts ou nos décideurs ?",
          a: "Non. AURA ne remplace ni l’expertise métier ni les décideurs. Elle rend l’arbitrage rigoureux, collectif et défendable.",
        },
        {
          q: "Quel est le rôle de l’IA ?",
          a: "L’IA prépare le contexte : elle extrait les faits, clarifie le vocabulaire, formule les options et signale les informations manquantes. Le calcul reste déterministe, l’expert valide les hypothèses et le responsable humain engage la décision.",
        },
        {
          q: "Que conservons-nous à la fin du sprint ?",
          a: "Une recommandation et son Decision Record : sources, hypothèses, règles appliquées et date de validité. Vous pouvez rejouer l’analyse, contester un paramètre et comprendre pourquoi une autre option n’a pas été retenue.",
        },
      ],
    },
    architect: {
      name: "AURA Architecturer",
      sprint: "Architecture Sprint",
      headline: "Dérisquer et accélérer les programmes de transformation digitale.",
      summary:
        "Transformer une ambition métier en vision cible cohérente, investissements estimés et backlog immédiatement actionnable.",
      price: "35 000 €",
      duration: "4 à 8 semaines",
      imageAlt: "Équipe définissant une architecture de transformation",
      highlights: [
        "Vision et architecture fonctionnelle",
        "Architecture applicative cible",
        "Architecture d’intégration et catalogue des flux",
        "Estimations, trajectoire et backlog",
      ],
      deliverables: [
        {
          title: "Vision et architecture fonctionnelle",
          text: "La cible métier traduite en capacités, processus et blocs fonctionnels lisibles par tous.",
        },
        {
          title: "Architecture applicative cible",
          text: "Quelles applications conserver, faire évoluer, remplacer ou construire — et comment elles s’articulent dans la cible.",
        },
        {
          title: "Architecture d’intégration et catalogue des flux",
          text: "Chaque flux entre systèmes rendu explicite, pour que les dépendances apparaissent avant de devenir des retards.",
        },
        {
          title: "Estimations, trajectoire et backlog",
          text: "Des investissements estimés, une trajectoire séquencée et un backlog sur lequel vos équipes peuvent démarrer immédiatement.",
        },
      ],
      process: {
        eyebrow: "Déroulé du sprint",
        title: "De l’ambition métier au backlog exécutable.",
        lead: "Chaque étape produit un livrable que vos équipes conservent — pas une présentation qui vieillit sur une étagère.",
        steps: [
          { title: "Cadrer l’ambition", text: "Objectifs métier, périmètre, contraintes et décisions déjà prises." },
          { title: "Concevoir la cible", text: "Architecture fonctionnelle et applicative, options et compromis." },
          { title: "Cartographier les flux", text: "Intégrations, échanges de données et dépendances entre systèmes." },
          { title: "Estimer et séquencer", text: "Investissements, trajectoire et backlog priorisé et exécutable." },
        ],
      },
      faq: [
        {
          q: "Combien de temps dure un Architecture Sprint ?",
          a: "Quatre à huit semaines selon le périmètre du programme, à partir de 35 000 €.",
        },
        {
          q: "Peut-il suivre un Decision Sprint ?",
          a: "Oui — c’est la chaîne de valeur. AURA Décider sécurise la bonne décision ; AURA Architecturer la transforme en transformation exécutable.",
        },
        {
          q: "Que récupèrent nos équipes à la fin ?",
          a: "Une vision cible cohérente, une estimation des investissements et un backlog immédiatement actionnable.",
        },
        {
          q: "AURA remplace-t-elle nos architectes ?",
          a: "Non. AURA ne remplace ni l’expertise métier ni les décideurs. Elle rend les compromis explicites, collectifs et défendables.",
        },
      ],
    },
  },
  offerPage: {
    deliverablesEyebrow: "Ce que vous obtenez",
    deliverablesTitle: "Quatre livrables. Rien d’implicite.",
    faqEyebrow: "Questions",
    faqTitle: "Questions fréquentes",
    investment: "Investissement",
  },
  industries: {
    energy: {
      kicker: "Secteur 01",
      name: "AURA Energy",
      headline: "Des investissements énergétiques qui tiennent face aux contraintes réelles.",
      lead: "Décisions d’investissement et de résilience pour les énergéticiens, industriels, data centers, développeurs et investisseurs.",
      imageAlt: "Énergie circulaire, renouvelables et industrie",
      audienceTitle: "Avec qui nous travaillons",
      audience: ["Énergéticiens", "Industriels", "Data centers", "Développeurs", "Investisseurs"],
      decisionsTitle: "Décisions couvertes",
      decisions: [
        { title: "Batteries", text: "Dimensionnement, modèle économique et sécurité des projets de stockage." },
        { title: "PPA", text: "Contrats d’achat d’électricité arbitrés face au risque et à la flexibilité." },
        { title: "Raccordement", text: "Les contraintes de délai et de capacité qui font ou défont un projet." },
        { title: "Micro-réseaux", text: "Production locale, stockage et pilotage arbitrés ensemble." },
        { title: "Data centers", text: "Sécurité d’alimentation et résilience des charges critiques." },
        { title: "Résilience usine", text: "Continuité énergétique des sites industriels sous incertitude." },
      ],
    },
    supplyChain: {
      kicker: "Secteur 02",
      name: "AURA Supply Chain",
      headline: "La résilience sans sacrifier mécaniquement la marge et le service.",
      lead: "Arbitrages de résilience et de transformation pour industriels, distributeurs, achats, opérations et fonds en post-acquisition.",
      imageAlt: "Réseau industriel et supply chain résiliente",
      audienceTitle: "Avec qui nous travaillons",
      audience: ["Industriels", "Distributeurs", "Achats", "Opérations", "Fonds en post-acquisition"],
      decisionsTitle: "Décisions couvertes",
      decisions: [
        { title: "Fournisseurs", text: "Double sourcing, capacité fournisseur et risque de dépendance." },
        { title: "Stocks", text: "Des niveaux de stock stratégique qui sécurisent le service au juste coût." },
        { title: "Marge", text: "Les mesures de résilience confrontées à leur impact réel sur la marge." },
        { title: "Make or buy", text: "Internaliser, externaliser ou reconcevoir — avec des compromis explicites." },
        { title: "Réseau logistique", text: "Sites, flux et options de relocalisation comparés par scénarios." },
        { title: "Control Tower", text: "Du tableau de bord de supervision au système d’exploitation de la décision." },
      ],
    },
  },
  industryPage: {
    casesTitle: "Décision type",
    insightsTitle: "À lire aussi",
  },
  insightsPage: {
    eyebrow: "AURA Perspectives",
    title: "Penser les décisions complexes autrement.",
    lead: "Des analyses qui relient stratégie, architecture, énergie, supply chain, finance et intelligence artificielle.",
    featured: "À la une",
  },
  contact: {
    eyebrow: "Contact",
    title: "Parlez-nous de la décision qui vous attend.",
    lead: "Quelques lignes de contexte suffisent. Nous revenons vers vous pour cadrer le bon sprint.",
    includeTitle: "Utile à préciser",
    include: [
      "La décision à prendre et son horizon",
      "Qui décide et qui est impliqué",
      "La valeur en jeu",
      "Ce qui est déjà connu — et ce qui ne l’est pas",
    ],
    emailTitle: "Vous préférez l’e-mail ?",
    form: {
      name: "Nom complet",
      email: "E-mail professionnel",
      company: "Entreprise",
      interest: "Qu’est-ce qui vous intéresse ?",
      interests: [
        "AURA Décider — Decision Sprint",
        "AURA Architecturer — Architecture Sprint",
        "Je ne sais pas encore",
      ],
      message: "Message",
      placeholder: "La décision, son contexte et son calendrier…",
      submit: "Envoyer",
      sending: "Envoi…",
      successTitle: "Message envoyé.",
      successText: "Merci — nous revenons vers vous rapidement.",
      error: "Une erreur est survenue. Écrivez-nous directement à",
      fallback: "Votre messagerie s’est ouverte avec votre message prêt à envoyer.",
      privacy: "Ces informations servent uniquement à vous répondre.",
      required: "Obligatoire",
    },
  },
  cta: {
    eyebrow: "Une décision importante devant vous ?",
    title: "Rendez-la explicite avant qu’elle ne devienne coûteuse.",
    button: "Cadrer un Sprint AURA",
    secondary: "Nous écrire",
  },
  footer: {
    tagline: "Intelligence décisionnelle & architecture de transformation",
    location: "Paris · France",
    rights: "Tous droits réservés.",
    resources: "Ressources",
  },
  notFound: {
    title: "Page introuvable",
    text: "La page que vous cherchez n’existe pas ou a été déplacée.",
    home: "Retour à l’accueil",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
