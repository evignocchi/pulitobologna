import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti e preventivo gratuito",
  description:
    "Richiedi un preventivo gratuito a PulitoBologna: telefono, WhatsApp, email e modulo di contatto per condomini, aziende e abitazioni a Bologna.",
  alternates: { canonical: "/contatti" },
};

export default function ContattiPage() {
  return (
    <>
      <Section tone="cream">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full bg-mist px-4 py-1.5 text-sm font-semibold text-forest">
            {site.areaShort}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl">
            Richiedi un preventivo gratuito
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/70">
            Raccontaci di cosa hai bisogno. Ti ricontatteremo per capire il
            servizio più adatto e preparare il preventivo.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <div className="space-y-8">
            <div>
              <SectionHeading title="Contatti diretti" />
              <ul className="mt-6 space-y-4 text-base">
                <li>
                  <p className="text-sm font-semibold uppercase tracking-widest text-charcoal/50">
                    Telefono
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-1 block font-semibold text-forest"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <p className="text-sm font-semibold uppercase tracking-widest text-charcoal/50">
                    WhatsApp
                  </p>
                  <a
                    href={site.whatsappHref}
                    className="mt-1 block font-semibold text-forest"
                  >
                    {site.whatsapp}
                  </a>
                </li>
                <li>
                  <p className="text-sm font-semibold uppercase tracking-widest text-charcoal/50">
                    Email
                  </p>
                  <a
                    href={site.emailHref}
                    className="mt-1 block font-semibold text-forest"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <p className="text-sm font-semibold uppercase tracking-widest text-charcoal/50">
                    Zona servita
                  </p>
                  <p className="mt-1 font-semibold text-charcoal">
                    {site.areaShort}
                  </p>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-charcoal/10 bg-white p-6">
              <h3 className="text-base font-bold text-charcoal">
                Cosa succede dopo l&apos;invio della richiesta?
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-charcoal/70">
                <li>1. Ricevi conferma della tua richiesta.</li>
                <li>
                  2. Ti ricontattiamo per capire ambiente, frequenza e
                  necessità.
                </li>
                <li>3. Ti prepariamo un preventivo gratuito e chiaro.</li>
              </ol>
            </div>
          </div>

          <QuoteForm />
        </div>
      </Section>
    </>
  );
}
