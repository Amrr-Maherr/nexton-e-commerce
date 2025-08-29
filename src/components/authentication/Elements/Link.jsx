import Link from "next/link";
export default function Links({ linkTitle, linkText,href }) {
  return (
    <>
      <div className="flex items-center justify-center gap-0.5 text-[16px] font-normal">
        <p className="text-[#4B5563]">{linkTitle}</p>
        <Link href={href} className="text-[#0EA5E9]">
          {linkText}
        </Link>
      </div>
    </>
  );
}
