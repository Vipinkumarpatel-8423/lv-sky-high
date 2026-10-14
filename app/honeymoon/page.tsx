
import HoneymoonHero from "@/components/honeymoon/HoneymoonHero";
import HoneymoonInfo from "@/components/honeymoon/HoneymoonInfo";
import HoneymoonPackages from "@/components/honeymoon/HoneymoonPackages";
import HoneymoonCategories from "@/components/honeymoon/HoneymoonCategories";
import HoneymoonFAQ from "@/components/honeymoon/HoneymoonFAQ";
import HoneymoonCTA from "@/components/honeymoon/HoneymoonCTA";

export default function HoneymoonPage() {
  return (
    <main className="min-h-screen bg-white">
      <HoneymoonHero />

      <HoneymoonInfo />

      <HoneymoonPackages />

      <HoneymoonCategories />

      <HoneymoonFAQ />

      <HoneymoonCTA />
    </main>
  );
}
