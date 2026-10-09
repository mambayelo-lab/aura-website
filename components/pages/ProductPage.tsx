import { FlowStrip } from "../FlowStrip";
import { DsiSection } from "../DsiSection";
import { ProductFilm } from "../ProductFilm";
import { SupplyNews } from "../SupplyNews";
import { DecisionEngine } from "../DecisionEngine";
import { BellRing, Search, Scale, LineChart, MessageSquare, Boxes, LayoutGrid } from "lucide-react";
import { ArrowRight, ArrowUpRight, Ban, Check, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/content/dictionary";
import { localize, products, sprints, tr } from "@/content/products";
import { appUrls, routes, type Locale, type ProductKey } from "@/lib/i18n";
import {
  AppLink,
  CtaBanner,
  Faq,
  More,
  SectionHead,
  ValueBlock,
  productIcons,
  sprintHref,
  zoomLabels,
} from "../blocks";
import { ZoomCard } from "../zoom/ZoomCard";
import { AppScreen } from "../AppScreen";
import { MethodReminder } from "../Methods";
import { productValue } from "@/content/value";

const copy = {
  fr: {
    product: "Produit",
    trigger: "Déclencheur",
    forWhom: "Pour qui",
    problemEyebrow: "Le problème",
    problemCols: [
      "Ce que vous vivez",
      "Ce que ça vous coûte",
      "Pourquoi vos outils n’y suffisent pas",
      "Ce qu’Aura change",
    ],
    features: "Ce que fait Aura",
    featuresTitle: "Comment Aura le résout, brique par brique.",
    journey: "Parcours",
    how: "Architecture",
    integrations: "Intégrations",
    governance: "Gouvernance",
    governanceTitle:
      "Des décisions que vous pouvez défendre devant un comité ou un auditeur.",
    boundaries: "Périmètre",
    boundariesTitle: "Le bon outil pour le bon problème.",
    boundariesLead: "Si votre situation est différente, voici où aller.",
    sprint: "Comment démarrer",
    seeSprint: "Voir le déroulé complet",
    frame: "Parler de votre situation",
    faq: "Vos questions, nos réponses",
    seeProduct: "Voir",
    deliverable: "Livrable",
    screens: "Dans l’application",
    moreFeatures: (n: number) => `Voir ${n} autres briques`,
    seeIntegrations: "Voir les connecteurs",
    moreGovernance: "Voir les autres garanties",
    moreScreens: (n: number) => `Voir ${n} autres écrans`,
  },
  en: {
    product: "Product",
    trigger: "Trigger",
    forWhom: "Who it is for",
    problemEyebrow: "The problem",
    problemCols: [
      "What you live with",
      "What it costs you",
      "Why your current tools fall short",
      "What Aura changes",
    ],
    features: "What Aura does",
    featuresTitle: "How Aura solves it, piece by piece.",
    journey: "Journey",
    how: "Architecture",
    integrations: "Integrations",
    governance: "Governance",
    governanceTitle:
      "Decisions you can defend in front of a board or an auditor.",
    boundaries: "Scope",
    boundariesTitle: "The right tool for the right problem.",
    boundariesLead: "If your situation is different, here is where to go.",
    sprint: "How to start",
    seeSprint: "See the full schedule",
    frame: "Talk through your situation",
    faq: "Your questions, answered",
    seeProduct: "See",
    deliverable: "Deliverable",
    screens: "Inside the application",
    moreFeatures: (n: number) => `See ${n} more building blocks`,
    seeIntegrations: "See the connectors",
    moreGovernance: "See the other safeguards",
    moreScreens: (n: number) => `See ${n} more screens`,
  },
};

export function ProductPage({
  locale,
  product: key,
}: {
  locale: Locale;
  product: ProductKey;
}) {
  const p = products[key];
  const s = sprints[p.sprint];
  const c = copy[locale];
  const dict = getDictionary(locale);
  const labels = zoomLabels(dict);
  const l = (value: readonly [string, string]) => tr(value, locale);
  const Icon = productIcons[key];
  // In Aura Decide the five journey steps *are* the core features: show them once.
  const journeyIsFeatures = key === "decide";
  const heroShots: Partial<Record<typeof key, string>> = {
    architect: "/images/product/architect-applicatif.webp",
    supply: "/images/product/supply-cockpit.webp",
  };
  const heroScreen = p.screens.find((screen) => screen.src === heroShots[key]);
  // Fresh captures of the live applications (demo data), per language.
  const heroFresh: Partial<Record<typeof key, [string, number, number, string]>> = {
    architect: [`/images/product/v3/arch-applicatif-${locale}.webp`, 1600, locale === "fr" ? 1029 : 1188, locale === "fr" ? "Schéma inter-applicatif au niveau exécutif : parties prenantes, canaux, applications et données maîtres, généré depuis le modèle unique" : "Executive-level integration diagram: stakeholders, channels, applications and master data, generated from the single model"],
    supply: [`/images/product/v3/ct-cockpit-${locale}.webp`, 1600, 911, locale === "fr" ? "Cockpit Control Tower : « Décision requise : 5 alertes au seuil critique » et alertes prioritaires classées par gravité (données de démonstration)" : "Control Tower cockpit: “Decision required: 5 alerts at critical threshold” and priority alerts ranked by severity (demo data)"],
  };
  const heroShot = Boolean(heroShots[key]);
  const flows = {
    supply: [
      [BellRing, ["Le signal", "The signal"], ["L’alerte arrive avant l’impact client.", "The alert lands before customers feel it."]],
      [Search, ["La cause", "The cause"], ["Chaîne causale lisible, source de chaque attribut.", "Readable causal chain, source of every attribute."]],
      [Scale, ["La décision", "The decision"], ["Options comparées, avec ou sans données.", "Options compared, with or without data."]],
      [LineChart, ["Le suivi", "Follow-up"], ["Chaque décision suivie dans le journal.", "Every decision tracked in the log."]],
    ],
    architect: [
      [MessageSquare, ["La demande", "The request"], ["Un cadrage guidé, hypothèses explicites.", "Guided scoping, explicit assumptions."]],
      [Boxes, ["Le modèle", "The model"], ["Un modèle unique, contrôlé par les bonnes pratiques.", "One model, checked against best practice."]],
      [LayoutGrid, ["Les vues", "The views"], ["Capacités, applicatif, BPMN, données : cohérents.", "Capabilities, apps, BPMN, data: consistent."]],
      [Scale, ["La décision", "The decision"], ["Scénarios estimés, choix prouvé, exports.", "Scenarios estimated, choice proven, exports."]],
    ],
  } as const;
  const flow = key in flows ? flows[key as keyof typeof flows] : null;
  const host = new URL(appUrls[key]).host;
  const [mainScreen, ...otherScreens] = p.screens.filter((screen) => screen.src !== heroShots[key]).map((screen) => ({
    src: screen.src,
    width: screen.width,
    height: screen.height,
    alt: l(screen.alt),
    caption: l(screen.caption),
    host,
  }));

  const screensSection = (
      <section
        className="section section-tight section-alt screens"
        id="screens"
      >
        <div className="container">
          <div className="section-head section-head-rule">
            <p className="eyebrow">{c.screens}</p>
            <h2 className="h2">{l(p.screensTitle)}</h2>
          </div>
          <AppScreen screen={mainScreen} locale={locale} />
          {otherScreens.length > 0 && (
            <More label={c.moreScreens(otherScreens.length)}>
              <div className="grid-2 screens-more">
                {otherScreens.map((screen) => (
                  <AppScreen
                    key={screen.src}
                    screen={screen}
                    locale={locale}
                    compact
                    note={false}
                    sizes="(max-width: 980px) 100vw, 560px"
                  />
                ))}
              </div>
            </More>
          )}
        </div>
      </section>
  );

  return (
    <div data-product={key}>
      <section className="hero hero-product dark">
        <div className="hero-backdrop" aria-hidden />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-pill">
              <Icon size={14} aria-hidden /> {c.product} · {l(p.trigger)}
            </p>
            <h1 className="display">{l(p.name)}</h1>
            <p className="hero-sub">{l(p.headline)}</p>
            {p.who && <p className="hero-who">{l(p.who)}</p>}
            {!heroShot && <p className="lead">{l(p.lead)}</p>}
            {p.diAnchor && !heroShot && <p className="hero-note">{l(p.diAnchor)}</p>}
            <div className="actions">
              <AppLink
                product={key}
                label={key === "architect" ? (locale === "fr" ? "Ouvrir Architect" : "Open Architect") : key === "supply" ? (locale === "fr" ? "Ouvrir Control Tower" : "Open Control Tower") : dict.common.openApp}
                className="btn btn-ink btn-lg"
              />
              <Link
                className="btn btn-secondary btn-lg"
                href={sprintHref(locale, key)}
              >
                {l(s.name)} · {l(s.duration)}
              </Link>
            </div>
          </div>
          {heroShot ? (
            <figure className="hero-shot">
              <span className="hero-shot-bar" aria-hidden><i /><i /><i /><span>{host}</span></span>
              <Image
                src={heroFresh[key]?.[0] ?? heroShots[key]!}
                alt={heroFresh[key]?.[3] ?? (heroScreen ? l(heroScreen.alt) : "")}
                width={heroFresh[key]?.[1] ?? 1440}
                height={heroFresh[key]?.[2] ?? 900}
                sizes="(max-width: 980px) 100vw, 45vw"
                priority
              />
            </figure>
          ) : (
          <figure className="product-visual media">
              <Image
                src={p.image.src}
                alt={l(p.image.alt)}
                fill
                sizes="(max-width: 980px) 100vw, 45vw"
                priority
              />
              <figcaption>
                <Quote size={16} aria-hidden />
                {l(p.question)}
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {(key === "supply" || key === "architect") && (
        <section className="section section-tight film-section" id="film">
          <div className="container">
            <ProductFilm locale={locale} film={key} impacts={false} />
          </div>
        </section>
      )}

      {flow && (
        <section className="section-flow">
          <div className="container">
            <h2 className="flow-head">{l(p.tagline)}</h2>
            <FlowStrip
              label={l(p.tagline)}
              steps={flow.map(([icon, title, text]) => ({ icon, title: l(title), text: l(text) }))}
            />
          </div>
        </section>
      )}

      {key === "supply" && <DecisionEngine locale={locale} />}
      {key === "supply" && <SupplyNews locale={locale} />}
      {key === "supply" && <DsiSection locale={locale} />}

      {heroShot && screensSection}

      <section className="section" id="problem">
        <div className="container">
          <SectionHead
            eyebrow={c.problemEyebrow}
            title={l(p.problem.title)}
            lead={l(p.problem.lead)}
          />
          <div className="audience audience-inline">
            <p className="eyebrow">{c.forWhom}</p>
            <ul>
              {p.audience.map((item) => (
                <li key={item[1]}>
                  <Check size={15} aria-hidden />
                  {l(item)}
                </li>
              ))}
            </ul>
          </div>
          <div className="problem-grid">
            {[
              p.problem.pain,
              p.problem.cost,
              p.problem.why,
              p.problem.gain,
            ].map((items, index) => (
              <div
                key={c.problemCols[index]}
                className={`problem-col${index === 3 ? " problem-col-gain" : ""}`}
              >
                <h3>{c.problemCols[index]}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item[1]}>{l(item)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {!heroShot && screensSection}

      <section className="section" id="features">
        <div className="container">
          <SectionHead
            eyebrow={journeyIsFeatures ? c.journey : c.features}
            title={journeyIsFeatures ? l(p.journey.title) : c.featuresTitle}
            lead={journeyIsFeatures ? l(p.journey.lead) : undefined}
          />
          <div className={journeyIsFeatures ? "grid-3 steps-row" : "grid-3"}>
            {p.features.slice(0, 6).map((feature, index) => (
              <ZoomCard
                key={feature.id}
                product={key}
                labels={labels}
                variant={journeyIsFeatures && index < 5 ? "step" : "default"}
                index={
                  journeyIsFeatures && index < 5 ? `0${index + 1}` : undefined
                }
                detail={localize(feature, locale)}
              />
            ))}
          </div>
          {p.features.length > 6 && (
            <More label={c.moreFeatures(p.features.length - 6)}>
              <div className="grid-3">
                {p.features.slice(6).map((feature) => (
                  <ZoomCard
                    key={feature.id}
                    product={key}
                    labels={labels}
                    detail={localize(feature, locale)}
                  />
                ))}
              </div>
            </More>
          )}
        </div>
      </section>

      {!journeyIsFeatures && (
        <section className="section section-alt" id="journey">
          <div className="container">
            <SectionHead
              eyebrow={c.journey}
              title={l(p.journey.title)}
              lead={l(p.journey.lead)}
            />
            <ol className="journey">
              {p.journey.steps.map((step, index) => (
                <li key={step.id}>
                  <ZoomCard
                    product={key}
                    labels={labels}
                    variant="step"
                    index={`0${index + 1}`}
                    detail={localize(step, locale)}
                  />
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section
        className={`section${journeyIsFeatures ? " section-alt" : ""}`}
        id="architecture"
      >
        <div className="container arch">
          <div>
            <SectionHead
              eyebrow={c.how}
              title={l(p.architecture.title)}
              lead={l(p.architecture.lead)}
            />
            <div className="integrations">
              <p className="eyebrow">{c.integrations}</p>
              <p className="muted">{l(p.integrations.lead)}</p>
              <More label={c.seeIntegrations}>
                <ul>
                  {p.integrations.items.map((item) => (
                    <li key={item.name}>
                      <strong className="mono">{item.name}</strong>
                      <span>{l(item.text)}</span>
                    </li>
                  ))}
                </ul>
              </More>
            </div>
          </div>
          <div
            className="layers"
            role="list"
            aria-label={l(p.architecture.title)}
          >
            {p.architecture.layers.map((layer, index) => (
              <div className="layer" role="listitem" key={layer.name[1]}>
                <p className="layer-name">
                  <span className="mono">L{index + 1}</span>
                  {l(layer.name)}
                </p>
                <ul className="layer-items">
                  {layer.items.map((item) => (
                    <li key={item[1]}>{l(item)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`section section-tight${journeyIsFeatures ? "" : " section-alt"}`}
        id="governance"
      >
        <div className="container">
          <SectionHead eyebrow={c.governance} title={c.governanceTitle} />
          <div className="grid-2">
            {p.governance.slice(0, 2).map((item) => (
              <ZoomCard
                key={item.id}
                product={key}
                variant="compact"
                labels={labels}
                detail={localize(item, locale)}
              />
            ))}
          </div>
          {p.governance.length > 2 && (
            <More label={c.moreGovernance}>
              <div className="grid-2">
                {p.governance.slice(2).map((item) => (
                  <ZoomCard
                    key={item.id}
                    product={key}
                    variant="compact"
                    labels={labels}
                    detail={localize(item, locale)}
                  />
                ))}
              </div>
            </More>
          )}
        </div>
      </section>

      <section className="section section-tight" id="boundaries">
        <div className="container">
          <SectionHead
            eyebrow={c.boundaries}
            title={c.boundariesTitle}
            lead={c.boundariesLead}
          />
          <ul className="grid-3 boundaries">
            {p.notThis.map((item) => (
              <li key={item.title[1]} data-product={item.product}>
                <Ban size={18} aria-hidden />
                <h3>{l(item.title)}</h3>
                <p>{l(item.text)}</p>
                {item.product && (
                  <Link
                    className="text-link"
                    href={routes[locale][item.product]}
                  >
                    {c.seeProduct} {l(products[item.product].name)}{" "}
                    <ArrowRight size={14} aria-hidden />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tight" id="value">
        <div className="container">
          <ValueBlock
            value={productValue[key]}
            locale={locale}
            id="value-block"
          />
        </div>
      </section>

      <section className="section section-alt" id="sprint">
        <div className="container">
          <div className="sprint-teaser">
            <div>
              <p className="eyebrow">{c.sprint}</p>
              <h2 className="h2">{l(s.name)}</h2>
              <p className="sprint-duration mono">{l(s.duration)}</p>
              <p className="lead">{l(s.promise)}</p>
              <p className="muted">
                <strong>
                  {c.deliverable}
                  {locale === "fr" ? " : " : ": "}
                </strong>
                {l(s.outcome)}
              </p>
              <MethodReminder sprint={p.sprint} locale={locale} />
              <div className="actions">
                <Link
                  className="btn btn-primary"
                  href={sprintHref(locale, key)}
                >
                  {c.seeSprint} <ArrowRight size={16} aria-hidden />
                </Link>
                <Link
                  className="btn btn-secondary"
                  href={routes[locale].contact}
                >
                  {c.frame}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container container-narrow">
          <SectionHead eyebrow="FAQ" title={c.faq} />
          <Faq items={p.faq.map((item) => ({ q: l(item.q), a: l(item.a) }))} />
          <p className="section-foot">
            <a
              className="text-link"
              href={appUrls[key]}
              target="_blank"
              rel="noopener"
            >
              {dict.common.openApp} — {l(p.name)}{" "}
              <ArrowUpRight size={15} aria-hidden />
            </a>
          </p>
        </div>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </div>
  );
}
