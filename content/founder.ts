import type { T } from "./products";

export const founderLinks = {
  thesis: "https://theses.hal.science/tel-00918890",
  article: "https://hal.science/hal-00840436v1",
  linkedin: "https://fr.linkedin.com/in/mambaye-lo",
};

/** Publications (vérifiées) — premier auteur signalé. */
export const publications: { title: string; kind: T; authors: string; href: string; link: T }[] = [
  {
    title: "Evaluating Alternatives for Designing Mechatronic Systems in a Systems Engineering Context",
    kind: ["Article · INCOSE INSIGHT · 2013 · premier auteur", "Article · INCOSE INSIGHT · 2013 · first author"],
    authors: "M. Lo, P. Couturier, V. Chapurlat",
    href: "https://incose.onlinelibrary.wiley.com/doi/abs/10.1002/inst.201316416",
    link: ["Voir sur Wiley", "View on Wiley"],
  },
  {
    title: "Needs for Tracing the Consequences of Decisions in Mechatronics Design",
    kind: ["Communication · 2012 · premier auteur", "Conference paper · 2012 · first author"],
    authors: "M. Lo, P. Couturier",
    href: "https://scholar.google.com/scholar?q=%22Needs+for+Tracing+the+Consequences+of+Decisions+in+Mechatronics+Design%22",
    link: ["Rechercher la publication", "Find the paper"],
  },
  {
    title: "Tracking the consequences of design decisions in mechatronic systems engineering",
    kind: ["Article · revue Mechatronics · 2014", "Article · Mechatronics journal · 2014"],
    authors: "P. Couturier, M. Lo, A. Imoussaten, V. Chapurlat, J. Montmain",
    href: "https://hal.science/hal-00840436v1",
    link: ["Lire sur HAL", "Read on HAL"],
  },
];

/** “Why Aura”: four short reasons, reused on the home page (short) and the founder page (developed). */
export const whyAura: { id: string; title: T; short: T; long: T }[] = [
  {
    id: "why-simple",
    title: ["Des méthodes simples, faites pour l’incertitude", "Simple methods, built for uncertainty"],
    short: [
      "Évaluer des options sans attendre des données parfaites ni inventer des pondérations.",
      "Evaluate options without waiting for perfect data or inventing weights.",
    ],
    long: [
      "Aura est né d’une conviction : pour décider dans un contexte incertain, il faut des méthodes d’évaluation simples, lisibles et robustes. Plutôt qu’un score unique aux pondérations discutables, Aura qualifie chaque option par son potentiel d’amélioration et son risque de dégradation. La méthode s’appuie sur des travaux de thèse consacrés à l’évaluation d’architectures et à l’aide au choix de conception.",
      "Aura was born from a conviction: deciding under uncertainty calls for simple, readable and robust evaluation methods. Rather than a single score with debatable weights, Aura qualifies each option by its improvement potential and its degradation risk. The method builds on doctoral research on architecture evaluation and design-choice support.",
    ],
  },
  {
    id: "why-towers",
    title: ["Le constat : des control towers qui se connectent mal", "The observation: control towers that struggle to connect"],
    short: [
      "Des outils coûteux, qui peinent à se brancher sur le SI réel des entreprises.",
      "Costly tools that struggle to plug into companies’ real IT systems.",
    ],
    long: [
      "Nous avons vu des control towers onéreuses peiner à se connecter aux systèmes d’information des entreprises. Le problème n’est pas l’écran : c’est l’absence d’un modèle commun qui dise ce que signifie chaque donnée, d’où elle vient et à quoi elle sert.",
      "We have seen expensive control towers struggle to connect to companies’ information systems. The problem is not the dashboard: it is the lack of a shared model saying what each piece of data means, where it comes from and what it is used for.",
    ],
  },
  {
    id: "why-ontology",
    title: ["L’architecture et l’ontologie d’abord", "Architecture and ontology first"],
    short: [
      "Un modèle explicite du SI et des règles causales : la connexion devient simple, l’entreprise devient agentique.",
      "An explicit model of the IT system and causal rules: connecting becomes simple, the company becomes agent-ready.",
    ],
    long: [
      "Chez Aura, le travail d’architecture précède l’outil. Une ontologie décrit les objets de l’entreprise et leurs relations ; elle simplifie drastiquement la connexion aux sources existantes. Associée à des règles causales explicites (tel événement, dans tel contexte, produit tel effet), elle donne aux agents d’IA un cadre sûr : l’entreprise devient plus facilement agentique, sans perdre la maîtrise de ses décisions.",
      "At Aura, architecture work comes before the tool. An ontology describes the company’s objects and their relationships; it drastically simplifies connecting to existing sources. Combined with explicit causal rules (this event, in this context, produces this effect), it gives AI agents a safe frame: the company becomes agent-ready more easily, without losing control of its decisions.",
    ],
  },
  {
    id: "why-supply",
    title: ["La Supply Chain, terrain de l’incertitude", "Supply chain, the ground of uncertainty"],
    short: [
      "Délais, demande, fournisseurs : c’est là que ces approches font la différence.",
      "Lead times, demand, suppliers: this is where these approaches make the difference.",
    ],
    long: [
      "La Supply Chain est confrontée en permanence à un monde incertain : délais fournisseurs qui dérivent, demande qui change, aléas logistiques. C’est précisément le terrain où une évaluation robuste, un modèle du SI explicite et des règles causales apportent le plus : voir plus tôt, comparer les options honnêtement, décider en gardant la trace.",
      "Supply chains constantly face an uncertain world: drifting supplier lead times, shifting demand, logistics disruptions. This is precisely where robust evaluation, an explicit model of the IT system and causal rules help most: seeing earlier, comparing options honestly, deciding while keeping the trace.",
    ],
  },
];
