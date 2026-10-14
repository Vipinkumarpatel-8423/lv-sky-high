
import Image from "next/image";
import Link from "next/link";
import type { HoneymoonPackage } from "@/data/honeymoon";

type Props = {
  pkg: HoneymoonPackage;
};

export default function HoneymoonPackageHero({ pkg }: Props) {
  const message =
    `Hello LV Sky High! I would like to enquire about ${pkg.title} (${pkg.duration}). Please share the complete itinerary, pricing and availability.`;

  const whatsappUrl =
    `https://wa.me/917988522589?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative isolate flex min-h-[360px] items-center overflow-hidden bg-dark px-4 py-14 sm:min-h-[420px] sm:px-6 lg:min-h-[470px] lg:px-8">
      <Image
        src={pkg.image}
        alt={pkg.title}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark/90 via-primary-dark/70 to-dark/40" />

      <div className="mx-auto w-full max-w-6xl">
        <Link
          href="/honeymoon"
          className="text-sm font-medium text-white/90 transition hover:text-secondary"
        >
          ← All Honeymoon Packages
        </Link>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.14em] text-secondary sm:text-sm">
          LV Sky High · Honeymoon Holidays
        </p>

        <h1 className="mt-3 max-w-3xl font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          {pkg.title}
        </h1>

        <p className="mt-3 text-sm font-semibold text-white sm:text-base">
          {pkg.destination} <span className="mx-2 text-secondary">•</span>
          {pkg.duration}
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
          {pkg.description}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-white transition hover:bg-secondary-dark"
        >
          Enquire About This Trip →
        </a>
      </div>
    </section>
  );
}
