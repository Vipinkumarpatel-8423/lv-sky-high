
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { travelServices } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="bg-light py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
            Travel Made Easier
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Our Services
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Everything that goes into a smooth trip, arranged alongside your
            package.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {travelServices.map((service) => (
            <article
              key={service.slug}
              className="flex h-full flex-col rounded-2xl border border-border/70 bg-white p-5 shadow-[0_8px_30px_rgba(20,33,61,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(20,33,61,0.10)] sm:p-6"
            >
              <h3 className="text-lg font-bold leading-snug text-dark">
                {service.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                {service.shortDescription}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-flex min-h-12 w-full items-center justify-between gap-3 rounded-lg border border-primary px-4 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Learn More
                <ArrowUpRight size={18} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
