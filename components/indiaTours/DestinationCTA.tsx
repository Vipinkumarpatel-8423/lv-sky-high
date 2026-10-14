
import Link from "next/link";
import type { DestinationInfo } from "@/data/indiaTours";

export default function DestinationCTA({
  destination,
}: {
  destination: DestinationInfo;
}) {
  const message =
    `Hello LV Sky High! I want to plan a trip to ${destination.name}. Please share suitable packages, prices and availability.`;

  return (
    <section className="bg-light px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-2xl font-bold text-dark sm:text-3xl">
          Ready to Plan Your {destination.name} Trip?
        </h2>

        <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
          Share your dates and group size. Our travel team can help
          you plan a suitable {destination.name} itinerary.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-white hover:bg-secondary-dark"
          >
            Plan My Trip
          </Link>

          <a
            href={`https://wa.me/917988522589?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-green-500 px-6 py-3 text-sm font-bold text-white hover:bg-green-600"
          >
            WhatsApp Us
          </a>

          <a
            href="tel:7988522589"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-dark px-6 py-3 text-sm font-bold text-white hover:bg-primary-dark"
          >
            Call a Travel Expert
          </a>
        </div>
      </div>
    </section>
  );
}
