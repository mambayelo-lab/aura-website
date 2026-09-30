import type { Locale } from "@/lib/i18n";
import { SectionHead } from "./blocks";

/** What is new in Aura Supply (September 2026). Collaboration is phrased as in progress. */
const items: [string, string, string, string][] = [
  ["Démo Maison Lucie en un clic, ou pas à pas", "Maison Lucie demo in one click, or step by step", "« En un clic » charge la démo complète ; « Pas à pas » est le parcours normal sur votre SI.", "“One click” loads the full demo; “Step by step” is the normal path on your own systems."],
  ["Tous les protocoles réels de vos outils", "All the real protocols of your tools", "Le SI de démonstration Maison Lucie répond par les modes d’accès réels de chaque outil (API, bases, EDI, fichiers, flux), et par un serveur MCP.", "The Maison Lucie demo system answers through each tool’s real access modes (APIs, databases, EDI, files, streams), and through an MCP server."],
  ["12 alertes de résilience chiffrées en €", "12 resilience alerts valued in €", "Fournisseur unique, détroit, stock immobilisé, rappel produit… chaque alerte affiche son montant exposé et ses hypothèses à confirmer.", "Single supplier, strait, tied-up stock, product recall… each alert shows its exposed amount and the assumptions to confirm."],
  ["« Pourquoi c’est solide » et mini-rapport PDF", "“Why it holds” and a PDF mini-report", "Chaque recommandation explique son attitude face au risque, les combinaisons explorées et le plus petit changement qui la ferait basculer.", "Each recommendation explains its risk attitude, the combinations explored and the smallest change that would flip it."],
  ["Hébergement dans l’Union européenne", "Hosting in the European Union", "Application sur Vercel à Paris (cdg1), base Supabase en UE, modèle de langage Mistral en UE.", "Application on Vercel in Paris (cdg1), Supabase database in the EU, Mistral language model in the EU."],
  ["Books de formation, collaboration en cours", "Training books, collaboration on the way", "Des books de formation Supply (avec Décider) en français et en anglais. Commentaires, mentions et assignation : en cours de livraison.", "Training books for Supply (with Decide) in French and English. Comments, mentions and assignment: being rolled out."],
];

export function SupplyNews({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  return (
    <section className="section section-tight" id={fr ? "nouveautes" : "whats-new"}>
      <div className="container">
        <SectionHead eyebrow={fr ? "Nouveautés · septembre 2026" : "What’s new · September 2026"} title={fr ? "Ce qui vient d’arriver dans Aura Supply." : "Just landed in Aura Supply."} />
        <ul className="supply-news">
          {items.map((it) => (
            <li key={it[1]}>
              <strong>{fr ? it[0] : it[1]}</strong>
              <span>{fr ? it[2] : it[3]}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
