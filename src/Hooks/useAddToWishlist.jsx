"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function useAddToWishlist() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const addToWishlist = async (productId) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        { productId },
        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      setResponse(data.message);
    } catch (error) {
      console.error("Add to wishlist failed:", error);
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (response) {
      toast.success(response || "Added to wishlist ❤️");
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return { addToWishlist, loading };
}
