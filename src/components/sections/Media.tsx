"use client";

import React from "react";
import Link from "next/link";
import { proofOutlineCtaClassName } from "@/lib/proofOutlineCtaClassName";
import { EdgeLines } from "../ui/EdgeLines";
import { CtaHoverArrow } from "../ui/CtaHoverArrow";

export const Media = () => {
  return (
    <section
      id="media"
      data-snap-section
      className="relative w-full h-screen min-h-0 px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <EdgeLines />
      <div className="max-w-7xl w-full mx-auto h-full min-h-0 px-4 sm:px-6 relative z-10 flex flex-col items-start gap-8 sm:gap-10">
        <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-4xl">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600">
            IN THE NEWS.
          </p>
          <h2 className="font-sans font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
            SGA In The Media
          </h2>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link href="/proof/news" className={proofOutlineCtaClassName}>
              View All Coverage
              <CtaHoverArrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
