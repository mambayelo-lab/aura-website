import type { Detail, SprintKey } from "./products";

export type MethodKey = "systemic" | "evaluation" | "ddd" | "modular" | "togaf" | "cesames" | "bpmn";

/** Methods applied during the sprints. Every sprint opens with a systemic analysis. */
export const methods: Record<MethodKey, Detail> = {
  systemic: {
    id: "method-systemic",
    kicker: ["Toujours en ouverture", "Always first"],
    title: ["Analyse systémique", "Systems analysis"],
    summary: [
      "Acteurs, flux, contraintes et boucles de rétroaction avant toute solution.",
      "Actors, flows, constraints and feedback loops before any solution.",
    ],
    body: [
      [
        "Chaque sprint commence par la même étape : délimiter le système étudié, ses acteurs, ses flux et ses interactions. On évite ainsi d’optimiser une partie au détriment de l’ensemble, et chaque règle, option ou brique d’architecture est rattachée à un élément identifié du système.",
        "Every sprint starts with the same step: bounding the system under study, its actors, flows and interactions. This avoids optimising one part at the expense of the whole, and every rule, option or architecture building block is tied to an identified element of the system.",
      ],
    ],
    flow: [["Périmètre", "Boundary"], ["Acteurs & flux", "Actors & flows"], ["Interactions", "Interactions"], ["Enjeux", "Stakes"]],
  },
  evaluation: {
    id: "method-evaluation",
    kicker: ["Supply Chain · Décider", "Supply Chain · Decide"],
    title: ["Évaluation robuste à l’incertitude", "Uncertainty-robust evaluation"],
    summary: [
      "Une logique ordinale issue de travaux de thèse, sans pondérations arbitraires.",
      "An ordinal logic drawn from doctoral research, with no arbitrary weights.",
    ],
    body: [
      [
        "Chaque option est qualifiée par son potentiel d’amélioration et son risque de dégradation, de façon qualitative. Cette méthode s’appuie sur les travaux de thèse du fondateur consacrés à l’évaluation d’architectures et à l’aide au choix de conception : elle reste lisible quand les données sont incomplètes et n’exige pas de pondérations difficiles à justifier.",
        "Each option is qualified by its improvement potential and its degradation risk, qualitatively. The method builds on the founder’s doctoral research on architecture evaluation and design-choice support: it stays readable when data is incomplete and requires no weights that are hard to justify.",
      ],
    ],
    flow: [["Options", "Options"], ["Potentiel", "Potential"], ["Risque", "Risk"], ["Choix argumenté", "Reasoned choice"]],
  },
  ddd: {
    id: "method-ddd",
    kicker: ["Architect", "Architect"],
    title: ["DDD — Domain-Driven Design", "DDD — Domain-Driven Design"],
    summary: [
      "Découper le SI selon les domaines métier et leur langage commun.",
      "Split the IT system along business domains and their shared language.",
    ],
    body: [
      [
        "Les domaines, sous-domaines et contextes délimités sont identifiés avec les métiers. Chaque contexte a un vocabulaire précis, ce qui rend les frontières entre applications explicites et les intégrations plus simples.",
        "Domains, subdomains and bounded contexts are identified with the business. Each context has a precise vocabulary, which makes boundaries between applications explicit and integrations simpler.",
      ],
    ],
  },
  modular: {
    id: "method-modular",
    kicker: ["Architect", "Architect"],
    title: ["Architecture modulaire", "Modular architecture"],
    summary: [
      "Des modules indépendants, remplaçables, aux contrats d’interface clairs.",
      "Independent, replaceable modules with clear interface contracts.",
    ],
    body: [
      [
        "La cible est découpée en modules à forte cohésion et faible couplage. On peut ainsi livrer, remplacer ou faire évoluer une brique sans reprendre l’ensemble du système.",
        "The target is split into highly cohesive, loosely coupled modules. A building block can then be delivered, replaced or evolved without reworking the whole system.",
      ],
    ],
  },
  togaf: {
    id: "method-togaf",
    kicker: ["Architect", "Architect"],
    title: ["TOGAF", "TOGAF"],
    summary: [
      "Un cadre éprouvé pour relier stratégie, métier, données, applications et technologie.",
      "A proven framework linking strategy, business, data, applications and technology.",
    ],
    body: [
      [
        "Les étapes et livrables du sprint s’alignent sur le cycle de développement d’architecture (ADM) : vision, architectures métier, données, applications et technologie, puis feuille de route de migration.",
        "The sprint’s steps and deliverables align with the Architecture Development Method (ADM): vision, business, data, application and technology architectures, then a migration roadmap.",
      ],
    ],
  },
  cesames: {
    id: "method-cesames",
    kicker: ["Architect", "Architect"],
    title: ["CESAMES", "CESAMES"],
    summary: [
      "L’approche d’architecture de systèmes : besoins, fonctions, constituants.",
      "The systems architecture approach: needs, functions, components.",
    ],
    body: [
      [
        "Issue de l’ingénierie système, la démarche CESAMES distingue la vision opérationnelle (pourquoi), fonctionnelle (quoi) et constructive (comment). Elle garantit la traçabilité entre un besoin et la brique qui y répond.",
        "Rooted in systems engineering, the CESAMES approach separates the operational (why), functional (what) and constructional (how) views. It guarantees traceability between a need and the building block that answers it.",
      ],
    ],
    flow: [["Opérationnel", "Operational"], ["Fonctionnel", "Functional"], ["Constructif", "Constructional"]],
  },
  bpmn: {
    id: "method-bpmn",
    kicker: ["Architect", "Architect"],
    title: ["BPMN", "BPMN"],
    summary: [
      "Des processus modélisés dans une notation standard, lisible par tous.",
      "Processes modelled in a standard notation everyone can read.",
    ],
    body: [
      [
        "Les processus actuels et cibles sont décrits en BPMN : acteurs, activités, événements et échanges. Les écarts entre l’existant et la cible deviennent visibles et vérifiables.",
        "Current and target processes are described in BPMN: actors, activities, events and exchanges. Gaps between the current state and the target become visible and checkable.",
      ],
    ],
  },
};

export const sprintMethods: Record<SprintKey, MethodKey[]> = {
  resilience: ["systemic", "evaluation"],
  decision: ["systemic", "evaluation"],
  architecture: ["systemic", "ddd", "modular", "togaf", "cesames", "bpmn"],
};

export const methodOrder: MethodKey[] = ["systemic", "evaluation", "ddd", "modular", "togaf", "cesames", "bpmn"];
