"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Services / "Asset Coverage" animation.
 *
 * A single hub at the top streams continuous orange pulses down five gently
 * curved beams to the five asset categories Solvyn covers (Solar, Wind, BESS,
 * Hybrid, Green Hydrogen). When a pulse reaches an asset card the card
 * "lights up" — its glyph and ring pick up the brand orange, then ease back
 * to neutral as the next pulse builds.
 *
 * Visual vocabulary is intentionally aligned with `AboutAnimation` and
 * `Hero` (gray hairlines + traveling orange particles + soft origin halo) so
 * the page reads as one design system.
 */

const ACCENT = "#FF7F00";
const NEUTRAL = "#374151"; // gray-700
const LINE = "#9CA3AF"; // gray-400
const SOFT = "#e5edf5"; // matches EdgeLines hairline
const CARD_BG = "#ffffff";

const VB_W = 1000;
const VB_H = 360;

// SGA logo (sgrids.svg) is roughly 0.63:1 wide:tall — match that aspect.
const HUB = { w: 48, h: 76 };
const HUB_CX = 500;
const HUB_TOP_Y = 10;
const HUB_CY = HUB_TOP_Y + HUB.h / 2; // logo geometric center
// Beams emanate from a point just below the logo so they look like power
// flowing OUT of the SGA mark, not through it.
const ORIGIN = { x: HUB_CX, y: HUB_TOP_Y + HUB.h + 6 };

const CARD = { w: 72, h: 72, r: 14 }; // icon card dimensions
const ICON_SCALE = 1.25; // visual scale applied to glyphs (drawn at ~24px native)
const ICON_CY = 274;
const LABEL_Y = ICON_CY + CARD.h / 2 + 28;

const CYCLE = 3.6;
const STAGGER = 0.55;

// Annotated as mutable Bézier tuples so framer-motion's `Transition` type
// (which expects `number[]` / a mutable `[n,n,n,n]`) accepts them directly.
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.65, 0, 0.35, 1];

type AssetId = "solar" | "wind" | "bess" | "hybrid" | "hydrogen";

type AssetNode = {
  id: AssetId;
  label: string;
  x: number;
};

const NODES: AssetNode[] = [
  { id: "solar", label: "Solar", x: 110 },
  { id: "wind", label: "Wind", x: 305 },
  { id: "bess", label: "BESS", x: 500 },
  { id: "hybrid", label: "Hybrid", x: 695 },
  { id: "hydrogen", label: "Green H₂", x: 890 },
];

// Smooth cubic curve that leaves the hub flowing straight down and arrives
// at the asset card flowing straight down — same shape language as
// `createSmoothCurvedPath` in `lib/solvynUtils.ts`.
function curvedPath(targetX: number, targetY: number): string {
  const dy = targetY - ORIGIN.y;
  const reach = Math.max(Math.abs(dy) * 0.55, 90);
  const c1y = ORIGIN.y + reach;
  const c2y = targetY - reach;
  return `M ${ORIGIN.x} ${ORIGIN.y} C ${ORIGIN.x} ${c1y} ${targetX} ${c2y} ${targetX} ${targetY}`;
}

// ---------- Particles ----------

type FlowParticleProps = {
  d: string;
  duration: number;
  delay: number;
  size?: number;
  color?: string;
};

// SMIL-driven comet that travels along the path each cycle. Per-frame work
// stays in the browser engine — no React re-renders.
const FlowParticle: React.FC<FlowParticleProps> = ({
  d,
  duration,
  delay,
  size = 3,
  color = ACCENT,
}) => {
  const dur = `${duration}s`;
  const begin = `${delay}s`;
  return (
    <g style={{ pointerEvents: "none" }}>
      <circle r={size * 2.6} fill={color} opacity={0}>
        <animate
          attributeName="opacity"
          values="0;0.22;0.22;0"
          keyTimes="0;0.18;0.82;1"
          dur={dur}
          begin={begin}
          repeatCount="indefinite"
        />
        <animateMotion
          dur={dur}
          begin={begin}
          repeatCount="indefinite"
          path={d}
          calcMode="spline"
          keyTimes="0;1"
          keySplines="0.4 0 0.2 1"
        />
      </circle>
      <circle r={size} fill={color} opacity={0}>
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.12;0.88;1"
          dur={dur}
          begin={begin}
          repeatCount="indefinite"
        />
        <animateMotion
          dur={dur}
          begin={begin}
          repeatCount="indefinite"
          path={d}
          calcMode="spline"
          keyTimes="0;1"
          keySplines="0.4 0 0.2 1"
        />
      </circle>
    </g>
  );
};

// ---------- Glyphs (24x24, drawn around 0,0; stroked with currentColor) ----------

const StrokeGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <g
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  >
    {children}
  </g>
);

