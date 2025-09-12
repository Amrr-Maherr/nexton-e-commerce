"use client";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import BlurText from "@/components/BlurText";

export default function Page() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full h-full relative"
    >
      <div className="relative">
        <figure>
          <Image
            width={1000}
            quality={100}
            height={1000}
            src="/images/hero-bg.png"
            alt="Hero background"
            className="object-cover w-full h-full aspect-[3/2] md:aspect-auto"
          />
        </figure>
        <div className="absolute inset-0 w-full h-full flex items-start px-6 md:px-28 gap-2 md:gap-6 justify-center flex-col">
          <BlurText
            text="Starting from: $49.99"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-base md:text-xl font-medium text-[#4B5563]"
          />
          <BlurText
            text="Exclusive collection for everyone"
            delay={250}
            animateBy="words"
            direction="top"
            className="text-2xl md:text-6xl leading-snug md:leading-[72px] max-w-[632px] font-semibold text-[#111827]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button className="flex shadow-2xl items-center justify-between gap-2 rounded-full py-3 md:py-5 px-6 md:px-9 text-sm md:text-lg font-medium text-white cursor-pointer">
              <span>Explore now</span>
              <Search size={20} className="text-gray-200" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
