import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const WISHLIST_ENDPOINT = "https://ecommerce.routemisr.com/api/v1/wishlist";

export const RemoveFromWishlist = createAsyncThunk(
  "wishlist/removeFromWishlist",
  async (productId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`${WISHLIST_ENDPOINT}/${productId}`, {
        headers: { token },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const removeWishlistSlice = createSlice({
  name: "removeWishlist",
  initialState: {
    items: [],
    loading: false,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RemoveFromWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(RemoveFromWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.message =
          action.payload.message || "Product removed from wishlist";
      })
      .addCase(RemoveFromWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "Failed to remove product from wishlist";
      });
  },
});

export default removeWishlistSlice.reducer;
