"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function SearchInput() {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {/* 🛒 Electronics */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Electronics</NavigationMenuTrigger>
          <NavigationMenuContent className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] grid-cols-2">
            <NavigationMenuLink className="p-2 hover:underline">
              Smartphones
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Laptops
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Tablets
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Headphones
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Gaming Consoles
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Cameras
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 👗 Fashion */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Fashion</NavigationMenuTrigger>
          <NavigationMenuContent className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] grid-cols-2">
            <NavigationMenuLink className="p-2 hover:underline">
              Men’s Clothing
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Women’s Clothing
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Kids’ Clothing
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Shoes
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Bags
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Accessories
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 🏠 Home & Living */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home & Living</NavigationMenuTrigger>
          <NavigationMenuContent className="grid gap-3 p-4  md:w-[500px] lg:w-[600px] grid-cols-2">
            <NavigationMenuLink className="p-2 hover:underline">
              Furniture
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Kitchen Appliances
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Home Decor
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Lighting
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Storage
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Bedding
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 💄 Beauty */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Beauty</NavigationMenuTrigger>
          <NavigationMenuContent className="grid gap-3 p-4  md:w-[500px] lg:w-[600px]">
            <NavigationMenuLink className="p-2 hover:underline">
              Makeup
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Skincare
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Haircare
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Fragrances
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* ⚽ Sports */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sports</NavigationMenuTrigger>
          <NavigationMenuContent className="grid gap-3 p-4   md:w-[500px] lg:w-[600px]">
            <NavigationMenuLink className="p-2 hover:underline">
              Fitness Equipment
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Sportswear
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Shoes
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Outdoor Gear
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 🎁 Offers */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Offers</NavigationMenuTrigger>
          <NavigationMenuContent className="grid gap-3 p-4  md:w-[500px] lg:w-[600px]">
            <NavigationMenuLink className="p-2 font-semibold text-red-500">
              Today’s Deals
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Flash Sale
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Clearance
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Bundle Offers
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
