"use client";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Slider from "@/components/Slider/Slider";
import useFetchProducts from "@/Hooks/useFetchProducts";
import ProductCard from "./ProductCard";
import Loader from "@/components/Loader/Loader";

export default function ProductsSection({ title, spanTitle }) {
  const { data, loading, error } = useFetchProducts();
  if (loading) {
    return <Loader loading={loading} />;
  }
  return (
    <>
      <section className="py-10 md:py-20 px-[20px] md:px-[120px]">
        <SectionTitle title={title} spanTitle={spanTitle} />
        <div className="flex items-center justify-center ">
          <Slider slidesPerView={4} spaceBetween={20} slidesPerViewMobile={2}>
            {Array.isArray(data) ? (
              data.map((product) => (
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
