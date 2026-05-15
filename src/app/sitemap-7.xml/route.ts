import { buildSitemapXml, sitemapChunks } from '@/lib/sitemap'

export const dynamic = 'force-static'
export const dynamicParams = false
export const revalidate = false

const chunkIndex = 6

export async function GET() {
  const chunks = sitemapChunks()
  const chunk = chunks[chunkIndex]

  if (!chunk) {
    return new Response('Not Found', { status: 404 })
  }

  return new Response(buildSitemapXml(chunk), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
