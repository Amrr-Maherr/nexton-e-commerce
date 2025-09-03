import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
export default function useLogin() {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
const router = useRouter();
  const login = async (loginInfo) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signin`,
        loginInfo
      );
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      setSuccessMessage(response.data.message);
    } catch (error) {
      setErrorMessage(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage || "Login successful 🎉");
      router.push("/");
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage || "Something went wrong ❌");
    }
  }, [errorMessage]);

  return { successMessage, errorMessage, loading, login };
}
