import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FeatureList } from "@/components/FeatureList";
import { RelatedServices } from "@/components/RelatedServices";
import { FinalCta } from "@/components/FinalCta";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { getServiceBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Pulizie urgenti a Bologna",
  description:
    "Hai bisogno di un intervento di pulizia urgente a Bologna? Contattaci e verifichiamo la disponibilità in base alla situazione e alla zona.",
  alternates: { canonical: "/pulizie-urgenti" },
};

const features = [
  {
    title: "Valutazione rapida",
    description:
      "Contattaci e raccontaci la situazione: verifichiamo la disponibilità in base alla zona e all'intervento richiesto.",
  },
  {
    title: "Per ogni tipo di ambiente",
    description:
      "Condomini, uffici, negozi e abitazioni: valutiamo l'intervento più adatto all'esigenza specifica.",
  },
  {
    title: "Comunicazione diretta",
    description:
      "Ti diciamo chiaramente se e quando possiamo intervenire, senza promesse che non possiamo mantenere.",
  },
];

export default function PulizieUrgentiPage() {
  const service = getServiceBySlug("pulizie-urgenti")!;

  return (
    <>
      <ServiceJsonLd service={service} />
      <PageHero
        eyebrow="Interventi rapidi"
        title="Pulizie urgenti a Bologna"
        subtitle="Hai bisogno di un intervento urgente? Contattaci e verifichiamo la disponibilità in base alla situazione e alla zona."
      />
      <FeatureList
        eyebrow="Cosa offriamo"
        title="Un imprevisto da gestire in fretta?"
        subtitle="Raccontaci cosa è successo: verifichiamo insieme la disponibilità più rapida possibile."
        features={features}
        image="/media/Primo Piano Pulizia Vetro.jpg"
        imageAlt="Dettaglio di una pulizia rapida e accurata"
      />
      <RelatedServices excludeSlug="pulizie-urgenti" />
      <FinalCta />
    </>
  );
}
