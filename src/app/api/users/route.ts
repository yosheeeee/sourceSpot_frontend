import { authors } from "@/data/projects";
import { NextRequest } from "next/server";

export const revalidate = 60;

export async function GET(request: NextRequest) {
	// eslint-disable-next-line prefer-const
	let res = authors;

	const searchParams = request.nextUrl.searchParams;
	const top = searchParams.get("top");
	const count = searchParams.get("count");

	if (top && top == "true") res.sort((a, b) => b.likes - a.likes);

	return Response.json(
		count && !isNaN(Number.parseInt(count))
			? res.slice(0, Number.parseInt(count))
			: res,
	);
}
