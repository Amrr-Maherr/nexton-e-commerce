import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Title from "../../components/authentication/Elements/Title";
import LineAcross from "../../components/authentication/Elements/LineAcross";
import Link from "../../components/authentication/Elements/Link";

export default function Login() {
  return (
    <section className="pt-[40px] pb-[72px] max-w-[440px] mx-auto gap-[24px] flex items-center justify-center flex-col px-[24px] md:px-0">
      <Title TitleText="Login" />

      {/* Email Field */}
      <div className="flex items-start justify-center gap-[8px] flex-col w-full">
        <Label
          htmlFor="email"
          className="text-[14px] font-semibold text-[#111827]"
        >
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
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
          type="password"
          id="password"
          placeholder="Enter your password"
          className="w-full rounded-[12px] border border-[#E5E7EB] h-[52px] px-[16px] text-[14px] placeholder:text-gray-400 focus:outline-0"
        />
      </div>

      {/* Continue Button */}
      <Button className="w-full shadow-2xl bg-[#111827] rounded-full p-[14px] text-white text-[14px] font-medium cursor-pointer">
        Continue
      </Button>

      <LineAcross />

      <Link
        href="/Register"
        linkText="Create an account"
        linkTitle="New user?"
      />
      <Link
        href="/ForgotPassword" // ده اللينك لصفحة نسيان كلمة السر
        linkText="Forgot Password?"
        linkTitle="Can't access your account?"
      />
    </section>
  );
}
