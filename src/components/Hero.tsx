import { CtaButton } from "@/components/CtaButton";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full bg-mist px-4 py-1.5 text-sm font-semibold text-forest">
            {site.areaShort}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Pulizie a Bologna,{" "}
            <span className="text-forest">senza pensieri.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-charcoal/70">
            Pulizie professionali per condomini, aziende, attività
            commerciali e abitazioni. Un servizio affidabile, puntuale e
            costruito sulle tue esigenze.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton href="/contatti" size="lg">
              {site.ctaPrimary}
            </CtaButton>
            <CtaButton href={site.phoneHref} variant="secondary" size="lg">
              {site.ctaSecondaryCall}
            </CtaButton>
          </div>
        </div>
        <VisualPlaceholder
          variant="hero"
          label={site.areaShort}
          src="/media/Bologna Centro Storico.jpg"
          alt="Portici del centro storico di Bologna"
          priority
          className="hidden lg:block"
        />
      </div>
    </section>
  );
}
