import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimiere Bildladezeiten
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Komprimierung aktivieren
  compress: true,

  // Trailing Slashes für konsistente URLs
  trailingSlash: false,

  // Striktere Reaktionszeit
  poweredByHeader: false,

  // Optimierte Produktions-Builds
  reactStrictMode: true,
};

export default nextConfig;
