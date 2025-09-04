"use client";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Ads({
  startingPrice = "$49.99",
  heading = "Exclusive collection for everyone",
  buttonText = "Explore now",
  imageSrc = "/images/hero-bg.png",
  imageAlt = "Hero background",
}) {
  return (
    <section className="w-full h-full relative container my-[52px]">
      <div className="relative">
        <figure className="md:h-[500px] h-[200px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            quality={100}
            className="object-cover rounded-2xl w-full h-full aspect-[3/2] md:aspect-auto"
          />
        </figure>

        <div className="absolute inset-0 w-full h-full flex items-start px-6 md:px-28 gap-2 md:gap-6 justify-center flex-col">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl font-medium text-[#4B5563]"
          >
            {startingPrice}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-2xl md:text-6xl leading-snug md:leading-[72px] max-w-[632px] font-semibold text-[#111827]"
          >
            {heading}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button className="flex shadow-2xl items-center justify-between gap-2 rounded-full py-3 md:py-5 px-6 md:px-9 text-sm md:text-lg font-medium text-white cursor-pointer">
              <span>{buttonText}</span>
              <Search size={20} className="text-gray-200" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
