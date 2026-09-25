import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FeatureList } from "@/components/FeatureList";
import { HowItWorks } from "@/components/HowItWorks";
import { RelatedServices } from "@/components/RelatedServices";
import { FinalCta } from "@/components/FinalCta";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { getServiceBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Pulizie residenziali a Bologna",
  description:
    "Pulizie per case e appartamenti a Bologna e nei comuni limitrofi, ricorrenti o occasionali. Servizio affidabile, preventivo gratuito.",
  alternates: { canonical: "/pulizie-residenziali" },
};

const features = [
  {
    title: "Pulizie ricorrenti",
    description:
      "Un servizio periodico per mantenere la casa sempre in ordine, con la frequenza che preferisci.",
  },
  {
    title: "Interventi occasionali",
    description:
      "Hai bisogno di una mano in più solo qualche volta? Organizziamo anche interventi singoli.",
  },
  {
    title: "Servizio affidabile",
    description:
      "Puntualità e continuità, per un servizio su cui puoi contare senza doverlo verificare ogni volta.",
  },
  {
    title: "Su misura per te",
    description:
      "Ogni casa ha esigenze diverse: definiamo insieme il servizio più adatto al tuo appartamento.",
  },
];

export default function PulizieResidenzialiPage() {
  const service = getServiceBySlug("pulizie-residenziali")!;

  return (
    <>
      <ServiceJsonLd service={service} />
      <PageHero
        eyebrow="Case e appartamenti"
        title="Pulizie residenziali a Bologna"
        subtitle="Pulizie per case e appartamenti, organizzate in base alle tue esigenze: ricorrenti o occasionali."
      />
      <FeatureList
        eyebrow="Cosa offriamo"
        title="La tua casa, sempre in ordine."
        subtitle="Un servizio di pulizia pensato per adattarsi al ritmo della tua famiglia."
        features={features}
      />
      <HowItWorks />
      <RelatedServices excludeSlug="pulizie-residenziali" />
      <FinalCta />
    </>
  );
}
