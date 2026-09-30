import { getArticles, isCase } from "@/content/articles";
import { getDictionary } from "@/content/dictionary";
import type { Locale } from "@/lib/i18n";
import { ArticleCard, CtaBanner, SectionHead } from "../blocks";

export function InsightsPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const all = getArticles(locale);
  const cases = all.filter(isCase);
  const articles = all.filter((article) => !isCase(article));

  return (
    <>
      <section className="hero hero-compact dark">
        <div className="hero-backdrop" aria-hidden />
        <div className="container">
          <SectionHead as="h1" eyebrow={dict.insightsPage.eyebrow} title={dict.insightsPage.title} lead={dict.insightsPage.lead} />
        </div>
      </section>
      {cases.length > 0 && (
        <section className="section section-tight" id={locale === "fr" ? "cas" : "cases"} aria-labelledby="cases-title">
          <div className="container">
            <h2 id="cases-title" style={{ marginBottom: 16 }}>{locale === "fr" ? "Cas" : "Cases"}</h2>
            <div className="grid-3">
              {cases.map((article) => (
                <ArticleCard key={article.slug} article={article} locale={locale} dict={dict} />
              ))}
            </div>
          </div>
        </section>
      )}
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
