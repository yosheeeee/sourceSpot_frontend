import {
  AddRounded,
  CheckRounded,
  CommentRounded,
  DeleteRounded,
  EditRounded,
  FavoriteRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { Button } from "@mui/material";

interface IRepositoryProps {
  title: string;
  description: string;
  views: number;
}

const repositories: IRepositoryProps[] = [
  {
    title: "Abook-lab",
    description: "crm for brokers",
    views: 129,
  },
  {
    title: "UltraType",
    description: "Speedtyping practice tool",
    views: 34,
  },
];

export default function GitHubIntegrationPage() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex w-full gap-3 items-center text-2xl">
        <h1>GitHub connection status: </h1>
        <span className="text-green-500">
          <CheckRounded /> Connected
        </span>
        <Button variant="contained" className="!ml-auto">
          <AddRounded />
          Add project
        </Button>
      </div>
      <h2 className="text-xl">Connected Repositories:</h2>
      <div className="flex flex-col gap-2 w-full">
        {repositories.map((r) => (
          <RepositoryItem {...r} key={r.title} />
        ))}
      </div>
    </div>
  );
}

function RepositoryItem({ title, description, views }: IRepositoryProps) {
  return (
    <div className="grid gap-1 grid-cols-[max-content_auto] grid-rows-2">
      <button className="col-start-1 p-1 w-max aspect-square rounded-md transition-colors text-blue-400  hover:text-blue-700 hover:bg-blue-300">
        <EditRounded />
      </button>
      <button className="col-start-1 p-1 w-max aspect-square rounded-md transition-colors text-red-400  hover:text-red-700 hover:bg-red-300">
        <DeleteRounded />
      </button>
      <div className="flex flex-col col-start-2 gap-1 row-span-full rounded-lg p-3 border-2 border-gray-300">
        <div className="row">
          <p className="text-lg">{title}</p>
        </div>
        <div className="row flex justify-between items-center">
          <p className="text-m">{description}</p>
          <div className="stats flex items-center gap-2">
            <div className="views flex items-center gap-1 text-gray-400">
              <VisibilityRounded /> {views}
            </div>
            <div className="likes items-center gap-1 text-gray-400">
              <FavoriteRounded className="text-red-400" /> 123
            </div>
            <div className="comments items-center gap-1 text-gray-400">
              <CommentRounded /> 123
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
