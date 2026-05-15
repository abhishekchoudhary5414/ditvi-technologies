import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
// import Project from "@/components/project/Project";
import Services from "@/components/service/Service";
import Testimonial from "@/components/testimonial/Testimonial";
import Blog from "@/components/blog/Blog";
import Clients from "@/components/clients/Clients";
import JsonLd from "@/components/JsonLd";


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
        <Services />
        {/* <Project /> */}
        <Blog />
        <Clients />
        <Testimonial />
        <Contact />
      </div>
    </>
  );
}
