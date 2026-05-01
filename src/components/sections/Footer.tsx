"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solvyn: [
      { name: "Solvyn X", href: "/solvyn/solvyn-x" },
      { name: "SCADA", href: "/solvyn/scada" },
      { name: "Digital Twin", href: "/solvyn/digital-twin" },
      { name: "AURA", href: "/solvyn/aura" },
      { name: "EMS", href: "/solvyn/ems" },
      { name: "Cybersecure OT/IT", href: "/solvyn/cybersecure-ot-it" },
    ],
    applications: [
      { name: "Grid & Utility Operations", href: "/applications/grid-utility-operations" },
      { name: "Hybrid Energy Control", href: "/applications/hybrid-energy-control" },
      { name: "BTM / ATM Intelligence", href: "/applications/btm-atm-intelligence" },
      { name: "Market Optimization", href: "/applications/market-optimization" },
    ],
    proof: [
      { name: "Case Studies", href: "/case-studies" },
      { name: "Deployments", href: "/proof/deployments" },
      { name: "White Papers", href: "/white-papers" },
      { name: "News", href: "/proof/news" },
    ],
    company: [
      { name: "About SGA", href: "/company/about" },
      { name: "Leadership", href: "/company/leadership" },
      { name: "IP & Patents", href: "/company/ip-patents" },
      { name: "Partners", href: "/company/partners" },
      { name: "Careers", href: "/company/careers" },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://in.linkedin.com/company/smart-grid-analytics",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/smartgrids",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: <FaXTwitter className="h-6 w-6" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/smartgridanalytics/",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: <FaInstagram className="h-6 w-6" />,
    },
  ];

  return (
    <footer
      id="footer"
      data-snap-section
      className="relative w-full overflow-hidden border-t border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-black/90"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:py-16">
        <div className="mb-8 grid grid-cols-2 gap-3 sm:mb-12 sm:gap-4 lg:grid-cols-6 lg:gap-12">
          <div className="col-span-2 mb-4 sm:mb-0 lg:col-span-2">
            <div className="mb-3 sm:mb-4">
              <Link href="/" className="cursor-pointer">
                <motion.img
                  src="/logo_dark.svg"
                  alt="Smart Grid Analytics"
                  className="h-8 w-auto sm:h-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </div>
            <p className="mb-4 font-sans text-xs leading-relaxed text-gray-600 dark:text-gray-400 sm:mb-6 sm:text-sm">
              Engineering the operating system for the renewable century with
              AI-powered solutions for clean energy optimization.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-5 w-5 items-center justify-center rounded-[6px] border border-gray-600 bg-transparent text-gray-600 cursor-pointer transition-all duration-300 ease-in-out hover:border-[#FF7F00] hover:bg-[#FF7F00]/10 hover:text-[#FF7F00] hover:shadow-sm active:translate-y-px dark:border-gray-400 dark:text-gray-400 dark:hover:border-[#FF7F00] dark:hover:bg-[#FF7F00]/10 dark:hover:text-[#FF7F00] sm:h-8 sm:w-8"
                  aria-label={social.name}
                  target={social.target}
                  rel={social.rel}
                >
                  {React.isValidElement(social.icon)
                    ? React.cloneElement(
                        social.icon as React.ReactElement<{
                          className?: string;
                        }>,
                        {
                          className:
                            social.name === "LinkedIn"
                              ? "h-2.5 w-2.5 sm:h-4 sm:w-4"
                              : "h-3 w-3 sm:h-4 sm:w-4",
                        },
                      )
                    : social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="mb-1.5 font-sans text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100 sm:mb-4 sm:text-sm">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h3>
              <ul className="flex flex-col space-y-1.5 lg:space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="whitespace-nowrap font-sans text-xs text-gray-600 transition-colors hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 sm:text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-[100vw] border-t border-[#e5edf5]/60 dark:border-[#e5edf5]/40">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex flex-col items-center justify-between gap-2 space-y-2 sm:gap-0 sm:space-y-3 md:flex-row md:space-y-0">
            <p className="text-center font-sans text-xs text-gray-600 dark:text-gray-400 sm:text-sm md:text-left">
              © {currentYear} Smart Grid Analytics. All rights reserved.
            </p>
            <p className="text-center font-sans text-xs text-gray-600 dark:text-gray-400 sm:text-sm md:text-right">
              Powered by{" "}
              <a
                href="/#solvyn"
                className="font-semibold text-orange-500 transition-colors hover:text-orange-600 dark:hover:text-orange-400"
              >
                Solvyn
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
