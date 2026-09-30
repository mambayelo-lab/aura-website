import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import type { Dictionary } from "@/content/dictionary";
import { siteProducts, products, tr } from "@/content/products";
import { appUrls, contactEmail, routes, type Locale } from "@/lib/i18n";
import { Logo } from "./Logo";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const r = routes[locale];

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href={r.home} aria-label={dict.nav.home}>
            <Logo className="footer-logo" />
          </Link>
          <p>{dict.footer.tagline}</p>
          <ul className="footer-contact">
            <li>
              <Mail size={15} aria-hidden />
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </li>
            <li>
              <MapPin size={15} aria-hidden />
              {dict.footer.location}
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <p className="footer-title">{dict.nav.products}</p>
          <ul>
            {siteProducts.map((key) => (
              <li key={key} data-product={key}>
                <Link href={r[key]}>
                  <span className="product-dot" aria-hidden />
                  {tr(products[key].name, locale)}
                </Link>
              </li>
            ))}
            <li>
              <Link href={r.decide}>{locale === "fr" ? "Moteur de décision" : "Decision engine"}</Link>
            </li>
            <li>
              <Link href={r.sprints}>{dict.nav.sprints}</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <p className="footer-title">{dict.footer.apps}</p>
          <ul>
            {siteProducts.map((key) => (
              <li key={key}>
                <a href={appUrls[key]} target="_blank" rel="noopener">
                  {tr(products[key].name, locale)} <ArrowUpRight size={13} aria-hidden />
                </a>
              </li>
            ))}
            <li>
              <a href={appUrls.decide} target="_blank" rel="noopener">
                Aura {locale === "fr" ? "Décider" : "Decide"} <ArrowUpRight size={13} aria-hidden />
              </a>
            </li>
            <li>
              <a href="https://maison-lucie-si.vercel.app" target="_blank" rel="noopener">
                {locale === "fr" ? "Démo SI Maison Lucie" : "Maison Lucie demo system"} <ArrowUpRight size={13} aria-hidden />
              </a>
            </li>
          </ul>
          <p className="footer-note">{dict.footer.appsNote}</p>
        </div>
        <div className="footer-column">
          <p className="footer-title">{dict.footer.resources}</p>
          <ul>
            <li>
              <Link href={r.founder}>{dict.nav.founder}</Link>
            </li>
            <li>
              <a href="https://fr.linkedin.com/in/mambaye-lo" target="_blank" rel="noopener">
                LinkedIn <ArrowUpRight size={13} aria-hidden />
              </a>
            </li>
            <li>
              <Link href={r.insights}>{dict.nav.insights}</Link>
            </li>
            <li>
              <Link href={r.contact}>{dict.nav.contact}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} AURA. {dict.footer.rights}
        </p>
        <p>
          <a href={routes.en.home} hrefLang="en" aria-current={locale === "en" ? "true" : undefined}>
            English
          </a>
          <span aria-hidden> · </span>
          <a href={routes.fr.home} hrefLang="fr" aria-current={locale === "fr" ? "true" : undefined}>
            Français
          </a>
        </p>
      </div>
    </footer>
  );
}
