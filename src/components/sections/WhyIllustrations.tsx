"use client";

import React, { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ACCENT = "rgb(255, 122, 24)";
const STROKE = "rgb(55, 65, 81)";
const MUTED = "rgb(156, 163, 175)";
const FILL_CARD = "rgb(249, 250, 251)";

export type WhyIllustrationId =
  | "agnostic"
  | "compliance"
  | "patents"
  | "scale";

const smoothRepeat = {
  duration: 3.2,
  repeat: Infinity,
  ease: [0.45, 0, 0.55, 1] as [number, number, number, number],
};

/** Truly Agnostic: EMS hub + four cardinal integrations (INV, BMS, PPC, OEM) with box→EMS beam pulses. */
function AgnosticIllustration({ reduce }: { reduce: boolean }) {
  const uid = useId().replace(/:/g, "");
  const cx = 130;
  const cy = 130;
  const r = 78;
  const rEms = 30;
  const halfW = 23;
  const halfH = 15;
  const beamSeg = 16;
  const cycle = 3.2;

  const nodes: { label: string; angle: number }[] = [
    { label: "INV", angle: -90 },
    { label: "BMS", angle: 0 },
    { label: "PPC", angle: 90 },
    { label: "OEM", angle: 180 },
  ];

  type Arm = {
    label: string;
    nx: number;
    ny: number;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    gap: number;
    i: number;
  };

  const arms: Arm[] = nodes.map(({ label, angle }, i) => {
    const rad = (angle * Math.PI) / 180;
    const nx = cx + r * Math.cos(rad);
    const ny = cy + r * Math.sin(rad);
    const Lfull = Math.hypot(nx - cx, ny - cy) || 1;
    const uix = (cx - nx) / Lfull;
    const uiy = (cy - ny) / Lfull;
    const inset = Math.abs(nx - cx) < Math.abs(ny - cy) ? halfH : halfW;
    const x1 = nx + uix * inset;
    const y1 = ny + uiy * inset;
    const x2 = cx + ((nx - cx) / Lfull) * rEms;
    const y2 = cy + ((ny - cy) / Lfull) * rEms;
    const segLen = Math.hypot(x2 - x1, y2 - y1) || 1;
    const gap = Math.max(segLen + beamSeg * 2, 1);
    return { label, nx, ny, x1, y1, x2, y2, gap, i };
  });

  return (
    <svg
      viewBox="0 0 260 260"
      className="w-full max-w-[220px] h-auto mx-auto md:mx-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <filter id={`why-glow-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Connector base: box inner edge → EMS rim */}
      {arms.map(({ label, x1, y1, x2, y2 }) => (
        <line
          key={`base-${label}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="rgb(229, 231, 235)"
          strokeWidth={2}
          strokeLinecap="round"
        />
      ))}

      {/* Traveling pulse: peripheral → EMS (dash starts at box end) */}
      {arms.map(({ label, x1, y1, x2, y2, gap, i }) => (
        <motion.line
          key={`beam-${label}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={ACCENT}
          strokeWidth={3}
          strokeLinecap="round"
          strokeDasharray={`${beamSeg} ${gap}`}
          filter={`url(#why-glow-${uid})`}
          initial={false}
          animate={
            reduce
              ? { strokeDashoffset: 0, opacity: 0.6 }
              : { strokeDashoffset: [0, -(beamSeg + gap)] }
          }
          transition={
            reduce
              ? { duration: 0 }
              : {
                  strokeDashoffset: {
                    duration: cycle,
                    repeat: Infinity,
                    ease: "linear" as const,
                    delay: (i * cycle) / 4,
                  },
                }
          }
        />
      ))}

      {/* EMS hub */}
      <circle cx={cx} cy={cy} r={rEms + 5} fill="rgb(255, 247, 237)" opacity={0.65} />
      <motion.circle
        cx={cx}
        cy={cy}
        r={rEms}
        fill={FILL_CARD}
        stroke={STROKE}
        strokeWidth={2}
        animate={reduce ? {} : { scale: [1, 1.04, 1], strokeWidth: [2, 2.35, 2] }}
        transition={reduce ? {} : { ...smoothRepeat, duration: 2.4 }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      <text
        x={cx}
        y={cy + 5}
        textAnchor="middle"
        className="fill-gray-900 font-mono font-semibold"
        style={{ fontSize: 12 }}
      >
        EMS
      </text>

      {/* Peripheral integration tiles */}
      {arms.map(({ label, nx, ny, i }) => (
        <g key={`box-${label}`}>
          <motion.rect
            x={nx - halfW}
            y={ny - halfH}
            width={halfW * 2}
            height={halfH * 2}
            rx={7}
            fill={FILL_CARD}
            stroke={STROKE}
            strokeWidth={1.5}
            animate={
              reduce
                ? {}
                : {
                    stroke: [STROKE, STROKE, ACCENT, STROKE, STROKE],
                  }
            }
            transition={
              reduce
                ? {}
                : {
                    duration: cycle,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                    delay: (i * cycle) / 4,
                    times: [0, 0.72, 0.82, 0.92, 1],
                  }
            }
          />
          <text
            x={nx}
            y={ny + 4}
            textAnchor="middle"
            className="fill-gray-800 font-mono font-semibold"
            style={{ fontSize: 10, letterSpacing: "0.02em" }}
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function ComplianceIllustration({ reduce }: { reduce: boolean }) {
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 240 220"
      className="w-full max-w-[220px] h-auto mx-auto md:mx-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <clipPath id={`why-layer-clip-${uid}`}>
          <rect x={40} y={44} width={160} height={120} rx={8} />
        </clipPath>
        <linearGradient id={`why-scan-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0" />
          <stop offset="50%" stopColor={ACCENT} stopOpacity="0.35" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect
        x={40}
        y={120}
        width={160}
        height={56}
        rx={8}
        fill={FILL_CARD}
        stroke={STROKE}
        strokeWidth={1.5}
      />
      <text x={120} y={152} textAnchor="middle" className="fill-gray-500" style={{ fontSize: 10 }}>
        dispatch core
      </text>

      <rect
        x={48}
        y={72}
        width={144}
        height={52}
        rx={6}
        fill="white"
        stroke={MUTED}
        strokeWidth={1.25}
      />
      <motion.rect
        x={56}
        y={84}
        width={128}
        height={6}
        rx={2}
        fill="rgb(229, 231, 235)"
        animate={reduce ? {} : { opacity: [0.45, 1, 0.45], scaleX: [0.92, 1, 0.92] }}
        style={{ transformOrigin: "120px 87px" }}
        transition={
          reduce ? {} : { duration: 1.65, repeat: Infinity, delay: 0.15, ease: "easeInOut" }
        }
      />
      <motion.rect
        x={56}
        y={96}
        width={96}
        height={6}
        rx={2}
        fill="rgb(229, 231, 235)"
        animate={reduce ? {} : { opacity: [0.45, 1, 0.45], scaleX: [0.88, 1, 0.88] }}
        style={{ transformOrigin: "104px 99px" }}
        transition={
          reduce ? {} : { duration: 1.65, repeat: Infinity, delay: 0.45, ease: "easeInOut" }
        }
      />

      <motion.rect
        x={40}
        y={44}
        width={160}
        height={36}
        rx={8}
        fill={FILL_CARD}
        stroke={ACCENT}
        strokeWidth={2}
        animate={reduce ? {} : { strokeWidth: [2, 2.85, 2] }}
        transition={reduce ? {} : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <text
        x={120}
        y={68}
        textAnchor="middle"
        className="fill-gray-800 font-mono font-semibold"
        style={{ fontSize: 12 }}
      >
        21+ grid codes
      </text>

      <motion.rect
        x={40}
        width={160}
        height={28}
        fill={`url(#why-scan-${uid})`}
        clipPath={`url(#why-layer-clip-${uid})`}
        initial={{ y: reduce ? 88 : 44 }}
        animate={
          reduce ? { y: 88 } : { y: [44, 128, 44] }
        }
        transition={
          reduce ? { duration: 0 } : { duration: 4.2, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }
        }
      />

      <circle cx={190} cy={56} r={10} fill={ACCENT} opacity={0.12} />
      <path
        d="M186 56l2.5 2.5 5.5-6"
        stroke={ACCENT}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function hexPathPointyTop(cx: number, cy: number, r: number) {
  const parts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const a = ((-90 + i * 60) * Math.PI) / 180;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    parts.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
  }
  return `${parts.join(" ")} Z`;
}

/** 14+ Patents: stacked papers + hex badge (matches Why palette / motion). */
function PatentsIllustration({ reduce }: { reduce: boolean }) {
  const uid = useId().replace(/:/g, "");
  const hx = 130;
  const hy = 104;
  const hR = 36;
  const hexD = hexPathPointyTop(hx, hy, hR);

  const pivot = { x: 130, y: 218 };
  const papers = [
    { x: 60, y: 162, w: 140, h: 74, rx: 9, rot: -5.5, fill: "rgb(241, 245, 249)", stroke: MUTED, sw: 1.15 },
    { x: 67, y: 152, w: 134, h: 74, rx: 9, rot: -3.2, fill: "rgb(248, 250, 252)", stroke: MUTED, sw: 1.2 },
    { x: 74, y: 142, w: 128, h: 74, rx: 9, rot: -1.4, fill: FILL_CARD, stroke: STROKE, sw: 1.45 },
    { x: 81, y: 132, w: 122, h: 74, rx: 9, rot: 0, fill: "white", stroke: STROKE, sw: 2 },
  ] as const;

  const top = papers[papers.length - 1];
  const lineY0 = top.y + 26;
  const lineY1 = top.y + 42;
  const lineY2 = top.y + 58;

  return (
    <svg
      viewBox="0 0 260 260"
      className="w-full max-w-[220px] h-auto mx-auto md:mx-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <filter id={`patent-stack-shadow-${uid}`} x="-25%" y="-15%" width="150%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="rgb(15,23,42)" floodOpacity="0.07" />
        </filter>
        <filter id={`patent-hex-glow-${uid}`} x="-35%" y="-35%" width="170%" height="170%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.g
        filter={`url(#patent-stack-shadow-${uid})`}
        animate={reduce ? {} : { y: [0, -5, 0] }}
        transition={reduce ? {} : { duration: 4, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
        style={{ transformOrigin: `${pivot.x}px ${pivot.y}px` }}
      >
        {papers.map((p, i) => (
          <g key={i} transform={`rotate(${p.rot} ${pivot.x} ${pivot.y})`}>
            <motion.rect
              x={p.x}
              width={p.w}
              height={p.h}
              rx={p.rx}
              fill={p.fill}
              stroke={p.stroke}
              strokeWidth={p.sw}
              initial={false}
              animate={reduce ? { y: p.y } : { y: [p.y, p.y - 2.2, p.y] }}
              transition={
                reduce
                  ? { duration: 0 }
                  : {
                      duration: 2.75,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.18,
                    }
              }
            />
          </g>
        ))}

        {/* Top sheet: abstract lines + folded corner */}
        <g transform={`rotate(${top.rot} ${pivot.x} ${pivot.y})`}>
          <path
            d={`M ${top.x + top.w - 18} ${top.y + 10} L ${top.x + top.w - 4} ${top.y + 10} L ${top.x + top.w - 4} ${top.y + 22} Z`}
            fill="rgb(243, 244, 246)"
            stroke={MUTED}
            strokeWidth={0.9}
            strokeLinejoin="round"
          />
          <motion.path
            d={`M ${top.x + 18} ${lineY0} H ${top.x + top.w - 28} M ${top.x + 18} ${lineY1} H ${top.x + top.w - 52} M ${top.x + 18} ${lineY2} H ${top.x + top.w - 40}`}
            stroke={MUTED}
            strokeWidth={1.35}
            strokeLinecap="round"
            animate={reduce ? {} : { opacity: [0.38, 0.72, 0.38] }}
            transition={reduce ? {} : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>
      </motion.g>

      {/* Hex badge: 14+ */}
      <motion.g
        style={{ transformOrigin: `${hx}px ${hy}px` }}
        animate={reduce ? {} : { y: [0, -3, 0] }}
        transition={reduce ? {} : { duration: 4, repeat: Infinity, ease: [0.45, 0, 0.55, 1], delay: 0.12 }}
      >
        <circle cx={hx} cy={hy} r={hR + 10} fill={ACCENT} opacity={0.08} />
        <motion.path
          d={hexD}
          fill="rgb(255, 252, 248)"
          stroke={ACCENT}
          strokeWidth={2}
          strokeLinejoin="round"
          filter={`url(#patent-hex-glow-${uid})`}
          animate={reduce ? {} : { strokeWidth: [2, 2.45, 2] }}
          transition={reduce ? {} : { ...smoothRepeat, duration: 2.35 }}
        />
        <text
          x={hx}
          y={hy}
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-gray-900 font-mono font-semibold"
          style={{ fontSize: 15, letterSpacing: "-0.02em" }}
        >
          14+
        </text>
      </motion.g>

      <text
        x={130}
        y={248}
        textAnchor="middle"
        className="fill-gray-500 font-mono"
        style={{ fontSize: 9, letterSpacing: "0.04em" }}
      >
        digital twin · EMS · AURA
      </text>
    </svg>
  );
}

/** Proven at Scale: chart panel, grid, gradient bars with left→right capacity wave, dual trend lines. */
function ScaleIllustration({ reduce }: { reduce: boolean }) {
  const uid = useId().replace(/:/g, "");
  const bars = [32, 48, 64, 88, 104];
  const baseY = 196;
  const startX = 52;
  const barW = 22;
  const step = 34;
  const panel = { x: 34, y: 58, w: 192, h: 152, rx: 10 };
  const barStroke = "rgb(209, 213, 219)";
  /** Growth trajectory: muted guide under the bars, accent dashed on top. */
  const trend = { x1: 46, y1: 168, x2: 216, y2: 78 };
  const dashUnit = 6;
  const gapUnit = 7;
  const dashPattern = dashUnit + gapUnit;
  const waveDuration = 2.85;
  const waveStagger = 0.34;
  const waveRepeatDelay = 1.35;

  return (
    <svg
      viewBox="0 0 260 260"
      className="w-full max-w-[220px] h-auto mx-auto md:mx-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <filter id={`scale-trend-glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {bars.map((_, i) => (
          <linearGradient key={`g-${i}`} id={`scale-bar-grad-${uid}-${i}`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="rgb(218, 222, 228)" />
            <stop offset="55%" stopColor="rgb(232, 234, 238)" />
            <stop offset="100%" stopColor="rgb(241, 243, 246)" />
          </linearGradient>
        ))}
      </defs>

      <text
        x={130}
        y={34}
        textAnchor="middle"
        className="fill-gray-400 font-mono"
        style={{ fontSize: 9, letterSpacing: "0.06em" }}
      >
        GW / footprint
      </text>

      <rect
        x={panel.x}
        y={panel.y}
        width={panel.w}
        height={panel.h}
        rx={panel.rx}
        fill={FILL_CARD}
        stroke="rgb(229, 231, 235)"
        strokeWidth={1.25}
      />

      {/* Read grid — subtle horizontal guides */}
      {[0.28, 0.52, 0.76].map((t, gi) => {
        const y = panel.y + panel.h * t;
        return (
          <line
            key={gi}
            x1={panel.x + 10}
            y1={y}
            x2={panel.x + panel.w - 10}
            y2={y}
            stroke="rgb(243, 244, 246)"
            strokeWidth={1}
          />
        );
      })}

      <line
        x1={panel.x + 10}
        y1={baseY}
        x2={panel.x + panel.w - 10}
        y2={baseY}
        stroke={MUTED}
        strokeOpacity={0.35}
        strokeWidth={1.25}
      />

      {bars.map((h, i) => {
        const bx = startX + i * step;
        const kLow = 0.88;
        const kMid = 0.96;
        const kPeak = 1;
        return (
          <g key={i}>
            <motion.rect
              x={bx}
              width={barW}
              rx={4}
              fill={`url(#scale-bar-grad-${uid}-${i})`}
              stroke={barStroke}
              strokeWidth={1}
              initial={false}
              animate={
                reduce
                  ? { height: h, y: baseY - h }
                  : {
                      height: [
                        h * kLow,
                        h * kMid,
                        h * kPeak,
                        h * kMid,
                        h * kPeak,
                        h * kMid,
                      ],
                      y: [
                        baseY - h * kLow,
                        baseY - h * kMid,
                        baseY - h * kPeak,
                        baseY - h * kMid,
                        baseY - h * kPeak,
                        baseY - h * kMid,
                      ],
                    }
              }
              transition={
                reduce
                  ? { duration: 0 }
                  : {
                      duration: waveDuration,
                      repeat: Infinity,
                      repeatDelay: waveRepeatDelay,
                      ease: [0.45, 0, 0.55, 1],
                      delay: i * waveStagger,
                      times: [0, 0.22, 0.42, 0.55, 0.72, 1],
                    }
              }
            />
            <motion.rect
              x={bx}
              width={barW}
              height={2.5}
              rx={1.25}
              fill={ACCENT}
              fillOpacity={0.28}
              initial={false}
              animate={
                reduce
                  ? { y: baseY - h - 2.5, opacity: 0.18 }
                  : {
                      y: [
                        baseY - h * kLow - 2.5,
                        baseY - h * kMid - 2.5,
                        baseY - h * kPeak - 2.5,
                        baseY - h * kMid - 2.5,
                        baseY - h * kPeak - 2.5,
                        baseY - h * kMid - 2.5,
                      ],
                      opacity: [0.12, 0.28, 0.42, 0.26, 0.38, 0.22],
                    }
              }
              transition={
                reduce
                  ? { duration: 0 }
                  : {
                      duration: waveDuration,
                      repeat: Infinity,
                      repeatDelay: waveRepeatDelay,
                      ease: [0.45, 0, 0.55, 1],
                      delay: i * waveStagger,
                      times: [0, 0.22, 0.42, 0.55, 0.72, 1],
                    }
              }
            />
          </g>
        );
      })}

      {/* Baseline trajectory (static, de-emphasized) */}
      <line
        x1={trend.x1}
        y1={trend.y1}
        x2={trend.x2}
        y2={trend.y2}
        stroke={MUTED}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeDasharray="4 9"
        strokeOpacity={0.4}
      />

      <motion.line
        x1={trend.x1}
        y1={trend.y1}
        x2={trend.x2}
        y2={trend.y2}
        stroke={ACCENT}
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeDasharray={`${dashUnit} ${gapUnit}`}
        filter={`url(#scale-trend-glow-${uid})`}
        initial={false}
        animate={reduce ? { strokeDashoffset: 0 } : { strokeDashoffset: [0, -dashPattern * 4] }}
        transition={
          reduce
            ? { duration: 0 }
            : { duration: 2.4, repeat: Infinity, ease: "linear" as const }
        }
      />
    </svg>
  );
}

export function WhyIllustration({ variant }: { variant: WhyIllustrationId }) {
  const reduce = useReducedMotion() ?? false;

  switch (variant) {
    case "agnostic":
      return <AgnosticIllustration reduce={reduce} />;
    case "compliance":
      return <ComplianceIllustration reduce={reduce} />;
    case "patents":
      return <PatentsIllustration reduce={reduce} />;
    case "scale":
      return <ScaleIllustration reduce={reduce} />;
    default:
      return null;
  }
}
