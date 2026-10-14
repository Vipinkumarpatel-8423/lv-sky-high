
import { Heart, Users, UserRound } from "lucide-react";
import type { DestinationInfo } from "@/data/indiaTours";

export default function DestinationHighlights({
  destination,
}: {
  destination: DestinationInfo;
}) {
  const items = [
    {
      title: `${destination.name} Honeymoon Packages`,
      description: destination.honeymoonText,
      Icon: Heart,
    },
    {
      title: `${destination.name} Family Packages`,
      description: destination.familyText,
      Icon: Users,
    },
    {
      title: `${destination.name} Group Tours`,
      description: destination.groupText,
      Icon: UserRound,
    },
  ];

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {items.map(({ title, description, Icon }) => (
          <article
            key={title}
            className="flex gap-4 rounded-xl border border-border bg-white p-5 transition hover:shadow-md"
          >
            <Icon className="h-6 w-6 shrink-0 text-secondary" />

            <div>
              <h3 className="font-semibold text-dark">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
