import { services } from '@/json/services';
import ServiceDetail from '@/components/service/servicedetail/ServiceDetail';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
// Service modifiers removed — use base service slugs directly
import JsonLd from '@/components/JsonLd'

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((s) => s.path === `/services/${resolvedParams.slug}`);

  if (!service) {
    return {
      title: 'Service Not Found | Ditvi Technologies',
      description: 'The requested service could not be found',
    };
  }

  const modifiedTitle = service.title;
  const modifiedDescription = service.description;

  return {
    title: `${modifiedTitle} | Ditvi Technologies`,
    description: modifiedDescription,
    keywords: service.keywords || '',
    openGraph: {
      title: `${modifiedTitle} | Ditvi Technologies`,
      description: modifiedDescription,
      url: `https://technologies.ditvi.org/services/${resolvedParams.slug}`,
      siteName: 'Ditvi Technologies',
      type: 'website',
      images: [
        {
          url: '/logo/circlelogo.png',
          width: 512,
          height: 512,
          alt: modifiedTitle
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/logo/circlelogo.png']
    }
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const service = services.find((s) => s.path === `/services/${resolvedParams.slug}`);

  if (!service) {
    notFound();
  }

  const modifiedService = {
    ...service,
    title: service.title,
    description: service.description,
  };

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
    "url": `https://technologies.ditvi.org/services/${resolvedParams.slug}`
  }

  return (
    <main className="service-page">
      <JsonLd data={jsonLdData} />
      <ServiceDetail 
        service={modifiedService}
      />
    </main>
  );
}