import { ArrowRight, ArrowUpRight, Check, Plus } from "lucide-react";
import Link from "next/link";
import type { ArticleEntry } from "@/content/articles";
import type { Dictionary, Offer } from "@/content/dictionary";
import { articleHref, contactEmail, routes, type Locale } from "@/lib/i18n";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  align?: "left" | "center" | "split";
  as?: "h1" | "h2";
  children?: React.ReactNode;
}) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Tag className={Tag === "h1" ? "title-xl" : "title-lg"}>{title}</Tag>
      </div>
      {(lead || children) && (
        <div className="section-heading-aside">
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
      )}
    </div>
  );
}

export function OfferCard({
  offer,
  href,
  index,
  dark,
  dict,
}: {
  offer: Offer;
  href: string;
  index: number;
  dark?: boolean;
  dict: Dictionary;
}) {
  return (
    <article className={`offer-card${dark ? " offer-card-dark" : ""}`}>
      <div className="offer-card-top">
        <span className="offer-index">0{index}</span>
        <span className="pill">{offer.sprint}</span>
      </div>
      <h3 className="offer-name">{offer.name}</h3>
      <p className="offer-headline">{offer.headline}</p>
      <p className="offer-summary">{offer.summary}</p>
      <ul className="check-list">
        {offer.highlights.map((item) => (
          <li key={item}>
            <Check size={16} aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      <div className="offer-footer">
        <div className="price">
          <small>{dict.common.startingFrom}</small>
          <strong>{offer.price}</strong>
          <span>{offer.duration}</span>
        </div>
        <Link className={`btn ${dark ? "btn-light" : "btn-secondary"}`} href={href}>
          {dict.common.discoverOffer} <ArrowRight size={16} aria-hidden />
        </Link>
      </div>
    </article>
  );
}

const topicClass: Record<ArticleEntry["topic"], string> = {
  decision: "topic-decision",
  energy: "topic-energy",
  "supply-chain": "topic-supply",
  architecture: "topic-architecture",
};

export function ArticleCard({
  article,
  locale,
  dict,
  featured,
}: {
  article: ArticleEntry;
  locale: Locale;
  dict: Dictionary;
  featured?: boolean;
}) {
  return (
    <Link
      href={articleHref(locale, article.slug)}
      className={`article-card ${topicClass[article.topic]}${featured ? " article-card-featured" : ""}`}
    >
      <div className="article-card-cover" aria-hidden>
        <span className="article-card-number">{String(article.index + 1).padStart(2, "0")}</span>
        <span className="article-card-glyph" />
      </div>
      <div className="article-card-body">
        <p className="article-card-meta">
          <span>{article.category}</span>
          <span>
            {article.readTime} {dict.common.minRead}
          </span>
        </p>
        <h3>{article.title}</h3>
        {featured && <p className="article-card-standfirst">{article.standfirst}</p>}
        <span className="text-link">
          {dict.common.readArticle} <ArrowUpRight size={16} aria-hidden />
        </span>
      </div>
    </Link>
  );
}

export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="steps" style={{ "--steps": steps.length } as React.CSSProperties}>
      {steps.map((step, index) => (
        <li key={step.title} className="step">
          <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
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
        <div className="cta-banner reveal">
          <div className="cta-glow" aria-hidden />
          <p className="eyebrow eyebrow-light">{dict.cta.eyebrow}</p>
          <h2 className="title-lg">{dict.cta.title}</h2>
          <div className="cta-actions">
            <Link className="btn btn-light btn-lg" href={routes[locale].contact}>
              {dict.cta.button} <ArrowRight size={17} aria-hidden />
            </Link>
            <a className="btn btn-ghost-light btn-lg" href={`mailto:${contactEmail}`}>
              {dict.cta.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
