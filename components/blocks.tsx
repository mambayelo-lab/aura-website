import Image from "next/image";
import { ArrowRight, ArrowUpRight, Boxes, Plus, Radar, Scale } from "lucide-react";
import Link from "next/link";
import type { ArticleEntry } from "@/content/articles";
import type { Dictionary } from "@/content/dictionary";
import { comparisonRows, productOrder, products, sprints, tr } from "@/content/products";
import { appUrls, articleHref, routes, type Locale, type ProductKey } from "@/lib/i18n";
import type { EntryOption } from "./EntrySelector";
import type { ZoomLabels } from "./zoom/ZoomCard";

export const productIcons: Record<ProductKey, typeof Radar> = { supply: Radar, decide: Scale, architect: Boxes };

export function zoomLabels(dict: Dictionary): ZoomLabels {
  return { details: dict.common.details, close: dict.common.close, example: dict.common.example, schema: dict.common.schema };
}

export function sprintHref(locale: Locale, product: ProductKey) {
  return `${routes[locale].sprints}#${products[product].sprint}`;
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  as: Tag = "h2",
  center,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  as?: "h1" | "h2";
  center?: boolean;
}) {
  return (
    <div className={`section-head${center ? " section-head-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className={Tag === "h1" ? "display" : "h2"}>{title}</Tag>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function AppLink({ product, label, className = "btn btn-primary" }: { product: ProductKey; label: string; className?: string }) {
  return (
    <a className={className} href={appUrls[product]} target="_blank" rel="noopener">
      {label} <ArrowUpRight size={16} aria-hidden />
    </a>
  );
}

export function entryOptions(locale: Locale): EntryOption[] {
  const fr = locale === "fr";
  const situations: Record<ProductKey, [string, string]> = {
    supply: fr
      ? ["Nous découvrons les risques trop tard", "Ruptures, retards fournisseurs, couverture de stock qui fond sans qu’on le voie venir"]
      : ["We find out about risks too late", "Stock-outs, supplier delays, stock cover running down before anyone notices"],
    decide: fr
      ? ["Une décision stratégique traîne ou divise", "Investir, réorganiser, lancer, relocaliser, sans données prêtes ni consensus"]
      : ["A strategic decision drags on or divides", "Invest, reorganise, launch, relocate, with no data at hand and no consensus"],
    architect: fr
      ? ["Notre transformation SI risque de dériver", "Refonte ERP, fusion de SI, modernisation, nouveau canal : cible floue, dépendances mal connues"]
      : ["Our IT transformation is at risk of drifting", "ERP overhaul, IT merger, modernisation, new channel: unclear target, poorly known dependencies"],
  };
  const data: Record<ProductKey, string> = {
    supply: tr(comparisonRows[2].values.supply, locale),
    decide: tr(comparisonRows[2].values.decide, locale),
    architect: tr(comparisonRows[2].values.architect, locale),
  };
  return productOrder.map((key) => {
    const sprint = sprints[products[key].sprint];
    return {
      key,
      situation: situations[key][0],
      example: situations[key][1],
      product: tr(products[key].name, locale),
      sprint: tr(sprint.name, locale),
      duration: tr(sprint.duration, locale),
      outcome: tr(sprint.outcome, locale),
      data: data[key],
      productHref: routes[locale][key],
      sprintHref: sprintHref(locale, key),
      appHref: appUrls[key],
    };
  });
}

export function selectorLabels(locale: Locale) {
  return locale === "fr"
    ? {
        prompt: "Quelle situation vivez-vous ?",
        recommended: "Point d’entrée recommandé",
        duration: "Durée du sprint",
        outcome: "Ce que vous obtenez",
        data: "Données requises",
        product: "Voir le produit",
        sprint: "Voir le sprint",
        app: "Ouvrir l’application",
      }
    : {
        prompt: "Which situation are you facing?",
        recommended: "Recommended entry point",
        duration: "Sprint duration",
        outcome: "What you get",
        data: "Data required",
        product: "See the product",
        sprint: "See the sprint",
        app: "Open the application",
      };
}

/** “Which entry point?” comparison: a table on wide screens, stacked cards on phones. */
export function ComparisonTable({ locale }: { locale: Locale }) {
  const caption = locale === "fr" ? "Quel point d’entrée ? Comparatif des trois produits et de leur sprint" : "Which entry point? Comparison of the three products and their sprint";
  return (
    <div className="compare">
      <table className="compare-table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            <td />
            {productOrder.map((key) => {
              const Icon = productIcons[key];
              return (
                <th key={key} scope="col" data-product={key}>
                  <span className="compare-product">
                    <Icon size={18} aria-hidden />
                    {tr(products[key].name, locale)}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.label[1]}>
              <th scope="row">{tr(row.label, locale)}</th>
              {productOrder.map((key) => (
                <td key={key} data-product={key}>
                  {tr(row.values[key], locale)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="compare-cards">
        {productOrder.map((key) => {
          const Icon = productIcons[key];
          return (
            <section key={key} className="compare-card" data-product={key} aria-label={tr(products[key].name, locale)}>
              <p className="compare-product">
                <Icon size={18} aria-hidden />
                {tr(products[key].name, locale)}
              </p>
              <dl>
                {comparisonRows.map((row) => (
                  <div key={row.label[1]}>
                    <dt>{tr(row.label, locale)}</dt>
                    <dd>{tr(row.values[key], locale)}</dd>
                  </div>
                ))}
              </dl>
            </section>
          );
        })}
      </div>
    </div>
  );
}

const topicClass: Record<ArticleEntry["topic"], string> = {
  decision: "decide",
  energy: "decide",
  "supply-chain": "supply",
  architecture: "architect",
};

export function ArticleCard({ article, locale, dict }: { article: ArticleEntry; locale: Locale; dict: Dictionary }) {
  return (
    <Link href={articleHref(locale, article.slug)} className="article-card" data-product={topicClass[article.topic]}>
      {article.image && (
        <figure className="media media-wide">
          <Image src={article.image.src} alt="" fill sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 380px" />
        </figure>
      )}
      <p className="article-card-meta">
        <span className="product-dot" aria-hidden />
        <span>{article.category}</span>
        <span>
          {article.readTime} {dict.common.minRead}
        </span>
      </p>
      <h3>{article.title}</h3>
      <p className="article-card-standfirst">{article.standfirst}</p>
      <span className="text-link">
        {dict.common.readArticle} <ArrowRight size={15} aria-hidden />
      </span>
    </Link>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q} className="faq-item">
          <summary>
            {item.q}
            <Plus size={18} aria-hidden />
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBanner({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section section-tight">
      <div className="container">
        <div className="cta-banner dark">
          <div className="cta-art" aria-hidden>
            <Image src="/images/aura/illu-hero-wide.webp" alt="" fill sizes="(max-width: 980px) 100vw, 1200px" />
          </div>
          <div>
            <p className="eyebrow">{dict.cta.eyebrow}</p>
            <h2 className="h2">{dict.cta.title}</h2>
            <p className="lead">{dict.cta.lead}</p>
          </div>
          <div className="cta-actions">
            <Link className="btn btn-primary btn-lg" href={routes[locale].contact}>
              {dict.cta.button} <ArrowRight size={17} aria-hidden />
            </Link>
            <Link className="btn btn-secondary btn-lg" href={routes[locale].sprints}>
              {dict.cta.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ValueBlock({ value, locale, id = "value" }: { value: import("@/content/value").ValueCopy; locale: Locale; id?: string }) {
  const l = (v: readonly [string, string]) => tr(v, locale);
  return (
    <div className="value-block" id={id}>
      <SectionHead eyebrow={l(value.eyebrow)} title={l(value.title)} lead={l(value.lead)} />
      <div className="value-grid">
        <div className="value-col value-gains">
          <p className="fact-label">{l(value.gainsLabel)}</p>
          <ul>
            {value.gains.map((g) => (
              <li key={g.title[1]}>
                <strong>{l(g.title)}</strong>
                <span>{l(g.text)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="value-col value-costs">
          <p className="fact-label">{l(value.costsLabel)}</p>
          <ul>
            {value.costs.map((c) => (
              <li key={c[1]}>{l(c)}</li>
            ))}
          </ul>
          {value.source && (
            <p className="value-source">
              <strong>{l(value.source.figure)}</strong> {l(value.source.text)}{" "}
              <a href={value.source.href} target="_blank" rel="noopener noreferrer">
                {l(value.source.label)}
              </a>
            </p>
          )}
        </div>
      </div>
      {value.note && <p className="value-note">{l(value.note)}</p>}
    </div>
  );
}
