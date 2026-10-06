import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { routes, type Locale } from "@/lib/i18n";
import { Faq, SectionHead } from "../blocks";
import { PlacementSection, ResourcesSection, SelfServeBanner } from "../ArchitectExtras";
import { APP, PRICING } from "@/content/home-architect";
import { selfServe } from "@/content/architect-extra";

const T = {
  fr: {
    eyebrow: "Aura Architect",
    h1: "Le jumeau numérique de l’architecte qui raisonne, dialogue et argumente.",
    sub: "Aura Architect s’appuie sur votre contexte, vos modèles et vos principes pour cadrer une demande, challenger une option et défendre une décision, comme le ferait votre meilleur architecte, à toute heure.",
    try: "Essayer",
    partner: "Devenir partenaire",
    seePricing: "Voir les tarifs",
    shotAlt: "Vue applicative d’Aura Architect",
    whoEyebrow: "Pour qui",
    whoTitle: "Pensé pour ceux qui portent la cohérence du SI.",
    who: [
      ["Architectes d’entreprise", "Un partenaire de réflexion pour cadrer, modéliser et arbitrer, sans perdre la main sur le raisonnement."],
      ["DSI", "Des décisions argumentées, traçables et présentables en comité, avec une vue claire des scénarios."],
      ["Cabinets de conseil", "Livrer plus vite des dossiers solides et homogènes, sur chaque mission, avec votre méthode."],
    ],
    useEyebrow: "Cas d’usage",
    useTitle: "Six moments où l’architecte gagne du temps et de la conviction.",
    uses: [
      ["Schéma directeur", "Cible, trajectoire et feuille de route construites avec vous, hypothèses explicites."],
      ["Dossier d’architecture", "Un dossier structuré, cohérent de bout en bout, prêt à être relu et défendu."],
      ["Design Authority", "Préparation des revues, contre-arguments anticipés, décisions consignées."],
      ["Stratégie et parties prenantes", "Enjeux, PESTEL, cartographie des acteurs et messages adaptés à chacun."],
      ["Data", "Domaines, flux et référentiels de données alignés sur les usages métier."],
      ["Inter-applicatif", "Dépendances, interfaces et impacts d’un changement rendus lisibles."],
    ],
    priceEyebrow: "Tarifs",
    priceTitle: "Une tarification simple, qui grandit avec vos équipes.",
    priceNote: "Prix HT indicatifs de lancement.",
    plans: [
      { name: "Solo", price: "79 €", unit: "/mois", text: "Pour l’architecte indépendant ou le consultant.", items: ["Un utilisateur", "Tous les modes de dialogue et de modélisation"] },
      { name: "Équipe", price: "129 €", unit: "/utilisateur/mois", text: "Pour les équipes d’architecture.", items: ["1 000 crédits d’analyse inclus", "Espace partagé et gouvernance d’équipe"], featured: true },
      { name: "Entreprise", price: "dès 6 000 €", unit: "/an", text: "Pour les déploiements à l’échelle du groupe.", items: ["Accompagnement dédié", "Exigences de sécurité et d’intégration sur mesure"] },
    ],
    optTitle: "Options",
    opts: [["Data", "+30 €/utilisateur/mois"], ["Infra & technique", "+30 €/utilisateur/mois"], ["Backlog & delivery", "+40 €/utilisateur/mois"]],
    connTitle: "Connecteurs",
    conn: "1 500 €/an",
    packsTitle: "Packs de crédits d’analyse",
    packs: [["5 000 crédits", "49 €"], ["25 000 crédits", "199 €"]],
    partnerEyebrow: "Partenaires",
    partnerTitle: "Cabinets : grandissez avec Aura.",
    partnerLead: "Un programme pensé pour les cabinets de conseil qui intègrent Aura Architect à leurs missions.",
    partnerItems: ["Remise partenaire sur les licences", "Commission sur la revente", "Formations co-animées pour vos équipes"],
    faqTitle: "Questions fréquentes",
    faq: [
      { q: "Où sont hébergées mes données, et comment sont-elles protégées ?", a: "L’hébergement est situé dans l’Union européenne. Les échanges sont chiffrés et l’accès est limité aux membres de votre espace." },
      { q: "Mes données servent-elles à entraîner des modèles ?", a: "Non. Vos modèles, documents et échanges restent les vôtres et ne servent pas à entraîner des modèles tiers." },
      { q: "Comment fonctionnent les crédits d’analyse ?", a: "Chaque interaction avancée consomme des crédits. L’offre Équipe en inclut 1 000, et des packs (5 000 pour 49 €, 25 000 pour 199 €) complètent au besoin." },
      { q: "Puis-je résilier à tout moment ?", a: "Oui. Les abonnements mensuels se résilient quand vous le souhaitez, sans frais, et vous pouvez exporter vos livrables." },
    ],
  },
  en: {
    eyebrow: "Aura Architect",
    h1: "The architect’s digital twin: it reasons, discusses and argues.",
    sub: "Aura Architect draws on your context, models and principles to frame a request, challenge an option and defend a decision, the way your best architect would, at any hour.",
    try: "Try it",
    partner: "Become a partner",
    seePricing: "See pricing",
    shotAlt: "Aura Architect application view",
    whoEyebrow: "Who it is for",
    whoTitle: "Built for those who carry the coherence of the IT landscape.",
    who: [
      ["Enterprise architects", "A thinking partner to frame, model and arbitrate, without ever losing control of the reasoning."],
      ["CIOs", "Well-argued, traceable decisions you can present to a board, with a clear view of scenarios."],
      ["Consulting firms", "Deliver solid, consistent deliverables faster on every engagement, with your own method."],
    ],
    useEyebrow: "Use cases",
    useTitle: "Six moments where the architect gains time and conviction.",
    uses: [
      ["Master plan", "Target, trajectory and roadmap built with you, assumptions made explicit."],
      ["Architecture document", "A structured file, consistent end to end, ready to be reviewed and defended."],
      ["Design Authority", "Review preparation, counter-arguments anticipated, decisions on record."],
      ["Strategy and stakeholders", "Stakes, PESTEL, actor mapping and messages tailored to each audience."],
      ["Data", "Data domains, flows and reference data aligned with business usage."],
      ["Inter-application", "Dependencies, interfaces and change impacts made readable."],
    ],
    priceEyebrow: "Pricing",
    priceTitle: "Simple pricing that grows with your teams.",
    priceNote: "Indicative launch prices, excl. VAT.",
    plans: [
      { name: "Solo", price: "€79", unit: "/month", text: "For the independent architect or consultant.", items: ["One user", "All dialogue and modelling modes"] },
      { name: "Team", price: "€129", unit: "/user/month", text: "For architecture teams.", items: ["1,000 analysis credits included", "Shared workspace and team governance"], featured: true },
      { name: "Enterprise", price: "from €6,000", unit: "/year", text: "For group-wide deployments.", items: ["Dedicated support", "Tailored security and integration requirements"] },
    ],
    optTitle: "Options",
    opts: [["Data", "+€30/user/month"], ["Infra & technical", "+€30/user/month"], ["Backlog & delivery", "+€40/user/month"]],
    connTitle: "Connectors",
    conn: "€1,500/year",
    packsTitle: "Analysis credit packs",
    packs: [["5,000 credits", "€49"], ["25,000 credits", "€199"]],
    partnerEyebrow: "Partners",
    partnerTitle: "Firms: grow with Aura.",
    partnerLead: "A programme designed for consulting firms that bring Aura Architect into their engagements.",
    partnerItems: ["Partner discount on licences", "Resale commission", "Co-delivered training for your teams"],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Where is my data hosted and how is it protected?", a: "Hosting is located in the European Union. Traffic is encrypted and access is limited to the members of your workspace." },
      { q: "Is my data used to train models?", a: "No. Your models, documents and conversations remain yours and are never used to train third-party models." },
      { q: "How do analysis credits work?", a: "Each advanced interaction uses credits. The Team plan includes 1,000, and packs (5,000 for €49, 25,000 for €199) top up as needed." },
      { q: "Can I cancel at any time?", a: "Yes. Monthly subscriptions can be cancelled whenever you like at no cost, and you can export your deliverables." },
    ],
  },
} as const;