const SolarGlyph: React.FC = () => (
  <StrokeGroup>
    {/* Sun + rays */}
    <circle cx={-8} cy={-9} r={2.6} fill="currentColor" stroke="none" />
    <line x1={-8} y1={-15} x2={-8} y2={-13.5} />
    <line x1={-8} y1={-4.5} x2={-8} y2={-3} />
    <line x1={-14} y1={-9} x2={-12.5} y2={-9} />
    <line x1={-3.5} y1={-9} x2={-2} y2={-9} />
    <line x1={-12} y1={-13} x2={-11} y2={-12} />
    <line x1={-5} y1={-6} x2={-4} y2={-5} />
    {/* Panel surface (parallelogram) */}
    <path d="M -10 14 L -4 0 L 14 0 L 8 14 Z" />
    <path d="M -7 7 L 11 7" />
    <path d="M -1 0 L -4 14" />
    <path d="M 5 0 L 2 14" />
  </StrokeGroup>
);

const WindGlyph: React.FC = () => (
  // Vertical tower + ground pad + circular hub + three teardrop blades at
  // 90°, 210°, 330° so the silhouette unambiguously reads as a wind turbine
  // (not an aircraft).
  <g
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  >
    {/* Tower */}
    <line x1={0} y1={-2} x2={0} y2={14} />
    {/* Ground pad */}
    <line x1={-5} y1={14} x2={5} y2={14} />
    {/* Blades — fat tapered shapes so they read at small sizes */}
    <g fill="currentColor" stroke="none">
      <path d="M 0 -2 L 1.4 -14 L -1.4 -14 Z" />
      <path d="M 0 -2 L 12.4 4 L 11 6.5 Z" />
      <path d="M 0 -2 L -12.4 4 L -11 6.5 Z" />
    </g>
    {/* Hub on top of blades */}
    <circle cx={0} cy={-2} r={2} fill="currentColor" stroke="none" />
  </g>
);

const BessGlyph: React.FC = () => (
  <StrokeGroup>
    {/* Battery body */}
    <rect x={-12} y={-9} width={22} height={18} rx={2} />
    {/* Terminal cap */}
    <path d="M 10 -4 L 13 -4 L 13 4 L 10 4" />
    {/* Charge cells */}
    <path d="M -8 -5 L -8 5" />
    <path d="M -3 -5 L -3 5" />
    {/* Bolt */}
    <path d="M 4 -5 L 0 1 L 3 1 L 1 5" />
  </StrokeGroup>
);

const HybridGlyph: React.FC = () => (
  // Three feeder lines converging into a central hub — communicates the
  // "multiple sources unified into one plant" idea more directly than a
  // generic atom/Venn mark.
  <g
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  >
    {/* Source nodes */}
    <circle cx={-12} cy={-8} r={2.2} fill="currentColor" stroke="none" />
    <circle cx={12} cy={-8} r={2.2} fill="currentColor" stroke="none" />
    <circle cx={0} cy={12} r={2.2} fill="currentColor" stroke="none" />
    {/* Feeder paths into the central hub */}
    <path d="M -12 -8 Q -6 -2 0 0" />
    <path d="M 12 -8 Q 6 -2 0 0" />
    <path d="M 0 12 Q 0 6 0 0" />
    {/* Central hub */}
    <circle cx={0} cy={0} r={3} fill="currentColor" stroke="none" />
  </g>
);

const HydrogenGlyph: React.FC = () => (
  // Bold H₂ molecule mark — the "GREEN" qualifier is carried by the label
  // beneath the card, so the glyph stays legible and uncluttered.
  <g fill="currentColor" stroke="none" style={{ pointerEvents: "none" }}>
    <text
      x={-2}
      y={3}
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="var(--font-plex-sans), ui-sans-serif, system-ui, sans-serif"
      fontWeight={700}
      fontSize={20}
    >
      H
    </text>
    <text
      x={8}
      y={9}
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="var(--font-plex-sans), ui-sans-serif, system-ui, sans-serif"
      fontWeight={700}
      fontSize={11}
    >
      2
    </text>
  </g>
);

const GLYPHS: Record<AssetId, React.FC> = {
  solar: SolarGlyph,
  wind: WindGlyph,
  bess: BessGlyph,
  hybrid: HybridGlyph,
  hydrogen: HydrogenGlyph,
};

// ---------- Asset card ----------

type AssetCellProps = {
  node: AssetNode;
  index: number;
  reducedMotion: boolean;
};

