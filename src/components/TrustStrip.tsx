const items = [
  "Preventivo gratuito",
  "Servizio affidabile",
  "Bologna e dintorni",
  "Interventi su misura",
];

export function TrustStrip() {
  return (
    <div className="border-y border-charcoal/10 bg-mist-soft">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-5 px-5 py-7 text-center sm:px-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-charcoal/10">
        {items.map((item) => (
          <p
            key={item}
            className="text-sm font-semibold text-charcoal/80 md:px-4"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
