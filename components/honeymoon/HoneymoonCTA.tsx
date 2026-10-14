
import Link from "next/link";

const PHONE = "7988522589";
const WHATSAPP = `91${PHONE}`;

export default function HoneymoonCTA() {
  const message =
    "Hello LV Sky High! I want to plan a honeymoon trip. Please share suitable destinations, packages and pricing.";

  const whatsappUrl =
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

  return (
    <section className="bg-light px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading text-2xl font-bold text-dark sm:text-3xl lg:text-4xl">
          Ready to Plan Your Honeymoon?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
          Tell us your dates and group size — our travel experts
          will help you plan the right honeymoon itinerary.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-white transition hover:bg-secondary-dark"
          >
            Plan My Trip
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-green-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-600"
          >
            WhatsApp Us
          </a>

          <a
            href={`tel:${PHONE}`}
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-dark px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-dark"
          >
            Call a Travel Expert
          </a>
        </div>
      </div>
    </section>
  );
}
