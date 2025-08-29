import SearchInput from "@/ui/SearchInput";
import Logo from "../Header/Elements/Logo";
import SideBar from "./Elements/SideBar";

export default function MobileHeader() {
    return (
      <>
        <div className="px-[24px] py-[20px] gap-[20px] md:hidden block flex items-center justify-between">
          <Logo />
          <SearchInput />
          <SideBar/>
        </div>
      </>
    );
}