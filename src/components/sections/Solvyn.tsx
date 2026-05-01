"use client";

import React from "react";
import { EdgeLines } from "../ui/EdgeLines";


export const Solvyn = () => {
  return (
    <section
      id="solvyn"
      data-snap-section
      className="relative w-full min-h-screen px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <EdgeLines />
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start gap-4 sm:gap-6">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600">
          THE SOLVYN ARCHITECTURE
        </p>
        <h2 className="font-sans font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
          From Field Data To Actionable Intelligence
        </h2>
        <button
          type="button"
          className="
            inline-flex items-center justify-center
            font-sans font-bold text-sm sm:text-base md:text-lg
            px-[20px] py-[10px]
            whitespace-nowrap rounded-[8px] bg-transparent
            border border-[#FF7F00] text-[#FF7F00]
            cursor-pointer
            transition-all duration-300 ease-in-out
            hover:bg-[#FF7F00]/10 hover:shadow-sm active:translate-y-px
          "
        >
          Explore Solvyn
        </button>
      </div>
    </section>
  );
};
