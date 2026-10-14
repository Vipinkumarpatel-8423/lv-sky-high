
"use client";

import { useState } from "react";
import type { DestinationDetail } from "@/data/internationalDetails";

type Props = {
  destination: DestinationDetail;
};

const PHONE = "917988522589";

export default function DestinationPackages({ destination }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section
      id="holiday-packages"
      className="scroll-mt-24 bg-light px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
          Explore Our Packages
        </p>

        <h2 className="mt-2 font-heading text-2xl font-bold text-dark sm:text-3xl">
          {destination.name} Packages
        </h2>

        <p className="mt-2 text-sm leading-6 text-muted">
          Explore sample itineraries for {destination.name}.
          Contact LV Sky High for current pricing and availability.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {destination.packages.map((pkg) => {
            const expanded = expandedId === pkg.id;

            const message = `Hello LV Sky High! I am interested in ${pkg.title} (${pkg.duration}) for ${destination.name}. Please share pricing, inclusions, availability and itinerary.`;

            const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

            return (
              <article
                key={pkg.id}
                className="flex h-full flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-dark">
                  {pkg.title}
                </h3>

                <p className="mt-1 text-sm font-semibold text-primary">
                  {pkg.duration}
                </p>

                <p className="mt-4 text-sm leading-6 text-muted">
                  {pkg.description}
                </p>

                {expanded && (
                  <div
                    id={`package-${pkg.id}`}
                    className="mt-4 rounded-lg bg-primary-light p-4"
                  >
                    <p className="mb-2 text-sm font-bold text-dark">
                      Suggested Highlights
                    </p>

                    <ul className="space-y-2">
                      {pkg.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-sm text-muted"
                        >
                          <span className="mr-2 text-primary">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-3 text-xs text-muted">
                      Final inclusions and itinerary are subject to confirmation.
                    </p>
                  </div>
                )}

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`package-${pkg.id}`}
                    onClick={() =>
                      setExpandedId(expanded ? null : pkg.id)
                    }
                    className="text-sm font-bold text-secondary hover:text-secondary-dark"
                  >
                    {expanded ? "Hide Details ↑" : "View Details →"}
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold text-green-700 transition hover:bg-green-100"
                  >
                    WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-5 text-xs text-muted">
          Package suggestions are customizable. Pricing, dates and
          inclusions must be confirmed before booking.
        </p>
      </div>
    </section>
  );
}
