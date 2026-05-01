import React from "react";
import { EdgeLines } from "../ui/EdgeLines";
import { GlowingEffect } from "../ui/GlowingEffect";
import {
  WhyIllustration,
  type WhyIllustrationId,
} from "./WhyIllustrations";

const reasons: {
  id: WhyIllustrationId;
  title: string;
  body: React.ReactNode;
}[] = [
  {
    id: "agnostic",
    title: "Truly Agnostic",
    body: (
      <>
        Connects to any inverter, BMS, PPC, or OEM — no vendor lock-in, no
        proprietary hardware.
      </>
    ),
  },
  {
    id: "compliance",
    title: "Compliance Built In",
    body: (
      <>
        21+ grid codes embedded in the dispatch architecture — not bolted on as
        a reporting layer.
      </>
    ),
  },
  {
    id: "patents",
    title: "14+ Patents",
    body: (
      <>
        Solar and BESS Digital Twins, EMS dispatch logic, and AURA intelligence
        — all patented innovations.
      </>
    ),
  },
  {
    id: "scale",
    title: "Proven at Scale",
    body: (
      <div className="space-y-2">
        <p>85+ GW. 400+ projects.</p>
        <p>India&apos;s first hybrid EMS.</p>
        <p>Deployed in India and the UAE.</p>
      </div>
    ),
  },
];

export const Why = () => {
  return (
    <section
      id="why"
      data-snap-section
      className="relative w-full min-h-screen px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <EdgeLines />
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start gap-10 sm:gap-12">
        <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-4xl">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600">
            WHY SMART GRID ANALYTICS
          </p>
          <h2 className="font-sans font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
            Not Vendors. Partners In The Energy Transition
          </h2>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 w-full pb-2">
            {reasons.map((item) => (
              <div
                key={item.id}
                className="relative group block p-2.5 sm:p-3 h-full w-full"
              >
                <article
                  style={{ borderRadius: 6 }}
                  className="relative z-20 flex h-full min-h-[320px] sm:min-h-[340px] lg:min-h-[360px] w-full flex-col overflow-hidden border border-gray-200/90 bg-white shadow-sm transition-[border-color,box-shadow] duration-300 ease-out group-hover:border-[#FF7F00]/40 group-hover:shadow-md group-hover:shadow-orange-500/5"
                >
                  <GlowingEffect
                    variant="brand"
                    blur={8}
                    spread={64}
                    proximity={160}
                    borderWidth={2.5}
                    disabled={false}
                  />
                  <div className="relative z-30 flex flex-1 min-h-[150px] sm:min-h-[160px] items-center justify-center border-b border-gray-200/90 bg-white px-5 py-5 sm:px-6 sm:py-6">
                    <div className="relative w-full max-w-[200px] sm:max-w-[210px]">
                      <WhyIllustration variant={item.id} />
                    </div>
                  </div>

                  <div className="relative z-30 flex flex-1 flex-col justify-center gap-2 p-5 sm:p-6 lg:p-6">
                    <h3 className="font-sans font-semibold text-gray-900 text-lg sm:text-xl leading-snug tracking-tight">
                      {item.title}
                    </h3>
                    <div className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
                      {item.body}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
