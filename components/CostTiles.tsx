import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { costTiles, type CostTile } from "@/content/costs";
import { routes, type Locale } from "@/lib/i18n";
import { More, SectionHead } from "./blocks";

const offerLabel: Record<Locale, Record<CostTile["offer"], string>> = {
  fr: { "stress-test": "Diagnostic express", resilience: "Aura Supply", architecture: "Sprint Architecture", engine: "Décider" },
  en: { "stress-test": "Express diagnostic", resilience: "Aura Supply", architecture: "Architecture Sprint", engine: "Decide" },
};

/** One strong sourced figure up front; every other figure, with its source, sits in a fold. */
export function CostTiles({ locale, alt = false }: { locale: Locale; alt?: boolean }) {
  const r = routes[locale];
  const anchors: Record<CostTile["offer"], string> = { "stress-test": "diagnostic", resilience: "supply", architecture: "architecture", engine: "decide" };
  const href = (offer: CostTile["offer"]) => `${r.sprints}#${anchors[offer]}`;
  const fr = locale === "fr";
  const [first, ...rest] = costTiles[locale];
  return (
    <section className={`section section-tight${alt ? " section-alt" : ""}`} id={fr ? "couts" : "costs"}>
      <div className="container">
        <SectionHead
          eyebrow={fr ? "Le problème" : "The problem"}
          title={fr ? "Une rupture vue trop tard se paie cher." : "A disruption seen too late costs dearly."}
          lead={fr ? "Aura raccourcit le chemin entre l’alerte et la décision signée." : "Aura shortens the path from the alert to the signed decision."}
        />
        <div className="cost-lead">
          <strong className="cost-figure">{first.figure}</strong>
          <p>
            {first.text}{" "}
            <small>
              <a href={first.href} target="_blank" rel="noopener noreferrer">
                {first.source}
              </a>
            </small>
          </p>
        </div>
        <More label={fr ? "Les autres chiffres et leurs sources" : "The other figures and their sources"}>
          <div className="grid-3 cost-grid">
            {rest.map((t) => (
              <article key={t.href} className="cost-tile">
                <strong className="cost-figure">{t.figure}</strong>
                <p>{t.text}</p>
                <small>
                  <a href={t.href} target="_blank" rel="noopener noreferrer">
                    {t.source}
                  </a>
                </small>
                <Link className="text-link" href={href(t.offer)}>
                  {t.answer} · {offerLabel[locale][t.offer]} <ArrowRight size={14} aria-hidden />
                </Link>
              </article>
            ))}
          </div>
          <p className="cred-line">
            {fr
              ? "Chiffres issus d’études publiées (lien sur chaque chiffre ; quand il passe par un relais, le relais et l’étude d’origine sont cités). Ce sont des moyennes sectorielles, pas une promesse de gain."
              : "Figures from published studies (link on each figure; where it comes through a relay, both the relay and the original study are named). These are industry averages, not a promise of gains."}
          </p>
        </More>
      </div>
    </section>
  );
}
