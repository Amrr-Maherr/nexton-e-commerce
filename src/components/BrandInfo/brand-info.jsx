"use client";
import { Truck, Undo2, Globe, RotateCcw } from "lucide-react";
import BrandInfoCard from "./Elements/BrandInfoCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import { motion } from "framer-motion";

export default function BrandInfo() {
  const Data = [
    {
      title: "Free shipping",
      Description: "On orders over $50.00",
      icon: <Truck className="w-6 h-6 md:w-8 md:h-8 text-black" />,
    },
    {
      title: "Very easy to return",
      Description: "Just phone number",
      icon: <Undo2 className="w-6 h-6 md:w-8 md:h-8 text-black" />,
    },
    {
      title: "Worldwide delivery",
      Description: "Fast delivery worldwide",
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-black" />,
    },
    {
      title: "Refunds policy",
      Description: "60 days return for any reason",
      icon: <RotateCcw className="w-6 h-6 md:w-8 md:h-8 text-black" />,
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="flex items-center justify-center flex-col px-6 md:px-[120px] py-8 md:py-[52px]">
      <SectionTitle title="Nexton®" spanTitle="always with you" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full"
      >
        {Data?.map((item, index) => (
          <motion.div key={index} variants={cardVariants}>
            <BrandInfoCard item={item} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
