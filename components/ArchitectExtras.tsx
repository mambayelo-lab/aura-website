import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { routes, type Locale } from "@/lib/i18n";
import { APP, PRICING } from "@/content/home-architect";
import { placement, resources, resourcesIntro, selfServe } from "@/content/architect-extra";
import { SectionHead } from "./blocks";

/** Where automation, language models and people each belong. */
export function PlacementSection({ locale, alt = false }: { locale: Locale; alt?: boolean }) {
  const p = placement[locale];
  return (
    <section className={`section${alt ? " section-alt" : ""}`} id={locale === "fr" ? "repartition" : "placement"}>
      <div className="container">
        <SectionHead eyebrow={p.eyebrow} title={p.title} lead={p.lead} />
        <div className="grid-3">
          {p.kinds.map((k) => (
            <article key={k.name} className="offer-card" data-product="architect">
              <h3>{k.name}</h3>
              <p>{k.when}</p>
              <p className="muted">
                <em>{k.example}</em>
              </p>
            </article>
          ))}
        </div>
        <p className="muted price-note">{p.note}</p>
      </div>
    </section>
  );
}

/** Resources teaser: the three method notes. */
export function ResourcesSection({ locale, alt = false }: { locale: Locale; alt?: boolean }) {
  const t = resourcesIntro[locale];
  const base = routes[locale].resources;
  return (
    <section className={`section${alt ? " section-alt" : ""}`} id={locale === "fr" ? "ressources" : "resources"}>
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        <div className="grid-3">
          {resources[locale].map((r) => (
            <article key={r.slug} className="offer-card" data-product="architect">
              <h3>{r.title}</h3>
              <p>{r.standfirst}</p>
              <Link className="text-link" href={`${base}#${r.slug}`}>
                {t.read} <ArrowRight size={14} aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Self-service path: trial, subscribe, platform. Contact only for Enterprise. */
export function SelfServeBanner({ locale }: { locale: Locale }) {
  const s = selfServe[locale];
  return (
    <section className="section section-tight">
      <div className="container">
        <div className="cta-banner dark">
          <div>
            <p className="eyebrow">{s.eyebrow}</p>
            <h2 className="h2">{s.title}</h2>
            <p className="lead">{s.lead}</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary btn-lg" href={PRICING}>
              {s.trial} <ArrowRight size={17} aria-hidden />
            </a>
            <a className="btn btn-secondary btn-lg" href={PRICING}>
              {s.subscribe}
            </a>
            <a className="text-link" href={APP}>
              {s.platform} <ArrowRight size={14} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Resources page: the three notes in full. */
export function ResourcesPage({ locale }: { locale: Locale }) {
  const t = resourcesIntro[locale];
  return (
    <>
      <article className="article">
        <header className="article-header">
          <div className="hero-backdrop" aria-hidden />
          <div className="container container-narrow">
            <Link className="back-link" href={routes[locale].architect}>
              <ArrowLeft size={16} aria-hidden /> {t.back}
            </Link>
            <p className="article-meta">
              <span className="badge">Aura Architect</span>
            </p>
            <h1 className="display display-sm">{t.eyebrow}</h1>
            <p className="article-standfirst">{t.lead}</p>
            <ol className="check-list">
              {resources[locale].map((r) => (
                <li key={r.slug}>
                  <a className="text-link" href={`#${r.slug}`}>
                    {r.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </header>
        <div className="container container-narrow article-body">
          {resources[locale].map((r) => (
            <section key={r.slug} id={r.slug} style={{ scrollMarginTop: "6rem" }}>
              <h2 className="h2">{r.title}</h2>
              <p>
                <strong>{r.standfirst}</strong>
              </p>
              {r.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <aside className="takeaways">
                <p className="takeaways-title">{t.points}</p>
                <ul>
                  {r.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </aside>
            </section>
          ))}
        </div>
      </article>
      <SelfServeBanner locale={locale} />
    </>
  );
}
