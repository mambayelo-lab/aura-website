import type { MetadataRoute } from "next";
import { getArticles } from "@/content/articles";
import { articleHref, routes, siteUrl, type PageKey } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (en: string, fr: string): MetadataRoute.Sitemap => [
    { url: `${siteUrl}${en}`, alternates: { languages: { en: `${siteUrl}${en}`, fr: `${siteUrl}${fr}` } } },
    { url: `${siteUrl}${fr}`, alternates: { languages: { en: `${siteUrl}${en}`, fr: `${siteUrl}${fr}` } } },
  ];
  const pages = (Object.keys(routes.en) as PageKey[]).flatMap((key) => entry(routes.en[key], routes.fr[key]));
  const fr = getArticles("fr");
  const articles = getArticles("en").flatMap((article, index) =>
    entry(articleHref("en", article.slug), articleHref("fr", fr[index].slug)),
  );
  return [...pages, ...articles];
}
