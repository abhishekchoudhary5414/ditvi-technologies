import { MetadataRoute } from 'next'

// Add static generation configs
export const dynamic = 'force-static'
export const dynamicParams = false
export const revalidate = false

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://technologies.ditvi.org/sitemap.xml',
    }
}

