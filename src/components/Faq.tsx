"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/Section";
import type { FaqItem } from "@/lib/faq";

export function Faq({
  items,
  title = "Domande frequenti",
}: {
  items: FaqItem[];
  title?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section tone="mist">
      <SectionHeading title={title} />
      <div className="mt-10 divide-y divide-charcoal/10 rounded-2xl border border-charcoal/10 bg-white">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-base font-semibold text-charcoal">
                  {item.question}
                </span>
                <span
                  className={`flex h-6 w-6 flex-none items-center justify-center rounded-full border border-charcoal/20 text-sm text-charcoal/60 transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {isOpen ? (
                <p className="px-6 pb-5 text-sm leading-relaxed text-charcoal/70">
                  {item.answer}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
