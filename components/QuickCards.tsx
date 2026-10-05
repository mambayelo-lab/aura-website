import { ArrowRight, Boxes, ClipboardList, Radar } from "lucide-react";
import Link from "next/link";
import { routes, type Locale } from "@/lib/i18n";

export function QuickCards({ locale }: { locale: Locale }) {
  const r = routes[locale];
  const fr = locale === "fr";
  const cards = [
    { icon: Radar, product: "supply", href: r.supply, who: fr ? "Directeurs supply chain" : "Supply chain directors", title: "Aura Control Tower", text: fr ? "La rupture vue trop tard. La Control Tower la repère dans vos données par des règles causales (packs Supply, Énergie, …) et chaque alerte ouvre une décision." : "Shortages seen too late. The Control Tower spots them in your data with causal rules (Supply, Energy packs and more) and every alert opens a decision." },
    { icon: Boxes, product: "architect", href: r.architect, who: fr ? "DSI et architectes" : "CIOs and architects", title: "Aura Architect", text: fr ? "Le problème : une transformation difficile à défendre. Aura en fait un dossier argumenté." : "The problem: a transformation hard to defend. Aura turns it into a reasoned case." },
    { icon: ClipboardList, product: undefined, href: r.founder, who: fr ? "Qui est derrière" : "Who is behind it", title: fr ? "Le fondateur" : "The founder", text: fr ? "Pourquoi Aura existe, et la méthode sur laquelle elle s’appuie." : "Why Aura exists, and the method it builds on." },
  ];
  return (
    <section className="section section-tight" aria-label={fr ? "Ce que nous faisons" : "What we do"}>
      <div className="container grid-3">
        {cards.map(({ icon: Icon, ...c }) => (
          <Link key={c.title} href={c.href} className="offer-card quick-card" data-product={c.product}>
            <p className="eyebrow">{c.who}</p>
            <h3>
              <Icon size={18} aria-hidden /> {c.title}
            </h3>
            <p>{c.text}</p>
            <span className="text-link">
              {fr ? "En savoir plus" : "Learn more"} <ArrowRight size={14} aria-hidden />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
