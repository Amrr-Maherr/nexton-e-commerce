"use client";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category }) {
  return (
    <Link href="/">
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl mx-auto bg-white">
        <div className="relative w-full h-80">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-3 text-center font-semibold text-gray-800">
          {category.name}
        </div>
      </div>
    </Link>
  );
}
