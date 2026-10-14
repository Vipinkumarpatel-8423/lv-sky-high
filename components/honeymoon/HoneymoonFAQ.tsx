
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const honeymoonFAQs = [
  {
    question:
      "How is a honeymoon package different from a regular destination package?",
    answer:
      "Honeymoon packages can focus on couple-friendly stays, a relaxed itinerary and romantic experiences. Confirm the inclusions for your selected package.",
  },
  {
    question:
      "Which destination is best for a honeymoon — Kerala, Goa or Himachal?",
    answer:
      "Kerala offers backwaters and green landscapes, Goa offers beaches, and Himachal offers mountain scenery. The best choice depends on your preferences, budget and travel dates.",
  },
  {
    question: "Can honeymoon packages be customised?",
    answer:
      "Yes, contact LV Sky High with your travel dates, preferred destination, budget and trip duration to discuss a customized itinerary.",
  },
  {
    question: "How do I book or ask for a custom itinerary?",
    answer:
      "Contact LV Sky High through the Contact page or WhatsApp to discuss package details, pricing and availability.",
  },
];

export default function HoneymoonFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-light px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-7 font-heading text-2xl font-bold text-dark sm:text-3xl">
          India Honeymoon Trip FAQs
        </h2>

        <div className="divide-y divide-border">
          {honeymoonFAQs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const panelId = `honeymoon-faq-${index}`;

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
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-dark transition hover:text-primary sm:text-base"
                  >
                    <span>{faq.question}</span>

                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-200 ${
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
