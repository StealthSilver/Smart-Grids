"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Stripe-inspired line + dot animation system for the About section.
 *
 * The same set of base nodes is used across all three scenes so transitions
 * feel like the network is reorganizing itself, not switching to a new image.
 */

export type AboutAnimationActiveId = "see" | "execute" | "decide";

const ACCENT = "#FF7F00";
const LINE = "#9CA3AF"; // gray-400

const VB_W = 800;
const VB_H = 260;

type NodeId =
  | "c"
  | "tl"
  | "tm"
  | "tmr"
  | "tr"
  | "ml"
  | "mr"
  | "bl"
  | "bm"
  | "bmr"
  | "br";

const POS: Record<NodeId, { x: number; y: number }> = {
  c: { x: 400, y: 130 },
  tl: { x: 130, y: 70 },
  tm: { x: 280, y: 50 },
  tmr: { x: 520, y: 50 },
  tr: { x: 670, y: 70 },
  ml: { x: 80, y: 130 },
  mr: { x: 720, y: 130 },
  bl: { x: 130, y: 190 },
  bm: { x: 280, y: 210 },
  bmr: { x: 520, y: 210 },
  br: { x: 670, y: 190 },
};

const NODE_IDS = Object.keys(POS) as NodeId[];

// Easings reminiscent of Stripe's gentle, premium feel.
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

// ---------- DECIDE: dense intertwined-network data ----------

// Tunable knobs. Keep node count even, in the 40–60 range, so both sides match.
const DECIDE_NODES = 48;
const DECIDE_LEFT_X = 48;
const DECIDE_RIGHT_X = VB_W - 48; // 752
const DECIDE_TOP_Y = 14;
const DECIDE_BOT_Y = VB_H - 14; // 246
const DECIDE_CENTER_Y = VB_H / 2; // 130

// Three "decision" lines spread across the vertical extent (top / mid / bottom),
// plus a small set of "secondary" lines that linger at reduced opacity — the
// rest are background flow.
const DECIDE_DECISION_INDICES = new Set<number>([13, 24, 35]);
const DECIDE_SECONDARY_INDICES = new Set<number>([
  3, 8, 18, 21, 28, 31, 41, 44,
]);

type DecideKind = "decision" | "secondary" | "background";

