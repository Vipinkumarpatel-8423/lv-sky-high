
import Image from "next/image";
import Link from "next/link";

export default function IndiaToursHero() {
  return (
    <section className="relative isolate flex min-h-[380px] items-center overflow-hidden bg-dark px-4 py-16 sm:min-h-[440px] sm:px-6 lg:min-h-[500px] lg:px-8">
      <Image
        src="/images/india-tours/hero.jpg"
        alt="Discover India's mountains, landscapes and travel destinations"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark/90 via-primary-dark/70 to-dark/35" />

      <div className="mx-auto w-full max-w-6xl">
        {/* Breadcrumb Navigation */}
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

          <span
            aria-current="page"
            className="font-semibold text-secondary"
          >
            India Tours
          </span>
        </nav>

        <p className="text-xs font-bold uppercase tracking-[0.14em] text-secondary sm:text-sm">
          Discover India with LV Sky High
        </p>

        <h1 className="mt-4 max-w-3xl font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          Explore India.
          <span className="block text-secondary">
            Discover Extraordinary Journeys.
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base lg:text-lg">
          From Himalayan escapes and peaceful hill stations to
          beautiful beaches, royal heritage and scenic landscapes,
          discover India with personalized holiday planning.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-white transition hover:bg-secondary-dark"
          >
            Plan Your India Trip →
          </Link>

          <a
            href={`https://wa.me/917988522589?text=${encodeURIComponent(
              "Hello LV Sky High! I would like to explore India tour packages. Please help me choose a destination."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
