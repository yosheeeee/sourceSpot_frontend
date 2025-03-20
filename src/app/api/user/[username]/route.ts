import { authors } from "@/data/projects";

export async function GET(
	request: Request,
	{ params }: { params: Promise<{ username: string }> },
) {
	const { username } = await params;

	const user = authors.find((a) => a.username == username);

	return Response.json(user);
}