type DecidePath = {
  index: number;
  d: string;
  kind: DecideKind;
  y: number;
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// Build all paths once at module load. Cubic Béziers converge strongly toward
// a center "waist", with per-line variance so neighbouring lines weave instead
// of staying parallel.
const DECIDE_PATHS: DecidePath[] = (() => {
  const list: DecidePath[] = [];
  for (let i = 0; i < DECIDE_NODES; i++) {
    const t = i / (DECIDE_NODES - 1);
    const y = lerp(DECIDE_TOP_Y, DECIDE_BOT_Y, t);
    const variance = i - (DECIDE_NODES - 1) / 2;

    // Slight per-line curve-strength variation gives the bundle organic depth.
    const curveStrength = 270 + Math.sin(i * 0.62) * 20 + (i % 3) * 4;
    const cx1 = DECIDE_LEFT_X + curveStrength;
    const cx2 = DECIDE_RIGHT_X - curveStrength;

    // Pull both control points toward the centre to create the waist — but
    // only ~50% of the way, so each line stays visibly continuous from the
    // left node to the right node instead of vanishing into a tight pinch.
    const baseCy = lerp(y, DECIDE_CENTER_Y, 0.5);
    // Push control points in opposite directions so curves cross / weave.
    const cy1 = baseCy + variance * 0.4;
    const cy2 = baseCy - variance * 0.4;

    const d =
      `M${DECIDE_LEFT_X.toFixed(2)},${y.toFixed(2)} ` +
      `C${cx1.toFixed(2)},${cy1.toFixed(2)} ` +
      `${cx2.toFixed(2)},${cy2.toFixed(2)} ` +
      `${DECIDE_RIGHT_X.toFixed(2)},${y.toFixed(2)}`;

    const kind: DecideKind = DECIDE_DECISION_INDICES.has(i)
      ? "decision"
      : DECIDE_SECONDARY_INDICES.has(i)
      ? "secondary"
      : "background";

    list.push({ index: i, d, kind, y });
  }
  return list;
})();

const DECIDE_DECISION_PATHS = DECIDE_PATHS.filter((p) => p.kind === "decision");
const DECIDE_SECONDARY_PATHS = DECIDE_PATHS.filter(
  (p) => p.kind === "secondary"
);
const DECIDE_BACKGROUND_PATHS = DECIDE_PATHS.filter(
  (p) => p.kind === "background"
);

// ---------- SEE: half-globe (hemisphere) of curved latitude arcs ----------
//
// Dense bundle of cubic Béziers stacked from `SEE_BASE_Y` up to `SEE_MID_Y`,
// each curving toward `SEE_TOP_Y`. Lines lower in the stack are nearly flat;
// lines higher in the stack curve more aggressively, so the silhouette reads
// as a hemisphere even though every line spans roughly the full width.
//
// Shares the same horizontal footprint as the 02 (DECIDE) animation so the
// scenes feel like siblings.

const SEE_LINE_COUNT = 56;
const SEE_LEFT_X = DECIDE_LEFT_X; // 48
const SEE_RIGHT_X = DECIDE_RIGHT_X; // 752
const SEE_CX = VB_W / 2; // 400
const SEE_BASE_Y = VB_H * 0.86; // 223.6  bottom of the dome
const SEE_MID_Y = VB_H * 0.55; // 143    top of the line-baseline stack
const SEE_TOP_Y = VB_H * 0.15; // 39     apex of the highest arc

type SeePath = {
  index: number;
  d: string;
  baseY: number;
  /** 0 = bottom of stack, 1 = top of stack. */
  t: number;
};

const SEE_PATHS: SeePath[] = (() => {
  const list: SeePath[] = [];
  for (let i = 0; i < SEE_LINE_COUNT; i++) {
    const t = i / (SEE_LINE_COUNT - 1);

    // Deterministic pseudo-random offsets, so neighbouring lines feel
    // organic rather than mechanically parallel.
    const a = Math.sin(i * 0.73);
    const b = Math.cos(i * 0.41 + 1.2);
    const c = Math.sin(i * 1.17 + 0.3);

    // Baseline Y for this latitude — drifts upward as t → 1.
    const baseY = lerp(SEE_BASE_Y, SEE_MID_Y, t) + a * 1.4;

    // Slight per-line trim so a few lines are visibly shorter than others.
    const trim = (b * 0.5 + 0.5) * 12;
    const x1 = SEE_LEFT_X + trim;
    const x2 = SEE_RIGHT_X - trim;

    // Apex (peak) for this line. For a symmetric cubic Bézier with
    // y1 = y2 = baseY and cy1 = cy2 = cy, the peak at t=0.5 sits at
    //   peakY = baseY - 0.75 * (baseY - cy)
    // so we invert that to place the peak exactly where we want it.
    const peakY = lerp(SEE_BASE_Y - 6, SEE_TOP_Y, t) + c * 1.8;
    const lift = baseY - peakY;
    const cyBase = baseY - lift / 0.75;

    // Tiny asymmetry so curves don't all bend in lock-step.
    const cy1 = cyBase + a * 1.1;
    const cy2 = cyBase - b * 1.1;
    const cx1 = lerp(x1, SEE_CX, 0.42 + a * 0.04);
    const cx2 = lerp(x2, SEE_CX, 0.42 + b * 0.04);

    const d =
      `M${x1.toFixed(2)},${baseY.toFixed(2)} ` +
      `C${cx1.toFixed(2)},${cy1.toFixed(2)} ` +
      `${cx2.toFixed(2)},${cy2.toFixed(2)} ` +
      `${x2.toFixed(2)},${baseY.toFixed(2)}`;

    list.push({ index: i, d, baseY, t });
  }
  return list;
})();

// Vertical opacity gradient: middle of the stack is densest, top fades
// toward the sky and bottom fades into the section background.
const seeLineOpacity = (t: number) => {
  const mid = 0.46;
  const distFromMid = Math.abs(t - 0.42);
  return Math.max(0.22, mid - distFromMid * 0.34);
};

// ---------- DECIDE (3rd animation): radial intelligence burst ----------
//
// A dense fan of radial lines emerging from a single origin near the bottom
// centre, opening upward across roughly ±75°. Particles travel outward along
// each line, and 4 highlighted "decision" lines pulse in accent orange during
// the resolution phase. All geometry is precomputed once — the scene only
// animates opacity / stroke / particle group visibility per phase, so the
// 80+ lines stay 60fps cheap.

const RADIAL_LINE_COUNT = 84;
const RADIAL_ORIGIN_X = VB_W / 2; // 400
const RADIAL_ORIGIN_Y = VB_H * 0.85; // 221 — origin sits below visual centre
const RADIAL_ARC_DEG = 75; // ±75° measured from straight up
const RADIAL_BASE_LENGTH = 205;
const RADIAL_LENGTH_VARIANCE = 22;
const RADIAL_ANGLE_JITTER_DEG = 1.1;

// Deterministic pseudo-random so the burst layout is stable across renders /
// hot reloads. Same seed → same value, no React state needed.
const seededRand = (seed: number) => {
  const s = Math.sin(seed * 12.9898 + 7.1) * 43758.5453;
  return s - Math.floor(s);
};

type RadialKind = "decision" | "background";

type RadialLine = {
  index: number;
  d: string;
  x2: number;
  y2: number;
  length: number;
  kind: RadialKind;
  baseOpacity: number;
  drawDelay: number;
  drawDuration: number;
  particleDuration: number;
  particleDelay: number;
};

// Four "decision" lines spread across the arc — slightly off-symmetric so the
// emphasis doesn't read as a perfect cross.
const RADIAL_DECISION_INDICES = new Set<number>([16, 36, 50, 68]);

const RADIAL_LINES: RadialLine[] = (() => {
  const list: RadialLine[] = [];
  for (let i = 0; i < RADIAL_LINE_COUNT; i++) {
    const t = i / (RADIAL_LINE_COUNT - 1);
    const baseAngleDeg = lerp(-RADIAL_ARC_DEG, RADIAL_ARC_DEG, t);
    const angleJitter =
      (seededRand(i + 7) - 0.5) * 2 * RADIAL_ANGLE_JITTER_DEG;
    const angleDeg = baseAngleDeg + angleJitter;
    const angleRad = (angleDeg * Math.PI) / 180;

    // Length variance — keeps lines from feeling mechanically uniform. A few
    // are visibly shorter than their neighbours.
    const lenNoise =
      (seededRand(i * 3 + 11) - 0.5) * 2 * RADIAL_LENGTH_VARIANCE;
    // Subtle taper at the wings so the fan feels widest in the middle and
    // gracefully recedes at the shoulders, instead of a flat half-disc.
    const edgeFalloff = 1 - Math.pow(Math.abs(t - 0.5) * 2, 2.4) * 0.16;
    const length = (RADIAL_BASE_LENGTH + lenNoise) * edgeFalloff;

    // Origin is below the action — convert "angle from straight up" to xy.
    const x2 = RADIAL_ORIGIN_X + Math.sin(angleRad) * length;
    const y2 = RADIAL_ORIGIN_Y - Math.cos(angleRad) * length;

    const kind: RadialKind = RADIAL_DECISION_INDICES.has(i)
      ? "decision"
      : "background";
    const baseOpacity = 0.6 + seededRand(i + 23) * 0.32;
    const drawDelay = seededRand(i * 5 + 13) * 0.55;
    const drawDuration = 0.7 + seededRand(i * 7 + 3) * 0.25;
    const particleDuration = 3.4 + seededRand(i * 11 + 17) * 2.3;
    const particleDelay = seededRand(i * 13 + 29) * 4;

    const d =
      `M${RADIAL_ORIGIN_X.toFixed(2)},${RADIAL_ORIGIN_Y.toFixed(2)} ` +
      `L${x2.toFixed(2)},${y2.toFixed(2)}`;

    list.push({
      index: i,
      d,
      x2,
      y2,
      length,
      kind,
      baseOpacity,
      drawDelay,
      drawDuration,
      particleDuration,
      particleDelay,
    });
  }
  return list;
})();

const RADIAL_BACKGROUND_LINES = RADIAL_LINES.filter(
  (l) => l.kind === "background"
);
const RADIAL_DECISION_LINES = RADIAL_LINES.filter(
  (l) => l.kind === "decision"
);

// ---------- Persistent base nodes ----------

const BaseNodes: React.FC<{
  activeId: AboutAnimationActiveId;
  reducedMotion: boolean;
}> = ({ activeId, reducedMotion }) => {
  // Every scene now introduces its own self-contained geometry — SEE
  // (hemisphere), EXECUTE (waist bundle), and DECIDE (radial intelligence
  // burst) all manage their own anchor nodes — so the 11 shared perimeter
  // dots are always hidden while a scene is active.
  const hideBaseNodes =
    activeId === "see" || activeId === "execute" || activeId === "decide";

  return (
    <motion.g
      animate={{ opacity: hideBaseNodes ? 0 : 1 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      style={{ pointerEvents: "none" }}
    >
      {NODE_IDS.map((id, i) => {
        const p = POS[id];
        const isCenter = id === "c";
        const accentCenter = activeId === "decide" && isCenter;
        const r = accentCenter ? 5 : 2.5;

        return (
          <g key={id}>
            <motion.circle
              cx={p.x}
              cy={p.y}
              r={r}
              fill={ACCENT}
              initial={false}
              animate={
                reducedMotion
                  ? { opacity: 0.85 }
                  : {
                      opacity: [0.55, 1, 0.55],
                      r: accentCenter ? [r, r + 0.6, r] : [r, r + 0.4, r],
                    }
              }
              transition={{
                duration: 2.6 + (i % 5) * 0.22,
                repeat: Infinity,
                ease: EASE_IN_OUT,
                delay: (i % 7) * 0.18,
              }}
            />
            {accentCenter && !reducedMotion && (
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={r}
                fill="none"
                stroke={ACCENT}
                strokeWidth={1}
                initial={{ r, opacity: 0.5 }}
                animate={{ r: [r, 18, r], opacity: [0.45, 0, 0.45] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: EASE_OUT }}
              />
            )}
          </g>
        );
      })}
    </motion.g>
  );
};

// ---------- Scenes ----------

const sceneVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.45, ease: EASE_OUT } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: EASE_OUT } },
};

