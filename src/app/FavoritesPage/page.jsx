"use client";

import useWishlist from "@/Hooks/useWishlist";
import ProductCard from "../Home/Elements/ProductsSection/ProductCard";
import Loader from "@/components/Loader/Loader";

export default function FavoritesPage() {
  const { wishlist: products, loading, error } = useWishlist();

  if (loading) return <Loader/>;
  if (error) return <p>Error loading wishlist: {error}</p>;

  if (products.length === 0) return <p>No favorite products yet.</p>;

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-[#111827]">My Favorites</h1>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
    </section>
  );
}
