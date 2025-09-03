"use client";

import CartProducts from "./Elements/CartProducts";
import CartSidebar from "./Elements/CartSidebar";



export default function CartPage() {
  return (
    <section className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      <CartProducts />
      <CartSidebar />
    </section>
  );
}
