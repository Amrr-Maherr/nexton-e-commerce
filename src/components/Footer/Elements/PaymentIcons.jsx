import { CreditCard, Wallet, Banknote, Bitcoin } from "lucide-react";

export default function PaymentIcons() {
  return (
    <div className="flex items-center justify-center gap-2 w-full">
      <CreditCard className="w-4 h-4 text-gray-700" />
      <Wallet className="w-4 h-4 text-gray-700" />
      <Banknote className="w-4 h-4 text-gray-700" />
      <Bitcoin className="w-4 h-4 text-gray-700" />
    </div>
  );
}
