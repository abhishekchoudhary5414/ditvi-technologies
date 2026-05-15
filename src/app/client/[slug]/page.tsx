import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectView from '@/components/projectview/ProjectView'
import { clients } from '@/json/client'

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

    return (
        <div className="project-page">
            <ProjectView slug={resolvedParams.slug} />
        </div>
    )
}