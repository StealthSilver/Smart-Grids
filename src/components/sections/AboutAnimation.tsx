"use client";

import React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Stripe-inspired line + dot animation system for the About section.
 *
 * The same set of base nodes is used across all three scenes so transitions
 * feel like the network is reorganizing itself, not switching to a new image.
 */

export type AboutAnimationActiveId = "see" | "execute" | "decide";

const ACCENT = "#FF7F00";
const NEUTRAL_NODE = "#374151"; // gray-700
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

const seg = (a: NodeId, b: NodeId) =>
  `M${POS[a].x},${POS[a].y} L${POS[b].x},${POS[b].y}`;

const polyline = (ids: NodeId[]) =>
  ids
    .map((id, i) => `${i === 0 ? "M" : "L"}${POS[id].x},${POS[id].y}`)
    .join(" ");

// Easings reminiscent of Stripe's gentle, premium feel.
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

// ---------- Edge sets per scene ----------

const SEE_EDGES: [NodeId, NodeId][] = [
  ["tl", "tm"],
  ["tm", "tmr"],
  ["tmr", "tr"],
  ["bl", "bm"],
  ["bm", "bmr"],
  ["bmr", "br"],
  ["ml", "tl"],
  ["ml", "bl"],
  ["mr", "tr"],
  ["mr", "br"],
  ["tm", "c"],
  ["tmr", "c"],
  ["bm", "c"],
  ["bmr", "c"],
  ["ml", "c"],
  ["mr", "c"],
  ["tl", "bl"],
  ["tr", "br"],
];

const EXECUTE_EDGES: [NodeId, NodeId][] = [
  ["c", "tl"],
  ["c", "tm"],
  ["c", "tmr"],
  ["c", "tr"],
  ["c", "ml"],
  ["c", "mr"],
  ["c", "bl"],
  ["c", "bm"],
  ["c", "bmr"],
  ["c", "br"],
];

const DECIDE_ROUTES: { d: string; optimal?: boolean }[] = [
  { d: polyline(["ml", "tl", "tm", "c", "tmr", "tr", "mr"]) },
  { d: polyline(["ml", "bl", "bm", "c", "bmr", "br", "mr"]) },
  { d: polyline(["ml", "tl", "c", "bmr", "mr"]) },
  { d: polyline(["ml", "bl", "c", "tmr", "mr"]), optimal: true },
];

// ---------- Primitives ----------

type LineProps = {
  d: string;
  stroke?: string;
  opacity?: number;
  strokeWidth?: number;
  delay?: number;
  duration?: number;
};

const Line: React.FC<LineProps> = ({
  d,
  stroke = LINE,
  opacity = 0.45,
  strokeWidth = 1,
  delay = 0,
  duration = 0.85,
}) => (
  <motion.path
    d={d}
    fill="none"
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity }}
    exit={{ opacity: 0, transition: { duration: 0.3, ease: EASE_OUT } }}
    transition={{
      pathLength: { duration, delay, ease: EASE_OUT },
      opacity: { duration: duration * 0.65, delay, ease: EASE_OUT },
    }}
  />
);

type PulseProps = {
  path: string;
  duration?: number;
  delay?: number;
  color?: string;
  size?: number;
  glow?: boolean;
};

/**
 * A small "comet" that travels along an SVG path. Uses SMIL `<animateMotion>`
 * for native, render-cheap motion that doesn't trigger React work each frame.
 */
const PulseAlong: React.FC<PulseProps> = ({
  path,
  duration = 2.2,
  delay = 0,
  color = ACCENT,
  size = 2.6,
  glow = true,
}) => (
  <g>
    {glow && (
      <circle r={size * 2.6} fill={color} opacity={0}>
        <animate
          attributeName="opacity"
          values="0;0.18;0.18;0"
          keyTimes="0;0.15;0.85;1"
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
        />
        <animateMotion
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
          path={path}
        />
      </circle>
    )}
    <circle r={size} fill={color} opacity={0}>
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        keyTimes="0;0.12;0.88;1"
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
      <animateMotion
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
        path={path}
      />
    </circle>
  </g>
);

// ---------- Persistent base nodes ----------

