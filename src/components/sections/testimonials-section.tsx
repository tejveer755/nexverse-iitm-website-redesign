"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  image: string;
  alt: string;
};

// Adapted data for Nexverse-IITM, using original images for visual consistency as per instructions
const testimonialsData: Testimonial[] = [
  {
    quote:
      "Being part of Nexverse has been the highlight of my college life. The projects are challenging and the community is incredibly supportive.",
    name: "Aisha Sharma",
    title: "Student, B.Tech CSE",
    image:
      "https://cdn.prod.website-files.com/5c34f4c0ee3329913fc72eac/650952fe103084de89af1cfa_paid-creator-sq-image.webp",
    alt: "Profile picture of a Nexverse member",
  },
  {
    quote:
      "Nexverse gave me the practical skills and a network that was invaluable when I started my career in tech. I found my first job through a connection I made here.",
    name: "Rohan Verma",
    title: "Alumni, Class of 2021",
    image:
      "https://cdn.prod.website-files.com/5dfd2203d08cf403964198c2/651bca7a0a7dba0168fdff83_Ilana%2520Dunn.webp",
    alt: "Profile picture of a Nexverse alumnus",
  },
  {
    quote:
      "The passion and innovation I see in Nexverse students is inspiring. It's a fantastic platform for them to apply theoretical knowledge to real-world problems.",
    name: "Dr. Priya K.",
    title: "Faculty Advisor, ECE Dept.",
    image:
      "https://cdn.prod.website-files.com/5dfd2203d08cf403964198c2/651bb692fe81e400f35a2774_%2540connor-mckenzie.webp",
    alt: "Profile picture of a Nexverse faculty advisor",
  },
  {
    quote:
      "From hackathons to guest lectures, the opportunities are endless. Nexverse is more than a club; it's a launchpad for future innovators.",
    name: "Sameer Gupta",
    title: "Student, M.Tech AI",
    image:
      "https://cdn.prod.website-files.com/5c34f4c0ee3329913fc72eac/650952fe103084de89af1cfa_paid-creator-sq-image.webp",
    alt: "Profile picture of another Nexverse member",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="w-[calc(100%-2rem)] flex-shrink-0 sm:w-[380px] lg:w-[420px] bg-card p-10 rounded-3xl flex flex-col">
    <h3 className="text-xl lg:text-2xl font-medium text-card-foreground leading-snug flex-grow">
      “{testimonial.quote}”
    </h3>
    <div className="flex items-center gap-4 mt-8">
      <Image
        src={testimonial.image}
        alt={testimonial.alt}
        width={56}
        height={56}
        className="rounded-full object-cover"
        unoptimized
      />
      <div>
        <p className="font-semibold text-primary">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.offsetWidth * 0.9;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-secondary">
      <div className="container mx-auto py-24 px-6 overflow-hidden">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
            Creators love #paid
          </h2>
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous slide"
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-border bg-transparent transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next slide"
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-border bg-transparent transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="snap-start">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
          <style jsx global>{`
            .snap-mandatory::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;