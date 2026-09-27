export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export type ProductKey = "supply" | "decide" | "architect";
export type PageKey = "home" | ProductKey | "sprints" | "insights" | "contact";

/** Public URL of every page, per language. English is served at the root. */
export const routes: Record<Locale, Record<PageKey, string>> = {
  en: {
    home: "/",
    supply: "/products/supply-chain",
    decide: "/products/decide",
    architect: "/products/architect",
    sprints: "/sprints",
    insights: "/insights",
    contact: "/contact",
  },
  fr: {
    home: "/fr",
    supply: "/fr/produits/supply-chain",
    decide: "/fr/produits/decider",
    architect: "/fr/produits/architect",
    sprints: "/fr/sprints",
    insights: "/fr/perspectives",
    contact: "/fr/contact",
  },
};

/**
 * Application URLs. The website is the only place that links to the applications;
 * the applications never link to each other.
 */
export const appUrls: Record<ProductKey, string> = {
  supply: "https://aura-decision-zen.vercel.app/cockpit/resilience?section=cockpit",
  decide: "https://aura-decider.vercel.app/cockpit/atelier",
  architect: "https://aura-architect-seven.vercel.app",
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
