export const site = {
  name: "PulitoBologna",
  tagline: "Pulizie professionali a Bologna e comuni limitrofi.",
  url: "https://www.pulitobologna.it",
  phone: "[NUMERO TELEFONO]",
  phoneHref: "tel:+390000000000",
  whatsapp: "[NUMERO WHATSAPP]",
  whatsappHref: "https://wa.me/390000000000",
  email: "[EMAIL]",
  emailHref: "mailto:info@pulitobologna.it",
  privacyLink: "/privacy-policy",
  ctaPrimary: "Richiedi un preventivo gratuito",
  ctaSecondaryCall: "Chiamaci",
  ctaSecondaryWhatsapp: "Scrivici su WhatsApp",
  areaShort: "Bologna e comuni limitrofi",
  areaLong: "Operiamo a Bologna e nei comuni limitrofi, per offrire un servizio vicino, organizzato e facilmente raggiungibile.",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const mainNav: NavLink[] = [
  { label: "Servizi", href: "/servizi" },
  { label: "Condomini", href: "/pulizie-condomini" },
  { label: "Aziende e attività", href: "/pulizie-uffici-attivita-commerciali" },
  { label: "Residenziale", href: "/pulizie-residenziali" },
  { label: "Perché noi", href: "/#perche-noi" },
  { label: "Contatti", href: "/contatti" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Servizi", href: "/servizi" },
  { label: "Pulizie condominiali", href: "/pulizie-condomini" },
  { label: "Aziende e attività commerciali", href: "/pulizie-uffici-attivita-commerciali" },
  { label: "Pulizie residenziali", href: "/pulizie-residenziali" },
  { label: "Pulizie straordinarie", href: "/pulizie-straordinarie" },
  { label: "Pulizie post-trasloco", href: "/pulizie-post-trasloco" },
  { label: "Pulizie urgenti", href: "/pulizie-urgenti" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Contatti", href: "/contatti" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];
