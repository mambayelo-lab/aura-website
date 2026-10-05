import { ArrowRight, ArrowUpRight, Compass, Radar, Scale, CircleCheck } from "lucide-react";
import Link from "next/link";
import { appUrls, routes, type Locale } from "@/lib/i18n";
import { SectionHead } from "../blocks";

const copy = {
  fr: {
    eyebrow: "Plateforme Aura",
    title: "Une plateforme, deux portes, un moteur.",
    lead: "Aura accompagne la décision d’entreprise du cadrage au pilotage. Deux applications, un même moteur de décision, une même exigence : rien d’inventé, tout tracé.",
    doorsEyebrow: "Deux portes",
    doors: [
      {
        key: "architect",
        kicker: "Cadrer et architecturer",
        name: "Aura Architect",
        text: "Le jumeau numérique de l’architecte, compagnon des métiers, DSI, responsables de transformation et PMO. Il cadre un projet ou une transformation, dessine l’architecture et présente la décision aux dirigeants : une fiche BOARD avec le résultat métier, les options, les avantages et risques, la recommandation et la décision demandée. Il accélère aussi les transformations en difficulté.",
        points: ["Cadrage et architecture", "Fiche BOARD pour les dirigeants", "Relance des transformations en difficulté"],
        open: "Ouvrir Architect",
        more: "Découvrir Architect",
        href: appUrls.architect,
      },
      {
        key: "supply",
        kicker: "Piloter et arbitrer",
        name: "Aura Control Tower",
        text: "La tour de contrôle décisionnelle. Elle lit le SI et applique des règles causales traçables (SI … ALORS …). Elle ne calcule rien à la place du SI et n’émet aucune consigne. Des packs par domaine (Supply, Énergie, …) ; chaque alerte ouvre une décision.",
        points: ["Règles causales SI … ALORS …", "Packs par domaine : Supply, Énergie, …", "Chaque alerte ouvre une décision"],
        open: "Ouvrir Control Tower",
        more: "Découvrir Control Tower",
        href: appUrls.supply,
      },
    ],
    engineEyebrow: "Un moteur commun",
    engineTitle: "Décider",
    engineText: "Présent dans les deux applications : comparaison qualitative des options et explication traçable de la recommandation. Un humain tranche et signe.",
    principlesEyebrow: "Trois principes",
    principles: [
      ["Aucune hallucination", "Ce qui n’est pas connu est « à confirmer »."],
      ["Traçable de bout en bout", "Identifiants stables, de la donnée à la décision."],
      ["Simple", "Une conversation, un canevas, une décision."],
    ],
    contact: "Nous contacter",
  },
  en: {
    eyebrow: "Aura Platform",
    title: "One platform, two doors, one engine.",
    lead: "Aura supports enterprise decisions from scoping to steering. Two applications, one decision engine, one requirement: nothing invented, everything traced.",
    doorsEyebrow: "Two doors",
    doors: [
      {
        key: "architect",
        kicker: "Scope and architect",
        name: "Aura Architect",
        text: "The architect’s digital twin, a companion for business teams, CIOs, transformation leaders and PMOs. It scopes a project or a transformation, draws the architecture and presents the decision to executives: a BOARD sheet with the business outcome, options, benefits and risks, recommendation and decision requested. It also speeds up transformations in difficulty.",
        points: ["Scoping and architecture", "BOARD sheet for executives", "Rescuing transformations in difficulty"],
        open: "Open Architect",
        more: "Discover Architect",
        href: appUrls.architect,
      },
      {
        key: "supply",
        kicker: "Steer and arbitrate",
        name: "Aura Control Tower",
        text: "The decision control tower. It reads your systems and applies traceable causal rules (IF … THEN …). It computes nothing in place of your systems and issues no instructions. Domain packs (Supply, Energy, …); every alert opens a decision.",
        points: ["Causal rules IF … THEN …", "Domain packs: Supply, Energy, …", "Every alert opens a decision"],
        open: "Open Control Tower",
        more: "Discover Control Tower",
        href: appUrls.supply,
      },
    ],
    engineEyebrow: "One shared engine",
    engineTitle: "Decide",
    engineText: "Present in both applications: qualitative comparison of the options and a traceable explanation of the recommendation. A person decides and signs.",
    principlesEyebrow: "Three principles",
    principles: [
      ["No hallucination", "What is not known is marked “to confirm”."],
      ["Traceable end to end", "Stable identifiers, from data to decision."],
      ["Simple", "One conversation, one canvas, one decision."],
    ],
    contact: "Contact us",
  },
};

const icons = { architect: Compass, supply: Radar } as const;

/** The platform block, reused as the hero of /plateforme and as a section of the home. */
export function PlatformSection({ locale, hero = false }: { locale: Locale; hero?: boolean }) {
  const c = copy[locale];
  const r = routes[locale];
  const Title = hero ? "h1" : "h2";

  return (
    <section className={`section platform${hero ? " platform-hero" : ""}`} id="plateforme">
      <div className="platform-glow" aria-hidden />
      <div className="container">
        <div className="platform-head">
          <p className="eyebrow eyebrow-pill">{c.eyebrow}</p>
          <Title className={hero ? "display display-promise" : "h2"}>{c.title}</Title>
          <p className="lead">{c.lead}</p>
        </div>

        <div className="platform-doors">
          {c.doors.map((door) => {
            const Icon = icons[door.key as keyof typeof icons];
            const pageHref = door.key === "architect" ? r.architect : r.supply;
            return (
              <article key={door.key} className="offer-card platform-door" data-product={door.key}>
                <p className="eyebrow">{door.kicker}</p>
                <h3>
                  <Icon size={20} aria-hidden /> {door.name}
                </h3>
                <p>{door.text}</p>
                <ul className="trust-list">
                  {door.points.map((p) => (
                    <li key={p}>
                      <CircleCheck size={16} aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="actions">
                  <a className="btn btn-primary" href={door.href} target="_blank" rel="noopener noreferrer">
                    {door.open} <ArrowUpRight size={16} aria-hidden />
                  </a>
                  <Link className="text-link" href={pageHref}>
                    {door.more} <ArrowRight size={15} aria-hidden />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="platform-engine">
          <div className="platform-engine-icon" aria-hidden>
            <Scale size={22} />
          </div>
          <div>
            <p className="eyebrow">{c.engineEyebrow}</p>
            <h3>{c.engineTitle}</h3>
            <p>{c.engineText}</p>
          </div>
        </div>

        <div className="platform-principles">
          <p className="eyebrow">{c.principlesEyebrow}</p>
          <div className="grid-3">
            {c.principles.map(([title, text]) => (
              <article key={title} className="platform-principle">
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlatformPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const r = routes[locale];
  return (
    <>
      <PlatformSection locale={locale} hero />
      <section className="section section-tight section-alt">
        <div className="container">
          <SectionHead eyebrow={locale === "fr" ? "Et ensuite" : "What next"} title={locale === "fr" ? "Parlons de votre prochaine décision." : "Let’s talk about your next decision."} />
          <div className="actions">
            <Link className="btn btn-primary" href={r.contact}>
              {c.contact} <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
