import {
  VisibilityRounded,
  FavoriteRounded,
  CommentRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Input,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import Image from "next/image";
import GitHubIntegrationPage from "../../profile/(profile-tabs)/github/page";
import { GitHubIcon } from "@/ui/icons/icons";
import { NEXT_INTERCEPTION_MARKER_PREFIX } from "next/dist/lib/constants";
import { Tag } from "@/components/some_sheet/ui";

const tags: string = ["go", "react", "typescript", "postgres"];
const comments: ICommentProps[] = [
  {
    comment: "So cool!",
    nickname: "yoshee",
  },
];

export default function ProjectPage() {
  return (
    <div className="grid grid-cols-[7fr_3fr] gap-x-[20px] gap-y-[40px]">
      <div className="col-main">
        <h1 className="text-3xl">Project Name</h1>
        <img src={"/project-example.png"} />
        <p className="readme text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
          quibusdam? Enim, officia fugit. Esse sint impedit debitis quae ad,
          vero voluptate sit aperiam eveniet et blanditiis odit obcaecati
          assumenda nisi! Obcaecati suscipit asperiores totam officia natus vel
          deserunt nostrum ducimus perspiciatis, sequi quis sapiente ipsum
          quaerat adipisci fuga itaque modi velit nisi magni quos distinctio.
          Maxime ut quo obcaecati quae? Ratione, rem odit fuga nihil officia et
          ipsum assumenda, quod soluta, voluptatibus unde. Nisi ratione facilis
          commodi impedit in, veniam ex dolore cum amet similique ipsam nam
          eaque atque. Autem. Corporis accusamus ex quo sapiente, eius debitis
          molestias autem laborum, ipsam totam quas nulla explicabo asperiores!
          Quo quis error similique inventore ullam repellat cupiditate possimus.
          Dolorum adipisci magni atque repellendus? Ullam minima officia,
          dignissimos ducimus ad, aliquid provident voluptatum voluptatem,
          veniam distinctio atque? Veniam tempora quo eius? Reprehenderit dicta
          distinctio quos blanditiis, quo, magnam et pariatur molestiae suscipit
          a nesciunt? Pariatur iure, mollitia natus nam distinctio error culpa
          iste, exercitationem cumque officia, est laboriosam in cupiditate
          ipsam officiis. Odit minus tempore nisi dicta ex! Eius reiciendis
          praesentium sint magni odit. Aperiam perferendis dolorem quaerat, iure
          laudantium sint aliquam nostrum sed fuga aliquid inventore nisi quod
          perspiciatis id quis magnam, sunt quia minus consequatur repellat qui
          commodi! Possimus sequi necessitatibus est. In deleniti sapiente amet
          culpa totam provident architecto similique voluptas explicabo
          obcaecati vero consectetur nesciunt inventore earum, officiis odio
          omnis? Quibusdam nostrum delectus pariatur autem laboriosam magnam
          quo, ipsa iste. Facilis iure explicabo officiis fugiat, adipisci
          quaerat tempora earum placeat eaque ea similique alias iusto doloribus
          quasi. Sunt exercitationem temporibus expedita odio eum, modi,
          doloribus non voluptate magnam harum fuga. Adipisci nesciunt in quam
          quibusdam ab quis officia expedita, laboriosam, sit numquam similique
          laborum nostrum quo maiores! Nemo, eius magni? Non ea sequi nulla est
          quos, quasi cumque molestias quis?
        </p>
      </div>
      <section className="comment-section col-span-2 flex flex-col gap-3">
        <h4 className="text-2xl font-bold">Comments:</h4>
        <div className="comment-input flex flex-col gap-2 items-end">
          <TextField type="textarea" className="w-full" />
          <Button>Submit</Button>
        </div>
        <div className="comments flex flex-col gap-2">
          {comments.map((c) => (
            <Comment {...c} />
          ))}
        </div>
      </section>
      <div className="col-side row-span-full col-start-2 flex flex-col gap-4">
        <div className="author flex items-center gap-2 flex-wrap">
          <Avatar /> Antipin Egor
        </div>
        <div className="tags flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag name={t} />
          ))}
        </div>
        <div className="description">
          <h3 className="text-xl mb-2">Description:</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            similique, unde magni est possimus odit culpa quidem quis,
            aspernatur modi tempore nisi optio cum mollitia, quod consectetur
            sunt sint eos?
          </p>
        </div>

        <a className="flex cursor-pointer items-center gap-2 hover:underline transition-colors hover:text-blue-400 source-link text-m text-blue-500">
          <GitHubIcon />
          Source Code
        </a>

        <div className="stats flex items-center gap-2 justify-between">
          <div className="views flex items-center gap-1 text-gray-400">
            <VisibilityRounded /> 123
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
  );
}

interface ICommentProps {
  nickname: string;
  avatarSrc?: string;
  comment: string;
}

function Comment({ nickname, avatarSrc, comment }: ICommentProps) {
  return (
    <div className="comment p-3 border-2 border-gray-400 rounded-md">
      <div className="flex items-center gap-2 mb-2">
        <Avatar src={avatarSrc} />{" "}
        <p className="cursor-pointer text-blue-500 hover:underline hover:text-blue-400 transition-colors">
          {nickname}
        </p>
      </div>
      <p className="comment-content text-sm">{comment}</p>
    </div>
  );
}
