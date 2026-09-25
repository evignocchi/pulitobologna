import { type ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
  tone = "cream",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "cream" | "white" | "mist" | "forest";
}) {
  const toneClasses: Record<string, string> = {
    cream: "bg-cream",
    white: "bg-white",
    mist: "bg-mist-soft",
    forest: "bg-forest text-cream",
  };

  return (
    <section id={id} className={`${toneClasses[tone]} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mb-3 text-sm font-semibold uppercase tracking-widest ${
        dark ? "text-mist" : "text-forest"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-cream" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? "text-mist" : "text-charcoal/70"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
