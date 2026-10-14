
import type { HoneymoonPackage } from "@/data/honeymoon";

type Props = {
  pkg: HoneymoonPackage;
};

export default function TripOverview({ pkg }: Props) {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-4xl rounded-xl border border-border bg-light p-5 sm:p-7">
        <h2 className="font-heading text-2xl font-bold text-dark sm:text-3xl">
          Trip Overview
        </h2>

        <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
          <strong className="text-dark">Duration:</strong>{" "}
          {pkg.duration}
        </p>

        <div className="mt-2 flex flex-wrap items-start gap-x-2 gap-y-1 text-sm leading-6 text-muted sm:text-base">
          <strong className="shrink-0 text-dark">Covered Places:</strong>

          <span>
            {pkg.coveredPlaces.map((place, index) => (
              <span key={place}>
                {index > 0 && (
                  <span className="mx-2 text-secondary">→</span>
                )}
                {place}
              </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
