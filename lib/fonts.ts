import { JetBrains_Mono, Manrope } from "next/font/google";

/** Manrope everywhere, harmonised with the Aura applications. */
export const sans = Manrope({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

/** Monospace for data, identifiers and metrics. */
export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});
