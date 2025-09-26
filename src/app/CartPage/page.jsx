"use client";

import { useDispatch, useSelector } from "react-redux";
import CartProducts from "./Elements/CartProducts";
import CartSidebar from "./Elements/CartSidebar";
import { useEffect, useState } from "react";
import { FetchCart } from "@/Redux/ShowCartSlice";
import Loader from "@/components/Loader/Loader";
import { ClearCart } from "@/Redux/ClearCartSlice";

export default function CartPage() {
  const cartState = useSelector((state) => state.getCart);
  const [dis,setDis] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchCart());
  }, [dispatch]);

  const products = cartState.data?.data?.products || [];
  const totalPrice = cartState.data?.data?.totalCartPrice || 0;
  const loading = cartState.loading;

  if (loading) {
    return <Loader />;
  }
  const handleClearCart = () => {
    dispatch(ClearCart()).then(() => {
      dispatch(FetchCart())
    });
  };

  return (
    <section className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Cart Sidebar */}
      <CartSidebar totalPrice={totalPrice} />

      <div className="md:col-span-2 space-y-4">
        {/* Clear Cart Button */}
        <div className="flex justify-end mb-4">
          <button
            disabled={products.length === 0}
            type="button"
            onClick={handleClearCart}
            className={`px-4 py-2 text-white rounded hover:bg-red-600 ${
              products.length === 0
                ? "cursor-not-allowed bg-red-200 hover:!bg-red-200"
                : "cursor-pointer bg-red-500"
            }`}
          >
            Clear Cart
          </button>
        </div>

        {/* Cart Products */}
        <CartProducts products={products} />
      </div>
    </section>
  );
}
