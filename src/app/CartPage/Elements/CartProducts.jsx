"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import useCart from "@/hooks/useCart";

export default function CartProducts() {
  const { cart, loading, error } = useCart();

  return (
    <div className="md:col-span-2 space-y-4 pr-3">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {cart?.data?.products?.length > 0 ? (
        cart.data.products.map((product) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white"
          >
            <Image
              src={product.product.imageCover}
              alt={product.product.title}
              width={80}
              height={80}
              className="object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-medium">{product.product.title}</h3>
              <p className="text-gray-500">Quantity: {product.count}</p>
            </div>
            <p className="font-semibold">{product.price * product.count} EGP</p>
          </motion.div>
        ))
      ) : (
        <p>No products in your cart.</p>
      )}
    </div>
  );
}
