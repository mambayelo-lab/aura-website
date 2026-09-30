import { ArrowRight, Boxes, ClipboardList, Radar } from "lucide-react";
import Link from "next/link";
import { routes, type Locale } from "@/lib/i18n";

export function QuickCards({ locale }: { locale: Locale }) {
  const r = routes[locale];
  const fr = locale === "fr";
  const cards = [
    { icon: Radar, product: "supply", href: r.supply, who: fr ? "Directeurs supply chain" : "Supply chain directors", title: "Aura Supply Chain", text: fr ? "Voir venir une rupture, savoir combien de jours vous tenez, choisir la parade et garder la preuve." : "See a disruption coming, know how many days you can hold, choose the response and keep the proof." },
    { icon: Boxes, product: "architect", href: r.architect, who: fr ? "DSI et architectes" : "CIOs and architects", title: "Aura Architect", text: fr ? "Cadrer ou redresser une transformation du SI : existant, cible, feuille de route, choix justifiés." : "Frame or rescue an IT transformation: current state, target, roadmap, justified choices." },
    { icon: ClipboardList, product: undefined, href: r.sprints, who: fr ? "Pour démarrer" : "To get started", title: fr ? "Offres" : "Offers", text: fr ? "Trois formats courts, de 10 jours à 6 semaines, sur votre problème réel, avec un livrable que vous gardez." : "Three short formats, from 10 days to 6 weeks, on your real problem, with a deliverable you keep." },
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
