import { IProjectProps } from "@/models/types";

export async function getProjectsAction(
	params:
		| Record<string, string | number | boolean | undefined>
		| undefined = {},
): Promise<IProjectProps[] | undefined> {
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

	const url = `http://localhost:3000/api/projects${queryString ? `?${queryString}` : ""}`;
	const res = await fetch(url);

	if (res.ok) {
		return await res.json();
	}
}

export async function getProjectAction({
	id,
}: {
	id: number;
}): Promise<IProjectProps | undefined> {
	const url = `http://localhost:3000/api/project/${id}`;
	const res = await fetch(url);

	if (res.ok) {
		return await res.json();
	}
}
