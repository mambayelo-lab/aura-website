import { ArrowRight, Calculator, FileText, Network, PenLine } from "lucide-react";
import Link from "next/link";
import { routes, type Locale } from "@/lib/i18n";
import { FlowStrip } from "./FlowStrip";
import { Illus, Thumb } from "./Illus";

/* Key messages of the Decisions Control Tower engine (EN/FR). */
const copy = {
  fr: {
    eyebrow: "Le moteur de décision",
    title: "Le moteur de décision qu’un décideur configure seul, en quelques minutes.",
    lead: "Pour les décisions trop complexes pour l’intuition et trop pauvres en données pour l’analytique.",
    flowLabel: "Le parcours en quatre temps",
    steps: [
      [PenLine, "Vous décrivez la situation", "Avec vos mots : l’enjeu, les options, les contraintes."],
      [Network, "Aura structure le modèle", "Objectifs, critères et options, que vous ajustez."],
      [Calculator, "Vous évaluez chaque option sur chaque critère", "Votre jugement, une évaluation élémentaire à la fois."],
      [FileText, "La décision est calculée et expliquée", "Les options classées, avec les raisons du classement."],
    ],
    proofs: ["Explicable devant un comité ou un régulateur.", "Recalculée dès qu’un paramètre change."],
    libEyebrow: "Bibliothèque de modèles de décision",
    libTitle: "Partez d’un modèle prêt à l’emploi, par Control Tower.",
    groups: [
      ["Control Tower Supply", [
        ["Demande volatile", "Couvrir par le stock, par la capacité ou par la promesse."],
        ["Approvisionnement", "Couverture de stock, contrat fournisseur, pilotage du risque."],
        ["Logistique", "Mode de transport, stockage, pilotage des flux."],
      ]],
      ["Control Tower générique", [
        ["Choix de solution", "Niveau d’adaptation, accompagnement, mise en service."],
        ["Investissement", "Financement, maintenance, mise en route."],
        ["Stratégie", "Rythme, mode d’entrée, financement."],
        ["Décision libre", "Rythme, conduite, suivi : à adapter à votre cas."],
      ]],
    ],
  },
  en: {
    eyebrow: "The decision engine",
    title: "The decision engine a decision-maker sets up alone, in minutes.",
    lead: "For decisions too complex for intuition and too short on data for analytics.",
    flowLabel: "The four-step journey",
    steps: [
      [PenLine, "You describe the situation", "In your own words: the stakes, the options, the constraints."],
      [Network, "Aura structures the model", "Objectives, criteria and options, for you to adjust."],
      [Calculator, "You assess each option against each criterion", "Your judgement, one elementary assessment at a time."],
      [FileText, "The decision is computed and explained", "Options ranked, with the reasons behind the ranking."],
    ],
    proofs: ["Explainable to a board or a regulator.", "Recomputed as soon as a parameter changes."],
    libEyebrow: "Decision model library",
    libTitle: "Start from a ready-made model, per Control Tower.",
    groups: [
      ["Supply Control Tower", [
        ["Volatile demand", "Cover through stock, capacity or the delivery promise."],
        ["Procurement", "Stock coverage, supplier contract, risk monitoring."],
        ["Logistics", "Transport mode, warehousing, flow management."],
      ]],
      ["Generic Control Tower", [
        ["Solution choice", "Level of customisation, implementation support, go-live."],
        ["Investment", "Financing, maintenance, ramp-up."],
        ["Strategy", "Pace, mode of entry, financing."],
        ["Open decision", "Pace, delivery, follow-up: adapt it to your case."],
      ]],
    ],
  },
} as const;

export function DecisionEngine({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <section className="section de-section" id={locale === "fr" ? "moteur" : "engine"}>
      <div className="container">
        <div className="illus-head">
          <div>
            <p className="eyebrow">{c.eyebrow}</p>
            <h2 className="h2 de-title">{c.title}</h2>
            <p className="lead de-lead">{c.lead}</p>
          </div>
          <Illus name="decision" locale={locale} />
        </div>
        <FlowStrip label={c.flowLabel} steps={c.steps.map(([icon, title, text]) => ({ icon, title, text }))} />
        <ul className="de-proofs">
          {c.proofs.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <div className="de-lib">
          <p className="eyebrow">{c.libEyebrow}</p>
          <div className="de-lib-head">
            <h3 className="de-lib-title">{c.libTitle}</h3>
            <Thumb src={`/images/product/v3/ct-models-${locale}.webp`} alt={locale === "fr" ? "Bibliothèque de modèles de décision dans Control Tower (données de démonstration)" : "Decision model library in Control Tower (demo data)"} width={1200} height={590} />
          </div>
          {c.groups.map(([group, models]) => (
            <div key={group} className="de-group">
              <p className="de-group-name">{group}</p>
              <ul className="de-tiles">
                {models.map(([name, text]) => (
                  <li key={name}>
                    <strong>{name}</strong>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Short reminder for the home page. */
export function DecisionEngineReminder({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const fr = locale === "fr";
  return (
    <section className="section section-tight de-reminder">
      <div className="container">
        <p className="eyebrow">Decisions Control Tower</p>
        <h2 className="h2 de-title">{c.title}</h2>
        <p className="lead de-lead">{c.lead}</p>
        <ol className="de-mini">
          {c.steps.map(([, title], i) => (
            <li key={title}>
              <span aria-hidden>{i + 1}</span>
              {title}
            </li>
          ))}
        </ol>
        <p className="de-proofs-inline">{c.proofs.join(" ")}</p>
        <Link className="text-link" href={`${routes[locale].supply}#${fr ? "moteur" : "engine"}`}>
          {fr ? "Voir le moteur de décision" : "See the decision engine"} <ArrowRight size={14} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
