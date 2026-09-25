import { CtaButton } from "@/components/CtaButton";
import { site } from "@/lib/site";

export function PageHero({
  eyebrow = site.areaShort,
  title,
  subtitle,
  primaryCtaLabel = site.ctaPrimary,
  primaryCtaHref = "/contatti",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
}) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8 sm:py-20">
        <p className="mb-4 inline-flex items-center rounded-full bg-mist px-4 py-1.5 text-sm font-semibold text-forest">
          {eyebrow}
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal/70">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton href={primaryCtaHref} size="lg">
            {primaryCtaLabel}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
