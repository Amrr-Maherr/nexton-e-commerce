import axios from "axios";
import { useState } from "react";

export default function useLogin() {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (loginInfo) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signin`,
        loginInfo
      );

      setSuccessMessage(response.data);
      localStorage.setItem("userToken", response.data.token);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return { successMessage, errorMessage, loading, login };
}
