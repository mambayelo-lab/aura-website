import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import type { Dictionary } from "@/content/dictionary";
import { contactEmail, routes, type Locale } from "@/lib/i18n";
import { Logo } from "./Logo";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const r = routes[locale];
  const columns = [
    {
      title: dict.nav.offers,
      links: [
        { href: r.decide, label: dict.offers.decide.name },
        { href: r.architect, label: dict.offers.architect.name },
      ],
    },
    {
      title: dict.nav.industries,
      links: [
        { href: r.energy, label: dict.industries.energy.name },
        { href: r.supplyChain, label: dict.industries.supplyChain.name },
      ],
    },
    {
      title: dict.footer.resources,
      links: [
        { href: r.insights, label: dict.nav.insights },
        { href: r.contact, label: dict.nav.contact },
      ],
    },
  ];

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
        {columns.map((column) => (
          <div key={column.title} className="footer-column">
            <p className="footer-title">{column.title}</p>
            <ul>
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
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
