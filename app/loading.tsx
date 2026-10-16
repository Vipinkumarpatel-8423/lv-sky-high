
import Image from "next/image";

export default function Loading() {
  return (
    <main
      role="status"
      aria-label="Loading LV Sky High"
      className="fixed inset-0 z-[9999] flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-white px-5"
    >
      <div className="flex w-full max-w-sm flex-col items-center">
        {/* Responsive Logo */}
        <div className="relative mb-7 h-auto w-full max-w-[300px] aspect-[2.5/1] animate-[fadeIn_0.6s_ease-out] sm:max-w-[340px] md:max-w-[380px]">
          <Image
            src="/images/logo/lv-sky-high-logo.png"
            alt="LV Sky High - Travel the World"
            fill
            priority
            sizes="(max-width: 480px) 85vw, (max-width: 768px) 340px, 380px"
            className="object-contain"
          />
        </div>

        <p className="mb-4 text-center text-sm font-semibold text-dark sm:text-base">
          Preparing Your Next Adventure
        </p>

        {/* Animated progress bar */}
        <div
          className="h-1.5 w-full max-w-[280px] overflow-hidden rounded-full bg-primary-light sm:max-w-xs"
          aria-hidden="true"
        >
          <div className="h-full w-[40%] rounded-full bg-gradient-to-r from-primary to-secondary animate-[travelProgress_1.4s_ease-in-out_infinite]" />
        </div>

        <p className="mt-4 text-center text-[10px] tracking-[0.18em] text-muted sm:text-xs">
          EXPLORE. DISCOVER. EXPERIENCE.
        </p>
      </div>

      <style>{`
        @keyframes travelProgress {
          0% { transform: translateX(-110%); }
          100% { transform: translateX(260%); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </main>
  );
}
