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
      label: "Applications",
      items: [
        {
          href: "https://aura-decision-zen.vercel.app/cockpit/resilience?section=cockpit",
          title: "Aura Supply",
          text: locale === "fr" ? "Risques, alertes et décisions Supply Chain" : "Supply Chain risks, alerts and decisions",
        },
        {
          href: "https://aura-decider.vercel.app",
          title: locale === "fr" ? "Aura Décider" : "Aura Decide",
          text: locale === "fr" ? "Structurer et défendre une décision" : "Frame and defend a decision",
        },
        {
          href: "https://aura-architecturer.vercel.app",
          title: "Aura Architecture",
          text: locale === "fr" ? "Concevoir une transformation exécutable" : "Design an executable transformation",
        },
      ],
    },
    {
      label: dict.nav.offers,
      items: [
        {
          href: r.decide,
          title: dict.offers.decide.sprint,
          text: dict.offers.decide.summary,
        },
        {
          href: r.architect,
          title: dict.offers.architect.sprint,
          text: dict.offers.architect.summary,
        },
      ],
    },
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
