import { IAuthor } from "@/models/types";

export async function getUsersAction(
	params:
		| Record<string, string | number | boolean | undefined>
		| undefined = {},
): Promise<IAuthor[] | undefined> {
	const queryString = new URLSearchParams(
		Object.entries(params)
			.filter(([_, value]) => value !== undefined && value !== "")
			.reduce(
				(acc, [key, value]) => {
					acc[key] = String(value);
					return acc;
				},
				{} as Record<string, string>,
			),
	).toString();

	const url = `http://localhost:3000/api/users${queryString ? `?${queryString}` : ""}`;
	const res = await fetch(url);

	if (res.ok) {
		return await res.json();
	}
}

export async function getUserAction({
	username,
}: {
	username: string;
}): Promise<IAuthor | undefined> {
	const url = `http://localhost:3000/api/user/${username}`;
	const res = await fetch(url);

	if (res.ok) {
		return await res.json();
	}
}
