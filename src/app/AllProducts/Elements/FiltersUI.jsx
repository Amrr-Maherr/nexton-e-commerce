"use client";
import { useState, useEffect } from "react";
// import useFetchBrands from "@/Hooks/useFetchBrands";
// import useFetchCategories from "@/Hooks/useFetchCategories";
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
import { useDispatch, useSelector } from "react-redux";
import { FetchBrands } from "@/Redux/BrandsSlice";
import { FetchCategory } from "@/Redux/CategorySlice";

export default function FiltersUI() {
  const dispatch = useDispatch()
  const category = useSelector((state) => state.category.data);
  const Brands = useSelector((state) => state.brands.data);

  useEffect(() => {
    dispatch(FetchBrands())
    dispatch(FetchCategory())
  }, []);

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

  const handleReset = () => {
    setFilters({
      keyword: "",
      brand: "",
      category: "",
      priceGte: "",
      priceLte: "",
    });
    setAppliedFilters({});
  };

  const handleApply = (e) => {
    e.preventDefault();
    setAppliedFilters({ ...filters });
  };

  return (
    <form className="grid gap-4" onSubmit={handleApply}>
      {/* Categories */}
      <Select
        value={filters.category}
        onValueChange={(val) => handleChange("category", val)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Categories" />
        </SelectTrigger>
        <SelectContent>
          {category?.map((cat) => (
            <SelectItem value={cat._id} key={cat._id}>
              {cat.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Keyword */}
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="key">Key words</Label>
        <Input
          type="text"
          id="key"
          placeholder="Key word"
          value={filters.keyword}
          onChange={(e) => handleChange("keyword", e.target.value)}
        />
      </div>

      {/* Brands */}
      <Select
        value={filters.brand}
        onValueChange={(val) => handleChange("brand", val)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Brands" />
        </SelectTrigger>
        <SelectContent>
          {Brands?.map((b) => (
            <SelectItem value={b._id} key={b._id}>
              {b.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Price */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label className="mb-3">Price (Min)</Label>
          <Input
            type="number"
            placeholder="1"
            value={filters.priceGte}
            onChange={(e) => handleChange("priceGte", e.target.value)}
          />
        </div>
        <div>
          <Label className="mb-3">Price (Max)</Label>
          <Input
            type="number"
            placeholder="1000"
            value={filters.priceLte}
            onChange={(e) => handleChange("priceLte", e.target.value)}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-2 mt-4">
        <Button
          variant="outline"
          className="flex-1 rounded-full"
          type="button"
          onClick={handleReset}
          // disabled={loading}
        >
          Reset
        </Button>
        <Button
          type="submit"
          className="flex-1 rounded-full"
          // disabled={loading}
        >
          Apply
        </Button>
      </div>
    </form>
  );
}
