import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FeatureList } from "@/components/FeatureList";
import { HowItWorks } from "@/components/HowItWorks";
import { RelatedServices } from "@/components/RelatedServices";
import { FinalCta } from "@/components/FinalCta";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { getServiceBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Pulizie straordinarie a Bologna",
  description:
    "Interventi di pulizia straordinaria e profonda per condomini, aziende e abitazioni a Bologna e nei comuni limitrofi. Preventivo gratuito.",
  alternates: { canonical: "/pulizie-straordinarie" },
};

const features = [
  {
    title: "Pulizia profonda",
    description:
      "Un intervento più approfondito rispetto alla pulizia ordinaria, per ambienti che necessitano di attenzione extra.",
  },
  {
    title: "Adatto a ogni ambiente",
    description:
      "Condomini, uffici, negozi e abitazioni: valutiamo l'intervento più adatto in base allo spazio.",
  },
  {
    title: "Intervento una tantum o periodico",
    description:
      "Puoi richiedere un intervento singolo oppure programmarlo a scadenze regolari.",
  },
  {
    title: "Preventivo su misura",
    description:
      "Valutiamo l'ambiente e le esigenze specifiche per preparare un preventivo chiaro e gratuito.",
  },
];

export default function PulizieStraordinariePage() {
  const service = getServiceBySlug("pulizie-straordinarie")!;

  return (
    <>
      <ServiceJsonLd service={service} />
      <PageHero
        eyebrow="Interventi straordinari"
        title="Pulizie straordinarie a Bologna"
        subtitle="Interventi di pulizia profonda per condomini, aziende e abitazioni, quando serve andare oltre la manutenzione ordinaria."
      />
      <FeatureList
        eyebrow="Cosa offriamo"
        title="Quando serve un intervento in più."
        subtitle="Per ambienti che richiedono una pulizia più approfondita rispetto alla routine."
        features={features}
        image="/media/Pulizia Vetri Finestra.jpg"
        imageAlt="Pulizia approfondita dei vetri di una finestra"
      />
      <HowItWorks />
      <RelatedServices excludeSlug="pulizie-straordinarie" />
      <FinalCta />
    </>
  );
}
