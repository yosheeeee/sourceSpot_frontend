import { getProjectsAction } from "@/actions/projects";
import ProjectCard from "@/components/ProjectCard";

export default async function searchPage({
	searchParams,
}: {
	searchParams: Promise<{
		q: string;
	}>;
}) {
	const { q: query } = await searchParams;

	const projects = await getProjectsAction({ query: query });

	return (
		<div>
			<h1 className="text-3xl font-medium mb-4">
				{query ? `"${query}" search results` : "Search results"}
			</h1>
			<div
				className="grid gap-4"
				style={{
					gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
				}}
			>
				{projects?.map((p) => <ProjectCard key={p.name} {...p} />)}
			</div>
		</div>
	);
}
