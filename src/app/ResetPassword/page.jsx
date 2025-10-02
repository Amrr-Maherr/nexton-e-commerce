"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Title from "../../components/authentication/Elements/Title";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { resetPassword } from "@/Redux/resetPasswordSlice";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error, data } = useSelector((state) => state.resetPassword);

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ email, newPassword: password }));
  };

  useEffect(() => {
    if (data && data.token) {
      console.log("✅ Password reset successful:", data);
      router.push("/");
    }
  }, [data, router]);

  return (
    <section className="pt-[40px] pb-[72px] max-w-[440px] mx-auto gap-[24px] flex flex-col items-center justify-center px-[24px] md:px-0">
      <Title TitleText="Reset Password" />

      <div className="flex flex-col w-full gap-[8px]">
        <Label
          htmlFor="email"
          className="text-[14px] font-semibold text-[#111827]"
        >
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-[12px] border border-[#E5E7EB] h-[52px] px-[16px] text-[14px] placeholder:text-gray-400 focus:outline-0"
        />
      </div>

      <div className="flex flex-col w-full gap-[8px] mt-2">
        <Label
          htmlFor="password"
          className="text-[14px] font-semibold text-[#111827]"
        >
          New Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-[12px] border border-[#E5E7EB] h-[52px] px-[16px] text-[14px] placeholder:text-gray-400 focus:outline-0"
        />
      </div>

      <Button
        className="w-full shadow-2xl bg-[#111827] rounded-full p-[14px] text-white text-[14px] font-medium cursor-pointer mt-4"
        onClick={handleReset}
        disabled={loading}
      >
        {loading ? "Resetting..." : "Reset Password"}
      </Button>

      {error && <p className="mt-4 text-red-500">{error}</p>}
    </section>
  );
}
