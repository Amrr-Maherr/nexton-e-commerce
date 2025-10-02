import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const RESET_PASSWORD_ENDPOINT =
  "https://ecommerce.routemisr.com/api/v1/auth/resetPassword";

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ email, newPassword }, { rejectWithValue }) => {
    try {
      const response = await axios.put(RESET_PASSWORD_ENDPOINT, {
        email,
        newPassword,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState: {
    loading: false,
    error: null,
    message: null,
    token: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
        state.token = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message =
          action.payload.message || "Password has been reset successfully";
        state.token = action.payload.token || null; // بعض APIs بيرجعوا توكن بعد الريسيت
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to reset password";
      });
  },
});

export default resetPasswordSlice.reducer;
