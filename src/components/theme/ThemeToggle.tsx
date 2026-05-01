"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className={[
        "relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
        "border border-[#e5edf5] bg-white text-gray-800 shadow-sm",
        "transition-colors duration-300 ease-out",
        "hover:bg-[rgb(228,229,236)] hover:border-[rgb(228,229,236)]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7F00]",
        "dark:border-slate-600 dark:bg-slate-800/90 dark:text-slate-100",
        "dark:hover:bg-slate-700 dark:hover:border-slate-500",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Sun
        size={18}
        strokeWidth={2}
        aria-hidden
        className="transition-all duration-300 ease-out dark:-rotate-90 dark:scale-0 dark:opacity-0"
      />
      <Moon
        size={18}
        strokeWidth={2}
        aria-hidden
        className="absolute transition-all duration-300 ease-out rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
    </button>
  );
}
