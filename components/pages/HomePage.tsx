import { ArrowRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/content/dictionary";
import { tr, type Detail } from "@/content/products";
import { offers } from "@/content/offers";
import { articleHref, routes, type Locale } from "@/lib/i18n";
import { getArticles, isCase } from "@/content/articles";
import { ArticleCard, CtaBanner, More, SectionHead, productIcons, zoomLabels } from "../blocks";
import { ProductFilm } from "../ProductFilm";
import { HeroSignal } from "../HeroSignal";
import { ArchitectOffer } from "../ArchitectOffer";
import { CostTiles } from "../CostTiles";
import { ZoomCard } from "../zoom/ZoomCard";
import { PlatformSection } from "./PlatformPage";
import { localize } from "@/content/products";

const copy = {
  fr: {
    eyebrow: "Aide à la décision · supply chain · transformation",
    title: "Voir venir les ruptures, décider à temps.",
    lead: "Aura s’appuie sur les données de votre SI pour repérer la rupture, en comprendre les causes, comparer les options et argumenter une recommandation. Vos équipes décident, avec une trace à présenter en comité.",
    three: [
      ["Pour qui", "Directions supply chain, achats, DSI et programmes de transformation."],
      ["L’enjeu", "Tenir le service malgré les ruptures, et réussir vos ambitions : croissance, nouveaux marchés, réseau plus agile, RSE, transformation."],
      ["Le résultat", "Une réponse choisie plus tôt, expliquée, tracée et validée par un humain."],
    ],
    primary: "Réserver un diagnostic",
    secondary: "Voir les offres",
    trust: ["L’IA prépare", "Un humain décide", "Chaque décision est tracée"],
    howEyebrow: "Trois niveaux",
    howTitle: "Du quotidien aux grands choix, jusqu’à la transformation.",
    how: [
      ["Control Tower · opérationnel", "Les ruptures du quotidien : repérées tôt dans vos données par des règles causales, avec la réponse recommandée et son pourquoi. Packs Supply, Énergie, …"],
      ["Décider · stratégique", "Réseau, sourcing, stocks : arbitrer les grands choix en comparant les options sur les mêmes critères, dans les deux applications."],
      ["Programmes de transformation", "Aura Architect industrialise le cadrage : le jumeau numérique de l’architecte, qui raisonne et dialogue, pour accélérer et sécuriser le programme."],
    ],
    sustain: ["Durabilité", "Réduire l’empreinte CO2 du transport, fiabiliser le reporting CSRD, maîtriser les risques ESG et le devoir de vigilance chez vos fournisseurs : ces critères entrent dans chaque décision, à côté du coût, du service et du risque."],
    offersEyebrow: "Offres",
    offersTitle: "Commencez par un diagnostic de deux semaines.",
    offersCta: "Détail des offres",
    engineEyebrow: "Le moteur de décision",
    engineTitle: "Un arbitrage que l’on peut relire et défendre.",
    engineLead: "Problème : les grands arbitrages se jouent sur la meilleure présentation. Aura compare les options sur les mêmes critères, recommande la meilleure réponse en expliquant pourquoi, et un humain signe.",
    engine: [
      ["Comparer", "Chaque option est évaluée sur son potentiel de gain et son risque de dégradation, sans pondérations arbitraires."],
      ["Prouver", "Chaque verdict garde ses critères, ses hypothèses, ses sources et la personne qui a signé."],
      ["Voir où ça bascule", "Le moteur trouve le plus petit changement qui ferait basculer le choix."],
    ],
    diMore: "Ce que dit Gartner de l’aide à la décision",
    diFacts: [
      ["50 %", "des décisions métier assistées ou automatisées par des agents d’IA d’ici 2027, selon Gartner.", "Gartner, juin 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-17-gartner-announces-top-data-and-analytics-predictions"],
      ["40 %+", "des projets d’IA agentique abandonnés d’ici fin 2027 : coûts, valeur floue, risques mal maîtrisés.", "Gartner, juin 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027"],
      ["5 %", "des organisations prendront au moins 10 % de leurs décisions de planification supply chain sans intervention humaine d’ici 2030.", "Gartner, sept. 2026", "https://www.gartner.com/en/newsroom/press-releases/2026-09-24-gartner-predicts-only-5-percent-of-organizations-will-make-at-least-10-percent-of-supply-chain-planning-decisions-autonomously-by-2030"],
    ],
    diArticle: "Où se situe Aura",
    archEyebrow: "Pour les DSI",
    archTitle: "Une transformation du SI à défendre en comité.",
    archLead: "Aura Architect n’est pas un logiciel de référentiel d’architecture classique : c’est une sorte de jumeau numérique de l’architecte, qui raisonne et échange avec les acteurs de la transformation. Résultat : un cadrage industrialisé, un programme accéléré et sécurisé.",
    archImpact: "Un grand programme SI dépasse son budget de 45 % en moyenne (McKinsey et Université d’Oxford).",
    archCta: "Découvrir Aura Architect",
    trustEyebrow: "Confiance",
    trustTitle: "L’IA accélère. Vos équipes gardent la main.",
    casesEyebrow: "Cas",
    casesTitle: "Deux chocs, sourcés et datés.",
    casesMore: "Références de méthode",
    cred: "Aura s’appuie sur des travaux publiés : temps de survie et de reprise (TTS/TTR, Simchi-Levi, MIT), entreprise résiliente (Sheffi, MIT CTL), équipes humain-IA (Sáenz, MIT CTL), et la thèse de son fondateur sur l’évaluation robuste de décisions. Ce sont des références, pas des partenariats.",
  },
  en: {
    eyebrow: "Decision intelligence · supply chain · transformation",
    title: "See disruptions coming, decide in time.",
    lead: "Aura builds on the data in your systems to spot the disruption, understand its causes, compare the options and argue a recommendation. Your teams decide, with a record to put before the board.",
    three: [
      ["For whom", "Supply chain, procurement, IT and transformation programme leaders."],
      ["The stakes", "Keep service up despite disruptions, and deliver your ambitions: growth, new markets, a more agile network, CSR, transformation."],
      ["The result", "A response chosen earlier, explained, on record and validated by a person."],
    ],
    primary: "Book a diagnostic",
    secondary: "See the offers",
    trust: ["AI prepares", "A person decides", "Every decision is on record"],
    howEyebrow: "Three levels",
    howTitle: "From day-to-day to big choices, through to transformation.",
    how: [
      ["Control Tower · operational", "Day-to-day shortages: spotted early in your data by causal rules, with the recommended response and its reasons. Supply, Energy packs and more."],
      ["Decide · strategic", "Network, sourcing, stock: settle the big choices by comparing options on the same criteria, in both applications."],
      ["Transformation programmes", "Aura Architect industrialises scoping: a digital twin of the architect that reasons and engages in dialogue, to speed up and de-risk the programme."],
    ],
    sustain: ["Sustainability", "Cutting transport CO2, making CSRD reporting reliable, managing ESG risk and supplier due diligence: these criteria are part of every decision, alongside cost, service and risk."],
    offersEyebrow: "Offers",
    offersTitle: "Start with a two-week diagnostic.",
    offersCta: "Offer details",
    engineEyebrow: "The decision engine",
    engineTitle: "A trade-off you can re-read and defend.",
    engineLead: "Problem: big trade-offs are won by the best slide deck. Aura compares options on the same criteria, recommends the best response and explains why, and a person signs.",
    engine: [
      ["Compare", "Each option is rated on its upside and its risk of degradation, with no arbitrary weights."],
      ["Prove", "Every verdict keeps its criteria, assumptions, sources and the person who signed it."],
      ["See where it flips", "The engine finds the smallest change that would flip the choice."],
    ],
    diMore: "What Gartner says about decision intelligence",
    diFacts: [
      ["50%", "of business decisions augmented or automated by AI agents by 2027, according to Gartner.", "Gartner, June 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-17-gartner-announces-top-data-and-analytics-predictions"],
      ["40%+", "of agentic AI projects canceled by the end of 2027: costs, unclear value, inadequate risk controls.", "Gartner, June 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027"],
      ["5%", "of organizations will make at least 10% of their supply chain planning decisions without human intervention by 2030.", "Gartner, Sept. 2026", "https://www.gartner.com/en/newsroom/press-releases/2026-09-24-gartner-predicts-only-5-percent-of-organizations-will-make-at-least-10-percent-of-supply-chain-planning-decisions-autonomously-by-2030"],
    ],
    diArticle: "Where Aura stands",
    archEyebrow: "For CIOs",
    archTitle: "An IT transformation to defend before the board.",
    archLead: "Aura Architect is not a classic architecture repository tool: it is a kind of digital twin of the architect, which reasons and works with the people driving the transformation. Result: scoping industrialised, a programme accelerated and de-risked.",
    archImpact: "A large IT programme runs 45% over budget on average (McKinsey and University of Oxford).",
    archCta: "Discover Aura Architect",
    trustEyebrow: "Trust",
    trustTitle: "AI speeds things up. Your people stay in charge.",
    casesEyebrow: "Cases",
    casesTitle: "Two shocks, sourced and dated.",
    casesMore: "Methodological references",
    cred: "Aura builds on published work: time to survive and time to recover (TTS/TTR, Simchi-Levi, MIT), the resilient enterprise (Sheffi, MIT CTL), human-AI teaming (Sáenz, MIT CTL), and its founder’s doctoral research on robust decision evaluation. These are references, not partnerships.",
  },
};

const trust: Detail[] = [
  {
    id: "t-human",
    title: ["Validation humaine", "Human validation"],
    summary: ["L’IA propose ; des personnes identifiées valident et signent.", "AI proposes; named people validate and sign."],
    body: [
      [
        "Mapping sémantique, règles, verdicts, choix d’architecture : aucune suggestion de l’IA n’est appliquée sans validation explicite d’une personne identifiée.",
        "Semantic mapping, rules, verdicts, architecture choices: no AI suggestion is applied without explicit validation by an identified person.",
      ],
    ],
    flow: [["Suggestion IA", "AI suggestion"], ["Revue", "Review"], ["Validation", "Validation"], ["Trace", "Trace"]],
  },
  {
    id: "t-trace",
    title: ["Traçabilité", "Traceability"],
    summary: ["Six mois plus tard, vous savez encore qui a décidé, quand et pourquoi.", "Six months on, you still know who decided, when and why."],
    body: [
      [
        "Qui a décidé, quand, sur quelles données ou hypothèses, avec quelle version de règle : la réponse est dans l’application, pas dans la mémoire d’une réunion.",
        "Who decided, when, on which data or assumptions, with which rule version: the answer is in the application, not in the memory of a meeting.",
      ],
    ],
  },
  {
    id: "t-nodata",
    title: ["Aucune donnée inventée", "No invented data"],
    summary: ["Pas de chiffre plausible et faux : les alertes viennent de règles sur vos données réelles.", "No plausible but wrong figures: alerts come from rules on your real data."],
    body: [
      [
        "Un modèle de langage peut produire un chiffre plausible et faux. Chez Aura, il n’en a pas le droit : les alertes viennent de règles explicites, les hypothèses sont déclarées comme telles, et les démos tournent sur un SI synthétique clairement identifié.",
        "A language model can produce a plausible, wrong figure. At Aura it is not allowed to: alerts come from explicit rules, assumptions are declared as such, and demos run on a clearly labelled synthetic system.",
      ],
    ],
  },
  {
    id: "t-sovereign",
    title: ["Souveraineté", "Sovereignty"],
    summary: ["Hébergement dans l’UE : Vercel à Paris, Supabase en UE, modèle Mistral en UE.", "Hosted in the EU: Vercel in Paris, Supabase in the EU, Mistral model in the EU."],
    body: [
      [
        "Aura lit vos sources plutôt que de tout copier. Par défaut, tout est hébergé dans l’Union européenne : l’application sur Vercel à Paris (cdg1), la base Supabase en UE, le modèle de langage Mistral en UE. La conservation des données se décide avec vous.",
        "Aura reads your sources rather than copying everything. By default everything is hosted in the European Union: the application on Vercel in Paris (cdg1), the Supabase database in the EU, the Mistral language model in the EU. Data retention is decided with you.",
      ],
    ],
  },
];

export function HomePage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const dict = getDictionary(locale);
  const labels = zoomLabels(dict);
  const r = routes[locale];
  const cases = getArticles(locale).filter(isCase);
  const l = (v: readonly [string, string]) => tr(v, locale);

  return (
    <>
      <section className="hero dark">
        <div className="hero-photo" aria-hidden>
          <Image src="/images/aura/earth-network.webp" alt="" fill priority sizes="100vw" />
        </div>
        <div className="hero-backdrop" aria-hidden />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-pill">{c.eyebrow}</p>
            <h1 className="display display-promise">{c.title}</h1>
            <div className="hero-film" id="film">
              <ProductFilm locale={locale} film="brand" impacts={false} />
            </div>
            <p className="lead hero-lead">{c.lead}</p>
            <dl className="hero-three">
              {c.three.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <div className="actions">
              <Link className="btn btn-ink btn-lg" href={r.contact}>
                {c.primary} <ArrowRight size={17} aria-hidden />
              </Link>
              <Link className="text-link" href={r.sprints}>
                {c.secondary} <ArrowRight size={15} aria-hidden />
              </Link>
            </div>
            <ul className="trust-list">
              {c.trust.map((item) => (
                <li key={item}>
                  <CircleCheck size={16} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <HeroSignal locale={locale} />
        </div>
      </section>

      <PlatformSection locale={locale} />

      <section className="section section-tight" id="how">
        <div className="container">
          <SectionHead eyebrow={c.howEyebrow} title={c.howTitle} />
          <div className="grid-3">
            {c.how.map(([k, v]) => (
              <article key={k} className="offer-card">
                <p className="eyebrow">{k}</p>
                <p>{v}</p>
              </article>
            ))}
          </div>
          <p className="impact-line">
            <strong>{c.sustain[0]}.</strong> {c.sustain[1]}
          </p>
        </div>
      </section>


      <CostTiles locale={locale} alt />

      <section className="section section-tight" id="offers">
        <div className="container">
          <SectionHead eyebrow={c.offersEyebrow} title={c.offersTitle} />
          <div className="grid-4">
            {offers.map((o) => {
              const Icon = productIcons[o.product];
              return (
                <Link key={o.key} href={`${r.sprints}#${o.key}`} className="offer-card quick-card" data-product={o.product}>
                  <p className="eyebrow">{l(o.format)}</p>
                  <h3>
                    <Icon size={18} aria-hidden /> {l(o.name)}
                  </h3>
                  <p>{l(o.pitch)}</p>
                </Link>
              );
            })}
          </div>
          <div className="actions">
            <Link className="btn btn-primary" href={r.contact}>
              {c.primary} <ArrowRight size={16} aria-hidden />
            </Link>
            <Link className="btn btn-secondary" href={r.sprints}>
              {c.offersCta}
            </Link>
          </div>
        </div>
      </section>


      <section className="section section-alt" id={locale === "fr" ? "moteur" : "engine"}>
        <div className="container">
          <SectionHead eyebrow={c.engineEyebrow} title={c.engineTitle} lead={c.engineLead} />
          <div className="grid-3">
            {c.engine.map(([title, text]) => (
              <article key={title} className="offer-card">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <More label={c.diMore}>
            <aside className="di-facts" aria-label={c.diMore}>
              <ul>
                {c.diFacts.map(([figure, text, source, href]) => (
                  <li key={href}>
                    <strong>{figure}</strong>
                    <span>{text}</span>
                    <small>
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {source}
                      </a>
                    </small>
                  </li>
                ))}
              </ul>
              <Link className="text-link" href={articleHref(locale, "decision-intelligence-gartner-aura")}>
                {c.diArticle} <ArrowRight size={15} aria-hidden />
              </Link>
            </aside>
          </More>
        </div>
      </section>

      <section className="section section-tight" id="dsi-architect" data-product="architect">
        <div className="container arch-teaser">
          <figure className="media media-wide hide-mobile" aria-hidden>
            <Image src="/images/aura/transformation.webp" alt="" fill sizes="(max-width: 980px) 100vw, 480px" />
          </figure>
          <div>
            <SectionHead eyebrow={c.archEyebrow} title={c.archTitle} lead={c.archLead} />
            <p className="impact-line">{c.archImpact}</p>
            <ArchitectOffer locale={locale} />
            <div className="actions">
              <Link className="btn btn-primary" href={r.architect}>
                {c.archCta} <ArrowRight size={16} aria-hidden />
              </Link>
              <Link className="btn btn-secondary" href={`${r.sprints}#architecture`}>
                {c.offersCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight section-alt">
        <div className="container">
          <SectionHead eyebrow={c.trustEyebrow} title={c.trustTitle} />
          <div className="grid-4">
            {trust.map((item) => (
              <ZoomCard key={item.id} variant="compact" labels={labels} detail={localize(item, locale)} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight" id="cases">
        <div className="container">
          <SectionHead eyebrow={c.casesEyebrow} title={c.casesTitle} />
          <div className="grid-2">
            {cases.map((article) => (
              <ArticleCard key={article.slug} article={article} locale={locale} dict={dict} />
            ))}
          </div>
          <More label={c.casesMore}>
            <p>{c.cred}</p>
          </More>
        </div>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
