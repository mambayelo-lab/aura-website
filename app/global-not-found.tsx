import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { getDictionary } from "@/content/dictionary";
import { sans, serif } from "@/lib/fonts";
import { baseMetadata } from "@/lib/metadata";

export const metadata: Metadata = { ...baseMetadata, title: "404 — AURA", robots: { index: false } };

export default function GlobalNotFound() {
  const en = getDictionary("en").notFound;
  const fr = getDictionary("fr").notFound;
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <main className="not-found">
          <div className="hero-backdrop" aria-hidden />
          <Link href="/" aria-label="AURA">
            <Logo className="not-found-logo" />
          </Link>
          <p className="not-found-code">404</p>
          <h1 className="title-lg">{en.title}</h1>
          <p className="lead">{en.text}</p>
          <p className="lead" lang="fr">
            {fr.text}
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/">
              {en.home}
            </Link>
            <Link className="btn btn-secondary" href="/fr" lang="fr">
              {fr.home}
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
