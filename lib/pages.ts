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
    supply: product("supply"),
    decide: product("decide"),
    architect: product("architect"),
    sprints: {
      title: locale === "fr" ? "Sprints — travailler ensemble" : "Sprints — working together",
      description:
        locale === "fr"
          ? "Sprint Résilience, Decision Sprint, Design Sprint Architecture : un problème réel, quelques semaines, un livrable qui vous appartient."
          : "Resilience stress test, Resilience Sprint, Decision Sprint, Architecture Design Sprint: one real problem, a few weeks, a deliverable you own.",
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
