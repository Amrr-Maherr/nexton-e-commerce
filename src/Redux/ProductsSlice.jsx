// redux.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch products from API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts", // action type prefix
  async () => {
    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products"
      );
      return response.data.data;
    } catch (error) {
      return (
        error
      )
    }
  }
);

// Slice definition
const ProductsSlice = createSlice({
  name: "All_Products", // slice name
  initialState: {
    products: [], // list of products
    loading: false, // loading state while fetching
    error: null, // error message if request fails
  },
  reducers: {}, // no manual reducers (only using async thunk here)
  extraReducers: (builder) => {
    builder
      // When fetchProducts is pending (loading)
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // When fetchProducts succeeds
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      // When fetchProducts fails
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export reducer as default
export default ProductsSlice.reducer;
