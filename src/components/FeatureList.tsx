import { Section, SectionHeading } from "@/components/Section";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";

export function FeatureList({
  eyebrow,
  title,
  subtitle,
  features,
  tone = "white",
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  features: { title: string; description: string }[];
  tone?: "white" | "mist";
  image?: string;
  imageAlt?: string;
}) {
  return (
    <Section tone={tone}>
      {image ? (
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
          <VisualPlaceholder variant="wide" src={image} alt={imageAlt} />
        </div>
      ) : (
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      )}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className={`rounded-2xl border border-charcoal/10 p-6 ${
              tone === "white" ? "bg-cream" : "bg-white"
            }`}
          >
            <h3 className="text-lg font-bold text-charcoal">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
