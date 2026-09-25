import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import { services } from "@/lib/services";

export function RelatedServices({ excludeSlug }: { excludeSlug: string }) {
  const items = services.filter((s) => s.slug !== excludeSlug);

  return (
    <Section tone="mist">
      <SectionHeading title="Altri servizi che potrebbero interessarti" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((service) => (
          <Link
            key={service.slug}
            href={`/${service.slug}`}
            className="rounded-xl border border-charcoal/10 bg-white px-5 py-4 text-sm font-semibold text-charcoal transition-colors hover:border-forest/40 hover:text-forest"
          >
            {service.name}
          </Link>
        ))}
      </div>
    </Section>
  );
}
