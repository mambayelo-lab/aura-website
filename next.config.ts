import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Required by app/global-not-found.tsx: the English and French sites use separate root layouts.
    globalNotFound: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
