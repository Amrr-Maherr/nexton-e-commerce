import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CART_ENDPOINT = "https://ecommerce.routemisr.com/api/v1/cart";

export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ productId, count }) => {
    const token = localStorage.getItem("token");
    const response = await axios.put(
      `${CART_ENDPOINT}/${productId}`,
      { count },
      { headers: { token } }
    );
    return response.data;
  }
);

const CartQuantitySlice = createSlice({
  name: "cartQuantity",
  initialState: {
    loading: true,
    error: null,
    cart: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateQuantity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(updateQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default CartQuantitySlice.reducer;
