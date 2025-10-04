import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchFavorites = createAsyncThunk(
  "favorites/getFavorites",
  async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
          headers: { token },
        }
      );
      return response.data;
    } catch (error) {
      return error.response?.data || error.message;
    }
  }
);

const FavoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    data: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(FetchFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default FavoritesSlice.reducer;
