"use client";

import Link from "next/link";
import { ChevronDown, Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling Down
        setIsScrollingUp(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling Up
        setIsScrollingUp(true);
      }

      setScrollY(currentScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Compact navbar:
   * - 100px ke baad scroll down par show
   * - Scroll up par hide
   */
  const showStickyNavbar = scrollY > 100 && !isScrollingUp;

  /*
   * Up scroll par full navbar show
   */
  const showStickyFullNavbar = scrollY > 100 && isScrollingUp;

  return (
    <>
      {/* =====================================================
          ORIGINAL NAVBAR
          ===================================================== */}

      <header className="w-full bg-white border-t-5 border-secondary">
        {/* ================= TOP BAR ================= */}
        <div className="hidden lg:block">
          <div className="mx-auto max-w-[1110px]">
            <div
              className="
                flex
                min-h-[58px]
                items-center
                justify-between
                rounded-b-[30px]
                bg-secondary
                px-8
                text-sm
                text-white
              "
            >
              {/* Left */}
              <div className="flex items-center gap-8">
                <a
                  href="mailto:info@lvskyhigh.com"
                  className="flex items-center gap-2 hover:opacity-80"
                >
                  <span>✉</span>
                  <span>info@lvskyhigh.com</span>
                </a>

                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Zirakpur, Punjab, India</span>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-center gap-5 font-semibold">
                <a href="#" aria-label="Facebook">
                  f
                </a>

                <a href="#" aria-label="Twitter">
                  X
                </a>

                <a href="#" aria-label="LinkedIn">
                  in
                </a>

                <a href="#" aria-label="Instagram">
                  ◎
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAIN NAVBAR ================= */}
        <div className="border-b border-gray-100 bg-white">
          <div
            className="
              mx-auto
              flex
              h-[88px]
              max-w-[1110px]
              items-center
              justify-between
              px-5
              lg:px-0
            "
          >
            {/* Logo */}
             <Link
      href="/"
      className="flex shrink-0 items-center"
      aria-label="LV SKY HIGH Home"
    >
      <Image
        src="/images/logo/lv-sky-high-logo.png"
        alt="LV SKY HIGH - Travel The World"
        width={150}
        height={110}
        priority
        className="h-auto w-[90px] object-contain sm:w-[90px]"
      />
    </Link>

            {/* Logo */}
{/* <Link href="/" className="flex items-center">
  <Image
    src="/images/logo/lv-sky-high-logo.png"
    alt="LV SKY HIGH"
    width={190}
    height={70}
    priority
    className="h-auto w-[190px] object-contain"
  />
</Link> */}

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-9 lg:flex">
              <Link
                href="/"
                className="text-[15px] font-medium text-dark transition hover:text-primary"
              >
                Home
              </Link>

              {/* <Link
                href="/destinations"
                className="flex items-center gap-1 text-[15px] font-medium text-dark transition hover:text-primary"
              >
                Destinations
                <ChevronDown size={16} />
              </Link> */}

              {/* <Link
                href="/international"
                className="text-[15px] font-medium text-dark transition hover:text-primary"
              >
                International
              </Link> */}

              {/* <Link
                href="/honeymoon"
                className="text-[15px] font-medium text-dark transition hover:text-primary"
              >
                Honeymoon
              </Link> */}

              <Link
                href="/about"
                className="text-[15px] font-medium text-dark transition hover:text-primary"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-[15px] font-medium text-dark transition hover:text-primary"
              >
                Contact
              </Link>
            </nav>

            {/* Right Buttons */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                type="button"
                className="
                  flex
                  h-[50px]
                  w-[50px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  text-dark
                  transition
                  hover:border-primary
                  hover:text-primary
                "
                aria-label="Search"
              >
                <Search size={22} strokeWidth={1.8} />
              </button>

              {/* Menu */}
              <button
                type="button"
                onClick={onMenuClick}
                className="
                  flex
                  h-[50px]
                  w-[50px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  text-dark
                  transition
                  hover:border-secondary
                  hover:text-secondary
                "
                aria-label="Open menu"
              >
                <Menu size={25} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          STICKY NAVBAR
          Scroll Down -> Main Navbar Only
          Scroll Up   -> Top Bar + Main Navbar
          ===================================================== */}

      <div
        className={`
          fixed
          left-0
          top-0
          z-[60]
          w-full
          bg-white
          shadow-md
          transition-all
          duration-500
          ease-in-out
          ${
            showStickyNavbar || showStickyFullNavbar
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
      >
        {/* ================= TOP BAR ================= */}

        <div
          className={`
            hidden
            overflow-hidden
            transition-all
            duration-500
            lg:block
            ${
              showStickyFullNavbar
                ? "max-h-[58px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="mx-auto max-w-[1110px]">
            <div
              className="
                flex
                min-h-[58px]
                items-center
                justify-between
                rounded-b-[30px]
                bg-secondary
                px-8
                text-sm
                text-white
              "
            >
              {/* Left */}
              <div className="flex items-center gap-8">
                <a
                  href="mailto:info@lvskyhigh.com"
                  className="flex items-center gap-2 hover:opacity-80"
                >
                  <span>✉</span>
                  <span>info@lvskyhigh.com</span>
                </a>

                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Zirakpur, Punjab, India</span>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-center gap-5 font-semibold">
                <a href="#" aria-label="Facebook">
                  f
                </a>

                <a href="#" aria-label="Twitter">
                  X
                </a>

                <a href="#" aria-label="LinkedIn">
                  in
                </a>

                <a href="#" aria-label="Instagram">
                  ◎
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STICKY MAIN NAVBAR ================= */}

       <div className="border-b border-gray-100 bg-white">
  <div
    className="
      mx-auto
      flex
      h-[88px]
      max-w-[1110px]
      items-center
      justify-between
      px-5
      lg:px-0
    "
  >
    {/* Logo */}
    <Link
      href="/"
      className="flex shrink-0 items-center"
      aria-label="LV SKY HIGH Home"
    >
      <Image
        src="/images/logo/lv-sky-high-logo.png"
        alt="LV SKY HIGH - Travel The World"
        width={170}
        height={150}
        priority
        className="h-auto w-[90px] object-contain sm:w-[90px]"
      />
    </Link>

    {/* Desktop Navigation */}
    <nav className="hidden items-center gap-9 lg:flex">
      <Link
        href="/"
        className="text-[15px] font-medium text-dark transition hover:text-primary"
      >
        Home
      </Link>

      {/* <Link
        href="/destinations"
        className="flex items-center gap-1 text-[15px] font-medium text-dark transition hover:text-primary"
      >
        Destinations
        <ChevronDown size={16} />
      </Link> */}

      {/* <Link
        href="/international"
        className="text-[15px] font-medium text-dark transition hover:text-primary"
      >
        International
      </Link> */}

      {/* <Link
        href="/honeymoon"
        className="text-[15px] font-medium text-dark transition hover:text-primary"
      >
        Honeymoon
      </Link> */}

      <Link
        href="/about"
        className="text-[15px] font-medium text-dark transition hover:text-primary"
      >
        About
      </Link>

      <Link
        href="/contact"
        className="text-[15px] font-medium text-dark transition hover:text-primary"
      >
        Contact
      </Link>
    </nav>

    {/* Buttons */}
    <div className="flex items-center gap-4">
      <button
        type="button"
        className="
          flex
          h-[50px]
          w-[50px]
          items-center
          justify-center
          rounded-full
          border
          border-gray-200
          text-dark
          transition
          hover:border-primary
          hover:text-primary
        "
        aria-label="Search"
      >
        <Search size={22} strokeWidth={1.8} />
      </button>

      <button
        type="button"
        onClick={onMenuClick}
        className="
          flex
          h-[50px]
          w-[50px]
          items-center
          justify-center
          rounded-full
          border
          border-gray-200
          text-dark
          transition
          hover:border-secondary
          hover:text-secondary
        "
        aria-label="Open menu"
      >
        <Menu size={25} strokeWidth={1.8} />
      </button>
    </div>
  </div>
</div>
      </div>
    </>
  );
}