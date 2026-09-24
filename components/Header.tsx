import type { Dictionary } from "@/content/dictionary";
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
    {
      label: dict.nav.offers,
      items: [
        {
          href: r.energy,
          title: dict.industries.energy.name,
          text: dict.industries.energy.audience.slice(0, 3).join(" · "),
        },
        {
          href: r.supplyChain,
          title: dict.industries.supplyChain.name,
          text: dict.industries.supplyChain.audience.slice(0, 3).join(" · "),
        },
      ],
    },
    { label: dict.offers.decide.sprint, href: r.decide },
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
