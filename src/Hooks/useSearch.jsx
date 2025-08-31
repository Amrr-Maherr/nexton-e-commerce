import { useEffect, useState } from "react";
import useFetchProducts from "./useFetchProducts";

export default function useSearch(query) {
  const { data = [], loading: fetchLoading, error } = useFetchProducts();
  const [searchResponse, setSearchResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setSearchResponse(data);
      return;
    }
    setLoading(true);
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    // Simulate delay
    setTimeout(() => {
      setSearchResponse(filtered);
      setLoading(false);
    }, 300);
  }, [query, data]);

  return { searchResponse, loading };
}
