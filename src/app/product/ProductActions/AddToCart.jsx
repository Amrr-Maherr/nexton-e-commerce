import { Button } from "@/components/ui/button";
import { Star, ShoppingBag } from "lucide-react";
export default function AddToCart() {
    return (
      <>
        <Button className="py-[14px] cursor-pointer px-[32px] rounded-full bg-[#111827] text-[16px] flex items-center justify-center gap-[8px]">
          Add to cart
          <ShoppingBag className="w-5 h-5" />
        </Button>
      </>
    );
}