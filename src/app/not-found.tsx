"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="relative px-6 min-h-screen flex flex-col items-center justify-center 
                 bg-white backdrop-blur-md overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-bold text-gray-900"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-4 text-lg md:text-xl text-gray-700 text-center max-w-xl"
      >
        Oops! The page you are looking for doesn’t exist or might have been
        moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-10"
      >
        <Link
          href="/"
          className="px-6 py-3 border border-gray-700 rounded-full 
                     text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
        >
          Go Back Home
        </Link>
      </motion.div>
    </section>
  );
}
