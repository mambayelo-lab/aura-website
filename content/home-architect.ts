/**
 * Accueil centré sur Aura Architect (branche refonte-architect, à valider par le fondateur).
 * Règles : rien d'inventé. Exemples de secteurs tirés de la génération hors ligne d'Architect
 * (buildModel sans LLM sur les demandes types des tests), offres reprises de src/lib/saas/offres.ts.
 */
import type { Locale } from "@/lib/i18n";

export const APP = "https://aura-architect-seven.vercel.app";
/** Page Tarifs de l'app : le bouton « Souscrire » y lance Stripe Checkout (retour sur cette page, ?paiement=ok). */
export const PRICING = `${APP}/cockpit/tarifs`;

type Pair = readonly [string, string];

export const home = {
  fr: {
    eyebrow: "Aura Architect",
    title: "Le jumeau numérique de l’architecte : il apporte les idées, vous les validez d’un clic.",
    lead: "Des besoins des parties prenantes à la décision, Aura construit un modèle d’architecture complet, cohérent et traçable. Testez vos idées et leur cohérence systémique avant d’engager le programme.",
    trial: "Essayer 14 jours",
    seeDemo: "Voir l’application",
    trialNote: "Offre Solo : essai de 14 jours, annulable en un clic. Hébergement dans l’Union européenne.",
    weave: { chains: "Chaînes de valeur", caps: "Capacités", apps: "Applications" },
    heroShotAlt: "Carte des capacités d’Aura Architect sur l’étude démo d’un assureur",
    heroShotCaption: "Carte des capacités générée sur l’étude démo (assureur, hors ligne) : complétude 100 %, éléments « à confirmer » signalés.",
    scqEyebrow: "Pourquoi maintenant",
    scqTitle: "Une transformation se joue au cadrage : Aura le rend complet, cohérent et défendable.",
    scq: [
      ["Situation", "Chaque programme exige de relier besoins, capacités, applications, flux et exigences, puis de choisir une trajectoire."],
      ["Complication", "Ce travail est manuel, dispersé entre ateliers, tableurs et schémas. Les incohérences apparaissent tard, quand elles coûtent cher."],
      ["Question", "Comment tester une idée, et ses effets sur tout le système, avant d’engager budget et équipes ?"],
      ["Réponse", "Un modèle unique, généré à partir de votre demande, vérifié par des règles, où chaque élément dit pourquoi il existe. Aura propose ; vous validez."],
    ] as Pair[],
    benefitsEyebrow: "Ce que cela vous apporte",
    benefitsTitle: "Chacun y trouve sa réponse, dans son vocabulaire.",
    benefitsLead: "Le bénéfice phare : tester ses idées et leur cohérence systémique avant d’engager.",
    audiences: [
      { who: "Responsables et directions de la transformation", title: "Tester ses idées avant d’engager", items: ["Scénarios comparés sur les mêmes critères", "Impacts visibles sur capacités, applications et flux", "Objectifs et OKR reliés aux chaînes de valeur", "Plan d’action issu de la décision"] },
      { who: "Architectes", title: "Démultiplier sa production", items: ["Une carte complète proposée en quelques minutes, à relire", "Idées ✦ : pratiques répandues du secteur, à confirmer", "Traçabilité de chaque capacité jusqu’au besoin"] },
      { who: "Métiers", title: "Voir ses besoins servis", items: ["Chaque besoin relié aux capacités qui le servent", "Le vocabulaire du métier repris tel quel (assuré, usager, patient…)", "Ce qui manque est marqué « à confirmer »"] },
      { who: "DSI", title: "Tenir la cohérence du SI", items: ["Applications, flux et processus en miroir des capacités", "Inter-applicatif lisible, flux directs signalés", "Trajectoire, coût et risque argumentés en comité"] },
    ],
    howEyebrow: "Comment ça marche",
    howTitle: "Cinq temps, du besoin à la décision, dans un seul modèle.",
    steps: [
      ["Parties prenantes et besoins", "Qui attend quoi : chaque partie prenante et ses besoins, tirés de votre demande et de vos documents."],
      ["Cas d’usage et scénarios", "Chaque besoin reçoit un scénario de réponse ; ses étapes deviennent les fonctions à couvrir."],
      ["Capacités en chaînes de valeur", "Une carte de 5 à 9 capacités de niveau 1, ordonnées selon la chaîne de valeur, sans doublon."],
      ["Architecture en miroir", "Applications, flux, processus et exigences alignés sur les capacités, vue par vue."],
      ["Décision et plan d’action", "Leviers, options ✦, arbre d’indicateurs, scénarios comparés, OKR et plan d’action."],
    ] as Pair[],
    uniqueEyebrow: "Ce qui rend Aura unique",
    uniqueTitle: "Aura propose, des règles vérifient, un humain décide.",
    unique: [
      ["Rien d’inventé", "Ce que la demande n’atteste pas est marqué « à confirmer », jamais présenté comme acquis."],
      ["Complétude mesurée", "Un indicateur de complétude, avec la liste de ce qui reste à confirmer. 100 % sur l’étude démo."],
      ["Relecteur métier automatique", "Une relecture métier en arrière-plan, quel que soit le secteur, filtrée par des règles."],
      ["Idées ✦ du secteur", "Des pratiques récentes et répandues du secteur proposées, au plus deux par capacité, toujours à confirmer."],
      ["Traçabilité « Sert : … via … »", "Chaque capacité dit quel besoin elle sert, par quel cas d’usage et quel scénario."],
      ["Même demande, même carte", "Le procédé est déterministe : on peut relire, comparer et rejouer."],
      ["Vous restez souverain", "Rien n’est appliqué sans votre validation. Hébergement dans l’Union européenne."],
    ] as Pair[],
    traceAlt: "Fiche d’une capacité : « Sert » et justification par objectifs, besoins et capacités",
    traceCaption: "« Pourquoi cet élément ? » : chaque capacité est justifiée par un objectif, un besoin et sa capacité mère.",
    shotsEyebrow: "L’application",
    shotsTitle: "Des captures réelles, pas des maquettes.",
    shotsLead: "Toutes prises sur l’étude démo hors ligne d’un assureur.",
    shots: [
      ["capacites", "Carte des capacités, colorée par intensité de changement"],
      ["trace", "Traçabilité d’une capacité, en amont et en aval"],
      ["applicatif", "Inter-applicatif : acteurs, échanges et flux à vérifier"],
      ["decider", "Décider un choix : leviers et options par domaine"],
    ] as Pair[],
    sectorsEyebrow: "Tous secteurs",
    sectorsTitle: "Le même procédé, dans tous les secteurs.",
    sectorsLead: "Pour chaque secteur : un extrait de chaîne de valeur et une idée ✦ proposés par Architect à partir d’une demande type.",
    sectorsNote: "Exemples produits par la génération hors ligne d’Architect (sans modèle de langage), sur des demandes types. Les idées ✦ restent « à confirmer ».",
    decideEyebrow: "Décider, intégré",
    decideTitle: "La décision est dans le modèle, pas à côté.",
    decideLead: "La force de décision d’Aura est intégrée à Architect : chaque choix d’architecture se compare sur les mêmes critères, et la décision retenue met le modèle à jour.",
    decideItems: ["Leviers et options pré-remplis, sourcés ou « à confirmer »", "Gain et risque lus ensemble, l’inconnu compté comme un risque", "Décision consignée en ADR, présentable en comité"],
    decideAlt: "Décider un choix : leviers, options et critères",
    supply: "Le même moteur sert aussi la supply chain, avec Aura Supply.",
    supplyLink: "Découvrir",
    priceEyebrow: "Offres",
    priceTitle: "Commencez seul, passez à l’équipe quand vous voulez.",
    priceLead: "Prix HT, repris de la page Tarifs de l’application. La souscription se fait sur la plateforme, par paiement sécurisé.",
    extras: [
      ["Options", "Data +30 € · Infra & technique +30 € · Backlog & delivery +40 € (HT / utilisateur / mois)"],
      ["Connecteurs", "1 500 € HT / an chacun"],
      ["Crédits d’analyse", "5 000 crédits : 49 € HT · 25 000 crédits : 199 € HT"],
    ] as Pair[],
    priceNote: "Déjà abonné ?",
    access: "Accéder à la plateforme",
  },
  en: {
    eyebrow: "Aura Architect",
    title: "The architect’s digital twin: it brings the ideas, you validate them in one click.",
    lead: "From stakeholder needs to the decision, Aura builds a complete, consistent and traceable architecture model. Test your ideas and their system-wide coherence before committing the programme.",
    trial: "Try 14 days",
    seeDemo: "See the application",
    trialNote: "Solo plan: 14-day trial, cancel in one click. Hosted in the European Union.",
    weave: { chains: "Value chains", caps: "Capabilities", apps: "Applications" },
    heroShotAlt: "Aura Architect capability map on the insurer demo study",
    heroShotCaption: "Capability map generated on the demo study (insurer, offline): 100% completeness, items “to be confirmed” flagged.",
    scqEyebrow: "Why now",
    scqTitle: "A transformation is won at scoping: Aura makes it complete, consistent and defensible.",
    scq: [
      ["Situation", "Every programme must link needs, capabilities, applications, flows and requirements, then choose a trajectory."],
      ["Complication", "This work is manual, scattered across workshops, spreadsheets and diagrams. Inconsistencies surface late, when they are expensive."],
      ["Question", "How do you test an idea, and its effects on the whole system, before committing budget and teams?"],
      ["Answer", "A single model, generated from your request, checked by rules, where every element says why it exists. Aura proposes; you validate."],
    ] as Pair[],
    benefitsEyebrow: "What you get",
    benefitsTitle: "Everyone finds their answer, in their own words.",
    benefitsLead: "The headline benefit: test your ideas and their system-wide coherence before committing.",
    audiences: [
      { who: "Transformation leaders", title: "Test ideas before committing", items: ["Scenarios compared on the same criteria", "Impacts visible on capabilities, applications and flows", "Objectives and OKRs tied to value chains", "Action plan derived from the decision"] },
      { who: "Architects", title: "Multiply your output", items: ["A complete map proposed in minutes, for you to review", "✦ ideas: widespread sector practices, to be confirmed", "Every capability traced back to a need"] },
      { who: "Business teams", title: "See your needs served", items: ["Each need linked to the capabilities that serve it", "Business vocabulary kept as is (policyholder, citizen, patient…)", "What is missing is flagged “to be confirmed”"] },
      { who: "CIOs", title: "Keep the IT landscape coherent", items: ["Applications, flows and processes mirroring capabilities", "Readable integration view, direct flows flagged", "Trajectory, cost and risk argued before the board"] },
    ],
    howEyebrow: "How it works",
    howTitle: "Five steps, from need to decision, in one model.",
    steps: [
      ["Stakeholders and needs", "Who expects what: each stakeholder and their needs, drawn from your request and documents."],
      ["Use cases and scenarios", "Each need gets a response scenario; its steps become the functions to cover."],
      ["Capabilities in value chains", "A map of 5 to 9 level-1 capabilities, ordered along the value chain, without duplicates."],
      ["Mirrored architecture", "Applications, flows, processes and requirements aligned with capabilities, view by view."],
      ["Decision and action plan", "Levers, ✦ options, KPI tree, compared scenarios, OKRs and action plan."],
    ] as Pair[],
    uniqueEyebrow: "What makes Aura different",
    uniqueTitle: "Aura proposes, rules check, a person decides.",
    unique: [
      ["Nothing invented", "Whatever the request does not attest is marked “to be confirmed”, never presented as fact."],
      ["Measured completeness", "A completeness indicator, with the list of what remains to confirm. 100% on the demo study."],
      ["Automatic business reviewer", "A background business review for any sector, filtered by rules."],
      ["✦ sector ideas", "Recent, widespread sector practices proposed, at most two per capability, always to be confirmed."],
      ["“Serves: … via …” traceability", "Each capability states which need it serves, through which use case and scenario."],
      ["Same request, same map", "The process is deterministic: you can review, compare and replay."],
      ["You stay in charge", "Nothing is applied without your validation. Hosted in the European Union."],
    ] as Pair[],
    traceAlt: "Capability card: “Serves” and justification by objectives, needs and capabilities",
    traceCaption: "“Why this element?”: every capability is justified by an objective, a need and its parent capability.",
    shotsEyebrow: "The application",
    shotsTitle: "Real screenshots, not mock-ups.",
    shotsLead: "All taken on the offline insurer demo study.",
    shots: [
      ["capacites", "Capability map, coloured by intensity of change"],
      ["trace", "Upstream and downstream traceability of a capability"],
      ["applicatif", "Integration view: actors, exchanges and flows to check"],
      ["decider", "Decide a choice: levers and options by domain"],
    ] as Pair[],
    sectorsEyebrow: "Every sector",
    sectorsTitle: "One process, across every sector.",
    sectorsLead: "For each sector: an excerpt of the value chain and a ✦ idea proposed by Architect from a typical request.",
    sectorsNote: "Examples produced by Architect’s offline generation (no language model) on typical requests, generated in French and translated here. ✦ ideas remain “to be confirmed”.",
    decideEyebrow: "Decide, built in",
    decideTitle: "The decision lives in the model, not beside it.",
    decideLead: "Aura’s decision engine is built into Architect: every architecture choice is compared on the same criteria, and the chosen decision updates the model.",
    decideItems: ["Levers and options pre-filled, sourced or “to be confirmed”", "Upside and risk read together, unknowns counted as risk", "Decision recorded as an ADR, ready for the board"],
    decideAlt: "Decide a choice: levers, options and criteria",
    supply: "The same engine also serves supply chains, with Aura Supply.",
    supplyLink: "Discover",
    priceEyebrow: "Plans",
    priceTitle: "Start solo, move to a team whenever you like.",
    priceLead: "Prices excl. VAT, taken from the application’s Pricing page. Subscription happens on the platform, with secure payment.",
    extras: [
      ["Options", "Data +€30 · Infra & technical +€30 · Backlog & delivery +€40 (per user / month)"],
      ["Connectors", "€1,500 / year each"],
      ["Analysis credits", "5,000 credits: €49 · 25,000 credits: €199"],
    ] as Pair[],
    priceNote: "Already subscribed?",
    access: "Go to the platform",
  },
};

