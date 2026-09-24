export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export type PageKey = "home" | "decide" | "architect" | "energy" | "supplyChain" | "insights" | "contact";

/** Public URL of every page, per language. English is served at the root. */
export const routes: Record<Locale, Record<PageKey, string>> = {
  en: {
    home: "/",
    decide: "/offers/decide",
    architect: "/offers/architect",
    energy: "/industries/energy",
    supplyChain: "/industries/supply-chain",
    insights: "/insights",
    contact: "/contact",
  },
  fr: {
    home: "/fr",
    decide: "/fr/offres/decider",
    architect: "/fr/offres/architecturer",
    energy: "/fr/secteurs/energie",
    supplyChain: "/fr/secteurs/supply-chain",
    insights: "/fr/perspectives",
    contact: "/fr/contact",
  },
};

export function articleHref(locale: Locale, slug: string) {
  return `${routes[locale].insights}/${slug}`;
}

export const contactEmail = "contact@aura-decision.ai";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
