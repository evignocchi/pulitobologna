import { Section, SectionHeading } from "@/components/Section";

const principles = [
  {
    title: "Affidabilità",
    description: "Il servizio deve essere una certezza, non un problema da gestire.",
  },
  {
    title: "Chiarezza",
    description:
      "Preventivi e modalità di servizio spiegati in modo semplice e trasparente.",
  },
  {
    title: "Continuità",
    description:
      "Per i servizi ricorrenti, lavoriamo per garantire ordine e costanza nel tempo.",
  },
  {
    title: "Flessibilità",
    description:
      "Ogni ambiente ha esigenze diverse. Il servizio viene definito in base alle necessità reali.",
  },
];

export function WhyUs() {
  return (
    <Section tone="forest" id="perche-noi">
      <SectionHeading title="Un servizio semplice da gestire." dark />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {principles.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-cream/15 p-6"
          >
            <h3 className="text-lg font-bold text-cream">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
