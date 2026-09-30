import Image from "next/image";
import { ArrowRight, Radar, Ban, Check, Repeat, Target, Rocket, Infinity as Loop } from "lucide-react";
import { FlowStrip } from "../FlowStrip";
import { ArchitectOffer } from "../ArchitectOffer";
import Link from "next/link";
import { getDictionary } from "@/content/dictionary";
import { localize, products, sprints, tr, type SprintKey } from "@/content/products";
import { routes, type Locale } from "@/lib/i18n";
import {
  AppLink,
  CtaBanner,
  More,
  SectionHead,
  ValueBlock,
  productIcons,
  zoomLabels,
} from "../blocks";
import { MethodCards, MethodChips } from "../Methods";
import { methodOrder, sprintMethods } from "@/content/methods";
import { ZoomCard } from "../zoom/ZoomCard";
import { sprintsValue } from "@/content/value";

const copy = {
  fr: {
    eyebrow: "Offres",
    title: "Trois portes d’entrée, un livrable que vous gardez.",
    lead: "Deux offres pour les directeurs supply chain, une pour les DSI et les architectes. Un périmètre précis, un déroulé fixe, des entrées connues, pas de prix affiché : on le cale au cadrage. La suite naturelle est une licence Aura Supply Chain ou Aura Architect.",
    methodEyebrow: "Méthode",
    methodTitle: "D’abord comprendre le système, pour ne pas traiter le mauvais problème.",
    methodLead: "Chaque offre s’ouvre sur une analyse systémique du périmètre. Le moteur de décision évalue ensuite les options avec une méthode issue de travaux de thèse, robuste à l’incertitude ; Architect y ajoute DDD, architecture modulaire, TOGAF, CESAMES et BPMN.",
    compareEyebrow: "Par où commencer ?",
    compareTitle: "Trois situations, trois sprints : le comparatif.",
    forWhom: "Pour qui",
    trigger: "Votre situation",
    inputs: "Entrées nécessaires",
    schedule: "Déroulé",
    deliverables: "Ce que vous obtenez",
    notThis: "Ce que ce n’est pas",
    after: "Après le sprint",
    frame: "Parler de ma situation",
    seeProduct: "Voir le produit",
    moreMethods: "Les sept méthodes en détail",
    seeCompare: "Afficher le comparatif",
  },
  en: {
    eyebrow: "Offers",
    title: "Three ways in, a deliverable you keep.",
    lead: "Two offers for supply chain directors, one for CIOs and architects. A precise scope, a fixed schedule, known inputs, no list price: we set it during scoping. The natural next step is an Aura Supply Chain or Aura Architect licence.",
    methodEyebrow: "Method",
    methodTitle: "First understand the system, so you do not solve the wrong problem.",
    methodLead: "Every offer opens with a systems analysis of the scope. The decision engine then evaluates options with a method drawn from doctoral research, robust to uncertainty; Architect adds DDD, modular architecture, TOGAF, CESAMES and BPMN.",
    compareEyebrow: "Where to start?",
    compareTitle: "Three situations, three sprints: side by side.",
    forWhom: "Who it is for",
    trigger: "Your situation",
    inputs: "Inputs needed",
    schedule: "Schedule",
    deliverables: "What you walk away with",
    notThis: "What it is not",
    after: "After the sprint",
    frame: "Discuss my situation",
    seeProduct: "See the product",
    moreMethods: "The seven methods in detail",
    seeCompare: "Show the comparison",
  },
};

const order: SprintKey[] = ["resilience", "architecture"];

const sprintImages: Record<string, { src: string; alt: readonly [string, string] }> = {
  resilience: {
    src: "/images/aura/illu-sprint.webp",
    alt: [
      "Cinq cartes en escalier reliées par un fil pointillé, la dernière validée par une coche : un sprint mène pas à pas au livrable",
      "Five cards climbing like steps, joined by a dotted thread, the last one checked: a sprint leads step by step to the deliverable",
    ],
  },
  decision: {
    src: "/images/aura/exec-meeting.webp",
    alt: [
      "Un comité de direction examine des scénarios chiffrés projetés sur un écran",
      "A leadership committee reviews quantified scenarios projected on a screen",
    ],
  },
  architecture: {
    src: "/images/aura/architecture-workshop.webp",
    alt: [
      "Une équipe d’architectes dessine l’architecture cible d’un système au tableau blanc",
      "A team of architects draws a system’s target architecture on a whiteboard",
    ],
  },
};

