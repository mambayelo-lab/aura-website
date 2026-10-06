import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/content/dictionary";
import { routes, type Locale } from "@/lib/i18n";
import { CtaBanner } from "../blocks";

type Profile = { id: string; who: string; title: string; problem: string[]; brings: string[]; result: string[]; offer: string; note?: string };

const copy: Record<Locale, { eyebrow: string; title: string; lead: string; labels: [string, string, string, string]; seeOffer: string; profiles: Profile[] }> = {
  en: {
    eyebrow: "Who it's for",
    title: "Five profiles. One coherent architecture.",
    lead: "Find your situation. See what changes for you. Pick the plan that fits.",
    labels: ["The problem", "What Aura brings", "The result", "The plan that fits"],
    seeOffer: "See plans and prices",
    profiles: [
      {
        id: "architects",
        who: "Enterprise and solution architects, independent or in a firm",
        title: "From weeks of scoping to a first architecture in minutes.",
        problem: ["Scoping takes weeks.", "Views drift apart as the work moves on.", "Juniors lack a senior's method."],
        brings: ["A first coherent, traceable architecture in minutes.", "Every view linked: strategy, capabilities, functions, integration, processes.", "Proposed ideas you accept or reject in one click.", "Committee-ready exports.", "A senior's method built in, so juniors work with the right steps."],
        result: ["More engagements delivered.", "A deliverable you can defend line by line."],
        offer: "Solo",
        note: "Indicative estimate: several days saved per scoping. Check it on your own case.",
      },
      {
        id: "cio",
        who: "CIOs and heads of architecture, from SMEs to large groups",
        title: "See the whole information system before the next project starts.",
        problem: ["Projects start without an overall view.", "Applications duplicate each other.", "Point-to-point flows pile up."],
        brings: ["One coherent view of the information system.", "Duplicates and risky flows spotted.", "A target trajectory and an action plan."],
        result: ["Projects that fit the whole.", "Decisions your committees can follow."],
        offer: "Team or Enterprise",
      },
      {
        id: "transformation",
        who: "Transformation leaders, business leaders, executives",
        title: "Test an idea before you commit the budget.",
        problem: ["Budgets get committed before anyone knows if the idea holds.", "Side effects on the rest of the company show up late."],
        brings: ["Ideas tested for coherence across the whole system before you commit.", "Scenarios with their impact on your indicators.", "Objectives and key results tied to each choice.", "A clear split: where to automate, where to use a supervised language model, where to keep a human decision, in line with European regulation."],
        result: ["Budgets committed to ideas that hold.", "Choices you can explain and trace."],
        offer: "Enterprise + Decisions Control Tower",
      },
      {
        id: "deployment",
        who: "Forward deployed engineers and deployment teams",
        title: "From a use case to a pilot in production, fast.",
        problem: ["A use case is agreed, but the path to production is vague.", "Nobody has decided who should do each piece of work."],
        brings: ["For each function, who does the work: rules, a supervised language model or a human decision.", "An implementation sheet: data and access, evaluation set, guardrails, integration, pilot, adoption.", "A decision control component to keep every decision checked."],
        result: ["Pilots that reach production.", "Clear guardrails from day one."],
        offer: "Team",
      },
      {
        id: "firms",
        who: "Consulting firms and IT services companies",
        title: "Deliver quality scoping faster, with one method across the team.",
        problem: ["Scoping quality depends on who runs it.", "Seniors and juniors work in different ways."],
        brings: ["The same structured method for every consultant.", "Linked, traceable views on every engagement.", "Exports ready for the client committee."],
        result: ["Faster scoping of consistent quality.", "Juniors who produce senior-grade deliverables."],
        offer: "Team or Enterprise",
      },
    ],
  },
  fr: {
    eyebrow: "Pour qui ?",
    title: "Cinq profils. Une architecture cohérente.",
    lead: "Repérez votre situation. Voyez ce qui change pour vous. Choisissez l’offre adaptée.",
    labels: ["Le problème", "Ce qu’Aura apporte", "Le résultat", "L’offre adaptée"],
    seeOffer: "Voir les offres et les prix",
    profiles: [
      {
        id: "architectes",
        who: "Architectes d’entreprise et de solution, indépendants ou en cabinet",
        title: "Du cadrage en semaines à une première architecture en minutes.",
        problem: ["Le cadrage prend des semaines.", "Les vues divergent au fil du travail.", "Les juniors n’ont pas la méthode d’un senior."],
        brings: ["Une première architecture cohérente et traçable en minutes.", "Toutes les vues reliées : stratégie, capacités, fonctionnel, inter-applicatif, processus.", "Des idées proposées, à valider ou écarter d’un clic.", "Des exports prêts pour le comité.", "La méthode d’un senior intégrée : les juniors suivent les bonnes étapes."],
        result: ["Plus de missions livrées.", "Un livrable défendable ligne à ligne."],
        offer: "Solo",
        note: "Estimation indicative : plusieurs jours économisés par cadrage, à vérifier sur votre cas.",
      },
      {
        id: "dsi",
        who: "DSI et responsables d’architecture, des PME aux grands groupes",
        title: "Voir le SI dans son ensemble avant le prochain projet.",
        problem: ["Les projets démarrent sans vue d’ensemble.", "Des applications font doublon.", "Les flux point à point s’accumulent."],
        brings: ["Une vue cohérente du système d’information.", "Les doublons et les flux à risque repérés.", "Une trajectoire cible et un plan d’action."],
        result: ["Des projets qui s’inscrivent dans l’ensemble.", "Des décisions que vos comités peuvent suivre."],
        offer: "Socle (Équipe) ou Entreprise",
      },
      {
        id: "transformation",
        who: "Directions de la transformation, directions métier, dirigeants",
        title: "Tester une idée avant d’engager le budget.",
        problem: ["Le budget est engagé avant de savoir si l’idée tient.", "Les effets sur le reste de l’entreprise apparaissent tard."],
        brings: ["Vos idées testées dans leur cohérence systémique avant d’engager.", "Des scénarios et leurs impacts sur vos indicateurs.", "Des objectifs et résultats clés reliés à chaque choix.", "Un partage clair : où automatiser, où utiliser un modèle de langage encadré, où garder une décision humaine, en conformité avec la réglementation européenne."],
        result: ["Un budget engagé sur des idées qui tiennent.", "Des choix explicables et traçables."],
        offer: "Entreprise + Decisions Control Tower",
      },
      {
        id: "deploiement",
        who: "Ingénieurs déployés chez le client (forward deployed engineers) et équipes de déploiement",
        title: "D’un cas d’usage à un pilote en production, vite.",
        problem: ["Le cas d’usage est validé, le chemin vers la production reste flou.", "Personne n’a tranché qui doit faire chaque travail."],
        brings: ["Pour chaque fonction, qui fait le travail : des règles, un modèle de langage encadré ou une décision humaine.", "Une fiche de mise en œuvre : données et accès, jeu d’évaluation, garde-fous, intégration, pilote, adoption.", "Un composant de contrôle des décisions pour garder chaque décision vérifiée."],
        result: ["Des pilotes qui arrivent en production.", "Des garde-fous clairs dès le premier jour."],
        offer: "Socle (Équipe)",
      },
      {
        id: "cabinets",
        who: "Cabinets de conseil et ESN",
        title: "Livrer plus vite des cadrages de qualité, avec une seule méthode.",
        problem: ["La qualité du cadrage dépend de qui le mène.", "Seniors et juniors travaillent chacun à leur façon."],
        brings: ["La même méthode structurée pour chaque consultant.", "Des vues reliées et traçables sur chaque mission.", "Des exports prêts pour le comité client."],
        result: ["Des cadrages plus rapides, de qualité homogène.", "Des juniors qui livrent au niveau d’un senior."],
        offer: "Socle (Équipe) ou Entreprise",
      },
    ],
  },
};

