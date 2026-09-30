import { Check } from "lucide-react";
import { architectOffer } from "@/content/architect-offer";
import type { Locale } from "@/lib/i18n";

export function ArchitectOffer({ locale }: { locale: Locale }) {
  const o = architectOffer[locale];
  return (
    <div className="arch-offer">
      <p className="fact-label">{o.situationsTitle}</p>
      <div className="grid-2">
        {o.situations.map((s) => (
          <article key={s.title} className="offer-card" data-product="architect">
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
      <p className="fact-label">{o.commonTitle}</p>
      <ul className="check-list">
        {o.common.map((item) => (
          <li key={item}>
            <Check size={15} aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
