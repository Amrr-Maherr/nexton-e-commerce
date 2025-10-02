"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Title from "../../components/authentication/Elements/Title";
import { verifyResetCode } from "@/Redux/verifyResetCodeSlice";

export default function VerifyResetCode() {
  const [resetCode, setResetCode] = useState("");
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (state) => state.verifyResetCode
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyResetCode(resetCode));
  };

  useEffect(() => {
    if (data?.message) {
      console.log("✅ Success:", data.message);
    }
  }, [data]);

  return (
    <section className="pt-[40px] pb-[72px] max-w-[440px] mx-auto gap-[24px] flex flex-col items-center justify-center px-[24px] md:px-0">
      <Title TitleText="Verify Reset Code" />

      <div className="flex flex-col w-full gap-[8px]">
        <Label
          htmlFor="resetCode"
          className="text-[14px] font-semibold text-[#111827]"
        >
          Reset Code
        </Label>
        <Input
          id="resetCode"
          type="text"
          placeholder="Enter your reset code"
          value={resetCode}
          onChange={(e) => setResetCode(e.target.value)}
          className="w-full rounded-[12px] border border-[#E5E7EB] h-[52px] px-[16px] text-[14px] placeholder:text-gray-400 focus:outline-0"
        />
      </div>

      <Button
        className="w-full shadow-2xl bg-[#111827] rounded-full p-[14px] text-white text-[14px] font-medium cursor-pointer mt-4"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Verifying..." : "Verify Code"}
      </Button>

      {data && (
        <p className="mt-4 text-green-600">
          {data.message || "Code verified successfully!"}
        </p>
      )}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </section>
  );
}
