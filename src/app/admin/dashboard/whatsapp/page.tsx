import WhatsAppDashboard from '@/admin/dashboard/whatsappdashboard/WhatsAppDashboard'
import JsonLd from '@/components/JsonLd'

export const metadata = {
  title: 'WhatsApp Dashboard | Ditvi Technologies',
  description: 'Track WhatsApp btn clicks with device and page data'
}

export default function WhatsAppPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "WhatsApp Dashboard | Ditvi Technologies",
    "url": "https://technologies.ditvi.org/admin/dashboard/whatsapp",
    "description": "Track WhatsApp button clicks and page activity for Ditvi Technologies."
  }

  return (
    <>
      <JsonLd data={jsonLdData} />
      <WhatsAppDashboard />
    </>
  )
}
