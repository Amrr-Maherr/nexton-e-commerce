"use client"
import { Search, X } from "lucide-react";
import { useState } from "react";

export default function SearchInput() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-[400px] relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search in products..."
        className="bg-[#F8F8F8] w-full h-full rounded-full py-[17.67px] pl-[50px] pr-[50px] focus:border-0 focus:outline-0 text-[14px]"
      />
      <Search
        className="absolute left-[20px] top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />
      {query.length > 0 && (
        <X
          className="absolute right-[20px] top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
          size={20}
          onClick={() => setQuery("")}
        />
      )}
    </div>
  );
}
