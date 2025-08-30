import BrandInfo from "@/components/BrandInfo/brand-info";
import HeroSection from "./Elements/HeroSection";
import Category from "./Elements/Category/CategorySection";
import ProductsSection from "./Elements/ProductsSection/ProductsSection";
export default function page() {
  return (
    <>
      <HeroSection />
      <BrandInfo />
      <Category />
      <ProductsSection
        title="Recommendations."
        spanTitle="Best matching products for you"
      />
      <ProductsSection
        title="Best Sellers."
        spanTitle="Best selling of the month"
      />
    </>
  );
}
