import { getProjectsAction } from "@/actions/projects";
import ProjectCard from "@/components/ProjectCard";

export default async function Dashboard() {
	const projects = await getProjectsAction();

	return (
		<div className="popular-projects">
			<h1 className="text-3xl font-medium mb-4">Popular projects</h1>
			<div
				className="grid gap-5"
				style={{
					gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
				}}
			>
				{projects?.map((p) => <ProjectCard key={p.name} {...p} />)}
			</div>
		</div>
	);
}
