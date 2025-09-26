"use client";
import React, { useEffect } from "react";
import Loader from "@/components/Loader/Loader";
import ProductsSection from "@/app/Home/Elements/ProductsSection/ProductsSection";
import BrandsSection from "@/app/Home/Elements/BrandsSection/BrandsSection";
import FrequentlyAskedQuestions from "@/components/FrequentlyQskedQuestions/FrequentlyQskedQuestions";
import { useDispatch, useSelector } from "react-redux";
import { FetchProductDetails } from "../../../Redux/ProductDetailsSlice";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import AddToCart from "../ProductActions/AddToCart";
import ProductQuantity from "../ProductActions/ProductQuantity";

export default function ProductDetails({ params }) {
   const unwrappedParams = React.use(params);
   const { id } = unwrappedParams;
  const dispatch = useDispatch();
  const {
    data: product,
    loading,
    error,
  } = useSelector((state) => state.productDetails);

  useEffect(() => {
    if (id) {
      dispatch(FetchProductDetails(id));
    }
  }, [dispatch, id]);
  
console.log(product, "data");

  if (loading) return <Loader />;

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      {product && product.title && (
        <div className="py-10 md:py-[40px] container grid grid-cols-1 gap-10 md:grid-cols-7 mx-auto">
          <div className="flex items-start justify-evenly flex-wrap-reverse md:flex-nowrap col-span-7 md:col-span-4 mb-4">
            <div className="flex items-center mt-[20px] md:mt-0 flex-row flex-wrap justify-center gap-[16px]">
              {product.images?.map((img, index) => (
                <Zoom key={index}>
                  <img
                    key={index}
                    src={img}
                    alt={`${product.title} ${index + 1}`}
                    className="w-[70px] md:w-auto h-[157.5px] object-cover rounded-lg flex-shrink-0"
                  />
                </Zoom>
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

          <div className="col-span-7 md:col-span-3 rounded-[16px] border border-solid border-[#E5E7EB] p-[23px] h-fit flex flex-col gap-6">
            <h1 className="text-xl md:text-3xl font-bold mb-2">
              {product.title}
            </h1>

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
            <div className="flex items-center justify-between w-full flex-row-reverse">
              <AddToCart product={product} />
              <ProductQuantity product={product}  />
            </div>
          </div>
        </div>
      )}
      <BrandsSection />
      <ProductsSection />
      <FrequentlyAskedQuestions />
    </>
  );
}
