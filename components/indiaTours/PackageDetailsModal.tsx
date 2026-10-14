
"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { DestinationPackage } from "@/data/indiaTours";

type Props = {
  pkg: DestinationPackage | null;
  destinationName: string;
  onClose: () => void;
};

export default function PackageDetailsModal({
  pkg,
  destinationName,
  onClose,
}: Props) {
  useEffect(() => {
    if (!pkg) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pkg, onClose]);

  if (!pkg) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-dark/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="package-modal-title"
        className="relative max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-t-2xl bg-white p-5 shadow-2xl sm:rounded-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close package details"
          className="sticky top-0 z-10 ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-dark shadow-sm transition hover:bg-primary-light"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="pr-1">
          <p className="text-sm font-semibold text-secondary">
            {destinationName} Holiday
          </p>

          <h2
            id="package-modal-title"
            className="mt-2 font-heading text-2xl font-bold text-dark sm:text-3xl"
          >
            {pkg.title}
          </h2>

          <p className="mt-2 text-sm text-muted">
            {pkg.duration}
          </p>

          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            {pkg.description}
          </p>

          <div className="mt-5 rounded-xl bg-primary-light p-4">
            <h3 className="font-bold text-dark">Places Covered</h3>
            <p className="mt-2 text-sm text-muted">
              {pkg.places.join(" · ")}
            </p>
          </div>

          <h3 className="mt-7 font-heading text-xl font-bold text-dark">
            Tour Itinerary
          </h3>

          <div className="mt-4 space-y-4">
            {pkg.itinerary.map((day) => (
              <article
                key={day.day}
                className="border-l-2 border-secondary pl-4"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-secondary">
                  Day {day.day}
                </p>

                <h4 className="mt-1 font-semibold text-dark">
                  {day.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {day.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-heading text-lg font-bold text-dark">
                Inclusions
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
                {pkg.inclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-dark">
                Exclusions
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
                {pkg.exclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href={`https://wa.me/917988522589?text=${encodeURIComponent(
              `Hello LV Sky High! I am interested in the ${pkg.title} package for ${destinationName}. Please share the current price, availability and booking details.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-secondary px-5 py-3 text-sm font-bold text-white transition hover:bg-secondary-dark sm:w-auto"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
