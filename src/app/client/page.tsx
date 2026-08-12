import Clients from "@/components/clients/Clients";
import { clients } from '@/json/client'
import JsonLd from '@/components/JsonLd'

export default function ServicesPage() {
        const jsonLdData = {
                "@context": "https://schema.org",
                "@type": "ItemList",
                "url": "https://technologies.ditvi.org/client",
                "itemListElement": clients.map((c, idx) => ({
                        "@type": "ListItem",
                        "position": idx + 1,
                        "url": `https://technologies.ditvi.org/client/${c.slug}`,
                        "name": c.name
                }))
        }

        return (
            <>
                <JsonLd data={jsonLdData} />
                <Clients />
            </>
        )
}