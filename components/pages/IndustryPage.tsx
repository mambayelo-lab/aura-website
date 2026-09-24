import { ArrowRight, Check, CircleCheck, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/content/articles";
import { getDictionary } from "@/content/dictionary";
import { getPositioning } from "@/content/positioning";
import { routes, type Locale } from "@/lib/i18n";
import { ArticleCard, CtaBanner, SectionHeading } from "../blocks";

const config = {
  energy: { image: "/images/energy.jpg", topic: "energy" },
  supplyChain: { image: "/images/supply-chain.jpg", topic: "supply-chain" },
} as const;

export function IndustryPage({ locale, industry: key }: { locale: Locale; industry: "energy" | "supplyChain" }) {
  const dict = getDictionary(locale);
  const r = routes[locale];
  const industry = dict.industries[key];
  const { image, topic } = config[key];
  const { cases, example } = getPositioning(locale);
  const related = getArticles(locale)
    .filter((article) => article.topic === topic)
    .slice(0, 3);

  return (
    <>
      <section className="page-hero">
        <div className="hero-backdrop hero-backdrop-soft" aria-hidden />
        <div className="container page-hero-grid">
          <div className="page-hero-copy">
            <p className="eyebrow">
              {industry.kicker} · {industry.name}
            </p>
            <h1 className="title-xl">{industry.headline}</h1>
            <p className="lead lead-lg">{industry.lead}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary btn-lg" href={r.contact}>
                {dict.nav.cta} <ArrowRight size={17} aria-hidden />
              </Link>
              <Link className="btn btn-secondary btn-lg" href={r.decide}>
                {dict.offers.decide.name}
              </Link>
            </div>
          </div>
          <div className="page-hero-media">
            <Image
              src={image}
              alt={industry.imageAlt}
              width={1536}
              height={1152}
              priority
              sizes="(max-width: 960px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={cases.eyebrow} title={cases.title} align="split">
            <p className="aside-label">{industry.audienceTitle}</p>
            <ul className="tags tags-lg">
              {industry.audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionHeading>
          <div className="cases">
            {cases[key].map((item, index) => (
              <details key={item.title} className="case" open={index === 0}>
                <summary>
                  <span className="case-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="case-heading">
                    <strong>{item.title}</strong>
                    <span>{item.situation}</span>
                  </span>
                  <Plus size={20} aria-hidden />
                </summary>
                <div className="case-body">
                  <div>
                    <p className="case-label">{cases.analyse}</p>
                    <ul className="dot-list">
                      {item.analyse.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="case-label">{cases.deliver}</p>
                    <ul className="check-list">
                      {item.deliver.map((line) => (
                        <li key={line}>
                          <Check size={16} aria-hidden />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="case-angle">
                    <span>{cases.angle}</span>
                    {item.angle}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {key === "energy" && (
        <section className="section section-dark">
          <div className="dark-grid" aria-hidden />
          <div className="container">
            <SectionHeading eyebrow={example.eyebrow} title={example.title} lead={example.note} align="split" />
            <div className="example">
              <div className="example-card reveal">
                <p className="case-label">{example.inputsTitle}</p>
                <ul className="dot-list">
                  {example.inputs.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <div className="example-card reveal">
                <p className="case-label">{example.analysisTitle}</p>
                <ol className="example-steps">
                  {example.analysis.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ol>
                <p className="example-finding">{example.finding}</p>
              </div>
              <div className="example-card example-result reveal">
                <p className="case-label">{example.resultTitle}</p>
                <p className="example-verdict">
                  <CircleCheck size={22} aria-hidden />
                  {example.verdict}
                </p>
                <p className="example-detail">{example.detail}</p>
                <ul className="check-list">
                  {example.conditions.map((line) => (
                    <li key={line}>
                      <Check size={16} aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="example-takeaway">{example.takeaway}</p>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow={dict.insightsPage.eyebrow} title={dict.industryPage.insightsTitle} align="split">
              <Link className="text-link" href={r.insights}>
                {dict.common.allInsights} <ArrowRight size={16} aria-hidden />
              </Link>
            </SectionHeading>
            <div className="article-grid">
              {related.map((article) => (
                <ArticleCard key={article.slug} article={article} locale={locale} dict={dict} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
