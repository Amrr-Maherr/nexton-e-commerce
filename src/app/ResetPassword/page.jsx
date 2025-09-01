"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Title from "../../components/authentication/Elements/Title";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      setMessage("Passwords do not match!");
      return;
    }
    setMessage("Password has been reset successfully!");
    // هنا تقدر تربطه بالـ API لتحديث كلمة السر في السيرفر
  };

  return (
    <section className="pt-[40px] pb-[72px] max-w-[440px] mx-auto gap-[24px] flex flex-col items-center justify-center px-[24px] md:px-0">
      <Title TitleText="Reset Password" />

      <div className="flex flex-col w-full gap-[8px]">
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

      <div className="flex flex-col w-full gap-[8px] mt-2">
        <Label
          htmlFor="rePassword"
          className="text-[14px] font-semibold text-[#111827]"
        >
          Confirm Password
        </Label>
        <Input
          id="rePassword"
          type="password"
          placeholder="Confirm new password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          className="w-full rounded-[12px] border border-[#E5E7EB] h-[52px] px-[16px] text-[14px] placeholder:text-gray-400 focus:outline-0"
        />
      </div>

      <Button
        className="w-full shadow-2xl bg-[#111827] rounded-full p-[14px] text-white text-[14px] font-medium cursor-pointer mt-4"
        onClick={handleReset}
      >
        Reset Password
      </Button>

      {message && (
        <p
          className={`mt-4 ${
            message.includes("successfully") ? "text-green-600" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </section>
  );
}
