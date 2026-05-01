import React from "react";

type EdgeLinesProps = {
  className?: string;
  /** When false, omits the top and bottom hairlines (vertical rails unchanged). */
  horizontal?: boolean;
};

export function EdgeLines({
  className = "",
  horizontal = true,
}: EdgeLinesProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none px-4 sm:px-6 ${className}`}
    >
      <div className="max-w-7xl mx-auto h-full relative">
        {horizontal ? (
          <>
            <span className="absolute top-0 left-0 right-0 h-px bg-edge" />
            <span className="absolute bottom-0 left-0 right-0 h-px bg-edge" />
          </>
        ) : null}
        <span className="absolute top-0 bottom-0 left-0 w-px bg-edge" />
        <span className="absolute top-0 bottom-0 right-0 w-px bg-edge" />
      </div>
    </div>
  );
}
