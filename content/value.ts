import type { ProductKey } from "@/lib/i18n";
import type { T } from "./products";

/**
 * Value vs. cost copy (ROI framing, without invented figures).
 * French typography: U+00A0 before « : » and inside « », U+202F before ; ? !
 */
export type ValueCopy = {
  eyebrow: T;
  title: T;
  lead: T;
  gainsLabel: T;
  costsLabel: T;
  gains: { title: T; text: T }[];
  costs: T[];
  note?: T;
  source?: { figure: T; text: T; label: T; href: string };
};

const gainsLabel: T = ["Ce que vous gagnez", "What you gain"];
const costsLabel: T = ["Ce que ça vous demande", "What it takes"];

export const homeValue: ValueCopy = {
  eyebrow: ["Gains et coût, sans détour", "Gains and cost, plainly stated"],
  title: ["Le coût le plus élevé, c’est la décision qui attend.", "The most expensive decision is the one still waiting."],
  lead: [
    "Chaque semaine de décision reportée se paie : un stock qui se dégrade, une option qui se ferme, un programme qui consomme son budget sans avancer. Aura réduit ce délai sans ouvrir un nouveau chantier informatique.",
    "Every week a decision is postponed has a price: stock that deteriorates, an option that closes, a programme that burns budget without moving forward. Aura shortens that delay without opening yet another IT project.",
  ],
  gainsLabel,
  costsLabel,
  gains: [
    {
      title: ["Décider plus tôt", "Decide earlier"],
      text: [
        "Un signal dans vos données devient une alerte, puis une décision préparée, avant que le problème n’apparaisse dans les résultats.",
        "A signal in your data becomes an alert, then a prepared decision, before the problem shows up in the results.",
      ],
    },
    {
      title: ["Moins de décisions rouvertes", "Fewer decisions reopened"],
      text: [
        "Critères, hypothèses et arbitrages sont tracés : le même débat ne revient pas au comité suivant.",
        "Criteria, assumptions and trade-offs are on record, so the same debate does not resurface at the next committee.",
      ],
    },
    {
      title: ["Des alertes qui aboutissent", "Alerts that lead somewhere"],
      text: [
        "Chaque alerte débouche sur une fiche de décision préremplie, validée et signée, pas sur un courriel de plus.",
        "Every alert ends in a pre-filled decision record, validated and signed, not in one more email.",
      ],
    },
    {
      title: ["Une transformation qui tient son cap", "A transformation that holds its course"],
      text: [
        "Trajectoire, arbitrages et écarts restent visibles : une dérive se voit tôt, quand la corriger coûte encore peu.",
        "Roadmap, trade-offs and deviations stay visible: drift is spotted early, while it is still cheap to correct.",
      ],
    },
  ],
  costs: [
    ["Un sprint court de quelques semaines, sur votre problème réel.", "A short sprint of a few weeks, on your real problem."],
    ["Aucun remplacement de vos outils : Aura travaille à côté de votre ERP, de vos outils de planification et de pilotage.", "No replacement of your tools: Aura works alongside your ERP, planning and reporting tools."],
    ["Pas d’entrepôt de données supplémentaire : l’ontologie relie vos sources existantes, là où il faudrait sinon un lourd projet d’intégration.", "No additional data warehouse: the ontology connects your existing sources, where you would otherwise need a heavy integration project."],
    ["Un démarrage sur vos données existantes, telles qu’elles sont.", "You start on the data you already have, as it is."],
  ],
  note: [
    "Aucun ROI promis sur une plaquette : le sprint vous donne de quoi mesurer le vôtre, sur vos propres décisions.",
    "No ROI promised in a brochure: the sprint gives you what you need to measure your own, on your own decisions.",
  ],
  source: {
    figure: ["40 %+", "40%+"],
    text: [
      "des projets d’IA agentique seront abandonnés d’ici fin 2027, faute de valeur claire ou de coûts maîtrisés. D’où un démarrage court, sur un problème mesurable.",
      "of agentic AI projects will be canceled by the end of 2027 for lack of clear value or controlled costs. Hence a short start, on a measurable problem.",
    ],
    label: ["Gartner, juin 2025", "Gartner, June 2025"],
    href: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027",
  },
};

