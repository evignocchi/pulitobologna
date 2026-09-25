import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";

const cards = [
  {
    title: "Pulizie ordinarie",
    description:
      "Servizi continuativi per condomini, uffici, attività commerciali e abitazioni.",
    href: "/servizi",
  },
  {
    title: "Pulizie straordinarie",
    description:
      "Per quando serve una pulizia più approfondita o un intervento fuori dalla routine.",
    href: "/pulizie-straordinarie",
  },
  {
    title: "Pulizie post-trasloco",
    description:
      "Pulizia completa degli ambienti dopo un trasloco, prima di entrare o dopo aver lasciato un immobile.",
    href: "/pulizie-post-trasloco",
  },
  {
    title: "Pulizie urgenti",
    description:
      "Hai bisogno di intervenire rapidamente? Contattaci e verifichiamo la disponibilità.",
    href: "/pulizie-urgenti",
  },
];

export function ServicesGrid() {
  return (
    <Section tone="mist">
      <SectionHeading title="Ci occupiamo noi della pulizia. Tu non devi pensarci." />
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group flex flex-col justify-between rounded-2xl border border-charcoal/10 bg-white p-6 transition-colors hover:border-forest/40"
          >
            <div>
              <h3 className="text-lg font-bold text-charcoal">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                {card.description}
              </p>
            </div>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
              Scopri di più
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                &rarr;
              </span>
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
