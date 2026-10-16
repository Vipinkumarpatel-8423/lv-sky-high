



"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Search,
  Users,
  X,
  MessageCircle,
  Phone,
  ArrowRight,
  IndianRupee,
} from "lucide-react";

const WHATSAPP_NUMBER = "917988522589";
const PHONE_NUMBER = "+917988522589";

const destinations = [
  {
    label: "Goa",
    route: "/india-tours/goa",
    rate: 3000,
  },
  {
    label: "Kerala",
    route: "/india-tours/kerala",
    rate: 3500,
  },
  {
    label: "Kashmir",
    route: "/india-tours/kashmir",
    rate: 4000,
  },
  {
    label: "Himachal Pradesh",
    route: "/india-tours/himachal-pradesh",
    rate: 3000,
  },
  {
    label: "Rajasthan",
    route: "/india-tours/rajasthan",
    rate: 3200,
  },
  {
    label: "Uttarakhand",
    route: "/india-tours/uttarakhand",
    rate: 2800,
  },
  {
    label: "Andaman Islands",
    route: "/india-tours/andaman-islands",
    rate: 5000,
  },
  {
    label: "Leh-Ladakh",
    route: "/india-tours/leh-ladakh",
    rate: 4500,
  },
  {
    label: "Dubai",
    route: "/International/dubai",
    rate: 7000,
  },
  {
    label: "Thailand",
    route: "/International/thailand",
    rate: 6000,
  },
  {
    label: "Russia",
    route: "/International/russia",
    rate: 8000,
  },
];

function getLocalDate() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getNights(checkIn: string, checkOut: string) {
  const start = new Date(`${checkIn}T00:00:00Z`);
  const end = new Date(`${checkOut}T00:00:00Z`);

  return Math.round(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );
}

