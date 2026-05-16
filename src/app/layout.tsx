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
      </head>
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
