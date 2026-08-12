import { blogPosts } from '../../../json/blog'
import BlogDetail from '../../../components/blog/blogdetail/BlogDetials'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'

interface PageProps {
    params: Promise<{ slug: string }>

}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const post = blogPosts.find(p => p.slug === resolvedParams.slug)

    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found'
        }
    }

    return {
        title: `${post.title} | Ditvi Technologies Blog`,
        description: post.excerpt
    }
}

export default async function Page({ params }: PageProps) {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
      notFound();
    }

        const dateIso = new Date(post.date).toISOString()

        const jsonLdData = {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": post.title,
                "image": post.image,
                "author": {
                        "@type": "Person",
                        "name": post.author
                },
                "datePublished": dateIso,
                "description": post.excerpt,
                "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://technologies.ditvi.org/blog/${post.slug}`
                }
        }

        return (
            <>
                <JsonLd data={jsonLdData} />
                <BlogDetail params={resolvedParams} />
            </>
        )
}