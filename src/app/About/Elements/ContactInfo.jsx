"use client";

export default function ContactInfo() {
  return (
    <div className="w-full mx-auto p-6 bg-white flex flex-col gap-4">
      <h1 className="text-[#111827] text-[24px] font-semibold mb-[40px]">
        Get in touch with us
      </h1>
      <div>
        <h3 className="text-[#111827] text-[18px] font-semibold mb-[8px]">
          Address
        </h3>
        <p className="text-[#6B7280] text-[16px] font-normal">
          Photo booth tattooed prism, Portland Taiyaki hoodie neutra typewriter
        </p>
      </div>

      <div>
        <h3 className="text-[#111827] text-[18px] font-semibold mb-[8px]">
          Email
        </h3>
        <p className="text-[#6B7280] text-[16px] font-normal">
          nexton@example.com
        </p>
      </div>

      <div>
        <h3 className="text-[#111827] text-[18px] font-semibold mb-[8px]">
          Phone
        </h3>
        <p className="text-[#6B7280] text-[16px] font-normal">
          000-123-456-7890
        </p>
      </div>
    </div>
  );
}
