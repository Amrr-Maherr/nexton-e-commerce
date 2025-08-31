"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function MiniCart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline shadow-none"
          size="icon"
          className="shadow-none cursor-pointer"
        >
          <ShoppingCart className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[350px] sm:w-[500px] flex flex-col items-center justify-center px-5 py-10"
      >
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col items-center justify-center mt-6">
          <img
            src="/images/651228170658Empty_Order.gif"
            alt="Empty Cart"
            className="w-full max-w-xs sm:max-w-sm"
          />
          <p className="mt-4 text-gray-500 text-center text-sm sm:text-base">
            Your cart is currently empty.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
