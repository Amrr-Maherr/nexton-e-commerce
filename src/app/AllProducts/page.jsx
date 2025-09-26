"use client";
import Loader from "@/components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FiltersUI from "./Elements/FiltersUI";
import { FetchFilteredProducts } from "@/Redux/FilterSlice";
import ProductCard from "../Home/Elements/ProductsSection/ProductCard";
export default function AllProducts() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.filters.data);
  const loading = useSelector((state) => state.filters.loading);
  useEffect(() => {
    dispatch(FetchFilteredProducts())
  },[dispatch])
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 py-5 md:py-22 container mx-auto">
          {/* Filters */}
          <div className="col-span-12 md:col-span-3">
            <FiltersUI />
          </div>

          {/* Products Grid */}
          <div className="col-span-12 md:col-span-9 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {loading ? (
              <div className="flex items-center justify-center col-span-12">
                <Loader />
              </div>
            ) : products.length > 0 ? (
              products?.map((product) => (
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
