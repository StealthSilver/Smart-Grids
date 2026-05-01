"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CtaHoverArrow } from "../ui/CtaHoverArrow";
import { ThemeToggle } from "../theme/ThemeToggle";
import { scrollToSectionAligned } from "@/lib/scroll";

type NavChild = { name: string; href: string };
type NavItem = {
  name: string;
  href: string;
  label: string;
  children: NavChild[];
};

type NavSectionItem = NavItem & { sectionId: string };

const navItems: NavSectionItem[] = [
  {
    name: "Solvyn",
    href: "/#solvyn",
    sectionId: "solvyn",
    label: "Under Solvyn",
    children: [
      { name: "Solvyn X", href: "/solvyn/solvyn-x" },
      { name: "SCADA", href: "/solvyn/scada" },
      { name: "Digital Twin", href: "/solvyn/digital-twin" },
      { name: "AURA", href: "/solvyn/aura" },
      { name: "EMS", href: "/solvyn/ems" },
      { name: "Cybersecure OT/IT", href: "/solvyn/cybersecure-ot-it" },
    ],
  },
  {
    name: "Applications",
    href: "/#services",
    sectionId: "services",
    label: "Under Applications",
    children: [
      {
        name: "Grid & Utility Operations",
        href: "/applications/grid-utility-operations",
      },
      {
        name: "Hybrid Energy Control",
        href: "/applications/hybrid-energy-control",
      },
      {
        name: "BTM / ATM Intelligence",
        href: "/applications/btm-atm-intelligence",
      },
      {
        name: "Market Optimization",
        href: "/applications/market-optimization",
      },
    ],
  },
  {
    name: "Proof",
    href: "/#cta",
    sectionId: "cta",
    label: "Under Proof",
    children: [
      { name: "Deployments", href: "/proof/deployments" },
      { name: "News", href: "/proof/news" },
    ],
  },
  {
    name: "Company",
    href: "/#about",
    sectionId: "about",
    label: "Under Company",
    children: [
      { name: "About SGA", href: "/company/about" },
      { name: "Leadership", href: "/company/leadership" },
      { name: "IP & Patents", href: "/company/ip-patents" },
      { name: "Partners", href: "/company/partners" },
      { name: "Careers", href: "/company/careers" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [dropdownX, setDropdownX] = useState(0);

  const navWrapperRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleMenu = () => setIsOpen((v) => !v);

  const updateDropdownPos = (name: string) => {
    const itemEl = itemRefs.current[name];
    const wrap = navWrapperRef.current;
    if (!itemEl || !wrap) return;
    const itemRect = itemEl.getBoundingClientRect();
    const wrapRect = wrap.getBoundingClientRect();
    setDropdownX(itemRect.left + itemRect.width / 2 - wrapRect.left);
  };

  useEffect(() => {
    if (!hovered) return;
    const handleResize = () => updateDropdownPos(hovered);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hovered]);

  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;

    const updateNavbarHeightVar = () => {
      const navHeight = navEl.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--navbar-height", `${navHeight}px`);
    };

    updateNavbarHeightVar();
    window.addEventListener("resize", updateNavbarHeightVar);

    const resizeObserver = new ResizeObserver(updateNavbarHeightVar);
    resizeObserver.observe(navEl);

    return () => {
      window.removeEventListener("resize", updateNavbarHeightVar);
      resizeObserver.disconnect();
    };
  }, []);

  const hoveredItem = navItems.find((i) => i.name === hovered) ?? null;

  return (
    <nav
      ref={navRef}
      className="
        relative w-full sticky top-0 z-50 px-6 sm:px-12 py-3
        border-b border-edge
        bg-white/95 backdrop-blur-sm
        dark:bg-slate-950/90 dark:border-slate-700/80
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
              className="w-24 h-auto sm:w-28 md:w-32 lg:w-36 dark:hidden"
            />
            <img
              src="/logo_dark.svg"
              alt=""
              aria-hidden
              className="hidden w-24 h-auto sm:w-28 md:w-32 lg:w-36 dark:block"
            />
          </Link>

          <div
            ref={navWrapperRef}
            className="hidden lg:flex items-center px-4 xl:px-8 font-mono relative gap-2 xl:gap-4"
            onMouseLeave={() => setHovered(null)}
          >
            {navItems.map((item) => {
              const isActive = hovered === item.name;
              return (
                <div
                  key={item.name}
                  ref={(el) => {
                    itemRefs.current[item.name] = el;
                  }}
                  className="relative px-3 py-1 select-none font-sans font-semibold"
                  onMouseEnter={() => {
                    setHovered(item.name);
                    requestAnimationFrame(() => updateDropdownPos(item.name));
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="hoverBg"
                      className="
                        absolute inset-0 rounded-[6px] backdrop-blur-sm
                        bg-[rgb(228,229,236)] border border-[rgb(228,229,236)]
                        dark:bg-slate-800/90 dark:border-slate-600
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
                    onClick={(e) => {
                      if (
                        typeof window !== "undefined" &&
                        window.location.pathname === "/"
                      ) {
                        e.preventDefault();
                        scrollToSectionAligned(item.sectionId);
                      }
                    }}
                    onFocus={() => {
                      setHovered(item.name);
                      requestAnimationFrame(() => updateDropdownPos(item.name));
                    }}
                    className="
                      relative z-10 inline-flex items-center gap-1
                      transition-colors text-sm
                      text-gray-700 hover:text-black
                      dark:text-slate-300 dark:hover:text-white
                    "
                  >
                    <span>{item.name}</span>
                    <motion.span
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{
                        duration: 0.22,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="inline-flex"
                      aria-hidden
                    >
                      <ChevronDown size={14} strokeWidth={2.25} />
                    </motion.span>
                  </Link>
                </div>
              );
            })}

            {/* Shared dropdown panel anchored to hovered item */}
            <motion.div
              aria-hidden={!hovered}
              className="absolute top-full pt-3 left-0"
              initial={false}
              animate={{
                x: dropdownX,
                y: hovered ? 0 : -6,
                opacity: hovered ? 1 : 0,
              }}
              transition={{
                x: { type: "spring", stiffness: 380, damping: 34 },
                y: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
              }}
              style={{ pointerEvents: hovered ? "auto" : "none" }}
            >
              <div
                className="
                  -translate-x-1/2
                  bg-white border border-edge
                  rounded-xl shadow-[0_12px_32px_-12px_rgba(0,0,0,0.18)]
                  dark:bg-slate-900 dark:border-slate-600
                  dark:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.55)]
                  p-2 min-w-[240px]
                  overflow-hidden
                "
              >
                <AnimatePresence mode="wait" initial={false}>
                  {hoveredItem && (
                    <motion.div
                      key={hoveredItem.name}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{
                        duration: 0.16,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <div className="px-3 pt-1.5 pb-1.5 text-[10px] uppercase tracking-[0.14em] font-mono text-gray-500 dark:text-slate-400">
                        {hoveredItem.label}
                      </div>
                      <div className="flex flex-col">
                        {hoveredItem.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="
                              block px-3 py-2 rounded-md
                              text-sm font-sans font-medium
                              text-gray-700 hover:text-black
                              hover:bg-gray-100
                              dark:text-slate-300 dark:hover:text-white
                              dark:hover:bg-slate-800
                              transition-colors
                              whitespace-nowrap
                            "
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 font-mono">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => scrollToSectionAligned("services")}
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
            onClick={() => scrollToSectionAligned("contact", { updateHash: false })}
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
        <div className="lg:hidden flex items-center justify-end gap-2">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="p-1.5 rounded-md relative h-9 w-9 flex items-center justify-center text-gray-900 dark:text-slate-100"
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
            <div className="bg-white/98 backdrop-blur-md shadow-lg border-t border-edge dark:bg-slate-950/98 dark:border-slate-700/80 transition-colors duration-300">
              <motion.div
                className="flex flex-col items-stretch py-4 sm:py-6 px-5 sm:px-6"
                initial={{ y: -8 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              >
                {navItems.map((item, index) => {
                  const expanded = mobileExpanded === item.name;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.04 + index * 0.035,
                        duration: 0.25,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="border-b border-edge last:border-b-0 dark:border-slate-700/80"
                    >
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={(e) => {
                            if (
                              typeof window !== "undefined" &&
                              window.location.pathname === "/"
                            ) {
                              e.preventDefault();
                              setIsOpen(false);
                              setMobileExpanded(null);
                              scrollToSectionAligned(item.sectionId);
                            } else {
                              setIsOpen(false);
                              setMobileExpanded(null);
                            }
                          }}
                          className="
                            flex-1 py-3 sm:py-3.5
                            font-sans font-semibold text-sm
                            text-gray-800 dark:text-slate-100
                            transition-colors
                          "
                        >
                          {item.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileExpanded(expanded ? null : item.name)
                          }
                          aria-expanded={expanded}
                          aria-label={`Toggle ${item.name} submenu`}
                          className="
                            p-3 -mr-2
                            text-gray-500 hover:text-gray-800
                            dark:text-slate-400 dark:hover:text-slate-100
                            transition-colors
                          "
                        >
                          <motion.span
                            animate={{ rotate: expanded ? 180 : 0 }}
                            transition={{
                              duration: 0.22,
                              ease: [0.4, 0, 0.2, 1],
                            }}
                            className="inline-flex"
                            aria-hidden
                          >
                            <ChevronDown size={16} strokeWidth={2.25} />
                          </motion.span>
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            key="panel"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.28,
                              ease: [0.4, 0, 0.2, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 pl-1 flex flex-col">
                              <div className="px-2 pb-1.5 text-[10px] uppercase tracking-[0.14em] font-mono text-gray-500 dark:text-slate-400">
                                {item.label}
                              </div>
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={() => setIsOpen(false)}
                                  className="
                                    block py-2 px-2 rounded-md
                                    text-sm font-sans font-medium
                                    text-gray-700 hover:text-black
                                    hover:bg-gray-100 transition-colors
                                    dark:text-slate-300 dark:hover:text-white
                                    dark:hover:bg-slate-800
                                  "
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}

                <motion.div
                  className="mt-5 flex flex-row flex-wrap items-center justify-center gap-3"
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
                      setMobileExpanded(null);
                      scrollToSectionAligned("services");
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
                      setMobileExpanded(null);
                      scrollToSectionAligned("contact", { updateHash: false });
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
