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
      ? ["Un signal revient dans nos données", "Ruptures, retards fournisseurs, couverture de stock vue trop tard"]
      : ["A signal keeps coming back in our data", "Stock-outs, supplier delays, stock cover seen too late"],
    decide: fr
      ? ["Nous avons une question stratégique à trancher", "Investir, réorganiser, lancer, relocaliser — sans données prêtes"]
      : ["We have a strategic question to settle", "Invest, reorganise, launch, relocate — without data at hand"],
    architect: fr
      ? ["Nous lançons un programme de transformation", "Refonte ERP, fusion de SI, modernisation, nouveau canal"]
      : ["We are launching a transformation programme", "ERP overhaul, IT merger, modernisation, new channel"],
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
        prompt: "Qu’est-ce qui vous amène ?",
        recommended: "Point d’entrée recommandé",
        duration: "Durée du sprint",
        outcome: "Livrable",
        data: "Données requises",
        product: "Voir le produit",
        sprint: "Voir le sprint",
        app: "Ouvrir l’application",
      }
    : {
        prompt: "What brings you here?",
        recommended: "Recommended entry point",
        duration: "Sprint duration",
        outcome: "Deliverable",
        data: "Data required",
        product: "See the product",
        sprint: "See the sprint",
        app: "Open the application",
      };
}

/** “Which entry point?” comparison: a table on wide screens, stacked cards on phones. */
export function ComparisonTable({ locale }: { locale: Locale }) {
  const caption = locale === "fr" ? "Quel point d’entrée ? Comparatif des trois produits et de leur sprint" : "Which entry point? Comparison of the three products and their sprint";
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
