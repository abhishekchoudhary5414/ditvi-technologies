import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'], // AVIF first for better compression
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // Cache for 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance optimizations
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: [
      "@mui/icons-material",
      "react-icons",
      "framer-motion",
    ],
  },

  // Compression
  compress: true,

  // CSS optimization
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  // Turbopack handles CSS optimization automatically with optimizeCss: true
  turbopack: {
    // Configure Turbopack for better CSS handling
    resolveAlias: {
      "@": "./src",
    },
  },

  async redirects() {
    return [
      {
        source: '/sitemap-:index(\\d+).xml',
        destination: '/sitemap/:index.xml',
        permanent: true,
      },
    ]
  },

  // Headers for better SEO and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Link',
            value: '</styles.css>; rel=preload; as=style',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
