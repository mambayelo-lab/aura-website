import type { Locale } from "@/lib/i18n";
import { articlesEn } from "./articles.en";
import { articlesFr } from "./articles.fr";

export type Article = {
  slug: string;
  category: string;
  title: string;
  standfirst: string;
  readTime: string;
  body: string[];
  takeaways: string[];
};

export type Topic = "decision" | "energy" | "supply-chain" | "architecture";

/** Metadata shared by both translations, in article order. */
const img = (src: string, fr: string, en: string) => ({ src: `/images/family/${src}.webp`, alt: { fr, en } });

const shared: { topic: Topic; image?: { src: string; alt: Record<Locale, string> } }[] = [
  {
    topic: "decision",
    image: img("decision-agent", "Un agent IA prépare une proposition, une personne la valide", "An AI agent prepares a proposal, a person validates it"),
  },
  {
    topic: "decision",
    image: img("method", "Deux personnes relient un objectif à des options puis à un plan d’action", "Two people link a goal to options, then to an action plan"),
  },
  {
    topic: "energy",
    image: img("energy-loop", "Site industriel relié à des sources d’énergie renouvelable et à une boucle de recyclage", "Industrial site linked to renewable energy sources and a recycling loop"),
  },
  {
    topic: "energy",
    image: img("energy-site", "Site industriel avec stockage par batteries, panneaux solaires et raccordement au réseau", "Industrial site with battery storage, solar panels and a grid connection"),
  },
  {
    topic: "energy",
    image: img("signal-to-decision", "Flux de signaux convergeant vers une décision unique", "Streams of signals converging into a single decision"),
  },
  {
    topic: "supply-chain",
    image: img("port-control-tower", "Porte-conteneurs entrant dans un port industriel au crépuscule", "Container ship entering an industrial port at dusk"),
  },
  {
    topic: "supply-chain",
    image: img("supply-network", "Réseau d’usines, d’entrepôt et de magasins avec une livraison interrompue", "Network of plants, a warehouse and stores with one interrupted delivery"),
  },
  {
    topic: "architecture",
    image: img("living-context", "Relier le contexte métier vivant aux systèmes de l’entreprise", "Connecting living business context to enterprise systems"),
  },
];

export type ArticleEntry = Article & {
  index: number;
  topic: Topic;
  image?: { src: string; alt: string };
};

const byLocale: Record<Locale, Article[]> = { en: articlesEn, fr: articlesFr };

export function getArticles(locale: Locale): ArticleEntry[] {
  return byLocale[locale].map((article, index) => {
    const meta = shared[index];
    return {
      ...article,
      index,
      topic: meta.topic,
      image: meta.image && { src: meta.image.src, alt: meta.image.alt[locale] },
    };
  });
}

export function getArticle(locale: Locale, slug: string): ArticleEntry | undefined {
  return getArticles(locale).find((article) => article.slug === slug);
}

/** Slug of the same article in the other language. */
export function translatedSlug(from: Locale, to: Locale, slug: string): string | undefined {
  const index = byLocale[from].findIndex((article) => article.slug === slug);
  return index === -1 ? undefined : byLocale[to][index]?.slug;
}
