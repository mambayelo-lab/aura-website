import type { Metadata } from "next";
import { getDictionary } from "@/content/dictionary";
import { products, sprints, tr } from "@/content/products";
import { routes, type Locale, type PageKey } from "./i18n";
import { pageMetadata } from "./metadata";

/** Metadata of the static pages, derived from the content. */
export function metadataFor(locale: Locale, key: PageKey): Metadata {
  const dict = getDictionary(locale);
  const paths = { en: routes.en[key], fr: routes.fr[key] };
  const product = (k: "supply" | "decide" | "architect") => ({
    title: `${tr(products[k].name, locale)} · ${tr(sprints[products[k].sprint].name, locale)}`,
    description: tr(products[k].tagline, locale) + " " + tr(products[k].headline, locale),
  });
  const content: Record<PageKey, { title?: string; description?: string }> = {
    home: {},
    platform: {
      title: locale === "fr" ? "Plateforme Aura : une plateforme, deux portes, un moteur" : "Aura Platform: one platform, two doors, one engine",
      description:
        locale === "fr"
          ? "Aura Architect pour cadrer et architecturer, Aura Control Tower pour piloter et arbitrer, un moteur de décision commun. Aucune hallucination, traçable de bout en bout, simple."
          : "Aura Architect to scope and architect, Aura Control Tower to steer and arbitrate, one shared decision engine. No hallucination, traceable end to end, simple.",
    },
    supply: product("supply"),
    decide: product("decide"),
    architect: product("architect"),
    sprints: {
      title: locale === "fr" ? "Offres : diagnostic, Aura Supply, Sprint Architecture" : "Offers: diagnostic, Aura Supply, Architecture Sprint",
      description:
        locale === "fr"
          ? "Decision intelligence et résilience : Diagnostic express, Aura Supply, Sprint Architecture et Décider. Une décision explicable et traçable, un livrable qui vous appartient."
          : "Decision intelligence and resilience: Express diagnostic, Aura Supply, Architecture Sprint and Decide. Explainable, traceable decisions, a deliverable you own.",
    },
    founder: {
      title: locale === "fr" ? "Le fondateur — pourquoi Aura" : "The founder — why Aura",
      description:
        locale === "fr"
          ? "Mambaye Lo, Ph.D, Lead Enterprise Architect : les problèmes qu’Aura résout, et les travaux de thèse en évaluation d’architectures sur lesquels s’appuie sa méthode."
          : "Mambaye Lo, Ph.D, Lead Enterprise Architect: the problems Aura solves, and the doctoral research on architecture evaluation its method builds on.",
    },
    insights: { title: dict.insightsPage.eyebrow, description: dict.insightsPage.lead },
    contact: { title: dict.nav.contact, description: dict.contact.lead },
  };
  return pageMetadata({ locale, paths, ...content[key] });
}
