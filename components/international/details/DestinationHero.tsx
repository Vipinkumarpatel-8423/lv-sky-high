
import Image from "next/image";
import Link from "next/link";
import type { DestinationDetail } from "@/data/internationalDetails";

type Props = {
  destination: DestinationDetail;
};

export default function DestinationHero({ destination }: Props) {
  return (
    <section className="relative isolate flex min-h-[380px] items-center overflow-hidden bg-dark px-4 py-16 sm:min-h-[440px] sm:px-6 lg:min-h-[480px] lg:px-8">
      <Image
        src={destination.image}
        alt={destination.title}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark/90 via-primary-dark/70 to-dark/35" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <Link
            href="/International"
            className="text-sm font-medium text-white/90 hover:text-secondary"
          >
            ← International Destinations
          </Link>

          <p className="mt-8 text-sm font-bold uppercase tracking-wider text-secondary">
            LV SKY HIGH • International Holidays
          </p>

          <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Explore{" "}
            <span className="text-secondary">
              {destination.name}
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            {destination.description}
          </p>

          <a
            href="#holiday-packages"
            className="mt-7 inline-flex rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-white transition hover:bg-secondary-dark"
          >
            Explore Packages →
          </a>
        </div>
      </div>
    </section>
  );
}
