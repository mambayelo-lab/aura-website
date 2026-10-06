export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export type ProductKey = "supply" | "decide" | "architect";
export type PageKey = "home" | "platform" | ProductKey | "sprints" | "resources" | "founder" | "insights" | "contact";

/** Public URL of every page, per language. English is the default language, served under /en (the root redirects there). */
export const routes: Record<Locale, Record<PageKey, string>> = {
  en: {
    home: "/en",
    platform: "/en/platform",
    supply: "/en/products/supply-chain",
    decide: "/en#engine",
    architect: "/en/products/architect",
    sprints: "/en/offers",
    resources: "/en/products/architect/resources",
    founder: "/en/founder",
    insights: "/en/insights",
    contact: "/en/contact",
  },
  fr: {
    home: "/fr",
    platform: "/fr/plateforme",
    supply: "/fr/produits/supply-chain",
    decide: "/fr#moteur",
    architect: "/fr/produits/architect",
    sprints: "/fr/offres",
    resources: "/fr/produits/architect/ressources",
    founder: "/fr/fondateur",
    insights: "/fr/perspectives",
    contact: "/fr/contact",
  },
};

/**
 * Application URLs. The website is the only place that links to the applications;
 * the applications never link to each other.
 */
export const appUrls: Record<ProductKey, string> = {
  supply: "https://aura-decision-zen.vercel.app",
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
