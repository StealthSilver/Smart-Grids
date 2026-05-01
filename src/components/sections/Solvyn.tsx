"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconState, Points } from "../../types/solvynTypes";
import {
  TaxIcon,
  ClimateIcon,
  TreasuryIcon,
  ElementsIcon,
  PaymentsIcon,
  WindmillIcon,
  SolarPanelIcon,
  BatteryIcon,
  ForecastingSchedulingIcon,
  TradingDeckIcon,
  ReportingIcon,
  BidOptimizationIcon,
} from "../ui/SolvynIcons";
import { SolvynIconNode } from "../ui/SolvynIconNode";
import { SolvynBeams } from "../ui/SolvynBeams";
import { useSolvynAnimation } from "../../hooks/useSolvynAnimation";
import { useDiagramAnimationReady } from "@/lib/useDiagramAnimationReady";
import { EdgeLines } from "../ui/EdgeLines";
import { CtaHoverArrow } from "../ui/CtaHoverArrow";

const ICON_CONFIG = [
  { id: "tax" as const, label: "Merchant Services", component: TaxIcon },
  { id: "climate" as const, label: "Energy Portfolio Management", component: ClimateIcon },
  { id: "treasury" as const, label: "Ancillary Services", component: TreasuryIcon },
  { id: "elements" as const, label: "Work Order Management", component: ElementsIcon },
  { id: "payments" as const, label: "Grid Code Adherence", component: PaymentsIcon },
  { id: "windmill" as const, label: "Wind", component: WindmillIcon },
  { id: "solar" as const, label: "Solar", component: SolarPanelIcon },
  { id: "battery" as const, label: "BESS", component: BatteryIcon },
  { id: "forecasting" as const, label: "Forecasting and Scheduling", component: ForecastingSchedulingIcon },
  { id: "trading" as const, label: "Trading Desk", component: TradingDeckIcon },
  { id: "reporting" as const, label: "Smart Analytics & Reporting", component: ReportingIcon },
  { id: "bidopt" as const, label: "Bid Optimization", component: BidOptimizationIcon },
];

// Desktop: 6×2 columns — ~5%, ~21%, ~37%, ~53%, ~69%, ~85%
const ICON_POSITIONS_DESKTOP = [
  { top: "5%", left: "3%", delay: 0.6, borderColor: "orange" as const },
  { top: "5%", right: "3%", delay: 0.7, borderColor: "orange" as const },
  { top: "21%", left: "3%", delay: 0.8, borderColor: "orange" as const },
  { top: "21%", right: "3%", delay: 1.0, borderColor: "orange" as const },
  { top: "37%", left: "3%", delay: 1.1, borderColor: "orange" as const },
  { top: "37%", right: "5%", delay: 1.2, borderColor: "orange" as const },
  { top: "53%", left: "5%", delay: 1.3, borderColor: "orange" as const },
  { top: "53%", right: "5%", delay: 1.4, borderColor: "orange" as const },
  { top: "69%", left: "3%", delay: 1.5, borderColor: "orange" as const },
  { top: "69%", right: "4%", delay: 1.6, borderColor: "orange" as const },
  { top: "85%", left: "3%", delay: 1.7, borderColor: "orange" as const },
  { top: "85%", right: "3%", delay: 1.8, borderColor: "orange" as const },
];

type IconPosition = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  transform?: string;
};

const ICON_POSITIONS_MOBILE = [
  { top: "5%", left: "2%", delay: 0.6, borderColor: "orange" as const },
  { top: "5%", right: "2%", delay: 0.7, borderColor: "orange" as const },
  { top: "20%", left: "2%", delay: 0.8, borderColor: "orange" as const },
  { top: "20%", right: "2%", delay: 1.0, borderColor: "orange" as const },
  { top: "35%", left: "0%", delay: 1.1, borderColor: "orange" as const },
  { top: "35%", right: "13%", delay: 1.2, borderColor: "orange" as const },
  { top: "50%", left: "9%", delay: 1.3, borderColor: "orange" as const },
  { top: "50%", right: "13%", delay: 1.4, borderColor: "orange" as const },
  { top: "65%", left: "-2%", delay: 1.5, borderColor: "orange" as const },
  { top: "65%", right: "9%", delay: 1.6, borderColor: "orange" as const },
  { top: "80%", left: "-2%", delay: 1.7, borderColor: "orange" as const },
  { top: "80%", right: "7%", delay: 1.8, borderColor: "orange" as const },
];

const extractPositions = (rows: typeof ICON_POSITIONS_DESKTOP): IconPosition[] =>
  rows.map(({ delay: _d, borderColor: _b, ...rest }) => rest);
const POSITIONS_DESKTOP_STABLE = extractPositions(ICON_POSITIONS_DESKTOP);
const POSITIONS_MOBILE_STABLE = extractPositions(ICON_POSITIONS_MOBILE);