// One <motion.path> per latitude arc. We keep `d` static and let Framer
// Motion drive only opacity, so the dense bundle (~56 paths) never re-paints
// the actual curve geometry after mount.
type SeeLineProps = {
  path: SeePath;
  opacity: number;
};

const SeeLine: React.FC<SeeLineProps> = React.memo(({ path, opacity }) => (
  <motion.path
    d={path.d}
    fill="none"
    stroke={LINE}
    strokeWidth={1.1}
    strokeLinecap="round"
    strokeLinejoin="round"
    vectorEffect="non-scaling-stroke"
    initial={{ opacity: 0 }}
    animate={{ opacity }}
    exit={{ opacity: 0, transition: { duration: 0.3, ease: EASE_OUT } }}
    transition={{
      opacity: {
        duration: 0.95,
        // Stagger from the bottom of the dome upward so the hemisphere
        // appears to "rise" into view rather than blink in.
        delay: 0.012 * path.index,
        ease: EASE_IN_OUT,
      },
    }}
  />
));
SeeLine.displayName = "SeeLine";

const SeeScene: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <motion.g
    variants={sceneVariants}
    initial="initial"
    animate="enter"
    exit="exit"
  >
    {/* Endpoint dots on the equator — kept tiny and subtle. */}
    <g style={{ pointerEvents: "none" }}>
      {SEE_PATHS.map((p) => (
        <g key={`see-node-${p.index}`}>
          <circle
            cx={SEE_LEFT_X}
            cy={p.baseY}
            r={1}
            fill={ACCENT}
            opacity={0.4}
          />
          <circle
            cx={SEE_RIGHT_X}
            cy={p.baseY}
            r={1}
            fill={ACCENT}
            opacity={0.4}
          />
        </g>
      ))}
    </g>

    {/* Hemisphere lines — the entire group "breathes" very slowly. */}
    <motion.g
      animate={
        reducedMotion ? { opacity: 1 } : { opacity: [0.94, 1, 0.94] }
      }
      transition={{
        duration: 6.8,
        repeat: Infinity,
        ease: EASE_IN_OUT,
      }}
    >
      {SEE_PATHS.map((p) => (
        <SeeLine
          key={`see-line-${p.index}`}
          path={p}
          opacity={seeLineOpacity(p.t)}
        />
      ))}
    </motion.g>

    {/* Particle flow — one comet per latitude arc, fully desynchronized.
        Driven by SMIL animateMotion inside FlowParticle, so per-frame work
        stays in the browser's animation engine instead of React. */}
    {!reducedMotion && (
      <g>
        {SEE_PATHS.map((p) => {
          // Duration 4.4–7.0s, delay 0–5s, both derived from prime-ish
          // offsets so no two particles share a phase.
          const duration = 4.4 + ((p.index * 0.137) % 2.6);
          const delay = (p.index * 0.21 + p.t * 1.3) % 5;
          return (
            <FlowParticle
              key={`see-particle-${p.index}`}
              d={p.d}
              duration={duration}
              delay={delay}
              size={1.6}
              color={ACCENT}
              opacity={0.85}
              glow
            />
          );
        })}
      </g>
    )}
  </motion.g>
);

