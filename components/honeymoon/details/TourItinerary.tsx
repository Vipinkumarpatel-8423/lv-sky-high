
import type { HoneymoonPackage } from "@/data/honeymoon";

type Props = {
  pkg: HoneymoonPackage;
};

export default function TourItinerary({ pkg }: Props) {
  return (
    <section className="bg-light px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-7 font-heading text-2xl font-bold text-dark sm:text-3xl">
          Tour Itinerary
        </h2>

        <div className="space-y-6">
          {pkg.itinerary.map((item) => (
            <article
              key={item.day}
              className="relative border-l-2 border-border pl-5 sm:pl-7"
            >
              <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-secondary ring-4 ring-secondary-light" />

              <p className="text-xs font-bold uppercase tracking-wide text-primary">
                Day {String(item.day).padStart(2, "0")}
              </p>

              <h3 className="mt-1 font-heading text-lg font-bold text-dark sm:text-xl">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-muted sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
