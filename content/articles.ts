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
const shared: { topic: Topic; image?: { src: string; alt: Record<Locale, string> } }[] = [
  { topic: "decision" },
  { topic: "decision" },
  { topic: "energy" },
  { topic: "energy" },
  { topic: "energy" },
  {
    topic: "supply-chain",
    image: {
      src: "/images/transformation.jpg",
      alt: {
        en: "From legacy systems to a coherent digital architecture",
        fr: "Des systèmes hérités vers une architecture digitale cohérente",
      },
    },
  },
  { topic: "supply-chain" },
  {
    topic: "architecture",
    image: {
      src: "/images/living-context.jpg",
      alt: {
        en: "Connecting living business context to enterprise systems",
        fr: "Relier le contexte métier vivant aux systèmes de l’entreprise",
      },
    },
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
