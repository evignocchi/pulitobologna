import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FeatureList } from "@/components/FeatureList";
import { HowItWorks } from "@/components/HowItWorks";
import { RelatedServices } from "@/components/RelatedServices";
import { FinalCta } from "@/components/FinalCta";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { getServiceBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Pulizie post-trasloco a Bologna",
  description:
    "Pulizia completa di case, uffici e spazi commerciali dopo un trasloco a Bologna e nei comuni limitrofi. Preventivo gratuito.",
  alternates: { canonical: "/pulizie-post-trasloco" },
};

const features = [
  {
    title: "Prima di entrare",
    description:
      "Rendiamo pronto il nuovo immobile prima del trasferimento, così puoi entrare in un ambiente già pulito.",
  },
  {
    title: "Dopo aver lasciato l'immobile",
    description:
      "Utile per consegnare un immobile pulito dopo il trasloco, sia in caso di vendita che di fine locazione.",
  },
  {
    title: "Per case, uffici e negozi",
    description:
      "Il servizio è pensato per abitazioni, uffici e spazi commerciali in fase di trasloco.",
  },
  {
    title: "Preventivo chiaro",
    description:
      "Valutiamo l'ambiente e prepariamo un preventivo gratuito prima di iniziare l'intervento.",
  },
];

export default function PulizieTraslocoPage() {
  const service = getServiceBySlug("pulizie-post-trasloco")!;

  return (
    <>
      <ServiceJsonLd service={service} />
      <PageHero
        eyebrow="Prima o dopo un trasloco"
        title="Pulizie post-trasloco a Bologna"
        subtitle="Pulizia completa di case, uffici e spazi commerciali dopo un trasloco, prima di entrare o dopo aver lasciato un immobile."
      />
      <FeatureList
        eyebrow="Cosa offriamo"
        title="Un ambiente pronto, in ogni fase del trasloco."
        subtitle="Che tu debba entrare in un nuovo spazio o lasciarlo pulito dietro di te, ci pensiamo noi."
        features={features}
      />
      <HowItWorks />
      <RelatedServices excludeSlug="pulizie-post-trasloco" />
      <FinalCta />
    </>
  );
}
