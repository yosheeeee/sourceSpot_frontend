import { projects } from "@/data/projects";
import { NextRequest } from "next/server";

export const revalidate = 60;

export async function GET(request: NextRequest) {
	let res = projects;

	const searchParams = request.nextUrl.searchParams;
	const username = searchParams.get("username");
	const top = searchParams.get("top");
	const count = searchParams.get("count");

	if (username) res = res.filter((p) => p.author.username == username);
	if (top && top == "true") res.sort((a, b) => b.likes - a.likes);

	const query = searchParams.get("query");

	if (!query?.trim())
		return Response.json(
			count && !isNaN(Number.parseInt(count))
				? res.slice(0, Number.parseInt(count))
				: res,
		);

	const lowerQuery = query.toLowerCase();

	return Response.json(
		res.filter(
			(project) =>
				project.name.toLowerCase().includes(lowerQuery) ||
				project.author.username.toLowerCase().includes(lowerQuery) ||
				(project.description &&
					project.description.toLowerCase().includes(lowerQuery)),
		),
	);
}
