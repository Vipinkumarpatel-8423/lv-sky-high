
import { internationalDestinations } from "@/data/international";
import DestinationCard from "./DestinationCard";

export default function InternationalDestinations() {
  return (
    <section
      aria-label="International holiday destinations"
      className="bg-white px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {internationalDestinations.map((destination) => (
            <DestinationCard
              key={destination.slug}
              destination={destination}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
