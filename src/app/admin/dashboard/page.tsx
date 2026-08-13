import AdminDashboard from "@/admin/dashboard/Dashboard"
import JsonLd from '@/components/JsonLd'

export const metadata = {
  title: 'Dashboard | Ditvi Technologies',
  description: 'Admin dashboard for managing contacts and services'
}

export default function DashboardPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Admin Dashboard | Ditvi Technologies",
    "url": "https://technologies.ditvi.org/admin/dashboard",
    "description": "Admin dashboard for managing contacts and services."
  }

  return (
    <>
      <JsonLd data={jsonLdData} />
      <AdminDashboard />
    </>
  )
}
