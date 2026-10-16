
"use client";

import { useEffect, useRef, useState } from "react";

interface Achievement {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const achievements: Achievement[] = [
  {
    value: 7684,
    suffix: "+",
    label: "Happy Traveller",
    icon: "✈",
  },
  {
    value: 269,
    suffix: "+",
    label: "Tour Completed",
    icon: "▣",
  },
  {
    value: 99,
    suffix: "%",
    label: "Total Reviews",
    icon: "☷",
  },
  {
    value: 2368,
    suffix: "",
    label: "Awards & Honors",
    icon: "♙",
  },
];

function Counter({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1800;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= value) {
        current = value;
        clearInterval(timer);
      }

      setCount(Math.floor(current));
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function AchievementSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mt-12 bg-white sm:mt-16 lg:mt-20"
    >
      {/* TOP PRIMARY AREA */}
      <div className="relative bg-primary pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-20">
        {/* Top Wave */}
        <div className="absolute left-0 top-0 h-10 w-full overflow-hidden">
          <div className="absolute -top-7 left-[-2%] h-14 w-[104%] rounded-[50%] bg-white" />
        </div>

        <div className="mx-auto max-w-[1110px] px-5 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <div className="max-w-[430px]">
              <p className="font-script text-[17px] italic text-white sm:text-[18px]">
                Achievement
              </p>

              <h2 className="mt-1 text-[25px] font-bold leading-[1.15] text-white sm:text-[30px] lg:text-[34px]">
                Ready To Adventure And
                <br />
                Enjoy Natural
              </h2>
            </div>

            {/* Read More */}
            <div className="sm:pt-7">
              <a
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-dark px-5 py-3 text-[11px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-dark"
              >
                Read More
                <span className="text-sm">→</span>
              </a>
            </div>
          </div>

          {/* RESPONSIVE ACHIEVEMENT CARDS */}
          <div
            className="relative z-20 mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4"
          >
            {achievements.map((item, index) => (
              <div
                key={item.label}
                className={`
                  flex aspect-square min-w-0 w-full items-center justify-center
                  rounded-[10px] bg-secondary p-1.5
                  shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                  transition-all duration-700
                  sm:p-2
                  ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-12 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: `${index * 180}ms`,
                }}
              >
                {/* Inner Dashed Border */}
                <div className="flex h-full w-full flex-col items-center justify-center rounded-[8px] border border-dashed border-gray-300 px-1.5 sm:px-2">
                  {/* Icon */}
                  <div className="mb-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f8f4f2] text-[15px] text-dark sm:mb-3 sm:h-10 sm:w-10 sm:text-[17px] lg:h-11 lg:w-11">
                    {item.icon}
                  </div>

                  {/* Counter */}
                  <div className="text-center text-[18px] font-bold leading-tight text-dark sm:text-[22px] lg:text-[24px]">
                    <Counter
                      value={item.value}
                      suffix={item.suffix}
                      start={isVisible}
                    />
                  </div>

                  {/* Label */}
                  <p className="mt-1 max-w-full break-words text-center text-[9px] font-medium leading-tight text-gray-600 sm:text-[11px]">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM WHITE SPACE */}
      <div className="h-6 bg-white sm:h-10 lg:h-14" />
    </section>
  );
}
