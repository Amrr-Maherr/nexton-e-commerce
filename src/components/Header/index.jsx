import SearchInput from "@/ui/SearchInput";
import Logo from "./Eelements/Logo";
import UserActions from "./Eelements/UserActions";

export default function Index() {
    return (
      <>
        <header className="flex items-center justify-center">
          <nav className="px-[120px] py-[30px] flex items-center justify-between w-full border-solid border-b border-[#E5E7EB]">
            <Logo />
            <SearchInput/>
            <UserActions/>
          </nav>
        </header>
      </>
    );
}