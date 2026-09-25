import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "PulitoBologna | Impresa di pulizie a Bologna",
    template: "%s | PulitoBologna",
  },
  description:
    "PulitoBologna offre servizi di pulizia per condomini, uffici, attività commerciali e abitazioni a Bologna e nei comuni limitrofi. Richiedi un preventivo gratuito.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: site.name,
    title: "PulitoBologna | Impresa di pulizie a Bologna",
    description:
      "Pulizie professionali per condomini, aziende, attività commerciali e abitazioni a Bologna e nei comuni limitrofi.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description:
      "Impresa di pulizie professionale a Bologna e nei comuni limitrofi. Pulizie per condomini, uffici, attività commerciali e abitazioni private.",
    areaServed: {
      "@type": "City",
      name: "Bologna",
    },
    url: site.url,
    priceRange: "$$",
  };

  return (
    <html lang="it" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col pb-20 lg:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
