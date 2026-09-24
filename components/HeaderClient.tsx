"use client";

import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { Logo } from "./Logo";

export type NavGroup =
  | { label: string; href: string; items?: undefined }
  | { label: string; href?: undefined; items: { href: string; title: string; text: string; meta?: string }[] };

type Labels = { home: string; cta: string; openMenu: string; closeMenu: string; language: string; main: string };

export function HeaderClient({
  locale,
  homeHref,
  contactHref,
  groups,
  alternates,
  labels,
}: {
  locale: Locale;
  homeHref: string;
  contactHref: string;
  groups: NavGroup[];
  alternates: Record<string, string>;
  labels: Labels;
}) {
  const pathname = usePathname() ?? homeHref;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  // Close the mobile menu whenever the route changes.
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const other: Locale = locale === "en" ? "fr" : "en";
  const alternateHref = alternates[pathname] ?? (other === "en" ? "/" : "/fr");
  const isActive = (href: string) => (href === homeHref ? pathname === href : pathname.startsWith(href));

  const languageSwitch = (
    <div className="lang-switch" role="group" aria-label={labels.language}>
      {(["en", "fr"] as const).map((code) =>
        code === locale ? (
          <span key={code} className="lang-option is-current" aria-current="true">
            {code.toUpperCase()}
          </span>
        ) : (
          <a key={code} className="lang-option" href={alternateHref} hrefLang={code} lang={code}>
            {code.toUpperCase()}
          </a>
        ),
      )}
    </div>
  );

  return (
    <header className="site-header" data-scrolled={scrolled || open} data-open={open}>
      <div className="container header-inner">
        <Link className="header-logo" href={homeHref} aria-label={labels.home}>
          <Logo />
        </Link>

        <nav className="desktop-nav" aria-label={labels.main}>
          <ul>
            {groups.map((group) =>
              group.items ? (
                <li key={group.label} className="nav-dropdown">
                  <button
                    type="button"
                    className="nav-link"
                    aria-haspopup="true"
                    data-active={group.items.some((item) => isActive(item.href))}
                  >
                    {group.label}
                    <ChevronDown size={14} aria-hidden />
                  </button>
                  <div className="dropdown-panel">
                    {group.items.map((item) => (
                      <Link key={item.href} href={item.href} className="dropdown-item">
                        <span className="dropdown-title">
                          {item.title}
                          {item.meta && <small>{item.meta}</small>}
                        </span>
                        <span className="dropdown-text">{item.text}</span>
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={group.label}>
                  <Link className="nav-link" href={group.href} data-active={isActive(group.href)}>
                    {group.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="header-actions">
          {languageSwitch}
          <Link className="btn btn-primary btn-sm header-cta" href={contactHref}>
            {labels.cta}
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? labels.closeMenu : labels.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav className="container" aria-label={labels.main}>
          {groups.map((group) =>
            group.items ? (
              <div key={group.label} className="mobile-group">
                <p className="mobile-group-label">{group.label}</p>
                {group.items.map((item) => (
                  <Link key={item.href} href={item.href} className="mobile-link">
                    {item.title}
                    <small>{item.text}</small>
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={group.label} href={group.href} className="mobile-link mobile-link-top">
                {group.label}
              </Link>
            ),
          )}
          <div className="mobile-footer">
            {languageSwitch}
            <Link className="btn btn-primary" href={contactHref}>
              {labels.cta} <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
