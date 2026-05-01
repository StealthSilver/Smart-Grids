"use client";

import { motion } from "framer-motion";
import { CtaHoverArrow } from "../ui/CtaHoverArrow";
import { LazyGlobe } from "../ui/LazyGlobe";
import { NumberTicker } from "../ui/NumberTicker";
import { EdgeLines } from "../ui/EdgeLines";
import { scrollToSectionAligned } from "@/lib/scroll";

const sampleArcs = [
  {
    order: 1,
    startLat: 40,
    startLng: -95,
    endLat: 36,
    endLng: 139,
    arcAlt: 0.1,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 2,
    startLat: 51.5,
    startLng: -0.1,
    endLat: 35.6,
    endLng: 139.6,
    arcAlt: 0.2,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 3,
    startLat: 35.6,
    startLng: 139.6,
    endLat: -33.8,
    endLng: 151.2,
    arcAlt: 0.15,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 4,
    startLat: -33.8,
    startLng: 151.2,
    endLat: 1.3,
    endLng: 103.8,
    arcAlt: 0.18,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 5,
    startLat: 1.3,
    startLng: 103.8,
    endLat: 40.7,
    endLng: -74.0,
    arcAlt: 0.25,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 6,
    startLat: 48.8,
    startLng: 2.3,
    endLat: 52.5,
    endLng: 13.4,
    arcAlt: 0.12,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 7,
    startLat: 52.5,
    startLng: 13.4,
    endLat: 37.7,
    endLng: -122.4,
    arcAlt: 0.22,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 8,
    startLat: 37.7,
    startLng: -122.4,
    endLat: 22.3,
    endLng: 114.2,
    arcAlt: 0.28,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 9,
    startLat: 22.3,
    startLng: 114.2,
    endLat: 40,
    endLng: -95,
    arcAlt: 0.2,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 10,
    startLat: 35.6,
    startLng: 139.6,
    endLat: -37.8,
    endLng: 144.9,
    arcAlt: 0.19,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 11,
    startLat: 19.4,
    startLng: -99.1,
    endLat: 43.6,
    endLng: 7.0,
    arcAlt: 0.23,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 12,
    startLat: 43.6,
    startLng: 7.0,
    endLat: 55.7,
    endLng: 37.6,
    arcAlt: 0.17,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 13,
    startLat: 55.7,
    startLng: 37.6,
    endLat: 31.2,
    endLng: 30.6,
    arcAlt: 0.21,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 14,
    startLat: 31.2,
    startLng: 30.6,
    endLat: 25.2,
    endLng: 55.3,
    arcAlt: 0.24,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 15,
    startLat: 25.2,
    startLng: 55.3,
    endLat: 28.6,
    endLng: 77.2,
    arcAlt: 0.16,
    color: "rgba(255, 122, 24, 0.6)",
  },
  // Additional arcs to double the count
  {
    order: 16,
    startLat: 28.6,
    startLng: 77.2,
    endLat: 13.7,
    endLng: 100.5,
    arcAlt: 0.14,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 17,
    startLat: 13.7,
    startLng: 100.5,
    endLat: -1.3,
    endLng: 36.8,
    arcAlt: 0.26,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 18,
    startLat: -1.3,
    startLng: 36.8,
    endLat: -22.9,
    endLng: -43.2,
    arcAlt: 0.29,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 19,
    startLat: -22.9,
    startLng: -43.2,
    endLat: 19.4,
    endLng: -99.1,
    arcAlt: 0.27,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 20,
    startLat: 40.7,
    startLng: -74.0,
    endLat: 41.9,
    endLng: 12.5,
    arcAlt: 0.13,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 21,
    startLat: 41.9,
    startLng: 12.5,
    endLat: 25.2,
    endLng: 55.3,
    arcAlt: 0.19,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 22,
    startLat: -37.8,
    startLng: 144.9,
    endLat: -41.3,
    endLng: 174.8,
    arcAlt: 0.11,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 23,
    startLat: -41.3,
    startLng: 174.8,
    endLat: 35.6,
    endLng: 139.6,
    arcAlt: 0.25,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 24,
    startLat: 55.7,
    startLng: 37.6,
    endLat: 59.9,
    endLng: 30.3,
    arcAlt: 0.1,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 25,
    startLat: 59.9,
    startLng: 30.3,
    endLat: 51.5,
    endLng: -0.1,
    arcAlt: 0.16,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 26,
    startLat: 22.3,
    startLng: 114.2,
    endLat: 1.3,
    endLng: 103.8,
    arcAlt: 0.15,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 27,
    startLat: 37.7,
    startLng: -122.4,
    endLat: 49.3,
    endLng: -123.1,
    arcAlt: 0.08,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 28,
    startLat: 49.3,
    startLng: -123.1,
    endLat: 64.1,
    endLng: -21.9,
    arcAlt: 0.24,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 29,
    startLat: 64.1,
    startLng: -21.9,
    endLat: 48.8,
    endLng: 2.3,
    arcAlt: 0.18,
    color: "rgba(255, 122, 24, 0.6)",
  },
  {
    order: 30,
    startLat: -33.8,
    startLng: 151.2,
    endLat: -26.2,
    endLng: 28.0,
    arcAlt: 0.3,
    color: "rgba(255, 132, 44, 0.6)",
  },
];

