"use client";

// import {
//   Facebook,
//   Linkedin,
//   Twitter,
// } from "lucide-react";

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

interface TravelGuide {
  id: number;
  name: string;
  role: string;
  image: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

const guides: TravelGuide[] = [
  {
    id: 1,
    name: "Michel Smith",
    role: "Tourist Guide",
    image: "/images/guides/michel-smith.jpg",
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Leslie Alexander",
    role: "Tourist Guide",
    image: "/images/guides/leslie-alexander.jpg",
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 3,
    name: "JR Shawon",
    role: "Tourist Guide",
    image: "/images/guides/jr-shawon.jpg",
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Smith Kong",
    role: "Tourist Guide",
    image: "/images/guides/smith-kong.jpg",
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
];

export default function TravelSpecialist() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1170px] px-5 sm:px-6 lg:px-0">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="mb-10 text-center sm:mb-12 lg:mb-14">
          <p
            className="
              font-[var(--font-script)]
              text-[23px]
              leading-none
              text-secondary
              sm:text-[26px]
            "
          >
            Meet With Guide
          </p>

          <h2
            className="
              mt-3
              text-[34px]
              font-bold
              leading-tight
              tracking-[-0.03em]
              text-dark
              sm:text-[40px]
              lg:text-[42px]
            "
          >
            Travel Specialist
          </h2>
        </div>

        {/* =========================
            GUIDES GRID
        ========================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-8
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-4
          "
        >
          {guides.map((guide) => (
            <GuideCard
              key={guide.id}
              guide={guide}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   GUIDE CARD
========================================= */

function GuideCard({
  guide,
}: {
  guide: TravelGuide;
}) {
  return (
    <div className="group">

      {/* =========================
          IMAGE
      ========================= */}

      <div
        className="
          relative
          h-[330px]
          overflow-hidden
          rounded-[13px]
          bg-gray-100
          sm:h-[300px]
          lg:h-[232px]
          xl:h-[232px]
        "
      >
        <img
          src={guide.image}
          alt={guide.name}
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

        {/* =========================
            SUBTLE OVERLAY
        ========================= */}

        <div
          className="
            absolute
            inset-0
            bg-black/0
            transition-all
            duration-500
            group-hover:bg-black/5
          "
        />

        {/* =========================
            SOCIAL ICONS
        ========================= */}

        <div
          className="
            absolute
            right-3
            top-4
            z-10
            flex
            translate-x-3
            flex-col
            gap-2
            opacity-0
            transition-all
            duration-500
            ease-out
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        >
          {/* Facebook */}

          <SocialButton
            href={guide.facebook}
            label={`Facebook - ${guide.name}`}
          >
            <FaFacebook
              size={16}
              strokeWidth={2}
              fill="currentColor"
            />
          </SocialButton>

          {/* Twitter / X */}

          <SocialButton
            href={guide.twitter}
            label={`Twitter - ${guide.name}`}
          >
            <FaTwitter
              size={16}
              strokeWidth={2}
            />
          </SocialButton>

          {/* LinkedIn */}

          <SocialButton
            href={guide.linkedin}
            label={`LinkedIn - ${guide.name}`}
          >
            <FaInstagramSquare
              size={16}
              strokeWidth={2}
              fill="currentColor"
            />
          </SocialButton>
        </div>
      </div>

      {/* =========================
          GUIDE DETAILS
      ========================= */}

      <div className="pt-4">
        <h3
          className="
            text-[16px]
            font-semibold
            leading-tight
            text-dark
            transition-colors
            duration-300
            group-hover:text-secondary
          "
        >
          {guide.name}
        </h3>

        <p
          className="
            mt-1
            text-[13px]
            font-normal
            text-gray-500
          "
        >
          {guide.role}
        </p>
      </div>
    </div>
  );
}

/* =========================================
   SOCIAL BUTTON
========================================= */

function SocialButton({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href || "#"}
      aria-label={label}
      onClick={(event) => {
        if (!href || href === "#") {
          event.preventDefault();
        }
      }}
      className="
        flex
        h-8
        w-8
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
        hover:scale-110
      "
    >
      {children}
    </a>
  );
}