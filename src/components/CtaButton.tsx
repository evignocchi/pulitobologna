import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-forest text-cream hover:bg-forest-dark focus-visible:outline-forest",
  secondary:
    "bg-cream text-forest border border-forest/25 hover:border-forest/60 hover:bg-white focus-visible:outline-forest",
  ghost:
    "bg-transparent text-cream border border-cream/40 hover:bg-cream/10 focus-visible:outline-cream",
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
  size = "md",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  size?: "md" | "lg";
}) {
  const sizeClasses =
    size === "lg" ? "px-7 py-4 text-base sm:text-lg" : "px-6 py-3.5 text-base";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 ${sizeClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
