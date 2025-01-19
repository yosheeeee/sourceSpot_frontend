import Logo from "@/ui/logo";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

export default function Header() {
  return (
    <header className="flex p-2 items-center justify-between">
      <Logo type="horizontal" className="w-[150px]" />
      <ProfileMenu />
    </header>
  );
}
