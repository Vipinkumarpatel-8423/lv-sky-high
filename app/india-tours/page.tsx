
import IndiaToursHero from "@/components/indiaTours/IndiaToursHero";
import IndiaTourDestinations from "@/components/indiaTours/IndiaTourDestinations";
import IndiaToursCTA from "@/components/indiaTours/IndiaToursCTA";

export default function IndiaToursPage() {
  return (
    <main className="min-h-screen bg-white">
      <IndiaToursHero />

      <IndiaTourDestinations />

      <IndiaToursCTA />
    </main>
  );
}
