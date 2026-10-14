
import { Heart, Users, UsersRound } from "lucide-react";
import type { DestinationDetail } from "@/data/internationalDetails";

type Props = {
  destination: DestinationDetail;
};

export default function DestinationCategories({ destination }: Props) {
  const categories = [
    {
      title: `${destination.name} Honeymoon Packages`,
      description: `Plan a romantic holiday in ${destination.name} with a personalized itinerary.`,
      icon: Heart,
      enquiry: "Honeymoon",
    },
    {
      title: `${destination.name} Family Packages`,
      description: `Explore family-friendly attractions and comfortable holiday options in ${destination.name}.`,
      icon: UsersRound,
      enquiry: "Family Holiday",
    },
    {
      title: `${destination.name} Group Tours`,
      description: `Plan a memorable group holiday in ${destination.name} with flexible travel arrangements.`,
      icon: Users,
      enquiry: "Group Tour",
    },
  ];

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-7 font-heading text-2xl font-bold text-dark sm:text-3xl">
          Travel Your Way
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            const message = `Hello LV Sky High! I am interested in ${category.enquiry} packages for ${destination.name}. Please share details and pricing.`;

            const url = `https://wa.me/917988522589?text=${encodeURIComponent(message)}`;

            return (
              <article
                key={category.title}
                className="flex h-full gap-4 rounded-xl border border-border bg-white p-5 transition hover:border-primary hover:shadow-md"
              >
                <Icon
                  aria-hidden="true"
                  className="mt-1 h-7 w-7 shrink-0 text-secondary"
                  strokeWidth={1.8}
                />

                <div>
                  <h3 className="font-bold text-dark">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {category.description}
                  </p>

                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-primary hover:text-primary-dark"
                  >
                    Enquire Now →
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
