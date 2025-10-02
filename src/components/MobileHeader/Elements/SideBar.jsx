"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Home,
  ShoppingCart,
  ShoppingBag,
  Heart,
  LogIn,
  LogOut,
  Info,
  Package,
} from "lucide-react";
import Logo from "@/components/Header/Elements/Logo";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SideBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-xl cursor-pointer border-none shadow-none"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-[300px] sm:w-[320px] p-0 flex flex-col"
        >
          <SheetHeader className="border-b p-6">
            <SheetTitle className="text-xl font-bold tracking-wide">
              <Logo />
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col mt-4 flex-1">
            <SheetClose asChild>
              <Link
                href="/"
                className="flex items-center gap-3 px-6 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition"
              >
                <Home className="h-5 w-5" /> Home
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/AllProducts"
                className="flex items-center gap-3 px-6 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition"
              >
                <ShoppingBag className="h-5 w-5" /> Shop
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/CartPage"
                className="flex items-center gap-3 px-6 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition"
              >
                <ShoppingCart className="h-5 w-5" /> Cart
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/FavoritesPage"
                className="flex items-center gap-3 px-6 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition"
              >
                <Heart className="h-5 w-5" /> Wishlist
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/OrdersPage"
                className="flex items-center gap-3 px-6 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition"
              >
                <Package className="h-5 w-5" /> Orders
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/About"
                className="flex items-center gap-3 px-6 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition"
              >
                <Info className="h-5 w-5" /> About
              </Link>
            </SheetClose>
          </nav>

          <div className="p-6 border-t flex flex-col gap-3">
            {isLoggedIn ? (
              <Button
                variant="outline"
                onClick={handleAuth}
                className="flex items-center justify-center gap-2 cursor-pointer bg-black text-white rounded-full"
              >
                <LogOut className="h-5 w-5" /> Logout
              </Button>
            ) : (
              <SheetClose asChild>
                <Link
                  href="/Login"
                  className="flex items-center justify-center gap-2 cursor-pointer w-full h-full"
                >
                  <Button
                    variant="outline"
                    className="flex items-center justify-center bg-black text-white rounded-full cursor-pointer gap-2 w-full h-full"
                  >
                    <LogIn className="h-5 w-5" /> Login
                  </Button>
                </Link>
              </SheetClose>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
