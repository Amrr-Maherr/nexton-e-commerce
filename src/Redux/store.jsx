import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "../Redux/ProductsSlice"
export const store = configureStore({
  reducer: {
    Products:ProductsSlice,
  },
});
