"use client";

import React from "react";
import Link from "next/link";
import { EdgeLines } from "../ui/EdgeLines";
import { CtaHoverArrow } from "../ui/CtaHoverArrow";

const proofCtaClassName =
  "group inline-flex items-center justify-center gap-0.5 " +
  "font-sans font-bold text-sm sm:text-base md:text-lg " +
  "px-[20px] py-[10px] whitespace-nowrap rounded-[8px] bg-transparent " +
  "border border-[#FF7F00] text-[#FF7F00] cursor-pointer " +
  "transition-all duration-300 ease-in-out " +
  "hover:bg-[#FF7F00]/10 hover:shadow-sm active:translate-y-px";

export const Cta = () => {
  return (
    <section
      id="cta"
      data-snap-section
      className="relative w-full h-screen px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <EdgeLines />
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start gap-4 sm:gap-6">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600">
          PROOF 
        </p>
        <h2 className="font-sans font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
          Real Plants. Real Operations. Real Results.
        </h2>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Link href="/case-studies" className={proofCtaClassName}>
            View All Case Studies
            <CtaHoverArrow />
          </Link>
          <Link href="/white-papers" className={proofCtaClassName}>
            Read White Papers
            <CtaHoverArrow />
          </Link>
        </div>
      </div>
    </section>
  );
};
