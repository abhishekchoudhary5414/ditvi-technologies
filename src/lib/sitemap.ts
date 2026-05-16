import { services } from '@/json/services'
import { blogPosts } from '@/json/blog'
import { clients } from '@/json/client'
import { cityRoutes } from '@/data/cities'
import { SERVICE_MODIFIERS } from '@/data/serviceModifiers'

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

const modifierKeys = Object.keys(SERVICE_MODIFIERS)

const xmlEscape = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

const createSitemapEntry = (
  url: string,
  priority: number,
  changeFrequency: string = 'monthly'
): SitemapEntry => ({
  url,
  lastModified: now,
  changeFrequency,
  priority,
})

const createUrlEntry = (entry: SitemapEntry) => `  <url>\n    <loc>${xmlEscape(entry.url)}</loc>\n    <lastmod>${xmlEscape(entry.lastModified)}</lastmod>\n    <changefreq>${xmlEscape(entry.changeFrequency)}</changefreq>\n    <priority>${entry.priority.toFixed(1)}</priority>\n  </url>`

const normalizeServiceSlug = (path: string) => path.replace(/^\/services\//, '')

const getTotalSitemapCount = () => {
  const baseServiceCount = services.length
  const modifierServiceCount = services.length * modifierKeys.length
  const cityServiceCount = services.length * cityRoutes.length
  const modifierCityServiceCount = modifierServiceCount * cityRoutes.length

  return (
    coreRoutes.length +
    baseServiceCount +
    modifierServiceCount +
    blogPosts.length +
    clients.length +
    externalRoutes.length +
    cityServiceCount +
    modifierCityServiceCount
  )
}

export const getSitemapChunkCount = () =>
  Math.ceil(getTotalSitemapCount() / MAX_URLS_PER_SITEMAP)

export const getSitemapUrl = (index: number) => `${baseUrl}/sitemap/${index + 1}.xml`

export const buildSitemapIndexXml = () => {
  const sitemapUrls = Array.from({ length: getSitemapChunkCount() }, (_, index) => ({
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

const createEntryInRange = (
  url: string,
  priority: number,
  changeFrequency: string,
  startIndex: number,
  endIndex: number,
  state: {
    position: number
    collected: SitemapEntry[]
  }
) => {
  if (state.position >= endIndex) return
  if (state.position >= startIndex) {
    state.collected.push(createSitemapEntry(url, priority, changeFrequency))
  }
  state.position += 1
}

const addGroup = (
  count: number,
  state: { position: number; collected: SitemapEntry[] },
  callback: () => void,
  startIndex: number,
  endIndex: number
) => {
  if (state.position >= endIndex) return
  if (state.position + count <= startIndex) {
    state.position += count
    return
  }
  callback()
}

export const getSitemapChunk = (chunkIndex: number): SitemapEntry[] => {
  const startIndex = chunkIndex * MAX_URLS_PER_SITEMAP
  const endIndex = startIndex + MAX_URLS_PER_SITEMAP
  const state = { position: 0, collected: [] as SitemapEntry[] }

  addGroup(coreRoutes.length, state, () => {
    coreRoutes.forEach((route) =>
      createEntryInRange(
        `${baseUrl}${route}`,
        1,
        'monthly',
        startIndex,
        endIndex,
        state
      )
    )
  }, startIndex, endIndex)

  addGroup(services.length, state, () => {
    services.forEach((service) =>
      createEntryInRange(
        `${baseUrl}${service.path}`,
        0.8,
        'monthly',
        startIndex,
        endIndex,
        state
      )
    )
  }, startIndex, endIndex)

  addGroup(services.length * modifierKeys.length, state, () => {
    services.forEach((service) => {
      const serviceSlug = normalizeServiceSlug(service.path)
      modifierKeys.forEach((modifier) =>
        createEntryInRange(
          `${baseUrl}/services/${modifier}-${serviceSlug}`,
          0.8,
          'monthly',
          startIndex,
          endIndex,
          state
        )
      )
    })
  }, startIndex, endIndex)

  addGroup(blogPosts.length, state, () => {
    blogPosts.forEach((post) =>
      createEntryInRange(
        `${baseUrl}/blog/${post.slug}`,
        0.7,
        'weekly',
        startIndex,
        endIndex,
        state
      )
    )
  }, startIndex, endIndex)

  addGroup(clients.length, state, () => {
    clients.forEach((client) =>
      createEntryInRange(
        `${baseUrl}/client/${client.slug}`,
        0.6,
        'monthly',
        startIndex,
        endIndex,
        state
      )
    )
  }, startIndex, endIndex)

  const cityCount = cityRoutes.length
  addGroup(services.length * cityCount, state, () => {
    services.forEach((service) => {
      const baseUrlPath = `${baseUrl}${service.path}`
      cityRoutes.forEach((city) =>
        createEntryInRange(
          `${baseUrlPath}${city.slug}`,
          0.5,
          'monthly',
          startIndex,
          endIndex,
          state
        )
      )
    })
  }, startIndex, endIndex)

  addGroup(services.length * modifierKeys.length * cityCount, state, () => {
    services.forEach((service) => {
      const serviceSlug = normalizeServiceSlug(service.path)
      modifierKeys.forEach((modifier) => {
        const modifierUrl = `${baseUrl}/services/${modifier}-${serviceSlug}`
        cityRoutes.forEach((city) =>
          createEntryInRange(
            `${modifierUrl}${city.slug}`,
            0.5,
            'monthly',
            startIndex,
            endIndex,
            state
          )
        )
      })
    })
  }, startIndex, endIndex)

  addGroup(externalRoutes.length, state, () => {
    externalRoutes.forEach((entry) =>
      createEntryInRange(
        entry.url,
        entry.priority,
        entry.changeFrequency,
        startIndex,
        endIndex,
        state
      )
    )
  }, startIndex, endIndex)

  return state.collected
}
