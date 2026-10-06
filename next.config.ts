import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Required by app/global-not-found.tsx: the English and French sites use separate root layouts.
    globalNotFound: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    // The English pages are files at the root of the (en) route group; /en is their public URL.
    return [
      { source: "/en", destination: "/" },
      { source: "/en/:path*", destination: "/:path*" },
    ];
  },
  async redirects() {
    // Former offer and industry pages, now folded into product pages.
    return [
      // English is the default language and lives under /en.
      { source: "/", destination: "/en", permanent: false },
      { source: "/offers/decide", destination: "/en#engine", permanent: true },
      { source: "/offers/architect", destination: "/en/products/architect", permanent: true },
      { source: "/industries/supply-chain", destination: "/en/products/supply-chain", permanent: true },
      { source: "/industries/energy", destination: "/en#engine", permanent: true },
      { source: "/fr/offres/decider", destination: "/fr#moteur", permanent: true },
      { source: "/fr/offres/architecturer", destination: "/fr/produits/architect", permanent: true },
      { source: "/fr/secteurs/supply-chain", destination: "/fr/produits/supply-chain", permanent: true },
      { source: "/fr/secteurs/energie", destination: "/fr#moteur", permanent: true },
      // Decide is no longer a product page: it is the engine section of the home page.
      { source: "/products/decide", destination: "/en#engine", permanent: true },
      { source: "/fr/produits/decider", destination: "/fr#moteur", permanent: true },
      { source: "/sprints", destination: "/en/offers", permanent: true },
      { source: "/fr/sprints", destination: "/fr/offres", permanent: true },
    ];
  },
};

export default nextConfig;
