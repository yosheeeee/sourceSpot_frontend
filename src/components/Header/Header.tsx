import Logo from "@/ui/logo";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import SearchBlock from "../SearchBlock/SearchBlock";

export default function Header() {
  return (
    <header className="flex p-2 items-center justify-between">
      <Logo type="horizontal" className="w-[150px]" />
      <SearchBlock />
      <ProfileMenu />
    </header>
  );
}
