import type { Locale } from "@/lib/i18n";

/** Sprint Architecture: the two situations it covers and the common scope. No prices. */
export const architectOffer: Record<Locale, { situationsTitle: string; situations: { title: string; text: string }[]; commonTitle: string; common: string[] }> = {
  fr: {
    situationsTitle: "Deux situations",
    situations: [
      { title: "Transformation à venir", text: "Stratégique ou opérationnelle : cadrer, définir la cible, construire la feuille de route et la spécification." },
      { title: "Transformation en cours ou en difficulté", text: "Diagnostic de l’écart au plan, identification des causes (alignement des enjeux, parties prenantes, dette, périmètre), puis plan de redressement." },
    ],
    commonTitle: "Contenu commun",
    common: [
      "Stratégie et enjeux, PESTEL, analyse des parties prenantes",
      "Cartographie de l’existant et de la cible",
      "Feuille de route",
      "Exigences et spécification",
      "Décision entre scénarios",
    ],
  },
  en: {
    situationsTitle: "Two situations",
    situations: [
      { title: "Upcoming transformation", text: "Strategic or operational: frame it, define the target, build the roadmap and the specification." },
      { title: "Transformation under way or in trouble", text: "Diagnose the gap to plan, identify the causes (alignment of stakes, stakeholders, debt, scope), then a recovery plan." },
    ],
    commonTitle: "Common scope",
    common: [
      "Strategy and stakes, PESTEL, stakeholder analysis",
      "Map of the current and target landscape",
      "Roadmap",
      "Requirements and specification",
      "Decision between scenarios",
    ],
  },
};
