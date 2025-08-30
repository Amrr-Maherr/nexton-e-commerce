import BrandInfo from "@/components/BrandInfo/brand-info";
import HeroSection from "./Elements/HeroSection";
import Category from "./Elements/Category/CategorySection";
export default function page() {
  return (
    <>
      <HeroSection />
      <BrandInfo />
      <Category/>
    </>
  );
}
