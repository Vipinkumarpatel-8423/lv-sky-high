import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section
      className="
        relative
        flex
        min-h-[300px]
        items-center
        justify-center
        overflow-hidden
        sm:min-h-[340px]
        lg:min-h-[395px]
      "
    >
      {/* Background Image */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage:
            "url('/images/about/about-hero.jpg')",
        }}
      />

      {/* Theme Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-dark/60
        "
      />

      {/* Secondary Theme Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-secondary/15
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          flex-col
          items-center
          justify-center
          px-5
          text-center
        "
      >
        {/* Title */}
        <h1
          className="
            text-[40px]
            font-bold
            leading-tight
            tracking-[-0.02em]
            text-white
            sm:text-[52px]
            lg:text-[62px]
          "
        >
         Contact Us
        </h1>

        {/* Breadcrumb */}
        <div
          className="
            mt-7
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/80
            px-6
            py-3
            text-[15px]
            text-white
            backdrop-blur-sm
            sm:px-7
            sm:py-3.5
            sm:text-[16px]
          "
        >
          <Link
            href="/"
            className="
              transition-colors
              duration-300
              hover:text-secondary
            "
          >
            Home
          </Link>

          <ChevronRight
            size={20}
            strokeWidth={2}
            className="text-secondary"
          />

          <span className="text-white">
            Contact Us
          </span>
        </div>
      </div>
    </section>
  );
}