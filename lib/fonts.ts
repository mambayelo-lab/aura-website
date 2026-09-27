import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

/** Inter for text and interface — identical to the Aura applications. */
export const sans = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

/** Fraunces for display titles (h1/h2, editorial section titles). */
export const serif = Fraunces({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
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
