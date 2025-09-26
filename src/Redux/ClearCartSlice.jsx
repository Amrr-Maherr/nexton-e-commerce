import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CART_ENDPOINT = "https://ecommerce.routemisr.com/api/v1/cart";

// Async thunk to clear the cart
export const ClearCart = createAsyncThunk(
  "cart/clearCart",
  async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(CART_ENDPOINT, {
        headers: { token },
      });
      return response.data;
    } catch (error) {
      return error.response?.data || error.message;
    }
  }
);

// Cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // clear cart
      .addCase(ClearCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ClearCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = []; // cart is now empty
        state.message = action.payload.message || "Cart cleared successfully";
      })
      .addCase(ClearCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to clear cart";
      });
  },
});

export default cartSlice.reducer;
