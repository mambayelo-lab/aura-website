import Image from "next/image";
import { ArrowRight, Ban, Check, Repeat, Target, Rocket, Infinity as Loop } from "lucide-react";
import { FlowStrip } from "../FlowStrip";
import Link from "next/link";
import { getDictionary } from "@/content/dictionary";
import { localize, products, sprints, tr, type SprintKey } from "@/content/products";
import { routes, type Locale } from "@/lib/i18n";
import {
  AppLink,
  ComparisonTable,
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
    eyebrow: "Travailler ensemble",
    title: "Un problème réel, quelques semaines, un résultat que vous gardez.",
    lead: "Ni mission de conseil sans fin, ni intégration de plusieurs mois : un problème précis, un déroulé fixe, des entrées connues, un livrable qui vous appartient.",
    methodEyebrow: "Méthode",
    methodTitle: "D’abord comprendre le système, pour ne pas traiter le mauvais problème.",
    methodLead: "Chaque sprint s’ouvre sur une analyse systémique du périmètre. Supply Chain et Décider évaluent ensuite les options avec une méthode issue de travaux de thèse, robuste à l’incertitude ; Architect y ajoute DDD, architecture modulaire, TOGAF, CESAMES et BPMN.",
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
    eyebrow: "Working together",
    title: "One real problem, a few weeks, a result you keep.",
    lead: "No open-ended consulting, no months-long integration: one specific problem, a fixed schedule, known inputs, a deliverable you own.",
    methodEyebrow: "Method",
    methodTitle: "First understand the system, so you do not solve the wrong problem.",
    methodLead: "Every sprint opens with a systems analysis of the scope. Supply Chain and Decide then evaluate options with a method drawn from doctoral research, robust to uncertainty; Architect adds DDD, modular architecture, TOGAF, CESAMES and BPMN.",
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

const order: SprintKey[] = ["resilience", "decision", "architecture"];

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

      <section className="section-flow">
        <div className="container">
          <h2 className="flow-head">{locale === "fr" ? "D’abord un sprint sur votre vrai sujet. Puis le produit, dans la durée." : "Start with a sprint on your real issue. Then the product, for the long run."}</h2>
          <FlowStrip
            label={locale === "fr" ? "Du sprint au produit" : "From sprint to product"}
            steps={
              locale === "fr"
                ? [
                    { icon: Target, title: "Votre sujet", text: "Le risque ou l’arbitrage qui coûte le plus aujourd’hui." },
                    { icon: Rocket, title: "Le sprint", text: "2 à 4 semaines, sur vos données ou votre programme." },
                    { icon: Check, title: "La preuve", text: "Une décision signée ou un dossier d’architecture exploitable." },
                    { icon: Loop, title: "Le produit", text: "Aura s’installe dans la durée, à votre rythme." },
                  ]
                : [
                    { icon: Target, title: "Your issue", text: "The risk or trade-off that costs you most today." },
                    { icon: Rocket, title: "The sprint", text: "2 to 4 weeks, on your data or your programme." },
                    { icon: Check, title: "The proof", text: "A signed decision or a usable architecture file." },
                    { icon: Loop, title: "The product", text: "Aura settles in for the long run, at your pace." },
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

      <section className="section section-tight" id="compare">
        <div className="container">
          <SectionHead eyebrow={c.compareEyebrow} title={c.compareTitle} />
          <More label={c.seeCompare}>
            <ComparisonTable locale={locale} />
          </More>
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
