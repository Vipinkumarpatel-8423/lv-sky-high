"use client";

import Link from "next/link";
import { X, MapPin, Mail, Clock, Phone } from "lucide-react";
import Image from "next/image";

interface DesktopSideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DesktopSideMenu({
  isOpen,
  onClose,
}: DesktopSideMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed
          inset-0
          z-40
          bg-black/30
          backdrop-blur-[2px]
          transition-opacity
          duration-300
          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Side panel */}
      <aside
        className={`
          fixed
          right-0
          top-0
          z-[100]
          h-screen
          w-full
          max-w-[400px]
          bg-white
          shadow-2xl
          transition-transform
          duration-300
          ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col overflow-y-auto px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between gap-4">
            {" "}
            {/* Logo */}{" "}
            <Link
              href="/"
              onClick={onClose}
              className="flex min-w-0 shrink-0 items-center"
              aria-label="LV SKY HIGH Home"
            >
              {" "}
              <img
                src="/images/logo/lv-sky-high-logo.png"
                alt="LV SKY HIGH - Travel The World"
                width={180}
                height={180}
                // priority
                className=" h-auto w-[110px] object-contain xs:w-[110px] sm:w-[120px] "
              />{" "}
            </Link>{" "}
            {/* Close Button */}{" "}
            <button
              type="button"
              onClick={onClose}
              className=" flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-white transition-all duration-200 hover:bg-secondary-dark active:scale-95 sm:h-12 sm:w-12 "
              aria-label="Close menu"
            >
              {" "}
              <X size={22} strokeWidth={2} className="sm:h-6 sm:w-6" />{" "}
            </button>{" "}
          </div>

          {/* Description */}
          <p className="mt-12 text-[16px] leading-7 text-muted">
            Explore the world with LV SKY HIGH. Discover unforgettable
            destinations, romantic getaways and memorable holidays planned
            around you.
          </p>

          {/* Contact Info */}
          <div className="mt-7">
            <h3 className="text-[20px] font-bold text-dark">Contact Info</h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-secondary"
                  strokeWidth={1.5}
                />

                <p className="text-[15px] leading-6 text-muted">
                  First Floor, Chandigarh City Centre, B-44, W VIP Rd, Zirakpur,
                  Punjab 140603
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail
                  size={20}
                  className="shrink-0 text-secondary"
                  strokeWidth={1.5}
                />

                <a
                  href="mailto:info@lvskyhigh.com"
                  className="text-[15px] text-muted hover:text-primary"
                >
                  info@lvskyhigh.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Clock
                  size={20}
                  className="shrink-0 text-secondary"
                  strokeWidth={1.5}
                />

                <p className="text-[15px] text-muted">Mon–Sat, 09am–06pm</p>
              </div>

              <div className="flex items-center gap-4">
                <Phone
                  size={20}
                  className="shrink-0 text-secondary"
                  strokeWidth={1.5}
                />

                <a
                  href="tel:07988522589"
                  className="text-[15px] text-muted hover:text-primary"
                >
                  079885 22589
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto pt-10">
            <Link
              href="/contact"
              onClick={onClose}
              className="
                flex
                h-[58px]
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-secondary
                text-[16px]
                font-semibold
                text-white
                transition
                hover:bg-secondary-dark
              "
            >
              Request A Quote
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
