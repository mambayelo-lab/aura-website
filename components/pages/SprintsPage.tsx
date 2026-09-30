import { ArrowRight, Ban, Check, CircleCheck, Info, Users } from "lucide-react";
import Link from "next/link";
import { CostTiles } from "../CostTiles";
import { getDictionary } from "@/content/dictionary";
import { offers } from "@/content/offers";
import { tr } from "@/content/products";
import { routes, type Locale } from "@/lib/i18n";
import { CtaBanner, More, SectionHead, productIcons, zoomLabels } from "../blocks";
import { MethodCards } from "../Methods";
import { methodOrder } from "@/content/methods";

const copy = {
  fr: {
    eyebrow: "Offres",
    title: "Un problème, une offre, un résultat.",
    lead: "Commencez par un diagnostic de deux semaines. Continuez avec Aura Supply, ou cadrez votre transformation avec un Sprint Architecture.",
    without: "Sans Aura",
    with: "Avec Aura",
    how: "Comment ça se passe",
    needs: "Ce dont on a besoin de vous",
    deliverables: "Livrables",
    good: "À savoir",
    optional: "En option",
    cta: "Réserver un diagnostic",
    talk: "En parler",
    methodTitle: "La méthode, pour ceux qui veulent le détail",
    archFigure: "Un grand programme SI dépasse son budget de 45 % en moyenne.",
    archSource: "McKinsey et Université d’Oxford",
  },
  en: {
    eyebrow: "Offers",
    title: "One problem, one offer, one result.",
    lead: "Start with a two-week diagnostic. Carry on with Aura Supply, or frame your transformation with an Architecture Sprint.",
    without: "Without Aura",
    with: "With Aura",
    how: "How it works",
    needs: "What we need from you",
    deliverables: "Deliverables",
    good: "Good to know",
    optional: "Optional",
    cta: "Book a diagnostic",
    talk: "Talk it through",
    methodTitle: "The method, for those who want the detail",
    archFigure: "A large IT programme runs 45% over budget on average.",
    archSource: "McKinsey and University of Oxford",
  },
};

const archHref = "https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value";

export function SprintsPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const dict = getDictionary(locale);
  const l = (v: readonly [string, string]) => tr(v, locale);
  const contact = routes[locale].contact;

  return (
    <>
      <section className="hero hero-compact dark">
        <div className="hero-backdrop" aria-hidden />
        <div className="container">
          <SectionHead as="h1" eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
          <nav className="sprint-nav" aria-label={c.eyebrow}>
            {offers.map((o) => {
              const Icon = productIcons[o.product];
              return (
                <a key={o.key} href={`#${o.key}`} data-product={o.product}>
                  <Icon size={18} aria-hidden />
                  <span>
                    <strong>{l(o.name)}</strong>
                    <small>{l(o.format)}</small>
                  </span>
                  <ArrowRight size={16} aria-hidden />
                </a>
              );
            })}
          </nav>
        </div>
      </section>

      {offers.map((o, i) => {
        const Icon = productIcons[o.product];
        return (
          <section key={o.key} id={o.key} className={`section section-tight${i % 2 ? " section-alt" : ""}`} data-product={o.product}>
            <div className="container">
              <article className="offer-full">
                <header className="offer-full-head">
                  <p className="eyebrow eyebrow-pill">
                    <Icon size={14} aria-hidden /> {o.optional ? c.optional : l(o.format)}
                  </p>
                  <h2 className="h2">{l(o.name)}</h2>
                  <p className="lead">{l(o.pitch)}</p>
                  {o.key === "architecture" && (
                    <p className="impact-line">
                      {c.archFigure}{" "}
                      <a href={archHref} target="_blank" rel="noopener noreferrer">
                        {c.archSource}
                      </a>
                    </p>
                  )}
                </header>

                <div className="offer-compare">
                  <div className="offer-without">
                    <p className="fact-label">
                      <Ban size={15} aria-hidden /> {c.without}
                    </p>
                    <ul className="plain-list">
                      {o.without.map((t) => (
                        <li key={t[1]}>{l(t)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="offer-with">
                    <p className="fact-label">
                      <CircleCheck size={15} aria-hidden /> {c.with}
                    </p>
                    <ul className="plain-list">
                      {o.with.map((t) => (
                        <li key={t[1]}>{l(t)}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h3 className="h3">{c.how}</h3>
                <ol className="offer-steps">
                  {o.steps.map(([when, what]) => (
                    <li key={when[1]}>
                      <span className="mono">{l(when)}</span>
                      <p>{l(what)}</p>
                    </li>
                  ))}
                </ol>

                <div className="offer-facts">
                  <div>
                    <p className="fact-label">
                      <Users size={15} aria-hidden /> {c.needs}
                    </p>
                    <ul className="check-list">
                      {o.needs.map((t) => (
                        <li key={t[1]}>
                          <Check size={15} aria-hidden />
                          {l(t)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="fact-label">
                      <Check size={15} aria-hidden /> {c.deliverables}
                    </p>
                    <ul className="check-list">
                      {o.deliverables.map((t) => (
                        <li key={t[1]}>
                          <Check size={15} aria-hidden />
                          {l(t)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="fact-label">
                      <Info size={15} aria-hidden /> {c.good}
                    </p>
                    <ul className="plain-list">
                      {o.good.map((t) => (
                        <li key={t[1]}>{l(t)}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="actions">
                  <Link className="btn btn-primary" href={contact}>
                    {o.key === "diagnostic" ? c.cta : c.talk} <ArrowRight size={16} aria-hidden />
                  </Link>
                  {o.product !== "decide" && (
                    <Link className="btn btn-secondary" href={routes[locale][o.product]}>
                      {locale === "fr" ? "Voir le produit" : "See the product"}
                    </Link>
                  )}
                </div>
              </article>
            </div>
          </section>
        );
      })}

      <CostTiles locale={locale} />

      <section className="section section-tight" id="method">
        <div className="container">
          <More label={c.methodTitle}>
            <MethodCards keys={methodOrder} locale={locale} labels={zoomLabels(dict)} />
          </More>
        </div>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
