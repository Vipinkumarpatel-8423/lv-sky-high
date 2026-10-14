
import InternationalHero from "@/components/international/InternationalHero";
import InternationalDestinations from "@/components/international/InternationalDestinations";
import PlanYourTrip from "@/components/international/PlanYourTrip";
import InternationalServices from "@/components/international/InternationalServices";
import InternationalCTA from "@/components/international/InternationalCTA";

export default function InternationalPage() {
  return (
    <main className="min-h-screen bg-white">
      <InternationalHero />

      <InternationalDestinations />

      <PlanYourTrip />

      <InternationalServices />

       <InternationalCTA />
    </main>
  );
}
