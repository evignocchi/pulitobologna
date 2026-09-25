import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { FinalCta } from "@/components/FinalCta";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servizi di pulizia a Bologna",
  description:
    "Pulizie condominiali, per uffici e attività commerciali, residenziali, straordinarie, post-trasloco e urgenti a Bologna e nei comuni limitrofi.",
  alternates: { canonical: "/servizi" },
};

export default function ServiziPage() {
  return (
    <>
      <PageHero
        title="I nostri servizi di pulizia"
        subtitle="Un'unica impresa di pulizie per condomini, aziende, attività commerciali e abitazioni a Bologna e nei comuni limitrofi."
      />

      <Section tone="white">
        <SectionHeading
          eyebrow="Servizi"
          title="Un servizio per ogni ambiente."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.slug}
              className="flex flex-col rounded-2xl border border-charcoal/10 bg-cream p-6 sm:p-7"
            >
              <h3 className="text-xl font-bold text-charcoal">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                {service.shortDescription}
              </p>
              <dl className="mt-5 space-y-2 text-sm">
                <div>
                  <dt className="font-semibold text-charcoal">
                    Per chi è pensato
                  </dt>
                  <dd className="text-charcoal/70">{service.idealCustomer}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-charcoal">
                    Quando serve
                  </dt>
                  <dd className="text-charcoal/70">{service.useCase}</dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/${service.slug}`}
                  className="text-sm font-semibold text-forest hover:underline"
                >
                  Scopri di più &rarr;
                </Link>
                <Link
                  href="/contatti"
                  className="text-sm font-semibold text-charcoal/60 hover:text-forest"
                >
                  Richiedi un preventivo gratuito
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
