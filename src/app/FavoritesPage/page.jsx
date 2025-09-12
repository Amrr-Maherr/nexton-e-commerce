"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Home/Elements/ProductsSection/ProductCard";
import Loader from "@/components/Loader/Loader";
import { FetchFavorites } from "@/Redux/FetchFavorites";

export default function FavoritesPage() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.getFav);

  useEffect(() => {
    dispatch(FetchFavorites());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <p>Error loading wishlist: {error}</p>;
  // if (!data || data.length === 0) return <p>No favorite products yet.</p>;

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-[#111827]">My Favorites</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}
