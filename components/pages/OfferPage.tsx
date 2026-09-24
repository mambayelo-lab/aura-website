import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/content/dictionary";
import { routes, type Locale } from "@/lib/i18n";
import { CtaBanner, Faq, OfferCard, SectionHeading, Steps } from "../blocks";
import { DecisionRecordMockup } from "../DecisionRecordMockup";

const images = { decide: "/images/decide.jpg", architect: "/images/architecture-team.jpg" };

export function OfferPage({ locale, offer: key }: { locale: Locale; offer: "decide" | "architect" }) {
  const dict = getDictionary(locale);
  const r = routes[locale];
  const offer = dict.offers[key];
  const otherKey = key === "decide" ? "architect" : "decide";

  return (
    <>
      <section className="page-hero">
        <div className="hero-backdrop hero-backdrop-soft" aria-hidden />
        <div className="container page-hero-grid">
          <div className="page-hero-copy">
            <p className="eyebrow">
              {offer.name} · {offer.sprint}
            </p>
            <h1 className="title-xl">{offer.headline}</h1>
            <p className="lead lead-lg">{offer.summary}</p>
            <div className="price-row">
              <div>
                <small>{dict.common.startingFrom}</small>
                <strong>{offer.price}</strong>
              </div>
              <div>
                <small>{offer.sprint}</small>
                <strong>{offer.duration}</strong>
              </div>
            </div>
            <div className="hero-actions">
              <Link className="btn btn-primary btn-lg" href={r.contact}>
                {dict.cta.button} <ArrowRight size={17} aria-hidden />
              </Link>
            </div>
          </div>
          <div className="page-hero-media">
            <Image
              src={images[key]}
              alt={offer.imageAlt}
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
          <SectionHeading
            eyebrow={dict.offerPage.deliverablesEyebrow}
            title={dict.offerPage.deliverablesTitle}
            align="split"
          />
          <div className="deliverables">
            {offer.deliverables.map((item, index) => (
              <article key={item.title} className="card deliverable reveal">
                <span className="deliverable-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          {key === "decide" && (
            <div className="offer-mockup reveal">
              <DecisionRecordMockup dict={dict} />
            </div>
          )}
        </div>
      </section>

      <section className="section section-dark">
        <div className="dark-grid" aria-hidden />
        <div className="container">
          <SectionHeading
            eyebrow={offer.process.eyebrow}
            title={offer.process.title}
            lead={offer.process.lead}
            align="split"
          />
          <Steps steps={offer.process.steps} />
        </div>
      </section>

      <section className="section">
        <div className="container faq-layout">
          <SectionHeading eyebrow={dict.offerPage.faqEyebrow} title={dict.offerPage.faqTitle} />
          <Faq items={offer.faq} />
        </div>
      </section>

      <section className="section section-muted section-tight-top">
        <div className="container">
          <p className="eyebrow">{dict.common.otherOffer}</p>
          <div className="offer-grid offer-grid-single">
            <OfferCard
              offer={dict.offers[otherKey]}
              href={r[otherKey]}
              index={otherKey === "decide" ? 1 : 2}
              dict={dict}
              dark={otherKey === "architect"}
            />
          </div>
        </div>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
