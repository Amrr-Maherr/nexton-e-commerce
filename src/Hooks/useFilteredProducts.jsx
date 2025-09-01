"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const useFilteredProducts = (filters = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params = Object.fromEntries(
          Object.entries(filters).filter(([_, v]) => v)
        );

        const { data } = await axios.get(
          "https://ecommerce.routemisr.com/api/v1/products",
          { params }
        );

        setProducts(data.data);
        console.log("Filtered Products:", data.data);
      } catch (err) {
        setError(
          err.response?.data?.message || err.message || "Something went wrong"
        );
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters]);

  return { products, loading, error };
};

export default useFilteredProducts;
