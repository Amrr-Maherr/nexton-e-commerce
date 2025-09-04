import SearchInput from "@/ui/SearchInput";
import Logo from "../Header/Elements/Logo";
import SideBar from "./Elements/SideBar";
import MiniCart from "../Header/Elements/MiniCart";

export default function MobileHeader() {
    return (
      <>
        <div className="container py-[20px] gap-[20px] md:hidden block flex items-center justify-between">
          <Logo />
          <SearchInput />
          <div className="flex items-center justify-center flex-row-reverse gap-1">
            <SideBar />
            <MiniCart />
          </div>
        </div>
      </>
    );
}