"use client";

import React from "react";
import { EdgeLines } from "../ui/EdgeLines";
import { PROOF_GRID_ITEMS, ProofHoverGrid } from "../ui/ProofHoverGrid";

export const Cta = () => {
  return (
    <section
      id="cta"
      data-snap-section
      className="relative w-full min-h-screen px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <EdgeLines />
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start gap-8 sm:gap-10">
        <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-4xl">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600">
            PROOF
          </p>
          <h2 className="font-sans font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
            Real Plants. Real Operations. Real Results.
          </h2>
        </div>

        <ProofHoverGrid items={PROOF_GRID_ITEMS} className="w-full pb-2" />
      </div>
    </section>
  );
};
