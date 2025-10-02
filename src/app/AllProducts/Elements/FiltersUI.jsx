import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FetchFilteredProducts } from "@/Redux/FilterSlice";

export default function FiltersPanel() {
  const dispatch = useDispatch();

  const brands = useSelector((state) => state.brands.data) || [];
  const categories = useSelector((state) => state.category.data) || [];

  const [filters, setFilters] = useState({
    sort: "-price",
    priceGte: "",
    priceLte: "",
    keyword: "",
    brand: "",
    categoryIn: "",
  });

  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setFilters({
      sort: "-price",
      priceGte: "",
      priceLte: "",
      keyword: "",
      brand: "",
      categoryIn: "",
    });
  };

  const handleApply = () => {
    const payload = {
      ...filters,
      "price[gte]": filters.priceGte ? Number(filters.priceGte) : undefined,
      "price[lte]": filters.priceLte ? Number(filters.priceLte) : undefined,
      "category[in]": filters.categoryIn,
    };
    console.log(payload, "filters payload");
    dispatch(FetchFilteredProducts(payload));
  };

  return (
    <div className="grid gap-4">
      {/* Search / Keyword */}
      <label className="font-medium">Search in products...</label>
      <Input
        type="text"
        placeholder="Keyword"
        value={filters.keyword}
        onChange={(e) => handleChange("keyword", e.target.value)}
      />

      {/* Categories */}
      <label className="font-medium">Categories</label>
      <Select
        value={filters.categoryIn}
        onValueChange={(val) => handleChange("categoryIn", val)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Categories" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((c) => (
            <SelectItem value={c._id} key={c._id}>
              {c.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Brands */}
      <label className="font-medium">Brands</label>
      <Select
        value={filters.brand}
        onValueChange={(val) => handleChange("brand", val)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Brands" />
        </SelectTrigger>
        <SelectContent>
          {brands.map((b) => (
            <SelectItem value={b._id} key={b._id}>
              {b.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Price Range */}
      <div className="grid grid-cols-2 gap-4">
        {/* Min Price */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Price (Min)</label>
          <Input
            type="number"
            placeholder="1"
            value={filters.priceGte}
            onChange={(e) => handleChange("priceGte", e.target.value)}
          />
        </div>

        {/* Max Price */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Price (Max)</label>
          <Input
            type="number"
            placeholder="1000"
            value={filters.priceLte}
            onChange={(e) => handleChange("priceLte", e.target.value)}
          />
        </div>
      </div>

      {/* Sort */}
      <label className="font-medium">Sort</label>
      <Select
        value={filters.sort}
        onValueChange={(val) => handleChange("sort", val)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="-price">Price Desc</SelectItem>
          <SelectItem value="price">Price Asc</SelectItem>
          <SelectItem value="-createdAt">Newest</SelectItem>
        </SelectContent>
      </Select>

      {/* Buttons */}
      <div className="flex gap-2 mt-4">
        <Button onClick={handleReset} variant="outline" className="flex-1">
          Reset
        </Button>
        <Button onClick={handleApply} className="flex-1">
          Apply
        </Button>
      </div>
    </div>
  );
}
