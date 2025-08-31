"use client";
import useFetchBrands from "@/Hooks/useFetchBrands";
import useFetchCategories from "@/Hooks/useFetchCategories";
import { useState } from "react";

export default function FiltersUI() {
    const { categories, loading, error } = useFetchCategories()
    const {
      brands,
      loading: brandsLoading,
      error: brandsError,
    } = useFetchBrands();
  const [filters, setFilters] = useState({
    keyword: "",
    brand: "",
    category: "",
    priceGte: "",
    priceLte: "",
  });
console.log(categories, "categories");

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <form className="grid gap-4">
        {/* Keyword */}
        <div>
          <label className="block text-sm font-medium mb-1">Keyword</label>
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block text-sm font-medium mb-1">Brands</label>
          <select className="w-full p-2 border rounded-lg">
            {brands.map((brand) => (
              <option value={brand.name}>{brand.name}</option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select className="w-full p-2 border rounded-lg">
            {categories.map((category) => (
              <option value={category.name}>{category.name}</option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">
              Price (Min)
            </label>
            <input
              type="number"
              placeholder="0"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Price (Max)
            </label>
            <input
              type="number"
              placeholder="1000"
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            type="reset"
            className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 rounded-lg text-white"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}