export const productValue: Record<ProductKey, ValueCopy> = {
  supply: {
    eyebrow: ["Gains et coût", "Gains and cost"],
    title: ["Chaque jour gagné avant la rupture élargit vos options.", "Every day gained before a shortage widens your options."],
    lead: [
      "Réallouer, accélérer un transport, activer un second fournisseur : tout coûte moins cher avant la rupture qu’après. La valeur d’Aura Supply Chain tient dans ce délai entre le signal et la décision.",
      "Reallocating stock, expediting freight, switching to a second source: everything costs less before the shortage than after it. The value of Aura Supply Chain lies in that gap between signal and decision.",
    ],
    gainsLabel,
    costsLabel,
    gains: [
      {
        title: ["Le signal devient une décision", "The signal becomes a decision"],
        text: [
          "Une règle causale repère la situation, l’alerte arrive avec une fiche préremplie, l’équipe choisit et signe.",
          "A causal rule spots the situation, the alert arrives with a pre-filled record, the team chooses and signs.",
        ],
      },
      {
        title: ["Des décisions tracées", "Decisions on record"],
        text: [
          "Qui a décidé quoi, sur quelles données et avec quelle règle : la prochaine alerte similaire se traite plus vite.",
          "Who decided what, on which data and under which rule: the next similar alert is handled faster.",
        ],
      },
      {
        title: ["Vos SI reliés sans chantier", "Your systems connected, no big build"],
        text: [
          "L’ontologie décrit vos données métier une fois ; les règles s’appuient dessus, quel que soit le système source.",
          "The ontology describes your business data once; rules build on it, whatever the source system.",
        ],
      },
    ],
    costs: [
      ["Un diagnostic express d’environ 2 semaines, puis un abonnement sur un périmètre produit ou fournisseur précis.", "An express diagnostic of about 2 weeks, then a subscription on a defined product or supplier scope."],
      ["Aura lit vos sources existantes (ERP, EDI, fichiers) : pas d’entrepôt de données à construire.", "Aura reads your existing sources (ERP, EDI, files): no data warehouse to build."],
      ["Votre ERP et vos outils de planification restent en place.", "Your ERP and planning tools stay in place."],
    ],
  },
  decide: {
    eyebrow: ["Gains et coût", "Gains and cost"],
    title: ["Une décision qui revient trois fois en comité coûte trois comités.", "A decision that comes back three times costs three committees."],
    lead: [
      "Pendant que le débat se rejoue, le marché avance. Aura Décider aide à trancher une fois, sur une évaluation qui tient malgré l’incertitude, et à garder la trace de ce qui a été décidé et pourquoi.",
      "While the debate replays, the market moves on. Aura Decide helps you settle it once, on an evaluation that holds up under uncertainty, and keeps a record of what was decided and why.",
    ],
    gainsLabel,
    costsLabel,
    gains: [
      {
        title: ["Trancher en une séance", "Settle it in one session"],
        text: [
          "Options, critères et verdict sont posés sur la table : le comité discute des arbitrages, pas des chiffres de chacun.",
          "Options, criteria and verdict are on the table: the committee debates trade-offs, not everyone’s own figures.",
        ],
      },
      {
        title: ["Moins de réouvertures", "Fewer reopened decisions"],
        text: [
          "L’évaluation montre ce qui ferait changer le verdict ; tant que ces conditions ne changent pas, la décision tient.",
          "The evaluation shows what would change the verdict; as long as those conditions hold, so does the decision.",
        ],
      },
      {
        title: ["Savoir quoi améliorer", "Know what to improve"],
        text: [
          "Le raisonnement à rebours indique les améliorations minimales pour atteindre votre objectif.",
          "Backward reasoning points to the minimal improvements needed to reach your objective.",
        ],
      },
    ],
    costs: [
      ["Une option de 5 jours à 2 semaines, sur une décision réelle.", "An option of 5 days to 2 weeks, on a real decision."],
      ["Pas besoin de données chiffrées parfaites : l’évaluation qualitative suffit à départager.", "No need for perfect numbers: a qualitative evaluation is enough to separate the options."],
      ["Rien à installer ni à intégrer dans votre SI.", "Nothing to install or integrate into your systems."],
    ],
  },
  architect: {
    eyebrow: ["Gains et coût", "Gains and cost"],
    title: ["Une transformation dérive de quelques semaines à la fois.", "A transformation drifts a few weeks at a time."],
    lead: [
      "Chaque trimestre de dérive se paie en budget et en crédibilité. La repérer tôt coûte un arbitrage ; la découvrir tard coûte une partie du programme.",
      "Each quarter of drift is paid for in budget and credibility. Spotting it early costs one trade-off; finding it late costs part of the programme.",
    ],
    gainsLabel,
    costsLabel,
    gains: [
      {
        title: ["Un cadrage partagé", "A shared framing"],
        text: [
          "Métier, architecture et direction travaillent sur la même carte des domaines et des capacités.",
          "Business, architecture and leadership work from the same map of domains and capabilities.",
        ],
      },
      {
        title: ["Une trajectoire qui ne dérive pas", "A roadmap that does not drift"],
        text: [
          "Chaque arbitrage est tracé et relié à la cible : un écart se voit à la revue suivante, pas au bilan.",
          "Every trade-off is recorded and tied to the target: a deviation shows at the next review, not at the post-mortem.",
        ],
      },
      {
        title: ["Des intégrations mieux dimensionnées", "Integrations sized right"],
        text: [
          "L’ontologie clarifie qui détient quelle donnée : on connecte ce qui compte au lieu de tout intégrer.",
          "The ontology clarifies which system owns which data: you connect what matters instead of integrating everything.",
        ],
      },
    ],
    costs: [
      ["Un sprint de 4 à 6 semaines, au démarrage ou en cours de programme.", "A 4-to-6-week sprint, at kick-off or mid-programme."],
      ["On part de votre cartographie et de vos documents existants.", "We start from your existing maps and documents."],
      ["Aucun nouveau référentiel imposé à vos équipes.", "No new repository imposed on your teams."],
    ],
  },
};

