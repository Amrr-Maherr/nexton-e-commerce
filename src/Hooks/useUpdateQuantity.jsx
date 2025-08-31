"use client";
import { useState } from "react";
import axios from "axios";

export default function useUpdateQuantity() {
  const [loading, setLoading] = useState(false);

  const updateQuantity = async (productId, count) => {
    setLoading(true);
    try {
      const { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { count }
      );
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateQuantity, loading };
}
