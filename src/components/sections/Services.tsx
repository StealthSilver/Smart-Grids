"use client";

import React from "react";
import { EdgeLines } from "../ui/EdgeLines";
import { ServicesAnimation } from "./ServicesAnimation";

export const Services = () => {
  return (
    <section
      id="services"
      data-snap-section
      className="relative w-full h-screen px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden bg-background"
    >
      <EdgeLines />
      <div className="max-w-7xl h-full w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start gap-8">
        <div className="flex flex-col items-start gap-4 sm:gap-6">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600 dark:text-slate-400">
            ASSET COVERAGE
          </p>
          <h2 className="font-sans font-semibold text-gray-900 dark:text-slate-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
            Solar. Wind. BESS. Hybrid. Green Hydrogen.
          </h2>
        </div>

        <div className="w-full flex-1 min-h-0 flex items-center justify-center">
          <div className="w-full max-w-5xl h-full max-h-[420px] flex items-center justify-center">
            <ServicesAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};
