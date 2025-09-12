"use client";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Slider from "@/components/Slider/Slider";
import useFetchProducts from "@/Hooks/useFetchProducts";
import ProductCard from "./ProductCard";
import Loader from "@/components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "@/Redux/ProductsSlice";

export default function ProductsSection({ title, spanTitle }) {
  const Dispatch = useDispatch()
  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const loading = useSelector((state) => state.products.loading);
  useEffect(() => {
    Dispatch(fetchProducts());
  },[])
  console.log(products.products,"pro");
  
  if (loading) {
    return <Loader loading={loading} />;
  }
  if (error) {
    return (
      <>
        <p>{error}</p>
      </>
    )
  }
  return (
    <>
      <section className="py-10 md:py-20 container">
        <SectionTitle title={title} spanTitle={spanTitle} />
        <div className="flex items-center justify-center ">
          <Slider slidesPerView={4} spaceBetween={20} slidesPerViewMobile={2}>
            {Array.isArray(products) ? (
              products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
            ) : (
              <p>No products found</p>
            )}
          </Slider>
        </div>
      </section>
    </>
  );
}
