import { Avatar } from "@mui/material";
import { AuthorLink, Tag } from "@/components/some_sheet/ui";

interface IProjectProps {
  name: string;
  imageSrc?: string;
  description?: string;
  author: {
    nickname: string;
    avatarSrc?: string;
  };
  tags: string[];
}
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
}: IProjectProps) {
  return (
    <div className="project-block">
      <img loading="lazy" src={imageSrc ? imageSrc : "/project-example.png"} />
      <div className="tags flex items-center flex-wrap gap-2">
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
