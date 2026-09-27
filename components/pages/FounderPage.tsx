import { ArrowRight, ArrowUpRight, BookOpen, FileText } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/content/dictionary";
import { founderLinks, whyAura } from "@/content/founder";
import { tr } from "@/content/products";
import { routes, type Locale } from "@/lib/i18n";
import { CtaBanner, SectionHead } from "../blocks";

const copy = {
  fr: {
    eyebrow: "Le fondateur",
    role: "Ph.D · Manager en architecture d’entreprise",
    bio: [
      "Mambaye Lo est docteur et manager en architecture d’entreprise. Sa thèse, soutenue en 2013, porte sur l’évaluation d’architectures en ingénierie système, appliquée à la conception de systèmes mécatroniques.",
      "Il y étend le méta-modèle d’ingénierie système, formalise les liens de traçabilité de conception et propose un modèle d’aide aux choix de conception, mis en œuvre avec Core (Vitech) et MATLAB sur le cas d’un fauteuil roulant à assistance électrique.",
      "La méthode d’évaluation d’Aura Supply Chain et d’Aura Décider s’appuie sur ces travaux : qualifier chaque option par son potentiel d’amélioration et son risque de dégradation, sans pondérations arbitraires.",
    ],
    whyEyebrow: "Pourquoi Aura",
    whyTitle: "Décider mieux dans un monde incertain, sans usine à gaz.",
    workEyebrow: "Travaux",
    workTitle: "Les publications sur lesquelles Aura s’appuie.",
    thesisKind: "Thèse de doctorat · 2013",
    thesisTitle: "Contribution à l’évaluation d’architectures en Ingénierie Système : application en conception de systèmes mécatroniques",
    thesisText: "Méta-modèle d’ingénierie système étendu, traçabilité des décisions de conception, modèle d’aide aux choix de conception.",
    articleKind: "Article · avec Pierre Couturier",
    articleText: "Suivre les conséquences des décisions de conception en ingénierie système mécatronique.",
    read: "Lire sur HAL",
    readArticle: "Voir sur ResearchGate",
    linkedin: "Profil LinkedIn",
    methods: "Voir comment ces méthodes s’appliquent dans les sprints",
  },
  en: {
    eyebrow: "The founder",
    role: "Ph.D · Enterprise architecture manager",
    bio: [
      "Mambaye Lo holds a Ph.D and is an enterprise architecture manager. His doctoral thesis, defended in 2013, deals with architecture evaluation in systems engineering, applied to the design of mechatronic systems.",
      "It extends the systems engineering meta-model, formalises design traceability links and proposes a design-choice support model, implemented with Core (Vitech) and MATLAB on the case of a power-assisted wheelchair.",
      "The evaluation method of Aura Supply Chain and Aura Decide builds on this research: each option is qualified by its improvement potential and its degradation risk, with no arbitrary weights.",
    ],
    whyEyebrow: "Why Aura",
    whyTitle: "Better decisions in an uncertain world, without heavy machinery.",
    workEyebrow: "Research",
    workTitle: "The publications Aura builds on.",
    thesisKind: "Doctoral thesis · 2013 · in French",
    thesisTitle: "Contribution à l’évaluation d’architectures en Ingénierie Système : application en conception de systèmes mécatroniques",
    thesisText: "Extended systems engineering meta-model, traceability of design decisions, design-choice support model.",
    articleKind: "Article · with Pierre Couturier",
    articleText: "Following the consequences of design decisions through mechatronic systems engineering.",
    read: "Read on HAL",
    readArticle: "View on ResearchGate",
    linkedin: "LinkedIn profile",
    methods: "See how these methods apply in the sprints",
  },
};

export function FounderPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const dict = getDictionary(locale);

  return (
    <>
      <section className="hero hero-compact dark">
        <div className="hero-backdrop" aria-hidden />
        <div className="container founder-hero">
          <div className="founder-monogram" aria-hidden>
            <span>ML</span>
          </div>
          <div>
            <p className="eyebrow eyebrow-pill">{c.eyebrow}</p>
            <h1 className="display">Mambaye Lo</h1>
            <p className="hero-sub">{c.role}</p>
            <div className="founder-bio">
              {c.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="actions">
              <a className="btn btn-ink" href={founderLinks.thesis} target="_blank" rel="noopener">
                <BookOpen size={16} aria-hidden /> {locale === "fr" ? "La thèse" : "The thesis"}
              </a>
              <a className="btn btn-secondary" href={founderLinks.linkedin} target="_blank" rel="noopener">
                {c.linkedin} <ArrowUpRight size={16} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="why">
        <div className="container">
          <SectionHead eyebrow={c.whyEyebrow} title={c.whyTitle} />
          <ol className="thesis-list why-list">
            {whyAura.map((item, index) => (
              <li key={item.id}>
                <span className="mono">0{index + 1}</span>
                <h3>{tr(item.title, locale)}</h3>
                <p>{tr(item.long, locale)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-alt" id="research">
        <div className="container">
          <SectionHead eyebrow={c.workEyebrow} title={c.workTitle} />
          <div className="grid-2 pub-grid">
            <article className="pub-card">
              <p className="fact-label">
                <BookOpen size={15} aria-hidden /> {c.thesisKind}
              </p>
              <h3 lang="fr">{c.thesisTitle}</h3>
              <p className="muted">{c.thesisText}</p>
              <a className="text-link" href={founderLinks.thesis} target="_blank" rel="noopener">
                {c.read} <ArrowUpRight size={15} aria-hidden />
              </a>
            </article>
            <article className="pub-card">
              <p className="fact-label">
                <FileText size={15} aria-hidden /> {c.articleKind}
              </p>
              <h3 lang="en">Tracking the consequences of design decisions in mechatronic Systems Engineering</h3>
              <p className="muted">{c.articleText}</p>
              <a className="text-link" href={founderLinks.article} target="_blank" rel="noopener">
                {c.readArticle} <ArrowUpRight size={15} aria-hidden />
              </a>
            </article>
          </div>
          <p className="section-foot">
            <Link className="text-link" href={`${routes[locale].sprints}#method`}>
              {c.methods} <ArrowRight size={15} aria-hidden />
            </Link>
          </p>
        </div>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
