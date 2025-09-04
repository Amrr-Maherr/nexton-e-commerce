"use client";
import React from "react";
import useFetchProductDetails from "@/Hooks/useFetchProductDetails";
import Loader from "@/components/Loader/Loader";
import ProductsSection from "@/app/Home/Elements/ProductsSection/ProductsSection";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import AddToCart from "../ProductActions/AddToCart";
import ProductQuantity from "../ProductActions/ProductQuantity";
import BrandsSection from "@/app/Home/Elements/BrandsSection/BrandsSection";
import FrequentlyAskedQuestions from "@/components/FrequentlyQskedQuestions/FrequentlyQskedQuestions";

export default function ProductDetails({ params }) {
  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;
  const { product, loading, error } = useFetchProductDetails(id);

  if (loading) return (
    <Loader/>
  );
  return (
    <>
      <div className="py-10 md:py-[40px] container grid grid-cols-1 md:grid-cols-7 mx-auto">
        <div className="flex items-start justify-evenly flex-wrap-reverse md:flex-nowrap col-span-7 md:col-span-4 mb-4">
          <div className="flex items-center mt-[20px] md:mt-0 flex-row flex-wrap justify-center gap-[16px]">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.title} ${index + 1}`}
                className="w-[70px] md:w-[200px] h-[157.5px] object-cover rounded-lg flex-shrink-0"
              />
            ))}
          </div>

          {product.imageCover && (
            <img
              src={product.imageCover}
              alt={`${product.title} cover`}
              className="w-[640px] h-[300px] md:h-[678px] object-cover rounded-lg"
            />
          )}
        </div>
        <div className="col-span-7 md:col-span-3 rounded-[16px] border border-solid border-[#E5E7EB] p-[33px] flex flex-col gap-6">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

          <div className="flex flex-wrap gap-4 text-gray-600">
            <span>
              Brand:{" "}
              <span className="font-semibold">{product.brand?.name}</span>
            </span>
            <span>
              Category:{" "}
              <span className="font-semibold">{product.category?.name}</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
            <p className="text-[24px] font-semibold text-[#111827] flex items-center gap-2">
              ${product.price}
              {product.priceAfterDiscount &&
                product.priceAfterDiscount < product.price && (
                  <span className="text-[#4B5563] text-[14px] font-normal line-through">
                    ${product.priceAfterDiscount}
                  </span>
                )}
            </p>
            <p className="text-[#4B5563] text-[16px] font-semibold">
              Ratings: {product.ratingsAverage || 0} ⭐ (
              {product.ratingsQuantity || 0} reviews)
            </p>
          </div>

          <p className="text-gray-700 whitespace-pre-line">
            {product.description}
          </p>

          <div className="flex gap-4 text-gray-500">
            <span>Quantity: {product.quantity || 0}</span>
            <span>Sold: {product.sold || 0}</span>
          </div>

          {product.subcategory && product.subcategory.length > 0 && (
            <div>
              <h2 className="font-semibold mb-2">Subcategories:</h2>
              <ul className="list-disc list-inside">
                {product.subcategory.map((sub) => (
                  <li key={sub._id}>{sub.name}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex items-center justify-between flex-row-reverse">
            <AddToCart />
            <ProductQuantity />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[16px] font-normal text-[#4B5563]">
              Tax estimate
            </p>
            <p className="text-[16px] font-normal text-[#4B5563]">$0</p>
          </div>
          <div className="flex py-4 items-center justify-between border-solid border-t border-[#E5E7EB]">
            <p className="text-[16px] font-semibold text-[#111827]">Total</p>
            <p className="text-[16px] font-semibold text-[#111827]">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
      <BrandsSection />
      <ProductsSection />
      <FrequentlyAskedQuestions />
    </>
  );
}
