import { ArrowLeft, ArrowRight, BrainCircuit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getArticles, type ArticleEntry } from "@/content/articles";
import { getDictionary } from "@/content/dictionary";
import { articleHref, routes, type Locale } from "@/lib/i18n";
import { ArticleCard, CtaBanner } from "../blocks";

export function ArticlePage({ locale, article }: { locale: Locale; article: ArticleEntry }) {
  const dict = getDictionary(locale);
  const articles = getArticles(locale);
  const previous = articles[article.index - 1];
  const next = articles[article.index + 1];
  const related = articles.filter((item) => item.topic === article.topic && item.slug !== article.slug).slice(0, 2);
  const suggestions = related.length > 0 ? related : articles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <>
      <article className="article">
        <header className="article-header">
          <div className="hero-backdrop hero-backdrop-soft" aria-hidden />
          <div className="container container-narrow">
            <Link className="back-link" href={routes[locale].insights}>
              <ArrowLeft size={16} aria-hidden /> {dict.common.backToInsights}
            </Link>
            <p className="article-meta">
              <span className="pill">{article.category}</span>
              <span>
                {article.readTime} {dict.common.minRead}
              </span>
            </p>
            <h1 className="title-xl">{article.title}</h1>
            <p className="article-standfirst">{article.standfirst}</p>
          </div>
        </header>

        <div className="container container-narrow article-body">
          {article.image && (
            <Image
              className="article-image"
              src={article.image.src}
              alt={article.image.alt}
              width={1536}
              height={1152}
              sizes="(max-width: 760px) 100vw, 720px"
            />
          )}
          {article.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <aside className="takeaways">
            <p className="takeaways-title">
              <BrainCircuit size={18} aria-hidden /> {dict.common.keyTakeaways}
            </p>
            <ul>
              {article.takeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>

          <nav className="article-pager" aria-label={dict.nav.insights}>
            {previous ? (
              <Link href={articleHref(locale, previous.slug)} className="pager-link">
                <small>
                  <ArrowLeft size={14} aria-hidden /> {dict.common.previous}
                </small>
                {previous.title}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={articleHref(locale, next.slug)} className="pager-link pager-next">
                <small>
                  {dict.common.next} <ArrowRight size={14} aria-hidden />
                </small>
                {next.title}
              </Link>
            )}
          </nav>
        </div>
      </article>

      <section className="section section-muted">
        <div className="container">
          <p className="eyebrow">{dict.common.related}</p>
          <div className="article-grid article-grid-2">
            {suggestions.map((item) => (
              <ArticleCard key={item.slug} article={item} locale={locale} dict={dict} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
