import { AuthorLink, Tag } from "@/components/some_sheet/ui";
import { IAuthor, IProjectProps } from "@/models/types";
import {
  CommentRounded,
  FavoriteRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import Link from "next/link";
import { Avatar } from "@mui/material";
import { GitHubIcon } from "@/ui/icons/icons";
import { authors, projects } from "@/data/projects";

const popularTags = ["React", "JavaScript", "TypeScript", "CSS", "HTML"];
export default function DashboardSidebar() {
  return (
    <aside className="flex flex-col gap-8">
      <div className="popular-tags">
        <h3 className="text-2xl mb-4">Popular tags:</h3>
        <div className="flex items-center gap-2">
          {popularTags.map((t, idx) => (
            <Tag key={idx} name={t} />
          ))}
        </div>
      </div>
      <div className="recent-projectst">
        <h3 className="text-2xl mb-4">Recent Projects:</h3>
        <div className="flex flex-col gap-2">
          {projects.slice(0, 5).map((p) => (
            <RecentProject key={p.name} {...p} />
          ))}
        </div>
      </div>
      <div className="best-authors">
        <h3 className="text-2xl mb-4">Best Authors:</h3>
        <div className="flex flex-col gap-2">
          {authors.map((author) => (
            <Author key={author.nickname} {...author} />
          ))}
        </div>
      </div>
    </aside>
  );
}

function RecentProject({
  imageSrc,
  name,
  id,
  author,
  likes,
  views,
  comments,
}: IProjectProps) {
  return (
    <div className="recent-project grid grid-cols-[max-content_auto] gap-x-2 grid-rows-2 w-full overflow-hidden">
      {!!imageSrc ? (
        <img
          src={imageSrc}
          alt={name}
          className="cursor-pointer w-16 h-16 object-center rounded-md row-span-2 col-start-1"
        />
      ) : (
        <div className="w-16 h-16 bg-gray-500" />
      )}

      <Link
        href={`/project/${id}`}
        className="text-lg font-semibold whitespace-nowrap text-ellipsis overflow-hidden col-start-2 cursor-pointer hover:underline"
      >
        {name}
      </Link>
      <div className=" col-start-2 flex items-center gap-2 justify-between overflow-hidden">
        <AuthorLink nickname={author.nickname} />
        <div className="stats w-max flex text-sm items-center gap-2 justify-between">
          <div className="views w-max flex items-center gap-1 text-gray-400">
            <VisibilityRounded /> {views}
          </div>
          <div className="likes w-max items-center gap-1 text-gray-400">
            <FavoriteRounded className="text-red-400" /> {likes}
          </div>
          <div className="comments w-max items-center gap-1 text-gray-400">
            <CommentRounded /> {comments?.length}
          </div>
        </div>
      </div>
    </div>
  );
}

function Author(props: IAuthor) {
  const authorLikes = projects.reduce(
    (acc, p) => (p.author.nickname == props.nickname ? acc + p.likes : acc),
    0,
  );
  const authorProjects = projects.filter(
    (p) => p.author.nickname === props.nickname,
  ).length;
  const { nickname, avatarSrc } = props;
  return (
    <div className="grid items-center grid-cols-[max-content_auto] grid-rows-2 gap-x-3">
      <Avatar
        src={avatarSrc}
        className="row-span-2 col-start-1"
        sx={{ width: 55, height: 55 }}
      />
      <Link
        className="text-lg hover:underline col-start-2 row-start-1"
        href={`/users/${nickname}`}
      >
        {nickname}
      </Link>
      <div className="stats w-max flex text-sm items-center gap-2 justify-between">
        <div className="likes w-max items-center gap-1 text-gray-400">
          <FavoriteRounded className="text-red-400" /> {authorLikes}
        </div>
        <div className="comments w-max flex items-center gap-1 text-gray-400">
          <GitHubIcon /> {authorProjects}
        </div>
      </div>
    </div>
  );
}
