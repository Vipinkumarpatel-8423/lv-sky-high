"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Heart,
  MapPin,
  Star,
} from "lucide-react";

interface RecommendedPlace {
  id: number;
  title: string;
  location: string;
  country: string;
  price: string;
  duration: string;
  image: string;
  slug: string;
}

const recommendedPlaces: RecommendedPlace[] = [
  {
    id: 1,
    title: "Short Trek Around Pokhara",
    location: "Nepal, Pokhara, Tibet",
    country: "Nepal",
    price: "$300.00",
    duration: "07 days",
    image: "/images/destinations/pokhara.jpg",
    slug: "short-trek-around-pokhara",
  },
  {
    id: 2,
    title: "Island Peak Climbing",
    location: "Bhutan, India, Pokhara",
    country: "Bhutan",
    price: "$200.00",
    duration: "03 days",
    image: "/images/destinations/island-peak.jpg",
    slug: "island-peak-climbing",
  },
  {
    id: 3,
    title: "Ghorepani Poon Hill Trek",
    location: "Bhutan, India, Pokhara",
    country: "Bhutan",
    price: "$400.00",
    duration: "08 days",
    image: "/images/destinations/poon-hill.jpg",
    slug: "ghorepani-poon-hill-trek",
  },
  {
    id: 4,
    title: "Langtang Valley Trekking",
    location: "Bhutan, India, Tibet",
    country: "Bhutan",
    price: "$600.00",
    duration: "10 days",
    image: "/images/destinations/langtang.jpg",
    slug: "langtang-valley-trekking",
  },
  {
    id: 5,
    title: "Goa Beach Escape",
    location: "Goa, India",
    country: "India",
    price: "$250.00",
    duration: "04 days",
    image: "/images/destinations/goa.jpg",
    slug: "goa-beach-escape",
  },
  {
    id: 6,
    title: "Kerala Backwater Tour",
    location: "Kerala, India",
    country: "India",
    price: "$350.00",
    duration: "05 days",
    image: "/images/destinations/kerala.jpg",
    slug: "kerala-backwater-tour",
  },
  {
    id: 7,
    title: "Maldives Island Holiday",
    location: "Maldives",
    country: "Maldives",
    price: "$800.00",
    duration: "06 days",
    image: "/images/destinations/maldives.jpg",
    slug: "maldives-island-holiday",
  },
];

const DESKTOP_VISIBLE = 4;

