import QuoteDashboard from "@/admin/dashboard/enquirydashboard/EnquiryDashboard"
import JsonLd from '@/components/JsonLd'

export const metadata = {
  title: 'Quote Dashboard | Ditvi Technologies',
  description: 'Quote management dashboard'
}

export default function ContactPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Quote Dashboard | Ditvi Technologies",
    "url": "https://technologies.ditvi.org/admin/dashboard/enquiry",
    "description": "Quote management dashboard for Ditvi Technologies administrators."
  }

  return (
    <>
      <JsonLd data={jsonLdData} />
      <QuoteDashboard />
    </>
  )
}
