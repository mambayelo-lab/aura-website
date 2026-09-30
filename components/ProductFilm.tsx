"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";

const copy = {
  fr: {
    play: "Lire le film, avec son :",
    label: "Film Aura",
    impacts: [
      ["Supply", "Chaque rupture anticipée, c’est un coût évité."],
      ["Architect", "Des semaines de schémas ramenées à une conversation."],
      ["Décision", "Des arbitrages prouvés, qu’on n’a pas à refaire."],
    ],
  },
  en: {
    play: "Play the film, with sound:",
    label: "Aura film",
    impacts: [
      ["Supply", "Every shortage anticipated is a cost avoided."],
      ["Architect", "Weeks of diagrams, down to one conversation."],
      ["Decision", "Proven trade-offs you won’t have to remake."],
    ],
  },
};

/**
 * Product film: elegant poster with a large play button. A click starts the
 * video WITH sound (volume 1). No muted autoplay; mute stays in the controls.
 */
export function ProductFilm({ locale, film = "supply", impacts = true }: { locale: Locale; film?: "supply" | "architect"; impacts?: boolean }) {
  const c = copy[locale];
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const base = `/video/aura-${film}-${locale}`;
  const secs = film === "supply" ? 53 : 48;
  const label = `${film === "supply" ? "Aura Supply" : "Aura Architect"} · ${secs} s`;

  const start = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    v.volume = 1;
    setStarted(true);
    void v.play();
  };

  return (
    <div className="film">
      <div className="film-frame">
        <video
          ref={ref}
          className="film-video"
          poster={`${base}-poster.webp`}
          preload="metadata"
          playsInline
          controls={started}
          aria-label={label}
          lang={locale}
        >
          <source src={`${base}.mp4`} type="video/mp4" />
        </video>
        {!started && (
          <button type="button" className="film-play" onClick={start} aria-label={`${c.play} ${label}`}>
            <span className="film-play-icon" aria-hidden>
              <Play size={30} fill="currentColor" />
            </span>
            <span className="film-play-label">{label}</span>
          </button>
        )}
      </div>
      {impacts && (<ul className="film-impacts">
        {c.impacts.map(([k, text]) => (
          <li key={k}>
            <span className="mono">{k}</span>
            <strong>{text}</strong>
          </li>
        ))}
      </ul>)}
    </div>
  );
}
