import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";

const cards = [
  {
    title: "Condomini",
    description:
      "Pulizia ordinaria degli spazi comuni e gestione continuativa del servizio per amministratori e condomini.",
    cta: "Scopri le pulizie condominiali",
    href: "/pulizie-condomini",
    image: "/media/Palazzo Condominiale Esterno.jpg",
    alt: "Esterno di un palazzo condominiale a Bologna",
  },
  {
    title: "Aziende e attività commerciali",
    description:
      "Uffici, negozi e attività commerciali sempre ordinati e presentabili, con un servizio organizzato sulle vostre esigenze.",
    cta: "Scopri il servizio",
    href: "/pulizie-uffici-attivita-commerciali",
    image: "/media/Ufficio Open Space Moderno.jpg",
    alt: "Ufficio open space moderno pulito e in ordine",
  },
  {
    title: "Abitazioni",
    description:
      "Pulizie per case e appartamenti, sia ricorrenti sia per esigenze occasionali.",
    cta: "Scopri il servizio",
    href: "/pulizie-residenziali",
    image: "/media/Donna con Secchio in Cucina.jpg",
    alt: "Addetta alle pulizie al lavoro in una cucina",
  },
];

export function AudienceCards() {
  return (
    <Section tone="white">
      <SectionHeading title="Pulizie pensate per ogni tipo di ambiente." />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.title}
            className="flex flex-col rounded-2xl border border-charcoal/10 bg-cream p-6"
          >
            <VisualPlaceholder
              variant="card"
              className="mb-6"
              src={card.image}
              alt={card.alt}
            />
            <h3 className="text-xl font-bold text-charcoal">{card.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">
              {card.description}
            </p>
            <Link
              href={card.href}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:underline"
            >
              {card.cta}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
