import type { Metadata } from "next";
import { getDictionary } from "@/content/dictionary";
import { siteUrl, type Locale } from "./i18n";

type PageMetadataInput = {
  locale: Locale;
  /** Page title without the brand suffix. Omit on the home page. */
  title?: string;
  description?: string;
  /** Path of this page in each language. */
  paths: Record<Locale, string>;
  type?: "website" | "article";
};

export function pageMetadata({ locale, title, description, paths, type = "website" }: PageMetadataInput): Metadata {
  const dict = getDictionary(locale);
  const fullTitle = title ? `${title} — AURA` : dict.meta.title;
  const desc = description ?? dict.meta.description;
  const image = { url: "/og.png", width: 1200, height: 630, alt: dict.meta.title };

  return {
    title: { absolute: fullTitle },
    description: desc,
    alternates: {
      canonical: paths[locale],
      languages: { en: paths.en, fr: paths.fr, "x-default": paths.en },
    },
    openGraph: {
      type,
      siteName: "AURA",
      title: fullTitle,
      description: desc,
      url: paths[locale],
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      alternateLocale: locale === "fr" ? "en_GB" : "fr_FR",
      images: [image],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: desc, images: [image.url] },
  };
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "64x64" }],
    apple: [{ url: "/brand/apple-icon.png", sizes: "180x180" }],
  },
};
