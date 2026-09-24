import "@/app/globals.css";
import { getArticles } from "@/content/articles";
import { getDictionary } from "@/content/dictionary";
import { sans, serif } from "@/lib/fonts";
import { articleHref, routes, type Locale } from "@/lib/i18n";
import { Footer } from "./Footer";
import { Header } from "./Header";

/** Maps every page path to its counterpart in the other language. */
function languageAlternates(): Record<string, string> {
  const map: Record<string, string> = {};
  const add = (en: string, fr: string) => {
    map[en] = fr;
    map[fr] = en;
  };
  for (const key of Object.keys(routes.en) as (keyof typeof routes.en)[]) add(routes.en[key], routes.fr[key]);
  const en = getArticles("en");
  const fr = getArticles("fr");
  en.forEach((article, index) => add(articleHref("en", article.slug), articleHref("fr", fr[index].slug)));
  return map;
}

export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const dict = getDictionary(locale);
  return (
    <html lang={locale} className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a className="skip-link" href="#content">
          {dict.nav.skip}
        </a>
        <Header locale={locale} dict={dict} alternates={languageAlternates()} />
        <main id="content">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