// A small "comet" that travels along an SVG path with ease-in-out timing
// (via SMIL `keySplines`) so the motion never feels mechanical. SMIL keeps the
// per-frame work in the browser engine — no React re-renders, no rAF in JS.
type FlowParticleProps = {
  d: string;
  duration: number;
  delay: number;
  size: number;
  color: string;
  opacity?: number;
  glow?: boolean;
  /**
   * Cubic Bézier control points (`x1 y1 x2 y2`) for the SMIL motion timing.
   * Defaults to ease-in-out. Pass an ease-out spline (e.g. "0 0 0.25 1") for
   * particles that should decelerate as they reach the line's far end.
   */
  keySplines?: string;
};

const FlowParticle: React.FC<FlowParticleProps> = ({
  d,
  duration,
  delay,
  size,
  color,
  opacity = 1,
  glow = false,
  keySplines = "0.4 0 0.2 1",
}) => {
  const haloOpacity = (0.18 * opacity).toFixed(3);
  const dur = `${duration}s`;
  const begin = `${delay}s`;
  return (
    <g>
      {glow && (
        <circle r={size * 2.4} fill={color} opacity={0}>
          <animate
            attributeName="opacity"
            values={`0;${haloOpacity};${haloOpacity};0`}
            keyTimes="0;0.15;0.85;1"
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
            keySplines={keySplines}
          />
        </circle>
      )}
      <circle r={size} fill={color} opacity={0}>
        <animate
          attributeName="opacity"
          values={`0;${opacity};${opacity};0`}
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
          keySplines={keySplines}
        />
      </circle>
    </g>
  );
};

