import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchCategory = createAsyncThunk(
  "categories/fetchCategory",
  async () => {
    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/categories"
      );
      return response.data.data;
    } catch (error) {
      return error;
    }
  }
);

const CategorySlice = createSlice({
  name: "categories",
  initialState: {
    data: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default CategorySlice.reducer;
