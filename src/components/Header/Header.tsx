import Logo from "@/ui/logo";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import SearchBlock from "../SearchBlock/SearchBlock";
import Link from "next/link";

export default function Header() {
	return (
		<header className="flex p-4 items-center w-full max-w-[1920px] mx-auto gap-4">
			<Link href="/" className="flex-1">
				<Logo type="horizontal" className="w-[150px]" />
			</Link>
			<SearchBlock />
			<ProfileMenu />
		</header>
	);
}
