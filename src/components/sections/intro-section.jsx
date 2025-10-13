"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "../magnetic-button";
import Link from "next/link";


const AnimatedText = ({ text, className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const events = [
    { name: 'Hackathons', href: '#' },
    { name: 'Workshops', href: '#' },
    { name: 'Tech Talks', href: '#' },
    { name: 'Networking', href: '#' },
    { name: 'Guest Lectures', href: '#' },
  ];
  const words = text.split(" ");
  const wordsCount = words.length;

  return (
    <div ref={targetRef} className="w-full relative h-[300vh]">

      <div className="sticky mx-auto top-24 w-full flex overflow-x-hidden flex-col items-center justify-center">
        <p className="text-4xl max-w-5xl mx-auto mt-14 font-bold tracking-tight text-center text-foreground sm:text-4xl lg:text-5xl">
          {words.map((word, idx) => {
            const wordAppearProgressStart = (idx / wordsCount) * 0.8;
            const wordAppearProgressEnd = wordAppearProgressStart + 0.1;

            const opacity = useTransform(
              scrollYProgress,
              [wordAppearProgressStart, wordAppearProgressEnd],
              [0.3, 1]
            );

            const blur= useTransform(
              scrollYProgress,
              [wordAppearProgressStart, wordAppearProgressEnd],
              [8, 0]
            );

            return (
              <motion.span
                key={idx}
                style={{
                  opacity,
                  filter: blur,
                }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            );
          })}
        </p>
        <p className="mx-auto text-center mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
          Join a thriving student community driving tech and non-tech events,
          hackathons, and collaborations that inspire growth and creativity.
        </p>

        <div className="flex flex-wrap mt-16 justify-center lg:justify-start gap-5 ">
          {events.map((event) => (
            <p
              key={event.name}
              className="bg-cyan-200 text-accent-foreground font-semibold py-2 px-4 rounded-full text-lg transition-transform hover:scale-105"
            >
              {event.name}
            </p>
          ))}
        </div>
        <div className="w-full flex items-center justify-center py-16">

          <MagneticButton>
            <Link href={'/aboutUs'} className="bg-zinc-950 hover:bg-zinc-900 transition-colors px-10 text-lg text-white py-4 rounded-full">
              Learn More About Us
            </Link>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};

const IntroSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <AnimatedText
        text={`College life is more than classes and exams—it's about exploring, experimenting, and growing for the real world. That's what we do at Nexverse.`}
      />
    </section>
  );
};

export default IntroSection;
