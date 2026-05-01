"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  proofOutlineCtaClassName,
  proofOutlineIconButtonClassName,
} from "@/lib/proofOutlineCtaClassName";
import { EdgeLines } from "../ui/EdgeLines";
import { CtaHoverArrow } from "../ui/CtaHoverArrow";
import { MediaCarousel, type MediaSlideData } from "../ui/MediaCarousel";

const mediaSlides: MediaSlideData[] = [
  {
    title: "Smart grid leadership",
    headline:
      "National outlets on India’s first grid-scale EMS and battery storage deployment",
    src: "/media1.jpeg",
  },
  {
    title: "Energy transition spotlight",
    headline:
      "Trade press on hybrid solar, wind, and BESS optimization at utility scale",
    src: "/media2.jpeg",
  },
  {
    title: "Innovation in the news",
    headline:
      "Commentary on forecasting, grid-code alignment, and renewable integration",
    src: "/media3.png",
  },
  {
    title: "Press highlights",
    headline:
      "Profiles of analytics-led control rooms and performance across large portfolios",
    src: "/media4.jpeg",
  },
  {
    title: "Powering the future",
    headline:
      "Features on peak demand, ancillary services, and market participation strategy",
    src: "/media5.jpeg",
  },
  {
    title: "SGA in the headlines",
    headline:
      "Interviews on the clean-energy roadmap and SGA’s role behind major programs",
    src: "/media6.jpeg",
  },
];

export const Media = () => {
  const [mediaSlideIndex, setMediaSlideIndex] = useState(0);
  const slideCount = mediaSlides.length;

  const goToPreviousSlide = () => {
    setMediaSlideIndex((i) => (i - 1 < 0 ? slideCount - 1 : i - 1));
  };

  const goToNextSlide = () => {
    setMediaSlideIndex((i) => (i + 1 === slideCount ? 0 : i + 1));
  };

  return (
    <section
      id="media"
      data-snap-section
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden px-4 py-16 sm:px-6 sm:py-20 md:py-24"
    >
      <EdgeLines />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl min-h-0 flex-1 flex-col items-stretch gap-8 sm:gap-10 px-4 sm:px-6">
        <div className="flex w-full shrink-0 flex-col gap-4 sm:gap-6">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-gray-600 sm:text-sm">
            IN THE NEWS
          </p>
          <h2 className="max-w-4xl font-sans text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
            SGA In The Media
          </h2>
          <div className="flex w-full flex-wrap items-center gap-3 sm:gap-4">
            <Link href="/proof/news" className={proofOutlineCtaClassName}>
              View All Coverage
              <CtaHoverArrow />
            </Link>
            {slideCount > 1 && (
              <div
                className="ml-auto flex items-center gap-2 sm:gap-3"
                role="group"
                aria-label="Media carousel navigation"
              >
                <button
                  type="button"
                  className={`${proofOutlineIconButtonClassName} [&_svg]:size-5`}
                  title="Go to previous slide"
                  onClick={goToPreviousSlide}
                >
                  <ArrowRight className="rotate-180" aria-hidden />
                </button>
                <button
                  type="button"
                  className={`${proofOutlineIconButtonClassName} [&_svg]:size-5`}
                  title="Go to next slide"
                  onClick={goToNextSlide}
                >
                  <ArrowRight aria-hidden />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex min-h-0 w-full flex-1 flex-col justify-start">
          <MediaCarousel
            slides={mediaSlides}
            currentIndex={mediaSlideIndex}
            onCurrentIndexChange={setMediaSlideIndex}
          />
        </div>
      </div>
    </section>
  );
};
