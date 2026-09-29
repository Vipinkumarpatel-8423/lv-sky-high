"use client";

import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Destination {
  id: number;
  name: string;
  image: string;
}

interface DestinationModalProps {
  destinations: Destination[];
  activeIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function DestinationModal({
  destinations,
  activeIndex,
  onClose,
  onNext,
  onPrev,
}: DestinationModalProps) {
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }

      if (event.key === "ArrowLeft") {
        onPrev();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, onClose, onNext, onPrev]);

  if (activeIndex === null) return null;

  const activeDestination = destinations[activeIndex];

  if (!activeDestination) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-[2px] animate-in fade-in duration-300"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close destination preview"
        className="
          absolute
          right-5
          top-4
          z-20
          flex
          h-10
          w-10
          items-center
          justify-center
          text-white
          transition
          duration-200
          hover:text-primary
          md:right-8
          md:top-5
        "
      >
        <X size={25} strokeWidth={2.5} />
      </button>

      {/* Previous Button */}
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous destination"
        className="
          absolute
          left-3
          top-1/2
          z-20
          flex
          -translate-y-1/2
          items-center
          justify-center
          text-white
          transition
          duration-200
          hover:text-primary
          md:left-6
        "
      >
        <ChevronLeft
          size={50}
          strokeWidth={1.2}
          className="md:h-[58px] md:w-[58px]"
        />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Next destination"
        className="
          absolute
          right-3
          top-1/2
          z-20
          flex
          -translate-y-1/2
          items-center
          justify-center
          text-white
          transition
          duration-200
          hover:text-primary
          md:right-6
        "
      >
        <ChevronRight
          size={50}
          strokeWidth={1.2}
          className="md:h-[58px] md:w-[58px]"
        />
      </button>

      {/* Image Container */}
      <div
        className="
          relative
          flex
          max-h-[90vh]
          max-w-[80vw]
          flex-col
          items-center
          animate-in
          zoom-in-95
          duration-300
          md:max-w-[420px]
        "
      >
        <img
          src={activeDestination.image}
          alt={activeDestination.name}
          className="
            block
            max-h-[82vh]
            w-auto
            max-w-full
            object-contain
            shadow-2xl
          "
        />

        {/* Counter */}
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-medium text-white">
          {activeIndex + 1} of {destinations.length}
        </div>
      </div>
    </div>
  );
}