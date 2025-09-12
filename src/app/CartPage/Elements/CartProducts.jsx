"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { updateQuantity } from "@/Redux/CartQuantitySlice";
import { FetchCart } from "@/Redux/ShowCartSlice";

export default function CartProducts({ products }) {
  const dispatch = useDispatch();

  const handleIncrement = (productId, currentCount) => {
    dispatch(updateQuantity({ productId, count: currentCount + 1 })).then(() =>
      dispatch(FetchCart())
    );
  };

  const handleDecrement = (productId, currentCount) => {
    if (currentCount <= 1) return;
    dispatch(updateQuantity({ productId, count: currentCount - 1 })).then(() =>
      dispatch(FetchCart())
    );
  };

  return (
    <div className="md:col-span-2 space-y-4 pr-3">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {products?.length > 0 ? (
        <>
          {products.map((product) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white"
            >
              <Link href={`/product/${product.product.id}`}>
                <Image
                  src={product.product.imageCover}
                  alt={product.product.title}
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
              </Link>
              <div className="flex-1">
                <h3 className="font-medium">{product.product.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    type="button"
                    className="px-2 py-1 border rounded bg-gray-100 hover:bg-gray-200 cursor-pointer"
                    onClick={() =>
                      handleDecrement(product.product.id, product.count)
                    }
                  >
                    -
                  </button>
                  <span className="px-2">{product.count}</span>
                  <button
                    type="button"
                    className="px-2 py-1 border rounded bg-gray-100 hover:bg-gray-200 cursor-pointer"
                    onClick={() =>
                      handleIncrement(product.product.id, product.count)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="font-semibold">
                {product.price * product.count} EGP
              </p>
            </motion.div>
          ))}
        </>
      ) : (
        <p>No products in your cart.</p>
      )}
    </div>
  );
}
