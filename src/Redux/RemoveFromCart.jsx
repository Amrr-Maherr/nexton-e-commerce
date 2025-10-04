import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CART_ENDPOINT = "https://ecommerce.routemisr.com/api/v1/cart";

export const RemoveFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (productId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`${CART_ENDPOINT}/${productId}`, {
        headers: { token },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: true,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RemoveFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(RemoveFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.message =
          action.payload.message || "Product removed successfully";
      })
      .addCase(RemoveFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to remove product";
      });
  },
});

export default cartSlice.reducer;