export const sprintsValue: ValueCopy = {
  eyebrow: ["Ce qu’un sprint coûte, ce qu’il évite", "What a sprint costs, what it saves"],
  title: ["Quelques semaines, face au prix d’une décision qui traîne.", "A few weeks, against the price of a decision that drags on."],
  lead: [
    "Un sprint est borné : durée fixe, entrées connues, livrable qui vous appartient. En face, le coût d’opportunité d’une décision reportée, d’un débat rouvert ou d’une trajectoire qui dérive court chaque semaine.",
    "A sprint is bounded: fixed duration, known inputs, a deliverable you own. On the other side, the opportunity cost of a postponed decision, a reopened debate or a drifting roadmap keeps running every week.",
  ],
  gainsLabel: ["Ce que vous évitez", "What you avoid"],
  costsLabel: ["Ce que vous engagez", "What you commit"],
  gains: [
    {
      title: ["Des semaines d’attente", "Weeks of waiting"],
      text: [
        "La décision est préparée et tranchée pendant le sprint, pas au prochain cycle budgétaire.",
        "The decision is prepared and made during the sprint, not at the next budget cycle.",
      ],
    },
    {
      title: ["Le débat qui revient", "The debate that keeps coming back"],
      text: [
        "Hypothèses et arbitrages sont écrits et signés : on ne repart pas de zéro.",
        "Assumptions and trade-offs are written down and signed: nobody starts from scratch again.",
      ],
    },
    {
      title: ["Le projet d’intégration de plusieurs mois", "The months-long integration project"],
      text: [
        "L’ontologie relie vos sources existantes : ni entrepôt de données, ni migration.",
        "The ontology connects your existing sources: no data warehouse, no migration.",
      ],
    },
  ],
  costs: [
    ["De quelques jours à 6 semaines selon l’offre.", "From a few days to 6 weeks, depending on the offer."],
    ["Quelques heures de vos experts, à des moments prévus.", "A few hours of your experts’ time, at scheduled points."],
    ["Aucun outil remplacé, aucune donnée déplacée hors de votre contrôle.", "No tool replaced, no data moved out of your control."],
  ],
};
