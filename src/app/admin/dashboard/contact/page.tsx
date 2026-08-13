import ContactDashboard from "@/admin/dashboard/contactdashboard/ContactDashboard"
import JsonLd from '@/components/JsonLd'

export const metadata = {
  title: 'Contact Dashboard | Ditvi Technologies',
  description: 'Contact management dashboard'
}

export default function ContactPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contact Dashboard | Ditvi Technologies",
    "url": "https://technologies.ditvi.org/admin/dashboard/contact",
    "description": "Contact management dashboard for Ditvi Technologies administrators."
  }

  return (
    <>
      <JsonLd data={jsonLdData} />
      <ContactDashboard />
    </>
  )
}
