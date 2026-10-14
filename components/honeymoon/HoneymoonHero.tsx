
import Image from "next/image";
import Link from "next/link";

export default function HoneymoonHero() {
  return (
    <section className="relative isolate flex min-h-[400px] items-center overflow-hidden bg-dark px-4 py-14 sm:min-h-[460px] sm:px-6 lg:min-h-[500px] lg:px-8">
      <Image
        src="/images/honeymoon/honeymoon-hero.jpg"
        alt="Romantic honeymoon destination in India"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark/90 via-primary-dark/70 to-dark/35" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-secondary sm:text-sm">
            Domestic Honeymoon Holidays
          </p>

          <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Discover Romance.
            <span className="block text-secondary">
              Create Memories Together.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base lg:text-lg">
            Explore romantic honeymoon packages across Kerala,
            Goa, Manali, Shimla, Dharamshala and Andaman.
            Personalized holiday planning for your special journey.
          </p>

          <ul className="mt-6 grid gap-3 text-sm text-white sm:grid-cols-2 sm:gap-4">
            <li>✓ Couple-friendly itineraries</li>
            <li>✓ Personalized travel planning</li>
            <li>✓ WhatsApp &amp; phone assistance</li>
            <li>✓ Multiple romantic destinations</li>
          </ul>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-white transition hover:bg-secondary-dark"
          >
            Plan Your Honeymoon →
          </Link>
        </div>
      </div>
    </section>
  );
}
