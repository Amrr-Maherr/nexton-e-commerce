import { useState, useEffect } from "react";
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
  const brands = useSelector((state) => state.brands.data);
  const categories = useSelector((state) => state.category.data);
  console.log(categories, "categories");
  
  useEffect(() => {
    dispatch(
      FetchFilteredProducts({
        sort: "-price",
        fields: "title,price",
        "price[gte]": 100,
        keyword: "new",
        brand: "6212b6b488f2cee15c5db3c8",
        "price[lte]": 13,
        "category[in]": [
          "6212b67488f2cee15c5db3ba",
          "61f3157c6bdf4c518f9bbcb9",
        ],
      })
    );
  }, [dispatch]);

  const [filters, setFilters] = useState({
    sort: "-price",
    "price[gte]": "",
    "price[lte]": "",
    keyword: "",
    brand: "",
    "category[in]": "",
  });

  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setFilters({
      sort: "-price",
      "price[gte]": "",
      "price[lte]": "",
      keyword: "",
      brand: "",
      "category[in]": "",
    });
  };

  const handleApply = () => {
    const payload = {
      filters
    };
    dispatch(FetchFilteredProducts(payload));
  };
  return (
    <div className="grid gap-4">
      {/* Search / Keyword */}
      <label className="font-medium">Search in products...</label>
      <Input
        type="text"
        placeholder="Key word"
        value={filters.keyword}
        onChange={(e) => handleChange("keyword", e.target.value)}
      />

      {/* Categories */}
      <label className="font-medium">Categories</label>
      <Select
        value={filters["category[in]"]}
        onValueChange={(val) => handleChange("category[in]", val)}
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

      {/* Min Price */}
      <div className="grid grid-cols-2 gap-4">
        {/* Min Price */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Price (Min)</label>
          <Input
            type="number"
            placeholder="1"
            value={filters["price[gte]"]}
            onChange={(e) => handleChange("price[gte]", e.target.value)}
          />
        </div>

        {/* Max Price */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Price (Max)</label>
          <Input
            type="number"
            placeholder="1000"
            value={filters["price[lte]"]}
            onChange={(e) => handleChange("price[lte]", e.target.value)}
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
