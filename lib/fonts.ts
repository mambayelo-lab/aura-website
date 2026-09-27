import { Fraunces, Inter } from "next/font/google";

export const sans = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

export const serif = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  style: ["normal"],
  display: "swap",
  variable: "--font-serif",
});
