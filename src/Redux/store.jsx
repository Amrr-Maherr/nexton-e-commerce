import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "../Redux/ProductsSlice"
import CategorySlice from "../Redux/CategorySlice";
import BrandsSlice from "../Redux/BrandsSlice";
import ProductDetailsSlice from "../Redux/ProductDetailsSlice";
export const store = configureStore({
  reducer: {
    products: ProductsSlice,
    category: CategorySlice,
    brands: BrandsSlice,
    productDetails:ProductDetailsSlice
  },
});
