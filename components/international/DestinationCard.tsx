
import Image from "next/image";
import Link from "next/link";
import type { InternationalDestination } from "@/data/international";

const WHATSAPP_NUMBER = "917988522589";

type Props = {
  destination: InternationalDestination;
};

export default function DestinationCard({ destination }: Props) {
  const message = `Hello LV Sky High! I am interested in the ${destination.name} holiday package. Please share package details, itinerary and pricing.`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/International/${destination.slug}`}
        aria-label={`View ${destination.name} packages`}
        className="relative block aspect-[16/8] overflow-hidden bg-light"
      >
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <h2 className="text-lg font-bold text-dark">
          {destination.title}
        </h2>

        <p className="mt-1 text-sm leading-5 text-muted">
          {destination.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
          <Link
            href={`/International/${destination.slug}`}
            className="text-sm font-bold text-secondary transition hover:text-secondary-dark"
          >
            View Packages <span aria-hidden="true">→</span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${destination.name} on WhatsApp`}
            className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-2 text-xs font-semibold text-green-700 transition hover:bg-green-100"
          >
            <span aria-hidden="true">◉</span>
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
