
import Link from "next/link";

const PHONE_NUMBER = "7988522589";
const WHATSAPP_NUMBER = `91${PHONE_NUMBER}`;

const whatsappMessage =
  "Hello LV Sky High! I want to plan an international trip. Please help me with packages, itinerary and pricing.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function InternationalCTA() {
  return (
    <section className="bg-light px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-heading text-2xl font-bold leading-tight text-dark sm:text-3xl lg:text-4xl">
          Ready to Plan Your Next Journey?
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
          Tell us where you want to go, and our travel experts
          will help you build the right holiday.
        </p>

        <div className="mx-auto mt-7 flex max-w-3xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          {/* Contact page */}
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-secondary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary sm:flex-1"
          >
            Plan My Trip
          </Link>

          {/* WhatsApp enquiry */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact LV Sky High on WhatsApp"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 sm:flex-1"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M20.52 3.48A11.85 11.85 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.97L.05 24l6.25-1.64a11.94 11.94 0 0 0 5.77 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.49-8.42ZM12.08 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.83 9.83 0 0 1-1.51-5.26c0-5.46 4.45-9.91 9.92-9.91a9.83 9.83 0 0 1 7.01 2.91 9.83 9.83 0 0 1 2.9 7.01c0 5.46-4.45 9.91-9.91 9.91Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.48.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.18-1.41-.08-.12-.28-.2-.58-.35Z" />
            </svg>
            WhatsApp Us
          </a>

          {/* Direct phone call */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-dark px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:flex-1"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.2 18.8a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 3.18 2 2 0 0 1 4.06 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.04 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z"
              />
            </svg>
            Call a Travel Expert
          </a>
        </div>

        {/* <p className="mt-5 text-sm text-muted">
          Need help planning? Call us at{" "}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="font-semibold text-primary hover:underline"
          >
            {PHONE_NUMBER}
          </a>
        </p> */}
      </div>
    </section>
  );
}
