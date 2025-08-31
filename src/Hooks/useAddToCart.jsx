"use client";
import { useState } from "react";
import axios from "axios";

export default function useAddToCart() {
    const [loading, setLoading] = useState(false);
    
  const addToCart = async (productId) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { productId },
        {
          headers: { token: localStorage.getItem("userToken") },
        }
      );
      return data;
    } catch (error) {
      console.error("Add to cart failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { addToCart, loading };
}
