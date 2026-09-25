import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informativa sui cookie di PulitoBologna.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        subtitle="L'informativa completa sui cookie sarà pubblicata a breve."
        primaryCtaLabel="Contattaci"
        primaryCtaHref="/contatti"
      />
      <Section tone="white">
        <div className="prose max-w-2xl text-charcoal/80">
          <p>
            Questa pagina conterrà i dettagli sui cookie tecnici e di
            terze parti eventualmente utilizzati dal sito.
          </p>
          <p>
            Per qualsiasi informazione puoi contattarci all&apos;indirizzo{" "}
            {site.email}.
          </p>
        </div>
      </Section>
    </>
  );
}
