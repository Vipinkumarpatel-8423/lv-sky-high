
import type { DestinationDetail } from "@/data/internationalDetails";

type Props = {
  destination: DestinationDetail;
};

export default function DestinationInfo({ destination }: Props) {
  const information = [
    {
      title: `Why Visit ${destination.name}?`,
      description: destination.whyVisit,
    },
    {
      title: `Best Time to Visit ${destination.name}`,
      description: destination.bestTime,
    },
    {
      title: "How Many Days Are Enough?",
      description: destination.duration,
    },
    {
      title: `How to Reach ${destination.name}`,
      description: destination.howToReach,
    },
  ];

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Destination Guide
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-dark sm:text-3xl">
            Discover {destination.name}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {information.map((item, index) => (
            <article
              key={item.title}
              className="rounded-xl border border-border bg-light p-5 transition hover:shadow-md sm:p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-sm font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-heading text-lg font-bold text-dark sm:text-xl">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm leading-7 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
