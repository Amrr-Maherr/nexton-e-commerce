"use client";
import useFetchBrands from "@/Hooks/useFetchBrands";
import useFetchCategories from "@/Hooks/useFetchCategories";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function FiltersUI() {
  const { categories = [], loading, error } = useFetchCategories();
  const {
    brands = [],
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

  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filters applied:", filters);
    // هنا تبعت الفلاتر للهوك أو API
  };

  const handleReset = () => {
    setFilters({
      keyword: "",
      brand: "",
      category: "",
      priceGte: "",
      priceLte: "",
    });
  };

  return (
    <>
      <div className="p-6 hidden md:block bg-white rounded-2xl w-full mx-auto">
        <form className="grid gap-4" onSubmit={handleSubmit}>
          {/* Category */}
          <div>
            <Select
              value={filters.category}
              onValueChange={(val) => handleChange("category", val)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem
                    value={category.name}
                    key={category._id || category.id || category.name}
                  >
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <hr className="w-full bg-gray-400 my-[22px]" />

          {/* Keyword */}
          <div className="grid w-full items-center gap-3">
            <Label htmlFor="key">Key words</Label>
            <Input
              type="text"
              id="key"
              placeholder="key word"
              value={filters.keyword}
              onChange={(e) => handleChange("keyword", e.target.value)}
            />
          </div>
          <hr className="w-full bg-gray-400 my-[22px]" />

          {/* Brand */}
          <div>
            <Select
              value={filters.brand}
              onValueChange={(val) => handleChange("brand", val)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Brands" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand) => (
                  <SelectItem
                    value={brand.name}
                    key={brand._id || brand.id || brand.name}
                  >
                    {brand.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <hr className="w-full bg-gray-400 my-[22px]" />

          {/* Price Range */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[18px] font-semibold mb-[8px]">
                Price (Min)
              </label>
              <Input
                type="number"
                placeholder="1"
                value={filters.priceGte}
                onChange={(e) => handleChange("priceGte", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Price (Max)
              </label>
              <Input
                type="number"
                placeholder="1000"
                value={filters.priceLte}
                onChange={(e) => handleChange("priceLte", e.target.value)}
              />
            </div>
          </div>
          <hr className="w-full bg-gray-400 my-[22px]" />

          {/* Buttons */}
          <div className="flex justify-between gap-5 mt-4">
            <Button
              variant="outline"
              type="button"
              onClick={handleReset}
              className="px-10 py-2 bg-white rounded-full w-auto text-gray-700"
            >
              Reset
            </Button>
            <Button
              type="submit"
              className="px-10 py-2 bg-[#111827] rounded-full w-auto text-white"
            >
              Apply
            </Button>
          </div>
        </form>
      </div>
      <div className="p-4 block md:hidden bg-white rounded-2xl w-full mx-auto">
        <form className="grid gap-4" onSubmit={handleSubmit}>
          {/* Category */}
          <div className="w-full">
            <Select
              value={filters.category}
              onValueChange={(val) => handleChange("category", val)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem
                    value={category.name}
                    key={category._id || category.id || category.name}
                  >
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Keyword */}
          <div className="w-full">
            <Input
              type="text"
              id="key"
              placeholder="Keyword"
              value={filters.keyword}
              onChange={(e) => handleChange("keyword", e.target.value)}
            />
          </div>

          {/* Brand */}
          <div className="w-full">
            <Select
              value={filters.brand}
              onValueChange={(val) => handleChange("brand", val)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Brands" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand) => (
                  <SelectItem
                    value={brand.name}
                    key={brand._id || brand.id || brand.name}
                  >
                    {brand.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Price (Min)
              </label>
              <Input
                type="number"
                placeholder="1"
                value={filters.priceGte}
                onChange={(e) => handleChange("priceGte", e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Price (Max)
              </label>
              <Input
                type="number"
                placeholder="1000"
                value={filters.priceLte}
                onChange={(e) => handleChange("priceLte", e.target.value)}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
            <Button
              variant="outline"
              type="button"
              onClick={handleReset}
              className="flex-1 py-2 bg-white rounded-full text-gray-700 cursor-pointer"
            >
              Reset
            </Button>
            <Button
              type="submit"
              className="flex-1 py-2 bg-[#111827] rounded-full text-white cursor-pointer"
            >
              Apply
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
