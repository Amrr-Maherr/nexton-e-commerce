"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchProductDetails(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(
          `https://ecommerce.routemisr.com/api/v1/products/${id}`
        );
        setProduct(res.data.data || null);
      } catch (err) {
        setError(
          err.response?.data?.message || err.message || "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
}
