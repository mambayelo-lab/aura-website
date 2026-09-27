import { ArrowRight, ArrowUpRight, Ban, Check, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/content/dictionary";
import { localize, products, sprints, tr } from "@/content/products";
import { appUrls, routes, type Locale, type ProductKey } from "@/lib/i18n";
import { AppLink, CtaBanner, Faq, SectionHead, productIcons, sprintHref, zoomLabels } from "../blocks";
import { ZoomCard } from "../zoom/ZoomCard";

const copy = {
  fr: {
    product: "Produit",
    trigger: "Déclencheur",
    forWhom: "Pour qui",
    features: "Fonctionnalités",
    featuresTitle: "Ce que fait l’application, élément par élément.",
    journey: "Parcours",
    how: "Architecture",
    integrations: "Intégrations",
    governance: "Gouvernance",
    governanceTitle: "Ce qui rend l’application digne de confiance.",
    boundaries: "Frontières",
    boundariesTitle: "Ce que ce n’est pas.",
    boundariesLead: "Pour éviter toute redondance entre les produits, chaque application a un périmètre net.",
    sprint: "Sprint associé",
    seeSprint: "Voir le déroulé complet",
    frame: "Cadrer ce sprint",
    faq: "Questions fréquentes",
    seeProduct: "Voir",
    deliverable: "Livrable",
  },
  en: {
    product: "Product",
    trigger: "Trigger",
    forWhom: "Who it is for",
    features: "Features",
    featuresTitle: "What the application does, element by element.",
    journey: "Journey",
    how: "Architecture",
    integrations: "Integrations",
    governance: "Governance",
    governanceTitle: "What makes the application trustworthy.",
    boundaries: "Boundaries",
    boundariesTitle: "What it is not.",
    boundariesLead: "To avoid any overlap between products, each application has a clear scope.",
    sprint: "Matching sprint",
    seeSprint: "See the full schedule",
    frame: "Frame this sprint",
    faq: "Frequently asked questions",
    seeProduct: "See",
    deliverable: "Deliverable",
  },
};

export function ProductPage({ locale, product: key }: { locale: Locale; product: ProductKey }) {
  const p = products[key];
  const s = sprints[p.sprint];
  const c = copy[locale];
  const dict = getDictionary(locale);
  const labels = zoomLabels(dict);
  const l = (value: readonly [string, string]) => tr(value, locale);
  const Icon = productIcons[key];
  // In Aura Decide the five journey steps *are* the core features: show them once.
  const journeyIsFeatures = key === "decide";

  return (
    <div data-product={key}>
      <section className="hero hero-product">
        <div className="hero-backdrop" aria-hidden />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-pill">
              <Icon size={14} aria-hidden /> {c.product} · {l(p.trigger)}
            </p>
            <h1 className="display">{l(p.name)}</h1>
            <p className="hero-sub">{l(p.headline)}</p>
            <p className="lead">{l(p.lead)}</p>
            <div className="actions">
              <AppLink product={key} label={dict.common.openApp} className="btn btn-primary btn-lg" />
              <Link className="btn btn-secondary btn-lg" href={sprintHref(locale, key)}>
                {l(s.name)} · {l(s.duration)}
              </Link>
            </div>
          </div>
          <figure className="product-visual media">
            <Image src={p.image.src} alt={l(p.image.alt)} fill sizes="(max-width: 980px) 100vw, 45vw" priority />
            <figcaption>
              <Quote size={16} aria-hidden />
              {l(p.question)}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-tight section-alt">
        <div className="container audience">
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
      </section>

      <section className="section" id="features">
        <div className="container">
          <SectionHead
            eyebrow={journeyIsFeatures ? c.journey : c.features}
            title={journeyIsFeatures ? l(p.journey.title) : c.featuresTitle}
            lead={journeyIsFeatures ? l(p.journey.lead) : undefined}
          />
          <div className={journeyIsFeatures ? "grid-3 steps-row" : "grid-3"}>
            {p.features.map((feature, index) => (
              <ZoomCard
                key={feature.id}
                product={key}
                labels={labels}
                variant={journeyIsFeatures && index < 5 ? "step" : "default"}
                index={journeyIsFeatures && index < 5 ? `0${index + 1}` : undefined}
                detail={localize(feature, locale)}
              />
            ))}
          </div>
        </div>
      </section>

      {!journeyIsFeatures && (
        <section className="section section-alt" id="journey">
          <div className="container">
            <SectionHead eyebrow={c.journey} title={l(p.journey.title)} lead={l(p.journey.lead)} />
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

      <section className={`section${journeyIsFeatures ? " section-alt" : ""}`} id="architecture">
        <div className="container arch">
          <div>
            <SectionHead eyebrow={c.how} title={l(p.architecture.title)} lead={l(p.architecture.lead)} />
            <div className="integrations">
              <p className="eyebrow">{c.integrations}</p>
              <p className="muted">{l(p.integrations.lead)}</p>
              <ul>
                {p.integrations.items.map((item) => (
                  <li key={item.name}>
                    <strong className="mono">{item.name}</strong>
                    <span>{l(item.text)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="layers" role="list" aria-label={l(p.architecture.title)}>
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

      <section className={`section${journeyIsFeatures ? "" : " section-alt"}`} id="governance">
        <div className="container">
          <SectionHead eyebrow={c.governance} title={c.governanceTitle} />
          <div className="grid-4">
            {p.governance.map((item) => (
              <ZoomCard key={item.id} product={key} variant="compact" labels={labels} detail={localize(item, locale)} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="boundaries">
        <div className="container">
          <SectionHead eyebrow={c.boundaries} title={c.boundariesTitle} lead={c.boundariesLead} />
          <ul className="grid-3 boundaries">
            {p.notThis.map((item) => (
              <li key={item.title[1]} data-product={item.product}>
                <Ban size={18} aria-hidden />
                <h3>{l(item.title)}</h3>
                <p>{l(item.text)}</p>
                {item.product && (
                  <Link className="text-link" href={routes[locale][item.product]}>
                    {c.seeProduct} {l(products[item.product].name)} <ArrowRight size={14} aria-hidden />
                  </Link>
                )}
              </li>
            ))}
          </ul>
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
                <strong>{c.deliverable}{locale === "fr" ? " : " : ": "}</strong>
                {l(s.outcome)}
              </p>
              <div className="actions">
                <Link className="btn btn-primary" href={sprintHref(locale, key)}>
                  {c.seeSprint} <ArrowRight size={16} aria-hidden />
                </Link>
                <Link className="btn btn-secondary" href={routes[locale].contact}>
                  {c.frame}
                </Link>
              </div>
            </div>
            <ol className="mini-timeline">
              {s.steps.map((step) => (
                <li key={step.id}>
                  <span className="mono">{step.kicker && l(step.kicker)}</span>
                  <strong>{l(step.title)}</strong>
                  <p>{l(step.summary)}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container container-narrow">
          <SectionHead eyebrow="FAQ" title={c.faq} />
          <Faq items={p.faq.map((item) => ({ q: l(item.q), a: l(item.a) }))} />
          <p className="section-foot">
            <a className="text-link" href={appUrls[key]} target="_blank" rel="noopener">
              {dict.common.openApp} — {l(p.name)} <ArrowUpRight size={15} aria-hidden />
            </a>
          </p>
        </div>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </div>
  );
}
