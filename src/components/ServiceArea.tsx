import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

export function ServiceArea() {
  return (
    <Section tone="white">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionHeading
          title="A Bologna e nei comuni limitrofi."
          subtitle={site.areaLong}
        />
        <div className="flex h-56 items-center justify-center rounded-3xl border border-charcoal/10 bg-mist-soft sm:h-72">
          <p className="px-8 text-center text-sm font-semibold text-charcoal/50">
            {site.areaShort}
          </p>
        </div>
      </div>
    </Section>
  );
}
