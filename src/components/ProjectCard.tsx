import { AuthorLink, Tag } from "@/components/some_sheet/ui";
import { IProjectProps } from "@/models/types";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
	id,
	author,
	name,
	tags,
	description,
	imageSrc,
}: IProjectProps) {
	return (
		<div className="project-block">
			<Link href={`/project/${id}`}>
				<Image
					className="aspect-video w-full object-cover mb-4 rounded-3xl"
					loading="lazy"
					alt="Project image"
					width={0}
					height={0}
					sizes="30vw"
					src={imageSrc ? imageSrc : "/project-example-2.png"}
				/>
			</Link>
			<div className="tags flex items-center flex-wrap gap-2 mb-2">
				{tags.map((t) => (
					<Tag name={t} key={t} />
				))}
			</div>
			<Link href={`/project/${id}`}>
				<div className="project-name text-lg font-medium">{name}</div>
			</Link>
			<AuthorLink {...author} />
			<p className="description line-clamp-3 overflow-hidden text-ellipsis">
				{description}
			</p>
		</div>
	);
}
