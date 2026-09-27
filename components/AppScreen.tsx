import Image from "next/image";
import type { Locale } from "@/lib/i18n";

export type Screen = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  /** Host shown in the window bar, e.g. "aura-decider.vercel.app". */
  host: string;
};

const demoNote = {
  fr: "Données de démonstration (SI synthétique Maison Lucie)",
  en: "Demo data (Maison Lucie synthetic IT system)",
};

/** A real application screenshot framed as an app window. */
export function AppScreen({
  screen,
  locale,
  sizes = "(max-width: 980px) 100vw, 1100px",
  priority,
  compact,
  note = true,
}: {
  screen: Screen;
  locale: Locale;
  sizes?: string;
  priority?: boolean;
  compact?: boolean;
  note?: boolean;
}) {
  return (
    <figure className={`app-window${compact ? " app-window-compact" : ""}`}>
      <div className="app-window-frame">
        <div className="app-window-bar" aria-hidden>
          <span className="app-window-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="app-window-host mono">{screen.host}</span>
        </div>
        <Image src={screen.src} alt={screen.alt} width={screen.width} height={screen.height} sizes={sizes} priority={priority} />
      </div>
      {(screen.caption || note) && (
        <figcaption>
          {screen.caption && <span className="app-window-caption">{screen.caption}</span>}
          {note && <span className="app-window-note">{demoNote[locale]}</span>}
        </figcaption>
      )}
    </figure>
  );
}
