"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-forest"
          onClick={() => setOpen(false)}
        >
          Pulito<span className="text-charcoal">Bologna</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contatti"
            className="inline-flex items-center justify-center rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-dark"
          >
            {site.ctaPrimary}
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 lg:hidden"
          aria-label={open ? "Chiudi il menu" : "Apri il menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4.5">
            <span
              className={`absolute left-0 right-0 h-0.5 bg-charcoal transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 right-0 top-1.5 h-0.5 bg-charcoal transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 right-0 h-0.5 bg-charcoal transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-charcoal/10 bg-cream px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-charcoal/85 hover:bg-mist-soft"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contatti"
            className="mt-4 flex w-full items-center justify-center rounded-full bg-forest px-5 py-3.5 text-base font-semibold text-cream"
            onClick={() => setOpen(false)}
          >
            {site.ctaPrimary}
          </Link>
        </div>
      ) : null}
    </header>
  );
}
