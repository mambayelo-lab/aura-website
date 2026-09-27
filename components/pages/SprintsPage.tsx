import Image from "next/image";
import { ArrowRight, Ban, Check, CircleDot, Repeat } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/content/dictionary";
import { localize, products, sprints, tr, type SprintKey } from "@/content/products";
import { routes, type Locale } from "@/lib/i18n";
import {
  AppLink,
  ComparisonTable,
  CtaBanner,
  SectionHead,
  entryOptions,
  productIcons,
  selectorLabels,
  zoomLabels,
} from "../blocks";
import { EntrySelector } from "../EntrySelector";
import { ZoomCard } from "../zoom/ZoomCard";

const copy = {
  fr: {
    eyebrow: "Travailler ensemble",
    title: "Trois sprints. Trois déclencheurs. Aucune redondance.",
    lead: "Chaque produit a son offre d’engagement, avec un déroulé fixe, des entrées connues et un livrable qui vous appartient. Le déclencheur de votre besoin suffit à choisir.",
    compareEyebrow: "Quel point d’entrée ?",
    compareTitle: "Le comparatif en un coup d’œil.",
    guided: "Ou laissez-vous guider",
    lineEyebrow: "La ligne de partage",
    lineTitle: "Supply Chain ou Décider ? La question est le déclencheur, pas le sujet.",
    lineLead: "Les deux parlent de décision. Elles ne traitent pas la même décision.",
    supplySide: [
      "Déclenchée par un signal dans vos données",
      "Récurrente : le même type de risque revient",
      "Opérationnelle ou tactique : jours, semaines",
      "Préremplie par le cockpit avec les chiffres réels",
      "Exige un SI connecté",
    ],
    decideSide: [
      "Déclenchée par une question posée par un dirigeant",
      "Ponctuelle : elle se prend une fois",
      "Stratégique : mois, années",
      "Construite en atelier à partir d’hypothèses déclarées",
      "Aucune donnée ni connexion requise, toute fonction",
    ],
    lineExampleSupply: "« Le fournisseur X annonce 13 jours de retard : que fait-on cette semaine ? »",
    lineExampleDecide: "« Faut-il qualifier un second fournisseur en Asie pour les cinq prochaines années ? »",
    forWhom: "Pour qui",
    trigger: "Déclencheur",
    inputs: "Entrées nécessaires",
    schedule: "Déroulé",
    deliverables: "Livrables",
    notThis: "Ce que ce n’est pas",
    after: "Après le sprint",
    frame: "Cadrer ce sprint",
    seeProduct: "Voir le produit",
  },
  en: {
    eyebrow: "Working together",
    title: "Three sprints. Three triggers. No overlap.",
    lead: "Each product has its engagement offer, with a fixed schedule, known inputs and a deliverable you own. The trigger of your need is enough to choose.",
    compareEyebrow: "Which entry point?",
    compareTitle: "The comparison at a glance.",
    guided: "Or let us guide you",
    lineEyebrow: "The dividing line",
    lineTitle: "Supply Chain or Decide? The trigger decides, not the topic.",
    lineLead: "Both are about decisions. They do not handle the same decision.",
    supplySide: [
      "Triggered by a signal in your data",
      "Recurring: the same kind of risk comes back",
      "Operational or tactical: days, weeks",
      "Pre-filled by the cockpit with real figures",
      "Requires connected systems",
    ],
    decideSide: [
      "Triggered by a question asked by a leader",
      "One-off: it is made once",
      "Strategic: months, years",
      "Built in a workshop from declared assumptions",
      "No data or connection required, any function",
    ],
    lineExampleSupply: "“Supplier X announces a 13-day delay: what do we do this week?”",
    lineExampleDecide: "“Should we qualify a second supplier in Asia for the next five years?”",
    forWhom: "Who it is for",
    trigger: "Trigger",
    inputs: "Inputs needed",
    schedule: "Schedule",
    deliverables: "Deliverables",
    notThis: "What it is not",
    after: "After the sprint",
    frame: "Frame this sprint",
    seeProduct: "See the product",
  },
};

const order: SprintKey[] = ["resilience", "decision", "architecture"];

const sprintImages: Record<string, { src: string; alt: readonly [string, string] }> = {
  resilience: {
    src: "/images/aura/illu-sprint.webp",
    alt: [
      "Cinq cartes en escalier reliées par un fil pointillé, la dernière validée par une coche : un sprint mène pas à pas au livrable",
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

      <section className="section section-alt" id="compare">
        <div className="container">
          <SectionHead eyebrow={c.compareEyebrow} title={c.compareTitle} />
          <ComparisonTable locale={locale} />
          <h3 className="h3 selector-title">{c.guided}</h3>
          <EntrySelector options={entryOptions(locale)} labels={selectorLabels(locale)} />
        </div>
      </section>

      <section className="section" id="line">
        <div className="container">
          <SectionHead eyebrow={c.lineEyebrow} title={c.lineTitle} lead={c.lineLead} />
          <div className="divide">
            <div className="divide-side" data-product="supply">
              <p className="divide-name">
                <CircleDot size={16} aria-hidden /> {l(products.supply.name)}
              </p>
              <ul>
                {c.supplySide.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="divide-example">{c.lineExampleSupply}</p>
            </div>
            <div className="divide-side" data-product="decide">
              <p className="divide-name">
                <CircleDot size={16} aria-hidden /> {l(products.decide.name)}
              </p>
              <ul>
                {c.decideSide.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="divide-example">{c.lineExampleDecide}</p>
            </div>
          </div>
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
                <figure className="media sprint-media">
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
