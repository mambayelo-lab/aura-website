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
  /** Aide à la décision d’achat : pour qui, pas pour qui, cas type, premier pas. */
  fit?: { forWho: T; notFor: T; useCase: T; firstStep: T };
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
      "En 2 semaines : branchement en lecture seule sur vos données, vos ruptures et risques majeurs mis en évidence par les règles causales d’Aura, et pour les 5 principaux une recommandation argumentée, présentée en comité.",
      "In 2 weeks: a read-only connection to your data, your major shortages and risks surfaced by Aura’s causal rules, and for the top 5 a reasoned recommendation, presented to your committee.",
    ],
    without: [
      ["Les risques sont connus de chacun, mais personne ne les a classés ni reliés à leurs causes.", "Everyone knows the risks, but nobody has ranked them or tied them to their causes."],
      ["Le comité discute sur des impressions et des tableurs qui divergent.", "The committee debates impressions and spreadsheets that disagree."],
    ],
    with: [
      ["Vos risques majeurs, classés par gravité avec vos experts, avec les chiffres tels que votre SI les fournit.", "Your major risks, ranked by severity with your experts, with the figures as your systems provide them."],
      ["Pour les 5 principaux, les options de réponse comparées et une recommandation argumentée, prête à être signée.", "For the top 5, the response options compared and a reasoned recommendation, ready to be signed."],
    ],
    steps: [
      [["Semaine 1", "Week 1"], ["Branchement en lecture seule sur vos données (extraits, lac de données ou connecteurs) et contrôle de ce qui est disponible.", "Read-only connection to your data (extracts, data lake or connectors) and a check of what is available."]],
      [["Semaine 2", "Week 2"], ["Les règles causales d’Aura font ressortir vos ruptures et risques majeurs, classés par gravité avec vos experts, avec les chiffres tels que votre SI les fournit. Pour les 5 principaux, les options de réponse sont comparées et une recommandation est argumentée, puis présentée en comité.", "Aura’s causal rules surface your major shortages and risks, ranked by severity with your experts, with the figures as your systems provide them. For the top 5, the response options are compared and a recommendation is reasoned, then presented to your committee."]],
    ],
    needs: [
      ["Un accès aux données : extraits, lac de données ou connecteurs en lecture seule (stocks, commandes, fournisseurs, délais).", "Data access: extracts, a data lake or read-only connectors (stock, orders, suppliers, lead times)."],
      ["Un sponsor, un référent supply ou achats, et vos experts pour classer les risques.", "A sponsor, a supply or procurement lead, and your experts to rank the risks."],
      ["Un créneau de comité pour la restitution.", "A committee slot for the read-out."],
    ],
    deliverables: [
      ["Une carte des risques", "A risk map"],
      ["5 fiches décision", "5 decision records"],
      ["La liste des données manquantes", "The list of missing data"],
    ],
    fit: {
      forWho: ["Directions supply chain et achats qui veulent reprendre la main sur leurs ruptures, ou sécuriser une ambition : nouveau marché, service premium, réseau plus agile.", "Supply chain and procurement leaders who want to get on top of shortages, or secure an ambition: a new market, a premium service, a more agile network."],
      notFor: ["Les entreprises qui cherchent avant tout un outil de prévision de la demande.", "Companies mainly looking for a demand forecasting tool."],
      useCase: ["Un distributeur dépend d’un fournisseur unique passant par la mer Rouge : le diagnostic le fait ressortir, compare second fournisseur, stock tampon ou acceptation du risque, et argumente une recommandation.", "A retailer depends on a single supplier shipping through the Red Sea: the diagnostic surfaces it, compares a second supplier, a buffer stock or accepting the risk, and reasons a recommendation."],
      firstStep: ["Un appel de 30 minutes pour vérifier les données disponibles.", "A 30-minute call to check which data is available."],
    },
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
      "Voir la rupture venir, en comprendre les causes, comparer les réponses, décider et vérifier que la décision a marché.",
      "See the shortage coming, understand its causes, compare the responses, decide, and check the decision worked.",
    ],
    without: [
      ["La rupture se découvre en magasin ou chez le client, quand il est trop tard pour agir à bas coût.", "The shortage is found in store or at the customer, when it is too late to act cheaply."],
      ["La décision se prend par mail, et six mois plus tard personne ne sait pourquoi.", "The decision is made by email, and six months later nobody knows why."],
    ],
    with: [
      ["Une alerte arrive avant la rupture, avec sa chaîne de causes et les valeurs lues dans votre SI (couverture, délais, chiffre d’affaires exposé).", "An alert arrives before the shortage, with its chain of causes and the values read from your systems (coverage, lead times, revenue at risk)."],
      ["Les options de réponse sont comparées ; l’équipe tranche, signe, et le résultat réel est suivi.", "The response options are compared; the team settles, signs, and the actual outcome is tracked."],
    ],
    steps: [
      [["Démarrage", "Start"], ["Branchement en lecture seule sur vos sources et reprise des risques du diagnostic.", "Read-only connection to your sources, starting from the diagnostic’s risks."]],
      [["Chaque jour", "Every day"], ["Alertes issues des règles causales sur vos données, options comparées, travail à plusieurs sur la même fiche.", "Alerts from causal rules on your data, options compared, several people working on the same record."]],
      [["Chaque mois", "Every month"], ["Revue décision → résultat : ce qui a été décidé, ce qui s’est passé, ce qu’on ajuste.", "Decision → outcome review: what was decided, what happened, what to adjust."]],
    ],
    needs: [
      ["Des connecteurs en lecture seule vers vos sources (ERP, WMS, TMS, lac de données).", "Read-only connectors to your sources (ERP, WMS, TMS, data lake)."],
      ["Un référent métier et un contact DSI pour les accès.", "A business lead and an IT contact for access."],
      ["Les personnes qui décident aujourd’hui, dans l’outil plutôt que par mail.", "The people who decide today, in the tool rather than by email."],
    ],
    deliverables: [
      ["Alertes causales, avec les valeurs de votre SI", "Causal alerts, with your systems’ values"],
      ["Comparaison des options et recommandation argumentée", "Options compared and a reasoned recommendation"],
      ["Suivi décision → résultat", "Decision → outcome tracking"],
      ["Collaboration sur chaque décision", "Collaboration on every decision"],
    ],
    fit: {
      forWho: ["Équipes supply et achats qui veulent voir venir les ruptures chaque jour et décider avec une trace.", "Supply and procurement teams who want to see shortages coming every day and decide on record."],
      notFor: ["Les équipes qui cherchent un APS ou un outil d’exécution : Aura s’appuie sur les données de votre SI pour éclairer la décision, vos outils exécutent.", "Teams looking for an APS or an execution tool: Aura builds on the data in your systems to inform the decision; your tools execute."],
      useCase: ["La couverture d’un article critique passe sous le délai de reprise du fournisseur : l’alerte montre la cause, les options sont comparées, l’équipe signe et suit le résultat.", "A critical item’s coverage falls below the supplier’s recovery time: the alert shows the cause, the options are compared, the team signs and tracks the outcome."],
      firstStep: ["Le diagnostic express, puis un branchement en lecture seule.", "The express diagnostic, then a read-only connection."],
    },
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
    fit: {
      forWho: ["DSI, architectes et PMO qui cadrent un programme de transformation.", "CIOs, architects and PMOs framing a transformation programme."],
      notFor: ["Qui cherche un référentiel d’architecture de plus à alimenter à la main.", "Anyone looking for one more architecture repository to feed by hand."],
      useCase: ["Remplacement d’un ERP : cible, écarts, cartographie des contextes par domaine, feuille de route et choix argumentés, partagés avec les métiers.", "Replacing an ERP: target, gaps, domain context mapping, roadmap and reasoned choices, shared with the business."],
      firstStep: ["Un atelier d’une heure sur votre programme prioritaire.", "A one-hour workshop on your priority programme."],
    },
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
    name: ["Décider en option", "Decide as an option"],
    format: ["En option", "Optional"],
    pitch: [
      "Pour une décision ponctuelle de comité : options comparées, recommandation expliquée, trace signée.",
      "For a one-off board decision: options compared, recommendation explained, signed record.",
    ],
    without: [
      ["Un arbitrage important se joue sur la meilleure présentation, pas sur les faits.", "A major trade-off is won by the best slide deck, not the facts."],
    ],
    with: [
      ["Les options sont comparées sur les mêmes critères ; la recommandation est argumentée, le comité tranche.", "Options are compared on the same criteria; the recommendation is argued in full, and the board decides."],
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
