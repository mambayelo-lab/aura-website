import { getArticles } from "@/content/articles";
import { getDictionary } from "@/content/dictionary";
import type { Locale } from "@/lib/i18n";
import { ArticleCard, CtaBanner, SectionHead } from "../blocks";

export function InsightsPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const articles = getArticles(locale);

  return (
    <>
      <section className="hero hero-compact dark">
        <div className="hero-backdrop" aria-hidden />
        <div className="container">
          <SectionHead as="h1" eyebrow={dict.insightsPage.eyebrow} title={dict.insightsPage.title} lead={dict.insightsPage.lead} />
        </div>
      </section>
      <section className="section section-tight">
        <div className="container">
          <div className="grid-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} locale={locale} dict={dict} />
            ))}
          </div>
        </div>
      </section>
      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
