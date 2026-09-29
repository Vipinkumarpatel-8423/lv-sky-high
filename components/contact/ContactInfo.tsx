"use client";

import React from "react";

const contactItems = [
  {
    title: "Office Address",
    value: "First Floor, Chandigarh City Centre, B-44, W VIP Rd, Zirakpur, Punjab 140603",
    type: "location",
  },
  {
    title: "Call Us For Support:",
    value: "+91 79885 22589",
    type: "phone",
  },
  {
    title: "Email Us Anytime:",
    value: "info@lvskyhigh.com",
    type: "email",
  },
];

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <path d="M20 10.5C20 15.5 12 21 12 21S4 15.5 4 10.5a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function ContactIcon({ type }: { type: string }) {
  if (type === "location") return <LocationIcon />;
  if (type === "phone") return <PhoneIcon />;
  return <EmailIcon />;
}

export default function ContactInfo() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {contactItems.map((item) => (
            <div
              key={item.title}
              className="group flex min-h-[215px] flex-col items-center justify-center rounded-[22px] border border-border bg-primary-light px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_15px_40px_rgba(8,120,201,0.12)] sm:min-h-[225px] lg:px-8"
            >
              {/* Icon */}
              <div
                className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-secondary text-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-primary"
              >
                <ContactIcon type={item.type} />
              </div>

              {/* Heading */}
              <h3 className="font-heading text-[20px] font-semibold leading-tight text-dark sm:text-[21px]">
                {item.title}
              </h3>

              {/* Detail */}
              <p className="mt-2 max-w-[330px] text-[14px] font-medium leading-6 text-muted sm:text-[15px]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}