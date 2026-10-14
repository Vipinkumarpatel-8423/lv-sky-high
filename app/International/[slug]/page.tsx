
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { internationalDetails } from "@/data/internationalDetails";

import DestinationHero from "@/components/international/details/DestinationHero";
import DestinationInfo from "@/components/international/details/DestinationInfo";
import DestinationPackages from "@/components/international/details/DestinationPackages";
import DestinationCategories from "@/components/international/details/DestinationCategories";
import DestinationFAQ from "@/components/international/details/DestinationFAQ";
import InternationalCTA from "@/components/international/InternationalCTA";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Generate destination routes
export function generateStaticParams() {
  return internationalDetails.map((destination) => ({
    slug: destination.slug,
  }));
}

// Dynamic SEO metadata
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const destination = internationalDetails.find(
    (item) => item.slug === slug
  );

  if (!destination) {
    return {
      title: "Destination Not Found | LV Sky High",
    };
  }

  return {
    title: `${destination.title} | LV Sky High`,
    description: destination.description,
  };
}

// Dynamic destination detail page
export default async function DestinationDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const destination = internationalDetails.find(
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

      <DestinationCategories destination={destination} />

      <DestinationFAQ destination={destination} />

      <InternationalCTA />
    </main>
  );
}
