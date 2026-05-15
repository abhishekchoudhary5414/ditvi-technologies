import { services } from '@/json/services';
import ServiceDetail from '@/components/service/servicedetail/ServiceDetail';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { extractServiceModifier, getModifiedServiceTitle, getModifiedServiceDescription } from '@/data/serviceModifiers';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { modifier, serviceSlug } = extractServiceModifier(resolvedParams.slug);
  const service = services.find((s) => s.path === `/services/${serviceSlug}`);

  if (!service) {
    return {
      title: 'Service Not Found | Ditvi Technologies',
      description: 'The requested service could not be found',
    };
  }

  const modifiedTitle = getModifiedServiceTitle(service.title, modifier);
  const modifiedDescription = getModifiedServiceDescription(service.description, modifier);

  return {
    title: `${modifiedTitle} | Ditvi Technologies`,
    description: modifiedDescription,
    keywords: service.keywords || '',
    openGraph: {
      title: `${modifiedTitle} | Ditvi Technologies`,
      description: modifiedDescription,
      url: `https://ditvi.com/services/${resolvedParams.slug}`,
      siteName: 'Ditvi Technologies',
      type: 'website',
    }
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const { modifier, serviceSlug } = extractServiceModifier(resolvedParams.slug);
  const service = services.find((s) => s.path === `/services/${serviceSlug}`);

  if (!service) {
    notFound();
  }

  const modifiedService = {
    ...service,
    title: getModifiedServiceTitle(service.title, modifier),
    description: getModifiedServiceDescription(service.description, modifier),
  };

  return (
    <main className="service-page">
      <ServiceDetail 
        service={modifiedService}
      />
    </main>
  );
}