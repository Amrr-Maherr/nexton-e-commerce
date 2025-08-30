"use client";
import { Star, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
    console.log(product,"product");
    
  return (
      <div className="rounded-lg overflow-hidden w-auto mx-auto bg-white">
        <div className="relative w-full h-[200px] md:h-[409px]">
          <Link href="/">
            <Image
              src={product.imageCover}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
            />
          </Link>
          <div className="absolute cursor-pointer right-[15px] top-[15px] w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center">
            <ShoppingBag className="w-5 h-5" />
          </div>
        </div>
        <div className="flex items-center justify-between px-[16px] mt-[20px]">
          <div className="text-start font-semibold text-[#111827] text-[16px]">
            {product.title.slice(0, 10)}..
          </div>
          <div className="text-[16px] text-[#111827]">${product.price}</div>
        </div>
        <div className="px-[16px] gap-[15px] flex items-start justify-center flex-col">
          <div className="text-[#4B5563] text-[14px] font-normal">
            {product.category.name}
          </div>
          <div className="text-center text-[14px] font-semibold text-[#4B5563] gap-[4px] flex-row-reverse flex items-center justify-center">
            ({product.ratingsAverage})
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          </div>
        </div>
      </div>
  );
}
