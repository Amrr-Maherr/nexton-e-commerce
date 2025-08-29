import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function UserActions() {
  return (
    <>
      <div className="flex items-center justify-center gap-[22px]">
        <Link href="/Login">
          <User className="cursor-pointer" />
        </Link>
        <ShoppingCart className="cursor-pointer" />
      </div>
    </>
  );
}
