"use client";

import { motion } from "framer-motion";
import { Users, Trophy, Mic, Calendar } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardHover = {
  whileHover: {
    scale: 1.035,
  },
};

export default function SocietyHighlights() {
  return (
    <section className="bg-black text-white py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
      <motion.div></motion.div>
        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          // initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[260px] md:auto-rows-[300px] gap-4"
        >
          {/* Hackathons - BIG CARD */}
          <motion.div
            variants={itemVariants}
            // {...cardHover}
            className="col-span-1 md:col-span-2 row-span-1 rounded-3xl bg-gradient-to-br from-zinc-950  via-zinc-900 to-cyan-500/70 p-8 border border-zinc-700 flex flex-col justify-between"
          >
            <div>
              <Trophy className="text-cyan-400 mb-4 w-14 h-14" />
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                National Level Hackathons
              </h3>
              <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                We host high-energy 24-hour hackathons where builders solve
                real-world problems, collaborate under pressure, and create
                impactful solutions.
              </p>
            </div>

            <span className="text-sm text-gray-500">
              Build. Compete. Innovate.
            </span>
          </motion.div>

          {/* Community */}
          <motion.div
            variants={itemVariants}
            // {...cardHover}
            className="rounded-3xl bg-zinc-900 p-6 md:p-7 border border-zinc-700 bg-gradient-to-bl  from-zinc-950 via-zinc-900 to-cyan-500/70 flex flex-col justify-between"
          >
            <Users className="text-cyan-400 mb-3 w-14 h-14" />
            <h3 className="text-xl md:text-2xl font-semibold">50+ Members</h3>
            <p className="text-gray-400 text-sm md:text-base">
              A growing community of builders, creators, and innovators.
            </p>
          </motion.div>

          {/* Events - WIDE CARD */}
          <motion.div
            variants={itemVariants}
            // {...cardHover}
            className="col-span-1 md:col-span-2 rounded-3xl bg-zinc-900 p-6 md:p-7 border border-zinc-700 bg-gradient-to-tr  from-zinc-950 via-zinc-900 to-cyan-500/70 flex flex-col justify-between"
          >
              <Calendar className="text-cyan-400 mb-3 w-14 h-14" />
            <h3 className="text-xl md:text-2xl font-semibold">
              Events & Activities
            </h3>
            <p className="text-gray-400 text-sm md:text-base max-w-xl">
              From hackathons and workshops to networking sessions, we create
              opportunities to learn, connect, and grow continuously.
            </p>
          </motion.div>

          {/* Seminars */}
          <motion.div
            variants={itemVariants}
            // {...cardHover}
            className="rounded-3xl bg-zinc-900 p-6 md:p-7 border border-zinc-700 bg-gradient-to-tl  from-zinc-950 via-zinc-900 to-cyan-500/70 flex flex-col justify-between"
          >
            <Mic className="text-cyan-400 mb-3 w-14 h-14" />
            <h3 className="text-xl md:text-2xl font-semibold">
              Seminars & Talks
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Industry experts sharing insights, trends, and real-world
              experience.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
