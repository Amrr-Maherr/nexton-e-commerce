import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="w-[600px] relative">
      <input
        type="text"
        placeholder="Search in products..."
        className="bg-[#F8F8F8] w-full h-full rounded-full py-[17.67px] pl-[50px] pr-[25.67px] focus:border-0 focus:outline-0 text-[14px]"
      />
      <Search
        className="absolute left-[20px] top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />
    </div>
  );
}
