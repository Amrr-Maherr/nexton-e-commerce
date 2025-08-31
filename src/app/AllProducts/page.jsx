"use client";
import useFetchProducts from "@/Hooks/useFetchProducts";
import ProductCard from "../Home/Elements/ProductsSection/ProductCard";
import FiltersUI from "./Elements/FiltersUI";
import Loader from "@/components/Loader/Loader";

export default function AllProducts() {
  const { data, loading, error } = useFetchProducts();

  if (loading) {
    return <Loader />;
  }

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
            {Array.isArray(data) ? (
              data.map((product) => (
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
