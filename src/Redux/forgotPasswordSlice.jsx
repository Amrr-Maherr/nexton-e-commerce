import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const FORGOT_PASSWORD_ENDPOINT =
  "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords";

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email) => {
    try {
      const response = await axios.post(FORGOT_PASSWORD_ENDPOINT, { email });
      return response.data;
    } catch (error) {
      return error.response?.data || error.message;
    }
  }
);

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState: {
    loading: true,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message || "Password reset email sent";
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Failed to send reset password email";
      });
  },
});

export default forgotPasswordSlice.reducer;
