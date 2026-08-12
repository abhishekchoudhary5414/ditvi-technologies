import ServiceDetail from '@/components/service/servicedetail/ServiceDetail';
import { services } from '@/json/services';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCityFromSegments } from '@/data/cities';
// service modifiers removed — use base service slugs directly
import JsonLd from '@/components/JsonLd'

interface PageParams {
  slug: string;
  city: string[];
}

interface PageProps {
  params: Promise<PageParams>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  
  const service = services.find(s => s.path === `/services/${resolvedParams.slug}`);
  const cityData = getCityFromSegments(resolvedParams.city);

  if (!service || !cityData) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found'
    };
  }

  const modifiedTitle = service.title;
  const modifiedDescription = service.description;

  return {
    title: `${modifiedTitle} in ${cityData.name} | ${cityData.state} | ${cityData.country} | Ditvi Technologies`,
    description: `${modifiedDescription}`
  };
}

export default async function ServiceCityPage({ params }: PageProps) {
  const resolvedParams = await params;
  
  const service = services.find(s => s.path === `/services/${resolvedParams.slug}`);
  const cityData = getCityFromSegments(resolvedParams.city);

  if (!service || !cityData) {
    notFound();
  }

  // Create modified service object with updated title and description
  const modifiedService = {
    ...service,
    title: service.title,
    description: service.description,
  };

  const cityPath = Array.isArray(resolvedParams.city) ? resolvedParams.city.join('/') : resolvedParams.city;

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": modifiedService.title,
    "description": modifiedService.description,
    "provider": {
      "@type": "Organization",
      "name": "Ditvi Technologies",
      "url": "https://technologies.ditvi.org"
    },
    "areaServed": cityData.name,
    "url": `https://technologies.ditvi.org/services/${resolvedParams.slug}/${cityPath}`
  }

  return (
    <main className="service-page">
      <JsonLd data={jsonLdData} />
      <ServiceDetail 
        service={modifiedService}
        cityData={cityData}
      />
    </main>
  );
}