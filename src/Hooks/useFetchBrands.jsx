"use client";
import { useEffect, useState } from "react";

export default function useFetchBrands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/brands"
        );
        const data = await res.json();
        setBrands(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  return { brands, loading, error };
}
