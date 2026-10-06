/**
 * Compléments Aura Architect : répartition automatisation / modèle de langage / décision humaine,
 * libre-service, et rubrique Ressources (articles de méthode courts, rédigés en interne, sans citation d'auteur).
 */
import type { Locale } from "@/lib/i18n";

export const selfServe = {
  fr: {
    trial: "Démarrer l’essai de 14 jours",
    subscribe: "Souscrire",
    platform: "Accéder à la plateforme",
    contact: "Nous contacter",
    eyebrow: "En libre-service",
    title: "Commencez maintenant, sans installation ni rendez-vous.",
    lead: "Aura Architect et la Decisions Control Tower sont des services en ligne en libre-service : vous démarrez l’essai, vous souscrivez quand vous êtes prêt, et vous travaillez directement sur la plateforme. Un contact n’est utile que pour l’offre Entreprise.",
    steps: ["Démarrer l’essai de 14 jours", "Souscrire", "Accéder à la plateforme"],
    enterprise: "Offre Entreprise : conditions contractuelles et connecteurs sur devis.",
  },
  en: {
    trial: "Start 14-day trial",
    subscribe: "Subscribe",
    platform: "Go to the platform",
    contact: "Contact us",
    eyebrow: "Self-service",
    title: "Start now, with no installation and no meeting first.",
    lead: "Aura Architect and the Decisions Control Tower are self-service online services: you start the trial, subscribe when you are ready, and work directly on the platform. Contact is only needed for the Enterprise plan.",
    steps: ["Start 14-day trial", "Subscribe", "Go to the platform"],
    enterprise: "Enterprise plan: contract terms and connectors on quotation.",
  },
} as const;

type Pair = readonly [string, string];

export const placement: Record<Locale, { eyebrow: string; title: string; lead: string; kinds: { name: string; when: string; example: string }[]; note: string }> = {
  fr: {
    eyebrow: "Le bon outil pour chaque fonction",
    title: "Où placer l’automatisation, le modèle de langage et l’humain",
    lead: "Pour chaque fonction de votre architecture, Aura indique simplement ce qui convient le mieux : des règles automatisées, un modèle de langage encadré, ou une décision humaine. Chaque recommandation est justifiée et reste modifiable.",
    kinds: [
      { name: "Règles automatisées", when: "Quand le résultat attendu est connu, stable et vérifiable : contrôles, calculs, seuils, routage.", example: "Vérifier qu’une commande respecte les plafonds autorisés." },
      { name: "Modèle de langage encadré", when: "Quand il faut lire, résumer ou rédiger à partir de textes variés, avec des règles qui vérifient la sortie et un humain qui relit.", example: "Extraire les éléments clés d’un courrier entrant pour préparer son traitement." },
      { name: "Décision humaine", when: "Quand l’enjeu engage la responsabilité, touche des personnes ou dépend d’un arbitrage entre objectifs.", example: "Accepter une dérogation, arbitrer entre coût et service." },
    ],
    note: "La recommandation part de la nature de chaque fonction ; elle ne s’applique qu’après votre validation.",
  },
  en: {
    eyebrow: "The right tool for each function",
    title: "Where automation, language models and people each belong",
    lead: "For each function in your architecture, Aura simply indicates what fits best: automated rules, a supervised language model, or a human decision. Each recommendation is explained and remains editable.",
    kinds: [
      { name: "Automated rules", when: "When the expected result is known, stable and verifiable: checks, calculations, thresholds, routing.", example: "Checking that an order stays within authorised limits." },
      { name: "Supervised language model", when: "When text of varying form must be read, summarised or drafted, with rules that check the output and a person who reviews it.", example: "Extracting the key points of an incoming letter to prepare its handling." },
      { name: "Human decision", when: "When the stakes carry accountability, affect people or depend on a trade-off between objectives.", example: "Granting an exception, arbitrating between cost and service." },
    ],
    note: "The recommendation starts from the nature of each function; nothing is applied until you validate it.",
  },
};

export type Resource = { slug: string; title: string; standfirst: string; body: string[]; points: string[] };

export const resourcesIntro: Record<Locale, { eyebrow: string; title: string; lead: string; read: string; all: string; back: string; points: string }> = {
  fr: {
    eyebrow: "Ressources",
    title: "Trois notes de méthode, courtes et pratiques.",
    lead: "La démarche qu’Aura Architect applique, expliquée simplement, pour que vous puissiez la relire et la discuter.",
    read: "Lire",
    all: "Toutes les ressources",
    back: "Retour à Aura Architect",
    points: "À retenir",
  },
  en: {
    eyebrow: "Resources",
    title: "Three short, practical method notes.",
    lead: "The approach Aura Architect applies, explained simply, so that you can review it and discuss it.",
    read: "Read",
    all: "All resources",
    back: "Back to Aura Architect",
    points: "Key points",
  },
};

