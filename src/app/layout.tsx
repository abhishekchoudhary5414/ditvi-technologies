import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import LayoutWrapper from "./LayoutWrapper";


export const metadata: Metadata = {
  title: "Ditvi Technologies | Web Development, SEO & Digital Solutions",

  description:
    "Ditvi Technologies delivers website development, SEO, digital marketing, branding, automation, e-commerce and custom web solutions to help businesses grow online.",

  keywords: [
    // Brand
    "Ditvi Technologies",
    "Ditvi Technologies Bhopal",
    "Ditvi Technologies India",
    "Ditvi",

    // Core Services
    "website development",
    "web development company",
    "web design services",
    "custom website development",
    "business website development",
    "responsive website development",
    "ecommerce website development",
    "custom web application",

    // Digital Growth
    "digital marketing services",
    "digital presence",
    "SEO services",
    "search engine optimization",
    "local SEO services",
    "Google Business Profile optimization",
    "lead generation",
    "social media marketing",
    "online branding",
    "digital branding",

    // Technology & Automation
    "business automation",
    "workflow automation",
    "CRM integration",
    "API integration",
    "admin dashboard development",
    "custom software solutions",

    // Industry Websites
    "wedding website",
    "birthday website",
    "taxi booking website",
    "astrology website",
    "dance academy website",
    "gym website",
    "salon website",
    "construction website",
    "school website",

    // Business Solutions
    "website for small business",
    "website for startups",
    "professional business website",
    "SEO friendly website",
    "mobile friendly website",
    "online business solutions",
    "digital transformation services"
  ],

  authors: [
    {
      name: "Ditvi Technologies",
      url: "https://technologies.ditvi.org",
    },
  ],

  creator: "Ditvi Technologies",
  publisher: "Ditvi Technologies",

  metadataBase: new URL("https://technologies.ditvi.org"),

  alternates: {
    canonical: "https://technologies.ditvi.org/",
  },

  openGraph: {
    title: "Ditvi Technologies | Web Development, SEO & Digital Solutions",

    description:
      "Build, grow and automate your business with Ditvi Technologies. We provide website development, SEO, digital marketing, branding, e-commerce and custom automation solutions.",

    url: "https://technologies.ditvi.org/",

    siteName: "Ditvi Technologies",

    images: [
      {
        url: 'https://technologies.ditvi.org/logo/circlelogo.png',
        width: 1200,
        height: 630,
        alt: "Ditvi Technologies - Web Development, SEO & Digital Solutions",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Ditvi Technologies | Web Development, SEO & Digital Solutions",

    description:
      "Website development, SEO, digital marketing, branding, e-commerce and business automation solutions by Ditvi Technologies.",

    images: [
      "https://technologies.ditvi.org/logo/circlelogo.png",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "U61z9WvB238RUEavCgIuOpCpDLFPVOMv2i-Ax3ACxPI",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo/circlelogo.png",
  },

  category: "technology",

  applicationName: "Ditvi Technologies",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ditvi Technologies",
    "url": "https://technologies.ditvi.org",
    "logo": "https://technologies.ditvi.org/logo/circlelogo.png",
    "description": "Ditvi Technologies provides premium digital solutions including biodata creation, resume services, and digital celebrations. Transform your digital presence with our professional services.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9285248504",
      "contactType": "customer service",
      "email": "care@ditvi.org"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ramjaipal Road, Opp. Gola Road, Near Hotel Magadh Palace",
      "addressLocality": "Patna",
      "postalCode": "801503",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://facebook.com/ditvi",
      "https://twitter.com/ditvi",
      "https://instagram.com/ditvi",
      "https://linkedin.com/company/ditvi"
    ]
  };

  return (
    <html lang="en">
      <head>
        <JsonLd data={jsonLdData} />
        
        {/* Critical resource preconnection */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Prefetch external resources */}
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        
        {/* Preload fonts for faster text rendering */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Force parallel CSS loading and prevent chaining */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__cssPreload = [];
              
              // Observe stylesheet additions and preload them immediately
              const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                  if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                      if (node.tagName === 'LINK' && node.rel === 'stylesheet') {
                        const href = node.getAttribute('href');
                        const isCritical = ['Hero', 'Navbar', 'navbar', 'hero', 'layout', 'globals'].some(p => href?.includes(p));
                        
                        if (!isCritical) {
                          // Preload non-critical CSS immediately to load in parallel
                          const preload = document.createElement('link');
                          preload.rel = 'preload';
                          preload.as = 'style';
                          preload.href = href;
                          preload.onload = () => {
                            node.media = 'all';
                          };
                          document.head.insertBefore(preload, node);
                          node.media = 'print';
                          window.__cssPreload.push(href);
                        }
                      }
                    });
                  }
                });
              });
              
              observer.observe(document.head, { childList: true, subtree: false });
              
              // Fallback: load CSS after DOM ready
              document.addEventListener('DOMContentLoaded', () => {
                const links = document.querySelectorAll('link[rel=stylesheet]');
                links.forEach(link => {
                  if (link.media === 'print') {
                    link.media = 'all';
                  }
                });
              });
            `,
          }}
        />
      </head>
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
