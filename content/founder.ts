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
    title: ["Vous attendez des données parfaites qui n’arriveront pas", "You wait for perfect data that will never come"],
    short: [
      "Pendant ce temps, la décision glisse. Aura compare vos options avec ce que vous savez déjà, sans pondérations inventées.",
      "Meanwhile, the decision slips. Aura compares your options with what you already know, without made-up weights.",
    ],
    long: [
      "Les données complètes n’arrivent jamais au moment où il faut décider. Aura est né d’une conviction : dans l’incertitude, il faut des méthodes d’évaluation simples, lisibles et robustes. Plutôt qu’un score unique aux pondérations discutables, Aura qualifie chaque option par son potentiel d’amélioration et son risque de dégradation. La méthode s’appuie sur des travaux de thèse consacrés à l’évaluation d’architectures et à l’aide au choix de conception.",
      "Complete data never arrives when the decision is due. Aura was born from a conviction: under uncertainty, you need evaluation methods that are simple, readable and robust. Rather than a single score built on debatable weights, Aura qualifies each option by its improvement potential and its degradation risk. The method builds on doctoral research into architecture evaluation and design-choice support.",
    ],
  },
  {
    id: "why-towers",
    title: ["Votre tour de contrôle affiche des alertes, pas des décisions", "Your control tower shows alerts, not decisions"],
    short: [
      "Aura n’en ajoute pas une de plus : c’est la couche qui transforme une alerte venue de SAP, Kinaxis, o9 ou de votre SI industriel en décision explicable, validée, exécutable et mémorisée, sans remplacer ces outils.",
      "Aura does not add yet another one: it is the layer that turns an alert from SAP, Kinaxis, o9 or your industrial systems into a decision that is explainable, validated, actionable and remembered, without replacing those tools.",
    ],
    long: [
      "Nous avons vu des control towers onéreuses peiner à se connecter aux systèmes d’information des entreprises, puis produire des alertes que personne ne sait qualifier. Le problème n’est pas l’écran : c’est l’absence d’un modèle commun qui dise ce que signifie chaque donnée, d’où elle vient, ce qu’elle cause, et qui doit décider.",
      "We have seen expensive control towers struggle to connect to companies’ information systems, then produce alerts nobody knows how to qualify. The problem is not the dashboard: it is the lack of a shared model saying what each piece of data means, where it comes from, what it causes and who should decide.",
    ],
  },
  {
    id: "why-ontology",
    title: ["Vos agents d’IA décideraient sans cadre ni garde-fou", "Your AI agents would decide without a frame or guardrails"],
    short: [
      "Aura pose d’abord un modèle explicite de votre SI et des règles causales : l’IA agit dans un cadre sûr, sous validation humaine.",
      "Aura first lays down an explicit model of your systems and causal rules: AI acts within a safe frame, under human validation.",
    ],
    long: [
      "Brancher des agents d’IA sur un SI que personne ne sait décrire, c’est automatiser l’opacité. Chez Aura, le travail d’architecture précède l’outil. Une ontologie décrit les objets de l’entreprise et leurs relations ; elle simplifie nettement la connexion aux sources existantes. Associée à des règles causales explicites (tel événement, dans tel contexte, produit tel effet), elle donne aux agents d’IA un cadre sûr : l’entreprise peut confier davantage à l’IA sans perdre la maîtrise de ses décisions.",
      "Plugging AI agents into systems nobody can describe simply automates opacity. At Aura, architecture work comes before the tool. An ontology describes the company’s objects and their relationships; it makes connecting to existing sources far simpler. Combined with explicit causal rules (this event, in this context, produces this effect), it gives AI agents a safe frame: the company can hand more to AI without losing control of its decisions.",
    ],
  },
  {
    id: "why-supply",
    title: ["Dans votre supply chain, l’incertitude est quotidienne", "In your supply chain, uncertainty is a daily fact"],
    short: [
      "Délais qui dérivent, demande qui change, fournisseurs fragiles : c’est là qu’un temps d’avance se paie le plus.",
      "Drifting lead times, shifting demand, fragile suppliers: this is where being a step ahead pays off most.",
    ],
    long: [
      "La Supply Chain est confrontée en permanence à un monde incertain : délais fournisseurs qui dérivent, demande qui change, aléas logistiques. C’est précisément le terrain où une évaluation robuste, un modèle du SI explicite et des règles causales apportent le plus : voir plus tôt, comparer les options honnêtement, décider en gardant la trace.",
      "Supply chains constantly face an uncertain world: drifting supplier lead times, shifting demand, logistics disruptions. This is precisely where robust evaluation, an explicit model of the IT system and causal rules help most: seeing earlier, comparing options honestly, deciding while keeping the trace.",
    ],
  },
];
