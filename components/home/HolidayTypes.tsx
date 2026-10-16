
import Image from "next/image";
import Link from "next/link";

const holidayTypes = [
  {
    title: "Honeymoon",
    image: "/images/holiday-types/honeymoon.jpg",
    route: "/honeymoon",
  },
  {
    title: "Family",
    image: "/images/holiday-types/family.jpg",
    route: "/india-tours",
  },
  {
    title: "Group Tours",
    image: "/images/holiday-types/group-tours.jpg",
    route: "/india-tours",
  },
  {
    title: "Adventure",
    image: "/images/holiday-types/adventure.jpg",
    route: "/india-tours",
  },
  {
    title: "Pilgrimage",
    image: "/images/holiday-types/pilgrimage.jpg",
    route: "/india-tours",
  },
  {
    title: "Luxury",
    image: "/images/holiday-types/luxury.jpg",
    route: "/india-tours",
  },
  {
    title: "International",
    image: "/images/holiday-types/international.jpg",
    route: "/International",
  },
  {
    title: "Weekend",
    image: "/images/holiday-types/weekend.jpg",
    route: "/india-tours",
  },
  {
    title: "Fixed Departure",
    image: "/images/holiday-types/fixed-departure.jpg",
    route: "/india-tours",
  },
];

export default function HolidayTypes() {
  return (
    <section
      aria-labelledby="holiday-types-heading"
      className="bg-white py-8 sm:py-10 lg:py-12"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-6 sm:mb-7">
          <h2
            id="holiday-types-heading"
            className="text-2xl font-bold tracking-tight text-dark sm:text-3xl"
          >
            Plan by Holiday Type
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
            Every trip starts differently — pick the kind of holiday you&apos;re
            after.
          </p>
        </div>

        {/* Horizontally Scrollable Holiday Types */}
        <div className="-mx-5 overflow-x-auto px-5 pb-3 sm:mx-0 sm:px-0">
          <div className="flex w-max min-w-full gap-5 sm:justify-between sm:gap-4 lg:gap-5">
            {holidayTypes.map((holiday) => (
              <Link
                key={holiday.title}
                href={holiday.route}
                aria-label={`Explore ${holiday.title} holidays`}
                className="group flex w-[92px] shrink-0 flex-col items-center rounded-xl p-1 text-center transition duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-[100px] lg:w-[110px]"
              >
                {/* Circular Image */}
                <div className="relative h-[68px] w-[68px] overflow-hidden rounded-full border-2 border-primary/10 bg-primary-light transition duration-300 group-hover:border-secondary group-hover:shadow-md sm:h-[76px] sm:w-[76px] lg:h-[82px] lg:w-[82px]">
                  <Image
                    src={holiday.image}
                    alt={holiday.title}
                    fill
                    sizes="(max-width: 640px) 68px, (max-width: 1024px) 76px, 82px"
                    className="object-cover transition duration-300 group-hover:scale-110"
                  />
                </div>

                <span className="mt-2.5 text-xs font-semibold leading-5 text-dark transition-colors group-hover:text-primary sm:text-[13px]">
                  {holiday.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
