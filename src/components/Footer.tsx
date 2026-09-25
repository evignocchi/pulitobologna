import Image from "next/image";
import Link from "next/link";
import { footerLegalLinks, footerServiceLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/90">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/brand/logo-light.png"
              alt={site.name}
              width={581}
              height={290}
              className="h-9 w-auto"
            />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/65">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cream/50">
              Servizi
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cream/50">
              Azienda
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerLegalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cream/50">
              Contatti
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
              <li>{site.phone}</li>
              <li>{site.email}</li>
              <li>{site.areaShort}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Tutti i diritti
            riservati.
          </p>
          <p>Pulizie professionali a Bologna e comuni limitrofi.</p>
        </div>
      </div>
    </footer>
  );
}
