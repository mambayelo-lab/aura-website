import {
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Factory,
  GitBranch,
  Network,
  Rocket,
  Shapes,
  Sparkles,
  Waves,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/content/articles";
import { getDictionary } from "@/content/dictionary";
import { getPositioning } from "@/content/positioning";
import { routes, type Locale } from "@/lib/i18n";
import { ArticleCard, CtaBanner, OfferCard, SectionHeading, Steps } from "../blocks";
import { DecisionRecordMockup } from "../DecisionRecordMockup";

const capabilityIcons = [Shapes, ArrowLeftRight, Waves, GitBranch, Rocket];
const caseIcons = [BatteryCharging, Factory, Network, Workflow];

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const h = dict.home;
  const why = getPositioning(locale).why;
  const r = routes[locale];
  const articles = getArticles(locale);
  const featured = [articles[0], articles[2], articles[6]];
  const industries = [
    { data: dict.industries.energy, href: r.energy, image: "/images/energy.jpg", icon: BatteryCharging },
    { data: dict.industries.supplyChain, href: r.supplyChain, image: "/images/supply-chain.jpg", icon: Network },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-backdrop" aria-hidden />
        <div className="container hero-copy">
          <Link className="hero-badge" href={r.decide}>
            <span className="hero-badge-icon">
              <Sparkles size={13} aria-hidden />
            </span>
            {h.badge}
            <ArrowRight size={14} aria-hidden />
          </Link>
          <h1 className="title-display">
            <span className="title-line">{h.titleStart}</span>{" "}
            <span className="title-line">
              <em>{h.titleEmphasis}</em> {h.titleEnd}
            </span>
          </h1>
          <p className="lead lead-lg">{h.lead}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary btn-lg" href={r.contact}>
              {h.primary} <ArrowRight size={17} aria-hidden />
            </Link>
            <a className="btn btn-secondary btn-lg" href="#offers">
              {h.secondary}
            </a>
          </div>
        </div>
        <div className="container hero-visual">
          <DecisionRecordMockup dict={dict} />
        </div>
        <div className="container">
          <dl className="facts">
            {h.facts.map((fact) => (
              <div key={fact.value} className="fact">
                <dt>{fact.value}</dt>
                <dd>{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={why.eyebrow} title={why.title} lead={why.lead} align="split" />
          <figure className="question-card reveal">
            <p className="question-before">
              {why.question.before} <span className="question-not">{why.question.not}</span> {why.question.but}
            </p>
            <blockquote>{why.question.answer}</blockquote>
          </figure>
          <h3 className="capabilities-title">{why.capabilitiesTitle}</h3>
          <div className="capabilities">
            {why.capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index];
              return (
                <article key={capability.title} className="card capability reveal">
                  <span className="icon-tile">
                    <Icon size={20} aria-hidden />
                  </span>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="offers">
        <div className="container">
          <SectionHeading eyebrow={h.offers.eyebrow} title={h.offers.title} lead={h.offers.lead} align="split" />
          <div className="offer-grid">
            <OfferCard offer={dict.offers.decide} href={r.decide} index={1} dict={dict} />
            <OfferCard offer={dict.offers.architect} href={r.architect} index={2} dict={dict} dark />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="dark-grid" aria-hidden />
        <div className="container">
          <SectionHeading eyebrow={h.method.eyebrow} title={h.method.title} lead={h.method.lead} align="split" />
          <Steps steps={h.method.steps} />
          <div className="flows">
            {[h.method.forward, h.method.backward].map((flow, index) => (
              <article key={flow.title} className={`flow reveal ${index === 0 ? "flow-forward" : "flow-backward"}`}>
                <h3>{flow.title}</h3>
                <p>{flow.text}</p>
                <ol className="flow-chain">
                  {flow.chain.map((node) => (
                    <li key={node}>{node}</li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="industries">
        <div className="container">
          <SectionHeading
            eyebrow={h.industries.eyebrow}
            title={h.industries.title}
            lead={h.industries.lead}
            align="split"
          />
          <div className="industry-grid">
            {industries.map(({ data, href, image, icon: Icon }) => (
              <Link key={href} href={href} className="industry-card reveal">
                <div className="industry-card-media">
                  <Image
                    src={image}
                    alt={data.imageAlt}
                    width={1536}
                    height={1152}
                    sizes="(max-width: 860px) 100vw, 50vw"
                  />
                </div>
                <div className="industry-card-body">
                  <p className="industry-kicker">
                    <Icon size={16} aria-hidden /> {data.kicker}
                  </p>
                  <h3>{data.name}</h3>
                  <p>{data.lead}</p>
                  <ul className="tags">
                    {data.decisions.map((decision) => (
                      <li key={decision.title}>{decision.title}</li>
                    ))}
                  </ul>
                  <span className="text-link">
                    {dict.common.learnMore} <ArrowUpRight size={16} aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow={h.cases.eyebrow} title={h.cases.title} lead={h.cases.lead} align="split" />
          <div className="case-grid">
            {h.cases.items.map((item, index) => {
              const Icon = caseIcons[index];
              return (
                <article key={item.title} className="card case-card reveal">
                  <span className="icon-tile">
                    <Icon size={20} aria-hidden />
                  </span>
                  <p className="case-tag">{item.tag}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={h.insights.eyebrow} title={h.insights.title} lead={h.insights.lead} align="split">
            <Link className="text-link" href={r.insights}>
              {dict.common.allInsights} <ArrowRight size={16} aria-hidden />
            </Link>
          </SectionHeading>
          <div className="article-grid">
            {featured.map((article) => (
              <ArticleCard key={article.slug} article={article} locale={locale} dict={dict} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
