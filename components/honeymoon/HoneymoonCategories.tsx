
import { Heart, Users, UsersRound } from "lucide-react";

const PHONE = "917988522589";

const categories = [
  {
    title: "India Honeymoon Packages",
    description:
      "Explore couple-focused itineraries across India's romantic destinations.",
    icon: Heart,
    enquiry: "Honeymoon Packages",
  },
  {
    title: "India Family Packages",
    description:
      "Discover family holidays with destinations and experiences for different age groups.",
    icon: UsersRound,
    enquiry: "Family Packages",
  },
  {
    title: "India Group Tours",
    description:
      "Discuss group travel options and customized itineraries with our travel team.",
    icon: Users,
    enquiry: "Group Tours",
  },
];

export default function HoneymoonCategories() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-7 font-heading text-2xl font-bold text-dark sm:text-3xl">
          Explore More Travel Options
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            const message =
              `Hello LV Sky High! Please share details for ${category.enquiry}.`;

            const url =
              `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

            return (
              <article
                key={category.title}
                className="flex gap-4 rounded-xl border border-border bg-white p-5 transition hover:border-primary hover:shadow-md"
              >
                <Icon
                  aria-hidden="true"
                  className="h-7 w-7 shrink-0 text-secondary"
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
                    className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
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
