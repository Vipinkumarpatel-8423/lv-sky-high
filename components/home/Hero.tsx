"use client";


import SearchBox from "@/components/home/SearchBox";

import {
  CalendarDays,
  ChevronDown,
  MapPin,
  Search,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-visible">
      {/* ================= HERO ================= */}
      <div
        className="
          relative
          min-h-[620px]
          overflow-visible
          bg-cover
          bg-center
          bg-no-repeat

          sm:min-h-[600px]
          md:min-h-[580px]
          lg:min-h-[560px]
        "
        style={{
          backgroundImage: "url('/images/hero/travel-hero.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-dark/55" />

        {/* Hero Content */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[620px]
            w-full
            max-w-[1180px]
            items-center
            px-5
            pb-[150px]
            pt-20

            sm:min-h-[600px]
            sm:px-8
            sm:pb-[145px]
            sm:pt-24

            md:pb-[135px]

            lg:min-h-[560px]
            lg:px-5
            lg:pb-[125px]
            lg:pt-24
          "
        >
          <div
            className="
              w-full
              max-w-[650px]
            "
          >
            {/* Small Heading */}
            <p
              className="
                mb-3
                font-script
                text-[15px]
                italic
                text-secondary

                sm:text-[18px]
              "
            >
              Experience Unmatched Delight With Us
            </p>

            {/* Main Heading */}
            <h1
              className="
                max-w-[650px]
                text-[34px]
                font-bold
                leading-[1.08]
                tracking-tight
                text-white

                xs:text-[36px]
                sm:text-[52px]
                md:text-[56px]
                lg:text-[60px]
              "
            >
              Where Exceptional
              <br className="hidden sm:block" />
              {" "}Memories Begin
            </h1>

            {/* Description */}
            <p
              className="
                my-4
                max-w-[550px]
                text-[14px]
                leading-6
                text-white/85

                sm:text-[16px]
                sm:leading-7
              "
            >
              Discover unforgettable destinations, romantic getaways
              and memorable holidays planned around you.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-7
                flex
                w-full
                flex-row
                gap-3

                xs:flex-row
                xs:flex-wrap
                xs:gap-4
              "
            >
              <a
                href="/contact"
                className="
                  inline-flex
                  min-h-[46px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-secondary
                  px-6
                  py-3
                  text-[13px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:opacity-90

                  xs:w-auto
                "
              >
                Lets Get Started
                <span>→</span>
              </a>

              <a
                href="/about"
                className="
                  inline-flex
                  min-h-[46px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white
                  px-6
                  py-3
                  text-[13px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-dark

                  xs:w-auto
                "
              >
                Discover More
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= SEARCH BOX ================= */}
        <SearchBox />
      </div>

      {/* Space for overlapping form */}
      <div
        className="
          h-[145px]

          sm:h-[125px]

          md:h-[110px]

          lg:h-[85px]
        "
      />
    </section>
  );
}

