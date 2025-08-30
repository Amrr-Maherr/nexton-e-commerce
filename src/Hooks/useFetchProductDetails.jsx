"use client";
import { useState, useEffect } from "react";

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
        const res = await fetch(
          `https://ecommerce.routemisr.com/api/v1/products/${id}`
        );
        const result = await res.json();
        setProduct(result.data || null);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
}