// One <motion.path> per line. We deliberately keep `d` static so Framer
// Motion doesn't have to interpolate path data at all — only opacity, stroke
// colour and stroke width per phase, which are cheap to animate.
type DecideLineProps = {
  path: DecidePath;
  opacity: number;
  stroke: string;
  strokeWidth: number;
};

const DecideLine: React.FC<DecideLineProps> = React.memo(
  ({ path, opacity, stroke, strokeWidth }) => (
    <motion.path
      d={path.d}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      // Plain opacity bloom on entry. We deliberately avoid Framer Motion's
      // `pathLength` mechanic here — it sets stroke-dasharray/dashoffset under
      // the hood, which can leave dense bundles looking visibly dashed when
      // combined with non-scaling-stroke and re-renders on phase change.
      initial={{ opacity: 0 }}
      animate={{ opacity, stroke, strokeWidth }}
      exit={{ opacity: 0, transition: { duration: 0.3, ease: EASE_OUT } }}
      transition={{
        opacity: {
          duration: 1.0,
          delay: 0.014 * path.index,
          ease: EASE_IN_OUT,
        },
        stroke: { duration: 1.0, ease: EASE_IN_OUT },
        strokeWidth: { duration: 1.0, ease: EASE_IN_OUT },
      }}
    />
  )
);
DecideLine.displayName = "DecideLine";

type DecidePhase = 1 | 2 | 3;

const decideLineOpacity = (kind: DecideKind, phase: DecidePhase) => {
  if (phase === 1) {
    return kind === "decision" ? 0.55 : kind === "secondary" ? 0.42 : 0.3;
  }
  if (phase === 2) {
    return kind === "decision" ? 0.65 : kind === "secondary" ? 0.32 : 0.1;
  }
  return kind === "decision" ? 0.95 : kind === "secondary" ? 0.18 : 0.05;
};

const decideStroke = (kind: DecideKind, phase: DecidePhase) =>
  kind === "decision" && phase === 3 ? ACCENT : LINE;

const decideStrokeWidth = (kind: DecideKind, phase: DecidePhase) =>
  kind === "decision" && phase === 3 ? 1.4 : 1;

// Particle group opacity per kind/phase. Particles always run on their SMIL
// cycle; only their wrapping `motion.g` opacity is driven by phase, so we
// never restart the underlying motion (which would visibly snap).
const decideParticleGroupOpacity = (kind: DecideKind, phase: DecidePhase) => {
  if (kind === "background") {
    return phase === 1 ? 0.55 : phase === 2 ? 0.18 : 0.05;
  }
  if (kind === "secondary") {
    return phase === 1 ? 0.7 : phase === 2 ? 0.45 : 0.22;
  }
  // For decision lines, the neutral pulse hands off to the orange pulse in
  // phase 3 — so we hide the neutral group then.
  return phase === 1 ? 0.85 : phase === 2 ? 0.9 : 0;
};

