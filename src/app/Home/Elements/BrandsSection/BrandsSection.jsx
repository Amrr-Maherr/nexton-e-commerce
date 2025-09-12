"use client";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Slider from "@/components/Slider/Slider";
import BrandCard from "./BrandCard";
import Loader from "@/components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchBrands } from "@/Redux/BrandsSlice";

export default function BrandsSection() {
  const dispatch = useDispatch()
const Brands = useSelector((state) => state.brands.data);
const error = useSelector((state) => state.brands.error);
const loading = useSelector((state) => state.brands.loading);

  useEffect(() => {
    dispatch(FetchBrands())
  },[dispatch])
  console.log(Brands,"br");
  
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
            {Brands?.map((brand) => (
              <BrandCard brand={brand} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
