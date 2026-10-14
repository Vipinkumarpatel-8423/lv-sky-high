
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { honeymoonPackages } from "@/data/honeymoon";

import HoneymoonPackageHero from "@/components/honeymoon/details/HoneymoonPackageHero";
import TripOverview from "@/components/honeymoon/details/TripOverview";
import TourItinerary from "@/components/honeymoon/details/TourItinerary";
import PackageInclusions from "@/components/honeymoon/details/PackageInclusions";
import PackageBookingCTA from "@/components/honeymoon/details/PackageBookingCTA";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return honeymoonPackages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const pkg = honeymoonPackages.find(
    (item) => item.slug === slug
  );

  if (!pkg) {
    return {
      title: "Package Not Found | LV Sky High",
    };
  }

  return {
    title: `${pkg.title} | LV Sky High`,
    description: pkg.description,
  };
}

export default async function HoneymoonPackagePage({
  params,
}: Props) {
  const { slug } = await params;

  const pkg = honeymoonPackages.find(
    (item) => item.slug === slug
  );

  if (!pkg) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <HoneymoonPackageHero pkg={pkg} />

      <TripOverview pkg={pkg} />

      <TourItinerary pkg={pkg} />

      <PackageInclusions pkg={pkg} />

      <PackageBookingCTA pkg={pkg} />
    </main>
  );
}
