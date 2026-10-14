
import Link from "next/link";

export default function IndiaToursCTA() {
  const message =
    "Hello LV Sky High! I need help choosing an India tour destination. Please suggest packages according to my budget and travel duration.";

  const whatsappUrl =
    `https://wa.me/917988522589?text=${encodeURIComponent(message)}`;

  return (
    <section className="bg-light px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-2xl font-bold text-dark sm:text-3xl lg:text-4xl">
          Not Sure Which Destination?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
          Tell us your budget and how many days you have,
          and our travel team will help you explore suitable options.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-white transition hover:bg-secondary-dark"
          >
            Get in Touch
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-green-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-600"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
