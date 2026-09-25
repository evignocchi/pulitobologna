import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FeatureList } from "@/components/FeatureList";
import { HowItWorks } from "@/components/HowItWorks";
import { RelatedServices } from "@/components/RelatedServices";
import { FinalCta } from "@/components/FinalCta";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { getServiceBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Pulizie uffici e attività commerciali a Bologna",
  description:
    "Pulizie per uffici, negozi, studi professionali e attività commerciali a Bologna. Servizio ricorrente, flessibile e con il minimo impatto sull'attività.",
  alternates: { canonical: "/pulizie-uffici-attivita-commerciali" },
};

const features = [
  {
    title: "Pulizia ricorrente",
    description:
      "Organizziamo il servizio con la frequenza più adatta alla vostra attività, per mantenere l'ambiente sempre in ordine.",
  },
  {
    title: "Minimo impatto sull'attività",
    description:
      "Interveniamo negli orari più adatti, prima dell'apertura o fuori dall'orario di lavoro, per non interferire con l'attività.",
  },
  {
    title: "Aspetto professionale",
    description:
      "Un ambiente pulito e ordinato trasmette professionalità a clienti, dipendenti e collaboratori.",
  },
  {
    title: "Orari flessibili",
    description:
      "Definiamo insieme la frequenza e gli orari del servizio in base alle esigenze reali della vostra attività.",
  },
];

export default function PulizieUfficiPage() {
  const service = getServiceBySlug("pulizie-uffici-attivita-commerciali")!;

  return (
    <>
      <ServiceJsonLd service={service} />
      <PageHero
        eyebrow="Aziende e attività commerciali"
        title="Pulizie per uffici e attività commerciali"
        subtitle="Un servizio organizzato per mantenere uffici, negozi e studi professionali sempre puliti e presentabili, con il minimo impatto sulla vostra attività."
      />
      <FeatureList
        eyebrow="Cosa offriamo"
        title="Tu pensi al lavoro, noi pensiamo alla pulizia."
        subtitle="Uffici, negozi, studi professionali e altri ambienti di lavoro, sempre ordinati e presentabili."
        features={features}
      />
      <HowItWorks />
      <RelatedServices excludeSlug="pulizie-uffici-attivita-commerciali" />
      <FinalCta />
    </>
  );
}
