
import Link from "next/link";
import { honeymoonPackages } from "@/data/honeymoon";

const PHONE = "917988522589";

export default function HoneymoonPackages() {
  return (
    <section className="bg-light px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-2xl font-bold text-dark sm:text-3xl">
          India Honeymoon Packages
        </h2>

        <p className="mt-2 text-sm text-muted sm:text-base">
          Explore romantic holidays across India.
          Contact our team for current pricing and availability.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {honeymoonPackages.map((pkg) => {
            const message =
              `Hello LV Sky High! I am interested in ${pkg.title} for ${pkg.destination}. Please share the itinerary, pricing and availability.`;

            const whatsappUrl =
              `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

            return (
              <article
                key={pkg.id}
                className="flex h-full flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-dark">
                  {pkg.title}
                </h3>

                <p className="mt-1 text-sm text-muted">
                  {pkg.destination}
                </p>

                <p className="mt-2 text-sm font-semibold text-primary">
                  {pkg.duration}
                </p>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {pkg.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  <Link
                    href={`/honeymoon/${pkg.slug}`}
                    className="text-sm font-bold text-secondary hover:text-secondary-dark"
                  >
                    View Details →
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-green-200 bg-green-50 px-3 py-2 text-xs font-semibold text-green-700 hover:bg-green-100"
                  >
                    WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
