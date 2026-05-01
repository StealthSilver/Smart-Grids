"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";

export type ProofGridItem = {
  tag: string;
  title: string;
  description: string;
};

export const PROOF_GRID_ITEMS: ProofGridItem[] = [
  {
    tag: "BESS · Hybrid",
    title: "India's First Hybrid EMS Deployment",
    description:
      "Coordinated solar-BESS dispatch with automated grid-code compliance.",
  },
  {
    tag: "Peak Management",
    title: "Hybrid EMS for Peak Power Management",
    description: "Degradation-aware BESS dispatch reducing peak demand costs.",
  },
  {
    tag: "Solar · Microgrid",
    title: "Solar-First Microgrid for Extreme Environments",
    description:
      "Off-grid solar control with autonomous recovery and reliability.",
  },
  {
    tag: "Compliance",
    title: "Solar-Prioritised EMS for Grid Compliance",
    description:
      "Automated ramp-rate enforcement and DSM penalty elimination.",
  },
  {
    tag: "Optimisation",
    title: "Peak Demand Optimisation Through EMS",
    description:
      "Commercial demand reduction with intelligent BESS coordination.",
  },
  {
    tag: "Grid Stability",
    title: "Hybrid EMS for Grid Stability and Ancillary Services",
    description:
      "Frequency response and ancillary service delivery from a hybrid portfolio.",
  },
];

export function ProofHoverGrid({
  items,
  className,
}: {
  items: ProofGridItem[];
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <LayoutGroup id="proof-grid-hover">
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-full",
          className
        )}
      >
        {items.map((item, idx) => (
          <div
            key={item.title}
            className="relative group block p-2.5 sm:p-3 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence initial={false}>
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="proofHoverBackground"
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
              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.16em] text-[#FF7F00]">
                {item.tag}
              </p>
              <h3 className="mt-3 font-sans font-semibold text-gray-900 dark:text-slate-100 text-base sm:text-lg leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                {item.description}
              </p>
            </ProofCard>
          </div>
        ))}
      </div>
    </LayoutGroup>
  );
}

export function ProofCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ borderRadius: 6 }}
      className={cn(
        "h-full w-full overflow-hidden relative z-20",
        "border border-gray-200/90 bg-white shadow-sm",
        "dark:border-slate-600/90 dark:bg-slate-900 dark:shadow-black/25",
        "transition-[border-color,box-shadow] duration-300 ease-out",
        "group-hover:border-[#FF7F00]/40 group-hover:shadow-md group-hover:shadow-orange-500/5",
        className
      )}
    >
      <div className="relative z-50 p-5 sm:p-6">{children}</div>
    </div>
  );
}
