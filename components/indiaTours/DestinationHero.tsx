
import Image from "next/image";
import Link from "next/link";
import type { DestinationInfo } from "@/data/indiaTours";

export default function DestinationHero({
  destination,
}: {
  destination: DestinationInfo;
}) {
  return (
    <section className="relative isolate flex min-h-[320px] items-center overflow-hidden bg-dark px-4 py-14 sm:min-h-[400px] sm:px-6 lg:min-h-[460px] lg:px-8">
      <Image
        src={destination.image}
        alt={`${destination.name} holiday destination`}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark/90 via-primary-dark/65 to-dark/25" />

      <div className="mx-auto w-full max-w-6xl">
        {/* Responsive Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex w-fit max-w-full flex-wrap items-center gap-x-2 gap-y-2 rounded-lg border border-white/20 bg-dark/40 px-3 py-2 text-xs text-white backdrop-blur-sm sm:mb-8 sm:px-4 sm:text-sm"
        >
          <Link
            href="/"
            className="shrink-0 transition hover:text-secondary"
          >
            Home
          </Link>

          <span aria-hidden="true" className="text-white/60">
            /
          </span>

          <Link
            href="/india-tours"
            className="transition hover:text-secondary"
          >
            India Tours
          </Link>

          <span aria-hidden="true" className="text-white/60">
            /
          </span>

          <span
            aria-current="page"
            className="min-w-0 break-words font-semibold text-secondary"
          >
            {destination.name}
          </span>
        </nav>

        <p className="text-sm font-bold uppercase tracking-widest text-secondary">
          India Tours · {destination.name}
        </p>

        <h1 className="mt-4 max-w-3xl font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          {destination.heroTitle}
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base lg:text-lg">
          {destination.heroDescription}
        </p>

        <a
          href="#destination-packages"
          className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-white transition hover:bg-secondary-dark"
        >
          Explore Packages ↓
        </a>
      </div>
    </section>
  );
}
