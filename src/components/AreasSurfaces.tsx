import { Section, SectionHeading } from "@/components/Section";

const areas = [
  "Scale",
  "Pavimenti",
  "Vetri",
  "Finestre",
  "Tappeti",
  "Ascensori",
  "Cantine",
  "Spazi esterni",
];

export function AreasSurfaces() {
  return (
    <Section tone="mist">
      <SectionHeading
        title="Puliamo dove serve."
        subtitle="Ci occupiamo della pulizia degli ambienti e delle principali superfici, in base alle esigenze del servizio."
      />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {areas.map((area) => (
          <div
            key={area}
            className="rounded-xl border border-charcoal/10 bg-white px-4 py-5 text-center"
          >
            <p className="text-sm font-semibold text-charcoal">{area}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
