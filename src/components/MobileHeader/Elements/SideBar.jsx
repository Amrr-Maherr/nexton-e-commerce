"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Home,
  ShoppingBag,
  Package,
  Heart,
  User,
  Phone,
} from "lucide-react";
import Logo from "@/components/Header/Elements/Logo";
import Link from "next/link";

export default function SideBar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-xl"
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
              <Logo/>
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col mt-4">
            <Link
              href="/"
              className="flex items-center gap-3 px-6 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition"
            >
              <Home className="h-5 w-5" /> Home
            </Link>
            <Link
              href="/AllProducts"
              className="flex items-center gap-3 px-6 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition"
            >
              <ShoppingBag className="h-5 w-5" /> Shop
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-6 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition"
            >
              <Package className="h-5 w-5" /> Orders
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-6 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition"
            >
              <Heart className="h-5 w-5" /> Wishlist
            </Link>
            <Link
              href="/fgfgfg"
              className="flex items-center gap-3 px-6 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition"
            >
              <User className="h-5 w-5" /> Account
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-6 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition"
            >
              <Phone className="h-5 w-5" /> Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
