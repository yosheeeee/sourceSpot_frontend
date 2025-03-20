import { getProjectsAction } from "@/actions/projects";
import { getUserAction } from "@/actions/users";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default async function ProfilePage({
	params,
}: {
	params: Promise<{
		username: string;
	}>;
}) {
	const { username } = await params;
	const user = await getUserAction({ username: username });
	const projects = await getProjectsAction({ username: username });

	return (
		<div className="flex w-full gap-4">
			<div className="w-[400px] flex flex-col">
				<Image
					className="aspect-square bg-yellow w-full object-cover rounded-full"
					alt={`${user?.username} profile picture`}
					src={user?.avatarSrc}
					width={0}
					height={0}
					sizes="50vw"
				/>
				<div className="text-2xl mt-3">{user?.name}</div>
				<div className="text-2xl">@{user?.username}</div>
				<p className="mt-3">{user?.description}</p>
				<div className="flex flex-col gap-2 mt-3">
					{!!user?.github && (
						<a href={user.github}>
							{user.github.split("https://")[1]}
						</a>
					)}
				</div>
			</div>
			<div
				className="grid gap-5 flex-1"
				style={{
					gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
				}}
			>
				{projects?.map((p) => <ProjectCard key={p.name} {...p} />)}
			</div>
		</div>
	);
}
