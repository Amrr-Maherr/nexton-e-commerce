import { Button } from "@/components/ui/button";
import { addProductToCart } from "@/Redux/CartSlice";
import { FetchCart } from "@/Redux/ShowCartSlice";
import { Star, ShoppingBag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
export default function AddToCart({ product }) {
  const dispatch = useDispatch()
  const { error, loading, items } = useSelector((state) => state.cart);
  const isLogIn = localStorage.getItem("token")
  const handelAddToCart = async (product) => {
    try {
      if (product) {
        await dispatch(addProductToCart(product.id));
        await dispatch(FetchCart());
        toast.success(items.message);
      }
    } catch (error) {
        toast.success(items.message);
    }
  };
  console.log(items.message, "message");
    return (
      <>
        <Button onClick={()=>{handelAddToCart(product)}} disabled={loading || !isLogIn} className="py-[14px] cursor-pointer px-[32px] rounded-full bg-[#111827] text-[16px] flex items-center justify-center gap-[8px]">
          Add to cart
          <ShoppingBag className="w-5 h-5" />
        </Button>
      </>
    );
}