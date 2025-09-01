"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchProducts () {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://ecommerce.routemisr.com/api/v1/products"
        );
        setData(response.data.data);
      } catch (err) {
        setError(
          err.response?.data?.message || err.message || "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

