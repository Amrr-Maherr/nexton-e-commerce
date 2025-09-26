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
import Loader from "@/components/Loader/Loader";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchCart } from "@/Redux/ShowCartSlice";

export default function MiniCart() {
  const cartState = useSelector((state) => state.getCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchCart());
  }, [dispatch]);

  const products = cartState.data?.data?.products || [];
  const totalPrice = cartState.data?.data?.totalCartPrice || 0;
  const loading = cartState.loading;

  return (
    <Sheet>
      <SheetTrigger className="relative" asChild>
        <Button
          variant="outline shadow-none"
          size="icon"
          className="shadow-none cursor-pointer"
        >
          <ShoppingCart className="h-6 w-6" />
          {products.length > 0 && (
            <div className="absolute -top-1 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold z-10">
              {products.length}
            </div>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[350px] sm:w-[500px] flex flex-col justify-between px-5 py-2"
      >
        <SheetHeader>
          <SheetTitle className="text-lg sm:text-xl font-semibold">
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="flex-1 mt-4 overflow-y-auto">
              {products.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {products.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center justify-between p-2 border rounded-lg"
                    >
                      <img
                        src={item.product.imageCover}
                        alt={item.product.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1 px-3">
                        <p className="font-medium text-sm sm:text-base">
                          {item.product.title.slice(0, 5)}...
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm">
                          {item.count} x ${item.price}
                        </p>
                      </div>
                      <p className="font-medium text-sm sm:text-base">
                        ${item.price * item.count}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center mt-10">
                  <img
                    src="/images/651228170658Empty_Order.gif"
                    alt="Empty Cart"
                    className="w-full max-w-xs sm:max-w-sm"
                  />
                  <p className="mt-4 text-gray-500 text-center text-sm sm:text-base">
                    Your cart is currently empty.
                  </p>
                </div>
              )}
            </div>

            {products.length > 0 && (
              <>
                <div className="flex justify-between font-semibold text-base sm:text-lg pt-2 border-t mt-2">
                  <span>Total:</span>
                  <span>${totalPrice}</span>
                </div>
                <Link href="/CartPage" className="mt-4 w-full">
                  <Button className="w-full py-3 bg-black rounded-full cursor-pointer text-white font-semibold">
                    Go to Cart
                  </Button>
                </Link>
              </>
            )}
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
