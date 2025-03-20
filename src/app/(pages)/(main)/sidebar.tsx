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
import { getProjectsAction } from "@/actions/projects";
import Image from "next/image";
import { getUsersAction } from "@/actions/users";

const popularTags = ["React", "JavaScript", "TypeScript", "CSS", "HTML"];

export default async function Sidebar() {
	const topProjects = await getProjectsAction({ count: 5, top: true });
	const topUsers = await getUsersAction({ count: 5, top: true });

	return (
		<aside className="hidden md:flex flex-col gap-8">
			<div className="popular-tags">
				<h3 className="text-2xl mb-4">Popular Tags</h3>
				<div className="flex items-center gap-2">
					{popularTags.map((t, idx) => (
						<Tag key={idx} name={t} />
					))}
				</div>
			</div>
			<div className="recent-projects">
				<h3 className="text-2xl mb-4">Top Projects</h3>
				<div className="flex flex-col gap-2">
					{topProjects?.map((p) => (
						<RecentProject key={p.name} {...p} />
					))}
				</div>
			</div>
			<div className="best-authors">
				<h3 className="text-2xl mb-4">Best Authors</h3>
				<div className="flex flex-col gap-2">
					{topUsers?.map((author) => (
						<Author key={author.username} {...author} />
					))}
				</div>
			</div>
		</aside>
	);
}

function RecentProject({
	name,
	id,
	author,
	likes,
	views,
	comments,
}: IProjectProps) {
	return (
		<div className="recent-project grid grid-cols-[max-content_auto] gap-x-3 grid-rows-2 w-full overflow-hidden">
			<Image
				width={0}
				height={0}
				src={"/project-example-2.png"}
				alt={name}
				className="aspect-square w-16 cursor-pointer  object-cover rounded-md row-span-2 col-start-1"
			/>

			<Link
				href={`/project/${id}`}
				className="text-lg font-semibold whitespace-nowrap text-ellipsis overflow-hidden col-start-2 cursor-pointer hover:underline"
			>
				{name}
			</Link>
			<div className=" col-start-2 flex items-center gap-2 justify-between overflow-hidden">
				<AuthorLink username={author.username} />
				<div className="stats w-max flex text-sm items-center gap-2 justify-between">
					<div className="views w-max flex items-center gap-1 text-gray-400">
						<VisibilityRounded /> {views}
					</div>
					<div className="likes w-max items-center gap-1 text-gray-400">
						<FavoriteRounded className="text-red-400" /> {likes}
					</div>
					<div className="comments w-max items-center gap-1 text-gray-400">
						<CommentRounded /> {comments?.length || 0}
					</div>
				</div>
			</div>
		</div>
	);
}

function Author({ avatarSrc, username, likes, githubStars }: IAuthor) {
	return (
		<div className="grid items-center grid-cols-[max-content_auto] grid-rows-2 gap-x-3">
			<Avatar
				src={avatarSrc}
				className="row-span-2 col-start-1"
				sx={{ width: 55, height: 55 }}
			/>
			<Link
				className="text-lg hover:underline col-start-2 row-start-1"
				href={`/users/${username}`}
			>
				{username}
			</Link>
			<div className="stats w-max flex text-sm items-center gap-2 justify-between">
				<div className="likes w-max items-center gap-1 text-gray-400">
					<FavoriteRounded
						className="text-red-400"
						fontSize="small"
					/>{" "}
					{likes}
				</div>
				<div className="comments w-max flex items-center gap-1 text-gray-400">
					<GitHubIcon className="!size-4" /> {githubStars}
				</div>
			</div>
		</div>
	);
}
