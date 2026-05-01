"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EdgeLines } from "../ui/EdgeLines";
import {
  WhyIllustration,
  type WhyIllustrationId,
} from "./WhyIllustrations";
import { reveal } from "@/lib/scrollReveal";

const reasons: {
  id: WhyIllustrationId;
  title: string;
  body: React.ReactNode;
}[] = [
  {
    id: "agnostic",
    title: "Truly Agnostic",
    body: (
      <>
        Connects to any inverter, BMS, PPC, or OEM — no vendor lock-in, no
        proprietary hardware.
      </>
    ),
  },
  {
    id: "compliance",
    title: "Compliance Built In",
    body: (
      <>
        21+ grid codes embedded in the dispatch architecture — not bolted on as
        a reporting layer.
      </>
    ),
  },
  {
    id: "patents",
    title: "14+ Patents",
    body: (
      <>
        Solar and BESS Digital Twins, EMS dispatch logic, and AURA intelligence
        — all patented innovations.
      </>
    ),
  },
  {
    id: "scale",
    title: "Proven at Scale",
    body: (
      <div className="space-y-2">
        <p>85+ GW. 400+ projects.</p>
        <p>India&apos;s first hybrid EMS.</p>
        <p>Deployed in India and the UAE.</p>
      </div>
    ),
  },
];

export const Why = () => {
  const reduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: reduce
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: reduce
      ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
      : {
          opacity: 0,
          y: 52,
          scale: 0.94,
          filter: "blur(14px)",
        },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: reduce
        ? { duration: 0 }
        : ({
            type: "spring",
            stiffness: 320,
            damping: 26,
            mass: 0.82,
          } as const),
    },
  };

  return (
    <section
      id="why"
      data-snap-section
      className="relative w-full min-h-screen px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <EdgeLines />
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start gap-10 sm:gap-12">
        <motion.div
          {...reveal({ direction: "up" })}
          className="flex flex-col items-start gap-4 sm:gap-6 max-w-4xl"
        >
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600">
            WHY SMART GRID ANALYTICS
          </p>
          <h2 className="font-sans font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
            Not Vendors. Partners In The Energy Transition
          </h2>
        </motion.div>

        <div className="w-full">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12, margin: "0px 0px -12% 0px" }}
          >
            {reasons.map((item) => (
              <motion.article
                key={item.id}
                variants={cardVariants}
                className="relative flex h-full min-h-[320px] sm:min-h-[340px] lg:min-h-[360px] flex-col overflow-hidden rounded-[6px] border border-gray-200/80 bg-gray-50/50 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
              >
                <div className="relative flex flex-1 min-h-[150px] sm:min-h-[160px] items-center justify-center border-b border-gray-200/80 bg-white/40 px-5 py-5 sm:px-6 sm:py-6">
                  <div className="relative w-full max-w-[200px] sm:max-w-[210px]">
                    <WhyIllustration variant={item.id} />
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col justify-center gap-2 p-5 sm:p-6 lg:p-6">
                  <h3 className="font-sans font-semibold text-gray-900 text-lg sm:text-xl leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <div className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.body}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
