import { Inter, JetBrains_Mono, Sora } from "next/font/google";

/** Inter for text and interface — identical to the Aura applications. */
export const sans = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

/** Sora for display titles (h1/h2, section titles) — identical to the Aura applications. */
export const serif = Sora({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-serif",
});

/** Monospace for data, identifiers and metrics. */
export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});
