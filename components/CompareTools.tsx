import { Check, Minus, X } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { SectionHead } from "./blocks";

type Mark = "yes" | "partial" | "no";
const short = { fr: ["Tableau", "BI", "Optim.", "Aura"], en: ["Dash.", "BI", "Optim.", "Aura"] };
const cols = { fr: ["Tableau de bord", "BI", "Algorithme d’optimisation classique", "Aura"], en: ["Dashboard", "BI", "Classic optimisation algorithm", "Aura"] };

// Honest marks: optimisation explores combinations and offers sensitivity analysis; BI can apply rules to data.
const rows: { fr: string; en: string; marks: Mark[] }[] = [
  { fr: "Raisonner avec des évaluations qualitatives d’experts, sans poids chiffrés arbitraires", en: "Reason with experts’ qualitative assessments, without arbitrary numeric weights", marks: ["no", "no", "no", "yes"] },
  { fr: "Décider de façon prudente dans l’incertitude", en: "Decide cautiously under uncertainty", marks: ["no", "no", "partial", "yes"] },
  { fr: "Explorer toutes les combinaisons de leviers", en: "Explore every combination of levers", marks: ["no", "no", "yes", "yes"] },
  { fr: "Dire quel plus petit changement ferait basculer la décision", en: "Say which smallest change would flip the decision", marks: ["no", "no", "partial", "yes"] },
  { fr: "Expliquer et tracer chaque décision (exigence de contrôle humain de l’AI Act)", en: "Explain and trace every decision (AI Act human-oversight requirement)", marks: ["no", "no", "no", "yes"] },
  { fr: "Combiner règles causales, données et IA générative, avec un humain qui décide", en: "Combine causal rules, data and generative AI, with a human who decides", marks: ["no", "partial", "no", "yes"] },
];

const icon = { yes: Check, partial: Minus, no: X };

export function CompareTools({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const label = { yes: fr ? "Oui" : "Yes", partial: fr ? "En partie" : "Partly", no: fr ? "Non" : "No" };
  return (
    <section className="section section-tight" id={fr ? "comparatif" : "comparison"}>
      <div className="container">
        <SectionHead
          eyebrow={fr ? "Ce qu’un outil classique ne sait pas faire" : "What a classic tool cannot do"}
          title={fr ? "Une IA agentique multi-méthodes, avec un humain qui décide." : "Multi-method agentic AI, with a human who decides."}
          lead={
            fr
              ? "Aura combine des agents de décision, des règles causales, vos données et un modèle de langage. Les agents préparent l’arbitrage ; une personne identifiée le valide et le signe."
              : "Aura combines decision agents, causal rules, your data and a language model. The agents prepare the trade-off; a named person validates and signs it."
          }
        />
        <div className="tools-wrap">
          <table className="tools-table">
            <thead>
              <tr>
                <th scope="col">{fr ? "Capacité" : "Capability"}</th>
                {cols[locale].map((c, i) => (
                  <th key={c} scope="col">
                    <span className="col-long">{c}</span>
                    <span className="col-short" aria-hidden>{short[locale][i]}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.en}>
                  <th scope="row">{row[locale]}</th>
                  {row.marks.map((m, i) => {
                    const Icon = icon[m];
                    return (
                      <td key={i} data-mark={m} data-aura={i === 3 || undefined}>
                        <Icon size={18} aria-hidden />
                        <span className="sr-only">{label[m]}</span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="cred-line">
          {fr
            ? "« En partie » : un algorithme d’optimisation parcourt les combinaisons et propose des analyses de sensibilité, mais sur des poids chiffrés fixés à l’avance ; une BI applique des règles à des données, sans IA générative ni décision signée."
            : "“Partly”: an optimisation algorithm searches combinations and offers sensitivity analysis, but on numeric weights set in advance; BI applies rules to data, without generative AI or a signed decision."}
        </p>
      </div>
    </section>
  );
}
