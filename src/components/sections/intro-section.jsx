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
    <div ref={targetRef} className="w-full h-[150vh]">

      <div className="sticky top-24 w-full flex flex-col items-center justify-center overflow-x-hidden px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Heading */}
        <p className="max-w-5xl mx-auto mt-10 sm:mt-14 font-bold tracking-tight text-center text-3xl sm:text-4xl lg:text-5xl text-foreground leading-snug">
          {words.map((word, idx) => {
            const wordAppearProgressStart = (idx / wordsCount) * 0.8;
            const wordAppearProgressEnd = wordAppearProgressStart + 0.1;

            const opacity = useTransform(
              scrollYProgress,
              [wordAppearProgressStart, wordAppearProgressEnd],
              [0.3, 1]
            );

            const blur = useTransform(
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
                className="inline-block mr-2 sm:mr-3"
              >
                {word}
              </motion.span>
            );
          })}
        </p>

        {/* Subheading */}
        <p className="mx-auto text-center mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
          Join a thriving student community driving tech and non-tech events,
          hackathons, and collaborations that inspire growth and creativity.
        </p>

      </div>

    </div>
  );
};

const IntroSection = () => {
  return (
    <section className="py-20">
      <AnimatedText
        text={`College life is more than classes and exams—it's about exploring, experimenting, and growing for the real world. That's what we do at Nexverse.`}
      />
    </section>
  );
};

export default IntroSection;
