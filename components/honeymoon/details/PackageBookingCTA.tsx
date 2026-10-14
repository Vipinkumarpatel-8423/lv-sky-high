
import type { HoneymoonPackage } from "@/data/honeymoon";

type Props = {
  pkg: HoneymoonPackage;
};

export default function PackageBookingCTA({ pkg }: Props) {
  const message =
    `Hello LV Sky High! I want to enquire about ${pkg.title}, ${pkg.destination}, ${pkg.duration}. Please confirm current pricing, availability and package inclusions.`;

  const whatsappUrl =
    `https://wa.me/917988522589?text=${encodeURIComponent(message)}`;

  return (
    <section className="bg-light px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading text-2xl font-bold text-dark sm:text-3xl lg:text-4xl">
          Ready to Book This Trip?
        </h2>

        <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
          Talk to a travel expert to confirm dates, pricing and
          any customisation you would like.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-green-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-600"
          >
            WhatsApp Us
          </a>

          <a
            href="tel:7988522589"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-dark px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-dark"
          >
            Call a Travel Expert
          </a>
        </div>
      </div>
    </section>
  );
}
