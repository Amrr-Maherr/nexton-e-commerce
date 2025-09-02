"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchBrands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://ecommerce.routemisr.com/api/v1/brands"
        );
        setBrands(res.data.data || []);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  return { brands, loading, error };
}