export default function RecommendedPlaces() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalSlides = recommendedPlaces.length;

  const sliderItems = [
    ...recommendedPlaces,
    ...recommendedPlaces.slice(0, DESKTOP_VISIBLE),
  ];

  const nextSlide = () => {
    setIsTransitioning(true);

    setCurrentIndex((prev) => prev + 1);
  };

  const previousSlide = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(totalSlides);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(totalSlides - 1);
        });
      });

      return;
    }

    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (currentIndex !== totalSlides) {
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }, 650);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [isPaused]);

  const activeDot = currentIndex % totalSlides;

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1170px] px-5 sm:px-6 lg:px-0">

        {/* ================= HEADING ================= */}

        <div className="mb-10 text-center sm:mb-12 lg:mb-14">
          <p
            className="
              font-[var(--font-script)]
              text-[24px]
              leading-none
              text-secondary
              sm:text-[27px]
            "
          >
            Best Recommended Places
          </p>

          <h2
            className="
              mx-auto
              mt-3
              max-w-[700px]
              text-[34px]
              font-bold
              leading-[1.15]
              tracking-[-0.03em]
              text-dark
              sm:text-[40px]
              lg:text-[44px]
            "
          >
            Discover The World&apos;s Treasures
            <br className="hidden sm:block" />
            With LV SKY HIGH
          </h2>
        </div>

        {/* ================= SLIDER ================= */}

        <div
          className="recommended-slider relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className={`flex gap-5 ${
                isTransitioning
                  ? "transition-transform duration-[650ms] ease-out"
                  : ""
              }`}
              style={{
                transform: `translateX(calc(-${currentIndex} * (var(--recommended-card-width) + 20px)))`,
              }}
            >
              {sliderItems.map((place, index) => (
                <RecommendedCard
                  key={`${place.id}-${index}`}
                  place={place}
                />
              ))}
            </div>
          </div>

          {/* ================= LEFT BUTTON ================= */}

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous places"
            className="
              absolute
              left-[-6px]
              top-1/2
              z-20
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-dark
              shadow-md
              transition-all
              duration-300
              hover:bg-secondary
              hover:text-white
              sm:left-[-20px]
              sm:h-11
              sm:w-11
            "
          >
            <ChevronLeft size={19} strokeWidth={1.8} />
          </button>

          {/* ================= RIGHT BUTTON ================= */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next places"
            className="
              absolute
              right-[-6px]
              top-1/2
              z-20
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-dark
              shadow-md
              transition-all
              duration-300
              hover:bg-secondary
              hover:text-white
              sm:right-[-20px]
              sm:h-11
              sm:w-11
            "
          >
            <ChevronRight size={19} strokeWidth={1.8} />
          </button>
        </div>

        {/* ================= DOTS ================= */}

        <div className="mt-9 flex items-center justify-center gap-2">
          {recommendedPlaces.slice(0, 4).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-2.5
                rounded-full
                border
                border-secondary
                transition-all
                duration-300
                ${
                  activeDot === index
                    ? "w-5 bg-secondary"
                    : "w-2.5 bg-transparent"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* ================= RESPONSIVE WIDTH ================= */}

      <style jsx>{`
        .recommended-slider {
          --recommended-card-width: 100%;
        }

        @media (min-width: 640px) {
          .recommended-slider {
            --recommended-card-width: calc((100% - 20px) / 2);
          }
        }

        @media (min-width: 1024px) {
          .recommended-slider {
            --recommended-card-width: calc((100% - 60px) / 4);
          }
        }
      `}</style>
    </section>
  );
}

/* =====================================================
   RECOMMENDED CARD
===================================================== */

function RecommendedCard({
  place,
}: {
  place: RecommendedPlace;
}) {
  return (
    <article
      className="
        group
        relative
        flex
        min-w-0
        flex-[0_0_100%]
        overflow-hidden
        rounded-[14px]
        border
        border-gray-200
        bg-white
        sm:flex-[0_0_calc((100%_-_20px)_/_2)]
        lg:flex-[0_0_calc((100%_-_60px)_/_4)]
      "
    >
      {/* ================= IMAGE ================= */}

      <div className="relative h-[205px] w-full overflow-hidden">
        <Link
          href={`/destinations/${place.slug}`}
          className="absolute inset-0 z-10"
          aria-label={`View ${place.title}`}
        />

        <Image
          src={place.image}
          alt={place.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
          sizes="
            (max-width: 639px) 100vw,
            (max-width: 1023px) 50vw,
            25vw
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/0
            transition-colors
            duration-500
            group-hover:bg-black/10
          "
        />

        {/* ================= RATING ================= */}

        <div
          className="
            absolute
            left-[-38px]
            top-[16px]
            z-20
            flex
            w-[125px]
            rotate-[-45deg]
            items-center
            justify-center
            gap-1
            bg-secondary
            py-1
            text-[11px]
            font-semibold
            text-white
          "
        >
          <Star size={11} fill="currentColor" />
          4.9
        </div>

        {/* ================= HEART ================= */}

        <button
          type="button"
          aria-label={`Add ${place.title} to wishlist`}
          onClick={(event) => {
            event.stopPropagation();
          }}
          className="
            absolute
            right-3
            top-3
            z-20
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-secondary
            text-white
            transition-transform
            duration-300
            hover:scale-110
          "
        >
          <Heart
            size={16}
            fill="currentColor"
            strokeWidth={1.5}
          />
        </button>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="w-full bg-white">
        <Link
          href={`/destinations/${place.slug}`}
          className="
            block
            px-3
            pt-4
            text-[15px]
            font-semibold
            leading-snug
            text-dark
            transition-colors
            duration-300
            hover:text-secondary
          "
        >
          {place.title}
        </Link>

        <div className="flex items-center gap-1.5 px-3 pt-1.5">
          <MapPin
            size={13}
            className="shrink-0 text-secondary"
            fill="currentColor"
          />

          <span className="truncate text-[12px] text-gray-500">
            {place.location}
          </span>
        </div>

        <div className="px-3 pb-3 pt-1">
          <span className="text-[15px] font-bold text-dark">
            {place.price}
          </span>

          <span className="ml-1 text-[11px] text-gray-500">
            /Person
          </span>
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-gray-200
            px-3
            py-2.5
          "
        >
          <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
            <Clock3
              size={13}
              className="text-secondary"
            />

            <span>{place.duration}</span>
          </div>

          <Link
            href={`/destinations/${place.slug}`}
            className="
              group/read
              relative
              isolate
              flex
              items-center
              gap-1.5
              overflow-hidden
              rounded-full
              border
              border-secondary/20
              bg-secondary/10
              px-3
              py-1.5
              text-[10px]
              font-semibold
              text-secondary
            "
          >
            <span
              className="
                absolute
                inset-y-0
                left-0
                -z-10
                w-0
                bg-secondary
                transition-all
                duration-500
                ease-out
                group-hover/read:w-full
              "
            />

            <span
              className="
                relative
                z-10
                transition-colors
                duration-300
                group-hover/read:text-white
              "
            >
              Read More
            </span>

            <ArrowRight
              size={13}
              className="
                relative
                z-10
                transition-all
                duration-300
                group-hover/read:translate-x-1
                group-hover/read:text-white
              "
            />
          </Link>
        </div>
      </div>
    </article>
  );
}