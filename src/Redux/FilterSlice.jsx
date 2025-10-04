import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch products with filters
export const FetchFilteredProducts = createAsyncThunk(
  "products/fetchFiltered",
  async (filters) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products",
        {
          params: filters,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      return error.response?.data || error.message;
    }
  }
);

// Slice
const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    data: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchFilteredProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchFilteredProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchFilteredProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default filtersSlice.reducer;
