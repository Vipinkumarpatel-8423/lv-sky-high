
const services = [
  {
    title: "International Flights",
    description: "Explore flight options for your next international journey.",
  },
  {
    title: "Hotel Bookings",
    description: "Find accommodation options to suit your travel plans.",
  },
  {
    title: "Visa Assistance",
    description: "Get guidance on visa requirements and documentation.",
  },
];

export default function InternationalServices() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-dark sm:text-3xl">
          Travel Services
        </h2>

        <p className="mt-2 text-sm text-muted">
          Everything you need to plan your international trip.
        </p>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-border bg-light p-5 transition hover:shadow-md"
            >
              <h3 className="font-bold text-dark">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
