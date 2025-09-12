"use client";

import { useDispatch, useSelector } from "react-redux";
import CartProducts from "./Elements/CartProducts";
import CartSidebar from "./Elements/CartSidebar";
import { useEffect } from "react";
import { FetchCart } from "@/Redux/ShowCartSlice";
import Loader from "@/components/Loader/Loader";

export default function CartPage() {
  const cartState = useSelector((state) => state.getCart);
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

  return (
    <section className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Cart Sidebar */}
      <CartSidebar totalPrice={totalPrice} />

      <div className="md:col-span-2 space-y-4">
        {/* Clear Cart Button */}
        <div className="flex justify-end mb-4">
          <button
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
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
