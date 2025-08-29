import Link from "next/link";

export default function FooterLink({LinkText}) {
    return (
      <>
        <Link href="" className="text-[16px] font-normal text-[#4B5563] pt-[16px] text-start">
          {LinkText}
        </Link>
      </>
    );
}