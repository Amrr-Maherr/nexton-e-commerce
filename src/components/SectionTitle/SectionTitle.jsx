"use client";
import { motion } from "framer-motion";

export default function SectionTitle({ title, spanTitle }) {
  return (
    <>
      <div className="mb-[40px] w-full text-start">
        <motion.h1
          className="text-[36px] text-[#111827] font-semibold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {title} <span className="text-[#4B5563]">{spanTitle}</span>
        </motion.h1>
      </div>
    </>
  );
}
