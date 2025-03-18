import ProjectCard from "@/components/ProjectCard";
import { IProjectProps } from "@/models/IProjectProps";

const projects: IProjectProps[] = [
	{
		name: "Project Alpha",
		description: "A cutting-edge AI-powered project for data analysis.",
		author: {
			nickname: "TechGuru",
			avatarSrc: "https://example.com/avatars/techguru.png",
		},
		tags: ["AI", "Data Science", "Machine Learning"],
	},
	{
		name: "EcoFriendly App",
		description: "An app designed to promote sustainable living practices.",
		author: {
			nickname: "GreenCoder",
		},
		tags: ["Sustainability", "Mobile App", "Environment"],
	},
	{
		name: "CloudSync Tool",
		author: {
			nickname: "CloudMaster",
			avatarSrc: "https://example.com/avatars/cloudmaster.png",
		},
		tags: ["Cloud Storage", "Backup", "Automation"],
	},
	{
		name: "GameDev Framework",
		description: "A lightweight framework for creating 2D games.",
		author: {
			nickname: "PixelWizard",
		},
		tags: ["Game Development", "2D Graphics", "JavaScript"],
	},
	{
		name: "Crypto Wallet",
		description: "A secure and user-friendly cryptocurrency wallet.",
		author: {
			nickname: "CryptoKing",
			avatarSrc: "https://example.com/avatars/cryptoking.png",
		},
		tags: ["Blockchain", "Cryptocurrency", "Security"],
	},
];

export default async function searchPage({
	searchParams,
}: {
	searchParams: Promise<{
		q: string;
	}>;
}) {
	const { q: query } = await searchParams;

	return (
		<div>
			<h1 className="text-3xl font-medium mb-4">
				{query ? `"${query}" search results` : "Search results"}
			</h1>
			<div
				className="grid"
				style={{
					gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
				}}
			>
				{projects.map((p) => (
					<ProjectCard key={p.name} {...p} />
				))}
			</div>
		</div>
	);
}
