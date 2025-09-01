"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Title from "../../components/authentication/Elements/Title";

export default function EmailCodeSender() {
  const [email, setEmail] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  const handleSendCode = (e) => {
    e.preventDefault();
    // توليد كود عشوائي من 6 أرقام
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(code);
    setCodeSent(true);
    // Mock إرسال الإيميل
    console.log(`Verification code sent to ${email}: ${code}`);
    setEmail("");
  };

  return (
    <section className="pt-[40px] pb-[72px] max-w-[440px] mx-auto gap-[24px] flex items-center justify-center flex-col px-[24px] md:px-0">
      <Title TitleText="Send Verification Code" />

      <form className="w-full flex flex-col gap-4" onSubmit={handleSendCode}>
        <div className="w-full flex flex-col gap-1">
          <Label htmlFor="email">Email</Label>
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
          className="w-full shadow-2xl bg-[#111827] rounded-full p-[14px] text-white text-[14px] font-medium cursor-pointer"
        >
          Send Code
        </Button>
      </form>

      {codeSent && (
        <p className="text-green-600 mt-2">
          Verification code sent! Check console for the code: {generatedCode}
        </p>
      )}
    </section>
  );
}
