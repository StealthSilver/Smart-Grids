"use client";

import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

export interface MediaSlideData {
  /** Image alt / screen reader name */
  title: string;
  /** Short line under the image (matches section eyebrow style on the site) */
  headline: string;
  src: string;
}

/** Snappy ease-out for width; image motion uses the same for cohesion */
const layoutEase = [0.25, 0.1, 0.25, 1] as const;
const imageEase = [0.22, 1, 0.36, 1] as const;

interface SlideProps {
  slide: MediaSlideData;
  index: number;
  current: number;
  isActive: boolean;
  isNextPreview: boolean;
  widthPct: number;
  handleSlideClick: (index: number) => void;
  prefersReducedMotion: boolean | null;
}

const Slide = ({
  slide,
  index,
  current,
  isActive,
  isNextPreview,
  widthPct,
  handleSlideClick,
  prefersReducedMotion,
}: SlideProps) => {
  const { src, title } = slide;
  const reduce = Boolean(prefersReducedMotion);
  const layoutDuration = reduce ? 0 : 0.62;
  const imageDuration = reduce ? 0 : 0.58;

  /** Slides already visited stay on the left and read as “squished” that way */
  const isHistory = index < current;
  const isFuture = index > current;

  const imageOrigin = isActive
    ? ("50% 50%" as const)
    : isHistory
      ? ("0% 50%" as const)
      : ("100% 50%" as const);

  return (
    <motion.li
      layout
      transition={{
        layout: {
          duration: layoutDuration,
          ease: layoutEase,
        },
      }}
      className="relative h-[360px] min-w-0 shrink-0 cursor-pointer overflow-hidden rounded-[6px] shadow-sm motion-reduce:transition-none sm:h-[400px] md:h-[440px]"
      style={{
        width: `${widthPct}%`,
        zIndex: isActive ? 2 : isNextPreview ? 1 : 0,
      }}
      onClick={() => handleSlideClick(index)}
      role="group"
      aria-roledescription="slide"
      aria-current={isActive ? "true" : undefined}
      aria-label={`${index + 1}: ${title}${isActive ? " (active)" : ""}`}
    >
      <motion.img
        layout={false}
        className="pointer-events-none absolute inset-0 h-full w-full rounded-[6px] object-cover"
        style={{ transformOrigin: imageOrigin }}
        alt={title}
        src={src}
        loading={isActive ? "eager" : "lazy"}
        decoding="async"
        animate={{
          opacity: isActive ? 1 : isNextPreview ? 0.78 : isHistory ? 0.52 : 0.42,
          scaleX: isActive ? 1 : isHistory ? 0.76 : isFuture ? 0.92 : 1,
          scaleY: isActive ? 1.06 : 0.94,
        }}
        transition={{
          duration: imageDuration,
          ease: imageEase,
          opacity: { duration: imageDuration * 0.85, ease: imageEase },
        }}
      />
    </motion.li>
  );
};

export interface MediaCarouselProps {
  slides: MediaSlideData[];
  currentIndex: number;
  onCurrentIndexChange: (index: number) => void;
}

const ACTIVE_PCT = 75;
const INACTIVE_TOTAL_PCT = 100 - ACTIVE_PCT;

export function MediaCarousel({
  slides,
  currentIndex: current,
  onCurrentIndexChange: setCurrent,
}: MediaCarouselProps) {
  const id = useId();
  const prefersReducedMotion = useReducedMotion();
  const n = slides.length;

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const inactiveCount = n > 1 ? n - 1 : 0;
  const squishedEachPct =
    inactiveCount > 0 ? INACTIVE_TOTAL_PCT / inactiveCount : 0;

  const reduce = Boolean(prefersReducedMotion);
  const activeHeadline = slides[current]?.headline ?? "";

  return (
    <div
      className="flex w-full flex-col"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <h3 id={`carousel-heading-${id}`} className="sr-only">
        Media image gallery
      </h3>

      <div className="w-full overflow-hidden">
        <LayoutGroup id={`media-carousel-${id}`}>
          <ul className="flex w-full max-w-full flex-row">
            {slides.map((slide, index) => {
              const isActive = index === current;
              const widthPct =
                n <= 1 ? 100 : isActive ? ACTIVE_PCT : squishedEachPct;
              const isNextPreview =
                n > 1 && !isActive && index === (current + 1) % n;

              return (
                <Slide
                  key={slide.src}
                  slide={slide}
                  index={index}
                  current={current}
                  isActive={isActive}
                  isNextPreview={isNextPreview}
                  widthPct={widthPct}
                  handleSlideClick={handleSlideClick}
                  prefersReducedMotion={prefersReducedMotion}
                />
              );
            })}
          </ul>
        </LayoutGroup>
      </div>

      <motion.p
        key={current}
        id={`media-carousel-headline-${id}`}
        aria-live="polite"
        className="mt-6 w-full max-w-[min(100%,55vw)] text-left font-mono text-sm font-medium uppercase leading-snug tracking-[0.14em] text-gray-600 sm:mt-8 sm:text-base sm:leading-normal md:mt-10 md:text-lg"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduce ? 0 : 0.28, ease: imageEase }}
      >
        {activeHeadline}
      </motion.p>
    </div>
  );
}
