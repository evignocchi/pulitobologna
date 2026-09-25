import Link from "next/link";
import { site } from "@/lib/site";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-cream/95 px-4 py-3 backdrop-blur lg:hidden">
      <Link
        href="/contatti"
        className="flex w-full items-center justify-center rounded-full bg-forest px-5 py-3.5 text-base font-semibold text-cream shadow-lg shadow-forest/20"
      >
        {site.ctaPrimary}
      </Link>
    </div>
  );
}
