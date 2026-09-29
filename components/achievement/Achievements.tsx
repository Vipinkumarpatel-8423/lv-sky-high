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
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-visible bg-white mt-20"
    >
      {/* ================= TOP PRIMARY AREA ================= */}
      <div className="relative bg-primary pt-16   pb-28 sm:pt-20 sm:pb-32 lg:pt-20 lg:pb-36">
        
        {/* Top Wave */}
        <div className="absolute -top-[1px] left-0 h-10 w-full overflow-hidden">
          <div className="absolute -top-7 left-[-2%] h-14 w-[104%] rounded-[50%] bg-white" />
        </div>

        <div className="mx-auto max-w-[1110px] px-5 lg:px-0">
          
          {/* Heading */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            
            <div className="max-w-[430px]">
              <p className="font-script text-[17px] italic text-white sm:text-[18px]">
                Achievement
              </p>

              <h2 className="mt-1 text-[28px] font-bold leading-[1.12] text-white sm:text-[32px] lg:text-[34px]">
                Ready To Adventure And
                <br />
                Enjoy Natural
              </h2>
            </div>

            {/* Read More */}
            <div className="sm:pt-7">
              <a
                href="/about"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-dark
                  px-5
                  py-3
                  text-[11px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-dark
                "
              >
                Read More
                <span className="text-sm">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div
          className="
            absolute
            left-1/2
            bottom-0
            z-20
            w-full
            -translate-x-1/2
            translate-y-1/2
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-[1110px]
              grid-cols-2
              gap-3
              px-5
              sm:gap-4
              lg:grid-cols-4
              lg:px-0
            "
          >
            {achievements.map((item, index) => (
              <div
                key={item.label}
                className={`
                  aspect-square
                  w-full
                  rounded-[10px]
                  bg-secondary
                  p-[9px]
                  shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-700
                  ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-24 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: `${index * 180}ms`,
                }}
              >
                {/* Inner Dashed Border */}
                <div
                  className="
                    flex
                    h-full
                    w-full
                    flex-col
                    items-center
                    justify-center
                    rounded-[8px]
                    border
                    border-dashed
                    border-gray-300
                    px-2
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      mb-3
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-[#f8f4f2]
                      text-[18px]
                      text-dark
                    "
                  >
                    {item.icon}
                  </div>

                  {/* Counter */}
                  <div
                    className="
                      text-[21px]
                      font-bold
                      leading-none
                      text-dark
                      sm:text-[24px]
                    "
                  >
                    <Counter
                      value={item.value}
                      suffix={item.suffix}
                      start={isVisible}
                    />
                  </div>

                  {/* Label */}
                  <p
                    className="
                      mt-1
                      text-center
                      text-[10px]
                      font-medium
                      leading-tight
                      text-gray-600
                      sm:text-[11px]
                    "
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM WHITE SPACE ================= */}
      <div className="h-[150px] bg-white sm:h-[165px] lg:h-[180px]" />
    </section>
  );
}






// "use client";

// import {
//   Award,
//   BadgeCheck,
//   Plane,
//   Star,
//   ArrowRight,
// } from "lucide-react";

// const stats = [
//   {
//     value: "7684",
//     label: "Happy Travellers",
//     icon: Plane,
//   },
//   {
//     value: "269+",
//     label: "Tours Completed",
//     icon: BadgeCheck,
//   },
//   {
//     value: "99%",
//     label: "Total Reviews",
//     icon: Star,
//   },
//   {
//     value: "2368",
//     label: "Awards & Honors",
//     icon: Award,
//   },
// ];

// export default function Achievements() {
//   return (
//     <section className="relative w-full overflow-hidden bg-white">
//       {/* ================= TOP ORANGE AREA ================= */}
//       <div className="relative bg-primary pb-24 pt-14 sm:pb-28 sm:pt-16 lg:pt-14">

//         {/* Top Wave */}
//         <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-[0]">
//           <svg
//             className="relative block h-[42px] w-full"
//             viewBox="0 0 1440 80"
//             preserveAspectRatio="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="
//                 M0,45
//                 C30,75 55,75 85,45
//                 C115,15 140,15 170,45
//                 C200,75 225,75 255,45
//                 C285,15 310,15 340,45
//                 C370,75 395,75 425,45
//                 C455,15 480,15 510,45
//                 C540,75 565,75 595,45
//                 C625,15 650,15 680,45
//                 C710,75 735,75 765,45
//                 C795,15 820,15 850,45
//                 C880,75 905,75 935,45
//                 C965,15 990,15 1020,45
//                 C1050,75 1075,75 1105,45
//                 C1135,15 1160,15 1190,45
//                 C1220,75 1245,75 1275,45
//                 C1305,15 1330,15 1360,45
//                 C1390,75 1415,75 1440,45
//                 L1440,0
//                 L0,0
//                 Z
//               "
//               fill="white"
//             />
//           </svg>
//         </div>

//         <div className="relative mx-auto max-w-[1200px] px-5 pt-8 sm:px-6 lg:px-8">

//           {/* ================= HEADING ================= */}
//           <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

//             <div>
//               <p className="font-script text-xl text-white sm:text-2xl">
//                 Achievement
//               </p>

//               <h2 className="mt-1 max-w-[430px] text-3xl font-bold leading-[1.08] text-white sm:text-4xl">
//                 Ready To Adventure And
//                 <br />
//                 Enjoy Natural
//               </h2>
//             </div>

//             <a
//               href="/about"
//               className="
//                 group
//                 inline-flex
//                 w-fit
//                 items-center
//                 gap-2
//                 rounded-full
//                 bg-dark
//                 px-5
//                 py-3
//                 text-xs
//                 font-semibold
//                 text-white
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:bg-white
//                 hover:text-dark
//               "
//             >
//               Read More
//               <ArrowRight
//                 size={15}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </a>
//           </div>

//           {/* ================= STATS CARDS ================= */}
//           <div className="relative z-10 mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

//             {stats.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.label}
//                   className="
//                     group
//                     rounded-xl
//                     bg-white
//                     p-2.5
//                     shadow-[0_12px_35px_rgba(0,0,0,0.08)]
//                   "
//                 >
//                   {/* Dashed Inner Border */}
//                   <div
//                     className="
//                       flex
//                       min-h-[108px]
//                       flex-col
//                       items-center
//                       justify-center
//                       rounded-lg
//                       border
//                       border-dashed
//                       border-gray-300
//                       px-3
//                       py-3
//                       text-center
//                       transition-all
//                       duration-300
//                       group-hover:border-primary
//                     "
//                   >
//                     {/* Icon */}
//                     <div
//                       className="
//                         mb-2
//                         flex
//                         h-10
//                         w-10
//                         items-center
//                         justify-center
//                         rounded-full
//                         bg-primary/10
//                         text-primary
//                         transition-all
//                         duration-300
//                         group-hover:bg-primary
//                         group-hover:text-white
//                       "
//                     >
//                       <Icon size={19} strokeWidth={1.8} />
//                     </div>

//                     {/* Number */}
//                     <div className="text-xl font-bold leading-none text-dark">
//                       {item.value}
//                     </div>

//                     {/* Label */}
//                     <p className="mt-1 text-[11px] font-medium text-gray-500">
//                       {item.label}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ================= BOTTOM WAVE ================= */}
//       <div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-[0]">
//         <svg
//           className="relative block h-[35px] w-full"
//           viewBox="0 0 1440 70"
//           preserveAspectRatio="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="
//               M0,30
//               C35,5 60,5 95,30
//               C130,55 155,55 190,30
//               C225,5 250,5 285,30
//               C320,55 345,55 380,30
//               C415,5 440,5 475,30
//               C510,55 535,55 570,30
//               C605,5 630,5 665,30
//               C700,55 725,55 760,30
//               C795,5 820,5 855,30
//               C890,55 915,55 950,30
//               C985,5 1010,5 1045,30
//               C1080,55 1105,55 1140,30
//               C1175,5 1200,5 1235,30
//               C1270,55 1295,55 1330,30
//               C1365,5 1400,5 1440,30
//               L1440,70
//               L0,70
//               Z
//             "
//             fill="white"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }