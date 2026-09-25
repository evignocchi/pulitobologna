import { Section, SectionHeading } from "@/components/Section";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { site } from "@/lib/site";

export function ServiceArea() {
  return (
    <Section tone="white">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionHeading
          title="A Bologna e nei comuni limitrofi."
          subtitle={site.areaLong}
        />
        <VisualPlaceholder
          variant="wide"
          src="/media/Bologna Centro Storico.jpg"
          alt="Portici del centro storico di Bologna"
        />
      </div>
    </Section>
  );
}