export const Solvyn: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sgridsRef = useRef<HTMLDivElement | null>(null);

  const [screen, setScreen] = useState<{ isMobile: boolean; isTablet: boolean; mounted: boolean }>({
    isMobile: false,
    isTablet: false,
    mounted: false,
  });
  const { isMobile, isTablet, mounted } = screen;

  const { animationReady: beamAnimationReady, markDiagramImageLoaded } = useDiagramAnimationReady(
    mounted,
    1
  );

  useEffect(() => {
    const compute = () => {
      const width = window.innerWidth;
      const nextMobile = width < 640;
      const nextTablet = width >= 640 && width < 1024;
      setScreen((prev) =>
        prev.isMobile === nextMobile && prev.isTablet === nextTablet && prev.mounted
          ? prev
          : { isMobile: nextMobile, isTablet: nextTablet, mounted: true }
      );
    };
    compute();
    let rafId = 0;
    const onResize = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        compute();
      });
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const iconRefsRef = useRef<React.RefObject<HTMLDivElement | null>[]>(
    ICON_CONFIG.map(() => React.createRef<HTMLDivElement | null>())
  );
  const iconRefs = iconRefsRef.current;

  const [icons, setIcons] = useState<IconState[]>(
    ICON_CONFIG.map((config, idx) => ({
      id: config.id,
      label: config.label,
      ref: iconRefs[idx],
      active: false,
    }))
  );

  const [points, setPoints] = useState<Points | null>(null);

  const ICON_POSITIONS = isMobile || isTablet ? ICON_POSITIONS_MOBILE : ICON_POSITIONS_DESKTOP;
  const stablePositions = isMobile || isTablet ? POSITIONS_MOBILE_STABLE : POSITIONS_DESKTOP_STABLE;

  const containerStyle = useMemo(
    () => ({
      height: isMobile || isTablet ? "min(100vh, 700px)" : "min(90vh, 900px)",
      maxHeight: isMobile ? "700px" : isTablet ? "850px" : "900px",
      minHeight: isMobile ? "560px" : isTablet ? "640px" : "680px",
    }),
    [isMobile, isTablet]
  );

  const svgIconSize = isMobile ? 16 : isTablet ? 20 : 36;

  const pathRefs = useRef<SVGPathElement[]>([]);
  const beamRefs = useRef<
    { circle: SVGPathElement | null; core: SVGPathElement | null; pulse: SVGCircleElement | null }[]
  >(Array.from({ length: 12 }, () => ({ circle: null, core: null, pulse: null })));
  const progressRefs = useRef<number[]>([
    0, 0.091, 0.182, 0.273, 0.364, 0.455, 0.545, 0.636, 0.727, 0.818, 0.909, 1.0,
  ]);

  const measure = useCallback(() => {
    const container = containerRef.current;
    const sgridsEl = sgridsRef.current;
    if (!container || !sgridsEl) return;

    const containerRect = container.getBoundingClientRect();
    if (containerRect.width === 0 || containerRect.height === 0) return;

    const sgridsRect = sgridsEl.getBoundingClientRect();
    if (sgridsRect.width === 0 || sgridsRect.height === 0) return;

    const logoCenterY = sgridsRect.top + sgridsRect.height / 2 - containerRect.top;
    const leftEdge = {
      x: sgridsRect.left - containerRect.left,
      y: logoCenterY,
    };
    const rightEdge = {
      x: sgridsRect.right - containerRect.left,
      y: logoCenterY,
    };
    const logoCenterX = sgridsRect.left + sgridsRect.width / 2 - containerRect.left;

    const targets: { x: number; y: number }[] = [];
    const originsPerTarget: { x: number; y: number }[] = [];

    for (const ref of iconRefs) {
      const el = ref.current;
      if (!el) continue;
      const targetEl = (el.querySelector("[data-beam-target]") as HTMLElement | null) || el;
      const r = targetEl.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) continue;

      const iconCenterY = r.top + r.height / 2 - containerRect.top;
      const iconCenterX = r.left + r.width / 2 - containerRect.left;

      const isLeftSide = iconCenterX < logoCenterX;
      if (isLeftSide) {
        targets.push({
          x: r.right - containerRect.left,
          y: iconCenterY,
        });
        originsPerTarget.push(leftEdge);
      } else {
        targets.push({
          x: r.left - containerRect.left,
          y: iconCenterY,
        });
        originsPerTarget.push(rightEdge);
      }
    }

    if (targets.length !== 12) return;

    const origin = {
      x: logoCenterX,
      y: logoCenterY,
    };

    setPoints((prevPoints) => {
      const tolerance = 1;
      if (
        prevPoints &&
        prevPoints.originsPerTarget &&
        prevPoints.originsPerTarget.length === originsPerTarget.length
      ) {
        const originChanged =
          Math.abs(prevPoints.origin.x - origin.x) > tolerance ||
          Math.abs(prevPoints.origin.y - origin.y) > tolerance;
        const targetsChanged = prevPoints.targets.some((t, i) => {
          const n = targets[i];
          if (!n) return true;
          return Math.abs(t.x - n.x) > tolerance || Math.abs(t.y - n.y) > tolerance;
        });
        const originsChanged = prevPoints.originsPerTarget.some((o, i) => {
          const n = originsPerTarget[i];
          if (!n) return true;
          return Math.abs(o.x - n.x) > tolerance || Math.abs(o.y - n.y) > tolerance;
        });
        if (!originChanged && !targetsChanged && !originsChanged) return prevPoints;
      }
      return { origin, targets, originsPerTarget };
    });
  }, [iconRefs]);

  useEffect(() => {
    if (!mounted) return;

    let pendingRaf = 0;
    const scheduleMeasure = () => {
      if (pendingRaf) return;
      pendingRaf = requestAnimationFrame(() => {
        pendingRaf = 0;
        measure();
      });
    };

    const resizeObserver = new ResizeObserver(scheduleMeasure);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    if (sgridsRef.current) resizeObserver.observe(sgridsRef.current);
    iconRefs.forEach((ref) => {
      if (ref.current) resizeObserver.observe(ref.current);
    });

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) scheduleMeasure();
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) intersectionObserver.observe(containerRef.current);

    scheduleMeasure();

    const timers = [
      setTimeout(scheduleMeasure, 150),
      setTimeout(scheduleMeasure, 500),
      setTimeout(scheduleMeasure, 1200),
    ];

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      if (pendingRaf) cancelAnimationFrame(pendingRaf);
      timers.forEach((t) => clearTimeout(t));
    };
  }, [measure, isMobile, isTablet, mounted, iconRefs]);

  useSolvynAnimation({
    points,
    pathRefs,
    beamRefs,
    progressRefs,
    setIcons,
    enabled: beamAnimationReady,
  });

  const logoFrame =
    isMobile ? "w-12 h-12 sm:w-16 sm:h-16" : isTablet ? "w-16 h-16 md:w-20 md:h-20" : "w-20 h-20 md:w-24 md:h-24";

  return (
    <section
      id="solvyn"
      data-snap-section
      className="relative w-full overflow-hidden px-4 sm:px-6 py-16 sm:py-20 md:py-24"
    >
      <EdgeLines />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-10 lg:gap-14">
        <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-4xl">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600">
            The Solvyn architecture
          </p>
          <h2 className="font-sans font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            From field data to actionable intelligence
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600">
            <span className="font-semibold text-gray-900">Solvyn</span> unifies SCADA, EMS, PPC, EPM, and intelligent
            bidding into one AI-driven layer — built for solar, wind, BESS, hybrid, and green hydrogen operations.
          </p>
          <Link
            href="/solvyn/solvyn-x"
            className="
              group inline-flex items-center justify-center gap-0.5
              font-sans font-bold text-sm sm:text-base md:text-lg
              px-[20px] py-[10px]
              whitespace-nowrap rounded-[8px] bg-transparent
              border border-[#FF7F00] text-[#FF7F00]
              cursor-pointer
              transition-all duration-300 ease-in-out
              hover:bg-[#FF7F00]/10 hover:shadow-sm active:translate-y-px
            "
          >
            Explore Solvyn
            <CtaHoverArrow />
          </Link>
        </div>

        <div className="w-full max-w-5xl mx-auto rounded-2xl bg-gray-50/40 px-3 py-6 sm:px-5 sm:py-8 md:py-10">
          

          <div
            ref={containerRef}
            className="relative flex items-center justify-center w-full mx-auto"
            style={containerStyle}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2 sm:gap-3">
              <div
                ref={sgridsRef}
                className={`relative rounded-2xl bg-[#FF7F00] p-[2px] shadow-lg shadow-orange-500/15 transition-all duration-500 group ${logoFrame}`}
              >
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center p-2 sm:p-3">
                  <Image
                    alt="SGrids logo"
                    width={isMobile ? 40 : isTablet ? 60 : 80}
                    height={isMobile ? 40 : isTablet ? 60 : 80}
                    src="/sgrids.svg"
                    onLoad={() => markDiagramImageLoaded(0)}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div
                className={`rounded-lg border border-[#FF7F00]/25 bg-white shadow-sm ${
                  isMobile ? "px-2 py-1" : "px-4 py-2"
                }`}
              >
                <span className={`font-bold text-[#FF7F00] ${isMobile ? "text-sm" : "text-lg"}`}>Solvyn</span>
              </div>
            </div>

            {icons.map((icon, idx) => {
              const config = ICON_CONFIG[idx];
              const positionData = ICON_POSITIONS[idx];

              return (
                <SolvynIconNode
                  key={icon.id}
                  icon={icon}
                  IconComponent={config.component}
                  svgIconSize={svgIconSize}
                  position={stablePositions[idx]}
                  animationDelay={positionData.delay}
                  borderColor={positionData.borderColor}
                  isMobile={isMobile}
                  isTablet={isTablet}
                />
              );
            })}

            <SolvynBeams
              points={points}
              containerRef={containerRef}
              pathRefs={pathRefs}
              beamRefs={beamRefs}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
