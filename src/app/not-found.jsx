"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/404 error with people holding the numbers-cuate.png"
          alt="404 Not Found"
          width={500}
          height={500}
          className="mx-auto mb-8"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
      >
        Oops! Page not found
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-gray-600 mb-6"
      >
        The page you are looking for might have been removed or does not exist.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-[#111827] text-white font-medium rounded-full hover:bg-gray-900 transition"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
