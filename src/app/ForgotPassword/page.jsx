"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Title from "../../components/authentication/Elements/Title";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "@/Redux/forgotPasswordSlice";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const { loading, error, message } = useSelector(
    (state) => state.forgotPassword
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  return (
    <section className="pt-[40px] pb-[72px] max-w-[440px] mx-auto gap-[24px] flex flex-col items-center justify-center px-[24px] md:px-0">
      <Title TitleText="Forgot Password" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] w-full">
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

        <Button
          type="submit"
          disabled={loading}
          className="w-full shadow-2xl bg-[#111827] rounded-full p-[14px] text-white text-[14px] font-medium cursor-pointer mt-4 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Reset Code"}
        </Button>
      </form>

      {message && <p className="mt-4 text-green-600">{message}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </section>
  );
}
