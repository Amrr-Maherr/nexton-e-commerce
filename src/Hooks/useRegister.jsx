import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "sonner";
export default function useRegister() {
  const [SuccessMessage, setSuccessMessage] = useState(null);
  const [ErrorMessage, setErrorMessage] = useState(null);
  const [Loading, setLoading] = useState(false);

  const Register = async (RegisterInfo) => {
    try {
      setLoading(true);
      const Response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        RegisterInfo
      );
      if (Response.data.token) {
        localStorage.setItem("token", Response.data.token);
      }
      setSuccessMessage(Response.data);
    } catch (error) {
      setErrorMessage(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (SuccessMessage) {
      toast.success(SuccessMessage.message || "Registered successfully 🎉");
    }
  }, [SuccessMessage]);
  useEffect(() => {
    if (ErrorMessage) {
      const errMsg =
        ErrorMessage?.errors?.msg ||
        ErrorMessage?.message ||
        "Something went wrong ❌";
      toast.error(errMsg);
    }
  }, [ErrorMessage]);

  return { SuccessMessage, ErrorMessage, Loading, Register };
}
