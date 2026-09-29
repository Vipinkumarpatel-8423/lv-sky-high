"use client";

import {
  CalendarDays,
  ChevronDown,
  MapPin,
  Search,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      {/* ================= HERO ================= */}
      <div
        className="
          relative
          min-h-[560px]
          overflow-visible
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/images/hero/travel-hero.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-dark/55" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1180px] items-center px-5 py-24 sm:px-8 lg:px-5">
          <div className="max-w-[650px]">
            {/* Small Heading */}
            <p
              className="
                mb-3
                font-script
                text-[16px]
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
                text-[36px]
                font-bold
                leading-[1.08]
                tracking-tight
                text-white
                sm:text-[52px]
                lg:text-[60px]
              "
            >
              Where Exceptional   
              <br className="hidden sm:block" />
                 Memories Begin
            </h1>

            {/* Description */}
            <p
              className="
                my-5
                max-w-[550px]
                text-[15px]
                leading-7
                text-white/85
                sm:text-[16px]
              "
            >
              Discover unforgettable destinations, romantic getaways
              and memorable holidays planned around you.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="
                  inline-flex
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
                "
              >
                Lets Get Started
                <span>→</span>
              </a>

              <a
                href="/destinations"
                className="
                  inline-flex
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
            w-[calc(100%-30px)]
            max-w-[1150px]
            -translate-x-1/2
            translate-y-1/2
          "
        >
          <div
            className="
              rounded-lg
              bg-white
              p-4
            //   shadow-[0_10px_35px_rgba(0,0,0,0.12)]
              sm:p-5
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-3
                md:grid-cols-2
                lg:grid-cols-[1.4fr_1fr_1fr_0.8fr_auto]
                lg:items-end
              "
            >
              {/* Location */}
              <div>
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
                    className="text-secondary"
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
              <div>
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
                    className="text-secondary"
                  />
                  Check In
                </label>

                <input
                  type="date"
                  className="
                    h-[42px]
                    w-full
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
              <div>
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
                    className="text-secondary"
                  />
                  Check Out
                </label>

                <input
                  type="date"
                  className="
                    h-[42px]
                    w-full
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
              <div>
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
      <div className="h-[70px] sm:h-[80px]" />
    </section>
  );
}