function formatDate(date: string) {
  if (!date) return "";

  return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function SearchBox() {
  const router = useRouter();

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const today = getLocalDate();

  const selectedDestination = destinations.find(
    (item) => item.route === destination
  );

  const nights =
    checkIn && checkOut && checkOut > checkIn
      ? getNights(checkIn, checkOut)
      : 0;

  const guestCount = Number(guests);

  // Sample planning estimate:
  // destination rate × nights × guests.
  const estimatedTotal =
    selectedDestination && nights > 0
      ? selectedDestination.rate * nights * guestCount
      : 0;

  const pricePerGuest =
    guestCount > 0 ? estimatedTotal / guestCount : 0;

  const queryString = new URLSearchParams({
    checkIn,
    checkOut,
    guests,
  }).toString();

  const destinationUrl = selectedDestination
    ? `${selectedDestination.route}?${queryString}`
    : "/india-tours";

  const whatsappMessage = selectedDestination
    ? [
        "Hello LV Sky High!",
        "",
        "I would like to enquire about a trip.",
        `Destination: ${selectedDestination.label}`,
        `Check-in: ${formatDate(checkIn)}`,
        `Check-out: ${formatDate(checkOut)}`,
        `Duration: ${nights} nights`,
        `Guests: ${guests === "5" ? "5+" : guests}`,
        `Estimated planning budget: ${formatPrice(estimatedTotal)}`,
        "",
        "Please share the actual package price, availability and itinerary.",
      ].join("\n")
    : "Hello LV Sky High! I would like to enquire about travel packages.";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!selectedDestination) {
      setError("Please select a destination.");
      return;
    }

    if (!checkIn || !checkOut) {
      setError("Please select your check-in and check-out dates.");
      return;
    }

    if (checkIn < today) {
      setError("Check-in date cannot be in the past.");
      return;
    }

    if (checkOut <= checkIn) {
      setError("Check-out date must be after check-in.");
      return;
    }

    setIsModalOpen(true);
  }

  const labelClass =
    "mb-2 flex items-center gap-2 text-xs font-semibold text-dark";

  const fieldClass =
  "h-[42px] sm:h-[46px] w-full min-w-0 rounded-lg border border-gray-200 bg-white px-3 text-sm text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10";

  return (
    <>
      {/* Search Form */}
      <div className="  absolute bottom-0 left-1/2 z-20
  w-[calc(100%-20px)] max-w-[1150px]
  -translate-x-1/2 translate-y-[58%]
  sm:w-[calc(100%-40px)]
  sm:translate-y-1/2">
        <form
          onSubmit={handleSubmit}
          className=" mt-0 rounded-xl border border-gray-100
  bg-white p-3
  shadow-[0_12px_40px_rgba(0,0,0,0.14)]
  sm:mt-1 sm:p-5
  lg:p-6"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-dark sm:text-lg">
                Plan Your Next Holiday
              </h2>
              <p className="mt-1 text-xs text-muted sm:text-sm">
                Choose your destination and travel dates.
              </p>
            </div>

            <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary sm:flex">
              <Search size={19} />
            </div>
          </div>

          <div className=" mb-4 grid grid-cols-1 gap-3
  sm:grid-cols-2 sm:gap-4
  lg:grid-cols-[1.4fr_1fr_1fr_0.8fr_auto]
  lg:items-end">
            {/* Destination */}
            <div className="min-w-0">
              <label htmlFor="destination" className={labelClass}>
                <MapPin size={16} className="text-secondary" />
                Destination
              </label>

              <div className="relative">
                <select
                  id="destination"
                  value={destination}
                  onChange={(event) => {
                    setDestination(event.target.value);
                    setError("");
                  }}
                  className={`${fieldClass} appearance-none pr-9`}
                  required
                >
                  <option value="" disabled>
                    Where are you going?
                  </option>

                  {destinations.map((item) => (
                    <option key={item.route} value={item.route}>
                      {item.label}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={15}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            {/* Check In */}
            <div className="min-w-0">
              <label htmlFor="checkIn" className={labelClass}>
                <CalendarDays size={16} className="text-secondary" />
                Check In
              </label>

              <input
                id="checkIn"
                type="date"
                min={today}
                value={checkIn}
                onChange={(event) => {
                  setCheckIn(event.target.value);
                  setError("");
                }}
                className={fieldClass}
                required
              />
            </div>

            {/* Check Out */}
            <div className="min-w-0">
              <label htmlFor="checkOut" className={labelClass}>
                <CalendarDays size={16} className="text-secondary" />
                Check Out
              </label>

              <input
                id="checkOut"
                type="date"
                min={checkIn || today}
                value={checkOut}
                onChange={(event) => {
                  setCheckOut(event.target.value);
                  setError("");
                }}
                className={fieldClass}
                required
              />
            </div>

            {/* Guests */}
            <div className="min-w-0">
              <label htmlFor="guests" className={labelClass}>
                <Users size={16} className="text-secondary" />
                Guests
              </label>

              <div className="relative">
                <select
                  id="guests"
                  value={guests}
                  onChange={(event) => setGuests(event.target.value)}
                  className={`${fieldClass} appearance-none pr-8`}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>

                <ChevronDown
                  size={15}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="inline-flex h-[46px] w-full items-center justify-center gap-2 rounded-full bg-secondary px-7 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-secondary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 lg:w-auto"
            >
              <Search size={16} />
              Search
            </button>
          </div>

          {error && (
            <p role="alert" className="mt-3 text-sm font-medium text-red-600">
              {error}
            </p>
          )}
        </form>
      </div>

      {/* Estimate Modal */}
      {isModalOpen && selectedDestination && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-dark/65 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close trip estimate"
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default"
          />

          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="trip-modal-title"
            // className="relative z-10 max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
            
className="custom-modal-scrollbar relative z-10 max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"

          >
            {/* Modal Header */}
            <div className="relative overflow-hidden bg-dark px-5 pb-6 pt-6 text-white sm:px-7 sm:pt-7">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/30 blur-2xl" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary">
                    <CheckCircle2 size={15} />
                    Your Trip Summary
                  </p>

                  <h2
                    id="trip-modal-title"
                    className="mt-3 text-2xl font-extrabold sm:text-3xl"
                  >
                    {selectedDestination.label}
                  </h2>

                  <p className="mt-2 text-sm text-white/75">
                    Your holiday plan at a glance
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close modal"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="space-y-5 p-5 sm:p-7">
              {/* Trip Details */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border p-3 sm:p-4">
                  <p className="flex items-center gap-2 text-xs text-muted">
                    <CalendarDays size={15} className="text-secondary" />
                    Check In
                  </p>
                  <p className="mt-2 text-sm font-bold text-dark">
                    {formatDate(checkIn)}
                  </p>
                </div>

                <div className="rounded-xl border border-border p-3 sm:p-4">
                  <p className="flex items-center gap-2 text-xs text-muted">
                    <CalendarDays size={15} className="text-secondary" />
                    Check Out
                  </p>
                  <p className="mt-2 text-sm font-bold text-dark">
                    {formatDate(checkOut)}
                  </p>
                </div>

                <div className="rounded-xl border border-border p-3 sm:p-4">
                  <p className="flex items-center gap-2 text-xs text-muted">
                    <Users size={15} className="text-secondary" />
                    Travellers
                  </p>
                  <p className="mt-2 text-sm font-bold text-dark">
                    {guests === "5" ? "5+ Guests" : `${guests} Guests`}
                  </p>
                </div>

                <div className="rounded-xl border border-border p-3 sm:p-4">
                  <p className="flex items-center gap-2 text-xs text-muted">
                    <CalendarDays size={15} className="text-secondary" />
                    Duration
                  </p>
                  <p className="mt-2 text-sm font-bold text-dark">
                    {nights} {nights === 1 ? "Night" : "Nights"}
                  </p>
                </div>
              </div>

              {/* Price Estimate */}
              <div className="rounded-xl border border-primary/20 bg-primary-light/60 p-4 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-primary-dark">
                  Estimated Trip Budget
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-1 text-dark">
                  <IndianRupee size={23} />
                  <span className="text-3xl font-extrabold sm:text-4xl">
                    {new Intl.NumberFormat("en-IN", {
                      maximumFractionDigits: 0,
                    }).format(estimatedTotal)}
                  </span>
                </div>

                <p className="mt-2 text-sm text-muted">
                  Approximately {formatPrice(pricePerGuest)} per guest
                </p>

                <p className="mt-3 text-xs leading-5 text-muted">
                  Indicative estimate only, calculated using sample destination
                  rates, trip duration and guest count. Actual prices, room
                  sharing, transport, meals and availability must be confirmed
                  by LV Sky High.
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    router.push(destinationUrl);
                  }}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-3 text-sm font-bold text-white transition hover:bg-secondary-dark"
                >
                  Explore {selectedDestination.label}
                  <ArrowRight size={17} />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#16A34A] px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700"
                >
                  <MessageCircle size={18} />
                  Discuss Your Trip on WhatsApp
                </a>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-bold text-dark transition hover:bg-light"
                >
                  <Phone size={17} className="text-primary" />
                  Call a Travel Expert
                </a>
              </div>

              <p className="text-center text-xs leading-5 text-muted">
                Final quotation will be shared after confirming your travel
                requirements.
              </p>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
