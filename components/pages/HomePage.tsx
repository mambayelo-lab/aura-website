import { ArrowRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/content/dictionary";
import { productOrder, products, sprints, tr, type Detail } from "@/content/products";
import { appUrls, articleHref, routes, type Locale } from "@/lib/i18n";
import { whyAura } from "@/content/founder";
import { CtaBanner, SectionHead, ValueBlock, productIcons, zoomLabels } from "../blocks";
import { ProductFilm } from "../ProductFilm";
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
    eyebrow: "Intelligence décisionnelle",
    title: "Décidez plus tôt. Défendez chaque décision.",
    lead: "Un risque vu trop tard, un arbitrage qui divise le comité, une transformation qui dérive. Aura vous fait trancher vite, sur des faits vérifiables, avec une trace à montrer. On commence par un sprint court, sur votre problème réel.",
    primary: "Par où commencer ?",
    secondary: "Comparer les sprints",
    trust: ["Validation humaine", "Aucune donnée inventée", "Raisonnement traçable"],
    thesisEyebrow: "Ce qui bloque vos décisions",
    thesisTitle: "Vous avez les données. Il vous manque le chemin jusqu’à la décision.",
    diEyebrow: "Decision Intelligence · repères Gartner",
    diLead: "La Decision Intelligence modélise les décisions pour les évaluer et les améliorer (Gartner). Aura en applique les principes : décisions modélisées, évaluation robuste, validation humaine.",
    diFacts: [
      ["50 %", "des décisions métier assistées ou automatisées par des agents d’IA d’ici 2027, selon Gartner.", "Gartner, juin 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-17-gartner-announces-top-data-and-analytics-predictions"],
      ["40 %+", "des projets d’IA agentique abandonnés d’ici fin 2027 : coûts, valeur floue, risques mal maîtrisés.", "Gartner, juin 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027"],
      ["5 %", "des organisations prendront au moins 10 % de leurs décisions de planification supply chain en autonomie d’ici 2030.", "Gartner, sept. 2026", "https://www.gartner.com/en/newsroom/press-releases/2026-09-24-gartner-predicts-only-5-percent-of-organizations-will-make-at-least-10-percent-of-supply-chain-planning-decisions-autonomously-by-2030"],
    ],
    diMore: "Ce que dit Gartner, et où se situe Aura",
    founderName: "Mambaye Lo, fondateur",
    founderText: "Lead Enterprise Architect, Ph.D. 16 ans de transformations dans le retail, l’énergie, la banque et l’automobile. Parcours et travaux.",
    productsEyebrow: "Trois problèmes, trois réponses",
    productsTitle: "Une application dédiée à chaque situation, sans chevauchement.",
    productsLead: "Trois applications indépendantes. Supply Chain part de la douleur métier, Décider est le moteur explicable, Architect transforme le choix en exécution. Chaque carte indique le sprint pour démarrer.",
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
    productDetails: "Voir le produit",
    openApp: "Ouvrir l’app",
  },
  en: {
    eyebrow: "Decision intelligence",
    title: "Decide earlier. Defend every decision.",
    lead: "A risk spotted too late, a call that splits the committee, a transformation that drifts. Aura gets you to a decision fast, on verifiable facts, with a trail you can show. You start with a short sprint, on your real problem.",
    primary: "Where should I start?",
    secondary: "Compare the sprints",
    trust: ["Human validation", "No invented data", "Traceable reasoning"],
    thesisEyebrow: "What holds your decisions back",
    thesisTitle: "You have the data. What you lack is the path to a decision.",
    diEyebrow: "Decision Intelligence · Gartner benchmarks",
    diLead: "Decision Intelligence models decisions in order to evaluate and improve them (Gartner). Aura applies its principles: modelled decisions, robust evaluation, human validation.",
    diFacts: [
      ["50%", "of business decisions augmented or automated by AI agents by 2027, according to Gartner.", "Gartner, June 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-17-gartner-announces-top-data-and-analytics-predictions"],
      ["40%+", "of agentic AI projects canceled by the end of 2027: costs, unclear value, inadequate risk controls.", "Gartner, June 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027"],
      ["5%", "of organizations will make at least 10% of their supply chain planning decisions autonomously by 2030.", "Gartner, Sept. 2026", "https://www.gartner.com/en/newsroom/press-releases/2026-09-24-gartner-predicts-only-5-percent-of-organizations-will-make-at-least-10-percent-of-supply-chain-planning-decisions-autonomously-by-2030"],
    ],
    diMore: "What Gartner says, and where Aura stands",
    founderName: "Mambaye Lo, founder",
    founderText: "Lead Enterprise Architect, Ph.D. 16 years of transformations across retail, energy, banking and automotive. Background and research.",
    productsEyebrow: "Three problems, three answers",
    productsTitle: "One dedicated application for each situation, with no overlap.",
    productsLead: "Three stand-alone applications. Supply Chain starts from the business pain, Decide is the explainable engine, Architect turns the choice into execution. Each card shows the sprint to start with.",
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
            <h1 className="display">{c.title}</h1>
            <p className="lead lead-lg">{c.lead}</p>
            <div className="actions">
              <a className="btn btn-ink btn-lg" href="#products">
                {c.primary} <ArrowRight size={17} aria-hidden />
              </a>
              <Link className="btn btn-secondary btn-lg" href={r.sprints}>
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
          <ProductFilm locale={locale} />
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
              <p className="di-facts-lead">{c.diLead}</p>
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

      <section className="section section-alt" id="products">
        <div className="container">
          <SectionHead eyebrow={c.productsEyebrow} title={c.productsTitle} lead={c.productsLead} />
          <div className="grid-3 product-grid">
            {productOrder.map((key) => {
              const p = products[key];
              const s = sprints[p.sprint];
              const Icon = productIcons[key];
              return (
                <ZoomCard
                  key={key}
                  product={key}
                  labels={labels}
                  className="product-card"
                  media={
                    <figure className="media media-wide" aria-hidden>
                      <Image src={cardImages[key]} alt="" fill sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 400px" />
                    </figure>
                  }
                  detail={{
                    id: key,
                    kicker: tr(p.trigger, locale),
                    title: tr(p.name, locale),
                    summary: tr(p.tagline, locale),
                    body: [tr(p.lead, locale), tr(p.question, locale)],
                    flow: p.journey.steps.map((step) => tr(step.title, locale)),
                    points: [
                      `${locale === "fr" ? "Sprint associé : " : "Matching sprint: "}${tr(s.name, locale)} (${tr(s.duration, locale)})`,
                      `${locale === "fr" ? "Livrable : " : "Deliverable: "}${tr(s.outcome, locale)}`,
                      ...p.audience.slice(0, 2).map((a) => tr(a, locale)),
                    ],
                  }}
                  panelFooter={
                    <div className="actions">
                      <Link className="btn btn-primary" href={r[key]}>
                        {c.productDetails} <ArrowRight size={16} aria-hidden />
                      </Link>
                      <a className="btn btn-secondary" href={appUrls[key]} target="_blank" rel="noopener">
                        {c.openApp}
                      </a>
                    </div>
                  }
                  footer={
                    <>
                      {p.who && <p className="card-who">{tr(p.who, locale)}</p>}
                      <span className="product-card-icon" aria-hidden>
                        <Icon size={20} />
                      </span>
                      <Link className="text-link" href={r[key]}>
                        {c.productDetails} <ArrowRight size={15} aria-hidden />
                      </Link>
                      <a className="text-link text-link-muted" href={appUrls[key]} target="_blank" rel="noopener">
                        {c.openApp}
                      </a>
                    </>
                  }
                />
              );
            })}
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
            <p className="path-note">{c.pathNote}</p>
          </div>
        </div>
      </section>

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
