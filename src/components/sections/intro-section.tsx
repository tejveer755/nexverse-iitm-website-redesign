"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });


  const words = text.split(" ");
  const wordsCount = words.length;

  return (
    <div ref={targetRef} className="w-full relative h-[300vh]">
      <div className="sticky mx-auto  top-24 w-full flex overflow-x-hidden flex-wrap items-center justify-center">
      
        <p className="text-4xl max-w-5xl mx-auto mt-14 font-bold tracking-tight text-center text-foreground sm:text-4xl lg:text-5xl">
          {words.map((word, idx) => {
            // Calculate when this word should fully appear based on its index
            const wordAppearProgressStart = (idx / wordsCount) * 0.8; // start showing at this progress
            const wordAppearProgressEnd = wordAppearProgressStart + 0.1; // small range to animate opacity

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
      </div>
    </div>
  );
};

const IntroSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28">
      <AnimatedText
        text={`College life is more than classes and exams—it's about exploring, experimenting, and growing for the real world. That's what we do at Nexverse.`}
      />
    </section>
  );
};

export default IntroSection;
