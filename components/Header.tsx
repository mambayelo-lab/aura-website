import type { Dictionary } from "@/content/dictionary";
import { siteProducts, products, tr } from "@/content/products";
import { routes, type Locale } from "@/lib/i18n";
import { HeaderClient, type NavGroup } from "./HeaderClient";

export function Header({
  locale,
  dict,
  alternates,
}: {
  locale: Locale;
  dict: Dictionary;
  alternates: Record<string, string>;
}) {
  const r = routes[locale];
  const groups: NavGroup[] = [
    { label: locale === "fr" ? "Plateforme" : "Platform", href: r.platform },
    {
      label: dict.nav.products,
      items: siteProducts.map((key) => ({
        href: r[key],
        title: tr(products[key].name, locale),
        text: tr(products[key].tagline, locale),
        meta: key === "architect" ? (locale === "fr" ? "Pour DSI et architectes" : "For CIOs and architects") : tr(products[key].trigger, locale),
        product: key,
      })),
    },
    { label: locale === "fr" ? "Moteur" : "Engine", href: r.decide },
    { label: dict.nav.sprints, href: r.sprints },
    { label: dict.nav.insights, href: r.insights },
    { label: dict.nav.contact, href: r.contact },
  ];

  return (
    <HeaderClient
      locale={locale}
      homeHref={r.home}
      contactHref={r.contact}
      groups={groups}
      alternates={alternates}
      labels={{
        home: dict.nav.home,
        cta: dict.nav.cta,
        openMenu: dict.nav.openMenu,
        closeMenu: dict.nav.closeMenu,
        language: dict.nav.language,
        main: dict.nav.main,
      }}
    />
  );
}
