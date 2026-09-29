"use client";

import Image from "next/image";
import { Play } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Enjoy A Trip That Fits Your Lifestyle.",
    description:
      "We create personalized travel experiences designed around your preferences, comfort and budget.",
  },
  {
    number: "02",
    title: "Travel With More Confidence",
    description:
      "From planning to your journey, we take care of the important details so you can travel with confidence.",
  },
  {
    number: "03",
    title: "See What You Really Get From Us",
    description:
      "Transparent planning, carefully selected experiences and dedicated support throughout your journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#f3e1db] py-16 sm:py-20 lg:py-24">
      {/* =========================================
          DECORATIVE BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute left-0 top-0 hidden opacity-40 lg:block">
        <div className="relative h-[320px] w-[300px]">
          {/* Dotted route */}
          <svg
            viewBox="0 0 300 320"
            className="absolute inset-0 h-full w-full"
            fill="none"
          >
            <path
              d="M18 160 C55 65, 115 100, 150 150 C190 205, 225 190, 180 135 C150 98, 108 112, 105 155"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 5"
              className="text-gray-300"
            />
          </svg>

          {/* Location dot */}
          <div className="absolute left-3 top-[145px] text-secondary">
            <span className="block h-3 w-3 rounded-full border-2 border-secondary" />
          </div>
        </div>
      </div>

      {/* Dotted grid */}
      <div className="pointer-events-none absolute left-[42%] top-14 hidden opacity-50 lg:block">
        <div
          className="
            h-[145px]
            w-[120px]
            bg-[radial-gradient(circle,_var(--color-primary)_1.3px,_transparent_1.3px)]
            [background-size:10px_10px]
          "
        />
      </div>

      <div className="mx-auto w-full max-w-[1170px] px-5 sm:px-6 lg:px-0">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 xl:gap-24">

          {/* =========================================
              LEFT IMAGE AREA
          ========================================= */}

          <div className="relative mx-auto h-[430px] w-full max-w-[560px] sm:h-[500px] lg:h-[510px]">

            {/* Main Image */}
            <div
              className="
                absolute
                left-1/2
                top-0
                h-[350px]
                w-[280px]
                -translate-x-1/2
                overflow-hidden
                rounded-[18px]
                sm:h-[430px]
                sm:w-[340px]
                lg:h-[470px]
                lg:w-[370px]
              "
            >
              <Image
                src="/images/home/why-choose-main.jpg"
                alt="Travel experience"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 340px, 370px"
              />
            </div>

            {/* Left Small Image */}
            <div
              className="
                absolute
                bottom-0
                left-0
                z-10
                h-[190px]
                w-[170px]
                overflow-hidden
                rounded-[16px]
                border-[6px]
                border-[#fff9f7]
                sm:h-[220px]
                sm:w-[205px]
                lg:h-[240px]
                lg:w-[180px]
              "
            >
              <Image
                src="/images/home/why-choose-left.jpg"
                alt="Travelers enjoying their trip"
                fill
                className="object-cover"
                sizes="205px"
              />
            </div>

            {/* Right Small Image */}
            <div
              className="
                absolute
                bottom-0
                right-0
                z-10
                h-[190px]
                w-[170px]
                overflow-hidden
                rounded-[16px]
                border-[6px]
                border-[#fff9f7]
                sm:h-[220px]
                sm:w-[205px]
                lg:h-[240px]
                lg:w-[255px]
              "
            >
              <Image
                src="/images/home/why-choose-right.jpg"
                alt="Adventure travel"
                fill
                className="object-cover"
                sizes="255px"
              />

              {/* Play Button */}
              <button
                type="button"
                aria-label="Watch travel video"
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-14
                  w-14
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-secondary
                  text-white
                  shadow-lg
                  transition-transform
                  duration-300
                  hover:scale-110
                "
              >
                <Play
                  size={21}
                  fill="currentColor"
                  strokeWidth={0}
                  className="ml-1"
                />
              </button>
            </div>
          </div>

          {/* =========================================
              RIGHT CONTENT
          ========================================= */}

          <div className="relative z-10">
            {/* Small Heading */}
            <p
              className="
                font-[var(--font-script)]
                text-[24px]
                leading-none
                text-secondary
                sm:text-[27px]
              "
            >
              Why Choose Us
            </p>

            {/* Main Heading */}
            <h2
              className="
                mt-4
                max-w-[520px]
                text-[36px]
                font-bold
                leading-[1.12]
                tracking-[-0.03em]
                text-dark
                sm:text-[42px]
                lg:text-[46px]
              "
            >
              Get The Best Travel
              <br className="hidden sm:block" />
              Experience
            </h2>

            {/* =====================================
                REASONS
            ===================================== */}

            <div className="mt-8">
              {reasons.map((reason, index) => (
                <div
                  key={reason.number}
                  className="relative flex gap-4 sm:gap-5"
                >
                  {/* Vertical Line */}
                  {index !== reasons.length - 1 && (
                    <div
                      className="
                        absolute
                        left-[22px]
                        top-[48px]
                        h-[72px]
                        border-l
                        border-dashed
                        border-secondary/40
                      "
                    />
                  )}

                  {/* Number */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-secondary/15
                      text-[14px]
                      font-semibold
                      text-secondary
                    "
                  >
                    {reason.number}
                  </div>

                  {/* Text */}
                  <div className="pb-7 sm:pb-8">
                    <h3
                      className="
                        text-[16px]
                        font-semibold
                        leading-snug
                        text-dark
                        sm:text-[17px]
                      "
                    >
                      {reason.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-[470px]
                        text-[14px]
                        leading-6
                        text-gray-500
                        sm:text-[15px]
                      "
                    >
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          BACK TO TOP DECORATION
      ========================================= */}

      {/* <button
        type="button"
        aria-label="Back to top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="
          absolute
          bottom-5
          right-5
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-secondary
          text-white
          shadow-md
          transition
          hover:-translate-y-1
          sm:bottom-6
          sm:right-7
        "
      >
        ↑
      </button> */}
    </section>
  );
}