const BaseNodes: React.FC<{
  activeId: AboutAnimationActiveId;
  reducedMotion: boolean;
}> = ({ activeId, reducedMotion }) => (
  <g>
    {NODE_IDS.map((id, i) => {
      const p = POS[id];
      const isCenter = id === "c";
      const accentCenter = activeId === "execute" && isCenter;
      const r = accentCenter ? 5 : 2.5;

      return (
        <g key={id}>
          <motion.circle
            cx={p.x}
            cy={p.y}
            r={r}
            fill={accentCenter ? ACCENT : NEUTRAL_NODE}
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
  </g>
);

// ---------- Scenes ----------

const sceneVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.45, ease: EASE_OUT } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: EASE_OUT } },
};

const ScanLine: React.FC = () => (
  <motion.g
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6, ease: EASE_OUT }}
  >
    <motion.line
      x1={0}
      x2={0}
      y1={20}
      y2={VB_H - 20}
      stroke={ACCENT}
      strokeWidth={1}
      strokeLinecap="round"
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: VB_W + 40, opacity: [0, 0.18, 0.18, 0] }}
      transition={{
        x: { duration: 7.5, repeat: Infinity, ease: EASE_IN_OUT },
        opacity: {
          duration: 7.5,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.12, 0.88, 1],
        },
      }}
    />
  </motion.g>
);

const SeeScene: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <motion.g
    variants={sceneVariants}
    initial="initial"
    animate="enter"
    exit="exit"
  >
    {SEE_EDGES.map(([a, b], i) => (
      <Line
        key={`see-${a}-${b}`}
        d={seg(a, b)}
        opacity={0.42}
        delay={0.035 * i}
        duration={0.85}
      />
    ))}

    {!reducedMotion && (
      <>
        <PulseAlong path={seg("ml", "c")} duration={2.8} delay={0.2} size={2.4} />
        <PulseAlong path={seg("c", "mr")} duration={2.8} delay={1.6} size={2.4} />
        <PulseAlong path={seg("tm", "c")} duration={3.2} delay={0.9} size={2.2} />
        <PulseAlong
          path={seg("c", "bmr")}
          duration={3.2}
          delay={2.1}
          size={2.2}
        />
        <ScanLine />
      </>
    )}
  </motion.g>
);

const ExecuteScene: React.FC<{ reducedMotion: boolean }> = ({
  reducedMotion,
}) => (
  <motion.g
    variants={sceneVariants}
    initial="initial"
    animate="enter"
    exit="exit"
  >
    {EXECUTE_EDGES.map(([a, b], i) => (
      <Line
        key={`exec-${a}-${b}`}
        d={seg(a, b)}
        opacity={0.5}
        delay={0.04 * i}
        duration={0.7}
      />
    ))}

    {!reducedMotion &&
      EXECUTE_EDGES.map(([a, b], i) => (
        <PulseAlong
          key={`exec-pulse-${a}-${b}`}
          path={seg(a, b)}
          duration={2.4}
          // Slight randomness via prime-ish offsets so it never feels robotic.
          delay={0.18 + (i * 0.21) % 1.6}
          size={2.6}
        />
      ))}
  </motion.g>
);

const DecideScene: React.FC<{ reducedMotion: boolean }> = ({
  reducedMotion,
}) => {
  const optimal = DECIDE_ROUTES.find((r) => r.optimal)!;

  return (
    <motion.g
      variants={sceneVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {DECIDE_ROUTES.map((route, i) => (
        <motion.path
          key={`dec-${i}`}
          d={route.d}
          fill="none"
          stroke={route.optimal ? ACCENT : LINE}
          strokeWidth={route.optimal ? 1.4 : 1}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: route.optimal ? 0.95 : 0.16,
          }}
          exit={{ opacity: 0, transition: { duration: 0.3, ease: EASE_OUT } }}
          transition={{
            pathLength: {
              duration: route.optimal ? 1.1 : 0.95,
              delay: 0.06 * i,
              ease: EASE_OUT,
            },
            opacity: {
              duration: 1.1,
              delay: 0.06 * i + (route.optimal ? 0.55 : 0),
              ease: EASE_OUT,
            },
          }}
        />
      ))}

      {!reducedMotion && (
        <PulseAlong path={optimal.d} duration={2.8} delay={0.5} size={3} />
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
          <ExecuteScene key="execute" reducedMotion={reducedMotion} />
        )}
        {activeId === "decide" && (
          <DecideScene key="decide" reducedMotion={reducedMotion} />
        )}
      </AnimatePresence>
    </svg>
  );
};

export default AboutAnimation;
