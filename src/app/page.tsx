'use client';

import dynamic from 'next/dynamic';
import Hero from "@/components/hero/Hero";
import JsonLd from "@/components/JsonLd";

// Defer below-the-fold components to improve LCP
const About = dynamic(() => import("@/components/about/About"));
const Services = dynamic(() => import("@/components/service/Service"));
const Blog = dynamic(() => import("@/components/blog/Blog"));
const Clients = dynamic(() => import("@/components/clients/Clients"));
const Testimonial = dynamic(() => import("@/components/testimonial/Testimonial"));
const Contact = dynamic(() => import("@/components/contact/Contact"));


export default function Home() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ditvi Technologies",
    "url": "https://technologies.ditvi.org",
    "description": "Ditvi Technologies provides premium digital solutions including biodata creation, resume services, and digital celebrations.",
    "publisher": {
      "@type": "Organization",
      "name": "Ditvi Technologies",
      "url": "https://technologies.ditvi.org"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://technologies.ditvi.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <div>
        <Hero />
        <About />
        <Services limit={3} showViewMore />
        {/* <Project /> */}
        <Blog />
        <Clients />
        <Testimonial />
        <Contact />
      </div>
    </>
  );
}
