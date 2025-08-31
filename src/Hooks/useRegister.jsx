import axios from "axios";
import { useState } from "react";

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
      setSuccessMessage(Response);
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    } finally {
      setLoading(false);
    }
  };

  return { SuccessMessage, ErrorMessage, Loading, Register };
}
