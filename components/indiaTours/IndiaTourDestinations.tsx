
import Image from "next/image";
import Link from "next/link";
import { indiaTourDestinations } from "@/data/indiaTours";

export default function IndiaTourDestinations() {
  return (
    <section className="bg-light px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
          Find Your Next Destination
        </p>

        <h2 className="mt-2 font-heading text-2xl font-bold text-dark sm:text-3xl">
          Explore India Tour Packages
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
          Discover mountain escapes, beach holidays, cultural journeys
          and scenic destinations across India.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {indiaTourDestinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/india-tours/${destination.slug}`}
              className="group block overflow-hidden rounded-2xl border border-border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-primary-light">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex min-h-[88px] flex-col justify-center p-4">
                <h3 className="font-heading text-base font-bold leading-snug text-dark">
                  {destination.name}
                </h3>

                <p className="mt-1 text-sm text-muted">
                  {destination.packageCount} packages
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
