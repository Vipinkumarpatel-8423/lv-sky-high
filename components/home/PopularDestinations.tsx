"use client";

import { useState } from "react";
import {
  ArrowUp,
  Plus,
} from "lucide-react";

import DestinationModal from "@/components/destinations/DestinationModal";

interface Destination {
  id: number;
  name: string;
  travelers: string;
  image: string;
  href: string;
  size: "normal" | "tall";
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "United Kingdom",
    travelers: "174,688 Travelers",
    image: "/images/destinations/united-kingdom.jpg",
    href: "/destinations/united-kingdom",
    size: "normal",
  },
  {
    id: 2,
    name: "Singapore",
    travelers: "128,450 Travelers",
    image: "/images/destinations/singapore.jpg",
    href: "/destinations/singapore",
    size: "tall",
  },
  {
    id: 3,
    name: "Maldives",
    travelers: "156,920 Travelers",
    image: "/images/destinations/maldives.jpg",
    href: "/destinations/maldives",
    size: "normal",
  },
  {
    id: 4,
    name: "Thailand",
    travelers: "142,380 Travelers",
    image: "/images/destinations/thailand.jpg",
    href: "/destinations/thailand",
    size: "normal",
  },
  {
    id: 5,
    name: "Kerala",
    travelers: "118,760 Travelers",
    image: "/images/destinations/kerala.jpg",
    href: "/destinations/kerala",
    size: "normal",
  },
  {
    id: 6,
    name: "Dubai",
    travelers: "198,520 Travelers",
    image: "/images/destinations/dubai.jpg",
    href: "/destinations/dubai",
    size: "tall",
  },
  {
    id: 7,
    name: "Bali",
    travelers: "164,280 Travelers",
    image: "/images/destinations/bali.jpg",
    href: "/destinations/bali",
    size: "normal",
  },
];

export default function PopularDestinations() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  /* =========================================
     OPEN MODAL
  ========================================= */

  const openDestination = (index: number) => {
    setActiveIndex(index);
  };

  /* =========================================
     NEXT DESTINATION
  ========================================= */

  const handleNext = () => {
    setActiveIndex((current) => {
      if (current === null) return null;

      return (current + 1) % destinations.length;
    });
  };

  /* =========================================
     PREVIOUS DESTINATION
  ========================================= */

  const handlePrev = () => {
    setActiveIndex((current) => {
      if (current === null) return null;

      return (
        (current - 1 + destinations.length) %
        destinations.length
      );
    });
  };

  /* =========================================
     BACK TO TOP
  ========================================= */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-white py-10 sm:py-10 lg:py-5">
        <div className="mx-auto w-full max-w-[1170px] px-5 sm:px-6 lg:px-0">

          {/* =========================================
              SECTION HEADING
          ========================================= */}

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
              Top Destination
            </p>

            <h2
              className="
                mt-3
                text-[36px]
                font-bold
                leading-tight
                tracking-[-0.03em]
                text-dark
                sm:text-[42px]
                lg:text-[46px]
              "
            >
              Most Popular Destinations
            </h2>
          </div>

          {/* =========================================
              DESTINATION GRID
          ========================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
              lg:auto-rows-[255px]
              lg:gap-5
            "
          >
            {destinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={index}
                onOpen={openDestination}
              />
            ))}
          </div>
        </div>

        {/* =========================================
            BACK TO TOP
        ========================================= */}

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="
            fixed
            bottom-5
            right-5
            z-40
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-secondary
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            sm:bottom-6
            sm:right-7
          "
        >
          <ArrowUp
            size={20}
            strokeWidth={1.8}
          />
        </button>
      </section>

      {/* =========================================
          DESTINATION MODAL
      ========================================= */}

      <DestinationModal
        destinations={destinations}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}

/* =============================================
   DESTINATION CARD
============================================= */

function DestinationCard({
  destination,
  index,
  onOpen,
}: {
  destination: Destination;
  index: number;
  onOpen: (index: number) => void;
}) {
  return (
    <div
      className={`
        group
        relative
        block
        overflow-hidden
        rounded-[16px]
        bg-gray-100

        ${
          destination.size === "tall"
            ? "lg:row-span-2"
            : ""
        }

        ${
          destination.id === 6
            ? "lg:h-[380px]"
            : "lg:h-auto"
        }

        h-[280px]
        sm:h-[300px]
        lg:min-h-0
      `}
    >
      {/* =======================================
          IMAGE
      ======================================= */}

      <img
        src={destination.image}
        alt={destination.name}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-105
        "
      />

      {/* =======================================
          DARK OVERLAY
      ======================================= */}

      <div
        className="
          absolute
          inset-0
          bg-black/0
          transition-all
          duration-500
          group-hover:bg-black/55
        "
      />

      {/* =======================================
          CENTER PLUS
      ======================================= */}

      <button
        type="button"
        onClick={() => onOpen(index)}
        aria-label={`View ${destination.name}`}
        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-14
          w-14
          -translate-x-1/2
          -translate-y-[40%]
          items-center
          justify-center
          rounded-full
          border
          border-white
          text-white
          opacity-0
          scale-75
          transition-all
          duration-500
          group-hover:translate-y-[-50%]
          group-hover:scale-100
          group-hover:opacity-100
        "
      >
        <Plus
          size={25}
          strokeWidth={1.5}
        />
      </button>

      {/* =======================================
          DESTINATION DETAILS
      ======================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          translate-y-5
          p-6
          opacity-0
          transition-all
          duration-500
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <h3
          className="
            text-[18px]
            font-semibold
            leading-tight
            text-white
            sm:text-[19px]
          "
        >
          {destination.name}
        </h3>

        <p
          className="
            mt-1.5
            text-[14px]
            font-medium
            text-white/90
          "
        >
          {destination.travelers}
        </p>
      </div>
    </div>
  );
}