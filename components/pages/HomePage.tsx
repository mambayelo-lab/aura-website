import { ArrowRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/content/dictionary";
import { tr, type Detail } from "@/content/products";
import { appUrls, articleHref, routes, type Locale } from "@/lib/i18n";
import { whyAura } from "@/content/founder";
import { getArticles, isCase } from "@/content/articles";
import { ArticleCard, CtaBanner, SectionHead, ValueBlock, zoomLabels } from "../blocks";
import { ProductFilm } from "../ProductFilm";
import { HeroSignal } from "../HeroSignal";
import { DsiSection } from "../DsiSection";
import { ArchitectOffer } from "../ArchitectOffer";
import { CostTiles } from "../CostTiles";
import { ZoomCard } from "../zoom/ZoomCard";
import { localize } from "@/content/products";
import { homeValue } from "@/content/value";

const cardImages = {
  supply: "/images/aura/control-room.webp",
  decide: "/images/aura/ai-cadrage.webp",
  architect: "/images/aura/transformation.webp",
} as const;

const copy = {
  fr: {
    eyebrow: "Decision intelligence · résilience",
    filmEyebrow: "Le film",
    filmTitle: "Aura Supply Chain en 74 secondes",
    title: "Décisions prouvées : voir venir, comprendre, décider — et le prouver.",
    lead: "Un fournisseur qui décroche, un détroit qui se ferme, une pandémie qui déforme la demande. Aura Supply Chain repère le signal, mesure combien de temps votre chaîne tient, et vous fait trancher vite, sur des faits vérifiables, avec une trace à montrer.",
    primary: "Réserver un cadrage",
    secondary: "Voir les offres",
    trust: ["Des agents IA qui préparent l’arbitrage", "Un humain qui décide", "Une preuve à chaque décision"],
    thesisEyebrow: "Ce qui bloque vos décisions",
    thesisTitle: "Vous avez les données. Il vous manque le chemin jusqu’à la décision.",
    diEyebrow: "Decision Intelligence · repères Gartner",
    diLead: "La Decision Intelligence modélise les décisions pour les évaluer et les améliorer (Gartner). Aura en applique les principes : décisions modélisées, évaluation robuste, validation humaine.",
    diFacts: [
      ["50 %", "des décisions métier assistées ou automatisées par des agents d’IA d’ici 2027, selon Gartner.", "Gartner, juin 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-17-gartner-announces-top-data-and-analytics-predictions"],
      ["40 %+", "des projets d’IA agentique abandonnés d’ici fin 2027 : coûts, valeur floue, risques mal maîtrisés.", "Gartner, juin 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027"],
      ["5 %", "des organisations prendront au moins 10 % de leurs décisions de planification supply chain sans intervention humaine d’ici 2030.", "Gartner, sept. 2026", "https://www.gartner.com/en/newsroom/press-releases/2026-09-24-gartner-predicts-only-5-percent-of-organizations-will-make-at-least-10-percent-of-supply-chain-planning-decisions-autonomously-by-2030"],
    ],
    diMore: "Ce que dit Gartner, et où se situe Aura",
    founderName: "Mambaye Lo, fondateur",
    founderText: "Lead Enterprise Architect, Ph.D. 16 ans de transformations dans le retail, l’énergie, la banque et l’automobile. Parcours et travaux.",
    productsEyebrow: "Supply Chain, son moteur, et le volet DSI",
    productsTitle: "Supply Chain au centre, Décider comme moteur.",
    productsLead: "Supply Chain part de la douleur métier. Décider est le moteur explicable qui compare les options. Architect, pour les DSI et les architectes, transforme les choix qui s’imposent en trajectoire de SI.",
    pathEyebrow: "Une trajectoire, pas un big bang",
    pathTitle: "Décider maintenant, sans attendre une transformation de deux ans.",
    pathSteps: [
      ["Une décision coûteuse", "Vous partez de l’arbitrage qui vous coûte le plus aujourd’hui."],
      ["La valeur prouvée", "Options évaluées, décision signée, effet mesuré sur votre cas réel."],
      ["Les signaux récurrents", "Les alertes qui reviennent sont connectées à vos systèmes existants."],
      ["Le système transformé", "Les choix qui s’imposent deviennent une trajectoire d’architecture."],
    ],
    pathNote: "Des étapes séparées et réversibles : vous vous engagez pas à pas. Chaque décision (critères, hypothèses, points de bascule, résultats réels) enrichit une mémoire qui reste la vôtre.",
    trustEyebrow: "Confiance & gouvernance",
    trustTitle: "L’IA accélère. Vos équipes gardent la main.",
    trustLead: "Quatre engagements, identiques dans les trois applications.",
    scenarioEyebrow: "Scénario d’illustration",
    scenarioTitle: "Douze jours d’avance sur une rupture : à quoi ça ressemble ?",
    scenarioLead: "Exemple sur Maison Lucie, le SI synthétique de la démo Supply Chain. Chiffres fictifs.",
    scenarioSteps: [
      ["Signal", "Le délai annoncé par un fournisseur de composants passe de 21 à 34 jours (flux EDI)."],
      ["Règle", "Règle causale : délai fournisseur critique > seuil ET couverture composant < 15 jours."],
      ["Alerte", "Voyant orange : impact estimé sur le service dans 12 jours pour 2 références finies."],
      ["Décision", "Fiche préremplie : contexte, chiffres, options (réallocation, transport express, second fournisseur). L’équipe complète, choisit et signe."],
    ],
    scenarioCta: "Parcourir la démo Maison Lucie",
    offersEyebrow: "Deux façons de démarrer",
    offersTitle: "Un périmètre court, un livrable que vous gardez.",
    offers: [
      { name: "Stress-test résilience", impact: "Sachez combien de jours vous tenez si un fournisseur, un site ou une route tombe.", duration: "Environ 10 jours", question: "Combien de temps votre chaîne tient-elle si un nœud tombe ?", points: ["Carte d’exposition : fournisseurs, sites et routes", "Temps de survie (TTS) et temps de reprise (TTR) par nœud", "Nœuds critiques : ceux dont le TTR dépasse le TTS", "Plans B priorisés, à valider par vos équipes"] },
      { name: "Sprint Résilience", impact: "Quand la chaîne casse, vous perdez de l’argent tant qu’il n’y a pas de décision. Aura transforme l’alerte en arbitrage justifiable en quelques minutes, pas en quelques réunions.", duration: "4 à 6 semaines", question: "Des alertes causales sur vos données et des décisions signées.", points: ["Signaux et règles branchés sur vos flux", "Alertes qui annoncent l’impact avant la rupture", "Options comparées par le moteur de décision", "Décisions tracées dans un journal"] },
    ],
    offersCta: "Détail des offres",
    casesEyebrow: "Cas",
    casesTitle: "Deux chocs, sourcés et datés.",
    credLabel: "Références de méthode",
    cred: "Aura s’appuie sur des travaux publiés : TTS/TTR et stress-test des chaînes critiques (Simchi-Levi, MIT), entreprise résiliente (Sheffi, MIT CTL), équipes humain-IA (Sáenz, MIT CTL), et la thèse de son fondateur sur l’évaluation robuste de décisions. Ce sont des références, pas des partenariats.",
    engineEyebrow: "Notre moteur de décision",
    engineTitle: "Une décision explicable et traçable, au cœur de Supply et d’Architect.",
    engineLead: "Le même moteur évalue les options dans les deux produits. Des agents IA qui préparent l’arbitrage, un humain qui décide, une preuve à chaque décision.",
    engine: [
      ["La thèse", "Une méthode issue de travaux de thèse en évaluation d’architectures : chaque option est qualifiée par son potentiel d’amélioration et son risque de dégradation, sans pondérations arbitraires."],
      ["La preuve", "Chaque verdict garde ses critères, ses hypothèses, ses sources et la personne qui a signé. Six mois plus tard, la décision se relit et se défend."],
      ["Le plus petit changement", "Le moteur calcule ce qu’il faudrait changer, au minimum, pour que le choix bascule. Vous savez où le verdict est fragile avant de vous engager."],
    ],
    archEyebrow: "Pour les DSI",
    archTitle: "Aura Architect : transformer le SI sans perdre le fil des décisions.",
    archLead: "Pour les DSI, les architectes et les responsables de transformation, dans tous les secteurs : cartographie, architecture cible, feuille de route et spécification, avec le même moteur de décision pour trancher les choix d’architecture.",
    archCta: "Découvrir Aura Architect",
    archSprint: "Sprint Architecture, 2 à 4 semaines",
    archImpact: "Un grand programme SI dépasse son budget de 45 % en moyenne (McKinsey et Université d’Oxford). Aura rend visibles l’impact, les interfaces et les décisions avant l’engagement du budget, pas après.",
    productDetails: "Voir le produit",
    openApp: "Ouvrir l’app",
  },
  en: {
    eyebrow: "Decision intelligence · resilience",
    filmEyebrow: "The film",
    filmTitle: "Aura Supply Chain in 74 seconds",
    title: "Proven decisions: see it coming, understand, decide — and prove it.",
    lead: "A supplier that slips, a strait that closes, a pandemic that distorts demand. Aura Supply Chain picks up the signal, measures how long your chain can hold, and gets you to a decision fast, on verifiable facts, with a trail you can show.",
    primary: "Book a scoping call",
    secondary: "See the offers",
    trust: ["AI agents that prepare the trade-off", "A human who decides", "Proof for every decision"],
    thesisEyebrow: "What holds your decisions back",
    thesisTitle: "You have the data. What you lack is the path to a decision.",
    diEyebrow: "Decision Intelligence · Gartner benchmarks",
    diLead: "Decision Intelligence models decisions in order to evaluate and improve them (Gartner). Aura applies its principles: modelled decisions, robust evaluation, human validation.",
    diFacts: [
      ["50%", "of business decisions augmented or automated by AI agents by 2027, according to Gartner.", "Gartner, June 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-17-gartner-announces-top-data-and-analytics-predictions"],
      ["40%+", "of agentic AI projects canceled by the end of 2027: costs, unclear value, inadequate risk controls.", "Gartner, June 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027"],
      ["5%", "of organizations will make at least 10% of their supply chain planning decisions without human intervention by 2030.", "Gartner, Sept. 2026", "https://www.gartner.com/en/newsroom/press-releases/2026-09-24-gartner-predicts-only-5-percent-of-organizations-will-make-at-least-10-percent-of-supply-chain-planning-decisions-autonomously-by-2030"],
    ],
    diMore: "What Gartner says, and where Aura stands",
    founderName: "Mambaye Lo, founder",
    founderText: "Lead Enterprise Architect, Ph.D. 16 years of transformations across retail, energy, banking and automotive. Background and research.",
    productsEyebrow: "Supply Chain, its engine, and the IT side",
    productsTitle: "Supply Chain at the centre, Decide as the engine.",
    productsLead: "Supply Chain starts from the business pain. Decide is the explainable engine that compares the options. Architect, for CIOs and architects, turns the choices that stand the test into an IT roadmap.",
    pathEyebrow: "A trajectory, not a big bang",
    pathTitle: "Decide now, without waiting for a two-year transformation.",
    pathSteps: [
      ["One costly decision", "Start with the trade-off that costs you most today."],
      ["Value proven", "Options evaluated, decision signed, impact measured on your real case."],
      ["Recurring signals connected", "The alerts that keep coming back are wired to the systems you already run."],
      ["The system transformed", "The choices that stand the test become an architecture roadmap."],
    ],
    pathNote: "Separate, reversible steps: you commit one step at a time. Every decision (criteria, assumptions, tipping points, actual outcomes) builds a memory that stays yours.",
    trustEyebrow: "Trust & governance",
    trustTitle: "AI speeds things up. Your people stay in charge.",
    trustLead: "Four commitments, the same in all three applications.",
    scenarioEyebrow: "Illustrative scenario",
    scenarioTitle: "Twelve days ahead of a shortage: what does it look like?",
    scenarioLead: "Example on Maison Lucie, the synthetic system behind the Supply Chain demo. Fictional figures.",
    scenarioSteps: [
      ["Signal", "A component supplier’s announced lead time moves from 21 to 34 days (EDI feed)."],
      ["Rule", "Causal rule: critical supplier lead time > threshold AND component cover < 15 days."],
      ["Alert", "Amber light: estimated service impact in 12 days on 2 finished items."],
      ["Decision", "Pre-filled form: context, figures, options (reallocation, expedited freight, second source). The team completes it, chooses and signs."],
    ],
    scenarioCta: "Walk through the Maison Lucie demo",
    offersEyebrow: "Two ways to start",
    offersTitle: "A short scope, a deliverable you keep.",
    offers: [
      { name: "Resilience stress test", impact: "Know how many days you can hold if a supplier, a site or a route goes down.", duration: "About 10 days", question: "How long can your chain hold if a node goes down?", points: ["Exposure map: suppliers, sites and routes", "Time-to-survive (TTS) and time-to-recover (TTR) per node", "Critical nodes: those whose TTR exceeds their TTS", "Prioritised fallback plans, for your teams to validate"] },
      { name: "Resilience Sprint", impact: "When the chain breaks, you lose money for as long as no decision is made. Aura turns the alert into a defensible trade-off in minutes, not in meetings.", duration: "4 to 6 weeks", question: "Causal alerts on your data and signed decisions.", points: ["Signals and rules wired to your flows", "Alerts that show the impact before the shortage", "Options compared by the decision engine", "Decisions traced in a log"] },
    ],
    offersCta: "Offer details",
    casesEyebrow: "Cases",
    casesTitle: "Two shocks, sourced and dated.",
    credLabel: "Methodological references",
    cred: "Aura builds on published work: TTS/TTR and stress tests for critical supply chains (Simchi-Levi, MIT), the resilient enterprise (Sheffi, MIT CTL), human-AI teaming (Sáenz, MIT CTL), and its founder’s doctoral research on robust decision evaluation. These are references, not partnerships.",
    engineEyebrow: "Our decision engine",
    engineTitle: "Explainable, traceable decisions, at the heart of Supply and Architect.",
    engineLead: "The same engine evaluates options in both products. AI agents prepare the trade-off, a human decides, every decision comes with proof.",
    engine: [
      ["The research", "A method drawn from doctoral research on architecture evaluation: each option is rated by its improvement potential and its risk of degradation, with no arbitrary weights."],
      ["The proof", "Every verdict keeps its criteria, assumptions, sources and the person who signed it. Six months later, the decision can be re-read and defended."],
      ["The smallest change", "The engine computes the minimum change that would flip the choice. You know where the verdict is fragile before you commit."],
    ],
    archEyebrow: "For CIOs",
    archTitle: "Aura Architect: transform your IT without losing track of decisions.",
    archLead: "For CIOs, architects and transformation leads, in every industry: mapping, target architecture, roadmap and specification, with the same decision engine to settle architecture choices.",
    archCta: "Discover Aura Architect",
    archSprint: "Architecture Sprint, 2 to 4 weeks",
    archImpact: "A large IT programme runs 45% over budget on average (McKinsey and University of Oxford). Aura makes the impact, interfaces and decisions visible before the budget is committed, not after.",
    productDetails: "See the product",
    openApp: "Open the app",
  },
};

const trust: Detail[] = [
  {
    id: "t-human",
    title: ["Validation humaine", "Human validation"],
    summary: ["L’IA propose ; des personnes identifiées valident et signent.", "AI proposes; named people validate and sign."],
    body: [
      [
        "Mapping sémantique, règles, verdicts, choix d’architecture : aucune suggestion de l’IA n’est appliquée sans validation explicite d’une personne identifiée.",
        "Semantic mapping, rules, verdicts, architecture choices: no AI suggestion is applied without explicit validation by an identified person.",
      ],
    ],
    flow: [["Suggestion IA", "AI suggestion"], ["Revue", "Review"], ["Validation", "Validation"], ["Trace", "Trace"]],
  },
  {
    id: "t-trace",
    title: ["Traçabilité", "Traceability"],
    summary: ["Six mois plus tard, vous savez encore qui a décidé, quand et pourquoi.", "Six months on, you still know who decided, when and why."],
    body: [
      [
        "Qui a décidé, quand, sur quelles données ou hypothèses, avec quelle version de règle : la réponse est dans l’application, pas dans la mémoire d’une réunion.",
        "Who decided, when, on which data or assumptions, with which rule version: the answer is in the application, not in the memory of a meeting.",
      ],
    ],
  },
  {
    id: "t-nodata",
    title: ["Aucune donnée inventée", "No invented data"],
    summary: ["Pas de chiffre plausible et faux : les alertes viennent de règles sur vos données réelles.", "No plausible but wrong figures: alerts come from rules on your real data."],
    body: [
      [
        "Un modèle de langage peut produire un chiffre plausible et faux. Chez Aura, il n’en a pas le droit : les alertes viennent de règles explicites, les hypothèses sont déclarées comme telles, et les démos tournent sur un SI synthétique clairement identifié.",
        "A language model can produce a plausible, wrong figure. At Aura it is not allowed to: alerts come from explicit rules, assumptions are declared as such, and demos run on a clearly labelled synthetic system.",
      ],
    ],
  },
  {
    id: "t-sovereign",
    title: ["Souveraineté", "Sovereignty"],
    summary: ["Hébergement et modèle d’IA décidés avec vous, options européennes comprises.", "Hosting and AI model decided with you, European options included."],
    body: [
      [
        "Aura lit vos sources plutôt que de tout copier. Le lieu d’hébergement, le modèle de langage utilisé et la conservation des données sont décidés avec vous, y compris des options souveraines européennes.",
        "Aura reads your sources rather than copying everything. Hosting location, language model and data retention are decided with you, including European sovereign options.",
      ],
    ],
  },
];

export function HomePage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const dict = getDictionary(locale);
  const labels = zoomLabels(dict);
  const r = routes[locale];
  const cases = getArticles(locale).filter(isCase);

  return (
    <>
      <section className="hero dark">
        <div className="hero-photo" aria-hidden>
          <Image src="/images/aura/earth-network.webp" alt="" fill priority sizes="100vw" />
        </div>
        <div className="hero-backdrop" aria-hidden />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-pill">{c.eyebrow}</p>
            <h1 className="display display-promise">{c.title}</h1>
            <p className="lead lead-lg">{c.lead}</p>
            <div className="actions">
              <Link className="btn btn-ink btn-lg" href={r.contact}>
                {c.primary} <ArrowRight size={17} aria-hidden />
              </Link>
              <Link className="btn btn-secondary btn-lg" href="#offers">
                {c.secondary}
              </Link>
            </div>
            <ul className="trust-list">
              {c.trust.map((item) => (
                <li key={item}>
                  <CircleCheck size={16} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <HeroSignal locale={locale} />
        </div>
      </section>

      <section className="section section-tight film-section" id="film">
        <div className="container">
          <SectionHead eyebrow={c.filmEyebrow} title={c.filmTitle} />
          <ProductFilm locale={locale} film="supply" />
        </div>
      </section>

      <CostTiles locale={locale} />

      <section className="section section-tight section-alt" id="offers">
        <div className="container">
          <SectionHead eyebrow={c.offersEyebrow} title={c.offersTitle} />
          <div className="grid-2 offer-grid">
            {c.offers.map((offer) => (
              <article key={offer.name} className="offer-card" data-product="supply">
                <p className="sprint-duration mono">{offer.duration}</p>
                <h3>{offer.name}</h3>
                <p className="lead">{offer.question}</p>
                <p className="impact-line">{offer.impact}</p>
                <ul className="check-list">
                  {offer.points.map((point) => (
                    <li key={point}>
                      <CircleCheck size={15} aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="actions">
            <Link className="btn btn-primary" href={r.contact}>
              {c.primary} <ArrowRight size={16} aria-hidden />
            </Link>
            <Link className="btn btn-secondary" href={`${r.sprints}#stress-test`}>
              {c.offersCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-tight" id="cases">
        <div className="container">
          <SectionHead eyebrow={c.casesEyebrow} title={c.casesTitle} />
          <div className="grid-2">
            {cases.map((article) => (
              <ArticleCard key={article.slug} article={article} locale={locale} dict={dict} />
            ))}
          </div>
          <p className="cred-line">
            <strong>{c.credLabel}.</strong> {c.cred}
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container thesis">
          <div className="thesis-aside">
            <SectionHead eyebrow={c.thesisEyebrow} title={c.thesisTitle} />
          </div>
          <div>
            <ol className="thesis-list">
              {whyAura.map((item, index) => (
                <li key={item.id}>
                  <span className="mono">0{index + 1}</span>
                  <h3>{tr(item.title, locale)}</h3>
                  <p>{tr(item.short, locale)}</p>
                </li>
              ))}
            </ol>
            <aside className="di-facts" aria-label={c.diEyebrow}>
              <p className="eyebrow">{c.diEyebrow}</p>
              <ul>
                {c.diFacts.map(([figure, text, source, href]) => (
                  <li key={href}>
                    <strong>{figure}</strong>
                    <span>{text}</span>
                    <small>
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {source}
                      </a>
                    </small>
                  </li>
                ))}
              </ul>
              <Link className="text-link" href={articleHref(locale, "decision-intelligence-gartner-aura")}>
                {c.diMore} <ArrowRight size={15} aria-hidden />
              </Link>
            </aside>
            <Link className="founder-teaser" href={r.founder}>
              <Image className="founder-teaser-photo" src="/images/founder/mambaye-lo.webp" alt={locale === "fr" ? "Portrait de Mambaye Lo, fondateur d’Aura" : "Portrait of Mambaye Lo, founder of Aura"} width={56} height={56} />
              <span>
                <strong>{c.founderName}</strong>
                <small>{c.founderText}</small>
              </span>
              <ArrowRight size={17} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt" id={locale === "fr" ? "moteur" : "engine"}>
        <div className="container">
          <SectionHead eyebrow={c.engineEyebrow} title={c.engineTitle} lead={c.engineLead} />
          <div className="grid-3">
            {c.engine.map(([title, text]) => (
              <article key={title} className="offer-card">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="path">
            <div className="path-head">
              <p className="eyebrow">{c.pathEyebrow}</p>
              <h3>{c.pathTitle}</h3>
            </div>
            <ol className="path-steps">
              {c.pathSteps.map(([title, text], index) => (
                <li key={title}>
                  <span className="mono">0{index + 1}</span>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-tight" id="dsi-architect" data-product="architect">
        <div className="container arch-teaser">
          <figure className="media media-wide hide-mobile" aria-hidden>
            <Image src={cardImages.architect} alt="" fill sizes="(max-width: 980px) 100vw, 480px" />
          </figure>
          <div>
            <SectionHead eyebrow={c.archEyebrow} title={c.archTitle} lead={c.archLead} />
            <p className="sprint-duration mono">{c.archSprint}</p>
            <p className="impact-line">{c.archImpact}</p>
            <ArchitectOffer locale={locale} />
            <div className="actions">
              <Link className="btn btn-primary" href={r.architect}>
                {c.archCta} <ArrowRight size={16} aria-hidden />
              </Link>
              <Link className="btn btn-secondary" href={`${r.sprints}#architecture`}>
                {c.offersCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DsiSection locale={locale} summary href={r.supply} />

      <section className="section">
        <div className="container">
          <ValueBlock value={homeValue} locale={locale} />
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <SectionHead eyebrow={c.trustEyebrow} title={c.trustTitle} lead={c.trustLead} />
          <div className="grid-4">
            {trust.map((item) => (
              <ZoomCard key={item.id} variant="compact" labels={labels} detail={localize(item, locale)} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight section-alt">
        <div className="container scenario">
          <div>
            <SectionHead eyebrow={c.scenarioEyebrow} title={c.scenarioTitle} lead={c.scenarioLead} />
            <ol className="scenario-steps" data-product="supply">
              {c.scenarioSteps.map(([label, text], index) => (
                <li key={label}>
                  <span className={`status-dot ${index === 2 ? "status-warn" : index === 3 ? "status-ok" : "status-info"}`} aria-hidden />
                  <div>
                    <strong>{label}</strong>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a className="text-link" href={appUrls.supply} target="_blank" rel="noopener">
              {c.scenarioCta} <ArrowRight size={15} aria-hidden />
            </a>
          </div>
          <figure className="scenario-visual media hide-mobile">
            <Image
              src="/images/aura/port-night.webp"
              alt={
                locale === "fr"
                  ? "Portiques de chargement et porte-conteneurs à quai, de nuit, sous un ciel indigo"
                  : "Loading cranes and container ships at the quay at night, under an indigo sky"
              }
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
            />
            <figcaption>
              <span className="badge">{dict.common.illustrative}</span>
            </figcaption>
          </figure>
        </div>
      </section>


      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
