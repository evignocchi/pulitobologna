import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { AudienceCards } from "@/components/AudienceCards";
import { ServicesGrid } from "@/components/ServicesGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyUs } from "@/components/WhyUs";
import { AreasSurfaces } from "@/components/AreasSurfaces";
import { ServiceArea } from "@/components/ServiceArea";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { homeFaq } from "@/lib/faq";

export const metadata: Metadata = {
  title: "PulitoBologna | Impresa di pulizie a Bologna",
  description:
    "PulitoBologna offre servizi di pulizia per condomini, uffici, attività commerciali e abitazioni a Bologna e nei comuni limitrofi. Richiedi un preventivo gratuito.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <TrustStrip />
      <AudienceCards />
      <ServicesGrid />
      <HowItWorks />
      <WhyUs />
      <AreasSurfaces />
      <ServiceArea />
      <Faq items={homeFaq} />
      <FinalCta />
    </>
  );
}
