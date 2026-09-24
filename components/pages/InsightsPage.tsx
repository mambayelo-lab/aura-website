import { getArticles } from "@/content/articles";
import { getDictionary } from "@/content/dictionary";
import type { Locale } from "@/lib/i18n";
import { ArticleCard, CtaBanner, SectionHeading } from "../blocks";

export function InsightsPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [featured, ...rest] = getArticles(locale);

  return (
    <>
      <section className="page-hero page-hero-compact">
        <div className="hero-backdrop hero-backdrop-soft" aria-hidden />
        <div className="container">
          <SectionHeading
            as="h1"
            eyebrow={dict.insightsPage.eyebrow}
            title={dict.insightsPage.title}
            lead={dict.insightsPage.lead}
            align="split"
          />
          <ArticleCard article={featured} locale={locale} dict={dict} featured />
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <div className="article-grid">
            {rest.map((article) => (
              <ArticleCard key={article.slug} article={article} locale={locale} dict={dict} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
