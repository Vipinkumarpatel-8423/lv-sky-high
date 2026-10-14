
const WHATSAPP_NUMBER = "917988522589";

export default function PlanYourTrip() {
  const message =
    "Hello LV Sky High! I want to plan a customized international trip. Please help me with destinations, itinerary and pricing.";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  const services = [
    { icon: "✈", label: "Flights" },
    { icon: "▦", label: "Hotels" },
    { icon: "▤", label: "Visa Assistance" },
    { icon: "⌖", label: "Sightseeing" },
    { icon: "▰", label: "Transfers" },
    { icon: "⬡", label: "Travel Insurance" },
  ];

  return (
    <section className="bg-light px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-2xl bg-dark p-6 text-white sm:p-8 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:p-11">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Can&apos;t Find the Right Package?
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-6 text-white/80">
            Tell our travel expert where you want to go. We&apos;ll
            help you plan a trip around your dates, budget and group size.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-white transition hover:bg-secondary-dark"
          >
            Plan Your Trip
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span
                aria-hidden="true"
                className="text-3xl text-secondary"
              >
                {service.icon}
              </span>
              <span className="text-xs font-medium sm:text-sm">
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