export function SprintsPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const dict = getDictionary(locale);
  const labels = zoomLabels(dict);
  const l = (value: readonly [string, string]) => tr(value, locale);

  return (
    <>
      <section className="hero hero-compact dark">
        <div className="hero-backdrop" aria-hidden />
        <div className="container">
          <SectionHead as="h1" eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
          <nav className="sprint-nav" aria-label={c.schedule}>
            <a href="#stress-test" data-product="supply">
              <Radar size={18} aria-hidden />
              <span>
                <strong>{locale === "fr" ? "Stress-test résilience" : "Resilience stress test"}</strong>
                <small>{locale === "fr" ? "Aura Supply Chain · environ 10 jours" : "Aura Supply Chain · about 10 days"}</small>
              </span>
              <ArrowRight size={16} aria-hidden />
            </a>
            {order.map((key) => {
              const s = sprints[key];
              const Icon = productIcons[s.product];
              return (
                <a key={key} href={`#${key}`} data-product={s.product}>
                  <Icon size={18} aria-hidden />
                  <span>
                    <strong>{l(s.name)}</strong>
                    <small>
                      {l(products[s.product].name)} · {l(s.duration)}
                    </small>
                  </span>
                  <ArrowRight size={16} aria-hidden />
                </a>
              );
            })}
          </nav>
        </div>
      </section>

      <section className="section section-tight" id="stress-test" data-product="supply">
        <div className="container">
          {(() => {
            const t =
              locale === "fr"
                ? {
                    eyebrow: "Aura Supply Chain · environ 10 jours",
                    title: "Stress-test résilience",
                    lead: "Avant d’investir, savoir où la chaîne casse. On retire chaque nœud critique, un par un, et on mesure combien de temps vous servez encore la demande. Méthode inspirée des travaux publiés de David Simchi-Levi (MIT) sur le temps de survie et le temps de reprise.",
                    blocks: [
                      ["Carte d’exposition", "Fournisseurs de rang 1 et, quand c’est possible, de rang 2, sites, routes et points de passage (détroits, ports)."],
                      ["TTS et TTR par nœud", "TTS : combien de temps vous tenez si le nœud tombe (stock, transit, sources alternatives). TTR : combien de temps il faut pour qu’il revienne à pleine capacité."],
                      ["Nœuds critiques", "Les nœuds dont le TTR dépasse le TTS, classés par impact et non par volume d’achat."],
                      ["Plans B comparés", "Double source, stock tampon ciblé, capacité dupliquée : options comparées par le moteur de décision, décision à valider par vos équipes."],
                    ],
                    inputs: "Pour qui : directeurs supply chain, achats et opérations. Entrées : liste des fournisseurs et sites, nomenclatures critiques, stocks et délais. Livré : la carte d’exposition, le tableau TTS/TTR, la liste des nœuds critiques et les plans B comparés, dans un rapport que vous gardez. La suite : un Sprint Résilience, puis une licence Aura Supply Chain.",
                    cta: "Réserver un cadrage",
                  }
                : {
                    eyebrow: "Aura Supply Chain · about 10 days",
                    title: "Resilience stress test",
                    lead: "Before investing, find out where the chain breaks. We remove each critical node, one at a time, and measure how long you can still meet demand. Method inspired by David Simchi-Levi’s (MIT) published work on time-to-survive and time-to-recover.",
                    blocks: [
                      ["Exposure map", "Tier-1 suppliers and, where possible, tier-2, sites, routes and chokepoints (straits, ports)."],
                      ["TTS and TTR per node", "TTS: how long you hold if the node goes down (stock, transit, alternative sources). TTR: how long it takes to get back to full capacity."],
                      ["Critical nodes", "Nodes whose TTR exceeds their TTS, ranked by impact rather than spend."],
                      ["Fallback plans compared", "Dual sourcing, targeted buffer stock, duplicated capacity: options compared by the decision engine, decision validated by your teams."],
                    ],
                    inputs: "Who it is for: supply chain, procurement and operations directors. Inputs: list of suppliers and sites, critical bills of materials, stock and lead times. Delivered: the exposure map, the TTS/TTR table, the list of critical nodes and the compared fallback plans, in a report you keep. Next: a Resilience Sprint, then an Aura Supply Chain licence.",
                    cta: "Book a scoping call",
                  };
            return (
              <>
                <SectionHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
                <div className="grid-4">
                  {t.blocks.map(([title, text]) => (
                    <div key={title} className="offer-card">
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
                <p className="cred-line">{t.inputs}</p>
                <div className="actions">
                  <Link className="btn btn-primary" href={routes[locale].contact}>
                    {t.cta} <ArrowRight size={16} aria-hidden />
                  </Link>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      <section className="section-flow">
        <div className="container">
          <h2 className="flow-head">{locale === "fr" ? "D’abord un sprint sur votre vrai sujet. Puis le produit, dans la durée." : "Start with a sprint on your real issue. Then the product, for the long run."}</h2>
          <FlowStrip
            label={locale === "fr" ? "Du sprint au produit" : "From sprint to product"}
            steps={
              locale === "fr"
                ? [
                    { icon: Target, title: "Votre sujet", text: "Le risque ou l’arbitrage qui coûte le plus aujourd’hui." },
                    { icon: Rocket, title: "L’offre", text: "De 10 jours à 6 semaines, sur vos données ou votre programme." },
                    { icon: Check, title: "La preuve", text: "Une décision signée ou un dossier d’architecture exploitable." },
                    { icon: Loop, title: "La licence", text: "Aura Supply Chain ou Aura Architect, dans la durée." },
                  ]
                : [
                    { icon: Target, title: "Your issue", text: "The risk or trade-off that costs you most today." },
                    { icon: Rocket, title: "The offer", text: "10 days to 6 weeks, on your data or your programme." },
                    { icon: Check, title: "The proof", text: "A signed decision or a usable architecture file." },
                    { icon: Loop, title: "The licence", text: "Aura Supply Chain or Aura Architect, for the long run." },
                  ]
            }
          />
        </div>
      </section>

      <section className="section" id="method">
        <div className="container">
          <SectionHead eyebrow={c.methodEyebrow} title={c.methodTitle} lead={c.methodLead} />
          <More label={c.moreMethods}>
            <MethodCards keys={methodOrder} locale={locale} labels={labels} />
          </More>
        </div>
      </section>

      <section className="section section-tight section-alt" id="sprint-value">
        <div className="container">
          <ValueBlock value={sprintsValue} locale={locale} id="value-block" />
        </div>
      </section>

      {order.map((key, sprintIndex) => {
        const s = sprints[key];
        const p = products[s.product];
        const Icon = productIcons[s.product];
        return (
          <section key={key} id={key} className={`section sprint${sprintIndex % 2 === 0 ? " section-alt" : ""}`} data-product={s.product}>
            <div className="container">
              <div className="sprint-intro">
                <div className="sprint-head">
                  <p className="eyebrow eyebrow-pill">
                    <Icon size={14} aria-hidden /> {l(p.name)}
                  </p>
                  <h2 className="h2">{l(s.name)}</h2>
                  <p className="sprint-duration mono">{l(s.duration)}</p>
                  <p className="lead">{l(s.promise)}</p>
                </div>
                <figure className="media sprint-media hide-mobile">
                  <Image src={sprintImages[key].src} alt={l(sprintImages[key].alt)} fill sizes="(max-width: 980px) 100vw, 480px" />
                </figure>
              </div>

              <div className="sprint-facts">
                <div>
                  <p className="fact-label">{c.trigger}</p>
                  <p>{l(s.trigger)}</p>
                </div>
                <div>
                  <p className="fact-label">{c.forWhom}</p>
                  <ul className="check-list">
                    {s.forWhom.map((item) => (
                      <li key={item[1]}>
                        <Check size={15} aria-hidden />
                        {l(item)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="fact-label">{c.inputs}</p>
                  <ul className="check-list">
                    {s.inputs.map((item) => (
                      <li key={item[1]}>
                        <Check size={15} aria-hidden />
                        {l(item)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {key === "architecture" && <ArchitectOffer locale={locale} />}
              <MethodChips keys={sprintMethods[key]} locale={locale} />

              <h3 className="h3">{c.schedule}</h3>
              <ol className={`journey journey-${s.steps.length}`}>
                {s.steps.map((step, index) => (
                  <li key={step.id}>
                    <ZoomCard
                      product={s.product}
                      labels={labels}
                      variant="step"
                      index={`0${index + 1}`}
                      detail={localize(step, locale)}
                    />
                  </li>
                ))}
              </ol>

              <h3 className="h3">{c.deliverables}</h3>
              <div className="grid-4">
                {s.deliverables.map((item) => (
                  <ZoomCard key={item.id} product={s.product} variant="compact" labels={labels} detail={localize(item, locale)} />
                ))}
              </div>

              <div className="sprint-bottom">
                <div>
                  <p className="fact-label">
                    <Ban size={15} aria-hidden /> {c.notThis}
                  </p>
                  <ul className="plain-list">
                    {s.notThis.map((item) => (
                      <li key={item[1]}>{l(item)}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="fact-label">
                    <Repeat size={15} aria-hidden /> {c.after}
                  </p>
                  <p>{l(s.after)}</p>
                  <div className="actions">
                    <Link className="btn btn-primary" href={routes[locale].contact}>
                      {c.frame} <ArrowRight size={16} aria-hidden />
                    </Link>
                    <Link className="btn btn-secondary" href={routes[locale][s.product]}>
                      {c.seeProduct}
                    </Link>
                    <AppLink product={s.product} label={dict.common.openApp} className="text-link" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
