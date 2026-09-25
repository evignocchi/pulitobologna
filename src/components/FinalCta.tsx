import { CtaButton } from "@/components/CtaButton";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="bg-forest">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">
          Hai bisogno di un&apos;impresa di pulizie a Bologna?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-mist">
          Raccontaci cosa ti serve. Ti aiutiamo a trovare il servizio più
          adatto alle tue esigenze.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton href="/contatti" size="lg">
            {site.ctaPrimary}
          </CtaButton>
          <a
            href={site.phoneHref}
            className="text-lg font-semibold text-cream/90 hover:text-cream"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
