(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/CtaHoverArrow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CtaHoverArrow",
    ()=>CtaHoverArrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
;
function CtaHoverArrow({ large }) {
    const icon = large ? "absolute size-5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]" : "absolute size-4 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]";
    const box = large ? "h-5 w-5" : "h-4 w-4";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `relative ml-0 inline-flex ${box} shrink-0 items-center justify-center overflow-visible`,
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: `${icon} group-hover:pointer-events-none group-hover:opacity-0 group-hover:scale-75`,
                strokeWidth: 2.5
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CtaHoverArrow.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                className: `${icon} opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100`,
                strokeWidth: 2.5
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CtaHoverArrow.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/CtaHoverArrow.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = CtaHoverArrow;
var _c;
__turbopack_context__.k.register(_c, "CtaHoverArrow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/scroll.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrollToSectionAligned",
    ()=>scrollToSectionAligned
]);
const NAVBAR_HEIGHT_CSS_VAR = "--navbar-height";
function getNavbarHeight() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const computed = getComputedStyle(document.documentElement).getPropertyValue(NAVBAR_HEIGHT_CSS_VAR).trim();
    const parsed = Number.parseFloat(computed);
    return Number.isFinite(parsed) ? parsed : 0;
}
function scrollToSectionAligned(sectionId, options = {}) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const target = document.getElementById(sectionId);
    if (!target) {
        window.location.href = `/#${sectionId}`;
        return;
    }
    const navbarHeight = getNavbarHeight();
    const absoluteTop = window.scrollY + target.getBoundingClientRect().top;
    const top = Math.max(0, absoluteTop - navbarHeight);
    window.scrollTo({
        top,
        behavior: "smooth"
    });
    if (options.updateHash !== false && window.history.replaceState) {
        window.history.replaceState(null, "", `/#${sectionId}`);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CtaHoverArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CtaHoverArrow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scroll.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const navItems = [
    {
        name: "Solvyn",
        href: "/#solvyn",
        sectionId: "solvyn",
        label: "Under Solvyn",
        children: [
            {
                name: "Solvyn X",
                href: "/solvyn/solvyn-x"
            },
            {
                name: "SCADA",
                href: "/solvyn/scada"
            },
            {
                name: "Digital Twin",
                href: "/solvyn/digital-twin"
            },
            {
                name: "AURA",
                href: "/solvyn/aura"
            },
            {
                name: "EMS",
                href: "/solvyn/ems"
            },
            {
                name: "Cybersecure OT/IT",
                href: "/solvyn/cybersecure-ot-it"
            }
        ]
    },
    {
        name: "Applications",
        href: "/#services",
        sectionId: "services",
        label: "Under Applications",
        children: [
            {
                name: "Grid & Utility Operations",
                href: "/applications/grid-utility-operations"
            },
            {
                name: "Hybrid Energy Control",
                href: "/applications/hybrid-energy-control"
            },
            {
                name: "BTM / ATM Intelligence",
                href: "/applications/btm-atm-intelligence"
            },
            {
                name: "Market Optimization",
                href: "/applications/market-optimization"
            }
        ]
    },
    {
        name: "Proof",
        href: "/#cta",
        sectionId: "cta",
        label: "Under Proof",
        children: [
            {
                name: "Case Studies",
                href: "/case-studies"
            },
            {
                name: "Deployments",
                href: "/proof/deployments"
            },
            {
                name: "White Papers",
                href: "/white-papers"
            },
            {
                name: "News",
                href: "/proof/news"
            }
        ]
    },
    {
        name: "Company",
        href: "/#about",
        sectionId: "about",
        label: "Under Company",
        children: [
            {
                name: "About SGA",
                href: "/company/about"
            },
            {
                name: "Leadership",
                href: "/company/leadership"
            },
            {
                name: "IP & Patents",
                href: "/company/ip-patents"
            },
            {
                name: "Partners",
                href: "/company/partners"
            },
            {
                name: "Careers",
                href: "/company/careers"
            }
        ]
    }
];
function Navbar() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mobileExpanded, setMobileExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dropdownX, setDropdownX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const navWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const itemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const toggleMenu = ()=>setIsOpen((v)=>!v);
    const updateDropdownPos = (name)=>{
        const itemEl = itemRefs.current[name];
        const wrap = navWrapperRef.current;
        if (!itemEl || !wrap) return;
        const itemRect = itemEl.getBoundingClientRect();
        const wrapRect = wrap.getBoundingClientRect();
        setDropdownX(itemRect.left + itemRect.width / 2 - wrapRect.left);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (!hovered) return;
            const handleResize = {
                "Navbar.useEffect.handleResize": ()=>updateDropdownPos(hovered)
            }["Navbar.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        hovered
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const navEl = navRef.current;
            if (!navEl) return;
            const updateNavbarHeightVar = {
                "Navbar.useEffect.updateNavbarHeightVar": ()=>{
                    const navHeight = navEl.getBoundingClientRect().height;
                    document.documentElement.style.setProperty("--navbar-height", `${navHeight}px`);
                }
            }["Navbar.useEffect.updateNavbarHeightVar"];
            updateNavbarHeightVar();
            window.addEventListener("resize", updateNavbarHeightVar);
            const resizeObserver = new ResizeObserver(updateNavbarHeightVar);
            resizeObserver.observe(navEl);
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener("resize", updateNavbarHeightVar);
                    resizeObserver.disconnect();
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const hoveredItem = navItems.find((i)=>i.name === hovered) ?? null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        ref: navRef,
        className: " relative w-full sticky top-0 z-50 px-6 sm:px-12 py-3 border-b border-[#e5edf5] bg-white backdrop-blur-sm transition-colors duration-300 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between max-w-7xl mx-auto w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 sm:gap-4 md:gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center cursor-pointer shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/logo_light.svg",
                                    alt: "Smart Grid Analytics",
                                    className: "w-24 h-auto sm:w-28 md:w-32 lg:w-36"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: navWrapperRef,
                                className: "hidden lg:flex items-center px-4 xl:px-8 font-mono relative gap-2 xl:gap-4",
                                onMouseLeave: ()=>setHovered(null),
                                children: [
                                    navItems.map((item)=>{
                                        const isActive = hovered === item.name;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: (el)=>{
                                                itemRefs.current[item.name] = el;
                                            },
                                            className: "relative px-3 py-1 select-none font-sans font-semibold",
                                            onMouseEnter: ()=>{
                                                setHovered(item.name);
                                                requestAnimationFrame(()=>updateDropdownPos(item.name));
                                            },
                                            children: [
                                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    layoutId: "hoverBg",
                                                    className: " absolute inset-0 rounded-[6px] backdrop-blur-sm bg-[rgb(228,229,236)] border border-[rgb(228,229,236)] ",
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 500,
                                                        damping: 40,
                                                        mass: 0.6
                                                    },
                                                    initial: false
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    onClick: (e)=>{
                                                        if (("TURBOPACK compile-time value", "object") !== "undefined" && window.location.pathname === "/") {
                                                            e.preventDefault();
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToSectionAligned"])(item.sectionId);
                                                        }
                                                    },
                                                    onFocus: ()=>{
                                                        setHovered(item.name);
                                                        requestAnimationFrame(()=>updateDropdownPos(item.name));
                                                    },
                                                    className: " relative z-10 inline-flex items-center gap-1 transition-colors text-sm text-gray-700 hover:text-black ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                            animate: {
                                                                rotate: isActive ? 180 : 0
                                                            },
                                                            transition: {
                                                                duration: 0.22,
                                                                ease: [
                                                                    0.4,
                                                                    0,
                                                                    0.2,
                                                                    1
                                                                ]
                                                            },
                                                            className: "inline-flex",
                                                            "aria-hidden": true,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                size: 14,
                                                                strokeWidth: 2.25
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item.name, true, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        "aria-hidden": !hovered,
                                        className: "absolute top-full pt-3 left-0",
                                        initial: false,
                                        animate: {
                                            x: dropdownX,
                                            y: hovered ? 0 : -6,
                                            opacity: hovered ? 1 : 0
                                        },
                                        transition: {
                                            x: {
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 34
                                            },
                                            y: {
                                                duration: 0.2,
                                                ease: [
                                                    0.4,
                                                    0,
                                                    0.2,
                                                    1
                                                ]
                                            },
                                            opacity: {
                                                duration: 0.2,
                                                ease: [
                                                    0.4,
                                                    0,
                                                    0.2,
                                                    1
                                                ]
                                            }
                                        },
                                        style: {
                                            pointerEvents: hovered ? "auto" : "none"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: " -translate-x-1/2 bg-white border border-[#e5edf5] rounded-xl shadow-[0_12px_32px_-12px_rgba(0,0,0,0.18)] p-2 min-w-[240px] overflow-hidden ",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                mode: "wait",
                                                initial: false,
                                                children: hoveredItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 4
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        y: -4
                                                    },
                                                    transition: {
                                                        duration: 0.16,
                                                        ease: [
                                                            0.4,
                                                            0,
                                                            0.2,
                                                            1
                                                        ]
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-3 pt-1.5 pb-1.5 text-[10px] uppercase tracking-[0.14em] font-mono text-gray-500",
                                                            children: hoveredItem.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col",
                                                            children: hoveredItem.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: child.href,
                                                                    className: " block px-3 py-2 rounded-md text-sm font-sans font-medium text-gray-700 hover:text-black hover:bg-gray-100 transition-colors whitespace-nowrap ",
                                                                    children: child.name
                                                                }, child.name, false, {
                                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, hoveredItem.name, true, {
                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Navbar.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center gap-3 xl:gap-4 font-mono",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToSectionAligned"])("services"),
                                className: " font-sans font-bold text-xs xl:text-sm px-2.5 xl:px-4 py-1.5 sm:py-2 whitespace-nowrap rounded-[8px] bg-transparent border border-[#FF7F00] text-[#FF7F00] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#FF7F00]/10 hover:shadow-sm active:translate-y-px ",
                                children: "Learn More"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToSectionAligned"])("contact", {
                                        updateHash: false
                                    }),
                                className: " group inline-flex items-center justify-center gap-0.5 font-sans font-bold text-white text-xs xl:text-sm pl-3.5 xl:pl-5 pr-1.5 xl:pr-2 py-1.5 sm:py-2 whitespace-nowrap rounded-[8px] bg-[#FF7F00] cursor-pointer border border-transparent transition-all duration-300 ease-in-out hover:brightness-95 hover:shadow-sm active:translate-y-px ",
                                children: [
                                    "Book Demo",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CtaHoverArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaHoverArrow"], {}, void 0, false, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Navbar.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:hidden flex items-center justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleMenu,
                            "aria-label": isOpen ? "Close menu" : "Open menu",
                            className: "p-1.5 rounded-md relative h-9 w-9 flex items-center justify-center text-gray-900",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                initial: false,
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.85,
                                        rotate: -90
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        scale: 0.85,
                                        rotate: 90
                                    },
                                    transition: {
                                        duration: 0.22,
                                        ease: [
                                            0.4,
                                            0,
                                            0.2,
                                            1
                                        ]
                                    },
                                    className: "absolute inset-0 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 24,
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 349,
                                        columnNumber: 19
                                    }, this)
                                }, "close", false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 341,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.85,
                                        rotate: 90
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        scale: 0.85,
                                        rotate: -90
                                    },
                                    transition: {
                                        duration: 0.22,
                                        ease: [
                                            0.4,
                                            0,
                                            0.2,
                                            1
                                        ]
                                    },
                                    className: "absolute inset-0 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        size: 24,
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 360,
                                        columnNumber: 19
                                    }, this)
                                }, "open", false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 352,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Navbar.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Navbar.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "lg:hidden absolute top-full left-0 right-0 z-50 overflow-hidden",
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.32,
                        ease: [
                            0.4,
                            0,
                            0.2,
                            1
                        ]
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white backdrop-blur-md shadow-lg border-t border-[#e5edf5] transition-colors duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex flex-col items-stretch py-4 sm:py-6 px-5 sm:px-6",
                            initial: {
                                y: -8
                            },
                            animate: {
                                y: 0
                            },
                            transition: {
                                duration: 0.28,
                                ease: [
                                    0.4,
                                    0,
                                    0.2,
                                    1
                                ]
                            },
                            children: [
                                navItems.map((item, index)=>{
                                    const expanded = mobileExpanded === item.name;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 6
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.04 + index * 0.035,
                                            duration: 0.25,
                                            ease: [
                                                0.4,
                                                0,
                                                0.2,
                                                1
                                            ]
                                        },
                                        className: "border-b border-[#e5edf5] last:border-b-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        onClick: (e)=>{
                                                            if (("TURBOPACK compile-time value", "object") !== "undefined" && window.location.pathname === "/") {
                                                                e.preventDefault();
                                                                setIsOpen(false);
                                                                setMobileExpanded(null);
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToSectionAligned"])(item.sectionId);
                                                            } else {
                                                                setIsOpen(false);
                                                                setMobileExpanded(null);
                                                            }
                                                        },
                                                        className: " flex-1 py-3 sm:py-3.5 font-sans font-semibold text-sm text-gray-800 transition-colors ",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setMobileExpanded(expanded ? null : item.name),
                                                        "aria-expanded": expanded,
                                                        "aria-label": `Toggle ${item.name} submenu`,
                                                        className: " p-3 -mr-2 text-gray-500 hover:text-gray-800 transition-colors ",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                            animate: {
                                                                rotate: expanded ? 180 : 0
                                                            },
                                                            transition: {
                                                                duration: 0.22,
                                                                ease: [
                                                                    0.4,
                                                                    0,
                                                                    0.2,
                                                                    1
                                                                ]
                                                            },
                                                            className: "inline-flex",
                                                            "aria-hidden": true,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                size: 16,
                                                                strokeWidth: 2.25
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                lineNumber: 447,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                lineNumber: 399,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                initial: false,
                                                children: expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        height: 0,
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        height: "auto",
                                                        opacity: 1
                                                    },
                                                    exit: {
                                                        height: 0,
                                                        opacity: 0
                                                    },
                                                    transition: {
                                                        duration: 0.28,
                                                        ease: [
                                                            0.4,
                                                            0,
                                                            0.2,
                                                            1
                                                        ]
                                                    },
                                                    className: "overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pb-3 pl-1 flex flex-col",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "px-2 pb-1.5 text-[10px] uppercase tracking-[0.14em] font-mono text-gray-500",
                                                                children: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                lineNumber: 465,
                                                                columnNumber: 31
                                                            }, this),
                                                            item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: child.href,
                                                                    onClick: ()=>setIsOpen(false),
                                                                    className: " block py-2 px-2 rounded-md text-sm font-sans font-medium text-gray-700 hover:text-black hover:bg-gray-100 transition-colors ",
                                                                    children: child.name
                                                                }, child.name, false, {
                                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                    lineNumber: 469,
                                                                    columnNumber: 33
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 29
                                                    }, this)
                                                }, "panel", false, {
                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                lineNumber: 451,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, item.name, true, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 388,
                                        columnNumber: 21
                                    }, this);
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "mt-5 flex flex-row flex-wrap items-center justify-center gap-3",
                                    initial: {
                                        opacity: 0,
                                        y: 6
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.04 + navItems.length * 0.035,
                                        duration: 0.25,
                                        ease: [
                                            0.4,
                                            0,
                                            0.2,
                                            1
                                        ]
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setIsOpen(false);
                                                setMobileExpanded(null);
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToSectionAligned"])("services");
                                            },
                                            className: " font-sans font-bold text-sm px-4 py-2.5 whitespace-nowrap rounded-[8px] bg-transparent border border-[#FF7F00] text-[#FF7F00] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#FF7F00]/10 hover:shadow-sm active:translate-y-px ",
                                            children: "Learn More"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 501,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setIsOpen(false);
                                                setMobileExpanded(null);
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToSectionAligned"])("contact", {
                                                    updateHash: false
                                                });
                                            },
                                            className: " group inline-flex items-center justify-center gap-0.5 font-sans font-bold text-white text-sm pl-4 pr-2 py-2.5 whitespace-nowrap rounded-[8px] bg-[#FF7F00] cursor-pointer border border-transparent transition-all duration-300 ease-in-out hover:brightness-95 hover:shadow-sm active:translate-y-px ",
                                            children: [
                                                "Book Demo",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CtaHoverArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaHoverArrow"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                    lineNumber: 535,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 518,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 491,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Navbar.tsx",
                            lineNumber: 379,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Navbar.tsx",
                        lineNumber: 378,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Navbar.tsx",
                    lineNumber: 371,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Navbar.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_s(Navbar, "N7/0rOG/U/PhpDt4uJQk9jEANTw=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/LazyGlobe.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LazyGlobe",
    ()=>LazyGlobe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ClientWrapper.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const World = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/ui/Globe.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>({
            default: mod.World
        })), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/ui/Globe.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/LazyGlobe.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/LazyGlobe.tsx",
            lineNumber: 11,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
_c = World;
function LazyGlobe({ globeConfig, data, onLoad }) {
    _s();
    const hasLoaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const { registerComponent, markComponentLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoadingContext"])();
    const componentName = "globe";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LazyGlobe.useEffect": ()=>{
            registerComponent(componentName);
        }
    }["LazyGlobe.useEffect"], [
        registerComponent
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LazyGlobe.useEffect": ()=>{
            if (!hasLoaded.current) {
                // Mark as loaded quickly - don't wait for full WebGL initialization
                // The component will continue loading in the background
                const timer = setTimeout({
                    "LazyGlobe.useEffect.timer": ()=>{
                        hasLoaded.current = true;
                        markComponentLoaded(componentName);
                        onLoad?.();
                    }
                }["LazyGlobe.useEffect.timer"], 300);
                return ({
                    "LazyGlobe.useEffect": ()=>clearTimeout(timer)
                })["LazyGlobe.useEffect"];
            }
        }
    }["LazyGlobe.useEffect"], [
        markComponentLoaded,
        onLoad
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(World, {
        globeConfig: globeConfig,
        data: data
    }, void 0, false, {
        fileName: "[project]/src/components/ui/LazyGlobe.tsx",
        lineNumber: 53,
        columnNumber: 10
    }, this);
}
_s(LazyGlobe, "7acoWfNhCJAm8q7VnVQcd93psJA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoadingContext"]
    ];
});
_c1 = LazyGlobe;
var _c, _c1;
__turbopack_context__.k.register(_c, "World");
__turbopack_context__.k.register(_c1, "LazyGlobe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/NumberTicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NumberTicker",
    ()=>NumberTicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NumberTicker({ value, startValue = 0, direction = "up", delay = 0, className, decimalPlaces = 0, ...props }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const motionValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(direction === "down" ? value : startValue);
    const springValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(motionValue, {
        damping: 60,
        stiffness: 100
    });
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "0px"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NumberTicker.useEffect": ()=>{
            if (isInView) {
                const timer = setTimeout({
                    "NumberTicker.useEffect.timer": ()=>{
                        motionValue.set(direction === "down" ? startValue : value);
                    }
                }["NumberTicker.useEffect.timer"], delay * 1000);
                return ({
                    "NumberTicker.useEffect": ()=>clearTimeout(timer)
                })["NumberTicker.useEffect"];
            }
        }
    }["NumberTicker.useEffect"], [
        motionValue,
        isInView,
        delay,
        value,
        direction,
        startValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NumberTicker.useEffect": ()=>springValue.on("change", {
                "NumberTicker.useEffect": (latest)=>{
                    if (ref.current) {
                        ref.current.textContent = Intl.NumberFormat("en-US", {
                            minimumFractionDigits: decimalPlaces,
                            maximumFractionDigits: decimalPlaces
                        }).format(Number(latest.toFixed(decimalPlaces)));
                    }
                }
            }["NumberTicker.useEffect"])
    }["NumberTicker.useEffect"], [
        springValue,
        decimalPlaces
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block tracking-wider text-black tabular-nums", className),
        ...props,
        children: startValue
    }, void 0, false, {
        fileName: "[project]/src/components/ui/NumberTicker.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(NumberTicker, "b8aj1/ahv2yZpM7Evi2PhhKh64k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = NumberTicker;
var _c;
__turbopack_context__.k.register(_c, "NumberTicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/EdgeLines.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EdgeLines",
    ()=>EdgeLines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function EdgeLines({ className = "", horizontal = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": "true",
        className: `absolute inset-0 pointer-events-none px-4 sm:px-6 ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto h-full relative",
            children: [
                horizontal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute top-0 left-0 right-0 h-px bg-[#e5edf5]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/EdgeLines.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute bottom-0 left-0 right-0 h-px bg-[#e5edf5]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/EdgeLines.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute top-0 bottom-0 left-0 w-px bg-[#e5edf5]"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/EdgeLines.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute top-0 bottom-0 right-0 w-px bg-[#e5edf5]"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/EdgeLines.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/EdgeLines.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/EdgeLines.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = EdgeLines;
var _c;
__turbopack_context__.k.register(_c, "EdgeLines");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CtaHoverArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CtaHoverArrow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LazyGlobe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/LazyGlobe.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NumberTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/NumberTicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EdgeLines.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scroll.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const sampleArcs = [
    {
        order: 1,
        startLat: 40,
        startLng: -95,
        endLat: 36,
        endLng: 139,
        arcAlt: 0.1,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 2,
        startLat: 51.5,
        startLng: -0.1,
        endLat: 35.6,
        endLng: 139.6,
        arcAlt: 0.2,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 3,
        startLat: 35.6,
        startLng: 139.6,
        endLat: -33.8,
        endLng: 151.2,
        arcAlt: 0.15,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 4,
        startLat: -33.8,
        startLng: 151.2,
        endLat: 1.3,
        endLng: 103.8,
        arcAlt: 0.18,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 5,
        startLat: 1.3,
        startLng: 103.8,
        endLat: 40.7,
        endLng: -74.0,
        arcAlt: 0.25,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 6,
        startLat: 48.8,
        startLng: 2.3,
        endLat: 52.5,
        endLng: 13.4,
        arcAlt: 0.12,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 7,
        startLat: 52.5,
        startLng: 13.4,
        endLat: 37.7,
        endLng: -122.4,
        arcAlt: 0.22,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 8,
        startLat: 37.7,
        startLng: -122.4,
        endLat: 22.3,
        endLng: 114.2,
        arcAlt: 0.28,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 9,
        startLat: 22.3,
        startLng: 114.2,
        endLat: 40,
        endLng: -95,
        arcAlt: 0.2,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 10,
        startLat: 35.6,
        startLng: 139.6,
        endLat: -37.8,
        endLng: 144.9,
        arcAlt: 0.19,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 11,
        startLat: 19.4,
        startLng: -99.1,
        endLat: 43.6,
        endLng: 7.0,
        arcAlt: 0.23,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 12,
        startLat: 43.6,
        startLng: 7.0,
        endLat: 55.7,
        endLng: 37.6,
        arcAlt: 0.17,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 13,
        startLat: 55.7,
        startLng: 37.6,
        endLat: 31.2,
        endLng: 30.6,
        arcAlt: 0.21,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 14,
        startLat: 31.2,
        startLng: 30.6,
        endLat: 25.2,
        endLng: 55.3,
        arcAlt: 0.24,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 15,
        startLat: 25.2,
        startLng: 55.3,
        endLat: 28.6,
        endLng: 77.2,
        arcAlt: 0.16,
        color: "rgba(255, 122, 24, 0.6)"
    },
    // Additional arcs to double the count
    {
        order: 16,
        startLat: 28.6,
        startLng: 77.2,
        endLat: 13.7,
        endLng: 100.5,
        arcAlt: 0.14,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 17,
        startLat: 13.7,
        startLng: 100.5,
        endLat: -1.3,
        endLng: 36.8,
        arcAlt: 0.26,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 18,
        startLat: -1.3,
        startLng: 36.8,
        endLat: -22.9,
        endLng: -43.2,
        arcAlt: 0.29,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 19,
        startLat: -22.9,
        startLng: -43.2,
        endLat: 19.4,
        endLng: -99.1,
        arcAlt: 0.27,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 20,
        startLat: 40.7,
        startLng: -74.0,
        endLat: 41.9,
        endLng: 12.5,
        arcAlt: 0.13,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 21,
        startLat: 41.9,
        startLng: 12.5,
        endLat: 25.2,
        endLng: 55.3,
        arcAlt: 0.19,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 22,
        startLat: -37.8,
        startLng: 144.9,
        endLat: -41.3,
        endLng: 174.8,
        arcAlt: 0.11,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 23,
        startLat: -41.3,
        startLng: 174.8,
        endLat: 35.6,
        endLng: 139.6,
        arcAlt: 0.25,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 24,
        startLat: 55.7,
        startLng: 37.6,
        endLat: 59.9,
        endLng: 30.3,
        arcAlt: 0.1,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 25,
        startLat: 59.9,
        startLng: 30.3,
        endLat: 51.5,
        endLng: -0.1,
        arcAlt: 0.16,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 26,
        startLat: 22.3,
        startLng: 114.2,
        endLat: 1.3,
        endLng: 103.8,
        arcAlt: 0.15,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 27,
        startLat: 37.7,
        startLng: -122.4,
        endLat: 49.3,
        endLng: -123.1,
        arcAlt: 0.08,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 28,
        startLat: 49.3,
        startLng: -123.1,
        endLat: 64.1,
        endLng: -21.9,
        arcAlt: 0.24,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 29,
        startLat: 64.1,
        startLng: -21.9,
        endLat: 48.8,
        endLng: 2.3,
        arcAlt: 0.18,
        color: "rgba(255, 122, 24, 0.6)"
    },
    {
        order: 30,
        startLat: -33.8,
        startLng: 151.2,
        endLat: -26.2,
        endLng: 28.0,
        arcAlt: 0.3,
        color: "rgba(255, 132, 44, 0.6)"
    }
];
const globeConfig = {
    pointSize: 1,
    globeColor: "#e4e5ec",
    showAtmosphere: true,
    atmosphereColor: "#f5f6fa",
    atmosphereAltitude: 0.18,
    emissive: "#f8f9fc",
    emissiveIntensity: 0.45,
    shininess: 2.2,
    polygonColor: "rgba(74, 78, 105, 0.55)",
    ambientLight: "#dfe2ec",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#fefefe",
    pointLight: "#c9cbda",
    pointColor: "rgba(201, 203, 218, 0.55)",
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    autoRotate: true,
    autoRotateSpeed: 0.5
};
function Hero() {
    const dataPoints = [
        {
            value: 400,
            suffix: "+",
            label: "PROJECTS SUCCESSFULLY COMPLETED"
        },
        {
            value: 85,
            suffix: "GW",
            label: "POWER HANDLED (GIGAWATT)"
        },
        {
            value: 15,
            suffix: "+",
            label: "INTERNATIONAL INDUSTRY LEADERS AS PARTNERS"
        },
        {
            value: 20,
            suffix: "+",
            label: "YEARS IN RENEWABLES SECTOR"
        },
        {
            value: 17,
            suffix: "+",
            label: "GRID CODES COMPLIANT"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        "data-snap-section": true,
        className: " relative z-[2] lg:min-h-[95vh] h-full px-4 sm:px-6 pt-20 sm:pt-28 md:pt-36 lg:pt-48  bg-white backdrop-blur-md overflow-hidden flex flex-col justify-start mx-auto pb-12 sm:pb-16 md:pb-20 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-0 pointer-events-none z-0",
                style: {
                    background: "radial-gradient(ellipse 130% 120% at 100% 100%, rgba(201, 203, 218, 0.85) 0%, rgba(201, 203, 218, 0.65) 22%, rgba(201, 203, 218, 0.45) 45%, rgba(201, 203, 218, 0.22) 68%, rgba(255, 255, 255, 0) 90%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-0 pointer-events-none z-0 mix-blend-soft-light opacity-[0.35]",
                style: {
                    backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0.4  0 0 0 0 0.55  0 0 0 0 0.75  0 0 0 0.55 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
                    backgroundSize: "240px 240px"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgeLines"], {
                className: "z-0",
                horizontal: false
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-[1]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -right-[200px] sm:-right-[150px] md:-right-[100px] lg:-right-[800px] -top-12 sm:-top-16 md:-top-20 lg:-top-24 w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] md:w-[850px] md:h-[850px] lg:w-[950px] lg:h-[950px] xl:w-[1100px] xl:h-[1100px] min-w-[600px] min-h-[600px] sm:min-w-[700px] sm:min-h-[700px] md:min-w-[850px] md:min-h-[850px] lg:min-w-[950px] lg:min-h-[950px] xl:min-w-[1100px] xl:min-h-[1100px] relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LazyGlobe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyGlobe"], {
                        globeConfig: globeConfig,
                        data: sampleArcs
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 358,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl w-full mx-auto px-4 sm:px-6 flex flex-col items-start text-left space-y-4 sm:space-y-6 md:space-y-8 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: " text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight sm:leading-snug md:leading-normal lg:leading-18 text-gray-900 max-w-full sm:max-w-3xl md:max-w-4xl ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Intelligent Control For The Renewable Century"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 373,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1,
                            delay: 0.4
                        },
                        className: " max-w-full sm:max-w-xl md:max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl font-sans leading-relaxed text-gray-600 ",
                        children: "Smart Grid Analytics unifies renewable assets, automates compliance, and enables real-time decisions across solar, wind, BESS, and hybrid plants."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1,
                            delay: 0.6
                        },
                        className: " flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-8 mt-4 sm:mt-6 w-auto ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToSectionAligned"])("solvyn");
                                },
                                className: " inline-flex items-center justify-center font-sans font-bold text-sm sm:text-base md:text-lg px-[20px] py-[10px] whitespace-nowrap rounded-[8px] bg-transparent border border-[#FF7F00] text-[#FF7F00] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#FF7F00]/10 hover:shadow-sm active:translate-y-px ",
                                children: "Explore Solvyn"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToSectionAligned"])("contact", {
                                        updateHash: false
                                    });
                                },
                                className: " group inline-flex items-center justify-center gap-1 font-sans font-bold text-white text-sm sm:text-base md:text-lg px-[20px] py-[10px] whitespace-nowrap rounded-[8px] bg-[#FF7F00] cursor-pointer border border-transparent transition-all duration-300 ease-in-out hover:brightness-95 hover:shadow-sm active:translate-y-px ",
                                children: [
                                    "Book Demo",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CtaHoverArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaHoverArrow"], {
                                        large: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 414,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl w-full mx-auto px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24 lg:mt-28 relative z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-12",
                    children: dataPoints.map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8,
                                delay: 0.8 + index * 0.1
                            },
                            className: "flex flex-col items-start text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-mono text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 flex items-baseline gap-0.5 sm:gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NumberTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberTicker"], {
                                            value: point.value,
                                            className: "text-gray-900"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 447,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg sm:text-xl md:text-2xl lg:text-3xl",
                                            children: point.suffix
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 451,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-left text-gray-600 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs uppercase tracking-wide leading-tight",
                                    children: point.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 453,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 439,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 321,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/AboutAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutAnimation",
    ()=>AboutAnimation,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
const ACCENT = "#FF7F00";
const LINE = "#9CA3AF"; // gray-400
const VB_W = 800;
const VB_H = 260;
const POS = {
    c: {
        x: 400,
        y: 130
    },
    tl: {
        x: 130,
        y: 70
    },
    tm: {
        x: 280,
        y: 50
    },
    tmr: {
        x: 520,
        y: 50
    },
    tr: {
        x: 670,
        y: 70
    },
    ml: {
        x: 80,
        y: 130
    },
    mr: {
        x: 720,
        y: 130
    },
    bl: {
        x: 130,
        y: 190
    },
    bm: {
        x: 280,
        y: 210
    },
    bmr: {
        x: 520,
        y: 210
    },
    br: {
        x: 670,
        y: 190
    }
};
const NODE_IDS = Object.keys(POS);
_c = NODE_IDS;
// Easings reminiscent of Stripe's gentle, premium feel.
const EASE_OUT = [
    0.22,
    1,
    0.36,
    1
];
const EASE_IN_OUT = [
    0.65,
    0,
    0.35,
    1
];
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
const DECIDE_DECISION_INDICES = new Set([
    13,
    24,
    35
]);
const DECIDE_SECONDARY_INDICES = new Set([
    3,
    8,
    18,
    21,
    28,
    31,
    41,
    44
]);
const lerp = (a, b, t)=>a + (b - a) * t;
// Build all paths once at module load. Cubic Béziers converge strongly toward
// a center "waist", with per-line variance so neighbouring lines weave instead
// of staying parallel.
const DECIDE_PATHS = (()=>{
    const list = [];
    for(let i = 0; i < DECIDE_NODES; i++){
        const t = i / (DECIDE_NODES - 1);
        const y = lerp(DECIDE_TOP_Y, DECIDE_BOT_Y, t);
        const variance = i - (DECIDE_NODES - 1) / 2;
        // Slight per-line curve-strength variation gives the bundle organic depth.
        const curveStrength = 270 + Math.sin(i * 0.62) * 20 + i % 3 * 4;
        const cx1 = DECIDE_LEFT_X + curveStrength;
        const cx2 = DECIDE_RIGHT_X - curveStrength;
        // Pull both control points toward the centre to create the waist — but
        // only ~50% of the way, so each line stays visibly continuous from the
        // left node to the right node instead of vanishing into a tight pinch.
        const baseCy = lerp(y, DECIDE_CENTER_Y, 0.5);
        // Push control points in opposite directions so curves cross / weave.
        const cy1 = baseCy + variance * 0.4;
        const cy2 = baseCy - variance * 0.4;
        const d = `M${DECIDE_LEFT_X.toFixed(2)},${y.toFixed(2)} ` + `C${cx1.toFixed(2)},${cy1.toFixed(2)} ` + `${cx2.toFixed(2)},${cy2.toFixed(2)} ` + `${DECIDE_RIGHT_X.toFixed(2)},${y.toFixed(2)}`;
        const kind = DECIDE_DECISION_INDICES.has(i) ? "decision" : DECIDE_SECONDARY_INDICES.has(i) ? "secondary" : "background";
        list.push({
            index: i,
            d,
            kind,
            y
        });
    }
    return list;
})();
const DECIDE_DECISION_PATHS = DECIDE_PATHS.filter(_c1 = (p)=>p.kind === "decision");
_c2 = DECIDE_DECISION_PATHS;
const DECIDE_SECONDARY_PATHS = DECIDE_PATHS.filter(_c3 = (p)=>p.kind === "secondary");
_c4 = DECIDE_SECONDARY_PATHS;
const DECIDE_BACKGROUND_PATHS = DECIDE_PATHS.filter(_c5 = (p)=>p.kind === "background");
_c6 = DECIDE_BACKGROUND_PATHS;
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
const SEE_PATHS = (()=>{
    const list = [];
    for(let i = 0; i < SEE_LINE_COUNT; i++){
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
        const d = `M${x1.toFixed(2)},${baseY.toFixed(2)} ` + `C${cx1.toFixed(2)},${cy1.toFixed(2)} ` + `${cx2.toFixed(2)},${cy2.toFixed(2)} ` + `${x2.toFixed(2)},${baseY.toFixed(2)}`;
        list.push({
            index: i,
            d,
            baseY,
            t
        });
    }
    return list;
})();
// Vertical opacity gradient: middle of the stack is densest, top fades
// toward the sky and bottom fades into the section background.
const seeLineOpacity = (t)=>{
    const mid = 0.46;
    const distFromMid = Math.abs(t - 0.42);
    return Math.max(0.22, mid - distFromMid * 0.34);
};
// ---------- DECIDE (3rd animation): radial intelligence burst ----------
//
// A dense fan of radial lines emerging from a single origin near the bottom
// centre, opening upward across roughly ±75°. Particles travel outward along
// each line. All geometry is precomputed once — the scene only animates
// opacity / stroke / particle group visibility per phase, so the 80+ lines
// stay 60fps cheap.
const RADIAL_LINE_COUNT = 84;
const RADIAL_ORIGIN_X = VB_W / 2; // 400
/** Slightly lower than before so spokes can run longer before the viewBox top. */ const RADIAL_ORIGIN_Y = VB_H * 0.91;
const RADIAL_ARC_DEG = 75; // ±75° measured from straight up
/** Extended past particles/glow so grey spokes read at least as long as the dots. */ const RADIAL_BASE_LENGTH = 228;
const RADIAL_LENGTH_VARIANCE = 26;
const RADIAL_ANGLE_JITTER_DEG = 1.1;
// Deterministic pseudo-random so the burst layout is stable across renders /
// hot reloads. Same seed → same value, no React state needed.
const seededRand = (seed)=>{
    const s = Math.sin(seed * 12.9898 + 7.1) * 43758.5453;
    return s - Math.floor(s);
};
const RADIAL_LINES = (()=>{
    const list = [];
    for(let i = 0; i < RADIAL_LINE_COUNT; i++){
        const t = i / (RADIAL_LINE_COUNT - 1);
        const baseAngleDeg = lerp(-RADIAL_ARC_DEG, RADIAL_ARC_DEG, t);
        const angleJitter = (seededRand(i + 7) - 0.5) * 2 * RADIAL_ANGLE_JITTER_DEG;
        const angleDeg = baseAngleDeg + angleJitter;
        const angleRad = angleDeg * Math.PI / 180;
        // Length variance — keeps lines from feeling mechanically uniform. A few
        // are visibly shorter than their neighbours.
        const lenNoise = (seededRand(i * 3 + 11) - 0.5) * 2 * RADIAL_LENGTH_VARIANCE;
        // Subtle taper at the wings so the fan feels widest in the middle and
        // gracefully recedes at the shoulders, instead of a flat half-disc.
        const edgeFalloff = 1 - Math.pow(Math.abs(t - 0.5) * 2, 2.4) * 0.1;
        const length = (RADIAL_BASE_LENGTH + lenNoise) * edgeFalloff;
        // Origin is below the action — convert "angle from straight up" to xy.
        const x2 = RADIAL_ORIGIN_X + Math.sin(angleRad) * length;
        const y2 = RADIAL_ORIGIN_Y - Math.cos(angleRad) * length;
        const baseOpacity = 0.6 + seededRand(i + 23) * 0.32;
        const drawDelay = seededRand(i * 5 + 13) * 0.55;
        const drawDuration = 0.7 + seededRand(i * 7 + 3) * 0.25;
        const particleDuration = 3.4 + seededRand(i * 11 + 17) * 2.3;
        const particleDelay = seededRand(i * 13 + 29) * 4;
        const d = `M${RADIAL_ORIGIN_X.toFixed(2)},${RADIAL_ORIGIN_Y.toFixed(2)} ` + `L${x2.toFixed(2)},${y2.toFixed(2)}`;
        list.push({
            index: i,
            d,
            x2,
            y2,
            length,
            baseOpacity,
            drawDelay,
            drawDuration,
            particleDuration,
            particleDelay
        });
    }
    return list;
})();
// ---------- Persistent base nodes ----------
const BaseNodes = ({ activeId, reducedMotion })=>{
    // Every scene now introduces its own self-contained geometry — SEE
    // (hemisphere), EXECUTE (waist bundle), and DECIDE (radial intelligence
    // burst) all manage their own anchor nodes — so the 11 shared perimeter
    // dots are always hidden while a scene is active.
    const hideBaseNodes = activeId === "see" || activeId === "execute" || activeId === "decide";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
        animate: {
            opacity: hideBaseNodes ? 0 : 1
        },
        transition: {
            duration: 0.5,
            ease: EASE_OUT
        },
        style: {
            pointerEvents: "none"
        },
        children: NODE_IDS.map((id, i)=>{
            const p = POS[id];
            const isCenter = id === "c";
            const accentCenter = activeId === "decide" && isCenter;
            const r = accentCenter ? 5 : 2.5;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                        cx: p.x,
                        cy: p.y,
                        r: r,
                        fill: ACCENT,
                        initial: false,
                        animate: reducedMotion ? {
                            opacity: 0.85
                        } : {
                            opacity: [
                                0.55,
                                1,
                                0.55
                            ],
                            r: accentCenter ? [
                                r,
                                r + 0.6,
                                r
                            ] : [
                                r,
                                r + 0.4,
                                r
                            ]
                        },
                        transition: {
                            duration: 2.6 + i % 5 * 0.22,
                            repeat: Infinity,
                            ease: EASE_IN_OUT,
                            delay: i % 7 * 0.18
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 323,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    accentCenter && !reducedMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                        cx: p.x,
                        cy: p.y,
                        r: r,
                        fill: "none",
                        stroke: ACCENT,
                        strokeWidth: 1,
                        initial: {
                            r,
                            opacity: 0.5
                        },
                        animate: {
                            r: [
                                r,
                                18,
                                r
                            ],
                            opacity: [
                                0.45,
                                0,
                                0.45
                            ]
                        },
                        transition: {
                            duration: 2.6,
                            repeat: Infinity,
                            ease: EASE_OUT
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 345,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, id, true, {
                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                lineNumber: 322,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
        lineNumber: 310,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c7 = BaseNodes;
// ---------- Scenes ----------
const sceneVariants = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.45,
            ease: EASE_OUT
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: EASE_OUT
        }
    }
};
const SeeLine = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(({ path, opacity })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
        d: path.d,
        fill: "none",
        stroke: LINE,
        strokeWidth: 1.1,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        vectorEffect: "non-scaling-stroke",
        initial: {
            opacity: 0
        },
        animate: {
            opacity
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: EASE_OUT
            }
        },
        transition: {
            opacity: {
                duration: 0.95,
                // Stagger from the bottom of the dome upward so the hemisphere
                // appears to "rise" into view rather than blink in.
                delay: 0.012 * path.index,
                ease: EASE_IN_OUT
            }
        }
    }, void 0, false, {
        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
        lineNumber: 381,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = SeeLine;
SeeLine.displayName = "SeeLine";
const SeeScene = ({ reducedMotion })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
        variants: sceneVariants,
        initial: "initial",
        animate: "enter",
        exit: "exit",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                style: {
                    pointerEvents: "none"
                },
                children: SEE_PATHS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: SEE_LEFT_X,
                                cy: p.baseY,
                                r: 1,
                                fill: ACCENT,
                                opacity: 0.4
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: SEE_RIGHT_X,
                                cy: p.baseY,
                                r: 1,
                                fill: ACCENT,
                                opacity: 0.4
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, `see-node-${p.index}`, true, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                lineNumber: 413,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                animate: reducedMotion ? {
                    opacity: 1
                } : {
                    opacity: [
                        0.94,
                        1,
                        0.94
                    ]
                },
                transition: {
                    duration: 6.8,
                    repeat: Infinity,
                    ease: EASE_IN_OUT
                },
                children: SEE_PATHS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeeLine, {
                        path: p,
                        opacity: seeLineOpacity(p.t)
                    }, `see-line-${p.index}`, false, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 446,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                lineNumber: 435,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            !reducedMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: SEE_PATHS.map((p)=>{
                    // Duration 4.4–7.0s, delay 0–5s, both derived from prime-ish
                    // offsets so no two particles share a phase.
                    const duration = 4.4 + p.index * 0.137 % 2.6;
                    const delay = (p.index * 0.21 + p.t * 1.3) % 5;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowParticle, {
                        d: p.d,
                        duration: duration,
                        delay: delay,
                        size: 1.6,
                        color: ACCENT,
                        opacity: 0.85,
                        glow: true
                    }, `see-particle-${p.index}`, false, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 465,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                lineNumber: 458,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
        lineNumber: 406,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c9 = SeeScene;
const FlowParticle = ({ d, duration, delay, size, color, opacity = 1, glow = false, keySplines = "0.4 0 0.2 1" })=>{
    const haloOpacity = (0.18 * opacity).toFixed(3);
    const dur = `${duration}s`;
    const begin = `${delay}s`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            glow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                r: size * 2.4,
                fill: color,
                opacity: 0,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                        attributeName: "opacity",
                        values: `0;${haloOpacity};${haloOpacity};0`,
                        keyTimes: "0;0.15;0.85;1",
                        dur: dur,
                        begin: begin,
                        repeatCount: "indefinite"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 518,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                        dur: dur,
                        begin: begin,
                        repeatCount: "indefinite",
                        path: d,
                        calcMode: "spline",
                        keyTimes: "0;1",
                        keySplines: keySplines
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 526,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                lineNumber: 517,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                r: size,
                fill: color,
                opacity: 0,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                        attributeName: "opacity",
                        values: `0;${opacity};${opacity};0`,
                        keyTimes: "0;0.12;0.88;1",
                        dur: dur,
                        begin: begin,
                        repeatCount: "indefinite"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 538,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                        dur: dur,
                        begin: begin,
                        repeatCount: "indefinite",
                        path: d,
                        calcMode: "spline",
                        keyTimes: "0;1",
                        keySplines: keySplines
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 546,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                lineNumber: 537,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
        lineNumber: 515,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c10 = FlowParticle;
const DecideLine = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(({ path, opacity, stroke, strokeWidth })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
        d: path.d,
        fill: "none",
        stroke: stroke,
        strokeWidth: strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        vectorEffect: "non-scaling-stroke",
        // Plain opacity bloom on entry. We deliberately avoid Framer Motion's
        // `pathLength` mechanic here — it sets stroke-dasharray/dashoffset under
        // the hood, which can leave dense bundles looking visibly dashed when
        // combined with non-scaling-stroke and re-renders on phase change.
        initial: {
            opacity: 0
        },
        animate: {
            opacity,
            stroke,
            strokeWidth
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: EASE_OUT
            }
        },
        transition: {
            opacity: {
                duration: 1.0,
                delay: 0.014 * path.index,
                ease: EASE_IN_OUT
            },
            stroke: {
                duration: 1.0,
                ease: EASE_IN_OUT
            },
            strokeWidth: {
                duration: 1.0,
                ease: EASE_IN_OUT
            }
        }
    }, void 0, false, {
        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
        lineNumber: 572,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = DecideLine;
DecideLine.displayName = "DecideLine";
const decideLineOpacity = (kind, phase)=>{
    if (phase === 1) {
        return kind === "decision" ? 0.55 : kind === "secondary" ? 0.42 : 0.3;
    }
    if (phase === 2) {
        return kind === "decision" ? 0.65 : kind === "secondary" ? 0.32 : 0.1;
    }
    return kind === "decision" ? 0.95 : kind === "secondary" ? 0.18 : 0.05;
};
const decideStroke = (kind, phase)=>kind === "decision" && phase === 3 ? ACCENT : LINE;
const decideStrokeWidth = (kind, phase)=>kind === "decision" && phase === 3 ? 1.4 : 1;
// Particle group opacity per kind/phase. Particles always run on their SMIL
// cycle; only their wrapping `motion.g` opacity is driven by phase, so we
// never restart the underlying motion (which would visibly snap).
const decideParticleGroupOpacity = (kind, phase)=>{
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
const DecideScene = ({ reducedMotion })=>{
    _s();
    // Phase machine: 1 (full network) → 2 (filtering) → 3 (decision) → 1 …
    // Reduced-motion mode skips straight to the resolved decision view.
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reducedMotion ? 3 : 1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DecideScene.useEffect": ()=>{
            if (reducedMotion) {
                setPhase(3);
                return;
            }
            let cancelled = false;
            let timeoutId = null;
            let current = 1;
            setPhase(1);
            // Phase 1 lingers a bit so the user sees the full bundle hum after the
            // initial draw-in completes (~1.8s with stagger).
            const PHASE_DURATIONS = {
                1: 5500,
                2: 1900,
                3: 3800
            };
            const tick = {
                "DecideScene.useEffect.tick": ()=>{
                    const dwell = PHASE_DURATIONS[current];
                    timeoutId = setTimeout({
                        "DecideScene.useEffect.tick": ()=>{
                            if (cancelled) return;
                            current = current === 1 ? 2 : current === 2 ? 3 : 1;
                            setPhase(current);
                            tick();
                        }
                    }["DecideScene.useEffect.tick"], dwell);
                }
            }["DecideScene.useEffect.tick"];
            tick();
            return ({
                "DecideScene.useEffect": ()=>{
                    cancelled = true;
                    if (timeoutId) clearTimeout(timeoutId);
                }
            })["DecideScene.useEffect"];
        }
    }["DecideScene.useEffect"], [
        reducedMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
        variants: sceneVariants,
        initial: "initial",
        animate: "enter",
        exit: "exit",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                style: {
                    pointerEvents: "none"
                },
                children: DECIDE_PATHS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: DECIDE_LEFT_X,
                                cy: p.y,
                                r: 1.1,
                                fill: ACCENT,
                                opacity: 0.55
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                                lineNumber: 688,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: DECIDE_RIGHT_X,
                                cy: p.y,
                                r: 1.1,
                                fill: ACCENT,
                                opacity: 0.55
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                                lineNumber: 695,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, `dec-node-${p.index}`, true, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 687,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                lineNumber: 685,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    DECIDE_BACKGROUND_PATHS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DecideLine, {
                            path: p,
                            opacity: decideLineOpacity(p.kind, phase),
                            stroke: decideStroke(p.kind, phase),
                            strokeWidth: decideStrokeWidth(p.kind, phase)
                        }, `dec-line-${p.index}`, false, {
                            fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                            lineNumber: 710,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    DECIDE_SECONDARY_PATHS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DecideLine, {
                            path: p,
                            opacity: decideLineOpacity(p.kind, phase),
                            stroke: decideStroke(p.kind, phase),
                            strokeWidth: decideStrokeWidth(p.kind, phase)
                        }, `dec-line-${p.index}`, false, {
                            fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                            lineNumber: 719,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    DECIDE_DECISION_PATHS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DecideLine, {
                            path: p,
                            opacity: decideLineOpacity(p.kind, phase),
                            stroke: decideStroke(p.kind, phase),
                            strokeWidth: decideStrokeWidth(p.kind, phase)
                        }, `dec-line-${p.index}`, false, {
                            fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                            lineNumber: 728,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                lineNumber: 708,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !reducedMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        initial: false,
                        animate: {
                            opacity: decideParticleGroupOpacity("background", phase)
                        },
                        transition: {
                            duration: 1.4,
                            ease: EASE_IN_OUT
                        },
                        children: DECIDE_BACKGROUND_PATHS.map((p)=>{
                            const duration = 3.6 + p.index * 0.137 % 2.3;
                            const delay = p.index * 0.19 % 4;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowParticle, {
                                d: p.d,
                                duration: duration,
                                delay: delay,
                                size: 1.3,
                                color: ACCENT,
                                opacity: 0.85
                            }, `dec-bg-${p.index}`, false, {
                                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                                lineNumber: 752,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 741,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        initial: false,
                        animate: {
                            opacity: decideParticleGroupOpacity("secondary", phase)
                        },
                        transition: {
                            duration: 1.4,
                            ease: EASE_IN_OUT
                        },
                        children: DECIDE_SECONDARY_PATHS.map((p)=>{
                            const duration = 4.0 + p.index * 0.17 % 1.8;
                            const delay = (p.index + 5) * 0.21 % 3.5;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowParticle, {
                                d: p.d,
                                duration: duration,
                                delay: delay,
                                size: 1.5,
                                color: ACCENT,
                                opacity: 0.95
                            }, `dec-sec-${p.index}`, false, {
                                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                                lineNumber: 777,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 766,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        initial: false,
                        animate: {
                            opacity: decideParticleGroupOpacity("decision", phase)
                        },
                        transition: {
                            duration: 1.0,
                            ease: EASE_IN_OUT
                        },
                        children: DECIDE_DECISION_PATHS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowParticle, {
                                d: p.d,
                                duration: 4.2,
                                delay: i * 0.55,
                                size: 1.7,
                                color: ACCENT,
                                opacity: 1
                            }, `dec-neutral-${p.index}`, false, {
                                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                                lineNumber: 799,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 791,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        initial: false,
                        animate: {
                            opacity: phase === 3 ? 1 : 0
                        },
                        transition: {
                            duration: 1.0,
                            ease: EASE_IN_OUT
                        },
                        children: DECIDE_DECISION_PATHS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowParticle, {
                                d: p.d,
                                duration: 2.8,
                                delay: i * 0.45,
                                size: 2.6,
                                color: ACCENT,
                                opacity: 1,
                                glow: true
                            }, `dec-accent-${p.index}`, false, {
                                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                                lineNumber: 818,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 812,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
        lineNumber: 678,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DecideScene, "tA8ck4uggPUEsHs/I2u6SS43clw=");
_c12 = DecideScene;
const radialLineOpacity = (base, phase)=>{
    if (phase === 1) return base * 0.85;
    if (phase === 2) return base;
    return base * 0.55;
};
// Solid gray stroke so the spoke reads for the full geometric length of `d`
// (same path as FlowParticle). A radial stroke gradient made tips nearly
// invisible while orange dots stayed bright, so lines looked shorter than motion.
const RadialLineEl = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(({ path, phase })=>{
    const opacity = radialLineOpacity(path.baseOpacity, phase);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
        d: path.d,
        fill: "none",
        stroke: LINE,
        strokeWidth: 1.05,
        strokeLinecap: "round",
        vectorEffect: "non-scaling-stroke",
        initial: {
            pathLength: 0,
            opacity: 0
        },
        animate: {
            pathLength: 1,
            opacity
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.35,
                ease: EASE_OUT
            }
        },
        transition: {
            // Lines extend outward from the origin — each one paints over its
            // own duration with a small per-line random offset so the bundle
            // never reads as a synchronous sweep.
            pathLength: {
                duration: path.drawDuration,
                delay: path.drawDelay,
                ease: EASE_OUT
            },
            opacity: {
                duration: 0.7,
                delay: path.drawDelay,
                ease: EASE_OUT
            }
        }
    }, void 0, false, {
        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
        lineNumber: 858,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c13 = RadialLineEl;
RadialLineEl.displayName = "RadialLineEl";
const RadialBurstScene = ({ reducedMotion })=>{
    _s1();
    // Phase 1 = BUILD (lines paint outward). Phase 2 = FLOW (particles travel
    // outward along every line). Phase 3 = lines recede slightly while flow
    // continues. After the first build we loop 2 ↔ 3 so the network stays
    // continuously alive instead of redrawing.
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reducedMotion ? 3 : 1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RadialBurstScene.useEffect": ()=>{
            if (reducedMotion) {
                setPhase(3);
                return;
            }
            let cancelled = false;
            let timeoutId = null;
            let current = 1;
            setPhase(1);
            const PHASE_DURATIONS = {
                1: 2200,
                2: 4800,
                3: 3600
            };
            const next = {
                "RadialBurstScene.useEffect.next": (p)=>{
                    if (p === 1) return 2;
                    if (p === 2) return 3;
                    return 2;
                }
            }["RadialBurstScene.useEffect.next"];
            const tick = {
                "RadialBurstScene.useEffect.tick": ()=>{
                    const dwell = PHASE_DURATIONS[current];
                    timeoutId = setTimeout({
                        "RadialBurstScene.useEffect.tick": ()=>{
                            if (cancelled) return;
                            current = next(current);
                            setPhase(current);
                            tick();
                        }
                    }["RadialBurstScene.useEffect.tick"], dwell);
                }
            }["RadialBurstScene.useEffect.tick"];
            tick();
            return ({
                "RadialBurstScene.useEffect": ()=>{
                    cancelled = true;
                    if (timeoutId) clearTimeout(timeoutId);
                }
            })["RadialBurstScene.useEffect"];
        }
    }["RadialBurstScene.useEffect"], [
        reducedMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
        variants: sceneVariants,
        initial: "initial",
        animate: "enter",
        exit: "exit",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                    id: "decide-core-glow",
                    cx: RADIAL_ORIGIN_X,
                    cy: RADIAL_ORIGIN_Y,
                    r: 44,
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: ACCENT,
                            stopOpacity: "0.34"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                            lineNumber: 954,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "55%",
                            stopColor: ACCENT,
                            stopOpacity: "0.07"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                            lineNumber: 955,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: ACCENT,
                            stopOpacity: "0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                            lineNumber: 956,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                    lineNumber: 947,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                lineNumber: 946,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                cx: RADIAL_ORIGIN_X,
                cy: RADIAL_ORIGIN_Y,
                r: 44,
                fill: "url(#decide-core-glow)",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: phase === 3 ? 1 : 0.65
                },
                transition: {
                    duration: 1.0,
                    ease: EASE_IN_OUT
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                lineNumber: 961,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: RADIAL_LINES.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadialLineEl, {
                        path: p,
                        phase: phase
                    }, `r-line-${p.index}`, false, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 973,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                lineNumber: 971,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                cx: RADIAL_ORIGIN_X,
                cy: RADIAL_ORIGIN_Y,
                r: 3.4,
                fill: ACCENT,
                initial: {
                    opacity: 0,
                    scale: 0.4
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 0.6,
                    delay: 0.2,
                    ease: EASE_OUT
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                lineNumber: 978,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !reducedMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                cx: RADIAL_ORIGIN_X,
                cy: RADIAL_ORIGIN_Y,
                r: 3.4,
                fill: "none",
                stroke: ACCENT,
                strokeWidth: 1,
                initial: {
                    opacity: 0
                },
                animate: {
                    r: [
                        3.4,
                        14,
                        3.4
                    ],
                    opacity: [
                        0.5,
                        0,
                        0.5
                    ]
                },
                transition: {
                    duration: 3.2,
                    repeat: Infinity,
                    ease: EASE_OUT,
                    delay: 0.4
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                lineNumber: 988,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !reducedMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: phase === 1 ? 0 : phase === 3 ? 0.55 : 1
                    },
                    transition: {
                        duration: 1.0,
                        ease: EASE_IN_OUT
                    },
                    children: RADIAL_LINES.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowParticle, {
                            d: p.d,
                            duration: p.particleDuration,
                            delay: p.particleDelay,
                            size: 1.4,
                            color: ACCENT,
                            opacity: 0.85,
                            keySplines: "0 0 0.25 1"
                        }, `r-p-${p.index}`, false, {
                            fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                            lineNumber: 1023,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                    lineNumber: 1015,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
        lineNumber: 939,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(RadialBurstScene, "tA8ck4uggPUEsHs/I2u6SS43clw=");
_c14 = RadialBurstScene;
const AboutAnimation = ({ activeId, className = "" })=>{
    _s2();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])() ?? false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${VB_W} ${VB_H}`,
        preserveAspectRatio: "xMidYMid meet",
        className: `w-full h-full ${className}`,
        role: "img",
        "aria-label": `Animation illustrating the ${activeId} stage`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BaseNodes, {
                activeId: activeId,
                reducedMotion: reducedMotion
            }, void 0, false, {
                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                lineNumber: 1062,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "sync",
                initial: true,
                children: [
                    activeId === "see" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeeScene, {
                        reducedMotion: reducedMotion
                    }, "see", false, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 1065,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeId === "execute" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DecideScene, {
                        reducedMotion: reducedMotion
                    }, "execute", false, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 1068,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeId === "decide" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadialBurstScene, {
                        reducedMotion: reducedMotion
                    }, "decide", false, {
                        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                        lineNumber: 1071,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/AboutAnimation.tsx",
                lineNumber: 1063,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/AboutAnimation.tsx",
        lineNumber: 1055,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(AboutAnimation, "sF4KtIiIlOcKcWMXs33EtX/h6fI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c15 = AboutAnimation;
const __TURBOPACK__default__export__ = AboutAnimation;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "NODE_IDS");
__turbopack_context__.k.register(_c1, "DECIDE_DECISION_PATHS$DECIDE_PATHS.filter");
__turbopack_context__.k.register(_c2, "DECIDE_DECISION_PATHS");
__turbopack_context__.k.register(_c3, "DECIDE_SECONDARY_PATHS$DECIDE_PATHS.filter");
__turbopack_context__.k.register(_c4, "DECIDE_SECONDARY_PATHS");
__turbopack_context__.k.register(_c5, "DECIDE_BACKGROUND_PATHS$DECIDE_PATHS.filter");
__turbopack_context__.k.register(_c6, "DECIDE_BACKGROUND_PATHS");
__turbopack_context__.k.register(_c7, "BaseNodes");
__turbopack_context__.k.register(_c8, "SeeLine");
__turbopack_context__.k.register(_c9, "SeeScene");
__turbopack_context__.k.register(_c10, "FlowParticle");
__turbopack_context__.k.register(_c11, "DecideLine");
__turbopack_context__.k.register(_c12, "DecideScene");
__turbopack_context__.k.register(_c13, "RadialLineEl");
__turbopack_context__.k.register(_c14, "RadialBurstScene");
__turbopack_context__.k.register(_c15, "AboutAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EdgeLines.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$AboutAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/AboutAnimation.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const aboutOptions = [
    {
        id: "see",
        number: "01",
        title: "SEE",
        subtitle: "Real-time plant visibility",
        description: "SCADA and telemetry unifying every asset into one operational picture."
    },
    {
        id: "execute",
        number: "02",
        title: "EXECUTE",
        subtitle: "Grid-ready EMS dispatch",
        description: "Translates grid requirements into practical setpoints across all plant assets."
    },
    {
        id: "decide",
        number: "03",
        title: "DECIDE",
        subtitle: "AURA intelligence",
        description: "Turns forecasts and limits into clear, actionable schedules for hybrid and storage plants."
    }
];
const About = ()=>{
    _s();
    const [activeOptionId, setActiveOptionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(aboutOptions[0].id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        "data-snap-section": true,
        className: "relative w-full h-screen px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgeLines"], {}, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl h-full w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start gap-4 sm:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600",
                                children: "WHO WE ARE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-sans font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl",
                                children: "We Bridge The Gap Between Knowing And Doing In Renewables Energy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex-1 min-h-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-7xl h-full max-h-[360px] sm:max-h-[440px] md:max-h-[520px] lg:max-h-[560px] flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$AboutAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutAnimation"], {
                                activeId: activeOptionId
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/About.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full border-y border-gray-300 overflow-x-auto no-scrollbar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-[960px] grid grid-cols-3",
                            children: aboutOptions.map((option)=>{
                                const isActive = option.id === activeOptionId;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveOptionId(option.id),
                                    className: `group relative text-left px-5 sm:px-6 md:px-8 py-6 md:py-7 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] border-r border-gray-300 last:border-r-0 ${isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-700"}`,
                                    "aria-pressed": isActive,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            className: `pointer-events-none absolute -top-px left-0 right-0 h-[2px] bg-[#FF7F00] origin-left transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "scale-x-100" : "scale-x-0"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            className: `pointer-events-none absolute -bottom-px left-0 right-0 h-[2px] bg-[#FF7F00] origin-left transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "scale-x-100" : "scale-x-0"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 89,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `font-mono text-xs sm:text-sm tracking-[0.12em] ${isActive ? "font-semibold" : "font-medium"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `transition-colors duration-300 ${isActive ? "text-[#FF7F00]" : ""}`,
                                                    children: option.number
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/About.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        " — ",
                                                        option.title
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/About.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `mt-3 text-base sm:text-lg ${isActive ? "font-semibold" : "font-medium"}`,
                                            children: option.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm sm:text-base leading-relaxed",
                                            children: option.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 116,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, option.id, true, {
                                    fileName: "[project]/src/components/sections/About.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/About.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/About.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(About, "UHGIz6ixk6orCc6vAAeNhz5LRuc=");
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/SolvynIcons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AtlasIcon",
    ()=>AtlasIcon,
    "BatteryIcon",
    ()=>BatteryIcon,
    "BidOptimizationIcon",
    ()=>BidOptimizationIcon,
    "ClimateIcon",
    ()=>ClimateIcon,
    "ElementsIcon",
    ()=>ElementsIcon,
    "ForecastingSchedulingIcon",
    ()=>ForecastingSchedulingIcon,
    "PaymentsIcon",
    ()=>PaymentsIcon,
    "ReportingIcon",
    ()=>ReportingIcon,
    "SolarPanelIcon",
    ()=>SolarPanelIcon,
    "TaxIcon",
    ()=>TaxIcon,
    "TradingDeckIcon",
    ()=>TradingDeckIcon,
    "TreasuryIcon",
    ()=>TreasuryIcon,
    "WindmillIcon",
    ()=>WindmillIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const IconWrapper = ({ active, size, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-center transition-all duration-500 ${active ? "opacity-100 scale-110" : "opacity-60 scale-100"}`,
        style: {
            width: size,
            height: size,
            filter: !active ? "grayscale(100%) brightness(0.4)" : undefined
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SolvynIcons.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconWrapper;
const TaxIcon = ({ active, size = 48 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
        active: active,
        size: size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19.049.00995851C22.4341.325767 25.7367 1.28014 28.7794 2.83046c3.0426 1.55031 5.756 3.66123 8.0012 6.2142.9142 1.03954.6576 2.61624-.4624 3.42994L20.5259 23.9483c-1.6569 1.2039-3.98.0202-3.98-2.0279V2.40011c0-1.38439 1.1247-2.518749 2.5031-2.39015149z",
                    fill: "url(#product-icon-tax-Sticky-a)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "17.6666",
                    cy: "24.3334",
                    transform: "rotate(-90 17.6666 24.3334)",
                    fill: "#96F",
                    r: "15.6666"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M31.099 16.2665l-10.5731 7.6818c-1.6569 1.2038-3.98.0201-3.98-2.028V8.70618c.37-.02614.7436-.03943 1.1202-.03943 5.7019 0 10.6924 3.04605 13.4329 7.59975z",
                    fill: "url(#product-icon-tax-Sticky-b)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "product-icon-tax-Sticky-a",
                            x1: "27.6927",
                            y1: "-.106484",
                            x2: "27.6927",
                            y2: "20.5734",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: ".23665",
                                    stopColor: "#FF5191"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#E03071"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "product-icon-tax-Sticky-b",
                            x1: "23.3061",
                            y1: "24.96",
                            x2: "18.8407",
                            y2: "7.43349",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#6E00F5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#9860FE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SolvynIcons.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = TaxIcon;
const ClimateIcon = ({ active, size = 48 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
        active: active,
        size: size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M33.24 21.09c-4.28 0-9.09-2.96-13.24-5.81-4.4-3.04-9.24-7.05-13.24-7.05C2.68 8.23 0 11.96 0 15.28v.28a20 20 0 1 0 40 0c-.13 2.68-2.03 5.53-6.76 5.53z",
                    fill: "url(#product-icon-climate-Sticky-a)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M33.24 8.24c-4 0-8.84 4-13.24 7.04-4.15 2.85-8.96 5.8-13.24 5.8-4.73 0-6.63-2.84-6.76-5.52a20 20 0 1 0 40 0v-.28c0-3.32-2.67-7.05-6.76-7.04z",
                    fill: "url(#product-icon-climate-Sticky-b)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 15.28c4.15 2.85 8.96 5.8 13.24 5.8 4.73 0 6.63-2.84 6.76-5.52a20 20 0 1 1-40 0c.13 2.68 2.03 5.53 6.76 5.53 4.28 0 9.09-2.96 13.24-5.81z",
                    fill: "url(#product-icon-climate-Sticky-c)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "product-icon-climate-Sticky-a",
                            x1: "20",
                            y1: "20.63",
                            x2: "20",
                            y2: "9.57",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#FFD748"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: ".21",
                                    stopColor: "#FFD644"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: ".33",
                                    stopColor: "#FFD438"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: ".45",
                                    stopColor: "#FFD024"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: ".57",
                                    stopColor: "#FFCB09"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#FFC900"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "product-icon-climate-Sticky-b",
                            x1: "20",
                            y1: "9.56",
                            x2: "20",
                            y2: "21.9",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#009C00"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#00BA18"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "product-icon-climate-Sticky-c",
                            x1: "20",
                            y1: "35.28",
                            x2: "20",
                            y2: "15.28",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: ".13",
                                    stopColor: "#00CB1B"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#00D924"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SolvynIcons.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = ClimateIcon;
const TreasuryIcon = ({ active, size = 48 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
        active: active,
        size: size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 40 40",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M29 14.5c0-.36-.07-.71-.22-1.04l-3.92-8.94A2.52 2.52 0 0 0 22.56 3H2.52A2.54 2.54 0 0 0 0 5.56v17.88A2.54 2.54 0 0 0 2.52 26h20.04c1 0 1.9-.6 2.3-1.52l3.92-8.94c.15-.33.22-.68.22-1.04z",
                    fill: "url(#product-icon-banking-Sticky-a)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11 25.5c0 .36.07.71.22 1.04l3.92 8.94c.4.93 1.3 1.52 2.3 1.52h20.04c1.4 0 2.52-1.14 2.52-2.56V16.56A2.54 2.54 0 0 0 37.48 14H17.44c-1 0-1.9.6-2.3 1.52l-3.92 8.94c-.15.33-.22.68-.22 1.04z",
                    fill: "#00D924"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M28.95 14a2.59 2.59 0 0 1-.17 1.54l-3.92 8.94c-.4.93-1.3 1.52-2.3 1.52H11.05a2.59 2.59 0 0 1 .17-1.54l3.92-8.94c.4-.93 1.3-1.52 2.3-1.52h11.51z",
                    fill: "url(#product-icon-banking-Sticky-b)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "product-icon-banking-Sticky-a",
                            x1: "14.5",
                            y1: "6.13",
                            x2: "14.5",
                            y2: "28.22",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#11EFE3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: ".35",
                                    stopColor: "#14E8E2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: ".86",
                                    stopColor: "#1ED6E1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#21CFE0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "product-icon-banking-Sticky-b",
                            x1: "25.31",
                            y1: "29.5",
                            x2: "25.31",
                            y2: "9",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#00D924"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#00A600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
            lineNumber: 143,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SolvynIcons.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = TreasuryIcon;
const AtlasIcon = ({ active, size = 48 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
        active: active,
        size: size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    clipPath: "url(#product-icon-atlas-a)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42 8.65 17.31a2.64 2.64 0 0 1-1.65 3.73l-.17.04c-.12.03-.24.04-.36.05h-.18L20.5 35.99 9.94 18.19l8.2-16.42A2.64 2.64 0 0 1 20.52.3z",
                            fill: "#FB0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42L20.5 35.98 3.65 39.33a2.64 2.64 0 0 1-2.37-3.83l8.66-17.3 8.2-16.43A2.64 2.64 0 0 1 20.52.3z",
                            fill: "url(#product-icon-atlas-b)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42L20.5 35.98 9.94 18.19l8.2-16.42A2.64 2.64 0 0 1 20.34.3h.18z",
                            fill: "url(#product-icon-atlas-c)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "product-icon-atlas-b",
                            x1: "16.03",
                            y1: "18.01",
                            x2: "15.94",
                            y2: "39.33",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#FFD748"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: ".54",
                                    stopColor: "#FFCD48"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#FFCB48"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "product-icon-atlas-c",
                            x1: "20.51",
                            y1: "34.72",
                            x2: "20.51",
                            y2: "15.01",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#FFAD00"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#FF7600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                            id: "product-icon-atlas-a",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "#fff",
                                d: "M0 0h40v40H0z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
            lineNumber: 195,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SolvynIcons.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = AtlasIcon;
const ElementsIcon = ({ active, size = 48 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
        active: active,
        size: size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2 10.02c0-.95.5-1.83 1.33-2.3L16.08.36a2.66 2.66 0 0 1 2.66 0l12.75 7.36a2.66 2.66 0 0 1 1.33 2.3v6l-5-2.89a2.66 2.66 0 0 0-2.66 0l-9.51 5.48a2.66 2.66 0 0 0-1.34 2.3v10.95c0 .9.45 1.72 1.19 2.21L3.33 27.05A2.66 2.66 0 0 1 2 24.75V10.02z",
                    fill: "url(#product-icon-elements-a)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15.5 34.07l.58.34c.82.48 1.84.48 2.66 0l12.75-7.36a2.66 2.66 0 0 0 1.33-2.3v-8.72l4.47 2.58a2.66 2.66 0 0 1 1.33 2.3v10.95c0 .95-.5 1.83-1.33 2.3l-9.48 5.48c-.82.48-1.83.48-2.65 0l-9.51-5.47-.15-.1z",
                    fill: "#96F"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32.82 16.03l-5-2.9a2.66 2.66 0 0 0-2.66 0l-9.51 5.48a2.66 2.66 0 0 0-1.34 2.3v10.95c0 .9.45 1.72 1.19 2.21l.58.34c.82.48 1.84.48 2.66 0l12.75-7.36a2.66 2.66 0 0 0 1.33-2.3v-8.72z",
                    fill: "url(#product-icon-elements-b)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "product-icon-elements-a",
                            x1: "17.41",
                            y1: "2.24",
                            x2: "17",
                            y2: "32.18",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#11EFE3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: ".33",
                                    stopColor: "#15E8E2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: ".74",
                                    stopColor: "#1FD3E0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#21CFE0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "product-icon-elements-b",
                            x1: "21.95",
                            y1: "40.81",
                            x2: "30.59",
                            y2: "9.56",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#0048E5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: ".64",
                                    stopColor: "#625AF5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#8A62FC"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
            lineNumber: 223,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SolvynIcons.tsx",
        lineNumber: 222,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = ElementsIcon;
const PaymentsIcon = ({ active, size = 48 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
        active: active,
        size: size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z",
                    fill: "url(#product-icon-payments-a)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 249,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z",
                    fill: "#96F"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z",
                    fill: "url(#product-icon-payments-b)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "product-icon-payments-a",
                            x1: "20",
                            y1: "4.13",
                            x2: "20",
                            y2: "21.13",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#11EFE3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#21CFE0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "product-icon-payments-b",
                            x1: "35",
                            y1: "11.28",
                            x2: "35",
                            y2: "28.72",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#0048E5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#9B66FF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 252,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
            lineNumber: 248,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SolvynIcons.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c6 = PaymentsIcon;
const WindmillIcon = ({ active, size = 48 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
        active: active,
        size: size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18 22 L22 22 L24 36 L16 36 Z",
                    fill: "url(#windmill-tower)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "20",
                    cy: "12",
                    r: "3",
                    fill: "url(#windmill-hub)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 12 L26 4 L28 6 L22 14 Z",
                    fill: "url(#windmill-blade)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 12 L12 6 L14 4 L22 10 Z",
                    fill: "url(#windmill-blade)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 280,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 12 L18 20 L16 20 L18 12 Z",
                    fill: "url(#windmill-blade)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "windmill-tower",
                            x1: "20",
                            y1: "22",
                            x2: "20",
                            y2: "36",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#A0A0A0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#C7C7C7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "windmill-hub",
                            x1: "20",
                            y1: "9",
                            x2: "20",
                            y2: "15",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#FFD748"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#FFC900"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "windmill-blade",
                            x1: "20",
                            y1: "4",
                            x2: "20",
                            y2: "20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#00B3FF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#0092D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 282,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
            lineNumber: 270,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SolvynIcons.tsx",
        lineNumber: 269,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c7 = WindmillIcon;
const SolarPanelIcon = ({ active, size = 48 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
        active: active,
        size: size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "30",
                    cy: "10",
                    r: "6",
                    fill: "url(#solar-sun)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 311,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "6",
                    y: "20",
                    width: "28",
                    height: "14",
                    rx: "2",
                    fill: "url(#solar-panel-surface)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6 25H34",
                    stroke: "url(#solar-panel-lines)",
                    strokeWidth: "1.2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6 30H34",
                    stroke: "url(#solar-panel-lines)",
                    strokeWidth: "1.2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 321,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 20V34",
                    stroke: "url(#solar-panel-lines)",
                    strokeWidth: "1.2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22 20V34",
                    stroke: "url(#solar-panel-lines)",
                    strokeWidth: "1.2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M30 20V34",
                    stroke: "url(#solar-panel-lines)",
                    strokeWidth: "1.2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 324,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "18",
                    y: "34",
                    width: "4",
                    height: "4",
                    fill: "url(#solar-panel-stand)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 325,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "solar-sun",
                            x1: "30",
                            y1: "4",
                            x2: "30",
                            y2: "16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#FFD748"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 328,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#FFC900"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "solar-panel-surface",
                            x1: "20",
                            y1: "20",
                            x2: "20",
                            y2: "34",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#1E4BFF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#1638C7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "solar-panel-lines",
                            x1: "20",
                            y1: "20",
                            x2: "20",
                            y2: "34",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#A9C8FF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#7AA3FF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "solar-panel-stand",
                            x1: "20",
                            y1: "34",
                            x2: "20",
                            y2: "38",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#8A8A8A"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 340,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#C5C5C5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 326,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
            lineNumber: 304,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SolvynIcons.tsx",
        lineNumber: 303,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c8 = SolarPanelIcon;
const BatteryIcon = ({ active, size = 48 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
        active: active,
        size: size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "6",
                    y: "10",
                    width: "26",
                    height: "18",
                    rx: "3",
                    fill: "url(#battery-body)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 359,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "32",
                    y: "15",
                    width: "4",
                    height: "8",
                    rx: "1",
                    fill: "url(#battery-cap)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 367,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "9",
                    y: "13",
                    width: "20",
                    height: "12",
                    rx: "2",
                    fill: "url(#battery-fill)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 375,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 14 L17 22 H20 L19 27 L24 20 H21 Z",
                    fill: "url(#battery-bolt)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "battery-body",
                            x1: "20",
                            y1: "10",
                            x2: "20",
                            y2: "28",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#444"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 389,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#777"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "battery-cap",
                            x1: "34",
                            y1: "15",
                            x2: "34",
                            y2: "23",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#888"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#BEBEBE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 392,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "battery-fill",
                            x1: "20",
                            y1: "13",
                            x2: "20",
                            y2: "25",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#00D924"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#00A81A"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 396,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "battery-bolt",
                            x1: "20",
                            y1: "14",
                            x2: "20",
                            y2: "27",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#FFD748"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 401,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#FFC900"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 400,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
            lineNumber: 352,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SolvynIcons.tsx",
        lineNumber: 351,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c9 = BatteryIcon;
const ForecastingSchedulingIcon = ({ active, size = 48 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
        active: active,
        size: size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6 28 L14 20 L22 24 L34 12",
                    stroke: "url(#fs-line)",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 420,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "28",
                    cy: "28",
                    r: "8",
                    fill: "url(#fs-clock)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 427,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M28 23 V28 L32 28",
                    stroke: "white",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 433,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "fs-line",
                            x1: "6",
                            y1: "12",
                            x2: "34",
                            y2: "28",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#00B3FF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 441,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#0092D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 442,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 440,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "fs-clock",
                            x1: "28",
                            y1: "20",
                            x2: "28",
                            y2: "36",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#FFD748"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 445,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#FFC900"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 444,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 439,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
            lineNumber: 413,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SolvynIcons.tsx",
        lineNumber: 412,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c10 = ForecastingSchedulingIcon;
const TradingDeckIcon = ({ active, size = 48 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
        active: active,
        size: size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "10",
                    y: "14",
                    width: "6",
                    height: "14",
                    rx: "1",
                    fill: "url(#td-green)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 464,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M13 10 V14",
                    stroke: "url(#td-green)",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 472,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "24",
                    y: "10",
                    width: "6",
                    height: "18",
                    rx: "1",
                    fill: "url(#td-red)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 478,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M27 6 V10",
                    stroke: "url(#td-red)",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 486,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6 30H34",
                    stroke: "url(#td-base)",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 492,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "td-green",
                            x1: "10",
                            y1: "10",
                            x2: "10",
                            y2: "28",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#00CB1B"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 500,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#00A817"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 501,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 499,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "td-red",
                            x1: "24",
                            y1: "6",
                            x2: "24",
                            y2: "28",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#FF5A5A"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 504,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#E63B3B"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 505,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 503,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "td-base",
                            x1: "6",
                            y1: "30",
                            x2: "34",
                            y2: "30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#A0A0A0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 508,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#C7C7C7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 509,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 507,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 498,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
            lineNumber: 457,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SolvynIcons.tsx",
        lineNumber: 456,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c11 = TradingDeckIcon;
const ReportingIcon = ({ active, size = 48 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
        active: active,
        size: size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "8",
                    y: "6",
                    width: "24",
                    height: "28",
                    rx: "3",
                    fill: "url(#rp-doc)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 527,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M28 6 L32 10 L28 10 Z",
                    fill: "url(#rp-fold)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 535,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "12",
                    y: "22",
                    width: "4",
                    height: "8",
                    fill: "url(#rp-bar)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 539,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "18",
                    y: "18",
                    width: "4",
                    height: "12",
                    fill: "url(#rp-bar)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 540,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "24",
                    y: "14",
                    width: "4",
                    height: "16",
                    fill: "url(#rp-bar)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 541,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 12H26",
                    stroke: "#ffffffaa",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 542,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 16H22",
                    stroke: "#ffffffaa",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 543,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "rp-doc",
                            x1: "20",
                            y1: "6",
                            x2: "20",
                            y2: "34",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#1E4BFF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 546,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#1638C7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 547,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 545,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "rp-fold",
                            x1: "28",
                            y1: "6",
                            x2: "32",
                            y2: "10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#A9C8FF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 550,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#7AA3FF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 551,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 549,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "rp-bar",
                            x1: "20",
                            y1: "14",
                            x2: "20",
                            y2: "30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#FFD748"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 554,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#FFC900"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 555,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 553,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 544,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
            lineNumber: 520,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SolvynIcons.tsx",
        lineNumber: 519,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c12 = ReportingIcon;
const BidOptimizationIcon = ({ active, size = 48 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
        active: active,
        size: size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 12 L22 12 L30 20 L20 30 L10 30 Z",
                    fill: "url(#bo-tag)",
                    stroke: "url(#bo-tag-stroke)",
                    strokeWidth: "1.5",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 573,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "14",
                    cy: "16",
                    r: "2.5",
                    fill: "white",
                    opacity: "0.85"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 580,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18 24 L24 18 L28 22",
                    stroke: "url(#bo-arrow)",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 581,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "bo-tag",
                            x1: "20",
                            y1: "12",
                            x2: "20",
                            y2: "30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0",
                                    stopColor: "#1E4BFF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 590,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#1638C7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 591,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 589,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "bo-tag-stroke",
                            x1: "20",
                            y1: "12",
                            x2: "20",
                            y2: "30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#A9C8FF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 594,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#7AA3FF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 595,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 593,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "bo-arrow",
                            x1: "18",
                            y1: "18",
                            x2: "28",
                            y2: "24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#00CB1B"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 598,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#00D924"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                                    lineNumber: 599,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                            lineNumber: 597,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/SolvynIcons.tsx",
                    lineNumber: 588,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/SolvynIcons.tsx",
            lineNumber: 566,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SolvynIcons.tsx",
        lineNumber: 565,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c13 = BidOptimizationIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "IconWrapper");
__turbopack_context__.k.register(_c1, "TaxIcon");
__turbopack_context__.k.register(_c2, "ClimateIcon");
__turbopack_context__.k.register(_c3, "TreasuryIcon");
__turbopack_context__.k.register(_c4, "AtlasIcon");
__turbopack_context__.k.register(_c5, "ElementsIcon");
__turbopack_context__.k.register(_c6, "PaymentsIcon");
__turbopack_context__.k.register(_c7, "WindmillIcon");
__turbopack_context__.k.register(_c8, "SolarPanelIcon");
__turbopack_context__.k.register(_c9, "BatteryIcon");
__turbopack_context__.k.register(_c10, "ForecastingSchedulingIcon");
__turbopack_context__.k.register(_c11, "TradingDeckIcon");
__turbopack_context__.k.register(_c12, "ReportingIcon");
__turbopack_context__.k.register(_c13, "BidOptimizationIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/SolvynIconNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SolvynIconNode",
    ()=>SolvynIconNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const SolvynIconNodeInner = ({ icon, IconComponent, svgIconSize, position, borderColor = "orange", isMobile = false, isTablet = false })=>{
    const isActive = icon.active;
    const activeBorderClass = borderColor === "orange" ? "border-orange-500 bg-orange-50 shadow-lg shadow-orange-500/50" : "border-purple-600 bg-purple-50 shadow-lg shadow-purple-600/50";
    const hoverBorderClass = borderColor === "orange" ? "group-hover:border-orange-400" : "group-hover:border-purple-500";
    // Responsive sizing
    const iconPadding = isMobile ? "p-1.5" : isTablet ? "p-2" : "p-2.5";
    const iconSize = isMobile ? "w-4 h-4" : isTablet ? "w-5 h-5" : "w-9 h-9";
    const labelSize = isMobile ? "text-[10px]" : isTablet ? "text-[10px] sm:text-[11px]" : "text-[11px]";
    const labelMaxWidth = isMobile ? "max-w-[120px]" : isTablet ? "max-w-[120px]" : "max-w-[100px]";
    const gapSize = isMobile ? "gap-1.5" : isTablet ? "gap-2" : "gap-2.5";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: icon.ref,
        className: `absolute flex flex-col items-center ${gapSize} cursor-pointer group z-10`,
        style: position,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-beam-target": true,
                className: `relative ${iconPadding} rounded-xl border-2 transition-all duration-500 flex items-center justify-center ${isActive ? activeBorderClass : `border-gray-200 bg-white ${hoverBorderClass}`}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${iconSize} flex items-center justify-center`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                        active: isActive,
                        size: svgIconSize
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SolvynIconNode.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SolvynIconNode.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SolvynIconNode.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${labelSize} font-semibold text-center text-gray-900 ${labelMaxWidth} leading-tight px-1.5 sm:px-2 py-0.5 whitespace-normal break-words bg-white/80 backdrop-blur-sm rounded-md shadow-sm`,
                children: icon.label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SolvynIconNode.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/SolvynIconNode.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SolvynIconNodeInner;
const SolvynIconNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(SolvynIconNodeInner);
_c1 = SolvynIconNode;
var _c, _c1;
__turbopack_context__.k.register(_c, "SolvynIconNodeInner");
__turbopack_context__.k.register(_c1, "SolvynIconNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/solvynUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Helper function to create straight paths with rounded corners
__turbopack_context__.s([
    "createCurvedPath",
    ()=>createCurvedPath,
    "createLinearPath",
    ()=>createLinearPath,
    "createSmoothCurvedPath",
    ()=>createSmoothCurvedPath
]);
const createCurvedPath = (x1, y1, x2, y2)=>{
    const dx = x2 - x1;
    const dy = y2 - y1;
    // Create a path that goes horizontally first, then vertically (L-shaped with rounded corner)
    const midX = x1 + dx * 0.5;
    const midY = y1 + dy * 0.5;
    // Use rounded corners instead of sharp angles
    const cornerRadius = 15;
    // Calculate distances
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    if (absDx > cornerRadius * 2 && absDy > cornerRadius * 2) {
        // Determine direction
        const dirX = dx > 0 ? 1 : -1;
        const dirY = dy > 0 ? 1 : -1;
        // Path goes: start -> horizontal -> rounded corner -> vertical -> end
        const cornerX = midX;
        const cornerY1 = y1 + dirY * cornerRadius;
        const cornerY2 = y2 - dirY * cornerRadius;
        return `M ${x1} ${y1} L ${cornerX - dirX * cornerRadius} ${y1} Q ${cornerX} ${y1} ${cornerX} ${cornerY1} L ${cornerX} ${cornerY2} Q ${cornerX} ${y2} ${cornerX + dirX * cornerRadius} ${y2} L ${x2} ${y2}`;
    } else {
        // Fallback to simple straight line for very short distances
        return `M ${x1} ${y1} L ${x2} ${y2}`;
    }
};
const createSmoothCurvedPath = (x1, y1, x2, y2, curvature = 0.3 // Controls how quickly the line eases into vertical (0 = straight, higher = more vertical at endpoints)
)=>{
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 10) {
        return `M ${x1} ${y1} L ${x2} ${y2}`;
    }
    // Vertical offset for control points. Using |dy| (instead of total distance)
    // keeps the curve well-behaved when the target is mostly below the origin,
    // which is exactly the layout we have (logo above, icons below).
    const verticalReach = Math.max(Math.abs(dy) * (0.4 + curvature), 40);
    // Control point 1 sits directly below the origin -> line leaves the logo
    // flowing straight down.
    const c1x = x1;
    const c1y = y1 + verticalReach;
    // Control point 2 sits directly above the target -> line enters the icon
    // flowing straight down into its top edge.
    const c2x = x2;
    const c2y = y2 - verticalReach;
    return `M ${x1} ${y1} C ${c1x} ${c1y} ${c2x} ${c2y} ${x2} ${y2}`;
};
const createLinearPath = (x1, y1, x2, y2)=>{
    const dx = x2 - x1;
    const dy = y2 - y1;
    // Create an L-shaped path: horizontal first, then vertical (with rounded corner)
    const midX = x1 + dx * 0.5;
    const cornerRadius = 15;
    // Calculate distances
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    if (absDx > cornerRadius * 2 && absDy > cornerRadius * 2) {
        // Determine direction
        const dirX = dx > 0 ? 1 : -1;
        const dirY = dy > 0 ? 1 : -1;
        // Path goes: start -> horizontal -> rounded corner -> vertical -> end
        const cornerX = midX;
        const cornerY1 = y1 + dirY * cornerRadius;
        const cornerY2 = y2 - dirY * cornerRadius;
        return `M ${x1} ${y1} L ${cornerX - dirX * cornerRadius} ${y1} Q ${cornerX} ${y1} ${cornerX} ${cornerY1} L ${cornerX} ${cornerY2} Q ${cornerX} ${y2} ${cornerX + dirX * cornerRadius} ${y2} L ${x2} ${y2}`;
    } else {
        // Fallback to simple straight line for very short distances
        return `M ${x1} ${y1} L ${x2} ${y2}`;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/SolvynBeams.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SolvynBeams",
    ()=>SolvynBeams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$solvynUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/solvynUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
/** Matches `ServicesAnimation` beam strokes (`LINE` + opacity). */ const BEAM_LINE = "#9CA3AF";
const BEAM_LINE_OPACITY = 0.45;
/** Hub pulse — matches Services `ACCENT`. */ const BEAM_ACCENT = "#FF7F00";
const SolvynBeamsInner = ({ points, containerRef, pathRefs, beamRefs, isMobile = false, isTablet = false })=>{
    _s();
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 700,
        height: 700
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SolvynBeamsInner.useEffect": ()=>{
            const updateDimensions = {
                "SolvynBeamsInner.useEffect.updateDimensions": ()=>{
                    if (containerRef.current) {
                        const rect = containerRef.current.getBoundingClientRect();
                        if (rect.width > 0 && rect.height > 0) {
                            setDimensions({
                                width: rect.width,
                                height: rect.height
                            });
                        }
                    }
                }
            }["SolvynBeamsInner.useEffect.updateDimensions"];
            updateDimensions();
            window.addEventListener("resize", updateDimensions);
            // Update when points change (icons might have moved)
            const timeoutId = setTimeout(updateDimensions, 100);
            return ({
                "SolvynBeamsInner.useEffect": ()=>{
                    window.removeEventListener("resize", updateDimensions);
                    clearTimeout(timeoutId);
                }
            })["SolvynBeamsInner.useEffect"];
        }
    }["SolvynBeamsInner.useEffect"], [
        containerRef,
        points
    ]);
    if (!points) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "absolute inset-0 w-full h-full pointer-events-none z-0",
        viewBox: `0 0 ${dimensions.width} ${dimensions.height}`,
        preserveAspectRatio: "none",
        children: points && points.targets.map((target, i)=>{
            // Per-target origin override so that beams can emanate from the
            // left or right edge of the central logo depending on which side
            // the icon sits on. Falls back to `points.origin` for layouts
            // that don't need this (e.g. the Services beams).
            const originPoint = points.originsPerTarget?.[i] ?? points.origin;
            const pathD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$solvynUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCurvedPath"])(originPoint.x, originPoint.y, target.x, target.y);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: pathD,
                        stroke: BEAM_LINE,
                        strokeOpacity: BEAM_LINE_OPACITY,
                        strokeWidth: 1,
                        strokeLinecap: "round",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SolvynBeams.tsx",
                        lineNumber: 72,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        ref: (el)=>{
                            if (!el) return;
                            pathRefs.current[i] = el;
                        },
                        d: pathD,
                        stroke: "transparent",
                        strokeWidth: isMobile ? 1 : isTablet ? 1.25 : 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        fill: "none",
                        opacity: 0
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SolvynBeams.tsx",
                        lineNumber: 82,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        ref: (el)=>{
                            if (!el) return;
                            beamRefs.current[i].pulse = el;
                        },
                        r: isMobile ? 3 : isTablet ? 3.5 : 4,
                        fill: BEAM_ACCENT,
                        opacity: 0,
                        style: {
                            filter: "drop-shadow(0 0 6px rgba(255, 127, 0, 0.45))"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SolvynBeams.tsx",
                        lineNumber: 97,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, `line-${i}`, true, {
                fileName: "[project]/src/components/ui/SolvynBeams.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SolvynBeams.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SolvynBeamsInner, "aSbubz9LNCXj/IHL7svEQTNvfkw=");
_c = SolvynBeamsInner;
const SolvynBeams = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(SolvynBeamsInner);
_c1 = SolvynBeams;
var _c, _c1;
__turbopack_context__.k.register(_c, "SolvynBeamsInner");
__turbopack_context__.k.register(_c1, "SolvynBeams");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/types/solvynTypes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BEAM_SPEED",
    ()=>BEAM_SPEED,
    "ICON_SIZE",
    ()=>ICON_SIZE,
    "TOUCH_THRESHOLD",
    ()=>TOUCH_THRESHOLD
]);
const ICON_SIZE = 48;
const BEAM_SPEED = 0.2; // Speed of pulse animation (increased for faster movement)
const TOUCH_THRESHOLD = 25;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSolvynAnimation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSolvynAnimation",
    ()=>useSolvynAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$solvynTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/solvynTypes.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
// Staggered delays: top row (0,1) together, then 2-11 one by one
// Delay between each icon after top row: 0.15 seconds
const getInitialDelay = (index)=>{
    if (index === 0 || index === 1) return 0; // Top row starts together
    return 0.15 * (index - 1); // Each subsequent icon starts 0.15s after the previous
};
const useSolvynAnimation = ({ points, pathRefs, beamRefs, progressRefs, setIcons, enabled = true })=>{
    _s();
    const lastTimestampRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(points);
    const iconActivationTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const ACTIVE_DURATION = 800; // Keep icons active for 800ms after pulse passes
    const pathLengthsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Tracks the last computed active-state per icon index so we can skip
    // invoking the React state setter entirely when nothing changed. Calling
    // setIcons 60x/s (even when it bails out) was still scheduling work on the
    // React scheduler every frame.
    const activeStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Array(12).fill(false));
    // Update points ref when points change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSolvynAnimation.useEffect": ()=>{
            pointsRef.current = points;
        }
    }["useSolvynAnimation.useEffect"], [
        points
    ]);
    const checkProximityAndSetActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSolvynAnimation.useCallback[checkProximityAndSetActive]": (beamPositions)=>{
            const currentPoints = pointsRef.current;
            if (!currentPoints) return;
            const currentTime = Date.now();
            const targets = currentPoints.targets;
            const prevActive = activeStateRef.current;
            let anyChanged = false;
            const nextActive = new Array(targets.length);
            const thresholdSq = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$solvynTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOUCH_THRESHOLD"] * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$solvynTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOUCH_THRESHOLD"];
            for(let idx = 0; idx < targets.length; idx++){
                const pt = targets[idx];
                if (!pt) {
                    nextActive[idx] = prevActive[idx] ?? false;
                    continue;
                }
                let wasTouched = false;
                for(let b = 0; b < beamPositions.length; b++){
                    const beamPos = beamPositions[b];
                    const dx = pt.x - beamPos.x;
                    const dy = pt.y - beamPos.y;
                    if (dx * dx + dy * dy <= thresholdSq) {
                        wasTouched = true;
                        iconActivationTimeRef.current.set(idx, currentTime);
                        break;
                    }
                }
                let isActive = wasTouched;
                if (!wasTouched) {
                    const lastActivation = iconActivationTimeRef.current.get(idx);
                    if (lastActivation && currentTime - lastActivation < ACTIVE_DURATION) {
                        isActive = true;
                    } else if (lastActivation) {
                        iconActivationTimeRef.current.delete(idx);
                    }
                }
                nextActive[idx] = isActive;
                if (prevActive[idx] !== isActive) anyChanged = true;
            }
            if (!anyChanged) return;
            activeStateRef.current = nextActive;
            setIcons({
                "useSolvynAnimation.useCallback[checkProximityAndSetActive]": (prev)=>{
                    let mutated = false;
                    const newIcons = prev.map({
                        "useSolvynAnimation.useCallback[checkProximityAndSetActive].newIcons": (ic, idx)=>{
                            const isActive = nextActive[idx];
                            if (ic.active === isActive) return ic;
                            mutated = true;
                            return {
                                ...ic,
                                active: isActive
                            };
                        }
                    }["useSolvynAnimation.useCallback[checkProximityAndSetActive].newIcons"]);
                    return mutated ? newIcons : prev;
                }
            }["useSolvynAnimation.useCallback[checkProximityAndSetActive]"]);
        }
    }["useSolvynAnimation.useCallback[checkProximityAndSetActive]"], [
        setIcons
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSolvynAnimation.useEffect": ()=>{
            if (!enabled || !points || points.targets.length < 12) return;
            // Reset start time when points change
            startTimeRef.current = Date.now();
            // Measure path lengths when points change (used for pulse motion along each path).
            const measurePathLengths = {
                "useSolvynAnimation.useEffect.measurePathLengths": ()=>{
                    pathLengthsRef.current = pathRefs.current.map({
                        "useSolvynAnimation.useEffect.measurePathLengths": (path)=>{
                            if (!path) return 0;
                            try {
                                return path.getTotalLength();
                            } catch  {
                                return 0;
                            }
                        }
                    }["useSolvynAnimation.useEffect.measurePathLengths"]);
                }
            }["useSolvynAnimation.useEffect.measurePathLengths"];
            // Initial measurement + one short follow-up in case refs aren't ready
            // on first run. Previous versions used 4 staggered timers which was
            // wasteful — a single 200ms follow-up is enough.
            measurePathLengths();
            const timeoutIds = [
                setTimeout(measurePathLengths, 200)
            ];
            let rafId = 0;
            const step = {
                "useSolvynAnimation.useEffect.step": ()=>{
                    const activePaths = pathRefs.current;
                    if (activePaths.length === 0) {
                        rafId = requestAnimationFrame(step);
                        return;
                    }
                    const currentTime = (Date.now() - (startTimeRef.current || 0)) / 1000;
                    const beamPositions = [];
                    for(let pathIndex = 0; pathIndex < activePaths.length; pathIndex++){
                        const path = activePaths[pathIndex];
                        if (!path) continue;
                        try {
                            const pathLength = pathLengthsRef.current[pathIndex];
                            if (!pathLength) continue;
                            const initialDelay = getInitialDelay(pathIndex);
                            const adjustedTime = currentTime - initialDelay;
                            const beamRef = beamRefs.current[pathIndex];
                            const pulse = beamRef?.pulse;
                            if (adjustedTime <= 0) {
                                if (pulse) pulse.setAttributeNS(null, "opacity", "0");
                                continue;
                            }
                            const distancePerSec = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$solvynTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAM_SPEED"] * pathLength;
                            const headDistance = adjustedTime * distancePerSec % pathLength;
                            progressRefs.current[pathIndex] = headDistance / pathLength;
                            if (pulse) {
                                const pulsePoint = path.getPointAtLength(headDistance);
                                pulse.setAttributeNS(null, "cx", String(pulsePoint.x));
                                pulse.setAttributeNS(null, "cy", String(pulsePoint.y));
                                pulse.setAttributeNS(null, "opacity", "1");
                                beamPositions.push(pulsePoint);
                            }
                        } catch (e) {
                            console.error("Error animating beam:", e);
                        }
                    }
                    checkProximityAndSetActive(beamPositions);
                    rafId = requestAnimationFrame(step);
                }
            }["useSolvynAnimation.useEffect.step"];
            rafId = requestAnimationFrame(step);
            return ({
                "useSolvynAnimation.useEffect": ()=>{
                    if (rafId) cancelAnimationFrame(rafId);
                    timeoutIds.forEach({
                        "useSolvynAnimation.useEffect": (id)=>clearTimeout(id)
                    }["useSolvynAnimation.useEffect"]);
                    lastTimestampRef.current = null;
                }
            })["useSolvynAnimation.useEffect"];
        }
    }["useSolvynAnimation.useEffect"], [
        enabled,
        points,
        pathRefs,
        beamRefs,
        progressRefs,
        checkProximityAndSetActive
    ]);
};
_s(useSolvynAnimation, "CjNkx98dwnR4GOBdXbXsw2d/XLY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/useDiagramAnimationReady.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDiagramAnimationReady",
    ()=>useDiagramAnimationReady
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useDiagramAnimationReady(mounted, imageSlotCount) {
    _s();
    const [fontsReady, setFontsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadedMask, setLoadedMask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [flushReady, setFlushReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [forcedReady, setForcedReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDiagramAnimationReady.useEffect": ()=>{
            let cancelled = false;
            if (document.fonts?.ready) {
                void document.fonts.ready.then({
                    "useDiagramAnimationReady.useEffect": ()=>{
                        if (!cancelled) setFontsReady(true);
                    }
                }["useDiagramAnimationReady.useEffect"]);
            } else {
                setFontsReady(true);
            }
            return ({
                "useDiagramAnimationReady.useEffect": ()=>{
                    cancelled = true;
                }
            })["useDiagramAnimationReady.useEffect"];
        }
    }["useDiagramAnimationReady.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDiagramAnimationReady.useEffect": ()=>{
            const t = setTimeout({
                "useDiagramAnimationReady.useEffect.t": ()=>setForcedReady(true)
            }["useDiagramAnimationReady.useEffect.t"], 10_000);
            return ({
                "useDiagramAnimationReady.useEffect": ()=>clearTimeout(t)
            })["useDiagramAnimationReady.useEffect"];
        }
    }["useDiagramAnimationReady.useEffect"], []);
    const markDiagramImageLoaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDiagramAnimationReady.useCallback[markDiagramImageLoaded]": (slotIndex)=>{
            setLoadedMask({
                "useDiagramAnimationReady.useCallback[markDiagramImageLoaded]": (prev)=>prev | 1 << slotIndex
            }["useDiagramAnimationReady.useCallback[markDiagramImageLoaded]"]);
        }
    }["useDiagramAnimationReady.useCallback[markDiagramImageLoaded]"], []);
    const allImagesLoaded = imageSlotCount <= 0 ? true : loadedMask === (1 << imageSlotCount) - 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDiagramAnimationReady.useEffect": ()=>{
            if (!mounted || !fontsReady || !allImagesLoaded) {
                setFlushReady(false);
                return;
            }
            let cancelled = false;
            let raf0 = 0;
            let raf1 = 0;
            raf0 = requestAnimationFrame({
                "useDiagramAnimationReady.useEffect": ()=>{
                    raf1 = requestAnimationFrame({
                        "useDiagramAnimationReady.useEffect": ()=>{
                            if (!cancelled) setFlushReady(true);
                        }
                    }["useDiagramAnimationReady.useEffect"]);
                }
            }["useDiagramAnimationReady.useEffect"]);
            return ({
                "useDiagramAnimationReady.useEffect": ()=>{
                    cancelled = true;
                    cancelAnimationFrame(raf0);
                    cancelAnimationFrame(raf1);
                }
            })["useDiagramAnimationReady.useEffect"];
        }
    }["useDiagramAnimationReady.useEffect"], [
        mounted,
        fontsReady,
        allImagesLoaded
    ]);
    const animationReady = mounted && (forcedReady || fontsReady && allImagesLoaded && flushReady);
    return {
        animationReady,
        markDiagramImageLoaded
    };
}
_s(useDiagramAnimationReady, "/RuL/BaBu9ffkJUyqp7r2gLonMU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Solvyn.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Solvyn",
    ()=>Solvyn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SolvynIcons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynIconNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SolvynIconNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynBeams$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SolvynBeams.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSolvynAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSolvynAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDiagramAnimationReady$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useDiagramAnimationReady.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EdgeLines.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CtaHoverArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CtaHoverArrow.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const ICON_CONFIG = [
    {
        id: "tax",
        label: "Merchant Services",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaxIcon"]
    },
    {
        id: "climate",
        label: "Energy Portfolio Management",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClimateIcon"]
    },
    {
        id: "treasury",
        label: "Ancillary Services",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreasuryIcon"]
    },
    {
        id: "elements",
        label: "Work Order Management",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementsIcon"]
    },
    {
        id: "payments",
        label: "Grid Code Adherence",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentsIcon"]
    },
    {
        id: "windmill",
        label: "Wind",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WindmillIcon"]
    },
    {
        id: "solar",
        label: "Solar",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolarPanelIcon"]
    },
    {
        id: "battery",
        label: "BESS",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BatteryIcon"]
    },
    {
        id: "forecasting",
        label: "Forecasting and Scheduling",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForecastingSchedulingIcon"]
    },
    {
        id: "trading",
        label: "Trading Desk",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TradingDeckIcon"]
    },
    {
        id: "reporting",
        label: "Smart Analytics & Reporting",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReportingIcon"]
    },
    {
        id: "bidopt",
        label: "Bid Optimization",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BidOptimizationIcon"]
    }
];
// Desktop: 6×2 columns — ~5%, ~21%, ~37%, ~53%, ~69%, ~85%
const ICON_POSITIONS_DESKTOP = [
    {
        top: "5%",
        left: "3%",
        delay: 0.6,
        borderColor: "orange"
    },
    {
        top: "5%",
        right: "3%",
        delay: 0.7,
        borderColor: "orange"
    },
    {
        top: "21%",
        left: "3%",
        delay: 0.8,
        borderColor: "orange"
    },
    {
        top: "21%",
        right: "3%",
        delay: 1.0,
        borderColor: "orange"
    },
    {
        top: "37%",
        left: "3%",
        delay: 1.1,
        borderColor: "orange"
    },
    {
        top: "37%",
        right: "5%",
        delay: 1.2,
        borderColor: "orange"
    },
    {
        top: "53%",
        left: "5%",
        delay: 1.3,
        borderColor: "orange"
    },
    {
        top: "53%",
        right: "5%",
        delay: 1.4,
        borderColor: "orange"
    },
    {
        top: "69%",
        left: "3%",
        delay: 1.5,
        borderColor: "orange"
    },
    {
        top: "69%",
        right: "4%",
        delay: 1.6,
        borderColor: "orange"
    },
    {
        top: "85%",
        left: "3%",
        delay: 1.7,
        borderColor: "orange"
    },
    {
        top: "85%",
        right: "3%",
        delay: 1.8,
        borderColor: "orange"
    }
];
const ICON_POSITIONS_MOBILE = [
    {
        top: "5%",
        left: "2%",
        delay: 0.6,
        borderColor: "orange"
    },
    {
        top: "5%",
        right: "2%",
        delay: 0.7,
        borderColor: "orange"
    },
    {
        top: "20%",
        left: "2%",
        delay: 0.8,
        borderColor: "orange"
    },
    {
        top: "20%",
        right: "2%",
        delay: 1.0,
        borderColor: "orange"
    },
    {
        top: "35%",
        left: "0%",
        delay: 1.1,
        borderColor: "orange"
    },
    {
        top: "35%",
        right: "13%",
        delay: 1.2,
        borderColor: "orange"
    },
    {
        top: "50%",
        left: "9%",
        delay: 1.3,
        borderColor: "orange"
    },
    {
        top: "50%",
        right: "13%",
        delay: 1.4,
        borderColor: "orange"
    },
    {
        top: "65%",
        left: "-2%",
        delay: 1.5,
        borderColor: "orange"
    },
    {
        top: "65%",
        right: "9%",
        delay: 1.6,
        borderColor: "orange"
    },
    {
        top: "80%",
        left: "-2%",
        delay: 1.7,
        borderColor: "orange"
    },
    {
        top: "80%",
        right: "7%",
        delay: 1.8,
        borderColor: "orange"
    }
];
const extractPositions = (rows)=>rows.map(({ delay: _d, borderColor: _b, ...rest })=>rest);
const POSITIONS_DESKTOP_STABLE = extractPositions(ICON_POSITIONS_DESKTOP);
_c = POSITIONS_DESKTOP_STABLE;
const POSITIONS_MOBILE_STABLE = extractPositions(ICON_POSITIONS_MOBILE);
_c1 = POSITIONS_MOBILE_STABLE;
const Solvyn = ()=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sgridsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isMobile: false,
        isTablet: false,
        mounted: false
    });
    const { isMobile, isTablet, mounted } = screen;
    const { animationReady: beamAnimationReady, markDiagramImageLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDiagramAnimationReady$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDiagramAnimationReady"])(mounted, 1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Solvyn.useEffect": ()=>{
            const compute = {
                "Solvyn.useEffect.compute": ()=>{
                    const width = window.innerWidth;
                    const nextMobile = width < 640;
                    const nextTablet = width >= 640 && width < 1024;
                    setScreen({
                        "Solvyn.useEffect.compute": (prev)=>prev.isMobile === nextMobile && prev.isTablet === nextTablet && prev.mounted ? prev : {
                                isMobile: nextMobile,
                                isTablet: nextTablet,
                                mounted: true
                            }
                    }["Solvyn.useEffect.compute"]);
                }
            }["Solvyn.useEffect.compute"];
            compute();
            let rafId = 0;
            const onResize = {
                "Solvyn.useEffect.onResize": ()=>{
                    if (rafId) return;
                    rafId = requestAnimationFrame({
                        "Solvyn.useEffect.onResize": ()=>{
                            rafId = 0;
                            compute();
                        }
                    }["Solvyn.useEffect.onResize"]);
                }
            }["Solvyn.useEffect.onResize"];
            window.addEventListener("resize", onResize);
            return ({
                "Solvyn.useEffect": ()=>{
                    window.removeEventListener("resize", onResize);
                    if (rafId) cancelAnimationFrame(rafId);
                }
            })["Solvyn.useEffect"];
        }
    }["Solvyn.useEffect"], []);
    const iconRefsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(ICON_CONFIG.map({
        "Solvyn.useRef[iconRefsRef]": ()=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef()
    }["Solvyn.useRef[iconRefsRef]"]));
    const iconRefs = iconRefsRef.current;
    const [icons, setIcons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ICON_CONFIG.map({
        "Solvyn.useState": (config, idx)=>({
                id: config.id,
                label: config.label,
                ref: iconRefs[idx],
                active: false
            })
    }["Solvyn.useState"]));
    const [points, setPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const ICON_POSITIONS = isMobile || isTablet ? ICON_POSITIONS_MOBILE : ICON_POSITIONS_DESKTOP;
    const stablePositions = isMobile || isTablet ? POSITIONS_MOBILE_STABLE : POSITIONS_DESKTOP_STABLE;
    const containerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Solvyn.useMemo[containerStyle]": ()=>({
                height: isMobile || isTablet ? "min(100vh, 700px)" : "min(90vh, 900px)",
                maxHeight: isMobile ? "700px" : isTablet ? "850px" : "900px",
                minHeight: isMobile ? "560px" : isTablet ? "640px" : "680px"
            })
    }["Solvyn.useMemo[containerStyle]"], [
        isMobile,
        isTablet
    ]);
    const svgIconSize = isMobile ? 16 : isTablet ? 20 : 36;
    const pathRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const beamRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Array.from({
        length: 12
    }, {
        "Solvyn.useRef[beamRefs]": ()=>({
                circle: null,
                core: null,
                pulse: null
            })
    }["Solvyn.useRef[beamRefs]"]));
    const progressRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([
        0,
        0.091,
        0.182,
        0.273,
        0.364,
        0.455,
        0.545,
        0.636,
        0.727,
        0.818,
        0.909,
        1.0
    ]);
    const measure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Solvyn.useCallback[measure]": ()=>{
            const container = containerRef.current;
            const sgridsEl = sgridsRef.current;
            if (!container || !sgridsEl) return;
            const containerRect = container.getBoundingClientRect();
            if (containerRect.width === 0 || containerRect.height === 0) return;
            const sgridsRect = sgridsEl.getBoundingClientRect();
            if (sgridsRect.width === 0 || sgridsRect.height === 0) return;
            const logoCenterY = sgridsRect.top + sgridsRect.height / 2 - containerRect.top;
            const leftEdge = {
                x: sgridsRect.left - containerRect.left,
                y: logoCenterY
            };
            const rightEdge = {
                x: sgridsRect.right - containerRect.left,
                y: logoCenterY
            };
            const logoCenterX = sgridsRect.left + sgridsRect.width / 2 - containerRect.left;
            const targets = [];
            const originsPerTarget = [];
            for (const ref of iconRefs){
                const el = ref.current;
                if (!el) continue;
                const targetEl = el.querySelector("[data-beam-target]") || el;
                const r = targetEl.getBoundingClientRect();
                if (r.width === 0 && r.height === 0) continue;
                const iconCenterY = r.top + r.height / 2 - containerRect.top;
                const iconCenterX = r.left + r.width / 2 - containerRect.left;
                const isLeftSide = iconCenterX < logoCenterX;
                if (isLeftSide) {
                    targets.push({
                        x: r.right - containerRect.left,
                        y: iconCenterY
                    });
                    originsPerTarget.push(leftEdge);
                } else {
                    targets.push({
                        x: r.left - containerRect.left,
                        y: iconCenterY
                    });
                    originsPerTarget.push(rightEdge);
                }
            }
            if (targets.length !== 12) return;
            const origin = {
                x: logoCenterX,
                y: logoCenterY
            };
            setPoints({
                "Solvyn.useCallback[measure]": (prevPoints)=>{
                    const tolerance = 1;
                    if (prevPoints && prevPoints.originsPerTarget && prevPoints.originsPerTarget.length === originsPerTarget.length) {
                        const originChanged = Math.abs(prevPoints.origin.x - origin.x) > tolerance || Math.abs(prevPoints.origin.y - origin.y) > tolerance;
                        const targetsChanged = prevPoints.targets.some({
                            "Solvyn.useCallback[measure].targetsChanged": (t, i)=>{
                                const n = targets[i];
                                if (!n) return true;
                                return Math.abs(t.x - n.x) > tolerance || Math.abs(t.y - n.y) > tolerance;
                            }
                        }["Solvyn.useCallback[measure].targetsChanged"]);
                        const originsChanged = prevPoints.originsPerTarget.some({
                            "Solvyn.useCallback[measure].originsChanged": (o, i)=>{
                                const n = originsPerTarget[i];
                                if (!n) return true;
                                return Math.abs(o.x - n.x) > tolerance || Math.abs(o.y - n.y) > tolerance;
                            }
                        }["Solvyn.useCallback[measure].originsChanged"]);
                        if (!originChanged && !targetsChanged && !originsChanged) return prevPoints;
                    }
                    return {
                        origin,
                        targets,
                        originsPerTarget
                    };
                }
            }["Solvyn.useCallback[measure]"]);
        }
    }["Solvyn.useCallback[measure]"], [
        iconRefs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Solvyn.useEffect": ()=>{
            if (!mounted) return;
            let pendingRaf = 0;
            const scheduleMeasure = {
                "Solvyn.useEffect.scheduleMeasure": ()=>{
                    if (pendingRaf) return;
                    pendingRaf = requestAnimationFrame({
                        "Solvyn.useEffect.scheduleMeasure": ()=>{
                            pendingRaf = 0;
                            measure();
                        }
                    }["Solvyn.useEffect.scheduleMeasure"]);
                }
            }["Solvyn.useEffect.scheduleMeasure"];
            const resizeObserver = new ResizeObserver(scheduleMeasure);
            if (containerRef.current) resizeObserver.observe(containerRef.current);
            if (sgridsRef.current) resizeObserver.observe(sgridsRef.current);
            iconRefs.forEach({
                "Solvyn.useEffect": (ref)=>{
                    if (ref.current) resizeObserver.observe(ref.current);
                }
            }["Solvyn.useEffect"]);
            const intersectionObserver = new IntersectionObserver({
                "Solvyn.useEffect": (entries)=>{
                    if (entries[0]?.isIntersecting) scheduleMeasure();
                }
            }["Solvyn.useEffect"], {
                threshold: 0.1
            });
            if (containerRef.current) intersectionObserver.observe(containerRef.current);
            scheduleMeasure();
            const timers = [
                setTimeout(scheduleMeasure, 150),
                setTimeout(scheduleMeasure, 500),
                setTimeout(scheduleMeasure, 1200)
            ];
            return ({
                "Solvyn.useEffect": ()=>{
                    resizeObserver.disconnect();
                    intersectionObserver.disconnect();
                    if (pendingRaf) cancelAnimationFrame(pendingRaf);
                    timers.forEach({
                        "Solvyn.useEffect": (t)=>clearTimeout(t)
                    }["Solvyn.useEffect"]);
                }
            })["Solvyn.useEffect"];
        }
    }["Solvyn.useEffect"], [
        measure,
        isMobile,
        isTablet,
        mounted,
        iconRefs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSolvynAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSolvynAnimation"])({
        points,
        pathRefs,
        beamRefs,
        progressRefs,
        setIcons,
        enabled: beamAnimationReady
    });
    const logoFrame = isMobile ? "w-12 h-12 sm:w-16 sm:h-16" : isTablet ? "w-16 h-16 md:w-20 md:h-20" : "w-20 h-20 md:w-24 md:h-24";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "solvyn",
        "data-snap-section": true,
        className: "relative w-full overflow-hidden px-4 sm:px-6 py-16 sm:py-20 md:py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgeLines"], {}, void 0, false, {
                fileName: "[project]/src/components/sections/Solvyn.tsx",
                lineNumber: 313,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-10 lg:gap-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start gap-4 sm:gap-6 max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600",
                                children: "The Solvyn architecture"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Solvyn.tsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-sans font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight",
                                children: "From field data to actionable intelligence"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Solvyn.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-gray-900",
                                        children: "Solvyn"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " unifies SCADA, EMS, PPC, EPM, and intelligent bidding into one AI-driven layer — built for solar, wind, BESS, hybrid, and green hydrogen operations."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Solvyn.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/solvyn/solvyn-x",
                                className: " group inline-flex items-center justify-center gap-0.5 font-sans font-bold text-sm sm:text-base md:text-lg px-[20px] py-[10px] whitespace-nowrap rounded-[8px] bg-transparent border border-[#FF7F00] text-[#FF7F00] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#FF7F00]/10 hover:shadow-sm active:translate-y-px ",
                                children: [
                                    "Explore Solvyn",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CtaHoverArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaHoverArrow"], {}, void 0, false, {
                                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Solvyn.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-5xl mx-auto rounded-2xl bg-gray-50/40 px-3 py-6 sm:px-5 sm:py-8 md:py-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: containerRef,
                            className: "relative flex items-center justify-center w-full mx-auto",
                            style: containerStyle,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2 sm:gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: sgridsRef,
                                            className: `relative rounded-2xl bg-[#FF7F00] p-[2px] shadow-lg shadow-orange-500/15 transition-all duration-500 group ${logoFrame}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full rounded-2xl bg-white flex items-center justify-center p-2 sm:p-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    alt: "SGrids logo",
                                                    width: isMobile ? 40 : isTablet ? 60 : 80,
                                                    height: isMobile ? 40 : isTablet ? 60 : 80,
                                                    src: "/sgrids.svg",
                                                    onLoad: ()=>markDiagramImageLoaded(0),
                                                    className: "w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Solvyn.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Solvyn.tsx",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Solvyn.tsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-lg border border-[#FF7F00]/25 bg-white shadow-sm ${isMobile ? "px-2 py-1" : "px-4 py-2"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-bold text-[#FF7F00] ${isMobile ? "text-sm" : "text-lg"}`,
                                                children: "Solvyn"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Solvyn.tsx",
                                                lineNumber: 373,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Solvyn.tsx",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Solvyn.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                icons.map((icon, idx)=>{
                                    const config = ICON_CONFIG[idx];
                                    const positionData = ICON_POSITIONS[idx];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynIconNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolvynIconNode"], {
                                        icon: icon,
                                        IconComponent: config.component,
                                        svgIconSize: svgIconSize,
                                        position: stablePositions[idx],
                                        animationDelay: positionData.delay,
                                        borderColor: positionData.borderColor,
                                        isMobile: isMobile,
                                        isTablet: isTablet
                                    }, icon.id, false, {
                                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                                        lineNumber: 382,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0));
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynBeams$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolvynBeams"], {
                                    points: points,
                                    containerRef: containerRef,
                                    pathRefs: pathRefs,
                                    beamRefs: beamRefs,
                                    isMobile: isMobile,
                                    isTablet: isTablet
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Solvyn.tsx",
                                    lineNumber: 396,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Solvyn.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Solvyn.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Solvyn.tsx",
        lineNumber: 308,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Solvyn, "CTO5sKIk+jmLv2S6Hd95RZX6VrE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDiagramAnimationReady$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDiagramAnimationReady"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSolvynAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSolvynAnimation"]
    ];
});
_c2 = Solvyn;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "POSITIONS_DESKTOP_STABLE");
__turbopack_context__.k.register(_c1, "POSITIONS_MOBILE_STABLE");
__turbopack_context__.k.register(_c2, "Solvyn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/ServicesAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesAnimation",
    ()=>ServicesAnimation,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
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
 */ const ACCENT = "#FF7F00";
const NEUTRAL = "#374151"; // gray-700
const LINE = "#9CA3AF"; // gray-400
const SOFT = "#e5edf5"; // matches EdgeLines hairline
const CARD_BG = "#ffffff";
const VB_W = 1000;
const VB_H = 360;
// SGA logo (sgrids.svg) is roughly 0.63:1 wide:tall — match that aspect.
const HUB = {
    w: 48,
    h: 76
};
const HUB_CX = 500;
const HUB_TOP_Y = 10;
const HUB_CY = HUB_TOP_Y + HUB.h / 2; // logo geometric center
// Beams emanate from a point just below the logo so they look like power
// flowing OUT of the SGA mark, not through it.
const ORIGIN = {
    x: HUB_CX,
    y: HUB_TOP_Y + HUB.h + 6
};
const CARD = {
    w: 72,
    h: 72,
    r: 14
}; // icon card dimensions
const ICON_SCALE = 1.25; // visual scale applied to glyphs (drawn at ~24px native)
const ICON_CY = 274;
const LABEL_Y = ICON_CY + CARD.h / 2 + 28;
const CYCLE = 3.6;
const STAGGER = 0.55;
// Annotated as mutable Bézier tuples so framer-motion's `Transition` type
// (which expects `number[]` / a mutable `[n,n,n,n]`) accepts them directly.
const EASE_OUT = [
    0.22,
    1,
    0.36,
    1
];
const EASE_IN_OUT = [
    0.65,
    0,
    0.35,
    1
];
const NODES = [
    {
        id: "solar",
        label: "Solar",
        x: 110
    },
    {
        id: "wind",
        label: "Wind",
        x: 305
    },
    {
        id: "bess",
        label: "BESS",
        x: 500
    },
    {
        id: "hybrid",
        label: "Hybrid",
        x: 695
    },
    {
        id: "hydrogen",
        label: "Green H₂",
        x: 890
    }
];
// Smooth cubic curve that leaves the hub flowing straight down and arrives
// at the asset card flowing straight down — same shape language as
// `createSmoothCurvedPath` in `lib/solvynUtils.ts`.
function curvedPath(targetX, targetY) {
    const dy = targetY - ORIGIN.y;
    const reach = Math.max(Math.abs(dy) * 0.55, 90);
    const c1y = ORIGIN.y + reach;
    const c2y = targetY - reach;
    return `M ${ORIGIN.x} ${ORIGIN.y} C ${ORIGIN.x} ${c1y} ${targetX} ${c2y} ${targetX} ${targetY}`;
}
// SMIL-driven comet that travels along the path each cycle. Per-frame work
// stays in the browser engine — no React re-renders.
const FlowParticle = ({ d, duration, delay, size = 3, color = ACCENT })=>{
    const dur = `${duration}s`;
    const begin = `${delay}s`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        style: {
            pointerEvents: "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                r: size * 2.6,
                fill: color,
                opacity: 0,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                        attributeName: "opacity",
                        values: "0;0.22;0.22;0",
                        keyTimes: "0;0.18;0.82;1",
                        dur: dur,
                        begin: begin,
                        repeatCount: "indefinite"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                        dur: dur,
                        begin: begin,
                        repeatCount: "indefinite",
                        path: d,
                        calcMode: "spline",
                        keyTimes: "0;1",
                        keySplines: "0.4 0 0.2 1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                r: size,
                fill: color,
                opacity: 0,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                        attributeName: "opacity",
                        values: "0;1;1;0",
                        keyTimes: "0;0.12;0.88;1",
                        dur: dur,
                        begin: begin,
                        repeatCount: "indefinite"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                        dur: dur,
                        begin: begin,
                        repeatCount: "indefinite",
                        path: d,
                        calcMode: "spline",
                        keyTimes: "0;1",
                        keySplines: "0.4 0 0.2 1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FlowParticle;
// ---------- Glyphs (24x24, drawn around 0,0; stroked with currentColor) ----------
const StrokeGroup = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        stroke: "currentColor",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
        lineNumber: 146,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = StrokeGroup;
const SolarGlyph = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeGroup, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: -8,
                cy: -9,
                r: 2.6,
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 160,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: -8,
                y1: -15,
                x2: -8,
                y2: -13.5
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 161,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: -8,
                y1: -4.5,
                x2: -8,
                y2: -3
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 162,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: -14,
                y1: -9,
                x2: -12.5,
                y2: -9
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 163,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: -3.5,
                y1: -9,
                x2: -2,
                y2: -9
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 164,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: -12,
                y1: -13,
                x2: -11,
                y2: -12
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 165,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: -5,
                y1: -6,
                x2: -4,
                y2: -5
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 166,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M -10 14 L -4 0 L 14 0 L 8 14 Z"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 168,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M -7 7 L 11 7"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 169,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M -1 0 L -4 14"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 170,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 5 0 L 2 14"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 171,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
        lineNumber: 158,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = SolarGlyph;
const WindGlyph = ()=>// Vertical tower + ground pad + circular hub + three teardrop blades at
    // 90°, 210°, 330° so the silhouette unambiguously reads as a wind turbine
    // (not an aircraft).
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        stroke: "currentColor",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: 0,
                y1: -2,
                x2: 0,
                y2: 14
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 187,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: -5,
                y1: 14,
                x2: 5,
                y2: 14
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 189,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "currentColor",
                stroke: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 0 -2 L 1.4 -14 L -1.4 -14 Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                        lineNumber: 192,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 0 -2 L 12.4 4 L 11 6.5 Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                        lineNumber: 193,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 0 -2 L -12.4 4 L -11 6.5 Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                        lineNumber: 194,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 191,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: 0,
                cy: -2,
                r: 2,
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 197,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
        lineNumber: 179,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = WindGlyph;
const BessGlyph = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeGroup, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: -12,
                y: -9,
                width: 22,
                height: 18,
                rx: 2
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 204,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 10 -4 L 13 -4 L 13 4 L 10 4"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 206,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M -8 -5 L -8 5"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 208,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M -3 -5 L -3 5"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 209,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 4 -5 L 0 1 L 3 1 L 1 5"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 211,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
        lineNumber: 202,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = BessGlyph;
const HybridGlyph = ()=>// Three feeder lines converging into a central hub — communicates the
    // "multiple sources unified into one plant" idea more directly than a
    // generic atom/Venn mark.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        stroke: "currentColor",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: -12,
                cy: -8,
                r: 2.2,
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 227,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: 12,
                cy: -8,
                r: 2.2,
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 228,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: 0,
                cy: 12,
                r: 2.2,
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 229,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M -12 -8 Q -6 -2 0 0"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 231,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 12 -8 Q 6 -2 0 0"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 232,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 0 12 Q 0 6 0 0"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 233,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: 0,
                cy: 0,
                r: 3,
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 235,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
        lineNumber: 219,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = HybridGlyph;
const HydrogenGlyph = ()=>// Bold H₂ molecule mark — the "GREEN" qualifier is carried by the label
    // beneath the card, so the glyph stays legible and uncluttered.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        fill: "currentColor",
        stroke: "none",
        style: {
            pointerEvents: "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: -2,
                y: 3,
                textAnchor: "middle",
                dominantBaseline: "middle",
                fontFamily: "var(--font-plex-sans), ui-sans-serif, system-ui, sans-serif",
                fontWeight: 700,
                fontSize: 20,
                children: "H"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 243,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: 8,
                y: 9,
                textAnchor: "middle",
                dominantBaseline: "middle",
                fontFamily: "var(--font-plex-sans), ui-sans-serif, system-ui, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                children: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 254,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
        lineNumber: 242,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = HydrogenGlyph;
const GLYPHS = {
    solar: SolarGlyph,
    wind: WindGlyph,
    bess: BessGlyph,
    hybrid: HybridGlyph,
    hydrogen: HydrogenGlyph
};
const AssetCell = ({ node, index, reducedMotion })=>{
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
        times: [
            0,
            0.78,
            0.88,
            0.96,
            1
        ],
        delay: index * STAGGER,
        repeat: Infinity,
        ease: EASE_IN_OUT
    };
    const ringAnim = reducedMotion ? {
        stroke: SOFT
    } : {
        stroke: [
            SOFT,
            SOFT,
            ACCENT,
            ACCENT,
            SOFT
        ]
    };
    const colorAnim = reducedMotion ? {
        color: NEUTRAL
    } : {
        color: [
            NEUTRAL,
            NEUTRAL,
            ACCENT,
            ACCENT,
            NEUTRAL
        ]
    };
    const labelAnim = reducedMotion ? {
        fill: "#4b5563"
    } : {
        fill: [
            "#6b7280",
            "#6b7280",
            "#111827",
            "#111827",
            "#6b7280"
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                x: cardX,
                y: cardY,
                width: CARD.w,
                height: CARD.h,
                rx: CARD.r,
                ry: CARD.r,
                fill: CARD_BG,
                strokeWidth: 1,
                initial: false,
                animate: ringAnim,
                transition: cycleTransition
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: `translate(${cx} ${cy}) scale(${ICON_SCALE})`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                    initial: false,
                    animate: colorAnim,
                    transition: cycleTransition,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Glyph, {}, void 0, false, {
                        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                        lineNumber: 354,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                    lineNumber: 349,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 348,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                x: cx,
                y: LABEL_Y,
                textAnchor: "middle",
                fontFamily: "var(--font-plex-mono), ui-monospace, SFMono-Regular, monospace",
                fontSize: 11,
                letterSpacing: 1.6,
                initial: false,
                animate: labelAnim,
                transition: cycleTransition,
                style: {
                    textTransform: "uppercase",
                    fontWeight: 600
                },
                children: node.label
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
        lineNumber: 324,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c7 = AssetCell;
const ServicesAnimation = ({ className = "" })=>{
    _s();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])() ?? false;
    // Beam terminus sits just above the card's top edge so the pulse visibly
    // arrives at the asset rather than disappearing into it.
    const beamEndY = ICON_CY - CARD.h / 2 - 4;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${VB_W} ${VB_H}`,
        preserveAspectRatio: "xMidYMid meet",
        className: `w-full h-full ${className}`,
        role: "img",
        "aria-label": "Solvyn covers solar, wind, BESS, hybrid, and green hydrogen assets",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                    id: "services-origin-glow",
                    cx: HUB_CX,
                    cy: HUB_CY,
                    r: 84,
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: ACCENT,
                            stopOpacity: "0.28"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                            lineNumber: 406,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "55%",
                            stopColor: ACCENT,
                            stopOpacity: "0.06"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                            lineNumber: 407,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: ACCENT,
                            stopOpacity: "0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                            lineNumber: 408,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                    lineNumber: 399,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: HUB_CX,
                cy: HUB_CY,
                r: 84,
                fill: "url(#services-origin-glow)"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 413,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            NODES.map((node, i)=>{
                const d = curvedPath(node.x, beamEndY);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: d,
                            stroke: LINE,
                            strokeOpacity: 0.45,
                            strokeWidth: 1,
                            strokeLinecap: "round",
                            fill: "none"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                            lineNumber: 420,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        !reducedMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowParticle, {
                            d: d,
                            duration: CYCLE,
                            delay: i * STAGGER
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                            lineNumber: 429,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, `beam-${node.id}`, true, {
                    fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                    lineNumber: 419,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                href: "/sgrids.svg",
                x: HUB_CX - HUB.w / 2,
                y: HUB_TOP_Y,
                width: HUB.w,
                height: HUB.h,
                preserveAspectRatio: "xMidYMid meet"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: ORIGIN.x,
                        cy: ORIGIN.y,
                        r: 3.5,
                        fill: ACCENT
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                        lineNumber: 447,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !reducedMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                        cx: ORIGIN.x,
                        cy: ORIGIN.y,
                        r: 3.5,
                        fill: "none",
                        stroke: ACCENT,
                        strokeWidth: 1,
                        initial: {
                            opacity: 0.5
                        },
                        animate: {
                            r: [
                                3.5,
                                16,
                                3.5
                            ],
                            opacity: [
                                0.5,
                                0,
                                0.5
                            ]
                        },
                        transition: {
                            duration: 3.2,
                            repeat: Infinity,
                            ease: EASE_OUT
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                        lineNumber: 449,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                lineNumber: 446,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            NODES.map((node, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssetCell, {
                    node: node,
                    index: i,
                    reducedMotion: reducedMotion
                }, node.id, false, {
                    fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
                    lineNumber: 465,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/ServicesAnimation.tsx",
        lineNumber: 391,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ServicesAnimation, "sF4KtIiIlOcKcWMXs33EtX/h6fI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c8 = ServicesAnimation;
const __TURBOPACK__default__export__ = ServicesAnimation;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "FlowParticle");
__turbopack_context__.k.register(_c1, "StrokeGroup");
__turbopack_context__.k.register(_c2, "SolarGlyph");
__turbopack_context__.k.register(_c3, "WindGlyph");
__turbopack_context__.k.register(_c4, "BessGlyph");
__turbopack_context__.k.register(_c5, "HybridGlyph");
__turbopack_context__.k.register(_c6, "HydrogenGlyph");
__turbopack_context__.k.register(_c7, "AssetCell");
__turbopack_context__.k.register(_c8, "ServicesAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Services",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EdgeLines.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$ServicesAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/ServicesAnimation.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const Services = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        "data-snap-section": true,
        className: "relative w-full h-screen px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgeLines"], {}, void 0, false, {
                fileName: "[project]/src/components/sections/Services.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl h-full w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start gap-4 sm:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600",
                                children: "ASSET COVERAGE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Services.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-sans font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl",
                                children: "Solar. Wind. BESS. Hybrid. Green Hydrogen."
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Services.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Services.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex-1 min-h-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-5xl h-full max-h-[420px] flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$ServicesAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServicesAnimation"], {}, void 0, false, {
                                fileName: "[project]/src/components/sections/Services.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Services.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Services.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Services.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Services.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/proofOutlineCtaClassName.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Outline CTA used in the Proof section (case studies, white papers). */ __turbopack_context__.s([
    "proofOutlineCtaClassName",
    ()=>proofOutlineCtaClassName,
    "proofOutlineIconButtonClassName",
    ()=>proofOutlineIconButtonClassName
]);
const proofOutlineCtaClassName = "group inline-flex items-center justify-center gap-0.5 " + "font-sans font-bold text-sm sm:text-base md:text-lg " + "px-[20px] py-[10px] whitespace-nowrap rounded-[8px] bg-transparent " + "border border-[#FF7F00] text-[#FF7F00] cursor-pointer " + "transition-all duration-300 ease-in-out " + "hover:bg-[#FF7F00]/10 hover:shadow-sm active:translate-y-px";
const proofOutlineIconButtonClassName = "inline-flex shrink-0 items-center justify-center rounded-[8px] border border-[#FF7F00] " + "bg-transparent text-[#FF7F00] cursor-pointer " + "transition-all duration-300 ease-in-out " + "hover:bg-[#FF7F00]/10 hover:shadow-sm active:translate-y-px " + "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7F00] " + "min-h-[42px] min-w-[42px] sm:min-h-[44px] sm:min-w-[44px]";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ProofHoverGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROOF_GRID_ITEMS",
    ()=>PROOF_GRID_ITEMS,
    "ProofCard",
    ()=>ProofCard,
    "ProofHoverGrid",
    ()=>ProofHoverGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const PROOF_GRID_ITEMS = [
    {
        tag: "BESS · Hybrid",
        title: "India's First Hybrid EMS Deployment",
        description: "Coordinated solar-BESS dispatch with automated grid-code compliance."
    },
    {
        tag: "Peak Management",
        title: "Hybrid EMS for Peak Power Management",
        description: "Degradation-aware BESS dispatch reducing peak demand costs."
    },
    {
        tag: "Solar · Microgrid",
        title: "Solar-First Microgrid for Extreme Environments",
        description: "Off-grid solar control with autonomous recovery and reliability."
    },
    {
        tag: "Compliance",
        title: "Solar-Prioritised EMS for Grid Compliance",
        description: "Automated ramp-rate enforcement and DSM penalty elimination."
    },
    {
        tag: "Optimisation",
        title: "Peak Demand Optimisation Through EMS",
        description: "Commercial demand reduction with intelligent BESS coordination."
    },
    {
        tag: "Grid Stability",
        title: "Hybrid EMS for Grid Stability and Ancillary Services",
        description: "Frequency response and ancillary service delivery from a hybrid portfolio."
    }
];
function ProofHoverGrid({ items, className }) {
    _s();
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroup"], {
        id: "proof-grid-hover",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-full", className),
            children: items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative group block p-2.5 sm:p-3 h-full w-full",
                    onMouseEnter: ()=>setHoveredIndex(idx),
                    onMouseLeave: ()=>setHoveredIndex(null),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            initial: false,
                            children: hoveredIndex === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                layoutId: "proofHoverBackground",
                                style: {
                                    borderRadius: 6
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 520,
                                    damping: 38,
                                    mass: 0.8
                                },
                                className: "pointer-events-none absolute inset-0 z-10 block h-full w-full bg-[#FF7F00]/12 dark:bg-orange-500/15"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ProofHoverGrid.tsx",
                                lineNumber: 77,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/ProofHoverGrid.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProofCard, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-[10px] sm:text-xs uppercase tracking-[0.16em] text-[#FF7F00]",
                                    children: item.tag
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/ProofHoverGrid.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mt-3 font-sans font-semibold text-gray-900 text-base sm:text-lg leading-snug tracking-tight",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/ProofHoverGrid.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-sm leading-relaxed text-gray-600",
                                    children: item.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/ProofHoverGrid.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/ProofHoverGrid.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    ]
                }, item.title, true, {
                    fileName: "[project]/src/components/ui/ProofHoverGrid.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ProofHoverGrid.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ProofHoverGrid.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(ProofHoverGrid, "9iVkaaUbrFxVCU6MuI1jK6905pI=");
_c = ProofHoverGrid;
function ProofCard({ className, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            borderRadius: 6
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full w-full overflow-hidden relative z-20", "border border-gray-200/90 bg-white shadow-sm", "transition-[border-color,box-shadow] duration-300 ease-out", "group-hover:border-[#FF7F00]/40 group-hover:shadow-md group-hover:shadow-orange-500/5", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-50 p-5 sm:p-6",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ProofHoverGrid.tsx",
            lineNumber: 126,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ProofHoverGrid.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_c1 = ProofCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProofHoverGrid");
__turbopack_context__.k.register(_c1, "ProofCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Cta.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cta",
    ()=>Cta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proofOutlineCtaClassName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proofOutlineCtaClassName.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EdgeLines.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CtaHoverArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CtaHoverArrow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProofHoverGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ProofHoverGrid.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const Cta = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "cta",
        "data-snap-section": true,
        className: "relative w-full min-h-screen px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgeLines"], {}, void 0, false, {
                fileName: "[project]/src/components/sections/Cta.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start gap-8 sm:gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start gap-4 sm:gap-6 max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600",
                                children: "PROOF"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Cta.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-sans font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl",
                                children: "Real Plants. Real Operations. Real Results."
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Cta.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Cta.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3 sm:gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/case-studies",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proofOutlineCtaClassName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proofOutlineCtaClassName"],
                                children: [
                                    "View All Case Studies",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CtaHoverArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaHoverArrow"], {}, void 0, false, {
                                        fileName: "[project]/src/components/sections/Cta.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Cta.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/white-papers",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proofOutlineCtaClassName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proofOutlineCtaClassName"],
                                children: [
                                    "Read White Papers",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CtaHoverArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaHoverArrow"], {}, void 0, false, {
                                        fileName: "[project]/src/components/sections/Cta.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Cta.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Cta.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProofHoverGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProofHoverGrid"], {
                        items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProofHoverGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROOF_GRID_ITEMS"],
                        className: "w-full pb-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Cta.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Cta.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Cta.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Cta;
var _c;
__turbopack_context__.k.register(_c, "Cta");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/MediaCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaCarousel",
    ()=>MediaCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/** Snappy ease-out for width; image motion uses the same for cohesion */ const layoutEase = [
    0.25,
    0.1,
    0.25,
    1
];
const imageEase = [
    0.22,
    1,
    0.36,
    1
];
const Slide = ({ slide, index, current, isActive, isNextPreview, widthPct, handleSlideClick, prefersReducedMotion })=>{
    const { src, title } = slide;
    const reduce = Boolean(prefersReducedMotion);
    const layoutDuration = reduce ? 0 : 0.62;
    const imageDuration = reduce ? 0 : 0.58;
    /** Slides already visited stay on the left and read as “squished” that way */ const isHistory = index < current;
    const isFuture = index > current;
    const imageOrigin = isActive ? "50% 50%" : isHistory ? "0% 50%" : "100% 50%";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
        layout: true,
        transition: {
            layout: {
                duration: layoutDuration,
                ease: layoutEase
            }
        },
        className: "relative h-[360px] min-w-0 shrink-0 cursor-pointer overflow-hidden rounded-[6px] shadow-sm motion-reduce:transition-none sm:h-[400px] md:h-[440px]",
        style: {
            width: `${widthPct}%`,
            zIndex: isActive ? 2 : isNextPreview ? 1 : 0
        },
        onClick: ()=>handleSlideClick(index),
        role: "group",
        "aria-roledescription": "slide",
        "aria-current": isActive ? "true" : undefined,
        "aria-label": `${index + 1}: ${title}${isActive ? " (active)" : ""}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
            layout: false,
            className: "pointer-events-none absolute inset-0 h-full w-full rounded-[6px] object-cover",
            style: {
                transformOrigin: imageOrigin
            },
            alt: title,
            src: src,
            loading: isActive ? "eager" : "lazy",
            decoding: "async",
            animate: {
                opacity: isActive ? 1 : isNextPreview ? 0.78 : isHistory ? 0.52 : 0.42,
                scaleX: isActive ? 1 : isHistory ? 0.76 : isFuture ? 0.92 : 1,
                scaleY: isActive ? 1.06 : 0.94
            },
            transition: {
                duration: imageDuration,
                ease: imageEase,
                opacity: {
                    duration: imageDuration * 0.85,
                    ease: imageEase
                }
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/MediaCarousel.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/MediaCarousel.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Slide;
const ACTIVE_PCT = 75;
const INACTIVE_TOTAL_PCT = 100 - ACTIVE_PCT;
function MediaCarousel({ slides, currentIndex: current, onCurrentIndexChange: setCurrent }) {
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const n = slides.length;
    const handleSlideClick = (index)=>{
        if (current !== index) {
            setCurrent(index);
        }
    };
    const inactiveCount = n > 1 ? n - 1 : 0;
    const squishedEachPct = inactiveCount > 0 ? INACTIVE_TOTAL_PCT / inactiveCount : 0;
    const reduce = Boolean(prefersReducedMotion);
    const activeHeadline = slides[current]?.headline ?? "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col",
        "aria-labelledby": `carousel-heading-${id}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                id: `carousel-heading-${id}`,
                className: "sr-only",
                children: "Media image gallery"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/MediaCarousel.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroup"], {
                    id: `media-carousel-${id}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex w-full max-w-full flex-row",
                        children: slides.map((slide, index)=>{
                            const isActive = index === current;
                            const widthPct = n <= 1 ? 100 : isActive ? ACTIVE_PCT : squishedEachPct;
                            const isNextPreview = n > 1 && !isActive && index === (current + 1) % n;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Slide, {
                                slide: slide,
                                index: index,
                                current: current,
                                isActive: isActive,
                                isNextPreview: isNextPreview,
                                widthPct: widthPct,
                                handleSlideClick: handleSlideClick,
                                prefersReducedMotion: prefersReducedMotion
                            }, slide.src, false, {
                                fileName: "[project]/src/components/ui/MediaCarousel.tsx",
                                lineNumber: 148,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/MediaCarousel.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/MediaCarousel.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/MediaCarousel.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                id: `media-carousel-headline-${id}`,
                "aria-live": "polite",
                className: "mt-6 w-full max-w-[min(100%,55vw)] text-left font-mono text-sm font-medium uppercase leading-snug tracking-[0.14em] text-gray-600 sm:mt-8 sm:text-base sm:leading-normal md:mt-10 md:text-lg",
                initial: reduce ? false : {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: reduce ? 0 : 0.28,
                    ease: imageEase
                },
                children: activeHeadline
            }, current, false, {
                fileName: "[project]/src/components/ui/MediaCarousel.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/MediaCarousel.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_s(MediaCarousel, "bYQl7ekOtzpNEHUAOtHY+HgK2d4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = MediaCarousel;
var _c, _c1;
__turbopack_context__.k.register(_c, "Slide");
__turbopack_context__.k.register(_c1, "MediaCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Media.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Media",
    ()=>Media
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proofOutlineCtaClassName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proofOutlineCtaClassName.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EdgeLines.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CtaHoverArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CtaHoverArrow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$MediaCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/MediaCarousel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const mediaSlides = [
    {
        title: "Smart grid leadership",
        headline: "National outlets on India’s first grid-scale EMS and battery storage deployment",
        src: "/media1.png"
    },
    {
        title: "Energy transition spotlight",
        headline: "Trade press on hybrid solar, wind, and BESS optimization at utility scale",
        src: "/media2.png"
    },
    {
        title: "Innovation in the news",
        headline: "Commentary on forecasting, grid-code alignment, and renewable integration",
        src: "/media3.png"
    },
    {
        title: "Press highlights",
        headline: "Profiles of analytics-led control rooms and performance across large portfolios",
        src: "/media4.png"
    },
    {
        title: "Powering the future",
        headline: "Features on peak demand, ancillary services, and market participation strategy",
        src: "/media5.png"
    },
    {
        title: "SGA in the headlines",
        headline: "Interviews on the clean-energy roadmap and SGA’s role behind major programs",
        src: "/media6.png"
    }
];
const Media = ()=>{
    _s();
    const [mediaSlideIndex, setMediaSlideIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const slideCount = mediaSlides.length;
    const goToPreviousSlide = ()=>{
        setMediaSlideIndex((i)=>i - 1 < 0 ? slideCount - 1 : i - 1);
    };
    const goToNextSlide = ()=>{
        setMediaSlideIndex((i)=>i + 1 === slideCount ? 0 : i + 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "media",
        "data-snap-section": true,
        className: "relative flex min-h-screen w-full flex-col overflow-x-hidden px-4 py-16 sm:px-6 sm:py-20 md:py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgeLines"], {}, void 0, false, {
                fileName: "[project]/src/components/sections/Media.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto flex w-full max-w-7xl min-h-0 flex-1 flex-col items-stretch gap-8 sm:gap-10 px-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full shrink-0 flex-col gap-4 sm:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-xs uppercase tracking-[0.16em] text-gray-600 sm:text-sm",
                                children: "IN THE NEWS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Media.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "max-w-4xl font-sans text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl",
                                children: "SGA In The Media"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Media.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full flex-wrap items-center gap-3 sm:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/proof/news",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proofOutlineCtaClassName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proofOutlineCtaClassName"],
                                        children: [
                                            "View All Coverage",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CtaHoverArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaHoverArrow"], {}, void 0, false, {
                                                fileName: "[project]/src/components/sections/Media.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Media.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    slideCount > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-auto flex items-center gap-2 sm:gap-3",
                                        role: "group",
                                        "aria-label": "Media carousel navigation",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proofOutlineCtaClassName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proofOutlineIconButtonClassName"]} [&_svg]:size-5`,
                                                title: "Go to previous slide",
                                                onClick: goToPreviousSlide,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "rotate-180",
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Media.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Media.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proofOutlineCtaClassName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proofOutlineIconButtonClassName"]} [&_svg]:size-5`,
                                                title: "Go to next slide",
                                                onClick: goToNextSlide,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Media.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Media.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Media.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Media.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Media.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-0 w-full flex-1 flex-col justify-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$MediaCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaCarousel"], {
                            slides: mediaSlides,
                            currentIndex: mediaSlideIndex,
                            onCurrentIndexChange: setMediaSlideIndex
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Media.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Media.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Media.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Media.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Media, "Hef9MrAH7B/OW82gAOqN+JyzPFI=");
_c = Media;
var _c;
__turbopack_context__.k.register(_c, "Media");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/GlowingEffect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlowingEffect",
    ()=>GlowingEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const brandGradient = `radial-gradient(circle, color-mix(in srgb, var(--glow-brand-hot) 85%, white) 14%, transparent 28%),
  radial-gradient(circle at 40% 40%, color-mix(in srgb, var(--glow-brand-edge) 90%, var(--glow-brand-primary)) 8%, transparent 22%),
  radial-gradient(circle at 60% 60%, color-mix(in srgb, var(--glow-brand-primary) 85%, white) 14%, transparent 28%),
  radial-gradient(circle at 40% 60%, color-mix(in srgb, var(--glow-brand-muted) 70%, var(--glow-brand-primary)) 12%, transparent 26%),
  repeating-conic-gradient(
    from 236.84deg at 50% 50%,
    var(--glow-brand-hot) 0%,
    color-mix(in srgb, var(--glow-brand-edge) 70%, var(--glow-brand-primary)) calc(25% / var(--repeating-conic-gradient-times)),
    var(--glow-brand-primary) calc(50% / var(--repeating-conic-gradient-times)),
    color-mix(in srgb, var(--glow-brand-muted) 50%, var(--glow-brand-primary)) calc(75% / var(--repeating-conic-gradient-times)),
    var(--glow-brand-hot) calc(100% / var(--repeating-conic-gradient-times))
  )`;
const GlowingEffect = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(({ blur = 0, inactiveZone = 0.7, proximity = 0, spread = 20, variant = "brand", glow = false, className, movementDuration = 2, borderWidth = 1, disabled = true })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const handleMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GlowingEffect.useCallback[handleMove]": (e)=>{
            if (!containerRef.current) return;
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            animationFrameRef.current = requestAnimationFrame({
                "GlowingEffect.useCallback[handleMove]": ()=>{
                    const element = containerRef.current;
                    if (!element) return;
                    const { left, top, width, height } = element.getBoundingClientRect();
                    const mouseX = e?.x ?? lastPosition.current.x;
                    const mouseY = e?.y ?? lastPosition.current.y;
                    if (e) {
                        lastPosition.current = {
                            x: mouseX,
                            y: mouseY
                        };
                    }
                    const center = [
                        left + width * 0.5,
                        top + height * 0.5
                    ];
                    const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1]);
                    const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;
                    if (distanceFromCenter < inactiveRadius) {
                        element.style.setProperty("--active", "0");
                        return;
                    }
                    const isActive = mouseX > left - proximity && mouseX < left + width + proximity && mouseY > top - proximity && mouseY < top + height + proximity;
                    element.style.setProperty("--active", isActive ? "1" : "0");
                    if (!isActive) return;
                    const currentAngle = parseFloat(element.style.getPropertyValue("--start")) || 0;
                    const targetAngle = 180 * Math.atan2(mouseY - center[1], mouseX - center[0]) / Math.PI + 90;
                    const angleDiff = (targetAngle - currentAngle + 180) % 360 - 180;
                    const newAngle = currentAngle + angleDiff;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(currentAngle, newAngle, {
                        duration: movementDuration,
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1
                        ],
                        onUpdate: {
                            "GlowingEffect.useCallback[handleMove]": (value)=>{
                                element.style.setProperty("--start", String(value));
                            }
                        }["GlowingEffect.useCallback[handleMove]"]
                    });
                }
            }["GlowingEffect.useCallback[handleMove]"]);
        }
    }["GlowingEffect.useCallback[handleMove]"], [
        inactiveZone,
        proximity,
        movementDuration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlowingEffect.useEffect": ()=>{
            if (disabled) return;
            const handleScroll = {
                "GlowingEffect.useEffect.handleScroll": ()=>handleMove()
            }["GlowingEffect.useEffect.handleScroll"];
            const handlePointerMove = {
                "GlowingEffect.useEffect.handlePointerMove": (e)=>handleMove(e)
            }["GlowingEffect.useEffect.handlePointerMove"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            document.body.addEventListener("pointermove", handlePointerMove, {
                passive: true
            });
            return ({
                "GlowingEffect.useEffect": ()=>{
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                    window.removeEventListener("scroll", handleScroll);
                    document.body.removeEventListener("pointermove", handlePointerMove);
                }
            })["GlowingEffect.useEffect"];
        }
    }["GlowingEffect.useEffect"], [
        handleMove,
        disabled
    ]);
    const gradientStyle = variant === "white" ? `repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #0f172a,
                  #0f172a calc(25% / var(--repeating-conic-gradient-times))
                )` : variant === "brand" ? brandGradient : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
                radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
                radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), 
                radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #dd7bbb 0%,
                  #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
                  #5a922c calc(50% / var(--repeating-conic-gradient-times)), 
                  #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
                  #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
                )`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity", glow && "opacity-100", variant === "white" && "border-white", disabled && "!block")
            }, void 0, false, {
                fileName: "[project]/src/components/ui/GlowingEffect.tsx",
                lineNumber: 160,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                style: {
                    "--blur": `${blur}px`,
                    "--spread": spread,
                    "--start": "0",
                    "--active": "0",
                    "--glowingeffect-border-width": `${borderWidth}px`,
                    "--repeating-conic-gradient-times": "5",
                    "--gradient": gradientStyle
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity", glow && "opacity-100", blur > 0 && "blur-[var(--blur)] ", className, disabled && "!hidden"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("glow", "rounded-[inherit]", 'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]', "after:[border:var(--glowingeffect-border-width)_solid_transparent]", "after:[background:var(--gradient)] after:[background-attachment:fixed]", "after:opacity-[var(--active)] after:transition-opacity after:duration-200", variant === "brand" && "after:brightness-115 after:contrast-110 after:saturate-150", "after:[mask-clip:padding-box,border-box]", "after:[mask-composite:intersect]", "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]")
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/GlowingEffect.tsx",
                    lineNumber: 189,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/GlowingEffect.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
}, "tERVUNWxVOPcH1N2beg6aNg2/Ko=")), "tERVUNWxVOPcH1N2beg6aNg2/Ko=");
_c1 = GlowingEffect;
GlowingEffect.displayName = "GlowingEffect";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "GlowingEffect$memo");
__turbopack_context__.k.register(_c1, "GlowingEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Team.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Team",
    ()=>Team
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proofOutlineCtaClassName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proofOutlineCtaClassName.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EdgeLines.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CtaHoverArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CtaHoverArrow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$GlowingEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/GlowingEffect.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const teamMembers = [
    {
        name: "Kumar M",
        role: "Founder & CEO",
        bio: "20+ years in renewable innovation and grid automation. Founded Armax in 2005, then SGA.",
        image: "/1.png"
    },
    {
        name: "Venkata Krishnan",
        role: "Co-founder & CGO",
        bio: "Two decades in renewable energy and industrial automation. Leads global expansion and partnerships.",
        image: "/2.png"
    },
    {
        name: "Tirumaleswara Reddy K",
        role: "CTO",
        bio: "20+ years architecting enterprise platforms. Leads technology vision across Solvyn's full stack.",
        image: "/3.png"
    },
    {
        name: "Pankaj Ghai",
        role: "Senior Advisor",
        bio: "Private equity and climate infrastructure leader. Guides North American growth and investor alliances.",
        image: "/4.png"
    }
];
const Team = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "team",
        "data-snap-section": true,
        className: "relative w-full min-h-screen px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgeLines"], {}, void 0, false, {
                fileName: "[project]/src/components/sections/Team.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start gap-8 sm:gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start gap-4 sm:gap-6 max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600",
                                children: "THE TEAM"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Team.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-sans font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl",
                                children: "Built By Engineers. Guided By Decades Of Grid Experience."
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Team.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-3 sm:gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/company/leadership",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proofOutlineCtaClassName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proofOutlineCtaClassName"],
                                    children: [
                                        "Meet The Full Team",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CtaHoverArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaHoverArrow"], {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/Team.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Team.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Team.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Team.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-6xl self-center grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-0 pb-2",
                        children: teamMembers.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group block p-2.5 sm:p-3 h-full w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    style: {
                                        borderRadius: 6
                                    },
                                    className: "relative z-20 flex h-full flex-col overflow-hidden border border-gray-200/90 bg-white shadow-sm transition-[border-color,box-shadow] duration-300 ease-out group-hover:border-[#FF7F00]/40 group-hover:shadow-md group-hover:shadow-orange-500/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$GlowingEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlowingEffect"], {
                                            variant: "brand",
                                            blur: 8,
                                            spread: 64,
                                            proximity: 160,
                                            borderWidth: 2.5,
                                            disabled: false
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Team.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-30 aspect-[5/6] w-full overflow-hidden border-b border-gray-200/90 bg-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: member.image,
                                                alt: `${member.name}, ${member.role}`,
                                                fill: true,
                                                className: "object-cover object-top",
                                                sizes: "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 280px",
                                                unoptimized: true,
                                                loading: "eager"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Team.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Team.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-30 flex flex-col gap-1.5 sm:gap-2 p-4 sm:p-5 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-sans font-semibold text-gray-900 text-base sm:text-lg leading-snug",
                                                    children: member.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Team.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#FF7F00]",
                                                    children: member.role
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Team.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 leading-relaxed",
                                                    children: member.bio
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Team.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Team.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Team.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, member.name, false, {
                                fileName: "[project]/src/components/sections/Team.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Team.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Team.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Team.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Team;
var _c;
__turbopack_context__.k.register(_c, "Team");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/WhyIllustrations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhyIllustration",
    ()=>WhyIllustration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
const ACCENT = "rgb(255, 122, 24)";
const STROKE = "rgb(55, 65, 81)";
const MUTED = "rgb(156, 163, 175)";
const FILL_CARD = "rgb(249, 250, 251)";
const smoothRepeat = {
    duration: 3.2,
    repeat: Infinity,
    ease: [
        0.45,
        0,
        0.55,
        1
    ]
};
/** Truly Agnostic: EMS hub + four cardinal integrations (INV, BMS, PPC, OEM) with box→EMS beam pulses. */ function AgnosticIllustration({ reduce }) {
    _s();
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, "");
    const cx = 130;
    const cy = 130;
    const r = 78;
    const rEms = 30;
    const halfW = 23;
    const halfH = 15;
    const beamSeg = 16;
    const cycle = 3.2;
    const nodes = [
        {
            label: "INV",
            angle: -90
        },
        {
            label: "BMS",
            angle: 0
        },
        {
            label: "PPC",
            angle: 90
        },
        {
            label: "OEM",
            angle: 180
        }
    ];
    const arms = nodes.map(({ label, angle }, i)=>{
        const rad = angle * Math.PI / 180;
        const nx = cx + r * Math.cos(rad);
        const ny = cy + r * Math.sin(rad);
        const Lfull = Math.hypot(nx - cx, ny - cy) || 1;
        const uix = (cx - nx) / Lfull;
        const uiy = (cy - ny) / Lfull;
        const inset = Math.abs(nx - cx) < Math.abs(ny - cy) ? halfH : halfW;
        const x1 = nx + uix * inset;
        const y1 = ny + uiy * inset;
        const x2 = cx + (nx - cx) / Lfull * rEms;
        const y2 = cy + (ny - cy) / Lfull * rEms;
        const segLen = Math.hypot(x2 - x1, y2 - y1) || 1;
        const gap = Math.max(segLen + beamSeg * 2, 1);
        return {
            label,
            nx,
            ny,
            x1,
            y1,
            x2,
            y2,
            gap,
            i
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 260 260",
        className: "w-full max-w-[220px] h-auto mx-auto md:mx-0",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                    id: `why-glow-${uid}`,
                    x: "-50%",
                    y: "-50%",
                    width: "200%",
                    height: "200%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                            stdDeviation: "2.2",
                            result: "b"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                    in: "b"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                    in: "SourceGraphic"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            arms.map(({ label, x1, y1, x2, y2 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2,
                    stroke: "rgb(229, 231, 235)",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                }, `base-${label}`, false, {
                    fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)),
            arms.map(({ label, x1, y1, x2, y2, gap, i })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2,
                    stroke: ACCENT,
                    strokeWidth: 3,
                    strokeLinecap: "round",
                    strokeDasharray: `${beamSeg} ${gap}`,
                    filter: `url(#why-glow-${uid})`,
                    initial: false,
                    animate: reduce ? {
                        strokeDashoffset: 0,
                        opacity: 0.6
                    } : {
                        strokeDashoffset: [
                            0,
                            -(beamSeg + gap)
                        ]
                    },
                    transition: reduce ? {
                        duration: 0
                    } : {
                        strokeDashoffset: {
                            duration: cycle,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * cycle / 4
                        }
                    }
                }, `beam-${label}`, false, {
                    fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: cx,
                cy: cy,
                r: rEms + 5,
                fill: "rgb(255, 247, 237)",
                opacity: 0.65
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                cx: cx,
                cy: cy,
                r: rEms,
                fill: FILL_CARD,
                stroke: STROKE,
                strokeWidth: 2,
                animate: reduce ? {} : {
                    scale: [
                        1,
                        1.04,
                        1
                    ],
                    strokeWidth: [
                        2,
                        2.35,
                        2
                    ]
                },
                transition: reduce ? {} : {
                    ...smoothRepeat,
                    duration: 2.4
                },
                style: {
                    transformOrigin: `${cx}px ${cy}px`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: cx,
                y: cy + 5,
                textAnchor: "middle",
                className: "fill-gray-900 font-mono font-semibold",
                style: {
                    fontSize: 12
                },
                children: "EMS"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            arms.map(({ label, nx, ny, i })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                            x: nx - halfW,
                            y: ny - halfH,
                            width: halfW * 2,
                            height: halfH * 2,
                            rx: 7,
                            fill: FILL_CARD,
                            stroke: STROKE,
                            strokeWidth: 1.5,
                            animate: reduce ? {} : {
                                stroke: [
                                    STROKE,
                                    STROKE,
                                    ACCENT,
                                    STROKE,
                                    STROKE
                                ]
                            },
                            transition: reduce ? {} : {
                                duration: cycle,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * cycle / 4,
                                times: [
                                    0,
                                    0.72,
                                    0.82,
                                    0.92,
                                    1
                                ]
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: nx,
                            y: ny + 4,
                            textAnchor: "middle",
                            className: "fill-gray-800 font-mono font-semibold",
                            style: {
                                fontSize: 10,
                                letterSpacing: "0.02em"
                            },
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    ]
                }, `box-${label}`, true, {
                    fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(AgnosticIllustration, "xfMyHNFebGjSN1/YPqrD8z5EdLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = AgnosticIllustration;
function ComplianceIllustration({ reduce }) {
    _s1();
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, "");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 240 220",
        className: "w-full max-w-[220px] h-auto mx-auto md:mx-0",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: `why-layer-clip-${uid}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: 40,
                            y: 44,
                            width: 160,
                            height: 120,
                            rx: 8
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `why-scan-${uid}`,
                        x1: "0%",
                        y1: "0%",
                        x2: "0%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: ACCENT,
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "50%",
                                stopColor: ACCENT,
                                stopOpacity: "0.35"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: ACCENT,
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: 40,
                y: 120,
                width: 160,
                height: 56,
                rx: 8,
                fill: FILL_CARD,
                stroke: STROKE,
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: 120,
                y: 152,
                textAnchor: "middle",
                className: "fill-gray-500",
                style: {
                    fontSize: 10
                },
                children: "dispatch core"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: 48,
                y: 72,
                width: 144,
                height: 52,
                rx: 6,
                fill: "white",
                stroke: MUTED,
                strokeWidth: 1.25
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                x: 56,
                y: 84,
                width: 128,
                height: 6,
                rx: 2,
                fill: "rgb(229, 231, 235)",
                animate: reduce ? {} : {
                    opacity: [
                        0.45,
                        1,
                        0.45
                    ],
                    scaleX: [
                        0.92,
                        1,
                        0.92
                    ]
                },
                style: {
                    transformOrigin: "120px 87px"
                },
                transition: reduce ? {} : {
                    duration: 1.65,
                    repeat: Infinity,
                    delay: 0.15,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                x: 56,
                y: 96,
                width: 96,
                height: 6,
                rx: 2,
                fill: "rgb(229, 231, 235)",
                animate: reduce ? {} : {
                    opacity: [
                        0.45,
                        1,
                        0.45
                    ],
                    scaleX: [
                        0.88,
                        1,
                        0.88
                    ]
                },
                style: {
                    transformOrigin: "104px 99px"
                },
                transition: reduce ? {} : {
                    duration: 1.65,
                    repeat: Infinity,
                    delay: 0.45,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                x: 40,
                y: 44,
                width: 160,
                height: 36,
                rx: 8,
                fill: FILL_CARD,
                stroke: ACCENT,
                strokeWidth: 2,
                animate: reduce ? {} : {
                    strokeWidth: [
                        2,
                        2.85,
                        2
                    ]
                },
                transition: reduce ? {} : {
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: 120,
                y: 68,
                textAnchor: "middle",
                className: "fill-gray-800 font-mono font-semibold",
                style: {
                    fontSize: 12
                },
                children: "21+ grid codes"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                x: 40,
                width: 160,
                height: 28,
                fill: `url(#why-scan-${uid})`,
                clipPath: `url(#why-layer-clip-${uid})`,
                initial: {
                    y: reduce ? 88 : 44
                },
                animate: reduce ? {
                    y: 88
                } : {
                    y: [
                        44,
                        128,
                        44
                    ]
                },
                transition: reduce ? {
                    duration: 0
                } : {
                    duration: 4.2,
                    repeat: Infinity,
                    ease: [
                        0.45,
                        0,
                        0.55,
                        1
                    ]
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: 190,
                cy: 56,
                r: 10,
                fill: ACCENT,
                opacity: 0.12
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M186 56l2.5 2.5 5.5-6",
                stroke: ACCENT,
                strokeWidth: 1.8,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_s1(ComplianceIllustration, "xfMyHNFebGjSN1/YPqrD8z5EdLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c1 = ComplianceIllustration;
function hexPathPointyTop(cx, cy, r) {
    const parts = [];
    for(let i = 0; i < 6; i++){
        const a = (-90 + i * 60) * Math.PI / 180;
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        parts.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
    }
    return `${parts.join(" ")} Z`;
}
/** 14+ Patents: stacked papers + hex badge (matches Why palette / motion). */ function PatentsIllustration({ reduce }) {
    _s2();
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, "");
    const hx = 130;
    const hy = 104;
    const hR = 36;
    const hexD = hexPathPointyTop(hx, hy, hR);
    const pivot = {
        x: 130,
        y: 218
    };
    const papers = [
        {
            x: 60,
            y: 162,
            w: 140,
            h: 74,
            rx: 9,
            rot: -5.5,
            fill: "rgb(241, 245, 249)",
            stroke: MUTED,
            sw: 1.15
        },
        {
            x: 67,
            y: 152,
            w: 134,
            h: 74,
            rx: 9,
            rot: -3.2,
            fill: "rgb(248, 250, 252)",
            stroke: MUTED,
            sw: 1.2
        },
        {
            x: 74,
            y: 142,
            w: 128,
            h: 74,
            rx: 9,
            rot: -1.4,
            fill: FILL_CARD,
            stroke: STROKE,
            sw: 1.45
        },
        {
            x: 81,
            y: 132,
            w: 122,
            h: 74,
            rx: 9,
            rot: 0,
            fill: "white",
            stroke: STROKE,
            sw: 2
        }
    ];
    const top = papers[papers.length - 1];
    const lineY0 = top.y + 26;
    const lineY1 = top.y + 42;
    const lineY2 = top.y + 58;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 260 260",
        className: "w-full max-w-[220px] h-auto mx-auto md:mx-0",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: `patent-stack-shadow-${uid}`,
                        x: "-25%",
                        y: "-15%",
                        width: "150%",
                        height: "140%",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                            dx: "0",
                            dy: "3",
                            stdDeviation: "4",
                            floodColor: "rgb(15,23,42)",
                            floodOpacity: "0.07"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: `patent-hex-glow-${uid}`,
                        x: "-35%",
                        y: "-35%",
                        width: "170%",
                        height: "170%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "1.8",
                                result: "blur"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "blur"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "SourceGraphic"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                        lineNumber: 376,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                filter: `url(#patent-stack-shadow-${uid})`,
                animate: reduce ? {} : {
                    y: [
                        0,
                        -5,
                        0
                    ]
                },
                transition: reduce ? {} : {
                    duration: 4,
                    repeat: Infinity,
                    ease: [
                        0.45,
                        0,
                        0.55,
                        1
                    ]
                },
                style: {
                    transformOrigin: `${pivot.x}px ${pivot.y}px`
                },
                children: [
                    papers.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            transform: `rotate(${p.rot} ${pivot.x} ${pivot.y})`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                                x: p.x,
                                width: p.w,
                                height: p.h,
                                rx: p.rx,
                                fill: p.fill,
                                stroke: p.stroke,
                                strokeWidth: p.sw,
                                initial: false,
                                animate: reduce ? {
                                    y: p.y
                                } : {
                                    y: [
                                        p.y,
                                        p.y - 2.2,
                                        p.y
                                    ]
                                },
                                transition: reduce ? {
                                    duration: 0
                                } : {
                                    duration: 2.75,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.18
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                lineNumber: 389,
                                columnNumber: 13
                            }, this)
                        }, i, false, {
                            fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: `rotate(${top.rot} ${pivot.x} ${pivot.y})`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: `M ${top.x + top.w - 18} ${top.y + 10} L ${top.x + top.w - 4} ${top.y + 10} L ${top.x + top.w - 4} ${top.y + 22} Z`,
                                fill: "rgb(243, 244, 246)",
                                stroke: MUTED,
                                strokeWidth: 0.9,
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                lineNumber: 415,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: `M ${top.x + 18} ${lineY0} H ${top.x + top.w - 28} M ${top.x + 18} ${lineY1} H ${top.x + top.w - 52} M ${top.x + 18} ${lineY2} H ${top.x + top.w - 40}`,
                                stroke: MUTED,
                                strokeWidth: 1.35,
                                strokeLinecap: "round",
                                animate: reduce ? {} : {
                                    opacity: [
                                        0.38,
                                        0.72,
                                        0.38
                                    ]
                                },
                                transition: reduce ? {} : {
                                    duration: 2.6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                lineNumber: 422,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                style: {
                    transformOrigin: `${hx}px ${hy}px`
                },
                animate: reduce ? {} : {
                    y: [
                        0,
                        -3,
                        0
                    ]
                },
                transition: reduce ? {} : {
                    duration: 4,
                    repeat: Infinity,
                    ease: [
                        0.45,
                        0,
                        0.55,
                        1
                    ],
                    delay: 0.12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: hx,
                        cy: hy,
                        r: hR + 10,
                        fill: ACCENT,
                        opacity: 0.08
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                        lineNumber: 439,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: hexD,
                        fill: "rgb(255, 252, 248)",
                        stroke: ACCENT,
                        strokeWidth: 2,
                        strokeLinejoin: "round",
                        filter: `url(#patent-hex-glow-${uid})`,
                        animate: reduce ? {} : {
                            strokeWidth: [
                                2,
                                2.45,
                                2
                            ]
                        },
                        transition: reduce ? {} : {
                            ...smoothRepeat,
                            duration: 2.35
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                        lineNumber: 440,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: hx,
                        y: hy,
                        textAnchor: "middle",
                        dominantBaseline: "central",
                        className: "fill-gray-900 font-mono font-semibold",
                        style: {
                            fontSize: 15,
                            letterSpacing: "-0.02em"
                        },
                        children: "14+"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 434,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: 130,
                y: 248,
                textAnchor: "middle",
                className: "fill-gray-500 font-mono",
                style: {
                    fontSize: 9,
                    letterSpacing: "0.04em"
                },
                children: "digital twin · EMS · AURA"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 462,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
        lineNumber: 361,
        columnNumber: 5
    }, this);
}
_s2(PatentsIllustration, "xfMyHNFebGjSN1/YPqrD8z5EdLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c2 = PatentsIllustration;
/** Proven at Scale: chart panel, grid, gradient bars with left→right capacity wave, dual trend lines. */ function ScaleIllustration({ reduce }) {
    _s3();
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, "");
    const bars = [
        32,
        48,
        64,
        88,
        104
    ];
    const baseY = 196;
    const startX = 52;
    const barW = 22;
    const step = 34;
    const panel = {
        x: 34,
        y: 58,
        w: 192,
        h: 152,
        rx: 10
    };
    const barStroke = "rgb(209, 213, 219)";
    /** Growth trajectory: muted guide under the bars, accent dashed on top. */ const trend = {
        x1: 46,
        y1: 168,
        x2: 216,
        y2: 78
    };
    const dashUnit = 6;
    const gapUnit = 7;
    const dashPattern = dashUnit + gapUnit;
    const waveDuration = 2.85;
    const waveStagger = 0.34;
    const waveRepeatDelay = 1.35;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 260 260",
        className: "w-full max-w-[220px] h-auto mx-auto md:mx-0",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: `scale-trend-glow-${uid}`,
                        x: "-20%",
                        y: "-20%",
                        width: "140%",
                        height: "140%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "1.2",
                                result: "b"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                lineNumber: 504,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "b"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                        lineNumber: 506,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "SourceGraphic"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                        lineNumber: 507,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                lineNumber: 505,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this),
                    bars.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: `scale-bar-grad-${uid}-${i}`,
                            x1: "0",
                            y1: "1",
                            x2: "0",
                            y2: "0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "rgb(218, 222, 228)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                    lineNumber: 512,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "55%",
                                    stopColor: "rgb(232, 234, 238)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                    lineNumber: 513,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "rgb(241, 243, 246)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                                    lineNumber: 514,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, `g-${i}`, true, {
                            fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                            lineNumber: 511,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 502,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: 130,
                y: 34,
                textAnchor: "middle",
                className: "fill-gray-400 font-mono",
                style: {
                    fontSize: 9,
                    letterSpacing: "0.06em"
                },
                children: "GW / footprint"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 519,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: panel.x,
                y: panel.y,
                width: panel.w,
                height: panel.h,
                rx: panel.rx,
                fill: FILL_CARD,
                stroke: "rgb(229, 231, 235)",
                strokeWidth: 1.25
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 529,
                columnNumber: 7
            }, this),
            [
                0.28,
                0.52,
                0.76
            ].map((t, gi)=>{
                const y = panel.y + panel.h * t;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: panel.x + 10,
                    y1: y,
                    x2: panel.x + panel.w - 10,
                    y2: y,
                    stroke: "rgb(243, 244, 246)",
                    strokeWidth: 1
                }, gi, false, {
                    fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                    lineNumber: 544,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: panel.x + 10,
                y1: baseY,
                x2: panel.x + panel.w - 10,
                y2: baseY,
                stroke: MUTED,
                strokeOpacity: 0.35,
                strokeWidth: 1.25
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 556,
                columnNumber: 7
            }, this),
            bars.map((h, i)=>{
                const bx = startX + i * step;
                const kLow = 0.88;
                const kMid = 0.96;
                const kPeak = 1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                            x: bx,
                            width: barW,
                            rx: 4,
                            fill: `url(#scale-bar-grad-${uid}-${i})`,
                            stroke: barStroke,
                            strokeWidth: 1,
                            initial: false,
                            animate: reduce ? {
                                height: h,
                                y: baseY - h
                            } : {
                                height: [
                                    h * kLow,
                                    h * kMid,
                                    h * kPeak,
                                    h * kMid,
                                    h * kPeak,
                                    h * kMid
                                ],
                                y: [
                                    baseY - h * kLow,
                                    baseY - h * kMid,
                                    baseY - h * kPeak,
                                    baseY - h * kMid,
                                    baseY - h * kPeak,
                                    baseY - h * kMid
                                ]
                            },
                            transition: reduce ? {
                                duration: 0
                            } : {
                                duration: waveDuration,
                                repeat: Infinity,
                                repeatDelay: waveRepeatDelay,
                                ease: [
                                    0.45,
                                    0,
                                    0.55,
                                    1
                                ],
                                delay: i * waveStagger,
                                times: [
                                    0,
                                    0.22,
                                    0.42,
                                    0.55,
                                    0.72,
                                    1
                                ]
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                            lineNumber: 573,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                            x: bx,
                            width: barW,
                            height: 2.5,
                            rx: 1.25,
                            fill: ACCENT,
                            fillOpacity: 0.28,
                            initial: false,
                            animate: reduce ? {
                                y: baseY - h - 2.5,
                                opacity: 0.18
                            } : {
                                y: [
                                    baseY - h * kLow - 2.5,
                                    baseY - h * kMid - 2.5,
                                    baseY - h * kPeak - 2.5,
                                    baseY - h * kMid - 2.5,
                                    baseY - h * kPeak - 2.5,
                                    baseY - h * kMid - 2.5
                                ],
                                opacity: [
                                    0.12,
                                    0.28,
                                    0.42,
                                    0.26,
                                    0.38,
                                    0.22
                                ]
                            },
                            transition: reduce ? {
                                duration: 0
                            } : {
                                duration: waveDuration,
                                repeat: Infinity,
                                repeatDelay: waveRepeatDelay,
                                ease: [
                                    0.45,
                                    0,
                                    0.55,
                                    1
                                ],
                                delay: i * waveStagger,
                                times: [
                                    0,
                                    0.22,
                                    0.42,
                                    0.55,
                                    0.72,
                                    1
                                ]
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                            lineNumber: 616,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                    lineNumber: 572,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: trend.x1,
                y1: trend.y1,
                x2: trend.x2,
                y2: trend.y2,
                stroke: MUTED,
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeDasharray: "4 9",
                strokeOpacity: 0.4
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 657,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                x1: trend.x1,
                y1: trend.y1,
                x2: trend.x2,
                y2: trend.y2,
                stroke: ACCENT,
                strokeWidth: 2.25,
                strokeLinecap: "round",
                strokeDasharray: `${dashUnit} ${gapUnit}`,
                filter: `url(#scale-trend-glow-${uid})`,
                initial: false,
                animate: reduce ? {
                    strokeDashoffset: 0
                } : {
                    strokeDashoffset: [
                        0,
                        -dashPattern * 4
                    ]
                },
                transition: reduce ? {
                    duration: 0
                } : {
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "linear"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 669,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
        lineNumber: 495,
        columnNumber: 5
    }, this);
}
_s3(ScaleIllustration, "xfMyHNFebGjSN1/YPqrD8z5EdLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c3 = ScaleIllustration;
function WhyIllustration({ variant }) {
    _s4();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])() ?? false;
    switch(variant){
        case "agnostic":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AgnosticIllustration, {
                reduce: reduce
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 696,
                columnNumber: 14
            }, this);
        case "compliance":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ComplianceIllustration, {
                reduce: reduce
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 698,
                columnNumber: 14
            }, this);
        case "patents":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PatentsIllustration, {
                reduce: reduce
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 700,
                columnNumber: 14
            }, this);
        case "scale":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScaleIllustration, {
                reduce: reduce
            }, void 0, false, {
                fileName: "[project]/src/components/sections/WhyIllustrations.tsx",
                lineNumber: 702,
                columnNumber: 14
            }, this);
        default:
            return null;
    }
}
_s4(WhyIllustration, "sF4KtIiIlOcKcWMXs33EtX/h6fI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c4 = WhyIllustration;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "AgnosticIllustration");
__turbopack_context__.k.register(_c1, "ComplianceIllustration");
__turbopack_context__.k.register(_c2, "PatentsIllustration");
__turbopack_context__.k.register(_c3, "ScaleIllustration");
__turbopack_context__.k.register(_c4, "WhyIllustration");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/fimer_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/fimer_logo.984e7900.png");}),
"[project]/src/assets/logo/fimer_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/fimer_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$fimer_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/fimer_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$fimer_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 3084,
    height: 1589,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAcklEQVR42iWNIQoFIQAF93QLC7vFqEGTFtGgmAS9gM2qmCxmz/c++PPMMNf7vvDew1oLrTVCCHDOIaWE7/twMcaQc0atFWstzDkPHGNACIGLUooYI0op2Huj936C1tpfuO8bhBBwzmGMgZTyrJRSeJ4HP6l5S9yB5wOjAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/abb_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/abb_logo.da5fd0fe.png");}),
"[project]/src/assets/logo/abb_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/abb_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$abb_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/abb_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$abb_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 3412,
    height: 1626,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAeElEQVR42hXGMQqFIACAYa8cRdHYBYIIIoKCIHDRWZzUSW/g5A30DP/jbZ9orWGModaKcw6lFDlnpJR47xExRuZ5JqXEdV1M04S1lmEYWNcVcRwHy7LwPA/nedJ1Hfd9M44jfd8jvu+jlILWmr/3fSeEwLZtvO/LD+lSXdwSCEhyAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/kec_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/kec_logo.b645b9dd.png");}),
"[project]/src/assets/logo/kec_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/kec_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$kec_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/kec_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$kec_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 195,
    height: 108,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR42gGEAHv/AD4+Ptc3NzeyMDAwnkVFRdVLS0uzNDQ0mTk5Odc1NTXDAD4+Puo9PT3mHh4eaU1NTdZYWFiKPT09tiQkJIsbGxtkAD4+Pug+Pj7nIyMjekpKStVLS0t9Ojo6siMjI4oYGBhcADw8PNQ3NzeyMjIyrlJSUtNhYWGzNzc3ljo6OtYzMzO8SvMr2OwDmOQAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/refex_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/refex_logo.eccf5eae.png");}),
"[project]/src/assets/logo/refex_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/refex_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$refex_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/refex_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$refex_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 229,
    height: 77,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/AA8PDyASEhIiGBgYKzk5OWQaGhorFBQUIgcHBwwMDAwVADQ0NG9ERESCTk5OjFFRUY9SUlKMTk5OhEVFRXoxMTFWACgoKFI3NzdqRUVFfDk5OWJKSkqASEhIejY2Nl8uLi5SqjYWigBcsfMAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/adani_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/adani_logo.65e22464.png");}),
"[project]/src/assets/logo/adani_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/adani_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$adani_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/adani_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$adani_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 216,
    height: 42,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/AB8fHz8pKSlQJiYmSCUlJUUSEhIgBAQECAEBAQMBAQECAD8/P4U+Pj58RkZGhjc3N2oZGRkwERERJh0dHT0bGxs8PLcKHzWxj4sAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/blupine_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/blupine_logo.72905066.png");}),
"[project]/src/assets/logo/blupine_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/blupine_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$blupine_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/blupine_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$blupine_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 300,
    height: 188,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAlklEQVR42k2OuQrCQBiEtwnJBoOEJC7Z7H1WWsWrE8FGC5uFgDaWtr5/468gOM3ADHwzCP0pyzJsrV0753Z5ns++IaX00jTNpigKUtf10nufQgipbdsRY0xRjPGltX4wxpJSahqG4SyEmKSUNyA9Eef8CoSx67o9EFZVVVmgLWBu/nFECDlAue37/ghzJ2PMvSxL+vv1BjqYEOSSxpb0AAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/etap_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/etap_logo.c0faf6ed.png");}),
"[project]/src/assets/logo/etap_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/etap_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$etap_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/etap_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$etap_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 3420,
    height: 1550,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAcElEQVR42h2MMQqAIAAA/f8bgraiIogoQXDyDQ46OggigoPgemHTHTecaK1RSsFai3OOnDOjDdZaEfu+s20b67qiteY4Ds7z5L5vlFKIeZ55nofruv64LAvTNPG+L8YYRIyRlNK/HB5CQEqJ957eOx/GPGtfJGncLgAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/ampex_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ampex_logo.346ba06b.png");}),
"[project]/src/assets/logo/ampex_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/ampex_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$ampex_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/ampex_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$ampex_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 528,
    height: 135,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/ADAwMHQtLS1rMzMzezk5OYg2NjaDOTk5jCgoKGEyMjJ3ABUVFVIVFRVLFhYWUxUVFVEQEBBCGBgYXBMTE0wVFRVR55gM6zH3uFEAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/renew_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/renew_logo.e418458e.png");}),
"[project]/src/assets/logo/renew_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/renew_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$renew_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/renew_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$renew_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 3016,
    height: 824,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAQklEQVR42h3IoQ0AIQxAUfZfAUhQgCJp6mtqKiq7z7/k7GtjDFSVquLei4jg7kQEmUk75/xoZrz36L2z1mLOyd6bD2giMTBB8si8AAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/spring_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/spring_logo.d5084f30.png");}),
"[project]/src/assets/logo/spring_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/spring_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$spring_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/spring_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$spring_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 332,
    height: 121,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/AD4+Pkh/f3+3T09PZQQEBAMDAwMNDQ0NGgwMDBgBAQEFAHh4eKaNjY3+fn5+wxERERAODg4zExMTQBMTE0IICAgeAEtLS1eLi4vHYGBgdwcHBwcNDQ0SDg4OEw8PDxYMDAwQTckULWZY7L0AAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/o2_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/o2_logo.2ba2561b.png");}),
"[project]/src/assets/logo/o2_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/o2_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$o2_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/o2_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$o2_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 916,
    height: 532,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAaklEQVR42lXLwQoAEQAE0P3/f/APLk6KUpx9AopycXIQMburdsscpjm8ufBkzgmtNQghEEJgjIEv11u1VlBK4b2HlBKllBO01sAYgzEGnHOklE6w1kKMEUopWGv3PkDvfb9CCHDOIef8gxteDJR11eRN0gAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/inox_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/inox_logo.1bdafc48.png");}),
"[project]/src/assets/logo/inox_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/inox_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$inox_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/inox_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$inox_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 329,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAVUlEQVR42h2KIQpAIRTAPL/RIihqsIgYvIAYxS7Yvcg+/4WxsCnvPSEEjDGC1pqcM6UUUkqoWqsMzjmsteLeO601Yoyo9x7nHNZa7L2ZczLG4N7L3z5muUjuyXmtKgAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/cleantech_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cleantech_logo.02acfe42.png");}),
"[project]/src/assets/logo/cleantech_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/cleantech_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$cleantech_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/cleantech_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$cleantech_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 300,
    height: 58,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAOElEQVR42i2KSQoAIAwDe+1yFmPRzwj+/0mm4iEME0YAbHefZtbJjIhU1UYHfQiDw3OV/L2gyOEClaYETUeySzwAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/jsw_logo.jpeg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/jsw_logo.54cdcb11.jpeg");}),
"[project]/src/assets/logo/jsw_logo.jpeg.mjs { IMAGE => \"[project]/src/assets/logo/jsw_logo.jpeg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$jsw_logo$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/jsw_logo.jpeg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$jsw_logo$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 288,
    height: 83,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAACAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDutMnmN5ekyuT5v94+poA//9k="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/alfanar_logo.avif (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/alfanar_logo.6596f5fe.avif");}),
"[project]/src/assets/logo/alfanar_logo.avif.mjs { IMAGE => \"[project]/src/assets/logo/alfanar_logo.avif (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$alfanar_logo$2e$avif__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/alfanar_logo.avif (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$alfanar_logo$2e$avif__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 416,
    height: 274,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAX0lEQVR42oWOqwoAIQDA/PjDnzJoEEUMPsBqM4hRwbiD+4EbrC1M8IMIIaC1Zu/NWot7L+cc5pz03hHP8yClJKWEtfaLvfcYY3DOIWKMKKUYY5Bz/iylUGultYb4e3gB+UqRdZ4ntrgAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/avaada_logo.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/avaada_logo.7c87310e.jpg");}),
"[project]/src/assets/logo/avaada_logo.jpg.mjs { IMAGE => \"[project]/src/assets/logo/avaada_logo.jpg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$avaada_logo$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/avaada_logo.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$avaada_logo$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 200,
    height: 85,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAADAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1IyN5wfPzdM0Af//Z"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/azure_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/azure_logo.a484b31c.png");}),
"[project]/src/assets/logo/azure_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/azure_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$azure_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/azure_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$azure_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 187,
    height: 64,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAV0lEQVR42l3KMQqAMBBE0fUAlhYhyRIlCbtgsYhgET1AQMj9b+PUPphm+DRDjHFdgH4mIGbezKyXUh7nnCG+8DXv/YHtFELgnPMtIgN7U0qt1tpVdSA4P5kcCu4PNJ8QAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/ayana_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ayana_logo.2c89710d.png");}),
"[project]/src/assets/logo/ayana_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/ayana_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$ayana_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/ayana_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$ayana_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1559,
    height: 458,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAOklEQVR42h2JOQoAUQjF/v3PZ2chKFauN3iD0ySQPBEBEcHM4O5QVVxj5t/vcHNmsLvobmQmIgJVhQ987jrM3o9a7QAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/essens_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/essens_logo.5cfea5bc.png");}),
"[project]/src/assets/logo/essens_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/essens_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$essens_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/essens_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$essens_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 300,
    height: 73,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/ACQkJEQyMjJZFxcXMyAgIFAgICBRGhoaQgkJCRQEBAQIABoaGjEkJCRODg4OHRISEiUTExMmEhISJRISEiUREREgHT4Hjz7GQkQAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/sw_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/sw_logo.a4bad786.png");}),
"[project]/src/assets/logo/sw_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/sw_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$sw_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/sw_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$sw_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1477,
    height: 329,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAQ0lEQVR42hXKOw7AIAwDUK6Qj6J8lg4tdOtQIcT9L0YyeHi2W0Rsd19mNoloqOpfFpEPEXvLsjPzmxkAcKWfco53HQ7q9wauVHD3NwAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/vena_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/vena_logo.27a4fa66.png");}),
"[project]/src/assets/logo/vena_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/vena_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$vena_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/vena_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$vena_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 600,
    height: 232,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/ACQkJHotLS1yBAQECgoKCi0NDQ06DAwMNgYGBhoAAAAAAEREROtdXV3XFxcXLRAQEEcTExNWFBQUWA8PD0MJCQknAEdHR9JpaWnfHBwcNQsLCzEODg49DQ0NOA0NDTkKCgos9sQPl+v4BQUAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/waree_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/waree_logo.bbfa6123.png");}),
"[project]/src/assets/logo/waree_logo.png.mjs { IMAGE => \"[project]/src/assets/logo/waree_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$waree_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/waree_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$waree_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 133,
    height: 37,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/AEBAQLs9PT2xLi4uijQ0NJo5OTmiNzc3oTg4OKUeHh5MABwcHEorKyteJiYmVysrK1wqKipaKSkpXiQkJFcICAgWSx8PeR/wAqEAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/logo/kalpatru_logo.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/kalpatru_logo.9116afa8.webp");}),
"[project]/src/assets/logo/kalpatru_logo.webp.mjs { IMAGE => \"[project]/src/assets/logo/kalpatru_logo.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$kalpatru_logo$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/logo/kalpatru_logo.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$kalpatru_logo$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 294,
    height: 79,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4THMAAAAvB0AAEM1VICICHghIDQAAAIAHQIAAAJxgCAAAAAAAEAAAAAAAAAAAAAAAAAAQAgAAAAgYAQAARHgggAQAAAAA5w+wAQwDAAAAAAAAAAAAAAAAAAwAAAAAAGAAAAxsYBgBDGZIo7KOKZ34z/aTc0/AgvhUAA=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/LogoTicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoTicker",
    ()=>LogoTicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$fimer_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$fimer_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/fimer_logo.png.mjs { IMAGE => "[project]/src/assets/logo/fimer_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$abb_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$abb_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/abb_logo.png.mjs { IMAGE => "[project]/src/assets/logo/abb_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$kec_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$kec_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/kec_logo.png.mjs { IMAGE => "[project]/src/assets/logo/kec_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$refex_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$refex_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/refex_logo.png.mjs { IMAGE => "[project]/src/assets/logo/refex_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$adani_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$adani_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/adani_logo.png.mjs { IMAGE => "[project]/src/assets/logo/adani_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$blupine_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$blupine_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/blupine_logo.png.mjs { IMAGE => "[project]/src/assets/logo/blupine_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$etap_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$etap_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/etap_logo.png.mjs { IMAGE => "[project]/src/assets/logo/etap_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$ampex_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$ampex_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/ampex_logo.png.mjs { IMAGE => "[project]/src/assets/logo/ampex_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$renew_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$renew_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/renew_logo.png.mjs { IMAGE => "[project]/src/assets/logo/renew_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$spring_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$spring_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/spring_logo.png.mjs { IMAGE => "[project]/src/assets/logo/spring_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$o2_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$o2_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/o2_logo.png.mjs { IMAGE => "[project]/src/assets/logo/o2_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$inox_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$inox_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/inox_logo.png.mjs { IMAGE => "[project]/src/assets/logo/inox_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$cleantech_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$cleantech_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/cleantech_logo.png.mjs { IMAGE => "[project]/src/assets/logo/cleantech_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$jsw_logo$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$jsw_logo$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/jsw_logo.jpeg.mjs { IMAGE => "[project]/src/assets/logo/jsw_logo.jpeg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$alfanar_logo$2e$avif$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$alfanar_logo$2e$avif__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/alfanar_logo.avif.mjs { IMAGE => "[project]/src/assets/logo/alfanar_logo.avif (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$avaada_logo$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$avaada_logo$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/avaada_logo.jpg.mjs { IMAGE => "[project]/src/assets/logo/avaada_logo.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$azure_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$azure_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/azure_logo.png.mjs { IMAGE => "[project]/src/assets/logo/azure_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$ayana_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$ayana_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/ayana_logo.png.mjs { IMAGE => "[project]/src/assets/logo/ayana_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$essens_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$essens_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/essens_logo.png.mjs { IMAGE => "[project]/src/assets/logo/essens_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$sw_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$sw_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/sw_logo.png.mjs { IMAGE => "[project]/src/assets/logo/sw_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$vena_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$vena_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/vena_logo.png.mjs { IMAGE => "[project]/src/assets/logo/vena_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$waree_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$waree_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/waree_logo.png.mjs { IMAGE => "[project]/src/assets/logo/waree_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$kalpatru_logo$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$kalpatru_logo$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/logo/kalpatru_logo.webp.mjs { IMAGE => "[project]/src/assets/logo/kalpatru_logo.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EdgeLines.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const logos = [
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$ampex_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$ampex_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Ampex"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$renew_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$renew_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "ReNew"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$spring_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$spring_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Spring Energy"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$o2_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$o2_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "O2 Power"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$inox_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$inox_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "INOX Wind"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$abb_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$abb_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "ABB"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$adani_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$adani_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Adani"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$etap_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$etap_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "ETAP"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$blupine_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$blupine_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "BluPine"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$fimer_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$fimer_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "FIMER"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$cleantech_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$cleantech_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Cleantech"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$jsw_logo$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$jsw_logo$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "JSW"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$alfanar_logo$2e$avif$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$alfanar_logo$2e$avif__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Alfanar"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$avaada_logo$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$avaada_logo$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Avaada"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$azure_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$azure_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Azure Power"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$ayana_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$ayana_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Ayana"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$sw_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$sw_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Sterling & Wilson"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$kalpatru_logo$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$kalpatru_logo$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Kalpataru"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$vena_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$vena_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Vena Energy"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$kec_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$kec_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "KEC International"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$refex_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$refex_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Refex"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$waree_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$waree_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Waaree"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2f$essens_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$logo$2f$essens_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Essens"
    }
];
const setGapClass = "gap-16 sm:gap-24 lg:gap-32";
const LogoTicker = ()=>{
    _s();
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const firstSetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [shiftPx, setShiftPx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "LogoTicker.useLayoutEffect": ()=>{
            const track = trackRef.current;
            const firstSet = firstSetRef.current;
            if (!track || !firstSet) return;
            const update = {
                "LogoTicker.useLayoutEffect.update": ()=>{
                    const gap = parseFloat(getComputedStyle(track).gap) || 0;
                    const w = firstSet.getBoundingClientRect().width;
                    setShiftPx(`${w + gap}px`);
                }
            }["LogoTicker.useLayoutEffect.update"];
            update();
            const ro = new ResizeObserver(update);
            ro.observe(track);
            ro.observe(firstSet);
            return ({
                "LogoTicker.useLayoutEffect": ()=>ro.disconnect()
            })["LogoTicker.useLayoutEffect"];
        }
    }["LogoTicker.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "logo-ticker",
        "data-snap-section": true,
        className: "relative w-full px-4 sm:px-6 py-4 sm:py-5 md:py-6 overflow-hidden bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgeLines"], {}, void 0, false, {
                fileName: "[project]/src/components/sections/LogoTicker.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-2 sm:gap-2.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-gray-50/50 py-px sm:py-0.5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] pointer-events-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: trackRef,
                            style: shiftPx ? {
                                ["--logo-ticker-shift"]: shiftPx
                            } : undefined,
                            className: `flex w-max flex-none ${setGapClass} animate-logo-ticker will-change-transform motion-reduce:animate-none group-hover:[animation-play-state:paused]`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: firstSetRef,
                                    className: `flex shrink-0 items-center ${setGapClass}`,
                                    children: logos.map((logo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: logo.src,
                                            alt: logo.alt,
                                            className: "h-8 w-auto max-w-[112px] sm:h-9 sm:max-w-[128px] lg:h-10 lg:max-w-[144px] shrink-0 object-contain opacity-70 grayscale transition-[opacity,filter] duration-300 ease-out hover:opacity-100 hover:grayscale-0",
                                            width: 144,
                                            height: 40,
                                            sizes: "(max-width: 640px) 112px, (max-width: 1024px) 128px, 144px"
                                        }, logo.alt, false, {
                                            fileName: "[project]/src/components/sections/LogoTicker.tsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/LogoTicker.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex shrink-0 items-center ${setGapClass}`,
                                    "aria-hidden": true,
                                    children: logos.map((logo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: logo.src,
                                            alt: "",
                                            className: "h-8 w-auto max-w-[112px] sm:h-9 sm:max-w-[128px] lg:h-10 lg:max-w-[144px] shrink-0 object-contain opacity-70 grayscale transition-[opacity,filter] duration-300 ease-out hover:opacity-100 hover:grayscale-0",
                                            width: 144,
                                            height: 40,
                                            sizes: "(max-width: 640px) 112px, (max-width: 1024px) 128px, 144px"
                                        }, `dup-${logo.alt}`, false, {
                                            fileName: "[project]/src/components/sections/LogoTicker.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/LogoTicker.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/LogoTicker.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/LogoTicker.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/LogoTicker.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/LogoTicker.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/LogoTicker.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LogoTicker, "6hp8Jn8Jp9XeiEnKBtvJ9dlsYsE=");
_c = LogoTicker;
var _c;
__turbopack_context__.k.register(_c, "LogoTicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Leadership.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Leadership",
    ()=>Leadership
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EdgeLines.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProofHoverGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ProofHoverGrid.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const LEADERSHIP_ITEMS = [
    {
        title: "Data Centres as Virtual Power Plants",
        description: "How data centres can be orchestrated as dispatchable grid assets.",
        pdfHref: "/DataCentresasVPP.pdf"
    },
    {
        title: "Alberta TCDC — Grid Modernisation",
        description: "Transmission congestion and dynamic capacity in Alberta's evolving grid.",
        pdfHref: "/AlbertaTCDC.pdf"
    },
    {
        title: "Smart EMS for Data Centres",
        description: "EMS architecture for large-scale data centre energy optimisation.",
        pdfHref: "/SmartEMSDataCentres.pdf"
    },
    {
        title: "Unlocking India's Renewable Grid",
        description: "The intelligence layer India's energy transition needs.",
        pdfHref: "/UnlockingIndiaRenewableGrid.pdf"
    }
];
const Leadership = ()=>{
    _s();
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "leadership",
        "data-snap-section": true,
        className: "relative w-full px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgeLines"], {}, void 0, false, {
                fileName: "[project]/src/components/sections/Leadership.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start gap-8 sm:gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start gap-4 sm:gap-6 max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-gray-600",
                                children: "THOUGHT LEADERSHIP"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Leadership.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-sans font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl",
                                children: "The Thinking Behind The Platform"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Leadership.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Leadership.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroup"], {
                        id: "leadership-grid-hover",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-0 w-full pb-2",
                            children: LEADERSHIP_ITEMS.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group block p-2.5 sm:p-3 h-full w-full",
                                    onMouseEnter: ()=>setHoveredIndex(idx),
                                    onMouseLeave: ()=>setHoveredIndex(null),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            initial: false,
                                            children: hoveredIndex === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                layoutId: "leadershipHoverBackground",
                                                style: {
                                                    borderRadius: 6
                                                },
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 520,
                                                    damping: 38,
                                                    mass: 0.8
                                                },
                                                className: "pointer-events-none absolute inset-0 z-10 block h-full w-full bg-[#FF7F00]/12 dark:bg-orange-500/15"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Leadership.tsx",
                                                lineNumber: 72,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Leadership.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProofHoverGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProofCard"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-sans font-semibold text-gray-900 text-base sm:text-lg leading-snug tracking-tight",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Leadership.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 text-sm leading-relaxed text-gray-600",
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Leadership.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.pdfHref,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#FF7F00] transition-colors hover:text-[#e67200]",
                                                    children: [
                                                        "Download PDF",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "aria-hidden": true,
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Leadership.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/Leadership.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Leadership.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, item.title, true, {
                                    fileName: "[project]/src/components/sections/Leadership.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Leadership.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Leadership.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Leadership.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Leadership.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Leadership, "9iVkaaUbrFxVCU6MuI1jK6905pI=");
_c = Leadership;
var _c;
__turbopack_context__.k.register(_c, "Leadership");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ShimmerButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShimmerButton",
    ()=>ShimmerButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const ShimmerButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = ({ shimmerColor = "#fbbf24", shimmerSize = "0.05em", shimmerDuration = "2s", borderRadius = "100px", // default darker orange background (visible in both light and dark themes)
background = "#E56A1D", className, children, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        style: {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-transparent px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap text-white [background:var(--bg)]", "transform-gpu transition-all duration-300 ease-in-out active:translate-y-px", // ensure IBM Plex Sans is used and text is bold
        "font-sans font-bold text-xs sm:text-sm", // hover effects: darker background and text shadow
        "hover:brightness-90 hover:[text-shadow:0_2px_8px_rgba(0,0,0,0.4)]", className),
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-z-30 blur-[1px]", "[container-type:size] absolute inset-0 overflow-visible"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-shimmer-slide absolute inset-0 [aspect-ratio:1] h-[100cqh] [border-radius:0] [mask:none]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin-around absolute -inset-full w-auto [translate:0_0] rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_calc(var(--spread)*1.5),transparent_calc(var(--spread)*1.5))]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ShimmerButton.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ShimmerButton.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ShimmerButton.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 -z-10 [border-radius:var(--radius)]", "animate-spin-around", "pointer-events-none")
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ShimmerButton.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 size-full", "rounded-2xl px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]", // transition
                "transform-gpu transition-all duration-300 ease-in-out", // on hover
                "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]", // on click
                "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]")
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ShimmerButton.tsx",
                lineNumber: 83,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute [inset:var(--cut)] -z-20 [border-radius:var(--radius)] [background:var(--bg)]")
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ShimmerButton.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/ShimmerButton.tsx",
        lineNumber: 34,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = ShimmerButton;
ShimmerButton.displayName = "ShimmerButton";
var _c, _c1;
__turbopack_context__.k.register(_c, "ShimmerButton$React.forwardRef");
__turbopack_context__.k.register(_c1, "ShimmerButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ShimmerButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EdgeLines.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const mapsEmbedSrc = ()=>{
    const key = ("TURBOPACK compile-time value", "AIzaSyBrO7xxCyWDUjsWfIvWO9PYob638is7Hbw");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const q = "Smart+Grid+Analytics+Pvt+Ltd,2nd+Floor+MSM+Plaza+Service+Road+Outer+Ring+Rd+Banaswadi+Bengaluru+Karnataka+560113";
    return `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(key)}&q=${q}&zoom=15&maptype=roadmap`;
};
const inputClassName = "w-full rounded-[6px] border border-gray-300 bg-white px-3 py-2 sm:px-4 sm:py-2.5 text-sm text-gray-900 placeholder:text-gray-500 transition-[border-color,box-shadow] duration-200 ease-out focus:border-[#FF7F00] focus:outline-none focus:ring-2 focus:ring-[#FF7F00]/20 font-sans";
const labelClassName = "mb-1.5 block text-sm font-medium text-gray-900 font-sans";
const ContactSection = ()=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        company: "",
        message: ""
    });
    const [privacyAccepted, setPrivacyAccepted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                setSubmitStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    message: ""
                });
                setPrivacyAccepted(false);
                setTimeout(()=>{
                    setSubmitStatus("idle");
                }, 5000);
            } else {
                setSubmitStatus("error");
                console.error("Error sending email:", data.error);
                setTimeout(()=>{
                    setSubmitStatus("idle");
                }, 5000);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
            setTimeout(()=>{
                setSubmitStatus("idle");
            }, 5000);
        } finally{
            setIsSubmitting(false);
        }
    };
    const embedUrl = mapsEmbedSrc();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        "data-snap-section": true,
        className: "relative w-full px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EdgeLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgeLines"], {}, void 0, false, {
                fileName: "[project]/src/components/sections/ContactSection.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 w-full overflow-hidden border border-gray-200/90 bg-white shadow-sm order-1 lg:order-2",
                            style: {
                                borderRadius: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-4 sm:space-y-5 p-5 sm:p-6 lg:p-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "contact-name",
                                                className: labelClassName,
                                                children: "Name *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "contact-name",
                                                name: "name",
                                                required: true,
                                                value: formData.name,
                                                onChange: handleChange,
                                                className: inputClassName,
                                                placeholder: "Your full name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "contact-email",
                                                className: labelClassName,
                                                children: "Email *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                id: "contact-email",
                                                name: "email",
                                                required: true,
                                                value: formData.email,
                                                onChange: handleChange,
                                                className: inputClassName,
                                                placeholder: "your.email@company.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "contact-company",
                                                className: labelClassName,
                                                children: "Company"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "contact-company",
                                                name: "company",
                                                value: formData.company,
                                                onChange: handleChange,
                                                className: inputClassName,
                                                placeholder: "Your company name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "contact-message",
                                                className: labelClassName,
                                                children: "Message *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                id: "contact-message",
                                                name: "message",
                                                required: true,
                                                value: formData.message,
                                                onChange: handleChange,
                                                rows: 3,
                                                className: `${inputClassName} resize-none`,
                                                placeholder: "Tell us about your project and requirements..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex cursor-pointer items-start gap-2 sm:gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-0.5 flex h-5 items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: privacyAccepted,
                                                        onChange: (e)=>setPrivacyAccepted(e.target.checked),
                                                        required: true,
                                                        className: "size-4 cursor-pointer rounded border-gray-300 bg-white text-[#FF7F00] focus:ring-2 focus:ring-[#FF7F00]/30 focus:ring-offset-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm leading-relaxed text-gray-600 font-sans",
                                                    children: [
                                                        "We value your privacy. By submitting this form, you agree to our",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "/privacy-policy",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "font-medium text-[#FF7F00] underline transition-colors hover:text-[#e67200]",
                                                            onClick: (e)=>e.stopPropagation(),
                                                            children: "Privacy Policy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/ContactSection.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShimmerButton"], {
                                            type: "submit",
                                            disabled: isSubmitting || !privacyAccepted,
                                            className: "w-full rounded-[6px] px-4 py-2.5 sm:py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-50 font-sans sm:text-base",
                                            background: "#FF7F00",
                                            shimmerColor: "#ffffff",
                                            borderRadius: "6px",
                                            children: isSubmitting ? "SENDING..." : "CONNECT NOW"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/ContactSection.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    submitStatus === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "text-center text-sm font-semibold text-green-700 font-sans",
                                        children: "Thank you! We'll get back to you soon."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                                        lineNumber: 208,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    submitStatus === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "text-center text-sm font-semibold text-red-600 font-sans",
                                        children: "Failed to send message. Please try again or email us directly."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                                        lineNumber: 218,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/ContactSection.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full space-y-6 sm:space-y-7 order-2 lg:order-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5 sm:space-y-6 lg:mt-2",
                                children: [
                                    [
                                        {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                lineNumber: 234,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            title: "Email Us",
                                            text: "info@sgrids.io",
                                            href: "mailto:info@sgrids.io"
                                        },
                                        {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                lineNumber: 247,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            title: "Call Us",
                                            text: "+91 95133 79911",
                                            href: "tel:+919513379911"
                                        }
                                    ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3 sm:gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-9 w-9 shrink-0 items-center justify-center border border-gray-300 bg-gray-50 sm:h-10 sm:w-10",
                                                    style: {
                                                        borderRadius: 6
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "size-4 text-gray-600 sm:size-[18px]",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        "aria-hidden": true,
                                                        children: item.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-sans text-sm font-semibold text-gray-900 sm:text-base",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: item.href,
                                                            className: "mt-0.5 inline-block text-sm leading-relaxed text-gray-600 transition-colors hover:text-[#FF7F00] font-sans",
                                                            children: item.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                            lineNumber: 278,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/components/sections/ContactSection.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3 sm:gap-4 pt-1 sm:pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-9 w-9 shrink-0 items-center justify-center border border-gray-300 bg-gray-50 sm:h-10 sm:w-10",
                                                style: {
                                                    borderRadius: 6
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "size-4 text-gray-600 sm:size-[18px]",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    "aria-hidden": true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-sans text-sm font-semibold text-gray-900 sm:text-base",
                                                        children: "Visit Us"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm leading-relaxed text-gray-600 font-sans",
                                                        children: [
                                                            "Smart Grid Analytics Pvt Ltd",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "2nd Floor, MSM Plaza, Service Road, Outer Ring Rd, Banaswadi,",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 82
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Bengaluru, Karnataka 560113"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    embedUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 overflow-hidden border border-gray-300 sm:mt-6",
                                                        style: {
                                                            borderRadius: 6
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                            title: "Smart Grid Analytics office location",
                                                            src: embedUrl,
                                                            width: "100%",
                                                            height: "200",
                                                            style: {
                                                                border: 0
                                                            },
                                                            allowFullScreen: true,
                                                            loading: "lazy",
                                                            referrerPolicy: "no-referrer-when-downgrade",
                                                            className: "w-full sm:h-[220px] lg:h-[260px]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 font-sans text-xs text-gray-500",
                                                        children: "Map preview requires NEXT_PUBLIC_GOOGLE_MAPS_API_KEY."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                                lineNumber: 314,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/ContactSection.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/ContactSection.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ContactSection.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/ContactSection.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContactSection, "QS9szz7opAScMPJ8YiP0t4cCKX4=");
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    const footerLinks = {
        solvyn: [
            {
                name: "Solvyn X",
                href: "/solvyn/solvyn-x"
            },
            {
                name: "SCADA",
                href: "/solvyn/scada"
            },
            {
                name: "Digital Twin",
                href: "/solvyn/digital-twin"
            },
            {
                name: "AURA",
                href: "/solvyn/aura"
            },
            {
                name: "EMS",
                href: "/solvyn/ems"
            },
            {
                name: "Cybersecure OT/IT",
                href: "/solvyn/cybersecure-ot-it"
            }
        ],
        applications: [
            {
                name: "Grid & Utility Operations",
                href: "/applications/grid-utility-operations"
            },
            {
                name: "Hybrid Energy Control",
                href: "/applications/hybrid-energy-control"
            },
            {
                name: "BTM / ATM Intelligence",
                href: "/applications/btm-atm-intelligence"
            },
            {
                name: "Market Optimization",
                href: "/applications/market-optimization"
            }
        ],
        proof: [
            {
                name: "Case Studies",
                href: "/case-studies"
            },
            {
                name: "Deployments",
                href: "/proof/deployments"
            },
            {
                name: "White Papers",
                href: "/white-papers"
            },
            {
                name: "News",
                href: "/proof/news"
            }
        ],
        company: [
            {
                name: "About SGA",
                href: "/company/about"
            },
            {
                name: "Leadership",
                href: "/company/leadership"
            },
            {
                name: "IP & Patents",
                href: "/company/ip-patents"
            },
            {
                name: "Partners",
                href: "/company/partners"
            },
            {
                name: "Careers",
                href: "/company/careers"
            }
        ]
    };
    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://in.linkedin.com/company/smart-grid-analytics",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-6 w-6",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Footer.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Footer.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            name: "X",
            href: "https://x.com/smartgrids",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaXTwitter"], {
                className: "h-6 w-6"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Footer.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/smartgrid_analytics?igsh=MTU0OW90Nmg0Z3JlbQ%3D%3D",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {
                className: "h-6 w-6"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Footer.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "footer",
        "data-snap-section": true,
        className: "relative w-full overflow-hidden border-t border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-black/90",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 grid grid-cols-2 gap-3 sm:mb-12 sm:gap-4 lg:grid-cols-6 lg:gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-2 mb-4 sm:mb-0 lg:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 sm:mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                            src: "/logo_dark.svg",
                                            alt: "Smart Grid Analytics",
                                            className: "h-8 w-auto sm:h-10",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: {
                                                duration: 0.3
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Footer.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Footer.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Footer.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4 font-sans text-xs leading-relaxed text-gray-600 dark:text-gray-400 sm:mb-6 sm:text-sm",
                                    children: "Engineering the operating system for the renewable century with AI-powered solutions for clean energy optimization."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Footer.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-3 sm:space-x-4",
                                    children: socialLinks.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: social.href,
                                            className: "flex h-5 w-5 items-center justify-center rounded-[6px] border border-gray-600 bg-transparent text-gray-600 cursor-pointer transition-all duration-300 ease-in-out hover:border-[#FF7F00] hover:bg-[#FF7F00]/10 hover:text-[#FF7F00] hover:shadow-sm active:translate-y-px dark:border-gray-400 dark:text-gray-400 dark:hover:border-[#FF7F00] dark:hover:bg-[#FF7F00]/10 dark:hover:text-[#FF7F00] sm:h-8 sm:w-8",
                                            "aria-label": social.name,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(social.icon) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(social.icon, {
                                                className: social.name === "LinkedIn" ? "h-2.5 w-2.5 sm:h-4 sm:w-4" : "h-3 w-3 sm:h-4 sm:w-4"
                                            }) : social.icon
                                        }, social.name, false, {
                                            fileName: "[project]/src/components/sections/Footer.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Footer.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Footer.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        Object.entries(footerLinks).map(([section, links])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-1.5 font-sans text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100 sm:mb-4 sm:text-sm",
                                        children: section.charAt(0).toUpperCase() + section.slice(1)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Footer.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "flex flex-col space-y-1.5 lg:space-y-3",
                                        children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    className: "whitespace-nowrap font-sans text-xs text-gray-600 transition-colors hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 sm:text-sm",
                                                    children: link.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Footer.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, link.name, false, {
                                                fileName: "[project]/src/components/sections/Footer.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Footer.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, section, true, {
                                fileName: "[project]/src/components/sections/Footer.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Footer.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Footer.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative left-1/2 right-1/2 -mx-[50vw] w-[100vw] border-t border-[#e5edf5]/60 dark:border-[#e5edf5]/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-between gap-2 space-y-2 sm:gap-0 sm:space-y-3 md:flex-row md:space-y-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center font-sans text-xs text-gray-600 dark:text-gray-400 sm:text-sm md:text-left",
                                children: [
                                    "© ",
                                    currentYear,
                                    " Smart Grid Analytics. All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Footer.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center font-sans text-xs text-gray-600 dark:text-gray-400 sm:text-sm md:text-right",
                                children: [
                                    "Powered by",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/#solvyn",
                                        className: "font-semibold text-orange-500 transition-colors hover:text-orange-600 dark:hover:text-orange-400",
                                        children: "Solvyn"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Footer.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Footer.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Footer.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Footer.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Footer.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Footer.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7ffc6f0a._.js.map