import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";

export default function UserActions() {
  return (
    <>
      <div className="flex items-center justify-center gap-[22px]">
        <User className="cursor-pointer" />
        <ShoppingCart className="cursor-pointer" />
      </div>
    </>
  );
}
