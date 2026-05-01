"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { proofOutlineCtaClassName } from "@/lib/proofOutlineCtaClassName";
import { EdgeLines } from "../ui/EdgeLines";
import { CtaHoverArrow } from "../ui/CtaHoverArrow";

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

        <div className="w-full max-w-6xl self-center grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="flex flex-col overflow-hidden rounded-[6px] border border-gray-300 bg-gray-50"
            >
              <div className="relative aspect-[5/6] w-full overflow-hidden border-b border-gray-300 bg-gray-100">
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
              <div className="flex flex-col gap-1.5 sm:gap-2 p-4 sm:p-5 flex-1">
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
          ))}
        </div>
      </div>
    </section>
  );
};
