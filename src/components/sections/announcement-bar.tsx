"use client";

import { useState } from "react";
import { X } from "lucide-react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative z-[9999] bg-primary text-primary-foreground">
      <div className="flex h-[50px] items-center justify-center px-4 md:px-16">
        <div className="flex flex-shrink items-center gap-x-3 text-center sm:gap-x-4">
          <p className="flex-shrink-0 text-sm font-normal sm:text-base">
            Explore the latest innovations from Nexverse-IITM's recent showcase.
          </p>
          <a
            href="#"
            className="inline-flex h-auto flex-shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-white px-4 py-1.5 text-xs font-medium text-black transition-colors hover:bg-secondary sm:text-sm"
            aria-label="See Report"
          >
            Learn More
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          aria-label="banner close button"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 transition-colors hover:text-white md:right-6"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;