export function ArchitectShowcase({ locale }: { locale: Locale }) {
  const t = T[locale];
  const contact = routes[locale].contact;
  const s = selfServe[locale];
  return (
    <div data-product="architect" className="showcase">
      <section className="hero hero-product dark">
        <div className="hero-backdrop" aria-hidden />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-pill">{t.eyebrow}</p>
            <h1 className="display">{t.h1}</h1>
            <p className="hero-sub">{t.sub}</p>
            <div className="actions">
              <a className="btn btn-ink btn-lg" href={PRICING}>
                {s.trial} <ArrowUpRight size={16} aria-hidden />
              </a>
              <a className="btn btn-secondary btn-lg" href={PRICING}>
                {s.subscribe}
              </a>
              <a className="text-link" href={APP}>{s.platform}</a>
              <a className="text-link" href="#tarifs">{t.seePricing}</a>
            </div>
          </div>
          <figure className="hero-shot">
            <span className="hero-shot-bar" aria-hidden><i /><i /><i /><span>aura-architect</span></span>
            <Image src="/images/product/architect-applicatif.webp" alt={t.shotAlt} width={1440} height={900} sizes="(max-width: 980px) 100vw, 45vw" priority />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={t.whoEyebrow} title={t.whoTitle} />
          <div className="grid-3">
            {t.who.map(([h, p]) => (
              <article key={h} className="offer-card" data-product="architect"><h3>{h}</h3><p>{p}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead eyebrow={t.useEyebrow} title={t.useTitle} />
          <div className="grid-3">
            {t.uses.map(([h, p]) => (
              <article key={h} className="offer-card" data-product="architect"><h3>{h}</h3><p>{p}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="tarifs">
        <div className="container">
          <SectionHead eyebrow={t.priceEyebrow} title={t.priceTitle} lead={t.priceNote} />
          <div className="grid-3 price-grid">
            {t.plans.map((p) => (
              <article key={p.name} className={`offer-card price-card${"featured" in p && p.featured ? " price-featured" : ""}`} data-product="architect">
                <h3>{p.name}</h3>
                <p className="price"><strong>{p.price}</strong> <span>{p.unit}</span></p>
                <p>{p.text}</p>
                <ul className="check-list">
                  {p.items.map((i) => <li key={i}><Check size={15} aria-hidden />{i}</li>)}
                </ul>
                {p.name === "Solo" ? (
                  <a className="btn btn-primary" href={PRICING}>{s.trial}</a>
                ) : "featured" in p && p.featured ? (
                  <a className="btn btn-primary" href={PRICING}>{s.subscribe}</a>
                ) : (
                  <Link className="btn btn-secondary" href={contact}>{s.contact}</Link>
                )}
              </article>
            ))}
          </div>
          <div className="grid-3 price-extras">
            <div className="offer-card" data-product="architect">
              <h3>{t.optTitle}</h3>
              <ul className="price-list">{t.opts.map(([a, b]) => <li key={a}><span>{a}</span><strong>{b}</strong></li>)}</ul>
            </div>
            <div className="offer-card" data-product="architect">
              <h3>{t.connTitle}</h3>
              <p className="price"><strong>{t.conn}</strong></p>
            </div>
            <div className="offer-card" data-product="architect">
              <h3>{t.packsTitle}</h3>
              <ul className="price-list">{t.packs.map(([a, b]) => <li key={a}><span>{a}</span><strong>{b}</strong></li>)}</ul>
            </div>
          </div>
          <p className="muted price-note">{t.priceNote}</p>
        </div>
      </section>

      <PlacementSection locale={locale} alt />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={t.partnerEyebrow} title={t.partnerTitle} lead={t.partnerLead} />
          <ul className="check-list">
            {t.partnerItems.map((i) => <li key={i}><Check size={15} aria-hidden />{i}</li>)}
          </ul>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href={`${contact}?partner=1`}>{t.partner}</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="faq">
        <div className="container container-narrow">
          <SectionHead eyebrow="FAQ" title={t.faqTitle} />
          <Faq items={[...t.faq]} />
          <p className="section-foot">
            <a className="btn btn-primary" href={PRICING}>{s.trial} <ArrowUpRight size={15} aria-hidden /></a>
          </p>
        </div>
      </section>

      <ResourcesSection locale={locale} />

      <SelfServeBanner locale={locale} />
    </div>
  );
}
