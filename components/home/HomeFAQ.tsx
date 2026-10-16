
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is included in an LV SKY HIGH holiday package?",
    answer:
      "Package inclusions depend on your chosen destination and itinerary. They may include accommodation, transfers, sightseeing and other listed services. Please check the package details or contact our travel team to confirm exactly what is included before booking.",
  },
  {
    question: "Can I customise my travel itinerary?",
    answer:
      "Yes, you can share your preferred destinations, travel dates, budget and interests with our team. We can discuss suitable itinerary options based on your requirements and service availability.",
  },
  {
    question: "How can I get in touch with LV SKY HIGH?",
    answer:
      "You can contact our travel team through the Contact page, call us or send an enquiry on WhatsApp. Share your destination and travel requirements so we can guide you on the next steps.",
  },
  {
    question: "Does LV SKY HIGH arrange honeymoon packages?",
    answer:
      "Yes, we offer honeymoon travel planning options for couples. Share your preferred destination, travel dates, budget and any special preferences so we can discuss suitable packages.",
  },
  {
    question: "What is the cancellation policy for a booking?",
    answer:
      "Cancellation and refund conditions depend on the package, hotel, airline and other service providers. Please review the applicable terms before confirming your booking. Our team can help explain the conditions relevant to your selected package.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="bg-light px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="home-faq-heading"
    >
      <div className="mx-auto w-full max-w-4xl">
        {/* Section Heading */}
        <div className="mb-7 sm:mb-9">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary sm:text-sm">
            Helpful Information
          </p>

          <h2
            id="home-faq-heading"
            className="text-2xl font-bold tracking-tight text-dark sm:text-3xl lg:text-4xl"
          >
            Frequently Asked Questions
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Have questions about your next holiday? Find answers about our
            travel packages, itinerary planning and booking process.
          </p>
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `home-faq-answer-${index}`;
            const questionId = `home-faq-question-${index}`;

            return (
              <div key={faq.question}>
                <h3>
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold leading-6 text-dark transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset sm:py-6 sm:text-base"
                  >
                    <span>{faq.question}</span>

                    <ChevronDown
                      size={20}
                      aria-hidden="true"
                      className={`shrink-0 text-secondary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  hidden={!isOpen}
                  className="pb-5 sm:pb-6"
                >
                  <p className="max-w-3xl pr-2 text-sm leading-7 text-muted sm:text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        {/* <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-white p-5 sm:mt-10 sm:flex-row sm:items-center sm:p-7">
          <div>
            <h3 className="text-lg font-bold text-dark sm:text-xl">
              Still Have Questions?
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted">
              Talk to our travel team about your holiday plans.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
          >
            Contact Our Team
          </a>
        </div> */}
      </div>
    </section>
  );
}
