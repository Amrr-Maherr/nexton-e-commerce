export default function PasswordInput() {
    return (
      <>
        <div className="flex items-start justify-center gap-[8px] flex-col w-full">
          <label
            htmlFor=""
            className="text-[14px] font-semibold text-[#111827]"
          >
            Password
          </label>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your password"
            className="w-full rounded-[12px] border border-[#E5E7EB] h-[52px] px-[16px] text-[14px] placeholder:text-gray-400 focus:outline-0"
          />
        </div>
      </>
    );
}