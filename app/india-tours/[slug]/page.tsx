
import { notFound } from "next/navigation";
import { destinationDetails } from "@/data/indiaTours";

import DestinationHero from "@/components/indiaTours/DestinationHero";
import DestinationInfo from "@/components/indiaTours/DestinationInfo";
import DestinationPackages from "@/components/indiaTours/DestinationPackages";
import DestinationHighlights from "@/components/indiaTours/DestinationHighlights";
import DestinationFAQ from "@/components/indiaTours/DestinationFAQ";
import DestinationCTA from "@/components/indiaTours/DestinationCTA";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return destinationDetails.map((destination) => ({
    slug: destination.slug,
  }));
}

export default async function IndiaDestinationPage({ params }: Props) {
  const { slug } = await params;

  const destination = destinationDetails.find(
    (item) => item.slug === slug
  );

  if (!destination) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <DestinationHero destination={destination} />

      <DestinationInfo destination={destination} />

      <DestinationPackages destination={destination} />

      <DestinationHighlights destination={destination} />

      <DestinationFAQ destination={destination} />

      <DestinationCTA destination={destination} />
    </main>
  );
}
