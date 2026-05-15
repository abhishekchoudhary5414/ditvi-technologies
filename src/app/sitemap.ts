import { MetadataRoute } from 'next'
import { services } from '@/json/services'
import { blogPosts } from '@/json/blog'
import { clients } from '@/json/client'
import { cityRoutes } from '@/data/cities'

export const dynamic = 'force-static'
export const dynamicParams = false
export const revalidate = false

const baseUrl = 'https://technologies.ditvi.org'


const citySlugs = cityRoutes.map((city) => city.slug)

const now = new Date().toISOString()
const coreRoutes = ['', '/about', '/services', '/blog', '/client', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = coreRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 1,
  }))

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}${service.path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const clientRoutes = clients.map((client) => ({
    url: `${baseUrl}/client/${client.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const cityServiceRoutes = services.flatMap((service) =>
    citySlugs.map((slug) => ({
      url: `${baseUrl}${service.path}${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }))
  )

  const externalRoutes = [
    {
      url: 'https://biodata.ditvi.org',
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: 'https://resume.ditvi.org',
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ]

  return [
    ...routes,
    ...serviceRoutes,
    ...blogRoutes,
    ...clientRoutes,
    ...cityServiceRoutes,
    ...externalRoutes,
  ]
}
