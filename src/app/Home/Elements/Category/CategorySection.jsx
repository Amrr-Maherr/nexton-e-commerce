"use client";
import CategoryCard from "./CategoryCard";
import Slider from "@/components/Slider/Slider";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Loader from "@/components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchCategory } from "../../../../Redux/CategorySlice";

export default function Category() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.data);
  const loading = useSelector((state) => state.category.loading);
  const error = useSelector((state) => state.category.error);

  useEffect(() => {
    dispatch(FetchCategory());
  }, []);

  console.log(category, "cat");

  if (loading) {
    return <Loader loading={loading} />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="py-10 md:py-20 container">
      <SectionTitle
        title="Start exploring."
        spanTitle="Good things are waiting for you"
      />
      <div className="flex items-center justify-center">
        <Slider slidesPerView={4} spaceBetween={20} slidesPerViewMobile={2}>
          {category?.map((item) => (
            <CategoryCard category={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
