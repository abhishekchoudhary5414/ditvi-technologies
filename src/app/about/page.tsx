import About from "@/components/about/About";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us | Ditvi Technologies",
  description: "Learn about Ditvi Technologies - your trusted partner for digital solutions, biodata services, and professional digital transformations.",
  keywords: [
    "About Ditvi Technologies",
    "Digital Solutions Company",
    "Professional Services",
    "Digital Transformation",
    "Company Information"
  ],
  openGraph: {
    title: "About Us | Ditvi Technologies",
    description: "Discover Ditvi Technologies - experts in digital solutions and professional services.",
    url: 'https://technologies.ditvi.org/about',
    siteName: 'Ditvi Technologies',
    type: 'website',
  },
};

export default function AboutPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Ditvi Technologies",
    "description": "Information about Ditvi Technologies, a company specializing in digital solutions and professional services.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Ditvi Technologies",
      "description": "Ditvi Technologies provides premium digital solutions including biodata creation, resume services, and digital celebrations.",
      "url": "https://technologies.ditvi.org",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ramjaipal Road, Opp. Gola Road, Near Hotel Magadh Palace",
        "addressLocality": "Patna",
        "postalCode": "801503",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <About />
    </>
  );
}