const AssetCell: React.FC<AssetCellProps> = ({
  node,
  index,
  reducedMotion,
}) => {
  const Glyph = GLYPHS[node.id];
  const cx = node.x;
  const cy = ICON_CY;
  const half = CARD.w / 2;
  const cardX = cx - half;
  const cardY = cy - CARD.h / 2;

  // Phase the icon's "lit" moment to coincide with its particle landing.
  // Particle launches at delay = index * STAGGER and lands at the card just
  // before the cycle completes. The icon ignites around 88% of the way
  // through the cycle, then eases back to neutral as the next pulse builds.
  // Note: do NOT use `as const` here — framer-motion's `Transition` type
  // requires `times` to be a mutable `number[]` (and `ease` a mutable Bézier
  // tuple), and `as const` would freeze both as `readonly`.
  const cycleTransition = {
    duration: CYCLE,
    times: [0, 0.78, 0.88, 0.96, 1],
    delay: index * STAGGER,
    repeat: Infinity,
    ease: EASE_IN_OUT,
  };

  const ringAnim = reducedMotion
    ? { stroke: SOFT }
    : { stroke: [SOFT, SOFT, ACCENT, ACCENT, SOFT] };

  const colorAnim = reducedMotion
    ? { color: NEUTRAL }
    : { color: [NEUTRAL, NEUTRAL, ACCENT, ACCENT, NEUTRAL] };

  const labelAnim = reducedMotion
    ? { fill: "#4b5563" }
    : { fill: ["#6b7280", "#6b7280", "#111827", "#111827", "#6b7280"] };

  return (
    <g>
      {/* Card outline */}
      <motion.rect
        x={cardX}
        y={cardY}
        width={CARD.w}
        height={CARD.h}
        rx={CARD.r}
        ry={CARD.r}
        fill={CARD_BG}
        strokeWidth={1}
        initial={false}
        animate={ringAnim}
        transition={cycleTransition}
      />

      {/*
        Position the glyph via a static SVG `transform` on a plain <g> — the
        SVG transform attribute is reliable. The animated <motion.g> inside
        only animates `color`, which propagates to the glyph's `currentColor`
        fills/strokes without disturbing positioning. Animating `scale` here
        would replace the SVG transform attribute with a CSS transform and
        kill the translate, so we deliberately skip it.
      */}
      <g transform={`translate(${cx} ${cy}) scale(${ICON_SCALE})`}>
        <motion.g
          initial={false}
          animate={colorAnim}
          transition={cycleTransition}
        >
          <Glyph />
        </motion.g>
      </g>

      {/* Label */}
      <motion.text
        x={cx}
        y={LABEL_Y}
        textAnchor="middle"
        fontFamily="var(--font-plex-mono), ui-monospace, SFMono-Regular, monospace"
        fontSize={11}
        letterSpacing={1.6}
        initial={false}
        animate={labelAnim}
        transition={cycleTransition}
        style={{ textTransform: "uppercase", fontWeight: 600 }}
      >
        {node.label}
      </motion.text>
    </g>
  );
};

// ---------- Component ----------

type Props = {
  className?: string;
};

export const ServicesAnimation: React.FC<Props> = ({ className = "" }) => {
  const reducedMotion = useReducedMotion() ?? false;

  // Beam terminus sits just above the card's top edge so the pulse visibly
  // arrives at the asset rather than disappearing into it.
  const beamEndY = ICON_CY - CARD.h / 2 - 4;

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="xMidYMid meet"
      className={`w-full h-full ${className}`}
      role="img"
      aria-label="Solvyn covers solar, wind, BESS, hybrid, and green hydrogen assets"
    >
      <defs>
        <radialGradient
          id="services-origin-glow"
          cx={HUB_CX}
          cy={HUB_CY}
          r={84}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.28" />
          <stop offset="55%" stopColor={ACCENT} stopOpacity="0.06" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft orange halo behind the SGA logo so it reads as the "live" hub */}
      <circle cx={HUB_CX} cy={HUB_CY} r={84} fill="url(#services-origin-glow)" />

      {/* Beams (drawn under the cards) */}
      {NODES.map((node, i) => {
        const d = curvedPath(node.x, beamEndY);
        return (
          <g key={`beam-${node.id}`}>
            <path
              d={d}
              stroke={LINE}
              strokeOpacity={0.45}
              strokeWidth={1}
              strokeLinecap="round"
              fill="none"
            />
            {!reducedMotion && (
              <FlowParticle d={d} duration={CYCLE} delay={i * STAGGER} />
            )}
          </g>
        );
      })}

      {/* SGA logo at the top — the "hub" the beams flow out of. */}
      <image
        href="/sgrids.svg"
        x={HUB_CX - HUB.w / 2}
        y={HUB_TOP_Y}
        width={HUB.w}
        height={HUB.h}
        preserveAspectRatio="xMidYMid meet"
      />

      {/* Beam-emanation point + ping ring just below the logo */}
      <g>
        <circle cx={ORIGIN.x} cy={ORIGIN.y} r={3.5} fill={ACCENT} />
        {!reducedMotion && (
          <motion.circle
            cx={ORIGIN.x}
            cy={ORIGIN.y}
            r={3.5}
            fill="none"
            stroke={ACCENT}
            strokeWidth={1}
            initial={{ opacity: 0.5 }}
            animate={{ r: [3.5, 16, 3.5], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: EASE_OUT }}
          />
        )}
      </g>

      {/* Asset cards */}
      {NODES.map((node, i) => (
        <AssetCell
          key={node.id}
          node={node}
          index={i}
          reducedMotion={reducedMotion}
        />
      ))}
    </svg>
  );
};

export default ServicesAnimation;
