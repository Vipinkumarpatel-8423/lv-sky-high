import AboutSection from "@/components/about/AboutSection";
import BestActivities from "@/components/home/BestActivities";
import Hero from "@/components/home/Hero";
import PopularDestinations from "@/components/home/PopularDestinations";
import WhyChooseUs from "@/components/home/WhyChooseUs";
// import RecommendedPlaces from "@/components/home/RecommendedPlaces";
import Achievements from "@/components/achievement/Achievements";
import TravelSpecialist from "@/components/home/TravelSpecialist";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <BestActivities />
      <PopularDestinations />
      <WhyChooseUs />
      {/* <RecommendedPlaces /> */}
      <Achievements/>
       <TravelSpecialist />
    </main>
  );
}
