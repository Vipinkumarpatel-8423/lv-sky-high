import AboutSection from "@/components/about/AboutSection";
import BestActivities from "@/components/home/BestActivities";
import Hero from "@/components/home/Hero";
import PopularDestinations from "@/components/home/PopularDestinations";
import WhyChooseUs from "@/components/home/WhyChooseUs";
// import RecommendedPlaces from "@/components/home/RecommendedPlaces";
import Achievements from "@/components/achievement/Achievements";
import TravelSpecialist from "@/components/home/TravelSpecialist";
import IndiaTourDestinations from "@/components/indiaTours/IndiaTourDestinations";
import InternationalDestinations from "@/components/international/InternationalDestinations";
import ServicesSection from "@/components/services/ServicesSection";
import HomeFAQ from "@/components/home/HomeFAQ";
import HolidayTypes from "@/components/home/HolidayTypes";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HolidayTypes/>
      <AboutSection />

      <ServicesSection />
      <IndiaTourDestinations />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-secondary sm:text-base">
              Explore Beyond Borders
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl lg:text-5xl">
              Discover the World
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              Explore unforgettable international destinations with thoughtfully
              planned holiday packages from LV SKY HIGH.
            </p>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-secondary" />
          </div>

          <InternationalDestinations />
        </div>
      </section>

      <BestActivities />
      <PopularDestinations />
      <WhyChooseUs />
      {/* <RecommendedPlaces /> */}
      <Achievements/>
       {/* <TravelSpecialist /> */}
       <HomeFAQ />
    </main>
  );
}
