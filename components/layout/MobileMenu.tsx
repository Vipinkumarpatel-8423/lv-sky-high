
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  X,
  Plus,
  MapPin,
  Mail,
  Clock,
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  return (
    <div
      className={`
        fixed
        inset-0
        z-[100]
        bg-white
        transition-transform
        duration-300
        lg:hidden
        ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }
      `}
    >
      <div className="h-full overflow-y-auto px-8 py-8">

        {/* Header */}
        <div className="flex items-center justify-between">

          <Link
            href="/"
            onClick={onClose}
            className="flex min-w-0 items-center"
          >
            <img
              src="/images/logo/lv-sky-high-logo.png"
              alt="LV SKY HIGH - Travel The World"
              width={180}
              height={180}
              // priority
              className="
                h-auto
                w-[110px]
                object-contain
                sm:w-[120px]
              "
            />
          </Link>

          <button
            onClick={onClose}
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-secondary
              text-white
            "
            aria-label="Close menu"
          >
            <X size={23} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-12">

          {/* Home */}
          <Link
            href="/"
            onClick={onClose}
            className="
              flex
              h-[56px]
              items-center
              justify-between
              border-b
              border-gray-200
              text-[16px]
              text-dark
            "
          >
            <span>Home</span>
          </Link>

          {/* Destinations */}
          {/* <Link
            href="/destinations"
            onClick={onClose}
            className="
              flex
              h-[56px]
              items-center
              justify-between
              border-b
              border-gray-200
              text-[16px]
              text-dark
            "
          >
            <span>Destinations</span>
            <Plus size={20} strokeWidth={1.7} />
          </Link> */}

          {/* International */}
          {/* <Link
            href="/international"
            onClick={onClose}
            className="
              flex
              h-[56px]
              items-center
              justify-between
              border-b
              border-gray-200
              text-[16px]
              text-dark
            "
          >
            <span>International</span>
            <Plus size={20} strokeWidth={1.7} />
          </Link> */}

          {/* Honeymoon */}
          {/* <Link
            href="/honeymoon"
            onClick={onClose}
            className="
              flex
              h-[56px]
              items-center
              justify-between
              border-b
              border-gray-200
              text-[16px]
              text-dark
            "
          >
            <span>Honeymoon</span>
            <Plus size={20} strokeWidth={1.7} />
          </Link> */}

          {/* About */}
          <Link
            href="/about"
            onClick={onClose}
            className="
              flex
              h-[56px]
              items-center
              justify-between
              border-b
              border-gray-200
              text-[16px]
              text-dark
            "
          >
            <span>About</span>
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            onClick={onClose}
            className="
              flex
              h-[56px]
              items-center
              justify-between
              border-b
              border-gray-200
              text-[16px]
              text-dark
            "
          >
            <span>Contact</span>
          </Link>

        </nav>

        {/* Contact info */}
        <div className="mt-7">

          <h3 className="text-[21px] font-bold text-dark">
            Contact Info
          </h3>

          <div className="mt-6 space-y-5">

            <div className="flex gap-4">
              <MapPin
                size={19}
                className="mt-1 shrink-0 text-secondary"
              />

              <p className="text-[15px] leading-6 text-muted">
                First Floor, Chandigarh City Centre,
                B-44, W VIP Rd, Zirakpur,
                Punjab 140603
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Mail
                size={19}
                className="shrink-0 text-secondary"
              />

              <a
                href="mailto:info@lvskyhigh.com"
                className="text-[15px] text-muted"
              >
                info@lvskyhigh.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Clock
                size={19}
                className="shrink-0 text-secondary"
              />

              <p className="text-[15px] text-muted">
                Mon–Sat, 09am–06pm
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
