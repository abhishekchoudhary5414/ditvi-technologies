import { buildSitemapIndexXml } from '@/lib/sitemap'

export const dynamic = 'force-static'
export const dynamicParams = false
export const revalidate = false

export async function GET() {
  return new Response(buildSitemapIndexXml(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