const globeConfig = {
  pointSize: 1,
  globeColor: "#e4e5ec",
  showAtmosphere: true,
  atmosphereColor: "#f5f6fa",
  atmosphereAltitude: 0.18,
  emissive: "#f8f9fc",
  emissiveIntensity: 0.45,
  shininess: 2.2,
  polygonColor: "rgba(74, 78, 105, 0.55)",
  ambientLight: "#dfe2ec",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#fefefe",
  pointLight: "#c9cbda",
  pointColor: "rgba(201, 203, 218, 0.55)",
  arcTime: 2000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

export default function Hero() {
  const dataPoints = [
    { value: 400, suffix: "+", label: "PROJECTS SUCCESSFULLY COMPLETED" },
    { value: 85, suffix: "GW", label: "POWER HANDLED (GIGAWATT)" },
    {
      value: 15,
      suffix: "+",
      label: "INTERNATIONAL INDUSTRY LEADERS AS PARTNERS",
    },
    { value: 20, suffix: "+", label: "YEARS IN RENEWABLES SECTOR" },
    { value: 17, suffix: "+", label: "GRID CODES COMPLIANT" },
  ];

  return (
    <section
      id="hero"
      data-snap-section
      className="
        relative z-[2] lg:min-h-[95vh] h-full px-4 sm:px-6 pt-20 sm:pt-28 md:pt-36 lg:pt-48 
        bg-white backdrop-blur-md
        overflow-hidden flex flex-col justify-start mx-auto pb-12 sm:pb-16 md:pb-20
      "
     
    >
      {/* Sky-like radial gradient: light blue from bottom-right fading to white at top-left */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 130% 120% at 100% 100%, rgba(201, 203, 218, 0.85) 0%, rgba(201, 203, 218, 0.65) 22%, rgba(201, 203, 218, 0.45) 45%, rgba(201, 203, 218, 0.22) 68%, rgba(255, 255, 255, 0) 90%)",
        }}
      />

      {/* Diffused noise overlay to soften the gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 mix-blend-soft-light opacity-[0.35]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0.4  0 0 0 0 0.55  0 0 0 0 0.75  0 0 0 0.55 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          backgroundSize: "240px 240px",
        }}
      />

      {/* Vertical edge lines at max-w-7xl boundaries (sits above bg, below globe & text) */}
      <EdgeLines className="z-0" />

      {/* Globe positioned on the right */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-[1]">
        <div className="absolute -right-[200px] sm:-right-[150px] md:-right-[100px] lg:-right-[800px] -top-12 sm:-top-16 md:-top-20 lg:-top-24 w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] md:w-[850px] md:h-[850px] lg:w-[950px] lg:h-[950px] xl:w-[1100px] xl:h-[1100px] min-w-[600px] min-h-[600px] sm:min-w-[700px] sm:min-h-[700px] md:min-w-[850px] md:min-h-[850px] lg:min-w-[950px] lg:min-h-[950px] xl:min-w-[1100px] xl:min-h-[1100px] relative">
          <LazyGlobe globeConfig={globeConfig} data={sampleArcs} />
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 flex flex-col items-start text-left space-y-4 sm:space-y-6 md:space-y-8 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight sm:leading-snug md:leading-normal lg:leading-18
            text-gray-900
            max-w-full sm:max-w-3xl md:max-w-4xl
          "
        >
          <span>Intelligent Control For The Renewable Century</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="
            max-w-full sm:max-w-xl md:max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl font-sans leading-relaxed
            text-gray-600
          "
        >
          Smart Grid Analytics unifies renewable assets, automates compliance, and enables real-time decisions across solar, wind, BESS, and hybrid plants.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="
            flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-8 mt-4 sm:mt-6
            w-auto
          "
        >
          <button
            type="button"
            onClick={() => {
              scrollToSectionAligned("solvyn");
            }}
            className="
              inline-flex items-center justify-center
              font-sans font-bold text-sm sm:text-base md:text-lg
              px-[20px] py-[10px]
              whitespace-nowrap rounded-[8px] bg-transparent
              border border-[#FF7F00] text-[#FF7F00]
              cursor-pointer transition-all duration-300 ease-in-out
              hover:bg-[#FF7F00]/10 hover:shadow-sm active:translate-y-px
            "
          >
            Explore Solvyn
          </button>
          <button
            type="button"
            onClick={() => {
              scrollToSectionAligned("footer", { updateHash: false });
            }}
            className="
              group inline-flex items-center justify-center gap-1
              font-sans font-bold text-white text-sm sm:text-base md:text-lg
              px-[20px] py-[10px]
              whitespace-nowrap rounded-[8px] bg-[#FF7F00]
              cursor-pointer border border-transparent
              transition-all duration-300 ease-in-out
              hover:brightness-95 hover:shadow-sm active:translate-y-px
            "
          >
            Book Demo
            <CtaHoverArrow large />
          </button>
        </motion.div>
      </div>

      {/* Data Points Section */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24 lg:mt-28 relative z-40">
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-12">
          {dataPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              className="flex flex-col items-start text-left"
            >
              <div className="font-mono text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 flex items-baseline gap-0.5 sm:gap-1">
                <NumberTicker
                  value={point.value}
                  className="text-gray-900"
                />
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">{point.suffix}</span>
              </div>
              <p className="font-mono text-left text-gray-600 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs uppercase tracking-wide leading-tight">
                {point.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
