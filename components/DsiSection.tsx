import { ArrowRight, Database, Gauge, KeyRound, Layers, ListChecks } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const copy = {
  fr: {
    eyebrow: "Pour les DSI",
    title: "Une intégration sans risque pour votre SI.",
    more: "Le détail sur la page Supply Chain",
    items: [
      [Database, "Aucune copie massive", "Les données restent dans vos systèmes. Aura ne garde que des agrégats légers."],
      [Gauge, "Votre SI protégé", "Plafonds de sollicitation, extractions lourdes la nuit, ralentissement automatique si une source faiblit, aucun accès direct à la production par défaut."],
      [Layers, "Intégration propre (DDD)", "Une couche anticorruption par source, un modèle métier unique, une application maître par attribut. Aura ne vous impose pas son modèle."],
      [ListChecks, "Connexion guidée", "Un questionnaire par objet métier, lecture automatique des métadonnées, mapping proposé et scoré, validation humaine."],
      [KeyRound, "Identifiants côté serveur", "Jamais dans le navigateur, avec des accès limités aux fenêtres de synchronisation."],
    ],
  },
  en: {
    eyebrow: "For CIOs",
    title: "Risk-free integration for your IT landscape.",
    more: "Details on the Supply Chain page",
    items: [
      [Database, "No bulk copy", "Data stays in your systems. Aura keeps only light aggregates."],
      [Gauge, "Your systems protected", "Load caps, heavy extractions at night, automatic throttling when a source weakens, no direct production access by default."],
      [Layers, "Clean integration (DDD)", "One anti-corruption layer per source, a single business model, one master application per attribute. Aura doesn’t impose its model."],
      [ListChecks, "Guided connection", "A questionnaire per business object, automatic metadata reading, a proposed and scored mapping, human validation."],
      [KeyRound, "Server-side credentials", "Never in the browser, with access limited to synchronisation windows."],
    ],
  },
} as const;

/** "For CIOs" argument block: full on the Supply page, compact summary on the home page. */
export function DsiSection({ locale, summary, href }: { locale: Locale; summary?: boolean; href?: string }) {
  const c = copy[locale];
  return (
    <section className={`section section-tight dsi${summary ? " dsi-summary" : ""}`} id="dsi">
      <div className="container">
        <p className="eyebrow">{c.eyebrow}</p>
        <h2 className="h2 dsi-title">{c.title}</h2>
        <ul className="dsi-grid">
          {c.items.map(([Icon, title, text]) => (
            <li key={title}>
              <span className="dsi-icon" aria-hidden>
                <Icon size={20} />
              </span>
              <strong>{title}</strong>
              {!summary && <span>{text}</span>}
            </li>
          ))}
        </ul>
        {summary && href && (
          <Link className="text-link" href={`${href}#dsi`}>
            {c.more} <ArrowRight size={15} aria-hidden />
          </Link>
        )}
      </div>
    </section>
  );
}
