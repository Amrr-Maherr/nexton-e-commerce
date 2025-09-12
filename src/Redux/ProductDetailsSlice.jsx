import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchProductDetails = createAsyncThunk(
  "ProductDetails/fetch",
  async (id) => {
    try {
      const response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`
      );
      return response.data.data;
    } catch (error) {
      return error.response?.data || error.message;
    }
  }
);

const ProductDetailsSlice = createSlice({
  name: "ProductDetails",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(FetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default ProductDetailsSlice.reducer;
