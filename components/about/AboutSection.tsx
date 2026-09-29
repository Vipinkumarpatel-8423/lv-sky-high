
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface AboutSectionProps {
  id?: string;
  showButton?: boolean;
  compact?: boolean;
}

export default function AboutSection({
  id = "about",
  showButton = true,
  compact = false,
}: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`
        relative
        w-full
        overflow-hidden
        bg-white
        ${compact ? "py-16 sm:py-20" : "py-20 sm:py-24 lg:py-28"}
      `}
    >
      {/* ==================================================
          SOFT BACKGROUND SHAPE
      ================================================== */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[300px] w-[300px] rounded-full bg-primary-light/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[300px] w-[300px] rounded-full bg-secondary-light/60 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* ==================================================
            DESKTOP / TABLET CONTENT
        ================================================== */}
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[250px_minmax(0,1fr)_250px]
            lg:gap-8
            xl:grid-cols-[270px_minmax(0,1fr)_270px]
            xl:gap-12
          "
        >
          {/* ==================================================
              LEFT IMAGES
          ================================================== */}
          <div className="relative hidden h-[520px] lg:block">
            {/* Back Image */}
            <div
              className={`
                absolute
                left-0
                top-0
                h-[350px]
                w-[245px]
                overflow-hidden
                rounded-[24px]
                shadow-lg
                transition-all
                duration-1000
                ease-out
                ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-20 opacity-0"
                }
              `}
            >
              <Image
                src="/images/about/about-left-top.jpg"
                alt="LV SKY HIGH Travel"
                fill
                className="object-cover"
                sizes="245px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-dark/25 via-transparent to-transparent" />
            </div>

            {/* Front Image */}
            <div
              className={`
                absolute
                bottom-0
                right-0
                z-10
                h-[245px]
                w-[215px]
                overflow-hidden
                rounded-[24px]
                border-[6px]
                border-white
                bg-white
                shadow-xl
                transition-all
                delay-150
                duration-1000
                ease-out
                ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-20 opacity-0"
                }
              `}
            >
              <Image
                src="/images/about/about-left-bottom.jpg"
                alt="Travel Experience"
                fill
                className="object-cover"
                sizes="215px"
              />
            </div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-5 -left-5 h-20 w-20 rounded-full border-[8px] border-primary-light" />
          </div>

          {/* ==================================================
              CENTER CONTENT
          ================================================== */}
          <div className="min-w-0 text-center">
            {/* Small Heading */}
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 bg-secondary sm:w-12" />

              <p className="text-lg font-semibold italic text-secondary sm:text-xl">
                Welcome to LV SKY HIGH
              </p>

              <span className="h-[1px] w-8 bg-secondary sm:w-12" />
            </div>

            {/* Main Heading */}
            <h2
              className="
                mx-auto
                max-w-[700px]
                text-[34px]
                font-bold
                leading-[1.1]
                tracking-[-0.8px]
                text-dark
                sm:text-[42px]
                lg:text-[46px]
                xl:text-[50px]
              "
            >
              Your Journey,
              <br />
              <span className="text-primary">Our Passion!</span>
            </h2>

            {/* Intro Description */}
            <div className="mx-auto mt-6 max-w-[760px] text-[14px] leading-6 text-muted sm:text-[15px] sm:leading-7">
              <p>
                At LV SKY HIGH, we believe that every journey should be more
                than just a trip—it should be an experience filled with
                discovery, comfort, and unforgettable memories.
              </p>

              <p className="mt-4">
                We are a Tour & Travel company specializing in customized
                travel packages worldwide, designed according to your
                destination, interests, budget, and schedule. Whether you are
                planning a relaxing holiday, an adventurous getaway, a
                corporate trip, or an educational tour, our team is dedicated
                to creating the right travel experience for you.
              </p>
            </div>

            {/* ==================================================
                SERVICES
            ================================================== */}
            <div className="mx-auto mt-7 max-w-[780px]">
              <p className="mb-4 text-center text-[17px] font-bold text-dark sm:text-lg">
                Our Customized Travel Solutions
              </p>

              <div className="grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
                {/* Service 1 */}
                <div
                  className="
                    flex
                    min-h-[58px]
                    items-center
                    rounded-xl
                    border
                    border-primary/10
                    bg-primary-light
                    px-4
                    py-3
                    text-[13px]
                    font-medium
                    leading-5
                    text-dark
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/20
                    hover:shadow-md
                    sm:text-[14px]
                  "
                >
                  <span className="mr-3 text-lg">🌍</span>
                  <span>
                    Domestic & International Tour Packages
                  </span>
                </div>

                {/* Service 2 */}
                <div
                  className="
                    flex
                    min-h-[58px]
                    items-center
                    rounded-xl
                    border
                    border-secondary/10
                    bg-secondary-light
                    px-4
                    py-3
                    text-[13px]
                    font-medium
                    leading-5
                    text-dark
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-secondary/20
                    hover:shadow-md
                    sm:text-[14px]
                  "
                >
                  <span className="mr-3 text-lg">🏢</span>
                  <span>
                    Corporate Travel & Tour Packages
                  </span>
                </div>

                {/* Service 3 */}
                <div
                  className="
                    flex
                    min-h-[58px]
                    items-center
                    rounded-xl
                    border
                    border-primary/10
                    bg-primary-light
                    px-4
                    py-3
                    text-[13px]
                    font-medium
                    leading-5
                    text-dark
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/20
                    hover:shadow-md
                    sm:text-[14px]
                  "
                >
                  <span className="mr-3 text-lg">🎓</span>
                  <span>
                    College & Student Tours
                  </span>
                </div>

                {/* Service 4 */}
                <div
                  className="
                    flex
                    min-h-[58px]
                    items-center
                    rounded-xl
                    border
                    border-secondary/10
                    bg-secondary-light
                    px-4
                    py-3
                    text-[13px]
                    font-medium
                    leading-5
                    text-dark
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-secondary/20
                    hover:shadow-md
                    sm:text-[14px]
                  "
                >
                  <span className="mr-3 text-lg">📚</span>
                  <span>
                    Educational & Industrial Tours
                  </span>
                </div>

                {/* Service 5 */}
                <div
                  className="
                    flex
                    min-h-[58px]
                    items-center
                    rounded-xl
                    border
                    border-primary/10
                    bg-primary-light
                    px-4
                    py-3
                    text-[13px]
                    font-medium
                    leading-5
                    text-dark
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/20
                    hover:shadow-md
                    sm:text-[14px]
                  "
                >
                  <span className="mr-3 text-lg">🐅</span>
                  <span>
                    Wildlife & Nature Tours
                  </span>
                </div>

                {/* Service 6 */}
                <div
                  className="
                    flex
                    min-h-[58px]
                    items-center
                    rounded-xl
                    border
                    border-secondary/10
                    bg-secondary-light
                    px-4
                    py-3
                    text-[13px]
                    font-medium
                    leading-5
                    text-dark
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-secondary/20
                    hover:shadow-md
                    sm:text-[14px]
                  "
                >
                  <span className="mr-3 text-lg">👨‍👩‍👧‍👦</span>
                  <span>
                    Family Holidays & Group Tours
                  </span>
                </div>

                {/* Service 7 */}
                <div
                  className="
                    flex
                    min-h-[58px]
                    items-center
                    rounded-xl
                    border
                    border-primary/10
                    bg-primary-light
                    px-4
                    py-3
                    text-[13px]
                    font-medium
                    leading-5
                    text-dark
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/20
                    hover:shadow-md
                    sm:text-[14px]
                  "
                >
                  <span className="mr-3 text-lg">🏔️</span>
                  <span>
                    Adventure & Leisure Tours
                  </span>
                </div>

                {/* Service 8 */}
                <div
                  className="
                    flex
                    min-h-[58px]
                    items-center
                    rounded-xl
                    border
                    border-secondary/10
                    bg-secondary-light
                    px-4
                    py-3
                    text-[13px]
                    font-medium
                    leading-5
                    text-dark
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-secondary/20
                    hover:shadow-md
                    sm:text-[14px]
                  "
                >
                  <span className="mr-3 text-lg">✈️</span>
                  <span>
                    Honeymoon & Special Occasion Packages
                  </span>
                </div>
              </div>
            </div>

            {/* ==================================================
                BOTTOM CONTENT
            ================================================== */}
            <div className="mx-auto mt-6 max-w-[760px] text-[14px] leading-6 text-muted sm:text-[15px] sm:leading-7">
              <p>
                From planning and transportation to accommodation and
                sightseeing, we focus on making your travel smooth, convenient,
                and memorable.
              </p>

              <p className="mt-4">
                At LV SKY HIGH, our goal is simple: to understand your travel
                needs and turn them into a personalized journey that exceeds
                expectations.
              </p>

              <p className="mt-4 font-semibold text-primary">
                Your Destination. Your Way. Your Journey with LV SKY HIGH.
              </p>
            </div>

            {/* Button */}
            {showButton && (
              <div className="mt-7 flex justify-center">
                <a
                  href="/about"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-primary
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-sm
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:bg-primary-dark
                    hover:shadow-lg
                    active:translate-y-0
                    sm:px-8
                    sm:py-4
                  "
                >
                  Discover More
                  <ArrowRight size={18} strokeWidth={1.8} />
                </a>
              </div>
            )}
          </div>

          {/* ==================================================
              RIGHT IMAGES
          ================================================== */}
          <div className="relative hidden h-[520px] lg:block">
            {/* Back Image */}
            <div
              className={`
                absolute
                right-0
                top-0
                h-[350px]
                w-[245px]
                overflow-hidden
                rounded-[24px]
                shadow-lg
                transition-all
                duration-1000
                ease-out
                ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }
              `}
            >
              <Image
                src="/images/about/about-right-top.jpg"
                alt="Travel Memories"
                fill
                className="object-cover"
                sizes="245px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-dark/25 via-transparent to-transparent" />
            </div>

            {/* Front Image */}
            <div
              className={`
                absolute
                bottom-0
                left-0
                z-10
                h-[245px]
                w-[215px]
                overflow-hidden
                rounded-[24px]
                border-[6px]
                border-white
                bg-white
                shadow-xl
                transition-all
                delay-150
                duration-1000
                ease-out
                ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }
              `}
            >
              <Image
                src="/images/about/about-right-bottom.jpg"
                alt="Group Travel"
                fill
                className="object-cover"
                sizes="215px"
              />
            </div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-5 -right-5 h-20 w-20 rounded-full border-[8px] border-secondary-light" />
          </div>
        </div>

        {/* ==================================================
            MOBILE IMAGES
        ================================================== */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:hidden">
          {/* Left Image */}
          <div
            className={`
              relative
              h-[190px]
              overflow-hidden
              rounded-2xl
              shadow-md
              transition-all
              duration-1000
              sm:h-[250px]
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }
            `}
          >
            <Image
              src="/images/about/about-left-top.jpg"
              alt="LV SKY HIGH Travel"
              fill
              className="object-cover"
              sizes="50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
          </div>

          {/* Right Image */}
          <div
            className={`
              relative
              h-[190px]
              overflow-hidden
              rounded-2xl
              shadow-md
              transition-all
              duration-1000
              sm:h-[250px]
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }
            `}
          >
            <Image
              src="/images/about/about-right-top.jpg"
              alt="Travel Memories"
              fill
              className="object-cover"
              sizes="50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
