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

/** Bump to bust browser favicon caches. */
const ICON_V = "2";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: `/icons/icon.svg?v=${ICON_V}`, type: "image/svg+xml" },
      { url: `/favicon.ico?v=${ICON_V}`, sizes: "48x48" },
      { url: `/icons/icon-32.png?v=${ICON_V}`, type: "image/png", sizes: "32x32" },
      { url: `/icons/icon-48.png?v=${ICON_V}`, type: "image/png", sizes: "48x48" },
      { url: `/icons/icon-512.png?v=${ICON_V}`, type: "image/png", sizes: "512x512" },
    ],
    shortcut: [{ url: `/favicon.ico?v=${ICON_V}` }],
    apple: [{ url: `/icons/apple-touch-icon.png?v=${ICON_V}`, sizes: "180x180" }],
  },
};
