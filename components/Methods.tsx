import { methods, sprintMethods, type MethodKey } from "@/content/methods";
import { localize, tr, type SprintKey } from "@/content/products";
import type { Locale, ProductKey } from "@/lib/i18n";
import { ZoomCard, type ZoomLabels } from "./zoom/ZoomCard";

/** A row of method chips (short labels only). */
export function MethodChips({ keys, locale }: { keys: MethodKey[]; locale: Locale }) {
  return (
    <ul className="method-chips" aria-label={locale === "fr" ? "Méthodes appliquées" : "Methods applied"}>
      {keys.map((key) => (
        <li key={key} className={key === "systemic" ? "method-chip method-chip-core" : "method-chip"}>
          {chipLabel(key, locale)}
        </li>
      ))}
    </ul>
  );
}

function chipLabel(key: MethodKey, locale: Locale) {
  if (key === "ddd") return "DDD";
  if (key === "evaluation") return locale === "fr" ? "Évaluation sous incertitude" : "Evaluation under uncertainty";
  return tr(methods[key].title, locale);
}

/** One zoomable card per method, with its one-sentence explanation. */
export function MethodCards({
  keys,
  locale,
  labels,
  product,
}: {
  keys: MethodKey[];
  locale: Locale;
  labels: ZoomLabels;
  product?: ProductKey;
}) {
  return (
    <div className="grid-3 method-grid">
      {keys.map((key) => (
        <ZoomCard key={key} product={product} variant="compact" labels={labels} detail={localize(methods[key], locale)} />
      ))}
    </div>
  );
}

/** Short reminder for a product page: systemic analysis first, then the sprint's methods. */
export function MethodReminder({ sprint, locale }: { sprint: SprintKey; locale: Locale }) {
  const keys = sprintMethods[sprint];
  const fr = locale === "fr";
  const text =
    sprint === "architecture"
      ? fr
        ? "Le sprint s’ouvre sur une analyse systémique, puis mobilise DDD, architecture modulaire, TOGAF, CESAMES et BPMN."
        : "The sprint opens with a systems analysis, then draws on DDD, modular architecture, TOGAF, CESAMES and BPMN."
      : fr
        ? "Le sprint s’ouvre sur une analyse systémique ; les options sont évaluées selon une méthode issue de travaux de thèse, robuste à l’incertitude."
        : "The sprint opens with a systems analysis; options are evaluated with a method drawn from doctoral research, robust to uncertainty.";
  return (
    <div className="method-reminder">
      <p className="fact-label">{fr ? "Méthode" : "Method"}</p>
      <MethodChips keys={keys} locale={locale} />
      <p className="muted">{text}</p>
    </div>
  );
}
