import { Truck, Undo2, Globe, RotateCcw } from "lucide-react";
import BrandInfoCard from "./Elements/BrandInfoCard";

export default function BrandInfo() {
  const Data = [
    {
      title: "Free shipping",
      Description: "On orders over $50.00",
      icon: <Truck className="w-6 h-6 md:w-8 md:h-8 text-black" />,
    },
    {
      title: "Very easy to return",
      Description: "Just phone number",
      icon: <Undo2 className="w-6 h-6 md:w-8 md:h-8 text-black" />,
    },
    {
      title: "Worldwide delivery",
      Description: "Fast delivery worldwide",
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-black" />,
    },
    {
      title: "Refunds policy",
      Description: "60 days return for any reason",
      icon: <RotateCcw className="w-6 h-6 md:w-8 md:h-8 text-black" />,
    },
  ];

  return (
    <section className="flex items-center justify-center">
      <div className="px-6 md:px-[120px] py-8 md:py-[52px] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-[1280px]">
        {Data?.map((item, index) => (
          <BrandInfoCard item={item} key={index} index={index}/>
        ))}
      </div>
    </section>
  );
}
