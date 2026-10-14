"use client";

import { useEffect, useRef, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bike,
  Fish,
  X,
  Clock3,
  CalendarDays,
  Users,
  Lightbulb,
} from "lucide-react";



interface Activity {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  duration: string;
  bestTime: string;
  suitableFor: string;
  tips: string[];
}

const activities: Activity[] = [
  {
    id: 1,
    title: "Tent Camping",
    description:
      "Enjoy a memorable outdoor stay surrounded by nature, fresh air and scenic landscapes.",
    icon: Bike,
    duration: "1–2 days",
    bestTime: "Spring and autumn, depending on the destination",
    suitableFor: "Friends, couples and adventure lovers",
    tips: [
      "Carry comfortable clothing and suitable footwear.",
      "Check the weather before your trip.",
      "Choose a safe, designated camping location.",
    ],
  },
  {
    id: 2,
    title: "Fishing & Boat",
    description:
      "Relax by the water and enjoy boating or fishing experiences at scenic destinations.",
    icon: Fish,
    duration: "2–4 hours",
    bestTime: "Early morning or late afternoon, subject to local conditions",
    suitableFor: "Families, couples and nature lovers",
    tips: [
      "Follow local boating and fishing regulations.",
      "Wear a life jacket when boating.",
      "Check weather and water conditions beforehand.",
    ],
  },
  {
    id: 3,
    title: "Mountain Trekking",
    description:
      "Explore breathtaking mountain trails and discover beautiful views along the way.",
    icon: Bike,
    duration: "Half day to multiple days",
    bestTime: "Depends on the trail and local weather",
    suitableFor: "Nature lovers and adventure enthusiasts",
    tips: [
      "Wear proper trekking shoes.",
      "Carry water, snacks and essential supplies.",
      "Choose a trail that matches your fitness level.",
    ],
  },
  {
    id: 4,
    title: "Beach Adventure",
    description:
      "Enjoy coastal scenery, relaxing beach time and exciting seaside experiences.",
    icon: Fish,
    duration: "Half day to a full day",
    bestTime: "The destination's dry season, where applicable",
    suitableFor: "Families, couples and groups of friends",
    tips: [
      "Use sunscreen and stay hydrated.",
      "Follow beach safety flags and lifeguard instructions.",
      "Check local sea conditions before water activities.",
    ],
  },
  {
    id: 5,
    title: "City Exploration",
    description:
      "Discover iconic landmarks, local culture, food and memorable city experiences.",
    icon: Bike,
    duration: "1–2 days",
    bestTime: "Depends on the city's climate and events",
    suitableFor: "Families, couples and culture enthusiasts",
    tips: [
      "Plan your main attractions in advance.",
      "Wear comfortable walking shoes.",
      "Check local transport and attraction timings.",
    ],
  },
  {
    id: 6,
    title: "Water Sports",
    description:
      "Add excitement to your holiday with water-based adventures and coastal activities.",
    icon: Fish,
    duration: "1–3 hours",
    bestTime: "When local weather and water conditions are suitable",
    suitableFor: "Adventure lovers and groups",
    tips: [
      "Use the safety equipment provided.",
      "Follow your instructor's guidance.",
      "Check age, swimming and activity requirements in advance.",
    ],
  },
];


export default function BestActivities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

const [selectedActivity, setSelectedActivity] =
  useState<Activity | null>(null);


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

  
useEffect(() => {
  if (!selectedActivity) return;

  const previousOverflow = document.body.style.overflow;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setSelectedActivity(null);
    }
  };

  document.body.style.overflow = "hidden";
  window.addEventListener("keydown", handleKeyDown);

  return () => {
    document.body.style.overflow = previousOverflow;
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedActivity]);


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
  onClick={() => setSelectedActivity(activity)}
  aria-haspopup="dialog"
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


{selectedActivity && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-dark/60 p-3 backdrop-blur-sm sm:p-6"
    onClick={() => setSelectedActivity(null)}
  >
    <section
      role="dialog"
      aria-modal="true"
      aria-labelledby="activity-modal-title"
      onClick={(event) => event.stopPropagation()}
      className="relative my-auto max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl sm:rounded-3xl"
    >
      {/* Modal Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-gray-100 bg-white px-5 py-4 sm:px-7 sm:py-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Explore Experience
          </p>
          <h2
            id="activity-modal-title"
            className="mt-1 text-xl font-bold text-dark sm:text-2xl"
          >
            {selectedActivity.title}
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setSelectedActivity(null)}
          aria-label="Close activity details"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-dark transition hover:bg-secondary hover:text-white"
        >
          <X size={20} />
        </button>
      </div>

      {/* Modal Content */}
      <div className="space-y-6 p-5 sm:p-7">
        <p className="text-sm leading-7 text-gray-600 sm:text-base">
          {selectedActivity.description}
        </p>

        {/* Important Information */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-dark">
            Important Information
          </h3>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex gap-3 rounded-xl border border-gray-100 bg-[#faf7f5] p-4">
              <Clock3 className="mt-0.5 shrink-0 text-secondary" size={21} />
              <div>
                <p className="text-xs font-medium text-gray-500">
                  Duration
                </p>
                <p className="mt-1 text-sm font-semibold leading-6 text-dark">
                  {selectedActivity.duration}
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-xl border border-gray-100 bg-[#faf7f5] p-4">
              <CalendarDays
                className="mt-0.5 shrink-0 text-secondary"
                size={21}
              />
              <div>
                <p className="text-xs font-medium text-gray-500">
                  Best Time
                </p>
                <p className="mt-1 text-sm font-semibold leading-6 text-dark">
                  {selectedActivity.bestTime}
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-xl border border-gray-100 bg-[#faf7f5] p-4 sm:col-span-2">
              <Users className="mt-0.5 shrink-0 text-secondary" size={21} />
              <div>
                <p className="text-xs font-medium text-gray-500">
                  Suitable For
                </p>
                <p className="mt-1 text-sm font-semibold leading-6 text-dark">
                  {selectedActivity.suitableFor}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <Lightbulb className="text-secondary" size={21} />
            <h3 className="font-bold text-dark">Important Tips</h3>
          </div>

          <ul className="space-y-3">
            {selectedActivity.tips.map((tip, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm leading-6 text-gray-600"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-xs font-bold text-secondary">
                  {index + 1}
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => setSelectedActivity(null)}
            className="rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-dark transition hover:bg-gray-50"
          >
            Close
          </button>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-secondary-dark"
          >
            Enquire Now
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  </div>
)}
</section>


    
  );
}