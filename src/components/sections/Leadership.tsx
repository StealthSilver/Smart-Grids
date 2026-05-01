"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { EdgeLines } from "../ui/EdgeLines";
import { ProofCard } from "../ui/ProofHoverGrid";

type LeadershipItem = {
  title: string;
  description: string;
  pdfHref: string;
};

const LEADERSHIP_ITEMS: LeadershipItem[] = [
  {
    title: "Data Centres as Virtual Power Plants",
    description:
      "How data centres can be orchestrated as dispatchable grid assets.",
    pdfHref: "/DataCentresasVPP.pdf",
  },
  {
    title: "Alberta TCDC — Grid Modernisation",
    description:
      "Transmission congestion and dynamic capacity in Alberta's evolving grid.",
    pdfHref: "/AlbertaTCDC.pdf",
  },
  {
    title: "Smart EMS for Data Centres",
    description:
      "EMS architecture for large-scale data centre energy optimisation.",
    pdfHref: "/SmartEMSDataCentres.pdf",
  },
  {
    title: "Unlocking India's Renewable Grid",
    description: "The intelligence layer India's energy transition needs.",
    pdfHref: "/UnlockingIndiaRenewableGrid.pdf",
  },
];

export const Leadership = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="leadership"
      data-snap-section
      className="relative w-full px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <EdgeLines />
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start gap-8 sm:gap-10">
        <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-4xl">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600">
            THOUGHT LEADERSHIP
          </p>
          <h2 className="font-sans font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
            The Thinking Behind The Platform
          </h2>
        </div>

        <LayoutGroup id="leadership-grid-hover">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full pb-2">
            {LEADERSHIP_ITEMS.map((item, idx) => (
              <div
                key={item.title}
                className="relative group block p-2.5 sm:p-3 h-full w-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence initial={false}>
                  {hoveredIndex === idx && (
                    <motion.span
                      layoutId="leadershipHoverBackground"
                      style={{ borderRadius: 6 }}
                      transition={{
                        type: "spring",
                        stiffness: 520,
                        damping: 38,
                        mass: 0.8,
                      }}
                      className="pointer-events-none absolute inset-0 z-10 block h-full w-full bg-[#FF7F00]/12 dark:bg-orange-500/15"
                    />
                  )}
                </AnimatePresence>
                <ProofCard>
                  <h3 className="font-sans font-semibold text-gray-900 text-base sm:text-lg leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                  <Link
                    href={item.pdfHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#FF7F00] transition-colors hover:text-[#e67200]"
                  >
                    Download PDF
                    <span aria-hidden>→</span>
                  </Link>
                </ProofCard>
              </div>
            ))}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
};
