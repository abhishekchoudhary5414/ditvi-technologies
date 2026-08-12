import Contact from '@/components/contact/Contact'
import JsonLd from '@/components/JsonLd'

export default function ContactPage() {
    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
            "@type": "Organization",
            "name": "Ditvi Technologies",
            "url": "https://technologies.ditvi.org",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9285248504",
                "contactType": "customer service",
                "email": "care@ditvi.org"
            }
        }
    }

    return (
      <>
        <JsonLd data={jsonLdData} />
        <Contact />
      </>
    )
}