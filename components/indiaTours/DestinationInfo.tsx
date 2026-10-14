
import type { DestinationInfo as DestinationInfoType } from "@/data/indiaTours";

export default function DestinationInfo({
  destination,
}: {
  destination: DestinationInfoType;
}) {
  const sections = [
    {
      title: `Why Visit ${destination.name}?`,
      text: destination.whyVisit,
    },
    {
      title: `Best Time to Visit ${destination.name}`,
      text: destination.bestTime,
    },
    {
      title: "How Many Days Are Enough?",
      text: destination.idealDuration,
    },
    {
      title: `How to Reach ${destination.name}`,
      text: destination.howToReach,
    },
  ];

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-5xl space-y-6">
        {sections.map((section) => (
          <article key={section.title}>
            <h2 className="font-heading text-xl font-bold text-dark sm:text-2xl lg:text-3xl">
              {section.title}
            </h2>

            <p className="mt-2 text-sm leading-7 text-muted sm:text-base">
              {section.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
