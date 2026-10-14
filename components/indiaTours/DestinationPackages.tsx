
"use client";

import { useState, useCallback } from "react";
import type { DestinationInfo } from "@/data/indiaTours";
import PackageDetailsModal from "./PackageDetailsModal";

export default function DestinationPackages({
  destination,
}: {
  destination: DestinationInfo;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedPackage =
    destination.packages.find((pkg) => pkg.id === selectedId) ?? null;

  const closeModal = useCallback(() => setSelectedId(null), []);

  return (
    <section
      id="destination-packages"
      className="bg-light px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-2xl font-bold text-dark sm:text-3xl">
          {destination.name} Packages
        </h2>

        <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
          Explore available itineraries for {destination.name}.
          Contact our travel team for current pricing and availability.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destination.packages.map((pkg) => (
            <article
              key={pkg.id}
              className="flex min-h-[220px] flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-bold leading-snug text-dark">
                {pkg.title}
              </h3>

              <p className="mt-2 text-sm text-muted">
                {pkg.duration} · {pkg.places.join(" · ")}
              </p>

              <p className="mt-3 text-sm leading-6 text-muted">
                {pkg.description}
              </p>

              <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                <button
                  type="button"
                  onClick={() => setSelectedId(pkg.id)}
                  className="text-sm font-bold text-secondary transition hover:text-secondary-dark"
                >
                  View Details →
                </button>

                <a
                  href={`https://wa.me/917988522589?text=${encodeURIComponent(
                    `Hello LV Sky High! Please share details for the ${pkg.title} package in ${destination.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full border border-green-200 bg-green-50 px-3 py-2 text-xs font-semibold text-green-700 transition hover:bg-green-100"
                >
                  WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        {destination.packages.length === 0 && (
          <p className="mt-8 rounded-xl border border-border bg-white p-6 text-sm text-muted">
            Packages are being updated. Please contact our travel team
            for assistance.
          </p>
        )}
      </div>

      <PackageDetailsModal
        pkg={selectedPackage}
        destinationName={destination.name}
        onClose={closeModal}
      />
    </section>
  );
}
