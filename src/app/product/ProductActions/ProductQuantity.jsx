import { updateQuantity } from "@/Redux/CartQuantitySlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

export default function ProductQuantity({ product }) {
  const [QuantityValue, setQuantityValue] = useState(1);
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector((state) => state.cartQuantity);

  const HandelAddQuantity = () => {
    const newValue = QuantityValue + 1;
    setQuantityValue(newValue);
    dispatch(updateQuantity({ count: newValue, productId: product.id }));
    toast.success(`Product quantity increased to ${newValue}`);
  };

  const HandelDelQuantity = () => {
    if (QuantityValue > 0) {
      const newValue = QuantityValue - 1;
      setQuantityValue(newValue);
      dispatch(updateQuantity({ count: newValue, productId: product.id }));
      toast.error(`Product quantity decreased to ${newValue}`);
    } else {
      toast.error("Quantity can't be less than 0");
    }
  };

  console.log(cart, "cart");
  console.log(loading, "loading");
  console.log(error, "error");

  return (
    <div className="inline-flex items-center gap-1 rounded-2xl border border-gray-200 bg-white p-1 shadow-sm">
      <button
        disabled={loading}
        onClick={HandelDelQuantity}
        type="button"
        className="h-8 w-8 md:h-9 md:w-9 cursor-pointer rounded-xl border border-gray-200 text-base md:text-lg leading-none"
      >
        –
      </button>

      <input
        type="number"
        min="0"
        onChange={(e) => setQuantityValue(Math.max(0, Number(e.target.value)))}
        value={QuantityValue}
        className="h-8 w-10 md:h-9 md:w-14 rounded-xl border border-transparent text-center text-sm md:text-base outline-none"
      />

      <button
        disabled={loading}
        onClick={HandelAddQuantity}
        type="button"
        className="h-8 w-8 md:h-9 md:w-9 cursor-pointer rounded-xl border border-gray-200 text-base md:text-lg leading-none"
      >
        +
      </button>
    </div>
  );
}