/** Tiré de la génération hors ligne (N1 du Cœur de métier + tendance ✦ produite). */
export const sectors: { name: Pair; chain: readonly [string[], string[]]; trend: Pair }[] = [
  { name: ["Aérospatiale", "Aerospace"], chain: [["Production et fabrication", "Maintenance des équipements", "Qualité des produits"], ["Production and manufacturing", "Equipment maintenance", "Product quality"]], trend: ["Maintenance prédictive", "Predictive maintenance"] },
  { name: ["Défense", "Defence"], chain: [["Production et fabrication", "Maintenance des équipements", "Logistique et livraison"], ["Production and manufacturing", "Equipment maintenance", "Logistics and delivery"]], trend: ["Traçabilité des lots", "Batch traceability"] },
  { name: ["Énergie", "Energy"], chain: [["Contrats et souscription", "Paiement et facturation", "Réclamations et litiges"], ["Contracts and subscription", "Payment and invoicing", "Complaints and disputes"]], trend: ["Tarification à l’usage", "Usage-based pricing"] },
  { name: ["Distribution", "Retail"], chain: [["Approvisionnement et stocks", "Paiement et facturation", "Service et fidélisation"], ["Replenishment and stock", "Payment and invoicing", "Service and loyalty"]], trend: ["Paiement fractionné", "Split payment"] },
  { name: ["État et public", "Public sector"], chain: [["Relation aux usagers", "Demandes et dossiers"], ["Citizen relations", "Requests and cases"]], trend: ["Prise de rendez-vous en ligne", "Online appointment booking"] },
  { name: ["Transport aérien", "Air transport"], chain: [["Réservations et billetterie", "Opérations des vols", "Maintenance des équipements"], ["Bookings and ticketing", "Flight operations", "Equipment maintenance"]], trend: ["Géolocalisation des bagages", "Baggage geolocation"] },
  { name: ["Banque", "Banking"], chain: [["Financement des clients", "Garanties et sûretés", "Contractualisation du crédit"], ["Customer financing", "Guarantees and collateral", "Loan contracting"]], trend: ["Agrégation des comptes bancaires", "Bank account aggregation"] },
  { name: ["Assurance", "Insurance"], chain: [["Gestion des contrats d’assurance", "Gestion des sinistres", "Service et fidélisation"], ["Insurance contract management", "Claims management", "Service and loyalty"]], trend: ["Estimation des dommages par photo", "Photo-based damage estimation"] },
  { name: ["Santé", "Healthcare"], chain: [["Parcours de soins", "Paiement et facturation"], ["Care pathway", "Payment and invoicing"]], trend: ["Téléconsultation du patient", "Patient teleconsultation"] },
  { name: ["Services et conseil", "Services and consulting"], chain: [["Opérations métier", "Paiement et facturation", "Service et fidélisation"], ["Business operations", "Payment and invoicing", "Service and loyalty"]], trend: ["Facturation électronique", "E-invoicing"] },
];

