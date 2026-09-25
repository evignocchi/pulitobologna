import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa sulla privacy di PulitoBologna.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="L'informativa privacy completa sarà pubblicata a breve."
        primaryCtaLabel="Contattaci"
        primaryCtaHref="/contatti"
      />
      <Section tone="white">
        <div className="prose max-w-2xl text-charcoal/80">
          <p>
            Questa pagina conterrà l&apos;informativa sul trattamento dei
            dati personali raccolti tramite il sito e il modulo di
            richiesta preventivo, in conformità al Regolamento (UE)
            2016/679 (GDPR).
          </p>
          <p>
            Per qualsiasi informazione sul trattamento dei tuoi dati puoi
            contattarci all&apos;indirizzo {site.email}.
          </p>
        </div>
      </Section>
    </>
  );
}
