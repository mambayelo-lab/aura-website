import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Required by app/global-not-found.tsx: the English and French sites use separate root layouts.
    globalNotFound: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Former offer and industry pages, now folded into product pages.
    return [
      { source: "/offers/decide", destination: "/#engine", permanent: true },
      { source: "/offers/architect", destination: "/products/architect", permanent: true },
      { source: "/industries/supply-chain", destination: "/products/supply-chain", permanent: true },
      { source: "/industries/energy", destination: "/#engine", permanent: true },
      { source: "/fr/offres/decider", destination: "/fr#moteur", permanent: true },
      { source: "/fr/offres/architecturer", destination: "/fr/produits/architect", permanent: true },
      { source: "/fr/secteurs/supply-chain", destination: "/fr/produits/supply-chain", permanent: true },
      { source: "/fr/secteurs/energie", destination: "/fr#moteur", permanent: true },
      // Decide is no longer a product page: it is the engine section of the home page.
      { source: "/products/decide", destination: "/#engine", permanent: true },
      { source: "/fr/produits/decider", destination: "/fr#moteur", permanent: true },
      { source: "/sprints", destination: "/offers", permanent: true },
      { source: "/fr/sprints", destination: "/fr/offres", permanent: true },
    ];
  },
};

export default nextConfig;
