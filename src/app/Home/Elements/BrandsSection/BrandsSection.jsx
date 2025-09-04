"use client";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Slider from "@/components/Slider/Slider";
import useFetchBrands from "@/Hooks/useFetchBrands";
import BrandCard from "./BrandCard";
import Loader from "@/components/Loader/Loader";

export default function BrandsSection() {
    const { brands, loading, error } = useFetchBrands();
    if (loading) {
        return (
            <Loader/>
        )
    }
  return (
    <>
      <section className="py-10 md:py-20 container">
        <SectionTitle
          title="Discover more."
          spanTitle="Amazing experiences are ahead for you"
        />
        <div className="flex items-center justify-center ">
          <Slider slidesPerView={6} spaceBetween={20} slidesPerViewMobile={2}>
            {brands?.map((brand) => (
              <BrandCard brand={brand} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
