import BrandInfo from "@/components/BrandInfo/brand-info";
import HeroSection from "./Elements/HeroSection";
import Category from "./Elements/Category/CategorySection";
import ProductsSection from "./Elements/ProductsSection/ProductsSection";
import Ads from "./Elements/Ads/Ads";
import BrandsSection from "./Elements/BrandsSection/BrandsSection";
export default function page() {
  return (
    <>
      <HeroSection />
      <BrandsSection/>
      <BrandInfo />
      <Category />
      <ProductsSection
        title="Recommendations."
        spanTitle="Best matching products for you"
      />
      <Ads
        startingPrice="$39.99"
        heading="New Summer Collection"
        buttonText="Shop Now"
        imageSrc="/images/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-green-sweater-jeans-fashion-male-posing-studio-near-white-wall.jpg"
      />
      <ProductsSection
        title="Best Sellers."
        spanTitle="Best selling of the month"
      />
      <Ads
        startingPrice="$29.99"
        heading="Exclusive Winter Collection"
        buttonText="Discover Now"
        imageSrc="/images/model-demonstrating-earrings-ring.jpg"
      />
    </>
  );
}
