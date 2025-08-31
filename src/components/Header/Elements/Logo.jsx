import Link from "next/link";

export default function Logo() {
    return (
      <>
        <Link href="/" className="flex items-center justify-center flex-col gap-[2px]">
          <h1 className="text-[20px] md:text-[34px] font-semibold text-[#111827]">NEXTON</h1>
        </Link>
      </>
    );
}