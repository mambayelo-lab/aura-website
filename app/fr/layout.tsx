import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AURA — Intelligence Décisionnelle et Architecture",
  description: "Dérisquez vos stratégies, vos nouveaux produits et vos transformations avec AURA Décider et AURA Architecturer.",
};

export default function FrenchLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="fr">{children}</div>;
}
