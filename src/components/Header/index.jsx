import SearchInput from "@/ui/SearchInput";
import Logo from "./Elements/Logo";
import UserActions from "./Elements/UserActions";
import MobileHeader from "../MobileHeader/MobileHeader";
import { ReduxProvider } from "@/ReduxProvider/ReduxProvider";

export default function Index() {
    return (
      <>
        <ReduxProvider>
          <header className="flex hidden md:block items-center justify-center">
            <nav className="px-[120px] py-[30px] flex items-center justify-between w-full border-solid border-b border-[#E5E7EB]">
              <Logo />
              <SearchInput />
              <UserActions />
            </nav>
          </header>
          <MobileHeader />
        </ReduxProvider>
      </>
    );
}