import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const VERIFY_RESET_CODE_ENDPOINT =
  "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode";

export const verifyResetCode = createAsyncThunk(
  "auth/verifyResetCode",
  async (resetCode) => {
    try {
      const response = await axios.post(VERIFY_RESET_CODE_ENDPOINT, {
        resetCode,
      });
      return response.data;
    } catch (error) {
      return error.response?.data || error.message;
    }
  }
);

const verifyResetCodeSlice = createSlice({
  name: "verifyResetCode",
  initialState: {
    loading: false,
    error: null,
    message: null,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyResetCode.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
        state.status = null;
      })
      .addCase(verifyResetCode.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.status;
        state.message =
          action.payload.message || "Reset code verified successfully";
      })
      .addCase(verifyResetCode.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Invalid or expired reset code";
      });
  },
});

export default verifyResetCodeSlice.reducer;
