import { Section, SectionHeading } from "@/components/Section";

const steps = [
  {
    number: "01",
    title: "Ci racconti cosa ti serve",
    description: "Compili il modulo o ci contatti direttamente.",
  },
  {
    number: "02",
    title: "Valutiamo il servizio",
    description: "Capiremo ambiente, frequenza, dimensioni e necessità.",
  },
  {
    number: "03",
    title: "Ricevi il tuo preventivo",
    description: "Un'offerta chiara, senza complicazioni.",
  },
  {
    number: "04",
    title: "Iniziamo",
    description: "Concordiamo modalità e frequenza del servizio.",
  },
];

export function HowItWorks() {
  return (
    <Section tone="white">
      <SectionHeading title="Semplice, dall'inizio alla fine." center />
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number} className="relative">
            <span className="text-4xl font-extrabold text-mist">
              {step.number}
            </span>
            <h3 className="mt-3 text-lg font-bold text-charcoal">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
