import Login from '@/admin/login/Login'
import JsonLd from '@/components/JsonLd'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Admin Login | Ditvi Technologies',
  description: 'Secure admin login portal for Ditvi Technologies'
}

export default function LoginPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Admin Login | Ditvi Technologies",
    "url": "https://technologies.ditvi.org/admin/login",
    "description": "Secure admin login portal for Ditvi Technologies."
  }

  return (
    <>
      <JsonLd data={jsonLdData} />
      <Login />
    </>
  )
}