type Plan = { name: string; for: string; price: string; unit: string; items: string[]; cta: string; href: string; featured?: boolean };

export const plans: Record<Locale, Plan[]> = {
  fr: [
    { name: "Solo", for: "Architecte indépendant, consultant", price: "79 €", unit: "HT / mois", items: ["Essai 14 jours, annulable en 1 clic", "1 utilisateur", "Stratégie, capacités, fonctionnelle, inter-applicatif, BPMN", "1 000 crédits d’analyse / mois"], cta: "Essayer 14 jours", href: PRICING },
    { name: "Socle (Équipe)", for: "Équipe d’architecture, DSI", price: "129 €", unit: "HT / utilisateur / mois", items: ["Organisation, membres et rôles", "Collaboration et revue", "Tout le périmètre Solo", "1 000 crédits d’analyse / utilisateur / mois"], cta: "Souscrire", href: PRICING, featured: true },
    { name: "Entreprise", for: "Groupe, cabinet, secteur public", price: "129 €", unit: "HT / utilisateur / mois + forfait dès 6 000 € HT / an", items: ["Toutes les options incluses", "Connecteurs au choix", "Accompagnement méthode", "Conditions contractuelles sur devis"], cta: "Nous contacter", href: "/fr/contact" },
  ],
  en: [
    { name: "Solo", for: "Independent architect, consultant", price: "€79", unit: "excl. VAT / month", items: ["14-day trial, cancel in 1 click", "1 user", "Strategy, capabilities, functional, integration, BPMN", "1,000 analysis credits / month"], cta: "Try 14 days", href: PRICING },
    { name: "Core (Team)", for: "Architecture team, IT department", price: "€129", unit: "excl. VAT / user / month", items: ["Organisation, members and roles", "Collaboration and review", "Everything in Solo", "1,000 analysis credits / user / month"], cta: "Subscribe", href: PRICING, featured: true },
    { name: "Enterprise", for: "Group, consulting firm, public sector", price: "€129", unit: "excl. VAT / user / month + platform fee from €6,000 / year", items: ["All options included", "Connectors of your choice", "Method support", "Contract terms on quotation"], cta: "Contact us", href: "/contact" },
  ],
};
