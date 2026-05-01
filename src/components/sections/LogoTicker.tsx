"use client";

import Image from "next/image";
import {
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import fimer from "@/assets/logo/fimer_logo.png";
import abb from "@/assets/logo/abb_logo.png";
import kec from "@/assets/logo/kec_logo.png";
import refex from "@/assets/logo/refex_logo.png";
import adani from "@/assets/logo/adani_logo.png";
import blupine from "@/assets/logo/blupine_logo.png";
import etap from "@/assets/logo/etap_logo.png";
import ampex from "@/assets/logo/ampex_logo.png";
import renew from "@/assets/logo/renew_logo.png";
import spring from "@/assets/logo/spring_logo.png";
import o2 from "@/assets/logo/o2_logo.png";
import inox from "@/assets/logo/inox_logo.png";
import cleantech from "@/assets/logo/cleantech_logo.png";
import jsw from "@/assets/logo/jsw_logo.jpeg";
import alfanar from "@/assets/logo/alfanar_logo.avif";
import avaada from "@/assets/logo/avaada_logo.jpg";
import azure from "@/assets/logo/azure_logo.png";
import ayana from "@/assets/logo/ayana_logo.png";
import essens from "@/assets/logo/essens_logo.png";
import sw from "@/assets/logo/sw_logo.png";
import vena from "@/assets/logo/vena_logo.png";
import waree from "@/assets/logo/waree_logo.png";
import kalpatru from "@/assets/logo/kalpatru_logo.webp";
import { EdgeLines } from "../ui/EdgeLines";

const logos = [
  { src: ampex, alt: "Ampex" },
  { src: renew, alt: "ReNew" },
  { src: spring, alt: "Spring Energy" },
  { src: o2, alt: "O2 Power" },
  { src: inox, alt: "INOX Wind" },
  { src: abb, alt: "ABB" },
  { src: adani, alt: "Adani" },
  { src: etap, alt: "ETAP" },
  { src: blupine, alt: "BluPine" },
  { src: fimer, alt: "FIMER" },
  { src: cleantech, alt: "Cleantech" },
  { src: jsw, alt: "JSW" },
  { src: alfanar, alt: "Alfanar" },
  { src: avaada, alt: "Avaada" },
  { src: azure, alt: "Azure Power" },
  { src: ayana, alt: "Ayana" },
  { src: sw, alt: "Sterling & Wilson" },
  { src: kalpatru, alt: "Kalpataru" },
  { src: vena, alt: "Vena Energy" },
  { src: kec, alt: "KEC International" },
  { src: refex, alt: "Refex" },
  { src: waree, alt: "Waaree" },
  { src: essens, alt: "Essens" },
] as const;

const setGapClass = "gap-16 sm:gap-24 lg:gap-32";

export const LogoTicker = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const [shiftPx, setShiftPx] = useState<string | null>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const firstSet = firstSetRef.current;
    if (!track || !firstSet) return;

    const update = () => {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const w = firstSet.getBoundingClientRect().width;
      setShiftPx(`${w + gap}px`);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(track);
    ro.observe(firstSet);
    return () => ro.disconnect();
  }, []);

  return (
    <section
      id="logo-ticker"
      data-snap-section
      className="relative w-full px-4 sm:px-6 py-4 sm:py-5 md:py-6 overflow-hidden bg-white"
    >
      <EdgeLines />
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-2 sm:gap-2.5">
        <div className="w-full bg-gray-50/50 py-px sm:py-0.5">
          <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] pointer-events-auto">
            <div
              ref={trackRef}
              style={
                shiftPx
                  ? ({
                      ["--logo-ticker-shift" as string]: shiftPx,
                    } as CSSProperties)
                  : undefined
              }
              className={`flex w-max flex-none ${setGapClass} animate-logo-ticker will-change-transform motion-reduce:animate-none group-hover:[animation-play-state:paused]`}
            >
              <div
                ref={firstSetRef}
                className={`flex shrink-0 items-center ${setGapClass}`}
              >
                {logos.map((logo) => (
                  <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 w-auto max-w-[112px] sm:h-9 sm:max-w-[128px] lg:h-10 lg:max-w-[144px] shrink-0 object-contain opacity-70 grayscale transition-[opacity,filter] duration-300 ease-out hover:opacity-100 hover:grayscale-0"
                    width={144}
                    height={40}
                    sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 144px"
                  />
                ))}
              </div>
              <div
                className={`flex shrink-0 items-center ${setGapClass}`}
                aria-hidden
              >
                {logos.map((logo) => (
                  <Image
                    key={`dup-${logo.alt}`}
                    src={logo.src}
                    alt=""
                    className="h-8 w-auto max-w-[112px] sm:h-9 sm:max-w-[128px] lg:h-10 lg:max-w-[144px] shrink-0 object-contain opacity-70 grayscale transition-[opacity,filter] duration-300 ease-out hover:opacity-100 hover:grayscale-0"
                    width={144}
                    height={40}
                    sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 144px"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
