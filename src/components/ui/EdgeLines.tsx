import React from "react";

type EdgeLinesProps = {
  className?: string;
};

export function EdgeLines({ className = "" }: EdgeLinesProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none px-4 sm:px-6 ${className}`}
    >
      <div className="max-w-7xl mx-auto h-full relative">
        <span className="absolute top-0 bottom-0 left-0 w-px bg-[#e5edf5]" />
        <span className="absolute top-0 bottom-0 right-0 w-px bg-[#e5edf5]" />
      </div>
    </div>
  );
}
