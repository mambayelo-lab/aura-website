import type { Metadata } from "next";
import { getDictionary } from "@/content/dictionary";
import { routes, type Locale, type PageKey } from "./i18n";
import { pageMetadata } from "./metadata";

/** Metadata of the static pages, derived from the dictionary. */
export function metadataFor(locale: Locale, key: PageKey): Metadata {
  const dict = getDictionary(locale);
  const paths = { en: routes.en[key], fr: routes.fr[key] };
  const content: Record<PageKey, { title?: string; description?: string }> = {
    home: {},
    decide: {
      title: `${dict.offers.decide.name} · ${dict.offers.decide.sprint}`,
      description: dict.offers.decide.summary,
    },
    architect: {
      title: `${dict.offers.architect.name} · ${dict.offers.architect.sprint}`,
      description: dict.offers.architect.summary,
    },
    energy: { title: dict.industries.energy.name, description: dict.industries.energy.lead },
    supplyChain: { title: dict.industries.supplyChain.name, description: dict.industries.supplyChain.lead },
    insights: { title: dict.insightsPage.eyebrow, description: dict.insightsPage.lead },
    contact: { title: dict.nav.contact, description: dict.contact.lead },
  };
  return pageMetadata({ locale, paths, ...content[key] });
}
