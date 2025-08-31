"use client";
import { useState } from "react";
import useSearch from "@/Hooks/useSearch";
import { Search } from "lucide-react";
import Link from "next/link";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const { searchResponse, loading } = useSearch(query);

  return (
    <div className="w-full max-w-[600px] relative">
      <input
        type="text"
        placeholder="Search in products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-[#F8F8F8] w-full h-full rounded-full py-[17.67px] pl-[50px] pr-[25.67px] focus:border-0 focus:outline-0 text-[14px]"
      />
      <Search
        className="absolute left-[20px] top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />

      {/* Dropdown results */}
      {query && searchResponse && searchResponse.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg mt-1 max-h-60 overflow-auto shadow-lg z-50">
          {searchResponse.map((item) => (
            <Link
              href={`/product/${item.id}`}
              key={item.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer block"
              onClick={() => setQuery(item.title)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}

      {/* Loading text */}
      {loading && (
        <p className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
          Loading...
        </p>
      )}

      {/* No results */}
      {query && searchResponse && searchResponse.length === 0 && !loading && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg mt-1 shadow-lg z-50 px-4 py-2 text-gray-500">
          No results found
        </div>
      )}
    </div>
  );
}
