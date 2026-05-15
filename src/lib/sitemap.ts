import { services } from '@/json/services'
import { blogPosts } from '@/json/blog'
import { clients } from '@/json/client'
import { cityRoutes } from '@/data/cities'

export const baseUrl = 'https://technologies.ditvi.org'
export const now = new Date().toISOString()
export const MAX_URLS_PER_SITEMAP = 50000

interface SitemapEntry {
  url: string
  lastModified: string
  changeFrequency: string
  priority: number
}

const coreRoutes = ['', '/about', '/services', '/blog', '/client', '/contact']

const externalRoutes: SitemapEntry[] = [
  {
    url: 'https://biodata.ditvi.org',
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: 'https://resume.ditvi.org',
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  },
]

const citySlugs = cityRoutes.map((city) => city.slug)

const xmlEscape = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

const createUrlEntry = (entry: SitemapEntry) => `  <url>\n    <loc>${xmlEscape(entry.url)}</loc>\n    <lastmod>${xmlEscape(entry.lastModified)}</lastmod>\n    <changefreq>${xmlEscape(entry.changeFrequency)}</changefreq>\n    <priority>${entry.priority.toFixed(1)}</priority>\n  </url>`

export const sitemapEntries: SitemapEntry[] = [
  ...coreRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 1,
  })),
  ...services.map((service) => ({
    url: `${baseUrl}${service.path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  })),
  ...blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  })),
  ...clients.map((client) => ({
    url: `${baseUrl}/client/${client.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  })),
  ...services.flatMap((service) =>
    citySlugs.map((slug) => ({
      url: `${baseUrl}${service.path}${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    }))
  ),
  ...externalRoutes,
]

export const sitemapChunks = (): SitemapEntry[][] => {
  const chunks: SitemapEntry[][] = []
  for (let i = 0; i < sitemapEntries.length; i += MAX_URLS_PER_SITEMAP) {
    chunks.push(sitemapEntries.slice(i, i + MAX_URLS_PER_SITEMAP))
  }
  return chunks
}

export const getSitemapUrl = (index: number) => `${baseUrl}/sitemap-${index + 1}.xml`

export const buildSitemapIndexXml = () => {
  const sitemapUrls = sitemapChunks().map((_, index) => ({
    loc: getSitemapUrl(index),
    lastmod: now,
  }))

  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls
    .map(
      (sitemap) =>
        `  <sitemap>\n    <loc>${xmlEscape(sitemap.loc)}</loc>\n    <lastmod>${xmlEscape(sitemap.lastmod)}</lastmod>\n  </sitemap>`
    )
    .join('\n')}\n</sitemapindex>`
}

export const buildSitemapXml = (entries: SitemapEntry[]) =>
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries
    .map(createUrlEntry)
    .join('\n')}\n</urlset>`
