
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { DestinationInfo } from "@/data/indiaTours";

export default function DestinationFAQ({
  destination,
}: {
  destination: DestinationInfo;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-light px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading text-2xl font-bold text-dark sm:text-3xl">
          {destination.name} Trip FAQs
        </h2>

        <div className="mt-6 divide-y divide-border">
          {destination.faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const panelId = `destination-faq-${destination.slug}-${index}`;

            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() =>
                      setActiveIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-dark hover:text-primary sm:text-base"
                  >
                    <span>{faq.question}</span>

                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-secondary transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  hidden={!isOpen}
                  className="pb-5 pr-8 text-sm leading-7 text-muted"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
