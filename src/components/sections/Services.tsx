"use client";

import React from "react";
import { EdgeLines } from "../ui/EdgeLines";


export const Services = () => {
  return (
    <section
      id="services"
      data-snap-section
      className="relative w-full h-screen px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <EdgeLines />
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start gap-4 sm:gap-6">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600">
          ASSET COVERAGE
        </p>
        <h2 className="font-sans font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
          Solar. Wind. Hybrid. Green Hydrogen
        </h2>
      </div>
    </section>
  );
};
