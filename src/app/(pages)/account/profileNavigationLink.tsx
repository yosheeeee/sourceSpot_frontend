"use client";

import { INavigationButton } from "@/components/Footer/Footer";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function ProfileNavigationLink({
	icon,
	matchPath,
	title,
}: INavigationButton) {
	const pathName = usePathname();
	return (
		<div
			className={`flex items-center gap-2 hover:underline text-2xl ${pathName == matchPath && "text-blue-300"}`}
		>
			{icon}
			<Link href={matchPath}>{title}</Link>
		</div>
	);
}
