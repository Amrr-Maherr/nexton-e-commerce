import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchBrands = createAsyncThunk("brands/fetch", async () => {
  try {
    const response = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/brands"
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

const BrandsSlice = createSlice({
  name: "brands",
  initialState: {
    data: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchBrands.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(FetchBrands.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(FetchBrands.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default BrandsSlice.reducer;
