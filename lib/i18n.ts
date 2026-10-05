export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export type ProductKey = "supply" | "decide" | "architect";
export type PageKey = "home" | "platform" | ProductKey | "sprints" | "founder" | "insights" | "contact";

/** Public URL of every page, per language. English is served at the root. */
export const routes: Record<Locale, Record<PageKey, string>> = {
  en: {
    home: "/",
    platform: "/platform",
    supply: "/products/supply-chain",
    decide: "/#engine",
    architect: "/products/architect",
    sprints: "/offers",
    founder: "/founder",
    insights: "/insights",
    contact: "/contact",
  },
  fr: {
    home: "/fr",
    platform: "/fr/plateforme",
    supply: "/fr/produits/supply-chain",
    decide: "/fr#moteur",
    architect: "/fr/produits/architect",
    sprints: "/fr/offres",
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
