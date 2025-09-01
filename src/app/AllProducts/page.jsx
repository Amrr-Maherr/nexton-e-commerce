"use client";
import { useState } from "react";
import ProductCard from "../Home/Elements/ProductsSection/ProductCard";
import FiltersUI from "./Elements/FiltersUI";
import Loader from "@/components/Loader/Loader";

export default function AllProducts() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 py-5 md:py-22 container mx-auto">
          {/* Filters */}
          <div className="col-span-12 md:col-span-3">
            <FiltersUI
              setFilteredProducts={setFilteredProducts}
              setLoading={setLoading}
            />
          </div>

          {/* Products Grid */}
          <div className="col-span-12 md:col-span-9 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {loading ? (
              <Loader />
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
