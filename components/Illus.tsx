import Image from "next/image";
import type { Locale } from "@/lib/i18n";

/* Custom vector illustrations (palette tokens, no text inside) and small product thumbnails. */
const illus = {
  decision: {
    src: "/images/illustrations/decision.svg",
    alt: {
      en: "A decision-maker, a structured decision model with criteria and options, and the resulting validated decision",
      fr: "Un décideur, un modèle de décision structuré en critères et options, et la décision validée qui en résulte",
    },
  },
  chain: {
    src: "/images/illustrations/chain.svg",
    alt: {
      en: "Stakeholders linked to a capability map, itself linked to the target architecture",
      fr: "Les parties prenantes reliées à une carte des capacités, elle-même reliée à l’architecture cible",
    },
  },
  placement: {
    src: "/images/illustrations/placement.svg",
    alt: {
      en: "Three ways to handle a function: automated rules, a supervised language model, or a human decision",
      fr: "Trois façons de traiter une fonction : des règles automatisées, un modèle de langage encadré ou une décision humaine",
    },
  },
  ideaPlan: {
    src: "/images/illustrations/idea-plan.svg",
    alt: {
      en: "From an idea to structured options, then to a dated action plan",
      fr: "De l’idée aux options structurées, puis à un plan d’action daté",
    },
  },
} as const;

export type IllusName = keyof typeof illus;

export function Illus({ name, locale, size = "md", className = "" }: { name: IllusName; locale: Locale; size?: "sm" | "md" | "lg"; className?: string }) {
  const i = illus[name];
  return (
    <figure className={`illus illus-${size} ${className}`.trim()}>
      <Image src={i.src} alt={i.alt[locale]} width={480} height={300} unoptimized loading="lazy" />
    </figure>
  );
}

/** Small framed thumbnail (product screenshot or illustration). */
export function Thumb({ src, alt, width = 480, height = 300 }: { src: string; alt: string; width?: number; height?: number }) {
  return (
    <span className="thumb">
      <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 720px) 40vw, 200px" loading="lazy" unoptimized={src.endsWith(".svg")} />
    </span>
  );
}
