
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Personalised Itineraries",
  "Ground Offices in 5 Indian Cities",
  "WhatsApp & Phone Support",
  "38+ Destinations Planned",
];

export default function InternationalHero() {
  return (
    <section className="relative isolate flex min-h-[440px] items-center overflow-hidden bg-dark px-4 py-14 sm:min-h-[480px] sm:px-6 sm:py-16 lg:min-h-[500px] lg:px-8 lg:py-20 mb-10">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/images/international/international-hero.jpg')] bg-cover bg-center"
      />

      {/* Dark overlay for readable text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-dark/85 via-primary-dark/65 to-dark/40"
      />

      {/* Content */}
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-secondary sm:text-sm">
            India &amp; International Holidays
          </p>

          <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Explore India.{" "}
            <span className="text-secondary">
              Discover the World.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7 lg:text-lg">
            Customised India and international holiday packages,
            family holidays, honeymoons, group tours and pilgrimage
            trips — planned by a real travel expert, not a booking
            engine.
          </p>

          {/* Travel highlights */}
          <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-5">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-2.5 text-sm font-medium text-white sm:text-base"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="h-[18px] w-[18px] shrink-0 text-secondary"
                  strokeWidth={2.8}
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
