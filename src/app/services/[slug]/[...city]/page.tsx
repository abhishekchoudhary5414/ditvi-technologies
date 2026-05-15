import ServiceDetail from '@/components/service/servicedetail/ServiceDetail';
import { services } from '@/json/services';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCityFromSegments } from '@/data/cities';
import { extractServiceModifier, getModifiedServiceTitle, getModifiedServiceDescription } from '@/data/serviceModifiers';

interface PageParams {
  slug: string;
  city: string[];
}

interface PageProps {
  params: Promise<PageParams>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  
  // Extract modifier and base service slug
  const { modifier, serviceSlug } = extractServiceModifier(resolvedParams.slug);
  
  const service = services.find(s => s.path === `/services/${serviceSlug}`);
  const cityData = getCityFromSegments(resolvedParams.city);

  if (!service || !cityData) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found'
    };
  }

  const modifiedTitle = getModifiedServiceTitle(service.title, modifier);
  const modifiedDescription = getModifiedServiceDescription(service.description, modifier, cityData.name);

  return {
    title: `${modifiedTitle} in ${cityData.name} | ${cityData.state} | ${cityData.country} | Ditvi Technologies`,
    description: `${modifiedDescription}`
  };
}

export default async function ServiceCityPage({ params }: PageProps) {
  const resolvedParams = await params;
  
  // Extract modifier and base service slug
  const { modifier, serviceSlug } = extractServiceModifier(resolvedParams.slug);
  
  const service = services.find(s => s.path === `/services/${serviceSlug}`);
  const cityData = getCityFromSegments(resolvedParams.city);

  if (!service || !cityData) {
    notFound();
  }

  // Create modified service object with updated title and description
  const modifiedService = {
    ...service,
    title: getModifiedServiceTitle(service.title, modifier),
    description: getModifiedServiceDescription(service.description, modifier, cityData.name),
  };

  return (
    <main className="service-page">
      <ServiceDetail 
        service={modifiedService}
        cityData={cityData}
      />
    </main>
  );
}