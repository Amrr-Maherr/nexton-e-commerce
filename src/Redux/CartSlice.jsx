import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addProductToCart = createAsyncThunk(
  "cart/addProduct",
  async (productId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId },
        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      return response.data;
    } catch (error) {
      return error.response?.data || error.message;
    }
  }
);

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProductToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(addProductToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default CartSlice.reducer;
