"use client";

import React, { useState } from "react";
import { EdgeLines } from "../ui/EdgeLines";
import { AboutAnimation, type AboutAnimationActiveId } from "./AboutAnimation";

const aboutOptions = [
  {
    id: "see",
    number: "01",
    title: "SEE",
    subtitle: "Real-time plant visibility",
    description:
      "SCADA and telemetry unifying every asset into one operational picture.",
  },
  {
    id: "execute",
    number: "02",
    title: "EXECUTE",
    subtitle: "Grid-ready EMS dispatch",
    description:
      "Translates grid requirements into practical setpoints across all plant assets.",
  },
  {
    id: "decide",
    number: "03",
    title: "DECIDE",
    subtitle: "AURA intelligence",
    description:
      "Turns forecasts and limits into clear, actionable schedules for hybrid and storage plants.",
  },
] as const;

type AboutId = (typeof aboutOptions)[number]["id"];

export const About = () => {
  const [activeOptionId, setActiveOptionId] = useState<AboutId>(
    aboutOptions[0].id
  );

  return (
    <section
      id="about"
      data-snap-section
      className="relative w-full h-screen px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden bg-background"
    >
      <EdgeLines />
      <div className="max-w-7xl h-full w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start gap-8">
        <div className="flex flex-col items-start gap-4 sm:gap-6">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600 dark:text-slate-400">
            WHO WE ARE
          </p>
          <h2 className="font-sans font-semibold text-gray-900 dark:text-slate-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
            We Bridge The Gap Between Knowing And Doing In Renewables Energy
          </h2>
        </div>

        <div className="w-full flex-1 min-h-0 flex items-center justify-center">
          <div className="w-full max-w-7xl h-full max-h-[360px] sm:max-h-[440px] md:max-h-[520px] lg:max-h-[560px] flex items-center justify-center">
            <AboutAnimation
              activeId={activeOptionId as AboutAnimationActiveId}
            />
          </div>
        </div>

        <div className="w-full border-y border-gray-300 dark:border-slate-600 overflow-x-auto no-scrollbar">
          <div className="min-w-[960px] grid grid-cols-3">
            {aboutOptions.map((option) => {
              const isActive = option.id === activeOptionId;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setActiveOptionId(option.id)}
                  className={`group relative text-left px-5 sm:px-6 md:px-8 py-6 md:py-7 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] border-r border-gray-300 dark:border-slate-600 last:border-r-0 ${
                    isActive
                      ? "text-gray-900 dark:text-slate-100"
                      : "text-gray-500 hover:text-gray-700 dark:text-slate-500 dark:hover:text-slate-300"
                  }`}
                  aria-pressed={isActive}
                >
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -top-px left-0 right-0 h-[2px] bg-[#FF7F00] origin-left transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -bottom-px left-0 right-0 h-[2px] bg-[#FF7F00] origin-left transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                  <p
                    className={`font-mono text-xs sm:text-sm tracking-[0.12em] ${
                      isActive ? "font-semibold" : "font-medium"
                    }`}
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        isActive ? "text-[#FF7F00]" : ""
                      }`}
                    >
                      {option.number}
                    </span>
                    <span> — {option.title}</span>
                  </p>
                  <p
                    className={`mt-3 text-base sm:text-lg ${
                      isActive ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {option.subtitle}
                  </p>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-slate-400">
                    {option.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
