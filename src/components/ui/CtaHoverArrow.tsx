import { ArrowRight, ChevronRight } from "lucide-react";

/** Chevron (>) → arrow (->) on parent `group` hover */
export function CtaHoverArrow({ large }: { large?: boolean }) {
  const icon = large
    ? "absolute size-5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
    : "absolute size-4 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]";
  const box = large ? "h-5 w-5" : "h-4 w-4";
  return (
    <span
      className={`relative ml-0 inline-flex ${box} shrink-0 items-center justify-center overflow-visible`}
      aria-hidden
    >
      <ChevronRight
        className={`${icon} group-hover:pointer-events-none group-hover:opacity-0 group-hover:scale-75`}
        strokeWidth={2.5}
      />
      <ArrowRight
        className={`${icon} opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100`}
        strokeWidth={2.5}
      />
    </span>
  );
}