export function AudiencesPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const dict = getDictionary(locale);
  const offers = `${routes[locale].home}#${locale === "fr" ? "tarifs" : "pricing"}`;

  return (
    <>
      <section className="hero hero-compact dark">
        <div className="hero-backdrop" aria-hidden />
        <div className="container">
          <p className="eyebrow eyebrow-pill">{c.eyebrow}</p>
          <h1 className="display">{c.title}</h1>
          <p className="lead lead-lg">{c.lead}</p>
          <nav className="aud-jump" aria-label={c.eyebrow}>
            {c.profiles.map((p) => (
              <a key={p.id} href={`#${p.id}`}>
                {p.who.split(",")[0]}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {c.profiles.map((p, i) => (
        <section key={p.id} id={p.id} className={`section section-tight${i % 2 ? " section-alt" : ""}`}>
          <div className="container">
            <p className="eyebrow">{p.who}</p>
            <h2 className="aud-title">{p.title}</h2>
            <div className="aud-grid">
              {[p.problem, p.brings, p.result].map((list, k) => (
                <div key={c.labels[k]} className={`aud-cell${k === 2 ? " is-result" : ""}`}>
                  <h3>{c.labels[k]}</h3>
                  <ul className="check-list">
                    {list.map((it) => (
                      <li key={it}>
                        <Check size={15} aria-hidden />
                        {it}
                      </li>
                    ))}
                  </ul>
                  {k === 2 && p.note ? <p className="aud-note">{p.note}</p> : null}
                </div>
              ))}
              <div className="aud-cell is-offer">
                <h3>{c.labels[3]}</h3>
                <p className="aud-offer">{p.offer}</p>
                <Link className="text-link" href={offers}>
                  {c.seeOffer} <ArrowRight size={15} aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
