import { site } from "@/lib/site";
import type { Service } from "@/lib/services";

export function ServiceJsonLd({ service }: { service: Service }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: `${service.name} | ${site.name}`,
    description: service.shortDescription,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
    },
    areaServed: {
      "@type": "City",
      name: "Bologna",
    },
    url: `${site.url}/${service.slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
