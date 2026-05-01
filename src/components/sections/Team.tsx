"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { proofOutlineCtaClassName } from "@/lib/proofOutlineCtaClassName";
import { EdgeLines } from "../ui/EdgeLines";
import { CtaHoverArrow } from "../ui/CtaHoverArrow";
import { GlowingEffect } from "../ui/GlowingEffect";

const teamMembers = [
  {
    name: "Kumar M",
    role: "Founder & CEO",
    bio: "20+ years in renewable innovation and grid automation. Founded Armax in 2005, then SGA.",
    image: "/1.png",
  },
  {
    name: "Venkata Krishnan",
    role: "Co-founder & CGO",
    bio: "Two decades in renewable energy and industrial automation. Leads global expansion and partnerships.",
    image: "/2.png",
  },
  {
    name: "Tirumaleswara Reddy K",
    role: "CTO",
    bio: "20+ years architecting enterprise platforms. Leads technology vision across Solvyn's full stack.",
    image: "/3.png",
  },
  {
    name: "Pankaj Ghai",
    role: "Senior Advisor",
    bio: "Private equity and climate infrastructure leader. Guides North American growth and investor alliances.",
    image: "/4.png",
  },
] as const;

export const Team = () => {
  return (
    <section
      id="team"
      data-snap-section
      className="relative w-full min-h-screen px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <EdgeLines />
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start gap-8 sm:gap-10">
        <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-4xl">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600">
            THE TEAM
          </p>
          <h2 className="font-sans font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
            Built By Engineers. Guided By Decades Of Grid Experience.
          </h2>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/company/leadership"
              className={proofOutlineCtaClassName}
            >
              Meet The Full Team
              <CtaHoverArrow />
            </Link>
          </div>
        </div>

        <div className="w-full max-w-6xl self-center grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-0 pb-2">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative group block p-2.5 sm:p-3 h-full w-full"
            >
              <article
                style={{ borderRadius: 6 }}
                className="relative z-20 flex h-full flex-col overflow-hidden border border-gray-200/90 bg-white shadow-sm transition-[border-color,box-shadow] duration-300 ease-out group-hover:border-[#FF7F00]/40 group-hover:shadow-md group-hover:shadow-orange-500/5"
              >
                <GlowingEffect
                  variant="brand"
                  blur={8}
                  spread={64}
                  proximity={160}
                  borderWidth={2.5}
                  disabled={false}
                />
                <div className="relative z-30 aspect-[5/6] w-full overflow-hidden border-b border-gray-200/90 bg-white">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 280px"
                    unoptimized
                    loading="eager"
                  />
                </div>
                <div className="relative z-30 flex flex-col gap-1.5 sm:gap-2 p-4 sm:p-5 flex-1">
                  <h3 className="font-sans font-semibold text-gray-900 text-base sm:text-lg leading-snug">
                    {member.name}
                  </h3>
                  <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#FF7F00]">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
