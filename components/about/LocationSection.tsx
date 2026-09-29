"use client";

import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const address =
  "First Floor, Chandigarh City Centre, B-44, W VIP Rd, Zirakpur, Punjab 140603";

const phone = "+91 79885 22589";
const email = "info@lvskyhigh.com";

const mapQuery = encodeURIComponent(
  "Chandigarh City Centre, B-44, W VIP Rd, Zirakpur, Punjab 140603"
);

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

export default function LocationSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* ================= DECORATIVE ELEMENTS ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-24
          hidden
          h-[150px]
          w-[280px]
          opacity-50
          lg:block
        "
      >
        <svg
          viewBox="0 0 280 150"
          fill="none"
          className="h-full w-full"
        >
          <path
            d="M10 115C45 80 55 35 95 42C135 49 130 110 175 105C215 101 210 55 265 25"
            stroke="var(--color-secondary)"
            strokeWidth="2"
            strokeDasharray="6 7"
            opacity="0.25"
          />
        </svg>

        <MapPin
          className="
            absolute
            left-1
            top-[105px]
            text-secondary
          "
          size={24}
          strokeWidth={1.7}
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          hidden
          lg:block
        "
      >
        <svg
          width="190"
          height="120"
          viewBox="0 0 190 120"
          fill="none"
        >
          <path
            d="M-10 95C25 70 45 95 75 75C105 55 92 20 125 20C150 20 165 40 190 15"
            stroke="var(--color-secondary)"
            strokeWidth="2"
            strokeDasharray="6 7"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1170px]
          px-5
          sm:px-6
          lg:px-0
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[0.82fr_1.18fr]
            lg:gap-12
            xl:gap-16
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div>
            {/* Small Heading */}

            <p
              className="
                font-[var(--font-script)]
                text-[25px]
                leading-none
                text-secondary
                sm:text-[28px]
              "
            >
              Our Location
            </p>

            {/* Main Heading */}

            <h2
              className="
                mt-4
                max-w-[500px]
                text-[38px]
                font-bold
                leading-[1.08]
                tracking-[-0.035em]
                text-dark
                sm:text-[46px]
                lg:text-[52px]
              "
            >
              Find Us Here
            </h2>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-[540px]
                text-[15px]
                leading-7
                text-gray-500
                sm:text-[16px]
                sm:leading-7
              "
            >
              We are conveniently located in the heart of Zirakpur,
              making it easy for you to visit us. Get in touch with us
              for personalized travel assistance and expert guidance.
            </p>

            {/* ================= CONTACT DETAILS ================= */}

            <div className="mt-8 space-y-6">
              {/* Address */}

              <div className="flex items-start gap-5">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-secondary/10
                    text-secondary
                  "
                >
                  <MapPin
                    size={27}
                    strokeWidth={1.8}
                  />
                </div>

                <div className="pt-1">
                  <h3
                    className="
                      text-[17px]
                      font-semibold
                      text-dark
                    "
                  >
                    Our Address
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[390px]
                      text-[15px]
                      leading-7
                      text-gray-500
                    "
                  >
                    {address}
                  </p>
                </div>
              </div>

              {/* Phone */}

              <div className="flex items-center gap-5">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-secondary/10
                    text-secondary
                  "
                >
                  <Phone
                    size={25}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <h3
                    className="
                      text-[17px]
                      font-semibold
                      text-dark
                    "
                  >
                    Phone Number
                  </h3>

                  <a
                    href="tel:+917988522589"
                    className="
                      mt-1
                      block
                      text-[15px]
                      text-gray-500
                      transition-colors
                      hover:text-secondary
                    "
                  >
                    {phone}
                  </a>
                </div>
              </div>

              {/* Email */}

              <div className="flex items-center gap-5">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-secondary/10
                    text-secondary
                  "
                >
                  <Mail
                    size={25}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <h3
                    className="
                      text-[17px]
                      font-semibold
                      text-dark
                    "
                  >
                    Email Address
                  </h3>

                  <a
                    href="mailto:info@lvskyhigh.com"
                    className="
                      mt-1
                      block
                      text-[15px]
                      text-gray-500
                      transition-colors
                      hover:text-secondary
                    "
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>

            {/* ================= DIRECTIONS BUTTON ================= */}

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-8
                inline-flex
                min-w-[260px]
                items-center
                justify-center
                gap-5
                rounded-full
                bg-secondary
                px-8
                py-[17px]
                text-[16px]
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <span>Get Directions</span>

              <ArrowRight
                size={21}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>

          {/* =================================================
              RIGHT MAP
          ================================================= */}

          <div
            className="
              relative
              w-full
            "
          >
            {/* Map Pin */}

            <div
              className="
                absolute
                -top-12
                left-1/2
                z-10
                hidden
                -translate-x-1/2
                sm:block
              "
            >
              <div
                className="
                  relative
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-secondary/20
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-secondary
                    text-white
                    shadow-lg
                  "
                >
                  <MapPin
                    size={21}
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>

            {/* Map */}

            <div
              className="
                relative
                h-[350px]
                w-full
                overflow-hidden
                rounded-[18px]
                border
                border-gray-100
                bg-gray-100
                shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                sm:h-[430px]
                lg:h-[520px]
              "
            >
              <iframe
                title="LV SKY HIGH Location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Theme Overlay Border */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[18px]
                  ring-1
                  ring-inset
                  ring-secondary/10
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}