import { Avatar } from "@mui/material";
import { AuthorLink, Tag } from "@/components/some_sheet/ui";
import { IProjectProps } from "@/models/IProjectProps";
import Link from "next/link";

export default function ProjectCard({
  author,
  name,
  tags,
  description,
  imageSrc,
  id,
}: IProjectProps) {
  return (
    <div className="project-block flex flex-col gap-1">
      <Link href={`/project/${id}`} className="cursor-pointer">
        {imageSrc ? (
          <img
            loading="lazy"
            src={imageSrc ? imageSrc : "/project-example.png"}
            className="rounded-t-md"
          />
        ) : (
          <div className="w-full aspect-video bg-gray-500 rounded-t-md"></div>
        )}
      </Link>
      <div className="tags flex items-center flex-wrap gap-2 mb-2">
        {tags.map((t) => (
          <Tag name={t} key={t} />
        ))}
      </div>

      <Link className="hover:underline" href={`/project/${id}`}>
        {name}
      </Link>
      <AuthorLink {...author} />
      <p className="description line-clamp-3 overflow-hidden text-ellipsis">
        {description}
      </p>
    </div>
  );
}
