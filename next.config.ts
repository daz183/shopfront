import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Use ONLY domains (remotePatterns is skipped by Vercel edge runtime)
    domains: [
      "m.media-amazon.co.uk",
      "images-na.ssl-images-amazon.com",
      "images-wl-na.amazon.co.uk",
    ],
  },
};

export default nextConfig;