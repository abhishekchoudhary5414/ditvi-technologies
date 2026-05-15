import Services from "@/components/service/Service";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Digital Services | Ditvi Technologies",
  description: "Explore our comprehensive digital services including biodata creation, digital resumes, digital celebrations, and custom digital solutions. Professional services for your digital transformation.",
  keywords: [
    "Digital Services",
    "Biodata Services",
    "Digital Resume",
    "Digital Celebrations",
    "Custom Digital Solutions",
    "Professional Services",
    "Digital Identity",
    "Online Portfolio"
  ],
  openGraph: {
    title: "Digital Services | Ditvi Technologies",
    description: "Professional digital services for biodata, resumes, celebrations, and custom solutions.",
    url: 'https://technologies.ditvi.org/services',
    siteName: 'Ditvi Technologies',
    type: 'website',
  },
};

export default function ServicesPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Services",
    "description": "Comprehensive digital services including biodata creation, digital resumes, digital celebrations, and custom digital solutions.",
    "provider": {
      "@type": "Organization",
      "name": "Ditvi Technologies",
      "url": "https://technologies.ditvi.org"
    },
    "areaServed": "Worldwide",
    "serviceType": ["Digital Solutions", "Biodata Services", "Digital Celebrations", "Custom Development"]
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <Services />
    </>
  );
}