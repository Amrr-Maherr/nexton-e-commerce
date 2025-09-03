"use client";

import Image from "next/image";

export default function AboutSection({
  title,
  text,
  imageSrc,
  reverse = false,
}) {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between gap-18 py-12 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 text-left">
        <h2 className="text-[24px] font-semibold text-[#111827] mb-4">
          {title}
        </h2>
        <p className="text-[16px] text-[#4B5563] leading-relaxed">{text}</p>
      </div>
      <div
        className={`flex-1 flex ${reverse ? "justify-start" : "justify-end"}`}
      >
        <Image
          quality={100}
          width={1000}
          height={1000}
          src={imageSrc}
          alt={title}
          className="rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
