import { AuthorLink, Tag } from "@/components/some_sheet/ui";
import Link from "next/link";

export interface IProjectProps {
  name: string;
  imageSrc?: string;
  description?: string;
  author: IAuthor;
  tags: string[];
  id: number;
}

export interface IAuthor {
  nickname: string;
  avatarSrc?: string;
}
export const projects: IProjectProps[] = [
  {
    name: "Project Alpha",
    description: "A cutting-edge AI-powered project for data analysis.",
    author: {
      nickname: "TechGuru",
      avatarSrc: "https://example.com/avatars/techguru.png",
    },
    tags: ["AI", "Data Science", "Machine Learning"],
    id: 1,
  },
  {
    id: 2,
    name: "EcoFriendly App",
    description: "An app designed to promote sustainable living practices.",
    author: {
      nickname: "GreenCoder",
    },
    tags: ["Sustainability", "Mobile App", "Environment"],
  },
  {
    id: 3,
    name: "CloudSync Tool",
    author: {
      nickname: "CloudMaster",
      avatarSrc: "https://example.com/avatars/cloudmaster.png",
    },
    tags: ["Cloud Storage", "Backup", "Automation"],
  },
  {
    id: 4,
    name: "GameDev Framework",
    description: "A lightweight framework for creating 2D games.",
    author: {
      nickname: "PixelWizard",
    },
    tags: ["Game Development", "2D Graphics", "JavaScript"],
  },
  {
    id: 5,
    name: "Crypto Wallet",
    description: "A secure and user-friendly cryptocurrency wallet.",
    author: {
      nickname: "CryptoKing",
      avatarSrc: "https://example.com/avatars/cryptoking.png",
    },
    tags: ["Blockchain", "Cryptocurrency", "Security"],
  },
];

export default function Dashboard() {
  return (
    <div className="popular-projects">
      <h1 className="text-3xl ">Popular projects</h1>
      <div className="grid grid-cols-3 gap-5">
        {projects.map((p) => (
          <ProjectBlock {...p} />
        ))}
      </div>
    </div>
  );
}

function ProjectBlock({
  author,
  name,
  tags,
  description,
  imageSrc,
  id,
}: IProjectProps) {
  return (
    <div className="project-block ">
      <Link href={`/project/${id}`}>
        <img
          loading="lazy"
          src={imageSrc ? imageSrc : "/project-example.png"}
        />
      </Link>
      <Link href={`/project/${id}`}>
        <p className="project-name text-lg hover:underline">{name}</p>
      </Link>
      <AuthorLink {...author} />
      <p className="description line-clamp-3 overflow-hidden text-ellipsis">
        {description}
      </p>
      <div className="tags flex items-center flex-wrap gap-2">
        {tags.map((t) => (
          <Tag name={t} key={t} />
        ))}
      </div>
    </div>
  );
}
