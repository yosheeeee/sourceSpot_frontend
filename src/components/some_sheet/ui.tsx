import Link from "next/link";

export function Tag({ name }: { name: string }) {
	return (
		<Link
			href={`/search?q=${name}`}
			className="cursor-pointer bg-blue-950 text-blue-400 rounded-3xl text-sm py-1 px-4 transition-colors hover:bg-blue-900 hover:text-blue-300"
		>
			{name}
		</Link>
	);
}

export function AuthorLink({ username: username }: { username: string }) {
	return (
		<Link
			href={"/profile/" + username}
			className="transition-colors text-blue-500 hover:text-blue-400 hover:underline"
		>
			@{username}
		</Link>
	);
}
