import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectView from '@/components/projectview/ProjectView'
import { clients } from '@/json/client'
import JsonLd from '@/components/JsonLd'

export const dynamic = 'force-dynamic'

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params
    const client = clients.find(c => c.slug === resolvedParams.slug)

    if (!client) {
        return {
            title: 'Project Not Found',
            description: 'The requested project could not be found.',
        }
    }

    return {
        title: `${client.name} - Project Portfolio | Ditvi Technologies`,
        description: `View our work for ${client.name}: ${client.project}`,
        openGraph: {
            title: client.name,
            description: client.project,
            type: 'article',
        },
    }
}

export default async function ProjectPage({ params }: PageProps) {
    const resolvedParams = await params
    const client = clients.find(c => c.slug === resolvedParams.slug)

    if (!client) {
        notFound()
    }

    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": client.name,
        "description": client.project,
        "url": `https://technologies.ditvi.org/client/${client.slug}`,
        "publisher": {
            "@type": "Organization",
            "name": "Ditvi Technologies",
            "url": "https://technologies.ditvi.org"
        }
    }

    return (
        <div className="project-page">
            <JsonLd data={jsonLdData} />
            <ProjectView slug={resolvedParams.slug} />
        </div>
    )
}