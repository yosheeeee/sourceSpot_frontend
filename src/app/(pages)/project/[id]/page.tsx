import {
	VisibilityRounded,
	FavoriteRounded,
	CommentRounded,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { GitHubIcon } from "@/ui/icons/icons";
import { Tag } from "@/components/some_sheet/ui";
import { getProjectAction } from "@/actions/projects";
import Image from "next/image";
import Comments from "./comments";

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ id: number }>;
}) {
	const { id } = await params;
	const project = await getProjectAction({ id });

	if (!project) {
		return <div className="text-3xl">Project not found!</div>;
	}

	return (
		<div className="grid grid-cols-[7fr_3fr] gap-x-[20px] gap-y-[40px]">
			<div className="col-main">
				<h1 className="text-3xl mb-4">{project.name}</h1>
				<Image
					alt="Project image"
					className="aspect-video w-full object-cover rounded-3xl mb-4"
					sizes="50vw"
					width={0}
					height={0}
					src={
						project.imageSrc
							? project.imageSrc
							: "/project-example-2.png"
					}
				/>
				<p className="readme text-lg">{project.description}</p>
			</div>
			<Comments comments={project.comments} />
			<div className="col-side row-span-full col-start-2 flex flex-col gap-4">
				<div className="author flex items-center gap-2 flex-wrap">
					<Avatar /> {project.author.username}
				</div>
				<div className="tags flex flex-wrap gap-2">
					{project.tags.map((t) => (
						<Tag key={t} name={t} />
					))}
				</div>
				<div className="description">
					<h3 className="text-xl mb-2">Description</h3>
					<p className="text-sm">{project.description}</p>
				</div>

				<a
					className="flex cursor-pointer items-center gap-2 hover:underline transition-colors hover:text-blue-400 source-link text-m text-blue-500"
					target="_blank"
					rel="noopener noreferrer"
					href={project.gitHubUrl}
				>
					<GitHubIcon />
					Source Code
				</a>

				<div className="stats flex items-center gap-2 justify-between">
					<div className="views flex items-center gap-1 text-gray-400">
						<VisibilityRounded /> {project.views}
					</div>
					<div className="likes items-center gap-1 text-gray-400">
						<FavoriteRounded className="text-red-400" />{" "}
						{project.likes}
					</div>
					<div className="comments items-center gap-1 text-gray-400">
						<CommentRounded /> {project.comments?.length || 0}
					</div>
				</div>
			</div>
		</div>
	);
}
