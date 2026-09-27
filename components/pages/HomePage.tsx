import { ArrowRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/content/articles";
import { getDictionary } from "@/content/dictionary";
import { productOrder, products, sprints, tr, type Detail } from "@/content/products";
import { appUrls, articleHref, routes, type Locale } from "@/lib/i18n";
import { whyAura } from "@/content/founder";
import { ArticleCard, CtaBanner, SectionHead, entryOptions, productIcons, selectorLabels, zoomLabels } from "../blocks";
import { EntrySelector } from "../EntrySelector";
import { HeroSignal } from "../HeroSignal";
import { ZoomCard } from "../zoom/ZoomCard";
import { localize } from "@/content/products";

const cardImages = {
  supply: "/images/aura/control-room.webp",
  decide: "/images/aura/ai-cadrage.webp",
  architect: "/images/aura/transformation.webp",
} as const;

const copy = {
  fr: {
    eyebrow: "Intelligence décisionnelle · 3 applications",
    title: "Du signal à la décision que vous pouvez défendre.",
    lead: "Trois applications — Supply Chain, Décider, Architect — pour trois situations : un signal dans vos données, une question stratégique, un programme de transformation. Chacune démarre par un sprint court, ouvert par une analyse systémique, et aboutit à une décision traçable.",
    primary: "Trouver mon point d’entrée",
    secondary: "Comparer les sprints",
    trust: ["Validation humaine", "Aucune donnée inventée", "Raisonnement traçable"],
    thesisEyebrow: "Pourquoi Aura",
    thesisTitle: "Des méthodes simples pour un monde incertain.",
    diEyebrow: "Decision Intelligence · repères Gartner",
    diLead: "Gartner décrit la Decision Intelligence comme la discipline qui modélise explicitement les décisions pour les évaluer et les améliorer. Aura en applique les principes : décisions modélisées, évaluation robuste, validation humaine.",
    diFacts: [
      ["50 %", "des décisions métier assistées ou automatisées par des agents d’IA d’ici 2027, selon Gartner.", "Gartner, juin 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-17-gartner-announces-top-data-and-analytics-predictions"],
      ["40 %+", "des projets d’IA agentique abandonnés d’ici fin 2027 : coûts, valeur floue, risques mal maîtrisés.", "Gartner, juin 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027"],
      ["5 %", "des organisations prendront au moins 10 % de leurs décisions de planification supply chain en autonomie d’ici 2030.", "Gartner, sept. 2026", "https://www.gartner.com/en/newsroom/press-releases/2026-09-24-gartner-predicts-only-5-percent-of-organizations-will-make-at-least-10-percent-of-supply-chain-planning-decisions-autonomously-by-2030"],
    ],
    diMore: "Ce que dit Gartner, et où se situe Aura",
    founderName: "Mambaye Lo, fondateur",
    founderText: "Lead Enterprise Architect, Ph.D. 16 ans de transformations en retail, énergie, banque et automobile. Parcours et travaux.",
    productsEyebrow: "Trois produits, trois déclencheurs",
    productsTitle: "Des applications étanches, chacune pour une situation précise.",
    productsLead: "Un aperçu ici ; le détail sur chaque page produit.",
    entryEyebrow: "Quel point d’entrée ?",
    entryTitle: "Partez de ce qui déclenche votre besoin, pas du produit.",
    entryLead: "Le déclencheur suffit à choisir : un signal dans les données, une question ponctuelle ou un programme.",
    compare: "Voir le comparatif complet",
    trustEyebrow: "Confiance & gouvernance",
    trustTitle: "Quatre engagements, dans les trois applications.",
    trustLead: "Vos données restent sous votre contrôle, et aucune décision ne part sans une validation humaine explicite.",
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
    lead: "Three applications — Supply Chain, Decide, Architect — for three situations: a signal in your data, a strategic question, a transformation programme. Each starts with a short sprint, opened by a systems analysis, and ends with a traceable decision.",
    primary: "Find my entry point",
    secondary: "Compare the sprints",
    trust: ["Human validation", "No invented data", "Traceable reasoning"],
    thesisEyebrow: "Why Aura",
    thesisTitle: "Simple methods for an uncertain world.",
    diEyebrow: "Decision Intelligence · Gartner benchmarks",
    diLead: "Gartner describes Decision Intelligence as the discipline of explicitly modelling decisions in order to evaluate and improve them. Aura applies its principles: modelled decisions, robust evaluation, human validation.",
    diFacts: [
      ["50%", "of business decisions augmented or automated by AI agents by 2027, according to Gartner.", "Gartner, June 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-17-gartner-announces-top-data-and-analytics-predictions"],
      ["40%+", "of agentic AI projects canceled by the end of 2027: costs, unclear value, inadequate risk controls.", "Gartner, June 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027"],
      ["5%", "of organizations will make at least 10% of their supply chain planning decisions autonomously by 2030.", "Gartner, Sept. 2026", "https://www.gartner.com/en/newsroom/press-releases/2026-09-24-gartner-predicts-only-5-percent-of-organizations-will-make-at-least-10-percent-of-supply-chain-planning-decisions-autonomously-by-2030"],
    ],
    diMore: "What Gartner says, and where Aura stands",
    founderName: "Mambaye Lo, founder",
    founderText: "Lead Enterprise Architect, Ph.D. 16 years of transformations across retail, energy, banking and automotive. Background and research.",
    productsEyebrow: "Three products, three triggers",
    productsTitle: "Sealed applications, each for one precise situation.",
    productsLead: "An overview here; full detail on each product page.",
    entryEyebrow: "Which entry point?",
    entryTitle: "Start from what triggers your need, not from the product.",
    entryLead: "The trigger is enough to choose: a signal in the data, a one-off question or a programme.",
    compare: "See the full comparison",
    trustEyebrow: "Trust & governance",
    trustTitle: "Four commitments, across all three applications.",
    trustLead: "Your data stays under your control, and no decision leaves without explicit human validation.",
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
              <a className="btn btn-ink btn-lg" href="#entry">
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
          <div className="thesis-aside">
            <SectionHead eyebrow={c.thesisEyebrow} title={c.thesisTitle} />
            <figure className="media media-wide thesis-media">
              <Image
                src="/images/aura/summit.webp"
                alt={
                  locale === "fr"
                    ? "Une personne au sommet d’une montagne contemple une mer de nuages sous un réseau de lignes lumineuses indigo"
                    : "A person on a mountain summit looks over a sea of clouds beneath a web of indigo light lines"
                }
                fill
                sizes="(max-width: 980px) 100vw, 520px"
              />
            </figure>
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
              <span className="founder-teaser-mono" aria-hidden>ML</span>
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

      <section className="section">
        <div className="container">
          <div className="section-media-row">
            <SectionHead eyebrow={c.trustEyebrow} title={c.trustTitle} lead={c.trustLead} />
            <div className="duo-media">
              <figure className="media">
                <Image
                  src="/images/aura/sovereignty.webp"
                  alt={
                    locale === "fr"
                      ? "Allée de serveurs éclairée en indigo dans un centre de données"
                      : "Aisle of servers lit in indigo inside a data centre"
                  }
                  fill
                  sizes="(max-width: 980px) 50vw, 260px"
                />
              </figure>
              <figure className="media">
                <Image
                  src="/images/aura/illu-trust.webp"
                  alt={
                    locale === "fr"
                      ? "Bouclier indigo marqué d’une coche, entouré de points reliés : la validation protège chaque décision"
                      : "Indigo shield with a check mark, surrounded by linked dots: validation protects every decision"
                  }
                  fill
                  sizes="(max-width: 980px) 50vw, 260px"
                />
              </figure>
            </div>
          </div>
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
          <figure className="scenario-visual media">
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
