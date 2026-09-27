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
  /** Sources cited in the article, listed at the end. */
  references?: { label: string; href: string }[];
};

export type Topic = "decision" | "energy" | "supply-chain" | "architecture";

/** Metadata shared by both translations, in article order. */
const img = (src: string, fr: string, en: string) => ({ src: `/images/aura/${src}.webp`, alt: { fr, en } });

const shared: { topic: Topic; image?: { src: string; alt: Record<Locale, string> } }[] = [
  {
    topic: "decision",
    image: img("exec-meeting", "Un comité de direction examine des scénarios chiffrés projetés sur un écran", "A leadership committee reviews quantified scenarios projected on a screen"),
  },
  {
    topic: "decision",
    image: img("ai-cadrage", "Cerveau lumineux fait de points reliés, suspendu au-dessus d’un pupitre de contrôle : l’IA prépare, l’humain décide", "Glowing brain made of linked dots hovering above a control desk: AI prepares, people decide"),
  },
  {
    topic: "decision",
    image: img("clouds-vision", "Un dirigeant, sur une passerelle au-dessus des nuages, regarde l’horizon au lever du soleil", "A leader on a walkway above the clouds looks at the horizon at sunrise"),
  },
  {
    topic: "energy",
    image: img("earth-network", "La Terre vue de l’espace, parcourue de lignes lumineuses reliant les villes", "Earth seen from space, criss-crossed by light lines linking cities"),
  },
  {
    topic: "energy",
    image: img("nexus", "Salle de pilotage avec un mur d’écrans de courbes et d’indicateurs en temps réel", "Operations room with a wall of screens showing real-time curves and indicators"),
  },
  {
    topic: "energy",
    image: img("control-tower", "Tour de contrôle numérique : écrans de tableaux de bord et carte du monde autour d’un anneau central", "Digital control tower: dashboard screens and a world map around a central ring"),
  },
  {
    topic: "supply-chain",
    image: img("port-night", "Portiques de chargement et porte-conteneurs à quai, de nuit, sous un ciel indigo", "Loading cranes and container ships at the quay at night, under an indigo sky"),
  },
  {
    topic: "supply-chain",
    image: img("supply-map", "Carte du monde lumineuse des flux logistiques projetée au-dessus d’un port", "Glowing world map of logistics flows projected above a port"),
  },
  {
    topic: "architecture",
    image: img("legacy-modern", "Des baies de serveurs anciennes reliées par un faisceau de lumière à des services cloud modernes", "Legacy server racks linked by a beam of light to modern cloud services"),
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
