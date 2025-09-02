"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Title from "../../components/authentication/Elements/Title";
import LineAcross from "../../components/authentication/Elements/LineAcross";
import Link from "../../components/authentication/Elements/Link";
import { useState } from "react";
import useRegister from "@/Hooks/useRegister";
import { toast } from "sonner";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    rePassword: "",
  });

  const { Loading, Register } = useRegister();

  const handelRegister = () => {
    const { name, email, phone, password, rePassword } = formData;

    if (!name || !email || !phone || !password || !rePassword) {
      toast.warning("⚠️ Please fill all fields");
    } else {
      Register(formData);
      // تفريغ الحقول بعد التسجيل
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        rePassword: "",
      });
    }
  };

  return (
    <section className="pt-[40px] pb-[72px] max-w-[440px] mx-auto gap-[24px] flex items-center justify-center flex-col px-[24px] md:px-0">
      <Title TitleText="Register" />

      {/* Name Field */}
      <div className="flex items-start justify-center gap-[8px] flex-col w-full">
        <Label
          htmlFor="name"
          className="text-[14px] font-semibold text-[#111827]"
        >
          Name
        </Label>
        <Input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          type="text"
          id="name"
          placeholder="Enter your full name"
          className="w-full rounded-[12px] border border-[#E5E7EB] h-[52px] px-[16px] text-[14px] placeholder:text-gray-400 focus:outline-0"
        />
      </div>

      {/* Email Field */}
      <div className="flex items-start justify-center gap-[8px] flex-col w-full">
        <Label
          htmlFor="email"
          className="text-[14px] font-semibold text-[#111827]"
        >
          Email
        </Label>
        <Input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full rounded-[12px] border border-[#E5E7EB] h-[52px] px-[16px] text-[14px] placeholder:text-gray-400 focus:outline-0"
        />
      </div>

      {/* Phone Field */}
      <div className="flex items-start justify-center gap-[8px] flex-col w-full">
        <Label
          htmlFor="phone"
          className="text-[14px] font-semibold text-[#111827]"
        >
          Phone
        </Label>
        <Input
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          type="tel"
          id="phone"
          placeholder="Enter your phone number"
          className="w-full rounded-[12px] border border-[#E5E7EB] h-[52px] px-[16px] text-[14px] placeholder:text-gray-400 focus:outline-0"
        />
      </div>

      {/* Password Field */}
      <div className="flex items-start justify-center gap-[8px] flex-col w-full">
        <Label
          htmlFor="password"
          className="text-[14px] font-semibold text-[#111827]"
        >
          Password
        </Label>
        <Input
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          type="password"
          id="password"
          placeholder="Enter your password"
          className="w-full rounded-[12px] border border-[#E5E7EB] h-[52px] px-[16px] text-[14px] placeholder:text-gray-400 focus:outline-0"
        />
      </div>

      {/* Re-Password Field */}
      <div className="flex items-start justify-center gap-[8px] flex-col w-full">
        <Label
          htmlFor="rePassword"
          className="text-[14px] font-semibold text-[#111827]"
        >
          Confirm Password
        </Label>
        <Input
          value={formData.rePassword}
          onChange={(e) =>
            setFormData({ ...formData, rePassword: e.target.value })
          }
          type="password"
          id="rePassword"
          placeholder="Confirm your password"
          className="w-full rounded-[12px] border border-[#E5E7EB] h-[52px] px-[16px] text-[14px] placeholder:text-gray-400 focus:outline-0"
        />
      </div>

      {/* Continue Button */}
      <Button
        onClick={handelRegister}
        disabled={Loading}
        className="w-full shadow-2xl bg-[#111827] rounded-full p-[14px] text-white text-[14px] font-medium cursor-pointer"
      >
        {Loading ? "Loading..." : "Continue"}
      </Button>
      <LineAcross />
      <Link href="/Login" linkText="Login" linkTitle="Already a member?" />
    </section>
  );
}
