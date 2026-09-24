import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/pages/ArticlePage";
import { getArticle, getArticles, translatedSlug } from "@/content/articles";
import { articleHref } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles("en").map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle("en", slug);
  if (!article) return {};
  const counterpart = translatedSlug("en", "fr", slug) ?? slug;
  return pageMetadata({
    locale: "en",
    title: article.title,
    description: article.standfirst,
    paths: { en: articleHref("en", slug), fr: articleHref("fr", counterpart) },
    type: "article",
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = getArticle("en", slug);
  if (!article) notFound();
  return <ArticlePage locale="en" article={article} />;
}
