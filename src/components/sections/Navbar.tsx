"use client";

import { useState } from "react";
import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

/** Chevron (>) → arrow (->) on parent `group` hover */
function CtaHoverArrow() {
  const icon =
    "absolute size-4 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]";
  return (
    <span
      className="relative ml-0 inline-flex h-4 w-4 shrink-0 items-center justify-center overflow-visible"
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen((v) => !v);

  const navItems = [
    { name: "Solvyn", href: "/#solvyn" },
    { name: "Applications", href: "/#services" },
    { name: "Proof", href: "/case-studies" },
    { name: "Company", href: "/#about" },
  ];

  return (
    <nav
      className="
        relative w-full sticky top-0 z-50 px-4 sm:px-6 py-3
        border-b border-[#e5edf5]
        bg-white backdrop-blur-sm
        transition-colors duration-300
      "
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Left: logo + nav items grouped */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          <Link href="/" className="flex items-center cursor-pointer shrink-0">
            <img
              src="/logo_light.svg"
              alt="Smart Grid Analytics"
              className="w-24 h-auto sm:w-28 md:w-32 lg:w-36"
            />
          </Link>

          <div
            className="hidden lg:flex items-center px-4 xl:px-8 font-mono relative gap-2 xl:gap-4"
            onMouseLeave={() => setHovered(null)}
          >
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative px-3 py-1 select-none font-sans font-semibold"
              >
                {hovered === item.name && (
                  <motion.span
                    layoutId="hoverBg"
                    className="
                      absolute inset-0 rounded-full backdrop-blur-sm
                      bg-gray-200/70 border border-gray-300
                    "
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 40,
                      mass: 0.6,
                    }}
                    initial={false}
                  />
                )}

                <Link
                  href={item.href}
                  onMouseEnter={() => setHovered(item.name)}
                  onFocus={() => setHovered(item.name)}
                  className="
                    relative z-10 transition-colors text-sm
                    text-gray-700 hover:text-black
                  "
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 font-mono">
          <button
            type="button"
            onClick={() => {
              const about = document.getElementById("about");
              if (about) {
                about.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/#about";
              }
            }}
            className="
              font-sans font-bold text-xs xl:text-sm px-2.5 xl:px-4 py-1.5 sm:py-2
              whitespace-nowrap rounded-[8px] bg-transparent
              border border-[#FF7F00] text-[#FF7F00]
              cursor-pointer transition-all duration-300 ease-in-out
              hover:bg-[#FF7F00]/10 hover:shadow-sm active:translate-y-px
            "
          >
            Learn More
          </button>
          <button
            type="button"
            onClick={() => {
              const footer = document.getElementById("footer");
              footer?.scrollIntoView({ behavior: "smooth" });
            }}
            className="
              group inline-flex items-center justify-center gap-0.5
              font-sans font-bold text-white text-xs xl:text-sm
              pl-3.5 xl:pl-5 pr-1.5 xl:pr-2 py-1.5 sm:py-2
              whitespace-nowrap rounded-[8px] bg-[#FF7F00]
              cursor-pointer border border-transparent
              transition-all duration-300 ease-in-out
              hover:brightness-95 hover:shadow-sm active:translate-y-px
            "
          >
            Book Demo
            <CtaHoverArrow />
          </button>
        </div>

        {/* Tablet/Mobile Menu Button */}
        <div className="lg:hidden flex items-center justify-end">
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="p-1.5 rounded-md relative h-9 w-9 flex items-center justify-center text-gray-900"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, scale: 0.85, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.85, rotate: 90 }}
                  transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <X size={24} strokeWidth={2} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ opacity: 0, scale: 0.85, rotate: 90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.85, rotate: -90 }}
                  transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Menu size={24} strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Nav — height + opacity for smooth open/close */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 z-50 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="bg-white backdrop-blur-md shadow-lg border-t border-[#e5edf5] transition-colors duration-300">
              <motion.div
                className="flex flex-col items-center space-y-3 sm:space-y-4 py-6 sm:py-8"
                initial={{ y: -8 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.04 + index * 0.035,
                      duration: 0.25,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      className="transition-colors text-sm font-sans font-semibold text-gray-700 hover:text-black"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="mt-2 flex flex-row flex-wrap items-center justify-center gap-3"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.04 + navItems.length * 0.035,
                    duration: 0.25,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      const about = document.getElementById("about");
                      if (about) {
                        about.scrollIntoView({ behavior: "smooth" });
                      } else {
                        window.location.href = "/#about";
                      }
                    }}
                    className="
                      font-sans font-bold text-sm px-4 py-2.5
                      whitespace-nowrap rounded-[8px] bg-transparent
                      border border-[#FF7F00] text-[#FF7F00]
                      cursor-pointer transition-all duration-300 ease-in-out
                      hover:bg-[#FF7F00]/10 hover:shadow-sm active:translate-y-px
                    "
                  >
                    Learn More
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      const footer = document.getElementById("footer");
                      footer?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="
                      group inline-flex items-center justify-center gap-0.5
                      font-sans font-bold text-white text-sm pl-4 pr-2 py-2.5
                      whitespace-nowrap rounded-[8px] bg-[#FF7F00]
                      cursor-pointer border border-transparent
                      transition-all duration-300 ease-in-out
                      hover:brightness-95 hover:shadow-sm active:translate-y-px
                    "
                  >
                    Book Demo
                    <CtaHoverArrow />
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
