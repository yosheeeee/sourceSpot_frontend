import { Avatar } from "@mui/material";
import { AuthorLink, Tag } from "@/components/some_sheet/ui";
import { IProjectProps } from "@/models/IProjectProps";

export default function ProjectCard({
	author,
	name,
	tags,
	description,
	imageSrc,
}: IProjectProps) {
	return (
		<div className="project-block">
			<img
				loading="lazy"
				src={imageSrc ? imageSrc : "/project-example.png"}
			/>
			<div className="tags flex items-center flex-wrap gap-2 mb-2">
				{tags.map((t) => (
					<Tag name={t} key={t} />
				))}
			</div>
			<p className="project-name">{name}</p>
			<AuthorLink {...author} />
			<p className="description line-clamp-3 overflow-hidden text-ellipsis">
				{description}
			</p>
		</div>
	);
}
