"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CartProducts() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { headers: { token: localStorage.getItem("token") } }
      );
      setCart(data.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="md:col-span-2 space-y-4 pr-3">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {loading && <p>Loading...</p>}
      {cart?.products?.length > 0 ? (
        cart.products.map((product, index) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white"
          >
            <div className="relative w-20 h-20">
              <Image
                src={product.product.imageCover}
                alt={product.product.title}
                fill
                className="object-cover rounded"
              />
            </div>
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
