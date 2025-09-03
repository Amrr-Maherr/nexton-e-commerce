"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function useAddToCart() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const addToCart = async (productId) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { productId },
        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      setResponse(data.message);
    } catch (error) {
      console.error("Add to cart failed:", error);
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (response) {
      toast.success(response || "Added to cart 🎉");
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return { addToCart, loading };
}
