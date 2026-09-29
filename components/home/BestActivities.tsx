"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bike,
  Fish,
} from "lucide-react";

interface Activity {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const activities: Activity[] = [
  {
    id: 1,
    title: "Tent Camping",
    description:
      "Our personalized itinerary meticulously designed to cater to your personalized itineraries are meticulously.",
    icon: Bike,
  },
  {
    id: 2,
    title: "Fishing & Boat",
    description:
      "Our personalized itinerary meticulously designed to cater to your personalized itineraries are meticulously.",
    icon: Fish,
  },
  {
    id: 3,
    title: "Mountain Trekking",
    description:
      "Explore breathtaking mountain trails with carefully planned experiences made around you.",
    icon: Bike,
  },
  {
    id: 4,
    title: "Beach Adventure",
    description:
      "Enjoy unforgettable beach experiences, water activities and beautiful coastal destinations.",
    icon: Fish,
  },
  {
    id: 5,
    title: "City Exploration",
    description:
      "Discover iconic places, local culture and unforgettable experiences across the world.",
    icon: Bike,
  },
  {
    id: 6,
    title: "Water Sports",
    description:
      "Add excitement to your holiday with thrilling water sports and memorable adventures.",
    icon: Fish,
  },
];

export default function BestActivities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /*
   * ============================
   * RESPONSIVE CARD COUNT
   * ============================
   */

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * ============================
   * SLIDER SETTINGS
   * ============================
   */

  const maxIndex = Math.max(activities.length - visibleCards, 0);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0;
      }

      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex;
      }

      return prev - 1;
    });
  };

  /*
   * ============================
   * AUTO SLIDE
   * ============================
   */

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, visibleCards, maxIndex]);

  /*
   * ============================
   * FIX INDEX ON RESPONSIVE
   * ============================
   */

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#faf7f5]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        {/* =========================================
            MAIN CONTENT
        ========================================= */}

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.5fr] lg:gap-12">
          {/* =====================================
              LEFT CONTENT
          ===================================== */}

          <div className="max-w-[390px]">
            <p
              className="
                mb-3
                font-[var(--font-script)]
                text-[24px]
                leading-none
                text-secondary
                sm:text-[27px]
              "
            >
              Our Best Activities
            </p>

            <h2
              className="
                text-4xl
                font-bold
                leading-[1.08]
                tracking-[-0.03em]
                text-dark
                sm:text-[44px]
                lg:text-[46px]
              "
            >
              Explore Exceptional
              <br />
              Travel Benefits
            </h2>

            <p
              className="
                mt-6
                max-w-[350px]
                text-[14px]
                leading-6
                text-gray-500
                sm:text-[15px]
              "
            >
              Discover thoughtfully planned travel experiences, exciting
              activities and unforgettable moments designed around your
              journey.
            </p>

            {/* =================================
                SLIDER BUTTONS
            ================================= */}

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous activity"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-dark
                  shadow-sm
                  transition-all
                  duration-300
                  hover:bg-secondary
                  hover:text-white
                "
              >
                <ArrowLeft size={18} strokeWidth={1.7} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next activity"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-dark
                  shadow-sm
                  transition-all
                  duration-300
                  hover:bg-secondary
                  hover:text-white
                "
              >
                <ArrowRight size={18} strokeWidth={1.7} />
              </button>
            </div>
          </div>

          {/* =====================================
              RIGHT SLIDER
          ===================================== */}

          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="
                flex
                transition-transform
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
              "
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCards)
                }%)`,
              }}
            >
              {activities.map((activity) => {
                const Icon = activity.icon;

                return (
                  <div
                    key={activity.id}
                    className="
                      min-w-full
                      px-1.5
                      sm:px-2.5
                      md:min-w-[50%]
                    "
                  >
                    <article
                      className="
                        group
                        flex
                        min-h-[280px]
                        flex-col
                        rounded-[14px]
                        bg-white
                        p-6
                        shadow-[0_8px_35px_rgba(0,0,0,0.04)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                        sm:min-h-[300px]
                        sm:p-7
                      "
                    >
                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-lg
                          bg-secondary/10
                          text-secondary
                        "
                      >
                        <Icon size={21} strokeWidth={1.7} />
                      </div>

                      {/* Title */}
                      <h3
                        className="
                          mt-7
                          text-[17px]
                          font-semibold
                          text-dark
                          sm:text-[18px]
                        "
                      >
                        {activity.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="
                          mt-4
                          max-w-[270px]
                          text-[14px]
                          leading-6
                          text-gray-500
                        "
                      >
                        {activity.description}
                      </p>

                      {/* View Details */}
                      <button
                        type="button"
                        className="
                          mt-auto
                          flex
                          w-fit
                          items-center
                          gap-2
                          border-b
                          border-secondary
                          pb-1
                          text-[13px]
                          font-medium
                          text-secondary
                          transition-all
                          duration-300
                          group-hover:gap-3
                        "
                      >
                        View Details
                        <ArrowRight size={15} strokeWidth={1.5} />
                      </button>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}

        <div
          className="
            mt-16
            flex
            flex-col
            items-center
            justify-between
            gap-6
            rounded-[12px]
            bg-secondary/20
            px-6
            py-5
            sm:px-8
            lg:mt-20
            lg:flex-row
          "
        >
          {/* People / Avatars */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                "/images/activities/person-1.jpg",
                "/images/activities/person-2.jpg",
                "/images/activities/person-3.jpg",
                "/images/activities/person-4.jpg",
              ].map((image, index) => (
                <div
                  key={index}
                  className="
                    h-10
                    w-10
                    overflow-hidden
                    rounded-full
                    border-2
                    border-white
                    bg-gray-200
                  "
                >
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <p className="text-center text-[13px] text-dark sm:text-left sm:text-[14px]">
              Partnering with you to transform your vision into reality.
            </p>
          </div>

          {/* CTA */}
          <a
            href="/contact"
            className="
              flex
              min-w-[145px]
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
              hover:gap-3
              hover:shadow-lg
            "
          >
            Contact Us Now
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}