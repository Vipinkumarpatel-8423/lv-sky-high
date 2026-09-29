"use client";

import Link from "next/link";
import {
  ArrowRight,
//   Facebook,
//   Instagram,
//   Linkedin,
  Mail,
  MapPin,
  Phone,
//   Twitter,
} from "lucide-react";

import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const galleryImages = [
  "/images/destinations/goa.jpg",
  "/images/destinations/maldives.jpg",
  "/images/destinations/singapore.jpg",
  "/images/destinations/dubai.jpg",
  "/images/destinations/thailand.jpg",
  "/images/destinations/kerala.jpg",
];

export default function Footer() {
  return (
    <footer className="bg-[#151918] text-white">
      <div className="mx-auto w-full max-w-[1170px] px-5 py-12 sm:px-6 lg:px-0 lg:py-16">

        {/* =========================================
            TOP CONTACT BAR
        ========================================= */}
        <div
          className="
            rounded-[14px]
            border
            border-dashed
            border-white/20
            px-5
            py-6
            sm:px-7
            lg:px-5
            lg:py-6
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            {/* Logo */}
            <Link
              href="/"
              className="
                flex
                shrink-0
                items-center
                lg:border-r
                lg:border-white/20
                lg:pr-10
              "
            >
              <img
                src="/images/logo/lv-sky-high-logo.png"
                alt="LV SKY HIGH"
                className="h-auto w-[155px] object-contain"
              />
            </Link>

            {/* Contact Items */}
            <div
              className="
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                lg:flex
                lg:flex-1
                lg:items-center
                lg:justify-end
                lg:gap-7
              "
            >

              {/* Phone */}
              <a
                href="tel:07988522589"
                className="flex items-center gap-3"
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-md
                    border
                    border-primary
                    text-primary
                  "
                >
                  <Phone size={18} strokeWidth={1.8} />
                </span>

                <span className="text-[13px] text-white/90">
                  079885 22589
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@lvskyhigh.com"
                className="flex items-center gap-3"
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-md
                    border
                    border-primary
                    text-primary
                  "
                >
                  <Mail size={18} strokeWidth={1.8} />
                </span>

                <span className="text-[13px] text-white/90">
                  info@lvskyhigh.com
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3">
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-md
                    border
                    border-primary
                    text-primary
                  "
                >
                  <MapPin size={18} strokeWidth={1.8} />
                </span>

                <span className="max-w-[210px] text-[13px] leading-5 text-white/90">
                  First Floor, Chandigarh City Centre,
                  B-44, W VIP Rd, Zirakpur, Punjab 140603
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* =========================================
            MAIN FOOTER CONTENT
        ========================================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            py-12
            sm:grid-cols-2
            lg:grid-cols-[1.35fr_1fr_1fr_1fr]
            lg:gap-10
            lg:py-14
          "
        >

          {/* Newsletter */}
          <div>
            <h3 className="text-[17px] font-semibold">
              Subscribe Newsletter
            </h3>

            <p className="mt-2 text-[13px] text-white/55">
              Get Our Latest Deals and Update
            </p>

            <form className="mt-6">
              <input
                type="email"
                placeholder="Your Email Address"
                className="
                  h-[45px]
                  w-full
                  rounded-full
                  border-0
                  bg-white
                  px-5
                  text-[13px]
                  text-dark
                  outline-none
                  placeholder:text-gray-500
                "
              />

              <button
                type="submit"
                className="
                  group
                  mt-3
                  flex
                  h-[45px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-primary
                  text-[13px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-secondary
                "
              >
                Subscribe

                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </form>

            {/* Social */}
            <div className="mt-5 flex items-center gap-2">
              <SocialIcon href="#" label="Facebook">
                <FaFacebook size={15} />
              </SocialIcon>

              <SocialIcon href="#" label="Twitter">
                <FaTwitter size={15} />
              </SocialIcon>

              <SocialIcon href="#" label="LinkedIn">
                <FaFacebook size={15} />
              </SocialIcon>

              <SocialIcon href="#" label="Instagram">
                <FaInstagramSquare size={15} />
              </SocialIcon>
            </div>
          </div>

          {/* Company */}
          <div>
            <FooterHeading>Company</FooterHeading>

            <ul className="space-y-4">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/destinations">
                Destinations
              </FooterLink>
              <FooterLink href="/international">
                International
              </FooterLink>
              <FooterLink href="/honeymoon">
                Honeymoon
              </FooterLink>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>

            <ul className="space-y-4">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/destinations">
                Destinations
              </FooterLink>
              <FooterLink href="/international">
                International
              </FooterLink>
              <FooterLink href="/contact">
                Contact Us
              </FooterLink>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <FooterHeading>Gallery Post</FooterHeading>

            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((image, index) => (
                <Link
                  href="/destinations"
                  key={index}
                  className="
                    group
                    relative
                    aspect-square
                    overflow-hidden
                    rounded-[3px]
                  "
                >
                  <img
                    src={image}
                    alt={`LV SKY HIGH travel ${index + 1}`}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-primary/0
                      transition-all
                      duration-300
                      group-hover:bg-primary/20
                    "
                  />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================= */}
        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-dashed
            border-white/20
            pt-6
            text-[12px]
            text-white/80
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} LV SKY HIGH. All Rights Reserved
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/terms"
              className="transition-colors hover:text-primary"
            >
              Terms of Use
            </Link>

            <Link
              href="/privacy"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}


/* =========================================
   FOOTER HEADING
========================================= */

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3
      className="
        relative
        mb-7
        inline-block
        pb-3
        text-[16px]
        font-semibold
        text-white
        after:absolute
        after:bottom-0
        after:left-0
        after:h-[2px]
        after:w-[48px]
        after:bg-primary
        after:content-['']
      "
    >
      {children}
    </h3>
  );
}


/* =========================================
   FOOTER LINK
========================================= */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="
          text-[13px]
          text-white/75
          transition-all
          duration-300
          hover:translate-x-1
          hover:text-primary
        "
      >
        {children}
      </Link>
    </li>
  );
}


/* =========================================
   SOCIAL ICON
========================================= */

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="
        flex
        h-7
        w-7
        items-center
        justify-center
        rounded-full
        border
        border-white/70
        text-white
        transition-all
        duration-300
        hover:border-primary
        hover:bg-primary
        hover:text-white
      "
    >
      {children}
    </a>
  );
}