"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function useLogout() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const logout = () => {
    try {
      setLoading(true);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("Logged out successfully ✅");
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Failed to logout ❌");
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
}
