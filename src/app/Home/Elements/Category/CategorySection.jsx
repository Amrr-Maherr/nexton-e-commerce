"use client"
import useFetchCategories from "@/Hooks/useFetchCategories"
import CategoryCard from "./CategoryCard";
import Slider from "@/components/Slider/Slider";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Loader from "@/components/Loader/Loader";

export default function Category() {
    const { categories, loading, error } = useFetchCategories()
    console.log(categories);
    if (loading) {
        return <Loader loading={loading} />;
    }
    return (
      <>
        <section className="py-20 px-[40px] md:px-[120px]">
          <SectionTitle
            title="Start exploring."
            spanTitle="Good things are waiting for you"
          />
          <div className="flex items-center justify-center ">
            <Slider slidesPerView={6} spaceBetween={20} slidesPerViewMobile={1}>
              {categories?.map((category) => (
                <CategoryCard category={category} key={category.id} />
              ))}
            </Slider>
          </div>
        </section>
      </>
    );
}