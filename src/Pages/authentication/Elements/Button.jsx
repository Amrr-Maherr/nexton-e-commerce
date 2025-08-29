"use client";
import { motion } from "motion/react";

export default function Button({ ButtonText }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full shadow-2xl bg-[#111827] rounded-full p-[14px] text-white text-[14px] font-medium cursor-pointer"
    >
      {ButtonText}
    </motion.button>
  );
}
