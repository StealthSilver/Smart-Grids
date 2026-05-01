(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/ui/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ThemeToggle = ({ className, duration = 400, ...props })=>{
    _s();
    const { setTheme, resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            const updateTheme = {
                "ThemeToggle.useEffect.updateTheme": ()=>{
                    setIsDark(document.documentElement.classList.contains("dark"));
                }
            }["ThemeToggle.useEffect.updateTheme"];
            updateTheme();
            const observer = new MutationObserver(updateTheme);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            });
            return ({
                "ThemeToggle.useEffect": ()=>observer.disconnect()
            })["ThemeToggle.useEffect"];
        }
    }["ThemeToggle.useEffect"], []);
    const applyViewTransitionAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThemeToggle.useCallback[applyViewTransitionAnimation]": ()=>{
            if (!buttonRef.current) return;
            const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
            const x = left + width / 2;
            const y = top + height / 2;
            const maxRadius = Math.hypot(Math.max(left, window.innerWidth - left), Math.max(top, window.innerHeight - top));
            document.documentElement.animate({
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`
                ]
            }, {
                duration,
                easing: "ease-in-out",
                pseudoElement: "::view-transition-new(root)"
            });
        }
    }["ThemeToggle.useCallback[applyViewTransitionAnimation]"], [
        duration
    ]);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThemeToggle.useCallback[toggleTheme]": async ()=>{
            if (!buttonRef.current) return;
            const currentlyDark = document.documentElement.classList.contains("dark");
            const nextTheme = currentlyDark ? "light" : "dark";
            const commitTheme = {
                "ThemeToggle.useCallback[toggleTheme].commitTheme": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])({
                        "ThemeToggle.useCallback[toggleTheme].commitTheme": ()=>{
                            setIsDark(!currentlyDark);
                            // Update both next-themes state and the DOM class synchronously so
                            // the rest of the app (e.g. globe config driven by useTheme()) stays
                            // in sync across route transitions.
                            setTheme(nextTheme);
                            if (nextTheme === "dark") {
                                document.documentElement.classList.add("dark");
                            } else {
                                document.documentElement.classList.remove("dark");
                            }
                        }
                    }["ThemeToggle.useCallback[toggleTheme].commitTheme"]);
                }
            }["ThemeToggle.useCallback[toggleTheme].commitTheme"];
            // Some browsers (Safari/Firefox) don't support View Transitions. Fall back
            // to a plain theme switch in that case.
            if (typeof document.startViewTransition !== "function") {
                commitTheme();
                return;
            }
            await document.startViewTransition(commitTheme).ready;
            applyViewTransitionAnimation();
        }
    }["ThemeToggle.useCallback[toggleTheme]"], [
        setTheme,
        applyViewTransitionAnimation
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: buttonRef,
        onClick: toggleTheme,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer transition-colors text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white", className),
        ...props,
        children: [
            isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/ThemeToggle.tsx",
                lineNumber: 109,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/ThemeToggle.tsx",
                lineNumber: 109,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Toggle theme"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ThemeToggle.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/ThemeToggle.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeToggle, "biU6xnRANUrvnEp0y5m70BZxx6w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ThemeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ShimmerButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Navbar() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTheme, setCurrentTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setMounted(true);
            // Set initial theme based on document element class
            const isDark = document.documentElement.classList.contains("dark");
            setCurrentTheme(isDark ? "dark" : "light");
            // Listen to class changes on document element
            const observer = new MutationObserver({
                "Navbar.useEffect": ()=>{
                    const isDark = document.documentElement.classList.contains("dark");
                    setCurrentTheme(isDark ? "dark" : "light");
                }
            }["Navbar.useEffect"]);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            });
            return ({
                "Navbar.useEffect": ()=>observer.disconnect()
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const toggleMenu = ()=>setIsOpen((v)=>!v);
    const navItems = [
        {
            name: "About-Us",
            href: "/#about",
            external: false
        },
        {
            name: "Solvyn",
            href: "/#solvyn",
            external: false
        },
        {
            name: "Services",
            href: "/#services",
            external: false
        },
        {
            name: "Case-Studies",
            href: "/case-studies"
        },
        {
            name: "White-Papers",
            href: "/white-papers"
        },
        {
            name: "Blogs",
            href: "/blogs"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: " relative w-full sticky top-0 z-50 px-4 sm:px-6 py-3 border-b border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm transition-colors duration-300 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between max-w-7xl mx-auto w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 sm:gap-4 md:gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                    src: !mounted ? "/logo_light.svg" : currentTheme === "dark" ? "/logo_dark.svg" : "/logo_light.svg",
                                    alt: "Silver logo",
                                    className: "w-24 h-auto sm:w-28 md:w-32 lg:w-36",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 0.3
                                    }
                                }, mounted ? currentTheme : "default", false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex items-center px-4 xl:px-8 font-mono relative gap-2 xl:gap-4",
                                onMouseLeave: ()=>setHovered(null),
                                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative px-3 py-1 select-none font-sans font-semibold",
                                        children: [
                                            hovered === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                layoutId: "hoverBg",
                                                className: " absolute inset-0 rounded-full backdrop-blur-sm bg-gray-200/70 border border-gray-300 dark:bg-gray-700/70 dark:border-gray-600 ",
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 500,
                                                    damping: 40,
                                                    mass: 0.6
                                                },
                                                initial: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this),
                                            item.external ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: item.href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                onMouseEnter: ()=>setHovered(item.name),
                                                onFocus: ()=>setHovered(item.name),
                                                className: " relative z-10 transition-colors text-sm text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white ",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                onMouseEnter: ()=>setHovered(item.name),
                                                onFocus: ()=>setHovered(item.name),
                                                className: " relative z-10 transition-colors text-sm text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white ",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.name, true, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Navbar.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center gap-4 xl:gap-6 font-mono",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShimmerButton"], {
                                onClick: ()=>{
                                    const footer = document.getElementById("footer");
                                    footer?.scrollIntoView({
                                        behavior: "smooth"
                                    });
                                },
                                className: "font-sans font-bold text-white text-xs xl:text-sm px-4 xl:px-6",
                                background: "#ff7a18",
                                shimmerColor: "#ffffff",
                                children: "CONNECT NOW"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Navbar.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:hidden flex items-center gap-2 sm:gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "scale-90 cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleMenu,
                                "aria-label": isOpen ? "Close menu" : "Open menu",
                                className: "p-1.5 rounded-md relative h-9 w-9 flex items-center justify-center text-gray-900 dark:text-gray-100",
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
                                            lineNumber: 185,
                                            columnNumber: 19
                                        }, this)
                                    }, "close", false, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 177,
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
                                            lineNumber: 196,
                                            columnNumber: 19
                                        }, this)
                                    }, "open", false, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Navbar.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 65,
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
                        className: "bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-700 transition-colors duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex flex-col items-center space-y-3 sm:space-y-4 py-6 sm:py-8",
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
                                navItems.map((item, index)=>item.external ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                        href: item.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "transition-colors text-sm font-sans font-semibold text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white",
                                        onClick: ()=>setIsOpen(false),
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
                                        children: item.name
                                    }, item.name, false, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 223,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: "transition-colors text-sm font-sans font-semibold text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white",
                                            onClick: ()=>setIsOpen(false),
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 251,
                                            columnNumber: 23
                                        }, this)
                                    }, item.name, false, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 241,
                                        columnNumber: 21
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShimmerButton"], {
                                        onClick: ()=>{
                                            setIsOpen(false);
                                            const footer = document.getElementById("footer");
                                            footer?.scrollIntoView({
                                                behavior: "smooth"
                                            });
                                        },
                                        className: "font-sans font-bold text-white text-sm px-6 py-2.5 mt-2",
                                        background: "#FF7217",
                                        shimmerColor: "#ffffff",
                                        children: "CONNECT NOW"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 270,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 261,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Navbar.tsx",
                            lineNumber: 215,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Navbar.tsx",
                        lineNumber: 214,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Navbar.tsx",
                    lineNumber: 207,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Navbar.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(Navbar, "tK7KkJlVlMcR1+StnnUGBZQBzFI=");
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block tracking-wider text-black tabular-nums dark:text-white", className),
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
"[project]/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ShimmerButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LazyGlobe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/LazyGlobe.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NumberTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/NumberTicker.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
const getGlobeConfig = (isDark)=>({
        pointSize: 1,
        globeColor: isDark ? "#0a1e3d" : "#9fddfc",
        showAtmosphere: true,
        atmosphereColor: isDark ? "#e0f2fe" : "#b3d9f2",
        atmosphereAltitude: 0.15,
        emissive: isDark ? "#001a3d" : "#ffffff",
        emissiveIntensity: isDark ? 0.15 : 0.5,
        shininess: 1.0,
        polygonColor: isDark ? "rgba(148, 197, 255, 0.5)" : "rgba(0, 0, 0, 0.35)",
        ambientLight: "#ffffff",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: isDark ? "#87ceeb" : "#87ceeb",
        pointColor: isDark ? "rgba(179, 219, 252, 0.4)" : "rgba(179, 219, 252, 0.4)",
        arcTime: 2000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        autoRotate: true,
        autoRotateSpeed: 0.5
    });
function Hero() {
    _s();
    const [globeConfig, setGlobeConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getGlobeConfig(false));
    const [globeKey, setGlobeKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // The `.dark` class on <html> is the single source of truth for the theme.
    // Reading it directly (and watching for changes) avoids stale values from
    // next-themes when the ThemeToggle runs on a different route and then the
    // user navigates back to the home page.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const applyThemeFromDom = {
                "Hero.useEffect.applyThemeFromDom": ()=>{
                    const isDark = document.documentElement.classList.contains("dark");
                    setGlobeConfig(getGlobeConfig(isDark));
                    setGlobeKey({
                        "Hero.useEffect.applyThemeFromDom": (prev)=>prev + 1
                    }["Hero.useEffect.applyThemeFromDom"]);
                }
            }["Hero.useEffect.applyThemeFromDom"];
            applyThemeFromDom();
            const observer = new MutationObserver(applyThemeFromDom);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            });
            return ({
                "Hero.useEffect": ()=>observer.disconnect()
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
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
        className: " relative lg:min-h-screen h-full px-4 sm:px-6 pt-20 sm:pt-28 md:pt-36 lg:pt-48  bg-white/70 dark:bg-black/70 backdrop-blur-md overflow-hidden flex flex-col justify-start mx-auto pb-16 sm:pb-24 md:pb-32 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -right-[200px] sm:-right-[150px] md:-right-[100px] lg:-right-[800px] -top-12 sm:-top-16 md:-top-20 lg:-top-24 w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] md:w-[850px] md:h-[850px] lg:w-[950px] lg:h-[950px] xl:w-[1100px] xl:h-[1100px] min-w-[600px] min-h-[600px] sm:min-w-[700px] sm:min-h-[700px] md:min-w-[850px] md:min-h-[850px] lg:min-w-[950px] lg:min-h-[950px] xl:min-w-[1100px] xl:min-h-[1100px] relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LazyGlobe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyGlobe"], {
                        globeConfig: globeConfig,
                        data: sampleArcs
                    }, globeKey, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 356,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 355,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 354,
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
                        className: " text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight sm:leading-snug md:leading-normal lg:leading-18 text-gray-900 dark:text-gray-100 max-w-full sm:max-w-3xl md:max-w-4xl ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "The Only Platform You Need For Renewable Intelligence"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 371,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 361,
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
                        className: " max-w-full sm:max-w-xl md:max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl font-sans leading-relaxed text-gray-600 dark:text-gray-400 ",
                        children: "Optimise renewable assets, ensure compliance, and streamline grid access, all on one platform with - Solvyn"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 374,
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShimmerButton"], {
                            onClick: ()=>{
                                const footer = document.getElementById("footer");
                                footer?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            },
                            className: "font-sans px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-8 lg:py-3 font-bold text-white text-[10px] sm:text-xs md:text-sm lg:text-base w-auto",
                            background: "#ff7a18",
                            shimmerColor: "#ffffff",
                            children: "CONNECT NOW"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 396,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 360,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl w-full mx-auto px-4 sm:px-6 mt-24 sm:mt-32 md:mt-40 lg:mt-48 relative z-40",
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
                                    className: "font-mono text-gray-900 dark:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 flex items-baseline gap-0.5 sm:gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NumberTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberTicker"], {
                                            value: point.value,
                                            className: "text-gray-900 dark:text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 422,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg sm:text-xl md:text-2xl lg:text-3xl",
                                            children: point.suffix
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 426,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 421,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-left text-gray-600 dark:text-gray-400 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs uppercase tracking-wide leading-tight",
                                    children: point.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 428,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 414,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 412,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 411,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 345,
        columnNumber: 5
    }, this);
}
_s(Hero, "muwWaK2TEYJW7tOIsvQF6395MP0=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
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
"use client";
;
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "relative w-full px-4 sm:px-6 pt-6 sm:pt-10 bg-white/70 dark:bg-black/70 backdrop-blur-md overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto",
            children: "ABOUT"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/About.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/About.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
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
    const activeBorderClass = borderColor === "orange" ? "border-orange-500 bg-orange-50 dark:bg-orange-950/30 shadow-lg shadow-orange-500/50" : "border-purple-600 bg-purple-50 dark:bg-purple-950/30 shadow-lg shadow-purple-600/50";
    const hoverBorderClass = borderColor === "orange" ? "group-hover:border-orange-400 dark:group-hover:border-orange-600" : "group-hover:border-purple-500 dark:group-hover:border-purple-600";
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
                className: `relative ${iconPadding} rounded-xl border-2 transition-all duration-500 flex items-center justify-center ${isActive ? activeBorderClass : `border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 ${hoverBorderClass}`}`,
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
                className: `${labelSize} font-semibold text-center text-gray-900 dark:text-gray-100 ${labelMaxWidth} leading-tight px-1.5 sm:px-2 py-0.5 whitespace-normal break-words bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-md shadow-sm`,
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
const SolvynBeamsInner = ({ points, containerRef, pathRefs, beamRefs, isMobile = false, isTablet = false })=>{
    _s();
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 700,
        height: 700
    });
    // Responsive stroke widths for base lines
    const baseStrokeWidth = isMobile ? 1 : isTablet ? 1.5 : 2;
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
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                    id: "softGlow",
                    x: "-100%",
                    y: "-100%",
                    width: "300%",
                    height: "300%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                            stdDeviation: "4",
                            result: "coloredBlur"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/SolvynBeams.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                    in: "coloredBlur"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynBeams.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                    in: "SourceGraphic"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SolvynBeams.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/SolvynBeams.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/SolvynBeams.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SolvynBeams.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            points && points.targets.map((target, i)=>{
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
                            stroke: "currentColor",
                            strokeWidth: baseStrokeWidth,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "text-gray-300 dark:text-gray-700",
                            opacity: 0.6,
                            fill: "none"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/SolvynBeams.tsx",
                            lineNumber: 79,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            ref: (el)=>{
                                if (!el) return;
                                pathRefs.current[i] = el;
                            },
                            d: pathD,
                            stroke: "transparent",
                            strokeWidth: baseStrokeWidth,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            fill: "none",
                            opacity: 0
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/SolvynBeams.tsx",
                            lineNumber: 91,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            ref: (el)=>{
                                if (!el) return;
                                beamRefs.current[i].circle = el;
                            },
                            d: pathD,
                            stroke: "rgba(156, 163, 175, 0.35)",
                            strokeWidth: isMobile ? "1.5" : isTablet ? "2" : "2.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            fill: "none",
                            filter: "url(#softGlow)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/SolvynBeams.tsx",
                            lineNumber: 106,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            ref: (el)=>{
                                if (!el) return;
                                beamRefs.current[i].core = el;
                            },
                            d: pathD,
                            stroke: "rgba(156, 163, 175, 0.65)",
                            strokeWidth: isMobile ? "0.75" : isTablet ? "1" : "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            fill: "none"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/SolvynBeams.tsx",
                            lineNumber: 121,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            ref: (el)=>{
                                if (!el) return;
                                beamRefs.current[i].pulse = el;
                            },
                            r: isMobile ? 4 : isTablet ? 5 : 6,
                            fill: "rgb(251, 146, 60)",
                            opacity: 0,
                            style: {
                                filter: "drop-shadow(0 0 8px rgba(251, 146, 60, 0.8))"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/SolvynBeams.tsx",
                            lineNumber: 135,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, `line-${i}`, true, {
                    fileName: "[project]/src/components/ui/SolvynBeams.tsx",
                    lineNumber: 77,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/SolvynBeams.tsx",
        lineNumber: 52,
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
            // Apply the static stroke-dasharray / stroke-dashoffset for the "always
            // fully lit" beams. These values only depend on the total path length and
            // therefore never change between frames — writing them every frame was
            // invalidating the SVG filter cache on the glow paths and forcing the
            // browser to re-run the feGaussianBlur on every render tick.
            const applyStaticBeamAttributes = {
                "useSolvynAnimation.useEffect.applyStaticBeamAttributes": ()=>{
                    for(let i = 0; i < pathLengthsRef.current.length; i++){
                        const pathLength = pathLengthsRef.current[i];
                        if (!pathLength) continue;
                        const lenStr = String(pathLength);
                        const beamRef = beamRefs.current[i];
                        if (beamRef.circle) {
                            beamRef.circle.setAttributeNS(null, "stroke-dasharray", lenStr);
                            beamRef.circle.setAttributeNS(null, "stroke-dashoffset", "0");
                        }
                        if (beamRef.core) {
                            beamRef.core.setAttributeNS(null, "stroke-dasharray", lenStr);
                            beamRef.core.setAttributeNS(null, "stroke-dashoffset", "0");
                        }
                    }
                }
            }["useSolvynAnimation.useEffect.applyStaticBeamAttributes"];
            // Measure path lengths when points change
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
                    applyStaticBeamAttributes();
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
    ()=>Solvyn,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SolvynIcons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynIconNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SolvynIconNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SolvynBeams$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SolvynBeams.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSolvynAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSolvynAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDiagramAnimationReady$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useDiagramAnimationReady.ts [app-client] (ecmascript)");
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
// Desktop positions: Uniformly spaced grid - 6 icons on left, 6 on right
// Order: tax, climate, treasury, elements, payments, windmill, solar, battery, forecasting, trading, reporting, bidopt
// Increased vertical spacing with ~16% gaps: ~5%, ~21%, ~37%, ~53%, ~69%, ~85%
const ICON_POSITIONS_DESKTOP = [
    // LEFT SIDE - Row 1 (top)
    {
        top: "5%",
        left: "3%",
        delay: 0.6,
        borderColor: "orange"
    },
    // RIGHT SIDE - Row 1 (top)
    {
        top: "5%",
        right: "3%",
        delay: 0.7,
        borderColor: "orange"
    },
    // LEFT SIDE - Row 2
    {
        top: "21%",
        left: "3%",
        delay: 0.8,
        borderColor: "purple"
    },
    // RIGHT SIDE - Row 2
    {
        top: "21%",
        right: "3%",
        delay: 1.0,
        borderColor: "purple"
    },
    // LEFT SIDE - Row 3
    {
        top: "37%",
        left: "3%",
        delay: 1.1,
        borderColor: "orange"
    },
    // RIGHT SIDE - Row 3
    {
        top: "37%",
        right: "5%",
        delay: 1.2,
        borderColor: "purple"
    },
    // LEFT SIDE - Row 4
    {
        top: "53%",
        left: "5%",
        delay: 1.3,
        borderColor: "orange"
    },
    // RIGHT SIDE - Row 4
    {
        top: "53%",
        right: "5%",
        delay: 1.4,
        borderColor: "purple"
    },
    // LEFT SIDE - Row 5
    {
        top: "69%",
        left: "3%",
        delay: 1.5,
        borderColor: "orange"
    },
    // RIGHT SIDE - Row 5
    {
        top: "69%",
        right: "4%",
        delay: 1.6,
        borderColor: "purple"
    },
    // LEFT SIDE - Row 6 (bottom)
    {
        top: "85%",
        left: "3%",
        delay: 1.7,
        borderColor: "orange"
    },
    // RIGHT SIDE - Row 6 (bottom)
    {
        top: "85%",
        right: "3%",
        delay: 1.8,
        borderColor: "purple"
    }
];
// Mobile/Tablet positions: Uniformly spaced grid for smaller screens
// 6 rows evenly spaced with increased gaps: ~5%, ~18%, ~31%, ~44%, ~57%, ~70%, ~83%
const ICON_POSITIONS_MOBILE = [
    // Row 1 - left side
    {
        top: "5%",
        left: "2%",
        delay: 0.6,
        borderColor: "orange"
    },
    // Row 1 - right side
    {
        top: "5%",
        right: "2%",
        delay: 0.7,
        borderColor: "orange"
    },
    // Row 2 - left side
    {
        top: "20%",
        left: "2%",
        delay: 0.8,
        borderColor: "purple"
    },
    // Row 2 - right side
    {
        top: "20%",
        right: "2%",
        delay: 1.0,
        borderColor: "purple"
    },
    // Row 3 - left side
    {
        top: "35%",
        left: "0%",
        delay: 1.1,
        borderColor: "orange"
    },
    // Row 3 - right side
    {
        top: "35%",
        right: "13%",
        delay: 1.2,
        borderColor: "purple"
    },
    // Row 4 - left side
    {
        top: "50%",
        left: "9%",
        delay: 1.3,
        borderColor: "orange"
    },
    // Row 4 - right side
    {
        top: "50%",
        right: "13%",
        delay: 1.4,
        borderColor: "purple"
    },
    // Row 5 - left side
    {
        top: "65%",
        left: "-2%",
        delay: 1.5,
        borderColor: "orange"
    },
    // Row 5 - right side
    {
        top: "65%",
        right: "9%",
        delay: 1.6,
        borderColor: "purple"
    },
    // Row 6 - left side
    {
        top: "80%",
        left: "-2%",
        delay: 1.7,
        borderColor: "orange"
    },
    // Row 6 - right side
    {
        top: "80%",
        right: "7%",
        delay: 1.8,
        borderColor: "purple"
    }
];
// Pre-computed stable-per-layout {position} objects so SolvynIconNode's
// React.memo comparison doesn't bust on fresh object identity every render.
const extractPositions = (rows)=>rows.map(({ delay: _d, borderColor: _b, ...rest })=>rest);
const POSITIONS_DESKTOP_STABLE = extractPositions(ICON_POSITIONS_DESKTOP);
_c = POSITIONS_DESKTOP_STABLE;
const POSITIONS_MOBILE_STABLE = extractPositions(ICON_POSITIONS_MOBILE);
_c1 = POSITIONS_MOBILE_STABLE;
const Solvyn = ()=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sgridsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Screen size detection for responsive layout. Kept in a single state
    // object so each resize only triggers one React update instead of two.
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
            // Throttle resize with rAF so rapid resize events collapse into one
            // React update per frame.
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
    // Create refs for all icons - must be at top level, not in useMemo
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
    // Select positions based on screen size
    const ICON_POSITIONS = isMobile || isTablet ? ICON_POSITIONS_MOBILE : ICON_POSITIONS_DESKTOP;
    const stablePositions = isMobile || isTablet ? POSITIONS_MOBILE_STABLE : POSITIONS_DESKTOP_STABLE;
    // Memoize the container style so the element doesn't receive a fresh
    // style object on every render.
    const containerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Solvyn.useMemo[containerStyle]": ()=>({
                height: isMobile ? "100vh" : isTablet ? "100vh" : "90vh",
                maxHeight: isMobile ? "700px" : isTablet ? "850px" : "900px",
                minHeight: isMobile ? "600px" : isTablet ? "700px" : "700px"
            })
    }["Solvyn.useMemo[containerStyle]"], [
        isMobile,
        isTablet
    ]);
    // Calculate SVG icon size based on screen size
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
    // Measure positions - use useCallback to prevent recreation.
    // Beams must start from the LEFT or RIGHT border of the central Solvyn
    // logo (depending on which side the target icon sits on) and land at the
    // OPPOSING horizontal edge of each icon square — i.e. icons to the left of
    // the logo receive a beam at the center of their right border, and icons
    // to the right of the logo receive a beam at the center of their left
    // border. This produces a clean hub-and-spoke look where every line
    // terminates exactly on the icon's edge.
    const measure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Solvyn.useCallback[measure]": ()=>{
            const container = containerRef.current;
            const sgridsEl = sgridsRef.current;
            if (!container || !sgridsEl) return;
            const containerRect = container.getBoundingClientRect();
            if (containerRect.width === 0 || containerRect.height === 0) return;
            const sgridsRect = sgridsEl.getBoundingClientRect();
            if (sgridsRect.width === 0 || sgridsRect.height === 0) return;
            // Center-left and center-right edges of the Solvyn logo, in container
            // coordinates. The vertical center is shared by both.
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
                // Prefer the inner icon square (marked via data-beam-target) so we
                // land on the actual border of the icon, not the outer column that
                // also contains the text label.
                const targetEl = el.querySelector("[data-beam-target]") || el;
                const r = targetEl.getBoundingClientRect();
                if (r.width === 0 && r.height === 0) continue;
                const iconCenterY = r.top + r.height / 2 - containerRect.top;
                const iconCenterX = r.left + r.width / 2 - containerRect.left;
                // Icons to the left of the logo connect out of the LEFT edge of the
                // logo and into the RIGHT edge of the icon. Icons to the right of the
                // logo connect out of the RIGHT edge of the logo and into the LEFT
                // edge of the icon.
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
            // Keep a single `origin` for backward compatibility (used by consumers
            // that don't know about per-target origins); the per-target overrides
            // are what actually drive the rendered paths.
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
            // Coalesce measure calls into one per animation frame. Previously every
            // observer callback and timer triggered its own rAF double-wrap, which
            // meant 10+ redundant measures piling up during entry animations.
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
            // IntersectionObserver: re-run measurements whenever the section scrolls
            // into view. Without this we'd measure too early.
            const intersectionObserver = new IntersectionObserver({
                "Solvyn.useEffect": (entries)=>{
                    if (entries[0]?.isIntersecting) scheduleMeasure();
                }
            }["Solvyn.useEffect"], {
                threshold: 0.1
            });
            if (containerRef.current) intersectionObserver.observe(containerRef.current);
            scheduleMeasure();
            // A handful of sparse fallback measures during the first ~1s covers the
            // period right after mount.
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
    // Animation hook
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSolvynAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSolvynAnimation"])({
        points,
        pathRefs,
        beamRefs,
        progressRefs,
        setIcons,
        enabled: beamAnimationReady
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "solvyn",
        ref: sectionRef,
        className: "relative w-full lg:min-h-screen py-4 sm:py-8 md:py-12 lg:py-20 overflow-hidden bg-white dark:bg-black transition-colors duration-700",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 sm:mb-4 md:mb-6 lg:mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-gray-500 dark:text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-4 md:mb-6 lg:mb-8 font-sans",
                            children: "Solvyn"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Solvyn.tsx",
                            lineNumber: 373,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                        lineNumber: 372,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 sm:space-y-5 md:space-y-6 text-center max-w-4xl font-sans",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-gray-900 dark:text-white tracking-tight",
                                children: "Innovation With Purpose"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Solvyn.tsx",
                                lineNumber: 380,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600 dark:text-gray-300",
                                children: "Innovation is our engine, purpose is our compass, and experience is the ground we stand on."
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Solvyn.tsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600 dark:text-gray-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-orange-600 dark:text-orange-400",
                                        children: "Solvyn"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                                        lineNumber: 389,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " was built for the complexity of renewable energy — to turn scattered data into unified intelligence across every layer of operations, from the control room to the boardroom."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Solvyn.tsx",
                                lineNumber: 388,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600 dark:text-gray-300",
                                children: [
                                    "More than a platform, Solvyn is a new way of running energy: a secure, AI-driven system that unifies ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "SCADA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                                        lineNumber: 396,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ", ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "EMS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                                        lineNumber: 396,
                                        columnNumber: 69
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ", ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "PPC"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                                        lineNumber: 397,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ", ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "EPM"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                                        lineNumber: 397,
                                        columnNumber: 61
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ", and",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Intelligent Bidding (IB)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                                        lineNumber: 398,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ". It's designed for",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-gray-800 dark:text-gray-200",
                                        children: "solar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                                        lineNumber: 399,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ",",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-gray-800 dark:text-gray-200",
                                        children: "wind"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                                        lineNumber: 400,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ",",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-gray-800 dark:text-gray-200",
                                        children: "BESS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                                        lineNumber: 401,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ",",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-gray-800 dark:text-gray-200",
                                        children: "hybrid"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                                        lineNumber: 402,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ", and",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-gray-800 dark:text-gray-200",
                                        children: "green hydrogen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                                        lineNumber: 403,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ", and built to serve those who carry the responsibility of the transition — operators seeking reliability, investors seeking returns, and governments driving national clean energy goals."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Solvyn.tsx",
                                lineNumber: 394,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base lg:text-lg leading-relaxed font-medium text-gray-900 dark:text-gray-100",
                                children: "Where others give you fragments, Solvyn gives you the whole picture — automation that scales, compliance that's built in, and intelligence that's always one step ahead."
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Solvyn.tsx",
                                lineNumber: 408,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                        lineNumber: 379,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-5xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: containerRef,
                            className: "relative flex items-center justify-center w-full",
                            style: containerStyle,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2 sm:gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: sgridsRef,
                                            className: `relative rounded-2xl bg-gradient-to-br from-orange-500 via-purple-600 to-orange-500 p-[2px] shadow-2xl hover:shadow-orange-500/50 dark:hover:shadow-orange-500/70 transition-all duration-500 group ${isMobile ? "w-12 h-12 sm:w-16 sm:h-16" : isTablet ? "w-16 h-16 md:w-20 md:h-20" : "w-20 h-20 md:w-24 md:h-24"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center backdrop-blur-sm p-2 sm:p-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    alt: "SGrids Logo",
                                                    width: isMobile ? 40 : isTablet ? 60 : 80,
                                                    height: isMobile ? 40 : isTablet ? 60 : 80,
                                                    src: "/sgrids.svg",
                                                    onLoad: ()=>markDiagramImageLoaded(0),
                                                    className: "w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Solvyn.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Solvyn.tsx",
                                                lineNumber: 431,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Solvyn.tsx",
                                            lineNumber: 425,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-lg bg-gradient-to-br from-orange-50 to-purple-50 dark:from-orange-950/30 dark:to-purple-950/30 border-2 border-orange-500/30 dark:border-orange-500/50 shadow-lg ${isMobile ? "px-2 py-1" : "px-4 py-2"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-600 dark:from-orange-400 dark:to-purple-400 ${isMobile ? "text-sm" : "text-lg"}`,
                                                children: "Solvyn"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Solvyn.tsx",
                                                lineNumber: 446,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Solvyn.tsx",
                                            lineNumber: 443,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Solvyn.tsx",
                                    lineNumber: 422,
                                    columnNumber: 15
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
                                        lineNumber: 460,
                                        columnNumber: 19
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
                                    lineNumber: 475,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Solvyn.tsx",
                            lineNumber: 416,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Solvyn.tsx",
                        lineNumber: 415,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Solvyn.tsx",
                lineNumber: 370,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Solvyn.tsx",
            lineNumber: 369,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Solvyn.tsx",
        lineNumber: 365,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Solvyn, "QggJ9h9lCyQmOir7Ncsd4w3YrHw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDiagramAnimationReady$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDiagramAnimationReady"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSolvynAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSolvynAnimation"]
    ];
});
_c2 = Solvyn;
const __TURBOPACK__default__export__ = Solvyn;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "POSITIONS_DESKTOP_STABLE");
__turbopack_context__.k.register(_c1, "POSITIONS_MOBILE_STABLE");
__turbopack_context__.k.register(_c2, "Solvyn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ServicesBeams.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesBeams",
    ()=>ServicesBeams,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$solvynUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/solvynUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const ServicesBeams = ({ points, containerRef, pathRefs, beamRefs, isMobile = false, isTablet = false })=>{
    _s();
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 1200,
        height: 800
    });
    // Responsive stroke widths - reduced thickness
    const baseStrokeWidth = isMobile ? 0.8 : isTablet ? 1.0 : 1.2;
    const beamStrokeWidth = isMobile ? "1" : isTablet ? "1.2" : "1.5";
    const coreStrokeWidth = isMobile ? "0.6" : isTablet ? "0.8" : "1";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServicesBeams.useEffect": ()=>{
            const updateDimensions = {
                "ServicesBeams.useEffect.updateDimensions": ()=>{
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
            }["ServicesBeams.useEffect.updateDimensions"];
            updateDimensions();
            window.addEventListener("resize", updateDimensions);
            // Update when points change (icons might have moved)
            const timeoutId = setTimeout(updateDimensions, 100);
            return ({
                "ServicesBeams.useEffect": ()=>{
                    window.removeEventListener("resize", updateDimensions);
                    clearTimeout(timeoutId);
                }
            })["ServicesBeams.useEffect"];
        }
    }["ServicesBeams.useEffect"], [
        containerRef,
        points
    ]);
    if (!points) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "absolute inset-0 w-full h-full pointer-events-none z-0",
        viewBox: `0 0 ${dimensions.width} ${dimensions.height}`,
        preserveAspectRatio: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "servicesSoftGlow",
                        x: "-200%",
                        y: "-200%",
                        width: "400%",
                        height: "400%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "6",
                                result: "coloredBlur"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ServicesBeams.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "coloredBlur"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/ServicesBeams.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "SourceGraphic"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/ServicesBeams.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/ServicesBeams.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/ServicesBeams.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "softSmall",
                        x: "-50%",
                        y: "-50%",
                        width: "200%",
                        height: "200%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "3",
                                result: "g1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ServicesBeams.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "g1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/ServicesBeams.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "SourceGraphic"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/ServicesBeams.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/ServicesBeams.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/ServicesBeams.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/ServicesBeams.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            points && points.targets.map((target, i)=>{
                // Create smooth curved path with responsive curvature
                // More curvature on larger screens, less on mobile
                const curvature = isMobile ? 0.2 : isTablet ? 0.25 : 0.3;
                const pathD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$solvynUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSmoothCurvedPath"])(points.origin.x, points.origin.y, target.x, target.y, curvature);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: pathD,
                            stroke: "rgba(156, 163, 175, 0.4)",
                            strokeWidth: baseStrokeWidth,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "dark:stroke-gray-600",
                            opacity: 0.6,
                            fill: "none",
                            style: {
                                pointerEvents: 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/ServicesBeams.tsx",
                            lineNumber: 95,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            ref: (el)=>{
                                if (!el) return;
                                pathRefs.current[i] = el;
                            },
                            d: pathD,
                            stroke: "transparent",
                            strokeWidth: baseStrokeWidth,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            fill: "none",
                            opacity: 0
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/ServicesBeams.tsx",
                            lineNumber: 108,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            ref: (el)=>{
                                if (!el) return;
                                beamRefs.current[i].circle = el;
                            },
                            d: pathD,
                            stroke: "rgba(156, 163, 175, 0.5)",
                            strokeWidth: beamStrokeWidth,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            fill: "none",
                            filter: "url(#servicesSoftGlow)",
                            className: "dark:stroke-gray-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/ServicesBeams.tsx",
                            lineNumber: 123,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            ref: (el)=>{
                                if (!el) return;
                                beamRefs.current[i].core = el;
                            },
                            d: pathD,
                            stroke: "rgba(156, 163, 175, 0.6)",
                            strokeWidth: coreStrokeWidth,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            fill: "none",
                            className: "dark:stroke-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/ServicesBeams.tsx",
                            lineNumber: 139,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            ref: (el)=>{
                                if (!el) return;
                                beamRefs.current[i].pulse = el;
                            },
                            r: isMobile ? 3.5 : isTablet ? 4.5 : 5.5,
                            fill: "#fb923c",
                            opacity: 0,
                            style: {
                                filter: "drop-shadow(0 0 6px rgba(251, 146, 60, 0.55))"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/ServicesBeams.tsx",
                            lineNumber: 154,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, `line-${i}`, true, {
                    fileName: "[project]/src/components/ui/ServicesBeams.tsx",
                    lineNumber: 93,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/ServicesBeams.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ServicesBeams, "horongb4B1yKTLkroAYs91Xm7sY=");
_c = ServicesBeams;
const __TURBOPACK__default__export__ = ServicesBeams;
var _c;
__turbopack_context__.k.register(_c, "ServicesBeams");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useServicesAnimation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useServicesAnimation",
    ()=>useServicesAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$solvynTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/solvynTypes.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
// Staggered delays for 4 beams: start at 0, 0.2s, 0.4s, 0.6s
const getInitialDelay = (index)=>{
    return index * 0.2; // Each beam starts 0.2s after the previous
};
const useServicesAnimation = ({ points, pathRefs, beamRefs, progressRefs, setIconActive, enabled = true })=>{
    _s();
    const lastTimestampRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathLengthsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const iconActivationTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const ACTIVE_DURATION = 600; // Keep icons active for 600ms after pulse passes
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useServicesAnimation.useEffect": ()=>{
            if (!enabled || !points || points.targets.length < 4) return;
            // Reset start time when points change
            startTimeRef.current = Date.now();
            // Measure path lengths when points change
            const measurePathLengths = {
                "useServicesAnimation.useEffect.measurePathLengths": ()=>{
                    pathLengthsRef.current = pathRefs.current.map({
                        "useServicesAnimation.useEffect.measurePathLengths": (path)=>{
                            if (!path) return 0;
                            try {
                                return path.getTotalLength();
                            } catch  {
                                return 0;
                            }
                        }
                    }["useServicesAnimation.useEffect.measurePathLengths"]);
                }
            }["useServicesAnimation.useEffect.measurePathLengths"];
            // Initial measurement
            measurePathLengths();
            // Re-measure multiple times to ensure paths are rendered and positioned correctly
            const timeoutIds = [
                setTimeout(measurePathLengths, 100),
                setTimeout(measurePathLengths, 300),
                setTimeout(measurePathLengths, 600),
                setTimeout(measurePathLengths, 1000)
            ];
            let rafId = 0;
            const step = {
                "useServicesAnimation.useEffect.step": (timestamp)=>{
                    if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;
                    const dt = (timestamp - lastTimestampRef.current) / 1000;
                    lastTimestampRef.current = timestamp;
                    const activePaths = pathRefs.current.filter(Boolean);
                    if (activePaths.length === 0) {
                        rafId = requestAnimationFrame(step);
                        return;
                    }
                    const currentTime = (Date.now() - (startTimeRef.current || 0)) / 1000;
                    activePaths.forEach({
                        "useServicesAnimation.useEffect.step": (path, pathIndex)=>{
                            try {
                                const pathLength = pathLengthsRef.current[pathIndex] || path.getTotalLength();
                                if (pathLength === 0) return;
                                // Calculate initial delay offset
                                const initialDelay = getInitialDelay(pathIndex);
                                const adjustedTime = Math.max(0, currentTime - initialDelay);
                                // Update progress for pulse animation - start from 0 (origin), travel to pathLength (target), then restart
                                const distancePerSec = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$solvynTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAM_SPEED"] * pathLength;
                                let headDistance;
                                if (adjustedTime > 0) {
                                    // Calculate distance traveled, then use modulo to wrap back to 0 when reaching the end
                                    const totalDistance = adjustedTime * distancePerSec;
                                    headDistance = totalDistance % pathLength;
                                    progressRefs.current[pathIndex] = headDistance / pathLength;
                                } else {
                                    // Before initial delay, stay at origin (0)
                                    headDistance = 0;
                                    progressRefs.current[pathIndex] = 0;
                                }
                                // Keep the continuous beam fully lit (show entire path)
                                const beamRef = beamRefs.current[pathIndex];
                                if (beamRef.circle) {
                                    beamRef.circle.setAttributeNS(null, "stroke-dasharray", String(pathLength));
                                    beamRef.circle.setAttributeNS(null, "stroke-dashoffset", "0");
                                    // Ensure beam is visible (default opacity)
                                    if (!beamRef.circle.getAttributeNS(null, "opacity")) {
                                        beamRef.circle.setAttributeNS(null, "opacity", "1");
                                    }
                                }
                                if (beamRef.core) {
                                    beamRef.core.setAttributeNS(null, "stroke-dasharray", String(pathLength));
                                    beamRef.core.setAttributeNS(null, "stroke-dashoffset", "0");
                                    // Ensure core is visible (default opacity)
                                    if (!beamRef.core.getAttributeNS(null, "opacity")) {
                                        beamRef.core.setAttributeNS(null, "opacity", "1");
                                    }
                                }
                                // Update pulse position (only show after initial delay)
                                if (beamRef.pulse && points) {
                                    if (adjustedTime > 0) {
                                        const pulsePoint = path.getPointAtLength(headDistance);
                                        beamRef.pulse.setAttributeNS(null, "cx", String(pulsePoint.x));
                                        beamRef.pulse.setAttributeNS(null, "cy", String(pulsePoint.y));
                                        beamRef.pulse.setAttributeNS(null, "opacity", "1");
                                        // Check if pulse is near target icon
                                        const target = points.targets[pathIndex];
                                        if (target && setIconActive) {
                                            const distance = Math.hypot(pulsePoint.x - target.x, pulsePoint.y - target.y);
                                            const currentTime = timestamp;
                                            if (distance <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$solvynTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOUCH_THRESHOLD"]) {
                                                // Pulse reached icon - activate it
                                                setIconActive(pathIndex, true);
                                                iconActivationTimeRef.current.set(pathIndex, currentTime);
                                                // Dim outer glow slightly when hit (lighter glow)
                                                if (beamRef.circle) {
                                                    // reduce outer glow opacity
                                                    beamRef.circle.setAttributeNS(null, "opacity", "0.12");
                                                }
                                                // keep core more visible
                                                if (beamRef.core) {
                                                    beamRef.core.setAttributeNS(null, "opacity", "1");
                                                }
                                            } else {
                                                // Check if still within active duration
                                                const lastActivation = iconActivationTimeRef.current.get(pathIndex);
                                                if (lastActivation && currentTime - lastActivation < ACTIVE_DURATION) {
                                                    setIconActive(pathIndex, true);
                                                    // keep outer glow dim while active
                                                    if (beamRef.circle) beamRef.circle.setAttributeNS(null, "opacity", "0.14");
                                                } else {
                                                    setIconActive(pathIndex, false);
                                                    iconActivationTimeRef.current.delete(pathIndex);
                                                    // Restore outer glow to default subtle value when not active
                                                    if (beamRef.circle) beamRef.circle.setAttributeNS(null, "opacity", "0.22");
                                                }
                                            }
                                        }
                                    } else {
                                        // Hide pulse before initial delay
                                        beamRef.pulse.setAttributeNS(null, "opacity", "0");
                                    }
                                }
                            } catch (e) {
                                // Swallow errors to avoid breaking raf loop
                                // eslint-disable-next-line no-console
                                console.error("Error animating beam:", e);
                            }
                        }
                    }["useServicesAnimation.useEffect.step"]);
                    rafId = requestAnimationFrame(step);
                }
            }["useServicesAnimation.useEffect.step"];
            rafId = requestAnimationFrame(step);
            return ({
                "useServicesAnimation.useEffect": ()=>{
                    if (rafId) cancelAnimationFrame(rafId);
                    timeoutIds.forEach({
                        "useServicesAnimation.useEffect": (id)=>clearTimeout(id)
                    }["useServicesAnimation.useEffect"]);
                    lastTimestampRef.current = null;
                }
            })["useServicesAnimation.useEffect"];
        }
    }["useServicesAnimation.useEffect"], [
        enabled,
        points,
        pathRefs,
        beamRefs,
        progressRefs,
        setIconActive
    ]);
};
_s(useServicesAnimation, "ueuwo0W4xf2XiJlRM5nRF452x7g=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Icons/stack.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/stack.b7083815.svg");}),
"[project]/src/app/Icons/stack.svg.mjs { IMAGE => \"[project]/src/app/Icons/stack.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$stack$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/Icons/stack.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$stack$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 104,
    height: 113,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Icons/technology.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/technology.a8d78bd9.svg");}),
"[project]/src/app/Icons/technology.svg.mjs { IMAGE => \"[project]/src/app/Icons/technology.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$technology$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/Icons/technology.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$technology$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 122,
    height: 123,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Icons/Proven.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Proven.512ad3f6.svg");}),
"[project]/src/app/Icons/Proven.svg.mjs { IMAGE => \"[project]/src/app/Icons/Proven.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$Proven$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/Icons/Proven.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$Proven$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 98,
    height: 103,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Icons/INNOVATION.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/INNOVATION.2b7a7d5e.svg");}),
"[project]/src/app/Icons/INNOVATION.svg.mjs { IMAGE => \"[project]/src/app/Icons/INNOVATION.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$INNOVATION$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/Icons/INNOVATION.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$INNOVATION$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 117,
    height: 147,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Icons/energyefficiency.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/energyefficiency.094f03a0.svg");}),
"[project]/src/app/Icons/energyefficiency.svg.mjs { IMAGE => \"[project]/src/app/Icons/energyefficiency.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$energyefficiency$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/Icons/energyefficiency.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$energyefficiency$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 111,
    height: 111,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Icons/AiTechnology.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/AiTechnology.3c5be88a.svg");}),
"[project]/src/app/Icons/AiTechnology.svg.mjs { IMAGE => \"[project]/src/app/Icons/AiTechnology.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$AiTechnology$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/Icons/AiTechnology.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$AiTechnology$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 111,
    height: 112,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Services",
    ()=>Services,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ServicesBeams$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ServicesBeams.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useServicesAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useServicesAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDiagramAnimationReady$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useDiagramAnimationReady.ts [app-client] (ecmascript)");
// Import icons for features
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$stack$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Icons$2f$stack$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/Icons/stack.svg.mjs { IMAGE => "[project]/src/app/Icons/stack.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$technology$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Icons$2f$technology$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/Icons/technology.svg.mjs { IMAGE => "[project]/src/app/Icons/technology.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$Proven$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Icons$2f$Proven$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/Icons/Proven.svg.mjs { IMAGE => "[project]/src/app/Icons/Proven.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$INNOVATION$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Icons$2f$INNOVATION$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/Icons/INNOVATION.svg.mjs { IMAGE => "[project]/src/app/Icons/INNOVATION.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$energyefficiency$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Icons$2f$energyefficiency$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/Icons/energyefficiency.svg.mjs { IMAGE => "[project]/src/app/Icons/energyefficiency.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$AiTechnology$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Icons$2f$AiTechnology$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/Icons/AiTechnology.svg.mjs { IMAGE => "[project]/src/app/Icons/AiTechnology.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
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
const Services = ()=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const centerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Create refs for the 4 energy icons
    const bessRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const solarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const windRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hydrogenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = theme === "dark";
    // Screen size detection for responsive layout
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTablet, setIsTablet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [points, setPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { animationReady: beamAnimationReady, markDiagramImageLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDiagramAnimationReady$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDiagramAnimationReady"])(mounted, 5);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Services.useEffect": ()=>{
            setMounted(true);
            const checkScreenSize = {
                "Services.useEffect.checkScreenSize": ()=>{
                    const width = window.innerWidth;
                    setIsMobile(width < 640); // sm breakpoint
                    setIsTablet(width >= 640 && width < 1024); // md-lg breakpoint
                }
            }["Services.useEffect.checkScreenSize"];
            checkScreenSize();
            window.addEventListener("resize", checkScreenSize);
            return ({
                "Services.useEffect": ()=>window.removeEventListener("resize", checkScreenSize)
            })["Services.useEffect"];
        }
    }["Services.useEffect"], []);
    // Icon active states
    const [iconActive, setIconActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        false,
        false,
        false,
        false
    ]);
    // Refs for beam animation
    const pathRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const beamRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Array.from({
        length: 4
    }, {
        "Services.useRef[beamRefs]": ()=>({
                circle: null,
                core: null,
                pulse: null
            })
    }["Services.useRef[beamRefs]"]));
    const progressRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([
        0,
        0,
        0,
        0
    ]); // All start from origin (sgrids logo)
    // Handler to set icon active state
    const handleIconActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Services.useCallback[handleIconActive]": (index, active)=>{
            setIconActive({
                "Services.useCallback[handleIconActive]": (prev)=>{
                    const newState = [
                        ...prev
                    ];
                    newState[index] = active;
                    return newState;
                }
            }["Services.useCallback[handleIconActive]"]);
        }
    }["Services.useCallback[handleIconActive]"], []);
    // Measure positions - use useCallback to prevent recreation
    const measure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Services.useCallback[measure]": ()=>{
            const container = containerRef.current;
            const centerEl = centerRef.current;
            if (!container || !centerEl) return;
            // Ensure container has dimensions before measuring
            const containerRect = container.getBoundingClientRect();
            if (containerRect.width === 0 || containerRect.height === 0) return;
            const centerRect = centerEl.getBoundingClientRect();
            // Ensure center element is visible and has dimensions
            if (centerRect.width === 0 || centerRect.height === 0) return;
            // Origin: bottom-center of the sgrids logo so the beams emanate from the
            // bottom edge of the logo rather than from inside it.
            const origin = {
                x: centerRect.left + centerRect.width / 2 - containerRect.left,
                y: centerRect.bottom - containerRect.top
            };
            const targets = [];
            const refs = [
                bessRef,
                solarRef,
                windRef,
                hydrogenRef
            ];
            for (const ref of refs){
                const el = ref.current;
                if (!el) continue;
                const targetEl = el.querySelector("[data-beam-target]");
                const sourceRect = (targetEl || el).getBoundingClientRect();
                // Ensure target element has dimensions
                if (sourceRect.width === 0 && sourceRect.height === 0) continue;
                const x = sourceRect.left + sourceRect.width / 2 - containerRect.left;
                const y = sourceRect.top - containerRect.top;
                if (isNaN(x) || isNaN(y) || !isFinite(x) || !isFinite(y)) continue;
                if (isFinite(x) && isFinite(y) && !isNaN(x) && !isNaN(y)) {
                    targets.push({
                        x,
                        y
                    });
                }
            }
            if (targets.length === 4 && isFinite(origin.x) && isFinite(origin.y) && !isNaN(origin.x) && !isNaN(origin.y)) {
                setPoints({
                    "Services.useCallback[measure]": (prevPoints)=>{
                        const tolerance = 1;
                        if (prevPoints) {
                            const originChanged = Math.abs(prevPoints.origin.x - origin.x) > tolerance || Math.abs(prevPoints.origin.y - origin.y) > tolerance;
                            const targetsChanged = prevPoints.targets.some({
                                "Services.useCallback[measure].targetsChanged": (target, i)=>{
                                    if (!targets[i]) return true;
                                    return Math.abs(target.x - targets[i].x) > tolerance || Math.abs(target.y - targets[i].y) > tolerance;
                                }
                            }["Services.useCallback[measure].targetsChanged"]);
                            if (!originChanged && !targetsChanged) {
                                return prevPoints;
                            }
                        }
                        return {
                            origin,
                            targets
                        };
                    }
                }["Services.useCallback[measure]"]);
            }
        }
    }["Services.useCallback[measure]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Services.useEffect": ()=>{
            if (!mounted) return;
            const scheduleMeasure = {
                "Services.useEffect.scheduleMeasure": ()=>{
                    requestAnimationFrame({
                        "Services.useEffect.scheduleMeasure": ()=>{
                            requestAnimationFrame(measure);
                        }
                    }["Services.useEffect.scheduleMeasure"]);
                }
            }["Services.useEffect.scheduleMeasure"];
            const resizeObserver = new ResizeObserver(scheduleMeasure);
            const observeElements = {
                "Services.useEffect.observeElements": ()=>{
                    if (containerRef.current) {
                        resizeObserver.observe(containerRef.current);
                    }
                    if (centerRef.current) {
                        resizeObserver.observe(centerRef.current);
                    }
                    [
                        bessRef,
                        solarRef,
                        windRef,
                        hydrogenRef
                    ].forEach({
                        "Services.useEffect.observeElements": (ref)=>{
                            if (ref.current) {
                                resizeObserver.observe(ref.current);
                            }
                        }
                    }["Services.useEffect.observeElements"]);
                }
            }["Services.useEffect.observeElements"];
            observeElements();
            let intersectionTimers = [];
            const intersectionObserver = new IntersectionObserver({
                "Services.useEffect": (entries)=>{
                    const entry = entries[0];
                    if (entry?.isIntersecting) {
                        intersectionTimers.forEach({
                            "Services.useEffect": (t)=>clearTimeout(t)
                        }["Services.useEffect"]);
                        intersectionTimers = [
                            setTimeout(scheduleMeasure, 0),
                            setTimeout(scheduleMeasure, 100),
                            setTimeout(scheduleMeasure, 300),
                            setTimeout(scheduleMeasure, 600),
                            setTimeout(scheduleMeasure, 1000),
                            setTimeout(scheduleMeasure, 1500)
                        ];
                    }
                }
            }["Services.useEffect"], {
                threshold: [
                    0,
                    0.1,
                    0.25,
                    0.5
                ]
            });
            if (containerRef.current) {
                intersectionObserver.observe(containerRef.current);
            }
            scheduleMeasure();
            const handleResize = scheduleMeasure;
            window.addEventListener("resize", handleResize);
            const timers = [
                setTimeout(scheduleMeasure, 50),
                setTimeout(scheduleMeasure, 150),
                setTimeout(scheduleMeasure, 400),
                setTimeout(scheduleMeasure, 800),
                setTimeout(scheduleMeasure, 1500)
            ];
            return ({
                "Services.useEffect": ()=>{
                    resizeObserver.disconnect();
                    intersectionObserver.disconnect();
                    intersectionTimers.forEach({
                        "Services.useEffect": (t)=>clearTimeout(t)
                    }["Services.useEffect"]);
                    window.removeEventListener("resize", handleResize);
                    timers.forEach({
                        "Services.useEffect": (timer)=>clearTimeout(timer)
                    }["Services.useEffect"]);
                }
            })["Services.useEffect"];
        }
    }["Services.useEffect"], [
        measure,
        isMobile,
        isTablet,
        mounted
    ]);
    // Animation hook
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useServicesAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServicesAnimation"])({
        points,
        pathRefs,
        beamRefs,
        progressRefs,
        setIconActive: handleIconActive,
        enabled: beamAnimationReady
    });
    const energyServices = [
        {
            ref: bessRef,
            icon: "/BESS.svg",
            title: "BESS",
            description: "Battery Energy Storage Systems"
        },
        {
            ref: solarRef,
            icon: "/Solar.svg",
            title: "Solar",
            description: "Solar Power Solutions"
        },
        {
            ref: windRef,
            icon: "/wind-power.svg",
            title: "Wind",
            description: "Wind Energy Solutions"
        },
        {
            ref: hydrogenRef,
            icon: "/GreenHydrogen.svg",
            title: "Green Hydrogen",
            description: "Green Hydrogen Solutions"
        }
    ];
    const featureData = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$technology$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Icons$2f$technology$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            title: "TRULY AGNOSTIC",
            description: "Platform-independent solution that works seamlessly across all systems and technologies."
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$stack$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Icons$2f$stack$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            title: "MODULAR AND SCALABLE",
            description: "Flexible architecture that grows with your infrastructure and adapts to changing needs."
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$energyefficiency$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Icons$2f$energyefficiency$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            title: "SEAMLESS INTEGRATION",
            description: "Effortlessly connects with existing grid systems for unified energy management."
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$INNOVATION$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Icons$2f$INNOVATION$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            title: "RAPID INNOVATION",
            description: "Continuous updates and cutting-edge features to stay ahead of industry demands."
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$Proven$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Icons$2f$Proven$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            title: "PROVEN TRACK-RECORD",
            description: "Trusted by industry leaders with demonstrated success in real-world deployments."
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Icons$2f$AiTechnology$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Icons$2f$AiTechnology$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            title: "FUTURE-READY",
            description: "AI-powered analytics and cloud-based infrastructure built for tomorrow's challenges."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        className: "relative w-full px-4 sm:px-6 pt-2 sm:pt-12 md:pt-20 bg-white/70 dark:bg-black/70 backdrop-blur-md overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto mb-2 sm:mb-8 md:mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-0 sm:mb-6 md:mb-8 lg:mb-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-gray-500 dark:text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-4 md:mb-6 lg:mb-8 font-sans",
                            children: "Services"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Services.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Services.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg font-sans leading-relaxed max-w-3xl mx-auto px-4",
                        children: "Comprehensive energy solutions powered by cutting-edge technology"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Services.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Services.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: containerRef,
                    className: "relative w-full min-h-[400px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[500px] flex items-center justify-center px-2 sm:px-4 py-4 sm:py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: centerRef,
                            className: "absolute top-12 sm:top-16 md:top-20 left-1/2 -translate-x-1/2 z-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-500 via-purple-600 to-orange-500 p-[2px] shadow-2xl hover:shadow-orange-500/30 dark:hover:shadow-orange-500/50 transition-all duration-500 hover:scale-110 group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full rounded-2xl sm:rounded-3xl bg-white dark:bg-gray-900 flex items-center justify-center p-2 sm:p-3 md:p-4 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/sgrids.svg",
                                        alt: "SGrids Logo",
                                        width: 80,
                                        height: 80,
                                        onLoad: ()=>markDiagramImageLoaded(0),
                                        className: "w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Services.tsx",
                                        lineNumber: 315,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Services.tsx",
                                    lineNumber: 314,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Services.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Services.tsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-48 sm:top-56 md:top-64 lg:top-72 left-1/2 -translate-x-1/2 w-full max-w-4xl px-2 sm:px-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8",
                                children: energyServices.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: service.ref,
                                        className: "flex flex-col items-center group cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl p-[2px] shadow-md transition-all duration-500 group-hover:scale-110 ${iconActive[index] ? "bg-gradient-to-br from-orange-500 via-purple-600 to-orange-500 scale-110" : "bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] dark:hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]"}`,
                                                style: iconActive[index] ? {
                                                    boxShadow: `
                      0 0 8px rgba(249, 115, 22, 0.15),
                      0 0 15px rgba(249, 115, 22, 0.1),
                      0 0 25px rgba(168, 85, 247, 0.12),
                      0 0 35px rgba(168, 85, 247, 0.08)
                    `
                                                } : {},
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-beam-target": true,
                                                    className: `w-full h-full rounded-xl sm:rounded-2xl flex items-center justify-center p-2 sm:p-2.5 md:p-3 backdrop-blur-sm transition-all duration-500 ${iconActive[index] ? "bg-gradient-to-br from-orange-50 via-purple-50 to-orange-50 dark:from-orange-950/30 dark:via-purple-950/30 dark:to-orange-950/30" : "bg-white dark:bg-gray-950"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: service.icon,
                                                        alt: service.title,
                                                        width: 60,
                                                        height: 60,
                                                        onLoad: ()=>{
                                                            markDiagramImageLoaded(index + 1);
                                                            requestAnimationFrame(()=>{
                                                                requestAnimationFrame(()=>measure());
                                                            });
                                                        },
                                                        className: "w-full h-full object-contain brightness-0 dark:brightness-0 dark:invert transition-all duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Services.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Services.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Services.tsx",
                                                lineNumber: 336,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-bold text-gray-900 dark:text-gray-100 text-center font-sans group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 px-1",
                                                children: service.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Services.tsx",
                                                lineNumber: 373,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 text-center font-sans leading-relaxed px-1",
                                                children: service.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Services.tsx",
                                                lineNumber: 376,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, service.title, true, {
                                        fileName: "[project]/src/components/sections/Services.tsx",
                                        lineNumber: 331,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Services.tsx",
                                lineNumber: 329,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Services.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        points && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ServicesBeams$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServicesBeams"], {
                            points: points,
                            containerRef: containerRef,
                            pathRefs: pathRefs,
                            beamRefs: beamRefs,
                            isMobile: isMobile,
                            isTablet: isTablet
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Services.tsx",
                            lineNumber: 386,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Services.tsx",
                    lineNumber: 304,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Services.tsx",
                lineNumber: 303,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "features",
                className: "w-full overflow-x-hidden overflow-visible -mt-4 sm:mt-12 md:mt-16 py-2 sm:py-8 md:py-12 lg:py-16 px-2 sm:px-4 md:px-6 flex flex-col items-center justify-center transition-colors duration-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto mb-2 sm:mb-6 md:mb-8 w-full px-2 sm:px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-0 sm:mb-6 md:mb-8 lg:mb-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center py-2 sm:py-4 md:py-6 lg:py-8 text-gray-500 dark:text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-4 md:mb-6 lg:mb-8 font-sans",
                                    children: "Why Smart Grid Analytics?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Services.tsx",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Services.tsx",
                                lineNumber: 405,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl mx-auto mb-6 sm:mb-8 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 px-2",
                                        children: [
                                            "Founded by control engineers and energy futurists, we built ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-orange-600 dark:text-orange-400",
                                                children: "Solvyn"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Services.tsx",
                                                lineNumber: 414,
                                                columnNumber: 75
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " — the only platform unifying SCADA, EMS, PPC, EPM, Intelligent Bidding, Digital Twin, and AI analytics into one seamless system."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Services.tsx",
                                        lineNumber: 413,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed px-2",
                                        children: [
                                            "With ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-gray-800 dark:text-gray-200",
                                                children: "85+ GW of assets under management across 20 countries"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Services.tsx",
                                                lineNumber: 417,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            ", we transform megawatts into decisions and data into foresight — enabling real-time visibility, AI-driven fault prevention, automated dispatch, and built-in compliance with CEA, IEC 62443, AEMO, and global grid codes."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Services.tsx",
                                        lineNumber: 416,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Services.tsx",
                                lineNumber: 412,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Services.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto w-full px-2 sm:px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8",
                            children: featureData.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group relative min-h-[240px] sm:min-h-[260px] md:min-h-[280px] p-3 sm:p-4 md:p-6 lg:p-8 overflow-hidden rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] dark:hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:scale-[1.02]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0 bg-gradient-to-br from-orange-50 via-purple-50 to-white dark:from-orange-950/20 dark:via-purple-950/20 dark:to-gray-950"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Services.tsx",
                                            lineNumber: 430,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 h-full flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between mb-4 sm:mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-100 to-purple-100 dark:from-orange-900/30 dark:to-purple-900/30 group-hover:scale-110 transition-all duration-500",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: card.icon,
                                                                alt: card.title,
                                                                width: 32,
                                                                height: 32,
                                                                className: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 brightness-0 dark:brightness-0 dark:invert opacity-80 dark:opacity-90"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Services.tsx",
                                                                lineNumber: 435,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Services.tsx",
                                                            lineNumber: 434,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1 h-6 sm:h-8 rounded-full bg-gradient-to-b from-orange-500 to-purple-600 transition-all duration-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Services.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/Services.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900 dark:text-gray-100 tracking-tight group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-500 leading-tight",
                                                    children: card.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Services.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed flex-grow",
                                                    children: card.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Services.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Services.tsx",
                                            lineNumber: 432,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/sections/Services.tsx",
                                    lineNumber: 426,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Services.tsx",
                            lineNumber: 424,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Services.tsx",
                        lineNumber: 423,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Services.tsx",
                lineNumber: 399,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Services.tsx",
        lineNumber: 285,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Services, "6M7VmbyN2yIlA6mjgxn4y+yyWZs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDiagramAnimationReady$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDiagramAnimationReady"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useServicesAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServicesAnimation"]
    ];
});
_c = Services;
const __TURBOPACK__default__export__ = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
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
"use client";
;
function Cta() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "cta",
        className: "relative w-full px-4 sm:px-6 pt-6 sm:pt-10 bg-white/70 dark:bg-black/70 backdrop-blur-md overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto",
            children: "CTA"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Cta.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Cta.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Cta;
var _c;
__turbopack_context__.k.register(_c, "Cta");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "footer",
        className: "relative w-full px-4 sm:px-6 pt-6 sm:pt-10 bg-white/70 dark:bg-black/70 backdrop-blur-md overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto",
            children: "FOOTER"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Footer.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_37b92ec0._.js.map