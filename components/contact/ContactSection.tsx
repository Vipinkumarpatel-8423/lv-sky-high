
"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Add your API / email / WhatsApp integration here
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-primary-light px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      {/* Subtle Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full border border-primary/10" />
        <div className="absolute -left-10 top-20 h-72 w-72 rounded-full border border-primary/10" />
        <div className="absolute right-[-120px] bottom-[-100px] h-96 w-96 rounded-full border border-secondary/10" />
        <div className="absolute right-[-70px] bottom-[-50px] h-72 w-72 rounded-full border border-secondary/10" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1fr] lg:gap-14">
          
          {/* =========================================
              LEFT CONTENT
          ========================================= */}
          <div>
            {/* Small Heading */}
            <p className="mb-3 font-heading text-[22px] font-medium italic text-secondary sm:text-[24px]">
              Contact Us
            </p>

            {/* Main Heading */}
            <h2 className="max-w-[560px] font-heading text-3xl font-bold leading-[1.15] text-dark sm:text-4xl lg:text-[46px]">
              Let&apos;s Plan Your
              <br className="hidden sm:block" />
              <span className="text-primary"> Perfect Journey</span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-[540px] font-body text-sm leading-6 text-muted sm:text-base">
              Have a destination in mind? Get in touch with LV SKY HIGH and
              let our travel experts help you plan a memorable journey.
            </p>

            {/* Travel Image */}
            <div className="relative mt-7 h-[270px] w-full overflow-hidden rounded-2xl border border-border shadow-lg sm:h-[320px]">
              <Image
                src="/images/contact/contact-travel.jpg"
                alt="LV Sky High travel consultation"
                fill
                priority
                className="object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />

              {/* Phone CTA */}
              <a
                href="tel:+917988522589"
                className="absolute bottom-5 left-5 flex items-center gap-3 text-white transition-opacity hover:opacity-90"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-primary shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.423-.988a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.24-7.24 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.363-.272.53-.73.417-1.173L7.01 3.13A1.125 1.125 0 0 0 5.92 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </span>

                <span>
                  <span className="block text-xs font-medium text-white/75">
                    Call us today
                  </span>
                  <span className="font-heading text-base font-semibold sm:text-lg">
                    +91 79885 22589
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* =========================================
              RIGHT CONTACT FORM
          ========================================= */}
          <div className="rounded-2xl bg-white p-6 shadow-[0_15px_50px_rgba(8,120,201,0.10)] sm:p-8 lg:p-10">
            {/* Form Heading */}
            <div className="mb-7">
              <h3 className="font-heading text-xl font-bold text-dark sm:text-2xl">
                Fill The Contact Form
              </h3>

              <p className="mt-2 font-body text-sm leading-6 text-muted">
                Feel free to contact us, we&apos;d love to help you plan your
                next adventure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder=" "
                    className="peer w-full border-0 border-b border-border bg-transparent px-0 pb-3 pt-2 font-body text-sm text-dark outline-none transition-colors focus:border-primary"
                  />

                  <label
                    htmlFor="name"
                    className="pointer-events-none absolute left-0 top-2 origin-left font-body text-sm text-muted transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:scale-90 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:scale-90"
                  >
                    Your Name
                  </label>
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder=" "
                    className="peer w-full border-0 border-b border-border bg-transparent px-0 pb-3 pt-2 font-body text-sm text-dark outline-none transition-colors focus:border-primary"
                  />

                  <label
                    htmlFor="phone"
                    className="pointer-events-none absolute left-0 top-2 origin-left font-body text-sm text-muted transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:scale-90 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:scale-90"
                  >
                    Phone Number
                  </label>
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  className="peer w-full border-0 border-b border-border bg-transparent px-0 pb-3 pt-2 font-body text-sm text-dark outline-none transition-colors focus:border-primary"
                />

                <label
                  htmlFor="email"
                  className="pointer-events-none absolute left-0 top-2 origin-left font-body text-sm text-muted transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:scale-90 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:scale-90"
                >
                  Email Address
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder=" "
                  className="peer w-full resize-none border-0 border-b border-border bg-transparent px-0 pb-3 pt-2 font-body text-sm text-dark outline-none transition-colors focus:border-primary"
                />

                <label
                  htmlFor="message"
                  className="pointer-events-none absolute left-0 top-2 origin-left font-body text-sm text-muted transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:scale-90 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:scale-90"
                >
                  Write Your Message
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 font-heading text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-secondary-dark hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}

                {!isSubmitting && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M13 6l6 6-6 6"
                    />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

