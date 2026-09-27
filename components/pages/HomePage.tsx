import { ArrowRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/content/articles";
import { getDictionary } from "@/content/dictionary";
import { productOrder, products, sprints, tr, type Detail } from "@/content/products";
import { appUrls, routes, type Locale } from "@/lib/i18n";
import { ArticleCard, CtaBanner, SectionHead, entryOptions, productIcons, selectorLabels, zoomLabels } from "../blocks";
import { EntrySelector } from "../EntrySelector";
import { HeroSignal } from "../HeroSignal";
import { ZoomCard } from "../zoom/ZoomCard";
import { localize } from "@/content/products";

const copy = {
  fr: {
    eyebrow: "Intelligence décisionnelle · 3 applications",
    title: "Du signal à la décision que vous pouvez défendre.",
    lead: "Aura réunit trois applications distinctes — Supply Chain, Décider, Architect — pour trois situations différentes : un signal dans vos données, une question stratégique, un programme de transformation. Chacune commence par un sprint court et se termine par une décision traçable, validée par des humains.",
    primary: "Trouver mon point d’entrée",
    secondary: "Comparer les sprints",
    trust: ["Validation humaine", "Aucune donnée inventée", "Raisonnement traçable"],
    thesisEyebrow: "Notre thèse",
    thesisTitle: "Les organisations ne manquent pas de données. Elles manquent de décisions explicites.",
    thesis: [
      ["Le signal", "Vos systèmes voient déjà les événements. Ce qui manque, c’est la règle qui dit pourquoi un événement compte — et pour qui."],
      ["Le raisonnement", "Une décision robuste sépare ce qu’on sait, ce qu’on suppose et ce qu’on ignore. L’IA prépare ; elle ne tranche pas."],
      ["La trace", "Une décision qu’on ne peut pas relire dans six mois n’a pas été prise : elle a été subie. Tout ce que fait Aura laisse une trace."],
    ],
    productsEyebrow: "Trois produits, trois déclencheurs",
    productsTitle: "Des applications étanches, chacune pour une situation précise.",
    productsLead: "Elles ne se recouvrent pas et ne se renvoient pas l’une à l’autre : ce site est le seul point d’entrée. Cliquez sur une carte pour le détail.",
    entryEyebrow: "Quel point d’entrée ?",
    entryTitle: "Partez de ce qui déclenche votre besoin, pas du produit.",
    entryLead: "Le déclencheur suffit à choisir : un signal dans les données, une question ponctuelle ou un programme.",
    compare: "Voir le comparatif complet",
    methodEyebrow: "Méthode",
    methodTitle: "Un sprint pour prouver. Une application pour durer.",
    methodLead: "Nous ne vendons pas de projet long avant d’avoir montré la valeur sur votre cas réel.",
    trustEyebrow: "Confiance & gouvernance",
    trustTitle: "Quatre engagements, dans les trois applications.",
    scenarioEyebrow: "Scénario d’illustration",
    scenarioTitle: "À quoi ressemble « du signal à la décision » ?",
    scenarioLead: "Exemple construit sur Maison Lucie, le SI synthétique de la démo Aura Supply Chain. Les chiffres sont fictifs et servent uniquement à illustrer le parcours.",
    scenarioSteps: [
      ["Signal", "Le délai annoncé par un fournisseur de composants passe de 21 à 34 jours (flux EDI)."],
      ["Règle", "Règle causale : délai fournisseur critique > seuil ET couverture composant < 15 jours."],
      ["Alerte", "Voyant orange : impact estimé sur le service dans 12 jours pour 2 références finies."],
      ["Décision", "Fiche préremplie : contexte, chiffres, options (réallocation, express, second fournisseur). L’équipe complète et signe."],
    ],
    scenarioCta: "Explorer la démo Maison Lucie",
    insightsEyebrow: "Perspectives",
    insightsTitle: "Recul et méthode.",
    allInsights: "Toutes les perspectives",
    productDetails: "Voir le produit",
    openApp: "Ouvrir l’app",
  },
  en: {
    eyebrow: "Decision intelligence · 3 applications",
    title: "From signal to a decision you can defend.",
    lead: "Aura brings together three distinct applications — Supply Chain, Decide, Architect — for three different situations: a signal in your data, a strategic question, a transformation programme. Each starts with a short sprint and ends with a traceable decision, validated by people.",
    primary: "Find my entry point",
    secondary: "Compare the sprints",
    trust: ["Human validation", "No invented data", "Traceable reasoning"],
    thesisEyebrow: "Our thesis",
    thesisTitle: "Organisations do not lack data. They lack explicit decisions.",
    thesis: [
      ["The signal", "Your systems already see events. What is missing is the rule saying why an event matters — and to whom."],
      ["The reasoning", "A robust decision separates what we know, what we assume and what we do not know. AI prepares; it does not decide."],
      ["The trace", "A decision you cannot re-read in six months was not made: it was endured. Everything Aura does leaves a trace."],
    ],
    productsEyebrow: "Three products, three triggers",
    productsTitle: "Sealed applications, each for one precise situation.",
    productsLead: "They do not overlap and never link to each other: this website is the only entry point. Click a card for details.",
    entryEyebrow: "Which entry point?",
    entryTitle: "Start from what triggers your need, not from the product.",
    entryLead: "The trigger is enough to choose: a signal in the data, a one-off question or a programme.",
    compare: "See the full comparison",
    methodEyebrow: "Method",
    methodTitle: "A sprint to prove it. An application to make it last.",
    methodLead: "We do not sell a long project before showing value on your real case.",
    trustEyebrow: "Trust & governance",
    trustTitle: "Four commitments, across all three applications.",
    scenarioEyebrow: "Illustrative scenario",
    scenarioTitle: "What does “from signal to decision” look like?",
    scenarioLead: "Example built on Maison Lucie, the synthetic system behind the Aura Supply Chain demo. Figures are fictional and only illustrate the journey.",
    scenarioSteps: [
      ["Signal", "A component supplier’s announced lead time moves from 21 to 34 days (EDI feed)."],
      ["Rule", "Causal rule: critical supplier lead time > threshold AND component cover < 15 days."],
      ["Alert", "Amber light: estimated service impact in 12 days on 2 finished items."],
      ["Decision", "Pre-filled form: context, figures, options (reallocation, express, second source). The team completes and signs."],
    ],
    scenarioCta: "Explore the Maison Lucie demo",
    insightsEyebrow: "Insights",
    insightsTitle: "Perspective and method.",
    allInsights: "All insights",
    productDetails: "See the product",
    openApp: "Open the app",
  },
};

const method: Detail[] = [
  {
    id: "m-frame",
    kicker: ["45 min", "45 min"],
    title: ["Cadrer", "Frame"],
    summary: ["Un appel pour qualifier le déclencheur et choisir le point d’entrée.", "One call to qualify the trigger and choose the entry point."],
    body: [
      [
        "Nous partons de votre situation : un signal, une question ou un programme. Nous identifions les entrées disponibles, les personnes à mobiliser et le livrable attendu. Vous repartez avec une proposition de sprint écrite.",
        "We start from your situation: a signal, a question or a programme. We identify the available inputs, the people to involve and the expected deliverable. You leave with a written sprint proposal.",
      ],
    ],
    flow: [["Déclencheur", "Trigger"], ["Entrées", "Inputs"], ["Proposition", "Proposal"]],
  },
  {
    id: "m-sprint",
    kicker: ["5 jours → 4 semaines", "5 days → 4 weeks"],
    title: ["Sprint", "Sprint"],
    summary: ["Un engagement court, borné, avec un livrable réel.", "A short, bounded engagement with a real deliverable."],
    body: [
      [
        "Sprint Résilience, Decision Sprint ou Design Sprint Architecture : chaque sprint a un déroulé fixe, des entrées connues et un livrable qui vous appartient — sur vos données, votre question ou votre programme, jamais sur un cas fictif.",
        "Resilience Sprint, Decision Sprint or Architecture Design Sprint: each sprint has a fixed schedule, known inputs and a deliverable you own — on your data, your question or your programme, never on a fictional case.",
      ],
    ],
    flow: [["Sprint Résilience", "Resilience Sprint"], ["Decision Sprint", "Decision Sprint"], ["Design Sprint Archi.", "Architecture Design Sprint"]],
  },
  {
    id: "m-use",
    kicker: ["Durée de vie", "Lifetime"],
    title: ["Usage", "Use"],
    summary: ["L’application prend le relais, vos équipes deviennent autonomes.", "The application takes over, your teams become autonomous."],
    body: [
      [
        "Après le sprint, le livrable vit dans l’application correspondante : le cockpit continue d’évaluer les règles, les décisions sont suivies, le modèle d’architecture est maintenu. L’accompagnement devient optionnel.",
        "After the sprint, the deliverable lives in the matching application: the cockpit keeps evaluating rules, decisions are tracked, the architecture model is maintained. Support becomes optional.",
      ],
    ],
  },
];

const trust: Detail[] = [
  {
    id: "t-human",
    title: ["Validation humaine", "Human validation"],
    summary: ["L’IA propose, des personnes valident et signent.", "AI proposes, people validate and sign."],
    body: [
      [
        "Mapping sémantique, règles, verdicts, choix d’architecture : aucune suggestion de l’IA n’est appliquée sans validation explicite d’une personne identifiée.",
        "Semantic mapping, rules, verdicts, architecture choices: no AI suggestion is applied without explicit validation by an identified person.",
      ],
    ],
    flow: [["Suggestion IA", "AI suggestion"], ["Revue", "Review"], ["Validation", "Validation"], ["Trace", "Trace"]],
  },
  {
    id: "t-trace",
    title: ["Traçabilité", "Traceability"],
    summary: ["Chaque décision remonte à ses sources et hypothèses.", "Every decision traces back to its sources and assumptions."],
    body: [
      [
        "Qui a décidé, quand, sur quelles données ou hypothèses, avec quelle version de règle : la réponse est dans l’application, pas dans la mémoire d’une réunion.",
        "Who decided, when, on which data or assumptions, with which rule version: the answer is in the application, not in the memory of a meeting.",
      ],
    ],
  },
  {
    id: "t-nodata",
    title: ["Aucune donnée inventée", "No invented data"],
    summary: ["Les alertes viennent de règles sur des données réelles.", "Alerts come from rules on real data."],
    body: [
      [
        "Un modèle de langage peut produire un chiffre plausible et faux. Chez Aura, il n’en a pas le droit : les alertes viennent de règles explicites, les hypothèses sont déclarées comme telles, et les démos tournent sur un SI synthétique clairement identifié.",
        "A language model can produce a plausible, wrong figure. At Aura it is not allowed to: alerts come from explicit rules, assumptions are declared as such, and demos run on a clearly labelled synthetic system.",
      ],
    ],
  },
  {
    id: "t-sovereign",
    title: ["Souveraineté", "Sovereignty"],
    summary: ["Hébergement et modèle d’IA cadrés avec vous.", "Hosting and AI model agreed with you."],
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
  const articles = getArticles(locale).slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-backdrop" aria-hidden />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-pill">{c.eyebrow}</p>
            <h1 className="display">{c.title}</h1>
            <p className="lead lead-lg">{c.lead}</p>
            <div className="actions">
              <a className="btn btn-primary btn-lg" href="#entry">
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
          <HeroSignal locale={locale} />
        </div>
      </section>

      <section className="section section-tight">
        <div className="container thesis">
          <SectionHead eyebrow={c.thesisEyebrow} title={c.thesisTitle} />
          <ol className="thesis-list">
            {c.thesis.map(([title, text], index) => (
              <li key={title}>
                <span className="mono">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
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
                  detail={{
                    id: key,
                    kicker: tr(p.trigger, locale),
                    title: tr(p.name, locale),
                    summary: tr(p.tagline, locale),
                    body: [tr(p.lead, locale), tr(p.question, locale)],
                    flow: p.journey.steps.map((step) => tr(step.title, locale)),
                    points: [
                      `${locale === "fr" ? "Sprint associé : " : "Matching sprint: "}${tr(s.name, locale)} (${tr(s.duration, locale)})`,
                      `${locale === "fr" ? "Livrable : " : "Deliverable: "}${tr(s.outcome, locale)}`,
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
        </div>
      </section>

      <section className="section" id="entry">
        <div className="container">
          <SectionHead eyebrow={c.entryEyebrow} title={c.entryTitle} lead={c.entryLead} />
          <EntrySelector options={entryOptions(locale)} labels={selectorLabels(locale)} />
          <p className="section-foot">
            <Link className="text-link" href={r.sprints}>
              {c.compare} <ArrowRight size={15} aria-hidden />
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead eyebrow={c.methodEyebrow} title={c.methodTitle} lead={c.methodLead} />
          <div className="grid-3 steps-row">
            {method.map((step, index) => (
              <ZoomCard key={step.id} variant="step" index={`0${index + 1}`} labels={labels} detail={localize(step, locale)} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={c.trustEyebrow} title={c.trustTitle} />
          <div className="grid-4">
            {trust.map((item) => (
              <ZoomCard key={item.id} variant="compact" labels={labels} detail={localize(item, locale)} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
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
          <figure className="scenario-visual">
            <Image
              src="/images/aura-port-control-tower.jpg"
              alt={locale === "fr" ? "Porte-conteneurs entrant dans un port industriel" : "Container ship entering an industrial port"}
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
            />
            <figcaption>
              <span className="badge">{dict.common.illustrative}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <SectionHead eyebrow={c.insightsEyebrow} title={c.insightsTitle} />
            <Link className="text-link" href={r.insights}>
              {c.allInsights} <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
          <div className="grid-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} locale={locale} dict={dict} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
