import Image from "next/image";

type Variant = "hero" | "card" | "wide" | "square";

const variantAspect: Record<Variant, string> = {
  hero: "aspect-[4/5] sm:aspect-[3/4]",
  card: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  square: "aspect-square",
};

export function VisualPlaceholder({
  variant = "card",
  label,
  className = "",
  src,
  alt,
  priority,
}: {
  variant?: Variant;
  label?: string;
  className?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-3xl bg-forest ${variantAspect[variant]} ${className}`}
      >
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority={priority}
        />
        {label ? (
          <span className="absolute bottom-5 left-5 rounded-full bg-cream/90 px-3.5 py-1.5 text-xs font-semibold text-forest">
            {label}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-forest ${variantAspect[variant]} ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-90"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="pb-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1f4c40" />
            <stop offset="100%" stopColor="#0f2921" />
          </linearGradient>
          <pattern
            id="pb-lines"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="28" stroke="#dde7df" strokeOpacity="0.08" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#pb-grad)" />
        <rect width="400" height="400" fill="url(#pb-lines)" />
        <circle cx="330" cy="60" r="120" fill="#dde7df" fillOpacity="0.06" />
        <circle cx="40" cy="360" r="150" fill="#f5f2ea" fillOpacity="0.05" />
      </svg>
      {label ? (
        <span className="absolute bottom-5 left-5 rounded-full bg-cream/90 px-3.5 py-1.5 text-xs font-semibold text-forest">
          {label}
        </span>
      ) : null}
    </div>
  );
}
