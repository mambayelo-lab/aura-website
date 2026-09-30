import type { Locale } from "@/lib/i18n";
import { SectionHead } from "./blocks";

/**
 * Three short "pain" videos (30–45 s, no sound): a sourced figure, what Aura Supply shows
 * on the Maison Lucie demo (real screenshots, fictional data), the decision, the result.
 * French subtitles are burned in; an English subtitle track is provided.
 */
const videos = [
  {
    id: "fournisseur-unique",
    title: ["Fournisseur unique", "Single supplier"],
    text: ["+200 % de faillites fournisseurs au 1er semestre 2024 (Resilinc).", "+200% supplier bankruptcies in H1 2024 (Resilinc)."],
    duration: "42 s",
  },
  {
    id: "detroit-mer-rouge",
    title: ["Un détroit se ferme", "A strait closes"],
    text: ["Une disruption d’un à deux mois tous les 3,7 ans en moyenne (McKinsey Global Institute).", "A one-to-two-month disruption every 3.7 years on average (McKinsey Global Institute)."],
    duration: "42 s",
  },
  {
    id: "bfr-immobilise",
    title: ["BFR immobilisé", "Tied-up working capital"],
    text: ["1 560 Md€ de BFR excédentaire dans le monde (PwC, Working Capital Study 24/25).", "€1,560bn of excess working capital worldwide (PwC, Working Capital Study 24/25)."],
    duration: "30 s",
  },
] as const;

export function PainVideos({ locale, alt = false }: { locale: Locale; alt?: boolean }) {
  const fr = locale === "fr";
  const i = fr ? 0 : 1;
  return (
    <section className={`section section-tight${alt ? " section-alt" : ""}`} id={fr ? "douleurs" : "pains"}>
      <div className="container">
        <SectionHead
          eyebrow={fr ? "En vidéo, sans le son" : "On video, no sound needed"}
          title={fr ? "Trois douleurs coûteuses, vues dans Aura Supply." : "Three costly pains, seen in Aura Supply."}
          lead={
            fr
              ? "Le chiffre sourcé, ce que voit Aura Supply, la décision avec Décider, le résultat. Captures réelles de l’application sur la démo Maison Lucie (données fictives)."
              : "The sourced figure, what Aura Supply shows, the decision with Decide, the result. Real application screenshots on the Maison Lucie demo (fictional data). On-screen text is in French; English subtitles are available."
          }
        />
        <div className="grid-3 pain-videos">
          {videos.map((v) => (
            <figure key={v.id} className="pain-video">
              <video
                controls
                muted
                playsInline
                preload="none"
                poster={`/video/aura-douleur-${v.id}-poster.jpg`}
                width={1280}
                height={720}
                aria-label={`${v.title[i]} · ${v.duration}`}
              >
                <source src={`/video/aura-douleur-${v.id}.mp4`} type="video/mp4" />
                <track kind="subtitles" src={`/video/aura-douleur-${v.id}.en.vtt`} srcLang="en" label="English" default={!fr} />
                <track kind="subtitles" src={`/video/aura-douleur-${v.id}.fr.vtt`} srcLang="fr" label="Français" />
              </video>
              <figcaption>
                <strong>
                  {v.title[i]} <span className="mono">· {v.duration}</span>
                </strong>
                <span>{v.text[i]}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
