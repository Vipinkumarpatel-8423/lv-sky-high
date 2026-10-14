
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { DestinationDetail } from "@/data/internationalDetails";

type Props = {
  destination: DestinationDetail;
};

export default function DestinationFAQ({ destination }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-light px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 font-heading text-2xl font-bold text-dark sm:text-3xl">
          {destination.name} Trip FAQs
        </h2>

        <div className="divide-y divide-border">
          {destination.faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const panelId = `faq-${destination.slug}-${index}`;

            return (
              <div key={faq.question} className="py-1">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() =>
                      setActiveIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-dark transition hover:text-primary sm:text-base"
                  >
                    <span>{faq.question}</span>

                    <ChevronDown
                      aria-hidden="true"
                      size={20}
                      className={`shrink-0 text-secondary transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    className="pb-5 pr-8 text-sm leading-7 text-muted"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