export const resources: Record<Locale, Resource[]> = {
  en: [
    {
      slug: "stakeholders-to-capabilities",
      title: "From stakeholders to capabilities: deriving a capability map from use cases and operational scenarios",
      standfirst: "A capability map is only useful if each capability can say who it serves and why. Starting from stakeholders keeps it honest.",
      body: [
        "Many capability maps are drawn from an organisation chart or a list of applications. They look complete, but nobody can say which need a given box serves. The result is hard to defend and hard to prioritise.",
        "Start instead with the stakeholders: customers, users, partners, regulators, internal teams. For each one, write down what they expect, in their own words. These expectations are the needs the architecture must answer.",
        "Then turn each need into a use case, and each use case into an operational scenario: a short sequence of steps describing how the need is actually met, who acts, and what information moves. The steps of these scenarios are the functions the organisation must be able to perform.",
        "Group those functions by what they achieve, not by who performs them today. Each group becomes a capability. Order the capabilities along the value chain, from the first contact to the delivered result, and keep the top level small enough to read at a glance.",
        "Finally, keep the links. Each capability should state which need it serves, through which use case and scenario. When a need has no capability, or a capability serves no need, the map shows it immediately, and the discussion moves from opinions to facts.",
      ],
      points: [
        "Needs come from stakeholders, in their own vocabulary.",
        "Scenario steps reveal the functions to cover.",
        "Capabilities group functions by outcome, ordered along the value chain.",
        "Every capability keeps its link back to a need.",
      ],
    },
    {
      slug: "rules-first",
      title: "Rules first, language models where judgment is needed",
      standfirst: "Not every function needs the same kind of tool. Choosing well starts with asking what the function really requires.",
      body: [
        "When a new process is designed, it is tempting to apply the most recent technology everywhere. In practice, most functions are better served by something simpler, more predictable and easier to audit.",
        "Start with rules. If the expected result can be written down, checked and repeated, automated rules are the right answer: validations, calculations, thresholds, routing. They are fast, cheap, and their behaviour can be explained line by line.",
        "Use a language model where the input is text of varying form and some interpretation is needed: reading a letter, summarising a file, drafting a reply. Keep it supervised: rules check what it produces, its sources are visible, and a person reviews the output before it has any effect.",
        "Keep the decision with a person when the stakes carry accountability, affect people directly, or require a trade-off between objectives. The tools prepare the decision; they do not take it.",
        "Making this choice function by function, and writing down why, gives a design that is easier to defend, cheaper to run and simpler to change when needs evolve.",
      ],
      points: [
        "Known, verifiable result: automated rules.",
        "Varied text that needs interpretation: a supervised language model, checked and reviewed.",
        "Accountability or trade-offs: a human decision.",
        "Record the reason for each choice.",
      ],
    },
    {
      slug: "options-to-okrs",
      title: "From options to OKRs: testing an idea’s systemic coherence before committing",
      standfirst: "An idea can look excellent on its own and still disrupt the rest of the system. Test it on the whole model before committing budget and teams.",
      body: [
        "A transformation idea usually arrives as a single proposal: a new platform, a merged process, an outsourced activity. Judged alone, it often looks convincing. Its cost appears elsewhere: in a capability that loses support, a flow that breaks, a team that gains work.",
        "Begin by stating the options explicitly, including doing nothing. For each one, list what it changes: which capabilities, applications, flows and requirements are affected. Unknowns are written down as unknowns, not hidden.",
        "Compare the options on the same criteria: value delivered, cost, risk, time, and effect on the needs the architecture serves. Read upside and risk together; an unknown counts as a risk until it is confirmed.",
        "Once an option is chosen, record the decision and its reasons, then translate it into objectives and key results tied to the value chain. Each key result should be measurable and linked to the capability it improves.",
        "The action plan follows from these results. If later results drift, the record shows which assumption to revisit, and the model shows what else would be affected by a change of course.",
      ],
      points: [
        "Name the options, including doing nothing.",
        "Trace each option’s effects across the whole model.",
        "Compare on shared criteria; unknowns count as risk.",
        "Turn the chosen option into measurable objectives tied to capabilities.",
      ],
    },
  ],
  fr: [
    {
      slug: "parties-prenantes-capacites",
      title: "Des parties prenantes aux capacités : dériver une carte de capacités des cas d’usage et des scénarios opérationnels",
      standfirst: "Une carte de capacités n’est utile que si chaque capacité peut dire qui elle sert et pourquoi. Partir des parties prenantes la rend honnête.",
      body: [
        "Beaucoup de cartes de capacités sont tirées d’un organigramme ou d’une liste d’applications. Elles paraissent complètes, mais personne ne sait dire quel besoin sert telle case. Le résultat est difficile à défendre et à prioriser.",
        "Partez plutôt des parties prenantes : clients, usagers, partenaires, autorités, équipes internes. Pour chacune, notez ce qu’elle attend, avec ses propres mots. Ces attentes sont les besoins auxquels l’architecture doit répondre.",
        "Transformez ensuite chaque besoin en cas d’usage, et chaque cas d’usage en scénario opérationnel : une courte suite d’étapes qui décrit comment le besoin est réellement servi, qui agit et quelle information circule. Les étapes de ces scénarios sont les fonctions que l’organisation doit savoir assurer.",
        "Regroupez ces fonctions selon ce qu’elles produisent, et non selon qui les exécute aujourd’hui. Chaque groupe devient une capacité. Ordonnez les capacités le long de la chaîne de valeur, du premier contact au résultat livré, et gardez un premier niveau assez court pour se lire d’un coup d’œil.",
        "Enfin, conservez les liens. Chaque capacité indique quel besoin elle sert, par quel cas d’usage et quel scénario. Quand un besoin n’a pas de capacité, ou qu’une capacité ne sert aucun besoin, la carte le montre aussitôt, et la discussion passe des opinions aux faits.",
      ],
      points: [
        "Les besoins viennent des parties prenantes, dans leur vocabulaire.",
        "Les étapes des scénarios révèlent les fonctions à couvrir.",
        "Les capacités regroupent les fonctions par résultat, le long de la chaîne de valeur.",
        "Chaque capacité garde son lien vers un besoin.",
      ],
    },
    {
      slug: "regles-d-abord",
      title: "Les règles d’abord, le modèle de langage là où il faut du discernement",
      standfirst: "Toutes les fonctions n’appellent pas le même outil. Bien choisir commence par se demander ce que la fonction exige vraiment.",
      body: [
        "Quand on conçoit un nouveau processus, la tentation est d’appliquer partout la technologie la plus récente. En pratique, la plupart des fonctions sont mieux servies par quelque chose de plus simple, de plus prévisible et de plus facile à auditer.",
        "Commencez par les règles. Si le résultat attendu peut s’écrire, se vérifier et se répéter, des règles automatisées sont la bonne réponse : contrôles, calculs, seuils, routage. Elles sont rapides, peu coûteuses, et leur comportement s’explique ligne à ligne.",
        "Utilisez un modèle de langage quand l’entrée est un texte de forme variable et qu’il faut l’interpréter : lire un courrier, résumer un dossier, préparer une réponse. Gardez-le encadré : des règles contrôlent ce qu’il produit, ses sources sont visibles, et une personne relit avant tout effet.",
        "Laissez la décision à une personne quand l’enjeu engage une responsabilité, touche directement des personnes ou demande d’arbitrer entre des objectifs. Les outils préparent la décision ; ils ne la prennent pas.",
        "Faire ce choix fonction par fonction, en écrivant pourquoi, donne une conception plus facile à défendre, moins chère à exploiter et plus simple à faire évoluer.",
      ],
      points: [
        "Résultat connu et vérifiable : des règles automatisées.",
        "Texte varié à interpréter : un modèle de langage encadré, contrôlé et relu.",
        "Responsabilité ou arbitrage : une décision humaine.",
        "Consigner la raison de chaque choix.",
      ],
    },
    {
      slug: "options-okr",
      title: "Des options aux OKR : tester la cohérence systémique d’une idée avant de s’engager",
      standfirst: "Une idée peut sembler excellente isolément et pourtant perturber le reste du système. Testez-la sur l’ensemble du modèle avant d’engager budget et équipes.",
      body: [
        "Une idée de transformation arrive souvent sous la forme d’une proposition unique : une nouvelle plateforme, un processus fusionné, une activité externalisée. Jugée seule, elle convainc. Son coût apparaît ailleurs : une capacité qui perd son support, un flux qui se rompt, une équipe qui hérite de travail.",
        "Commencez par énoncer les options explicitement, y compris ne rien faire. Pour chacune, listez ce qu’elle change : capacités, applications, flux et exigences concernés. Ce qui est inconnu est écrit comme tel, pas masqué.",
        "Comparez les options sur les mêmes critères : valeur apportée, coût, risque, délai, et effet sur les besoins que sert l’architecture. Lisez gain et risque ensemble ; un inconnu compte comme un risque tant qu’il n’est pas confirmé.",
        "Une fois l’option retenue, consignez la décision et ses raisons, puis traduisez-la en objectifs et résultats clés reliés à la chaîne de valeur. Chaque résultat clé est mesurable et rattaché à la capacité qu’il améliore.",
        "Le plan d’action découle de ces résultats. Si les résultats dérivent, la trace indique quelle hypothèse revoir, et le modèle montre ce qu’un changement de cap affecterait.",
      ],
      points: [
        "Nommer les options, y compris ne rien faire.",
        "Suivre les effets de chaque option sur tout le modèle.",
        "Comparer sur des critères communs ; l’inconnu compte comme un risque.",
        "Traduire l’option retenue en objectifs mesurables reliés aux capacités.",
      ],
    },
  ],
};

export type { Pair };
