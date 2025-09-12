"use client";
import { Star, ShoppingBag, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MoonLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../../../Redux/CartSlice";
import { addProductToWishlist } from "../../../../Redux/WishlistSlice";
import { useState } from "react";
import { toast } from "sonner";
import { FetchCart } from "@/Redux/ShowCartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [wishlistLoading, setWishlistLoading] = useState(false);

  const cart = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleAddToCart = async () => {
    try {
      setLoading(true);
      const result = await dispatch(addProductToCart(product.id));
      if (result.payload?.message) {
        toast.success(result.payload.message);
      } else {
        toast.success("Product added to cart!");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
      dispatch(FetchCart());
    }
  };

  const handleAddToWishlist = async () => {
    try {
      setWishlistLoading(true);
      const result = await dispatch(addProductToWishlist(product.id));
      if (result.payload?.message) {
        toast.success(result.payload.message);
      } else {
        toast.success("Product added to wishlist!");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setWishlistLoading(false);
    }
  };

  return (
    <div className="rounded-lg overflow-hidden w-full mx-auto bg-white">
      <div className="relative w-full h-[200px] md:h-[409px]">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.imageCover}
            alt={product.title}
            fill
            className="object-cover rounded-lg"
          />
        </Link>

        {/* Add to Cart Button */}
        <div
          onClick={handleAddToCart}
          className="absolute cursor-pointer right-[15px] top-[15px] w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center"
        >
          {loading ? (
            <MoonLoader color="#111827" size={20} />
          ) : (
            <ShoppingBag className="w-5 h-5" />
          )}
        </div>

        {/* Add to Wishlist Button */}
        <div
          onClick={handleAddToWishlist}
          className="absolute cursor-pointer left-[15px] top-[15px] w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center"
        >
          {wishlistLoading ? (
            <MoonLoader color="#EF4444" size={20} />
          ) : (
            <Heart className="w-5 h-5 text-red-500" />
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex items-center justify-between px-[16px] mt-[20px]">
        <div className="text-start font-semibold truncate-1-line text-[#111827] text-[16px]">
          {product.title.length > 10
            ? `${product.title.slice(0, 10)}...`
            : product.title}
        </div>
        <div className="text-[16px] text-[#111827]">${product.price}</div>
      </div>

      <div className="px-[16px] gap-[15px] flex items-start justify-center flex-col">
        <div className="text-[#4B5563] text-[14px] font-normal">
          {product.category.name}
        </div>
        <div className="text-center text-[14px] font-semibold text-[#4B5563] gap-[4px] flex-row-reverse flex items-center justify-center">
          ({product.ratingsAverage})
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
        </div>
      </div>
    </div>
  );
}
