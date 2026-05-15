import { buildSitemapXml, getSitemapChunk, getSitemapChunkCount } from '@/lib/sitemap'

export const dynamic = 'force-static'
export const revalidate = false

export async function GET(request: Request) {
  const pathname = new URL(request.url).pathname
  const match = pathname.match(/\/sitemap-(\d+)\.xml$/)
  const chunkIndex = match ? Number(match[1]) - 1 : -1

  if (!match || !Number.isInteger(chunkIndex) || chunkIndex < 0) {
    return new Response('Not Found', { status: 404 })
  }

  if (chunkIndex >= getSitemapChunkCount()) {
    return new Response('Not Found', { status: 404 })
  }

  const chunk = getSitemapChunk(chunkIndex)

  if (!chunk.length) {
    return new Response('Not Found', { status: 404 })
  }

  return new Response(buildSitemapXml(chunk), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
