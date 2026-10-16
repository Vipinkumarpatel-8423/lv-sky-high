
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Phone,
} from "lucide-react";
import type { TravelService } from "@/data/services";

type Props = {
  service: TravelService;
};

export default function ServiceDetails({ service }: Props) {
  return (
    <main className="bg-light">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-dark">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-dark via-dark to-dark" />
        <div className="absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-primary/25 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -bottom-24 -left-20 -z-10 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />

        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex flex-wrap items-center gap-2 text-xs text-white/70 sm:text-sm"
          >
            <Link href="/" className="transition hover:text-secondary">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services"
              className="transition hover:text-secondary"
            >
              Services
            </Link>
            <span>/</span>
            <span aria-current="page" className="font-semibold text-white">
              {service.title}
            </span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-secondary sm:text-sm">
              LV SKY HIGH · Travel Services
            </p>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {service.heroTitle}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              {service.heroDescription}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-white transition hover:bg-secondary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
            >
              Enquire About This Service
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
              How We Help
            </p>

            <h2 className="text-2xl font-bold leading-tight text-dark sm:text-3xl">
              {service.overviewTitle}
            </h2>

            <div className="mt-6 space-y-4">
              {service.overview.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-7 text-muted sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-7">
            <h3 className="text-xl font-bold text-dark">
              What You Can Expect
            </h3>

            <div className="mt-5 space-y-5">
              {service.features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-primary"
                    size={21}
                  />
                  <div>
                    <h4 className="font-semibold text-dark">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-y border-border bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-6">
          <div className="mb-7 sm:mb-9">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
              Need to Know
            </p>
            <h2 className="text-2xl font-bold text-dark sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-semibold text-dark marker:hidden sm:text-base [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={19}
                    className="shrink-0 text-secondary transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="max-w-2xl pb-5 pr-5 text-sm leading-7 text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-white px-5 py-9 text-center shadow-sm sm:px-10 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            Personalised Assistance
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-dark sm:text-3xl">
            Need This as Part of Your Trip?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">
            Mention it when you enquire about a package and our team can discuss
            suitable options with you.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://wa.me/917988522589"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#20C76A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#18ad59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C76A] focus-visible:ring-offset-2"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>

            <a
              href="tel:+917988522589"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-dark px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Phone size={17} />
              Call a Travel Expert
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
