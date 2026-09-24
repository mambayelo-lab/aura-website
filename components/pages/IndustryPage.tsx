import { ArrowRight, BatteryCharging, Network } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/content/articles";
import { getDictionary } from "@/content/dictionary";
import { routes, type Locale } from "@/lib/i18n";
import { ArticleCard, CtaBanner, SectionHeading } from "../blocks";

const config = {
  energy: { image: "/images/energy.jpg", topic: "energy", caseIndex: 0, icon: BatteryCharging },
  supplyChain: { image: "/images/supply-chain.jpg", topic: "supply-chain", caseIndex: 2, icon: Network },
} as const;

export function IndustryPage({ locale, industry: key }: { locale: Locale; industry: "energy" | "supplyChain" }) {
  const dict = getDictionary(locale);
  const r = routes[locale];
  const industry = dict.industries[key];
  const { image, topic, caseIndex, icon: Icon } = config[key];
  const useCase = dict.home.cases.items[caseIndex];
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
          <SectionHeading eyebrow={industry.audienceTitle} title={industry.decisionsTitle} align="split">
            <ul className="tags tags-lg">
              {industry.audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionHeading>
          <div className="decision-grid">
            {industry.decisions.map((decision) => (
              <article key={decision.title} className="card decision-card reveal">
                <h3>{decision.title}</h3>
                <p>{decision.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted section-tight-top">
        <div className="container">
          <div className="use-case-banner reveal">
            <span className="icon-tile icon-tile-lg">
              <Icon size={24} aria-hidden />
            </span>
            <div>
              <p className="eyebrow">
                {dict.industryPage.casesTitle} · {useCase.tag}
              </p>
              <h2 className="title-md">{useCase.title}</h2>
              <p className="lead">{useCase.text}</p>
            </div>
            <Link className="btn btn-secondary" href={r.decide}>
              {dict.offers.decide.sprint} <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

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
