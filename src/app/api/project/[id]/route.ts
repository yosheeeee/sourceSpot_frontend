import { projects } from "@/data/projects";

export async function GET(
	request: Request,
	{ params }: { params: Promise<{ id: number }> },
) {
	const { id } = await params;
	const project = projects.find((p) => p.id == id);

	return Response.json(project);
}
