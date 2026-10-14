
export default function HoneymoonInfo() {
  const sections = [
    {
      title: "Why Visit India for Your Honeymoon?",
      description:
        "Discover romantic backwaters and hill stations in Kerala, beautiful beaches in Goa, mountain escapes in Manali and Shimla, and tropical island experiences in Andaman.",
    },
    {
      title: "Best Time to Visit",
      description:
        "The ideal season depends on your destination. Kerala and Goa have seasonal weather patterns, while Himachal destinations offer different experiences across summer and winter.",
    },
    {
      title: "How Many Days Are Enough?",
      description:
        "A 5–7 night honeymoon is a useful starting point for many itineraries. The ideal duration depends on your destination, travel time and preferred pace.",
    },
    {
      title: "How to Reach Your Honeymoon Destination",
      description:
        "Travel options vary by destination and departure city. Your itinerary can include suitable flight, train, road or transfer arrangements.",
    },
  ];

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
          Your Honeymoon Guide
        </p>

        <div className="mt-5 space-y-6 sm:space-y-7">
          {sections.map((section) => (
            <article
              key={section.title}
              className="border-b border-border pb-5 last:border-0"
            >
              <h2 className="font-heading text-xl font-bold text-dark sm:text-2xl">
                {section.title}
              </h2>

              <p className="mt-2 max-w-5xl text-sm leading-7 text-muted sm:text-base">
                {section.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
