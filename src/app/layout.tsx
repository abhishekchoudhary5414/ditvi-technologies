import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import LayoutWrapper from "./LayoutWrapper";



export const metadata: Metadata = {
  title: "Ditvi Technologies | Digital Solutions & Services",
  description: "Ditvi Technologies provides premium digital solutions including biodata creation, resume services, and digital celebrations. Transform your digital presence with our professional services.",
  keywords: [
    "Ditvi Technologies",
    "Digital Solutions",
    "Biodata Services",
    "Digital Resume",
    "Digital Celebrations",
    "Professional Services",
    "Digital Identity",
    "Online Portfolio",
    "Digital Transformation",
    "Custom Digital Solutions"
  ],
  authors: [{ name: "Ditvi Technologies" }],
  creator: "Ditvi Technologies",
  publisher: "Ditvi Technologies",
  metadataBase: new URL('https://technologies.ditvi.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ditvi Technologies | Digital Solutions & Services",
    description: "Transform your digital presence with Ditvi Technologies' premium digital solutions and professional services.",
    url: 'https://technologies.ditvi.org',
    siteName: 'Ditvi Technologies',
    images: [
      {
        url: '/og-image.jpg', // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Ditvi Technologies Banner'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  verification: {
    google: 'U61z9WvB238RUEavCgIuOpCpDLFPVOMv2i-Ax3ACxPI',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ditvi Technologies | Digital Solutions",
    description: "Professional digital solutions for your modern needs",
    images: ['/twitter-image.jpg'], // Add this image to your public folder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.png',
    },
  },
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
    "logo": "https://technologies.ditvi.org/logo.png",
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
