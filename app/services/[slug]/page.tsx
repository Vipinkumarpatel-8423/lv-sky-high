
import { notFound } from "next/navigation";
import ServiceDetails from "@/components/services/ServiceDetails";
import { getTravelService, travelServices } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return travelServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getTravelService(slug);

  if (!service) {
    return { title: "Service Not Found | LV SKY HIGH" };
  }

  return {
    title: `${service.title} | LV SKY HIGH`,
    description: service.heroDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getTravelService(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetails service={service} />;
}
