"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);

  const searchResponse = products?.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const clearQuery = () => setQuery("");

  return (
    <div className="w-full max-w-[600px] relative">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <Input
          placeholder="Search in products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {query && (
          <X
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            size={20}
            onClick={clearQuery}
          />
        )}
      </div>

      {query && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg mt-1 max-h-60 overflow-auto shadow-lg z-50">
          {loading && <p className="px-4 py-2 text-gray-500">Loading...</p>}
          {!loading && searchResponse?.length === 0 && (
            <p className="px-4 py-2 text-gray-500">No results found</p>
          )}
          {!loading &&
            searchResponse?.map((item) => (
              <Link
                href={`/product/${item.id}`}
                key={item.id}
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-100"
                onClick={() => setQuery(item.title)}
              >
                <span className="truncate">{item.title}</span>
                <Image
                  src={item.imageCover}
                  alt={item.title}
                  width={50}
                  height={50}
                  quality={100}
                  className="object-cover rounded ml-2"
                />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}
