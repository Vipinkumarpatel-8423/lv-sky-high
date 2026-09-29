
"use client";

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
                href="/destinations"
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
        <div
          className="
            absolute
            bottom-0
            left-1/2
            z-20
            w-[calc(100%-24px)]
            max-w-[1150px]
            -translate-x-1/2
            translate-y-1/2
            
            sm:w-[calc(100%-40px)]
          "
        >
          <div
            className="
              rounded-lg
              bg-white
              p-3
              shadow-[0_10px_35px_rgba(0,0,0,0.12)]
              mt-5
              sm:mt-1
              sm:p-5
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-3

                sm:grid-cols-2

                lg:grid-cols-[1.4fr_1fr_1fr_0.8fr_auto]
                lg:items-end
              "
            >
              {/* Location */}
              <div className="min-w-0">
                <label
                  className="
                    mb-2
                    flex
                    items-center
                    gap-2
                    text-[12px]
                    font-semibold
                    text-dark
                  "
                >
                  <MapPin
                    size={16}
                    strokeWidth={1.8}
                    className="shrink-0 text-secondary"
                  />
                  Location
                </label>

                <div className="relative">
                  <select
                    defaultValue=""
                    className="
                      h-[42px]
                      w-full
                      appearance-none
                      rounded-md
                      border
                      border-gray-200
                      bg-white
                      px-3
                      pr-9
                      text-[12px]
                      text-gray-500
                      outline-none
                      transition
                      focus:border-primary
                    "
                  >
                    <option value="" disabled>
                      Where are you going?
                    </option>
                    <option value="goa">Goa</option>
                    <option value="kerala">Kerala</option>
                    <option value="kashmir">Kashmir</option>
                    <option value="andaman">Andaman</option>
                    <option value="dubai">Dubai</option>
                    <option value="thailand">Thailand</option>
                    <option value="russia">Russia</option>
                  </select>

                  <ChevronDown
                    size={15}
                    className="
                      pointer-events-none
                      absolute
                      right-3
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />
                </div>
              </div>

              {/* Check In */}
              <div className="min-w-0">
                <label
                  className="
                    mb-2
                    flex
                    items-center
                    gap-2
                    text-[11px]
                    font-semibold
                    text-dark
                  "
                >
                  <CalendarDays
                    size={16}
                    strokeWidth={1.8}
                    className="shrink-0 text-secondary"
                  />
                  Check In
                </label>

                <input
                  type="date"
                  className="
                    h-[42px]
                    w-full
                    min-w-0
                    rounded-md
                    border
                    border-gray-200
                    px-3
                    text-[12px]
                    text-gray-500
                    outline-none
                    focus:border-primary
                  "
                />
              </div>

              {/* Check Out */}
              <div className="min-w-0">
                <label
                  className="
                    mb-2
                    flex
                    items-center
                    gap-2
                    text-[11px]
                    font-semibold
                    text-dark
                  "
                >
                  <CalendarDays
                    size={16}
                    strokeWidth={1.8}
                    className="shrink-0 text-secondary"
                  />
                  Check Out
                </label>

                <input
                  type="date"
                  className="
                    h-[42px]
                    w-full
                    min-w-0
                    rounded-md
                    border
                    border-gray-200
                    px-3
                    text-[12px]
                    text-gray-500
                    outline-none
                    focus:border-primary
                  "
                />
              </div>

              {/* Guests */}
              <div className="min-w-0">
                <label
                  className="
                    mb-2
                    block
                    text-[11px]
                    font-semibold
                    text-dark
                  "
                >
                  Guests
                </label>

                <div className="relative">
                  <select
                    defaultValue="2"
                    className="
                      h-[42px]
                      w-full
                      appearance-none
                      rounded-md
                      border
                      border-gray-200
                      bg-white
                      px-3
                      pr-8
                      text-[12px]
                      text-gray-500
                      outline-none
                      focus:border-primary
                    "
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>

                  <ChevronDown
                    size={15}
                    className="
                      pointer-events-none
                      absolute
                      right-3
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />
                </div>
              </div>

              {/* Search */}
              <button
                type="button"
                className="
                  flex
                  h-[42px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-secondary
                  px-7
                  text-[12px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:opacity-90

                  lg:w-auto
                "
              >
                <Search size={15} />
                Search
              </button>
            </div>
          </div>
        </div>
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

