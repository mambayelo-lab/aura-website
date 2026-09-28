import { ArrowRight, ArrowUpRight, BookOpen, FileText } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/content/dictionary";
import { publications, founderLinks, whyAura } from "@/content/founder";
import { tr } from "@/content/products";
import { routes, type Locale } from "@/lib/i18n";
import { CtaBanner, SectionHead } from "../blocks";

const copy = {
  fr: {
    eyebrow: "Le fondateur",
    role: "Ph.D · Lead Enterprise Architect",
    bio: [
      "Mambaye Lo, Ph.D, est Lead Enterprise Architect, avec 16 ans de transformations numériques dans le retail, l’énergie, la banque et l’automobile, à la jonction de la stratégie, de l’IA et de la delivery SI.",
      "Parcours : responsable de l’architecture d’entreprise chez ENGIE (B2C, depuis 2024) ; managing enterprise architect chez Capgemini, dont la responsabilité produit iPaaS & Datahub pour la Supply Chain intelligente (2022-2024) ; lead architect de la plateforme industrielle d’ADEO — sourcing mondial, supply chain, finance (2017-2021) ; consultant chez CESAMES en architecture de systèmes complexes (2013-2017).",
      "La thèse de doctorat (LGI2P, Mines Alès), soutenue en 2013 et lauréate du prix de la meilleure thèse de l’AFIS (2014), porte sur l’évaluation d’architectures en ingénierie système, appliquée à la conception de systèmes mécatroniques.",
      "Ces travaux étendent le méta-modèle d’ingénierie système, formalisent les liens de traçabilité de conception et proposent un modèle d’aide aux choix de conception, mis en œuvre avec Core (Vitech) et MATLAB sur le cas d’un fauteuil roulant à assistance électrique.",
      "La méthode d’évaluation d’Aura Supply Chain et d’Aura Décider s’appuie sur ces travaux : qualifier chaque option par son potentiel d’amélioration et son risque de dégradation, sans pondérations arbitraires. Pour vous, c’est l’assurance que vos options sont comparées honnêtement, même quand les données sont incomplètes.",
    ],
    whyEyebrow: "Pourquoi Aura",
    whyTitle: "Quatre problèmes qu’Aura a été conçu pour résoudre.",
    workEyebrow: "Travaux",
    workTitle: "Une méthode éprouvée par la recherche, pas improvisée.",
    thesisKind: "Thèse de doctorat · 2013",
    thesisTitle: "Contribution à l’évaluation d’architectures en Ingénierie Système : application en conception de systèmes mécatroniques",
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
    role: "Ph.D · Lead Enterprise Architect",
    bio: [
      "Mambaye Lo, Ph.D, is a Lead Enterprise Architect with 16 years of digital transformations across retail, energy, banking and automotive, bridging strategy, AI and IT delivery.",
      "Background: head of enterprise architecture at ENGIE (B2C, since 2024); managing enterprise architect at Capgemini, including head of product for iPaaS & Datahub for the intelligent supply chain (2022-2024); lead architect of ADEO's industrial platform — global sourcing, supply chain, finance (2017-2021); consultant at CESAMES in complex systems architecture (2013-2017).",
      "The doctoral thesis (LGI2P, Mines Alès), defended in 2013 and winner of the AFIS Best PhD Award (2014), deals with architecture evaluation in systems engineering, applied to the design of mechatronic systems.",
      "This research extends the systems engineering meta-model, formalises design traceability links and proposes a design-choice support model, implemented with Core (Vitech) and MATLAB on the case of a power-assisted wheelchair.",
      "The evaluation method of Aura Supply Chain and Aura Decide builds on this research: each option is qualified by its improvement potential and its degradation risk, with no arbitrary weights. For you, that means your options are compared honestly, even when the data is incomplete.",
    ],
    whyEyebrow: "Why Aura",
    whyTitle: "Four problems Aura was built to solve.",
    workEyebrow: "Research",
    workTitle: "A method tested by research, not improvised.",
    thesisKind: "Doctoral thesis · 2013 · in French",
    thesisTitle: "Contribution à l’évaluation d’architectures en Ingénierie Système : application en conception de systèmes mécatroniques",
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
          <div className="founder-monogram">
            <img src="/images/founder/mambaye-lo.webp" alt="Mambaye Lo" width={158} height={178} />
          </div>
          <div>
            <p className="eyebrow eyebrow-pill">{c.eyebrow}</p>
            <h1 className="display">Mambaye Lo</h1>
            <p className="hero-sub">{c.role}</p>
            <div className="founder-bio">
              {[c.bio[0], c.bio[4]].map((paragraph) => (
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

      <section className="section section-tight">
        <div className="container">
          <ul className="facts-strip">
            {(locale === "fr"
              ? [["16 ans", "de transformations SI"], ["Ph.D", "prix de la meilleure thèse AFIS 2014"], ["4 secteurs", "retail, énergie, banque, automobile"], ["Lead EA", "ENGIE, Capgemini, ADEO"]]
              : [["16 years", "of IT transformations"], ["Ph.D", "AFIS best thesis award 2014"], ["4 sectors", "retail, energy, banking, automotive"], ["Lead EA", "ENGIE, Capgemini, ADEO"]]
            ).map(([k, v]) => (
              <li key={k}>
                <strong>{k}</strong>
                <span>{v}</span>
              </li>
            ))}
          </ul>
          <details className="founder-more">
            <summary>{locale === "fr" ? "Parcours et travaux de recherche" : "Background and research"}</summary>
            {c.bio.slice(1, 4).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </details>
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
            {publications.map(pub => (
              <article className="pub-card" key={pub.title}>
                <p className="fact-label">
                  <FileText size={15} aria-hidden /> {tr(pub.kind, locale)}
                </p>
                <h3 lang="en">{pub.title}</h3>
                <p className="muted">{pub.authors}</p>
                <a className="text-link" href={pub.href} target="_blank" rel="noopener">
                  {tr(pub.link, locale)} <ArrowUpRight size={15} aria-hidden />
                </a>
              </article>
            ))}
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
