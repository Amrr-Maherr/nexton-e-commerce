import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const FetchCart = createAsyncThunk("get/cart", async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        headers: { token: localStorage.getItem("token") },
      }
    );
    return response.data;
  } catch (error) {
    return error.response?.data || error.message;
  }
});

const GetCartSlice = createSlice({
  name: "GetCart",
  initialState: {
    data: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(FetchCart.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });

    builder.addCase(FetchCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export default GetCartSlice.reducer;
