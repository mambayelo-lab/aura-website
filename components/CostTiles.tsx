import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { costTiles, type CostTile } from "@/content/costs";
import { routes, type Locale } from "@/lib/i18n";
import { SectionHead } from "./blocks";

const offerLabel: Record<Locale, Record<CostTile["offer"], string>> = {
  fr: { "stress-test": "Stress-test résilience", resilience: "Sprint Résilience", architecture: "Sprint Architecture", engine: "Moteur de décision" },
  en: { "stress-test": "Resilience stress test", resilience: "Resilience Sprint", architecture: "Architecture Sprint", engine: "Decision engine" },
};

export function CostTiles({ locale, alt = false }: { locale: Locale; alt?: boolean }) {
  const r = routes[locale];
  const href = (offer: CostTile["offer"]) => (offer === "engine" ? r.decide : `${r.sprints}#${offer}`);
  const fr = locale === "fr";
  return (
    <section className={`section section-tight${alt ? " section-alt" : ""}`} id={fr ? "couts" : "costs"}>
      <div className="container">
        <SectionHead
          eyebrow={fr ? "Ce que ça vous coûte" : "What it costs you"}
          title={fr ? "Résilience et transformation : le prix de la décision qui tarde." : "Resilience and transformation: the price of a late decision."}
        />
        <div className="grid-4 cost-grid">
          {costTiles[locale].map((t) => (
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
      </div>
    </section>
  );
}
