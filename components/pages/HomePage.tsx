import { ArrowRight, Check, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/content/dictionary";
import { routes, type Locale } from "@/lib/i18n";
import { CtaBanner, SectionHead } from "../blocks";
import { ModelWeave } from "../ModelWeave";
import { home, sectors, plans, APP, PRICING } from "@/content/home-architect";

export function HomePage({ locale }: { locale: Locale }) {
  const c = home[locale];
  const dict = getDictionary(locale);
  const r = routes[locale];
  const L = locale === "fr" ? 0 : 1;
  const shot = (n: string) => `/images/product/architect-v2-${n}-${locale}.webp`;

  return (
    <>
      {/* Hero : promesse, visualisation du modèle, essai */}
      <section className="hero dark ax-hero">
        <div className="container ax-hero-grid">
          <div className="ax-hero-copy">
            <p className="eyebrow eyebrow-pill">{c.eyebrow}</p>
            <h1 className="display ax-display">{c.title}</h1>
            <p className="lead lead-lg">{c.lead}</p>
            <div className="actions">
              <a className="btn btn-primary btn-lg" href={PRICING}>
                {c.trial} <ArrowRight size={17} aria-hidden />
              </a>
              <a className="btn btn-secondary btn-lg" href="#demo">
                {c.seeDemo}
              </a>
            </div>
            <p className="ax-fine">{c.trialNote}</p>
          </div>
          <ModelWeave labels={c.weave} />
        </div>
        <div className="container" id="demo">
          <figure className="ax-frame">
            <Image src={shot("capacites")} alt={c.heroShotAlt} width={1600} height={1000} priority sizes="(max-width: 1240px) 100vw, 1180px" />
            <figcaption>{c.heroShotCaption}</figcaption>
          </figure>
        </div>
      </section>

      {/* Situation → complication → question → réponse */}
      <section className="section ax-scq">
        <div className="container">
          <SectionHead eyebrow={c.scqEyebrow} title={c.scqTitle} />
          <ol className="ax-scq-list">
            {c.scq.map(([k, v], i) => (
              <li key={k} className={i === 3 ? "is-answer" : undefined}>
                <span className="ax-scq-k">{k}</span>
                <p>{v}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ce que cela vous apporte */}
      <section className="section section-alt" id={locale === "fr" ? "benefices" : "benefits"}>
        <div className="container">
          <SectionHead eyebrow={c.benefitsEyebrow} title={c.benefitsTitle} lead={c.benefitsLead} />
          <div className="ax-aud">
            {c.audiences.map((a, i) => (
              <article key={a.who} className={`ax-card${i === 0 ? " ax-card-hero" : ""}`}>
                <p className="eyebrow">{a.who}</p>
                <h3>{a.title}</h3>
                <ul className="check-list">
                  {a.items.map((it) => (
                    <li key={it}>
                      <Check size={15} aria-hidden />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche, 5 temps */}
      <section className="section" id={locale === "fr" ? "methode" : "method"}>
        <div className="container">
          <SectionHead eyebrow={c.howEyebrow} title={c.howTitle} />
          <ol className="ax-steps">
            {c.steps.map(([t, d], i) => (
              <li key={t}>
                <span className="ax-step-n" aria-hidden>
                  {i + 1}
                </span>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ce qui rend Aura unique, avec la preuve */}
      <section className="section dark" id={locale === "fr" ? "unique" : "different"}>
        <div className="container">
          <SectionHead eyebrow={c.uniqueEyebrow} title={c.uniqueTitle} />
          <div className="ax-unique">
            <ul className="ax-unique-list">
              {c.unique.map(([t, d]) => (
                <li key={t}>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </li>
              ))}
            </ul>
            <figure className="ax-frame ax-frame-side">
              <Image src={shot("trace")} alt={c.traceAlt} width={1600} height={1000} sizes="(max-width: 980px) 100vw, 640px" />
              <figcaption>{c.traceCaption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Captures réelles */}
      <section className="section" id={locale === "fr" ? "captures" : "screens"}>
        <div className="container">
          <SectionHead eyebrow={c.shotsEyebrow} title={c.shotsTitle} lead={c.shotsLead} />
          <div className="ax-gallery">
            {c.shots.map(([n, cap]) => (
              <figure key={n} className="ax-frame">
                <Image src={shot(n)} alt={cap} width={1600} height={1000} sizes="(max-width: 980px) 100vw, 580px" />
                <figcaption>{cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Tous secteurs */}
      <section className="section section-alt" id={locale === "fr" ? "secteurs" : "sectors"}>
        <div className="container">
          <SectionHead eyebrow={c.sectorsEyebrow} title={c.sectorsTitle} lead={c.sectorsLead} />
          <div className="ax-sectors">
            {sectors.map((s) => (
              <article key={s.name[0]} className="ax-sector">
                <h3>{s.name[L]}</h3>
                <p className="ax-chain">{s.chain[L].join(" → ")}</p>
                <p className="ax-trend">
                  <Sparkles size={13} aria-hidden /> {s.trend[L]}
                </p>
              </article>
            ))}
          </div>
          <p className="ax-fine ax-fine-dark">{c.sectorsNote}</p>
        </div>
      </section>

      {/* Decide intégré, Supply en vitrine */}
      <section className="section">
        <div className="container ax-split">
          <div>
            <SectionHead eyebrow={c.decideEyebrow} title={c.decideTitle} lead={c.decideLead} />
            <ul className="check-list">
              {c.decideItems.map((it) => (
                <li key={it}>
                  <Check size={15} aria-hidden />
                  {it}
                </li>
              ))}
            </ul>
            <p className="ax-supply">
              {c.supply}{" "}
              <Link className="text-link" href={r.supply}>
                {c.supplyLink} <ArrowRight size={14} aria-hidden />
              </Link>
            </p>
          </div>
          <figure className="ax-frame">
            <Image src={shot("decider")} alt={c.decideAlt} width={1600} height={1000} sizes="(max-width: 980px) 100vw, 580px" />
            <figcaption>{c.decideAlt}</figcaption>
          </figure>
        </div>
      </section>

      {/* Offres */}
      <section className="section section-alt" id={locale === "fr" ? "tarifs" : "pricing"}>
        <div className="container">
          <SectionHead eyebrow={c.priceEyebrow} title={c.priceTitle} lead={c.priceLead} />
          <div className="ax-plans">
            {plans[locale].map((p) => (
              <article key={p.name} className={`ax-plan${p.featured ? " is-featured" : ""}`}>
                <h3>{p.name}</h3>
                <p className="ax-plan-for">{p.for}</p>
                <p className="ax-price">
                  {p.price} <small>{p.unit}</small>
                </p>
                <ul className="check-list">
                  {p.items.map((it) => (
                    <li key={it}>
                      <Check size={15} aria-hidden />
                      {it}
                    </li>
                  ))}
                </ul>
                <a className={`btn ${p.featured ? "btn-primary" : "btn-secondary"} btn-block`} href={p.href}>
                  {p.cta} <ArrowRight size={16} aria-hidden />
                </a>
              </article>
            ))}
          </div>
          <dl className="ax-extras">
            {c.extras.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="ax-fine ax-fine-dark">
            {c.priceNote}{" "}
            <a className="text-link" href={APP}>
              {c.access} <ArrowRight size={14} aria-hidden />
            </a>
          </p>
        </div>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
