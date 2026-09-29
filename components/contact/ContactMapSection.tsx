"use client";

const address =
  "First Floor, Chandigarh City Centre, B-44, W VIP Rd, Zirakpur, Punjab 140603";

const phone = "+91 7988522589";

export default function ContactMapSection() {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <section
      id="location"
      className="w-full overflow-hidden bg-white"
    >
      <div className="relative h-[420px] w-full sm:h-[480px] lg:h-[520px]">
        {/* Google Map */}
        <iframe
          src={mapUrl}
          title="LV SKY HIGH Location"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Address Card */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-4 sm:p-6 lg:left-8 lg:top-8 lg:right-auto lg:bottom-auto lg:max-w-[360px] lg:p-0">
          <div className="pointer-events-auto rounded-2xl border border-border bg-white/95 p-5 shadow-[0_15px_45px_rgba(20,33,61,0.16)] backdrop-blur-md sm:p-6">
            {/* Location Icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white shadow-md">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
              >
                <path d="M20 10.5C20 15.5 12 21 12 21S4 15.5 4 10.5a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10.5" r="2.5" />
              </svg>
            </div>

            {/* Business Name */}
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Visit Us
            </p>

            <h2 className="mt-1 font-heading text-xl font-bold text-dark sm:text-2xl">
              LV SKY HIGH
            </h2>

            {/* Address */}
            <p className="mt-3 font-body text-sm leading-6 text-muted">
              {address}
            </p>

            {/* Divider */}
            <div className="my-4 h-px w-full bg-border" />

            {/* Phone */}
            <a
              href="tel:+917988522589"
              className="flex items-center gap-3 font-heading text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"
                  />
                </svg>
              </span>

              {phone}
            </a>

            {/* Directions Button */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-heading text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-lg"
            >
              Get Directions

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 6l6 6-6 6"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom gradient on mobile */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/30 to-transparent lg:hidden" />
      </div>
    </section>
  );
}
