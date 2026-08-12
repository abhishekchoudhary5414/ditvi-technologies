import Blog from '@/components/blog/Blog'
import { blogPosts } from '@/json/blog'
import JsonLd from '@/components/JsonLd'

export default function BlogPage() {
    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "url": "https://technologies.ditvi.org/blog",
        "mainEntity": blogPosts.map((p, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "item": {
                "@type": "BlogPosting",
                "headline": p.title,
                "url": `https://technologies.ditvi.org/blog/${p.slug}`
            }
        }))
    }

    return (
      <>
        <JsonLd data={jsonLdData} />
        <Blog isSlider={false} />
      </>
    )
}