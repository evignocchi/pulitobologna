import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FeatureList } from "@/components/FeatureList";
import { HowItWorks } from "@/components/HowItWorks";
import { Faq } from "@/components/Faq";
import { RelatedServices } from "@/components/RelatedServices";
import { FinalCta } from "@/components/FinalCta";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { getServiceBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Pulizie condominiali a Bologna",
  description:
    "Servizio di pulizia per condomini a Bologna e nei comuni limitrofi: scale, ingressi e spazi comuni gestiti con continuità e affidabilità. Preventivo gratuito.",
  alternates: { canonical: "/pulizie-condomini" },
};

const features = [
  {
    title: "Servizio ricorrente",
    description:
      "Organizziamo la pulizia degli spazi comuni con una frequenza definita insieme, così il condominio resta sempre in ordine.",
  },
  {
    title: "Affidabilità",
    description:
      "Un'impresa di pulizie che non devi rincorrere: il servizio è pensato per essere una certezza, non un problema da gestire.",
  },
  {
    title: "Puntualità",
    description:
      "Rispettiamo gli orari e la frequenza concordata, per garantire continuità al servizio nel tempo.",
  },
  {
    title: "Comunicazione semplice",
    description:
      "Un punto di contatto chiaro per l'amministratore, senza complicazioni nella gestione quotidiana.",
  },
  {
    title: "Preventivo chiaro",
    description:
      "Valutiamo l'ambiente e prepariamo un preventivo trasparente, facile da presentare in assemblea.",
  },
  {
    title: "Gestione semplice",
    description:
      "Meno pensieri per l'amministratore: ci occupiamo noi della pulizia, con un servizio organizzato e costante.",
  },
];

const condominiFaq = [
  {
    question: "Come funziona il servizio per i condomini?",
    answer:
      "Valutiamo insieme all'amministratore gli spazi comuni, la frequenza necessaria e le esigenze specifiche, per poi preparare un preventivo gratuito e definire un servizio ricorrente.",
  },
  {
    question: "Possiamo richiedere un preventivo per più condomini?",
    answer:
      "Sì. Raccontaci le caratteristiche dei diversi stabili e prepareremo una valutazione per ciascuno.",
  },
  {
    question: "Quanto costa un servizio di pulizia condominiale?",
    answer:
      "Il costo dipende da dimensioni, frequenza e caratteristiche degli spazi comuni. Per questo prepariamo un preventivo gratuito su misura.",
  },
];

export default function PulizieCondominiPage() {
  const service = getServiceBySlug("pulizie-condomini")!;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: condominiFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <ServiceJsonLd service={service} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="Amministratori e condomini"
        title="Pulizie condominiali a Bologna"
        subtitle="Un servizio ricorrente e affidabile per scale, ingressi e spazi comuni, pensato per semplificare la vita di amministratori e condomini."
      />
      <FeatureList
        eyebrow="Cosa offriamo"
        title="Un'impresa di pulizie che non devi rincorrere."
        subtitle="Continuità, puntualità e comunicazione semplice: tutto quello che un amministratore cerca in un fornitore di fiducia."
        features={features}
      />
      <HowItWorks />
      <Faq items={condominiFaq} title="Domande frequenti sui condomini" />
      <RelatedServices excludeSlug="pulizie-condomini" />
      <FinalCta />
    </>
  );
}
