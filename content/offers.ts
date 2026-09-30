/**
 * Les offres Aura (validées par le fondateur, 30/09/2026).
 * Aucun prix n'est validé dans le dépôt : tout est « sur devis ».
 * Chaque texte est une paire [FR, EN].
 */
type T = readonly [string, string];

export type OfferKey = "diagnostic" | "supply" | "architecture" | "decide";

export type Offer = {
  key: OfferKey;
  product: "supply" | "architect" | "decide";
  name: T;
  format: T;
  pitch: T;
  without: T[];
  with: T[];
  steps: readonly [T, T][];
  needs: T[];
  deliverables: T[];
  good: T[];
  optional?: boolean;
};

const eu: T = [
  "Hébergement dans l’Union européenne : application sur Vercel à Paris, base Supabase en UE, modèle Mistral en UE.",
  "Hosted in the European Union: application on Vercel in Paris, Supabase database in the EU, Mistral model in the EU.",
];
const human: T = [
  "L’IA prépare, un humain identifié valide et signe chaque décision.",
  "AI prepares; a named person validates and signs every decision.",
];
const price: T = ["Sur devis, fixé après un premier échange.", "On quotation, set after a first call."];

export const offers: Offer[] = [
  {
    key: "diagnostic",
    product: "supply",
    name: ["Diagnostic express", "Express diagnostic"],
    format: ["Environ 2 semaines", "About 2 weeks"],
    pitch: [
      "Vos cinq risques supply les plus coûteux, chiffrés, avec une décision recommandée pour chacun.",
      "Your five costliest supply risks, costed, with a recommended decision for each.",
    ],
    without: [
      ["Les risques sont connus de chacun, mais personne ne les a chiffrés ni classés.", "Everyone knows the risks, but nobody has costed or ranked them."],
      ["Le comité discute sur des impressions et des tableurs qui divergent.", "The committee debates impressions and spreadsheets that disagree."],
    ],
    with: [
      ["Cinq risques classés par montant exposé, chacun relié à la donnée qui le prouve.", "Five risks ranked by exposed amount, each tied to the data that proves it."],
      ["Pour chaque risque, une décision recommandée, argumentée, prête à être signée.", "For each risk, a recommended, reasoned decision, ready to be signed."],
    ],
    steps: [
      [["Semaine 1", "Week 1"], ["Connexion à vos données (extraction ou lac de données, ou connecteurs en lecture seule) et entretiens courts avec les équipes.", "Connect to your data (extract or data lake, or read-only connectors) and short interviews with the teams."]],
      [["Semaine 2", "Week 2"], ["Chiffrage des risques, choix des cinq premiers, une décision recommandée par risque, puis restitution en comité.", "Cost the risks, pick the top five, one recommended decision per risk, then a committee read-out."]],
    ],
    needs: [
      ["Un accès aux données : extraction, lac de données ou connecteurs en lecture seule (stocks, commandes, fournisseurs, délais).", "Data access: an extract, a data lake or read-only connectors (stock, orders, suppliers, lead times)."],
      ["Un sponsor et un référent supply ou achats.", "A sponsor and a supply or procurement lead."],
      ["Quelques heures de vos équipes sur les deux semaines, et un créneau de comité pour la restitution.", "A few hours of your teams’ time over the two weeks, and a committee slot for the read-out."],
    ],
    deliverables: [
      ["Le top 5 des risques, chiffrés et sourcés", "The top 5 risks, costed and sourced"],
      ["Une décision recommandée par risque", "One recommended decision per risk"],
      ["La restitution en comité", "The committee read-out"],
    ],
    good: [
      eu,
      ["Accès en lecture seule : Aura ne modifie rien dans vos systèmes.", "Read-only access: Aura changes nothing in your systems."],
      human,
      ["Non inclus : la mise en œuvre des décisions et le branchement permanent des flux (c’est Aura Supply).", "Not included: implementing the decisions and wiring the flows permanently (that is Aura Supply)."],
      price,
    ],
  },
  {
    key: "supply",
    product: "supply",
    name: ["Aura Supply", "Aura Supply"],
    format: ["Abonnement", "Subscription"],
    pitch: [
      "Voir la rupture venir, savoir ce qu’elle coûte, décider et vérifier que la décision a marché.",
      "See the shortage coming, know what it costs, decide, and check the decision worked.",
    ],
    without: [
      ["La rupture se découvre en magasin ou chez le client, quand il est trop tard pour agir à bas coût.", "The shortage is found in store or at the customer, when it is too late to act cheaply."],
      ["La décision se prend par mail, et six mois plus tard personne ne sait pourquoi.", "The decision is made by email, and six months later nobody knows why."],
    ],
    with: [
      ["Une alerte chiffrée arrive avant la rupture, avec sa chaîne de causes jusqu’à la donnée.", "A costed alert arrives before the shortage, with its chain of causes down to the data."],
      ["Décider compare les options ; l’équipe tranche, signe, et le résultat réel est suivi.", "Decide compares the options; the team settles, signs, and the actual outcome is tracked."],
    ],
    steps: [
      [["Démarrage", "Start"], ["Branchement en lecture seule sur vos sources et reprise des risques du diagnostic.", "Read-only connection to your sources, starting from the diagnostic’s risks."]],
      [["Chaque jour", "Every day"], ["Alertes causales chiffrées, décision dans Décider, travail à plusieurs sur la même fiche.", "Costed causal alerts, decision in Decide, several people working on the same record."]],
      [["Chaque mois", "Every month"], ["Revue décision → résultat : ce qui a été décidé, ce qui s’est passé, ce qu’on ajuste.", "Decision → outcome review: what was decided, what happened, what to adjust."]],
    ],
    needs: [
      ["Des connecteurs en lecture seule vers vos sources (ERP, WMS, TMS, lac de données).", "Read-only connectors to your sources (ERP, WMS, TMS, data lake)."],
      ["Un référent métier et un contact DSI pour les accès.", "A business lead and an IT contact for access."],
      ["Les personnes qui décident aujourd’hui, dans l’outil plutôt que par mail.", "The people who decide today, in the tool rather than by email."],
    ],
    deliverables: [
      ["Alertes causales chiffrées", "Costed causal alerts"],
      ["Décider intégré", "Decide built in"],
      ["Suivi décision → résultat", "Decision → outcome tracking"],
      ["Collaboration sur chaque décision", "Collaboration on every decision"],
    ],
    good: [
      eu,
      ["Aura lit vos sources plutôt que de tout copier ; la conservation des données se décide avec vous.", "Aura reads your sources rather than copying everything; data retention is decided with you."],
      human,
      ["Non inclus : l’exécution dans vos systèmes (commandes, transport). Aura aide à décider, vos outils exécutent.", "Not included: execution in your systems (orders, transport). Aura helps you decide; your tools execute."],
      price,
    ],
  },
  {
    key: "architecture",
    product: "architect",
    name: ["Sprint Architecture", "Architecture Sprint"],
    format: ["4 à 6 semaines", "4 to 6 weeks"],
    pitch: [
      "Un dossier d’architecture que vous pouvez défendre en comité : cible, écarts, feuille de route, choix argumentés.",
      "An architecture case you can defend before the board: target, gaps, roadmap, reasoned choices.",
    ],
    without: [
      ["Des semaines de schémas faits à la main, qui se contredisent d’un document à l’autre.", "Weeks of hand-drawn diagrams that contradict each other from one document to the next."],
      ["Le comité demande « pourquoi ce choix ? » et la réponse tient dans une réunion passée.", "The board asks “why this choice?” and the answer lives in a past meeting."],
    ],
    with: [
      ["Aura Architect tient l’existant et la cible dans un seul modèle, en vues cohérentes.", "Aura Architect holds the current and target state in one model, in consistent views."],
      ["Décider compare les scénarios ; chaque choix garde ses critères et qui l’a signé.", "Decide compares the scenarios; each choice keeps its criteria and who signed it."],
    ],
    steps: [
      [["Semaine 1", "Week 1"], ["Cadrage : enjeux, périmètre, parties prenantes. Reprise de vos documents existants.", "Framing: stakes, scope, stakeholders. Your existing documents are taken in."]],
      [["Semaines 2 à 3", "Weeks 2 to 3"], ["Existant et cible modélisés, écarts identifiés.", "Current and target state modelled, gaps identified."]],
      [["Semaines 4 à 5", "Weeks 4 to 5"], ["Scénarios comparés dans Décider, choix argumentés, feuille de route.", "Scenarios compared in Decide, reasoned choices, roadmap."]],
      [["Dernière semaine", "Final week"], ["Dossier finalisé et présentation en comité.", "Case finalised and presented to the board."]],
    ],
    needs: [
      ["Vos documents existants : cartographies, schémas, listes d’applications, contrats d’interface.", "Your existing documents: maps, diagrams, application lists, interface contracts."],
      ["Un sponsor, un architecte ou responsable de transformation référent.", "A sponsor and a lead architect or transformation owner."],
      ["Quelques ateliers avec les métiers et la DSI, et un créneau de comité à la fin.", "A few workshops with business and IT, and a board slot at the end."],
    ],
    deliverables: [
      ["Architecture cible", "Target architecture"],
      ["Écarts avec l’existant", "Gaps with the current state"],
      ["Feuille de route", "Roadmap"],
      ["Choix argumentés et tracés", "Reasoned, traced choices"],
    ],
    good: [
      eu,
      ["Aucun accès en écriture à vos systèmes : on part de vos documents.", "No write access to your systems: we start from your documents."],
      human,
      ["Non inclus : la réalisation des projets de la feuille de route.", "Not included: delivering the roadmap projects."],
      price,
    ],
  },
  {
    key: "decide",
    product: "decide",
    optional: true,
    name: ["Décider seul", "Decide on its own"],
    format: ["En option", "Optional"],
    pitch: [
      "Pour une décision ponctuelle de comité : options comparées, recommandation expliquée, trace signée.",
      "For a one-off board decision: options compared, recommendation explained, signed record.",
    ],
    without: [
      ["Un arbitrage important se joue sur la meilleure présentation, pas sur les faits.", "A major trade-off is won by the best slide deck, not the facts."],
    ],
    with: [
      ["Les options sont comparées sur les mêmes critères ; Bora explique la recommandation, le comité signe.", "Options are compared on the same criteria; Bora explains the recommendation, the board signs."],
    ],
    steps: [
      [["Étape 1", "Step 1"], ["La question est posée clairement, avec les options et les critères.", "The question is set out clearly, with the options and criteria."]],
      [["Étape 2", "Step 2"], ["Comparaison dans Décider, recommandation, décision signée.", "Comparison in Decide, recommendation, signed decision."]],
    ],
    needs: [
      ["La décision à prendre, les options envisagées et les personnes qui décident.", "The decision to make, the options on the table and the people who decide."],
    ],
    deliverables: [
      ["Options comparées", "Options compared"],
      ["Recommandation expliquée", "Explained recommendation"],
      ["Décision signée et tracée", "Signed, traced decision"],
    ],
    good: [eu, human, price],
  },
];
