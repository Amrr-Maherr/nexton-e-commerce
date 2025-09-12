import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "../Redux/ProductsSlice"
import CategorySlice from "../Redux/CategorySlice";
export const store = configureStore({
  reducer: {
    products: ProductsSlice,
    category:CategorySlice
  },
});