const DecideScene: React.FC<{ reducedMotion: boolean }> = ({
  reducedMotion,
}) => {
  // Phase machine: 1 (full network) → 2 (filtering) → 3 (decision) → 1 …
  // Reduced-motion mode skips straight to the resolved decision view.
  const [phase, setPhase] = useState<DecidePhase>(reducedMotion ? 3 : 1);

  useEffect(() => {
    if (reducedMotion) {
      setPhase(3);
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let current: DecidePhase = 1;
    setPhase(1);

    // Phase 1 lingers a bit so the user sees the full bundle hum after the
    // initial draw-in completes (~1.8s with stagger).
    const PHASE_DURATIONS: Record<DecidePhase, number> = {
      1: 5500,
      2: 1900,
      3: 3800,
    };

    const tick = () => {
      const dwell = PHASE_DURATIONS[current];
      timeoutId = setTimeout(() => {
        if (cancelled) return;
        current = current === 1 ? 2 : current === 2 ? 3 : 1;
        setPhase(current);
        tick();
      }, dwell);
    };
    tick();

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [reducedMotion]);

  return (
    <motion.g
      variants={sceneVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {/* Edge node lattice — minimal dots, evenly spaced both sides. */}
      <g style={{ pointerEvents: "none" }}>
        {DECIDE_PATHS.map((p) => (
          <g key={`dec-node-${p.index}`}>
            <circle
              cx={DECIDE_LEFT_X}
              cy={p.y}
              r={1.1}
              fill={ACCENT}
              opacity={0.55}
            />
            <circle
              cx={DECIDE_RIGHT_X}
              cy={p.y}
              r={1.1}
              fill={ACCENT}
              opacity={0.55}
            />
          </g>
        ))}
      </g>

      {/* Background lines first (drawn under), then secondary, then decision
          on top so the orange pulse always reads cleanly. */}
      <g>
        {DECIDE_BACKGROUND_PATHS.map((p) => (
          <DecideLine
            key={`dec-line-${p.index}`}
            path={p}
            opacity={decideLineOpacity(p.kind, phase)}
            stroke={decideStroke(p.kind, phase)}
            strokeWidth={decideStrokeWidth(p.kind, phase)}
          />
        ))}
        {DECIDE_SECONDARY_PATHS.map((p) => (
          <DecideLine
            key={`dec-line-${p.index}`}
            path={p}
            opacity={decideLineOpacity(p.kind, phase)}
            stroke={decideStroke(p.kind, phase)}
            strokeWidth={decideStrokeWidth(p.kind, phase)}
          />
        ))}
        {DECIDE_DECISION_PATHS.map((p) => (
          <DecideLine
            key={`dec-line-${p.index}`}
            path={p}
            opacity={decideLineOpacity(p.kind, phase)}
            stroke={decideStroke(p.kind, phase)}
            strokeWidth={decideStrokeWidth(p.kind, phase)}
          />
        ))}
      </g>

      {!reducedMotion && (
        <>
          {/* Background particle flow — fades during filtering. */}
          <motion.g
            initial={false}
            animate={{
              opacity: decideParticleGroupOpacity("background", phase),
            }}
            transition={{ duration: 1.4, ease: EASE_IN_OUT }}
          >
            {DECIDE_BACKGROUND_PATHS.map((p) => {
              const duration = 3.6 + ((p.index * 0.137) % 2.3);
              const delay = (p.index * 0.19) % 4;
              return (
                <FlowParticle
                  key={`dec-bg-${p.index}`}
                  d={p.d}
                  duration={duration}
                  delay={delay}
                  size={1.3}
                  color={ACCENT}
                  opacity={0.85}
                />
              );
            })}
          </motion.g>

          {/* Secondary particle flow — kept at reduced opacity in phase 3. */}
          <motion.g
            initial={false}
            animate={{
              opacity: decideParticleGroupOpacity("secondary", phase),
            }}
            transition={{ duration: 1.4, ease: EASE_IN_OUT }}
          >
            {DECIDE_SECONDARY_PATHS.map((p) => {
              const duration = 4.0 + ((p.index * 0.17) % 1.8);
              const delay = ((p.index + 5) * 0.21) % 3.5;
              return (
                <FlowParticle
                  key={`dec-sec-${p.index}`}
                  d={p.d}
                  duration={duration}
                  delay={delay}
                  size={1.5}
                  color={ACCENT}
                  opacity={0.95}
                />
              );
            })}
          </motion.g>

          {/* Neutral pulses on decision lines (phases 1 & 2). */}
          <motion.g
            initial={false}
            animate={{
              opacity: decideParticleGroupOpacity("decision", phase),
            }}
            transition={{ duration: 1.0, ease: EASE_IN_OUT }}
          >
            {DECIDE_DECISION_PATHS.map((p, i) => (
              <FlowParticle
                key={`dec-neutral-${p.index}`}
                d={p.d}
                duration={4.2}
                delay={i * 0.55}
                size={1.7}
                color={ACCENT}
                opacity={1}
              />
            ))}
          </motion.g>

          {/* Bright orange decision pulses — only resolved in phase 3. */}
          <motion.g
            initial={false}
            animate={{ opacity: phase === 3 ? 1 : 0 }}
            transition={{ duration: 1.0, ease: EASE_IN_OUT }}
          >
            {DECIDE_DECISION_PATHS.map((p, i) => (
              <FlowParticle
                key={`dec-accent-${p.index}`}
                d={p.d}
                duration={2.8}
                delay={i * 0.45}
                size={2.6}
                color={ACCENT}
                opacity={1}
                glow
              />
            ))}
          </motion.g>
        </>
      )}
    </motion.g>
  );
};

// ---------- DECIDE: radial intelligence burst scene ----------

type RadialPhase = 1 | 2 | 3;

const radialLineOpacity = (
  kind: RadialKind,
  base: number,
  phase: RadialPhase
) => {
  if (phase === 1) return base * 0.85;
  if (phase === 2) return base;
  // Phase 3: decision lines pop, background recedes so the accent reads.
  if (kind === "decision") return Math.min(1, base + 0.3);
  return base * 0.55;
};

type RadialLineElProps = {
  path: RadialLine;
  phase: RadialPhase;
};

// Base radial line. Always strokes via the radial-fade gradient — we never
// animate stroke (gradient URLs aren't an animatable value in Framer Motion).
// Decision emphasis is rendered as a separate accent overlay path on top,
// whose opacity animates instead. Memoised so re-renders on phase change
// don't re-mount 80+ paths.
const RadialLineEl: React.FC<RadialLineElProps> = React.memo(
  ({ path, phase }) => {
    const opacity = radialLineOpacity(path.kind, path.baseOpacity, phase);
    return (
      <motion.path
        d={path.d}
        fill="none"
        stroke="url(#decide-radial-fade)"
        strokeWidth={1.05}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity }}
        exit={{ opacity: 0, transition: { duration: 0.35, ease: EASE_OUT } }}
        transition={{
          // Lines extend outward from the origin — each one paints over its
          // own duration with a small per-line random offset so the bundle
          // never reads as a synchronous sweep.
          pathLength: {
            duration: path.drawDuration,
            delay: path.drawDelay,
            ease: EASE_OUT,
          },
          opacity: {
            duration: 0.7,
            delay: path.drawDelay,
            ease: EASE_OUT,
          },
        }}
      />
    );
  }
);
RadialLineEl.displayName = "RadialLineEl";

// Accent overlay for decision lines — fades in/out per phase. Sits on top of
// the gradient base, so when fully opaque it visually replaces the base line
// (matching strokeWidth ≥ base width). No pathLength animation: the base
// line below is already handling the build-in.
const DecisionAccentLine: React.FC<RadialLineElProps> = React.memo(
  ({ path, phase }) => (
    <motion.path
      d={path.d}
      fill="none"
      stroke={ACCENT}
      strokeWidth={1.4}
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
      initial={{ opacity: 0 }}
      animate={{ opacity: phase === 3 ? 1 : 0 }}
      transition={{ duration: 0.9, ease: EASE_IN_OUT }}
    />
  )
);
DecisionAccentLine.displayName = "DecisionAccentLine";

const RadialBurstScene: React.FC<{ reducedMotion: boolean }> = ({
  reducedMotion,
}) => {
  // Phase 1 = BUILD (lines paint outward). Phase 2 = FLOW (particles travel
  // outward along every line). Phase 3 = DECIDE (4 lines pop in accent
  // orange with stronger pulses). After the first build we loop 2 ↔ 3 so
  // the network stays continuously alive instead of redrawing.
  const [phase, setPhase] = useState<RadialPhase>(reducedMotion ? 3 : 1);

  useEffect(() => {
    if (reducedMotion) {
      setPhase(3);
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let current: RadialPhase = 1;
    setPhase(1);

    const PHASE_DURATIONS: Record<RadialPhase, number> = {
      1: 2200,
      2: 4800,
      3: 3600,
    };

    const next = (p: RadialPhase): RadialPhase => {
      if (p === 1) return 2;
      if (p === 2) return 3;
      return 2;
    };

    const tick = () => {
      const dwell = PHASE_DURATIONS[current];
      timeoutId = setTimeout(() => {
        if (cancelled) return;
        current = next(current);
        setPhase(current);
        tick();
      }, dwell);
    };
    tick();

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [reducedMotion]);

  return (
    <motion.g
      variants={sceneVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {/* Defs: radial fade for stroke, soft core glow at origin. Both use
          userSpaceOnUse so all 80+ lines reference the same gradient and we
          get the "stronger at origin, lighter at the tips" falloff for free. */}
      <defs>
        <radialGradient
          id="decide-radial-fade"
          cx={RADIAL_ORIGIN_X}
          cy={RADIAL_ORIGIN_Y}
          r={250}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={LINE} stopOpacity="0.95" />
          <stop offset="55%" stopColor={LINE} stopOpacity="0.55" />
          <stop offset="100%" stopColor={LINE} stopOpacity="0.18" />
        </radialGradient>
        <radialGradient
          id="decide-core-glow"
          cx={RADIAL_ORIGIN_X}
          cy={RADIAL_ORIGIN_Y}
          r={44}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.34" />
          <stop offset="55%" stopColor={ACCENT} stopOpacity="0.07" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft glow disc at origin — adds depth without per-pixel blur. */}
      <motion.circle
        cx={RADIAL_ORIGIN_X}
        cy={RADIAL_ORIGIN_Y}
        r={44}
        fill="url(#decide-core-glow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 3 ? 1 : 0.65 }}
        transition={{ duration: 1.0, ease: EASE_IN_OUT }}
      />

      {/* Background lines first (drawn under) */}
      <g>
        {RADIAL_BACKGROUND_LINES.map((p) => (
          <RadialLineEl key={`r-bg-${p.index}`} path={p} phase={phase} />
        ))}
      </g>

      {/* Decision lines on top so the accent always reads cleanly */}
      <g>
        {RADIAL_DECISION_LINES.map((p) => (
          <RadialLineEl key={`r-dec-${p.index}`} path={p} phase={phase} />
        ))}
      </g>

      {/* Accent overlay for decision lines — opacity-only animation. */}
      <g>
        {RADIAL_DECISION_LINES.map((p) => (
          <DecisionAccentLine
            key={`r-dec-acc-${p.index}`}
            path={p}
            phase={phase}
          />
        ))}
      </g>

      {/* Origin core dot + slow pulsing halo. */}
      <motion.circle
        cx={RADIAL_ORIGIN_X}
        cy={RADIAL_ORIGIN_Y}
        r={3.4}
        fill={ACCENT}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT }}
      />
      {!reducedMotion && (
        <motion.circle
          cx={RADIAL_ORIGIN_X}
          cy={RADIAL_ORIGIN_Y}
          r={3.4}
          fill="none"
          stroke={ACCENT}
          strokeWidth={1}
          initial={{ opacity: 0 }}
          animate={{
            r: [3.4, 14, 3.4],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: EASE_OUT,
            delay: 0.4,
          }}
        />
      )}

      {/* Particles — only visible from phase 2 onward. SMIL animateMotion
          keeps each particle's per-frame work in the browser engine, so
          80+ comets cost effectively nothing in React land. */}
      {!reducedMotion && (
        <>
          {/* Background particle flow (always on after build, recedes during
              the decision phase so the orange accents read first). */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{
              opacity: phase === 1 ? 0 : phase === 3 ? 0.45 : 1,
            }}
            transition={{ duration: 1.0, ease: EASE_IN_OUT }}
          >
            {RADIAL_BACKGROUND_LINES.map((p) => (
              <FlowParticle
                key={`r-bg-p-${p.index}`}
                d={p.d}
                duration={p.particleDuration}
                delay={p.particleDelay}
                size={1.4}
                color={ACCENT}
                opacity={0.85}
                keySplines="0 0 0.25 1"
              />
            ))}
          </motion.g>

          {/* Neutral pulses on decision lines during flow (phase 2 only) —
              they hand off to the bright accent pulses in phase 3. */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 2 ? 1 : 0 }}
            transition={{ duration: 1.0, ease: EASE_IN_OUT }}
          >
            {RADIAL_DECISION_LINES.map((p) => (
              <FlowParticle
                key={`r-dec-np-${p.index}`}
                d={p.d}
                duration={p.particleDuration * 0.85}
                delay={p.particleDelay}
                size={1.7}
                color={ACCENT}
                opacity={0.95}
                keySplines="0 0 0.25 1"
              />
            ))}
          </motion.g>

          {/* Bright orange decision pulses (phase 3 only) — staggered so the
              4 conclusions arrive one after another, not as a single flash. */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 3 ? 1 : 0 }}
            transition={{ duration: 0.9, ease: EASE_IN_OUT }}
          >
            {RADIAL_DECISION_LINES.map((p, i) => (
              <FlowParticle
                key={`r-dec-ap-${p.index}`}
                d={p.d}
                duration={2.6}
                delay={i * 0.32}
                size={2.6}
                color={ACCENT}
                opacity={1}
                glow
                keySplines="0 0 0.25 1"
              />
            ))}
          </motion.g>
        </>
      )}
    </motion.g>
  );
};

// ---------- Public component ----------

type Props = {
  activeId: AboutAnimationActiveId;
  className?: string;
};

export const AboutAnimation: React.FC<Props> = ({
  activeId,
  className = "",
}) => {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="xMidYMid meet"
      className={`w-full h-full ${className}`}
      role="img"
      aria-label={`Animation illustrating the ${activeId} stage`}
    >
      <BaseNodes activeId={activeId} reducedMotion={reducedMotion} />
      <AnimatePresence mode="sync" initial>
        {activeId === "see" && (
          <SeeScene key="see" reducedMotion={reducedMotion} />
        )}
        {activeId === "execute" && (
          <DecideScene key="execute" reducedMotion={reducedMotion} />
        )}
        {activeId === "decide" && (
          <RadialBurstScene key="decide" reducedMotion={reducedMotion} />
        )}
      </AnimatePresence>
    </svg>
  );
};

export default AboutAnimation;
