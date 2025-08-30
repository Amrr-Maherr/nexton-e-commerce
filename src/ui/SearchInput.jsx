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
          <NavigationMenuContent className="grid gap-3 p-4 md:w-[600px] lg:w-[700px] grid-cols-3">
            <div>
              <h4 className="font-semibold mb-2">Mobiles</h4>
              <NavigationMenuLink className="block p-1 hover:underline">
                Smartphones
              </NavigationMenuLink>
              <NavigationMenuLink className="block p-1 hover:underline">
                Feature Phones
              </NavigationMenuLink>
              <NavigationMenuLink className="block p-1 hover:underline">
                Accessories
              </NavigationMenuLink>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Computers</h4>
              <NavigationMenuLink className="block p-1 hover:underline">
                Laptops
              </NavigationMenuLink>
              <NavigationMenuLink className="block p-1 hover:underline">
                Tablets
              </NavigationMenuLink>
              <NavigationMenuLink className="block p-1 hover:underline">
                PC Components
              </NavigationMenuLink>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Other Electronics</h4>
              <NavigationMenuLink className="block p-1 hover:underline">
                Headphones
              </NavigationMenuLink>
              <NavigationMenuLink className="block p-1 hover:underline">
                Cameras
              </NavigationMenuLink>
              <NavigationMenuLink className="block p-1 hover:underline">
                Gaming Consoles
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 👗 Fashion */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Fashion</NavigationMenuTrigger>
          <NavigationMenuContent className="grid gap-3 p-4 md:w-[600px] lg:w-[700px] grid-cols-3">
            <div>
              <h4 className="font-semibold mb-2">Men</h4>
              <NavigationMenuLink className="block p-1 hover:underline">
                Clothing
              </NavigationMenuLink>
              <NavigationMenuLink className="block p-1 hover:underline">
                Shoes
              </NavigationMenuLink>
              <NavigationMenuLink className="block p-1 hover:underline">
                Accessories
              </NavigationMenuLink>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Women</h4>
              <NavigationMenuLink className="block p-1 hover:underline">
                Clothing
              </NavigationMenuLink>
              <NavigationMenuLink className="block p-1 hover:underline">
                Bags
              </NavigationMenuLink>
              <NavigationMenuLink className="block p-1 hover:underline">
                Jewelry
              </NavigationMenuLink>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Kids</h4>
              <NavigationMenuLink className="block p-1 hover:underline">
                Clothing
              </NavigationMenuLink>
              <NavigationMenuLink className="block p-1 hover:underline">
                Shoes
              </NavigationMenuLink>
              <NavigationMenuLink className="block p-1 hover:underline">
                School Supplies
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 🏠 Home & Living */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home & Living</NavigationMenuTrigger>
          <NavigationMenuContent className="grid gap-3 p-4 md:w-[600px] lg:w-[700px] grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Furniture</h4>
              <NavigationMenuLink className="block p-1 hover:underline">
                Sofas
              </NavigationMenuLink>
              <NavigationMenuLink className="block p-1 hover:underline">
                Beds
              </NavigationMenuLink>
              <NavigationMenuLink className="block p-1 hover:underline">
                Tables
              </NavigationMenuLink>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Decor & More</h4>
              <NavigationMenuLink className="block p-1 hover:underline">
                Lighting
              </NavigationMenuLink>
              <NavigationMenuLink className="block p-1 hover:underline">
                Rugs
              </NavigationMenuLink>
              <NavigationMenuLink className="block p-1 hover:underline">
                Kitchenware
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 💄 Beauty */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Beauty</NavigationMenuTrigger>
          <NavigationMenuContent className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-cols-2">
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
          <NavigationMenuContent className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-cols-2">
            <NavigationMenuLink className="p-2 hover:underline">
              Fitness Equipment
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Sportswear
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Outdoor Gear
            </NavigationMenuLink>
            <NavigationMenuLink className="p-2 hover:underline">
              Shoes
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 🎁 Offers */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Offers</NavigationMenuTrigger>
          <NavigationMenuContent className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
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
