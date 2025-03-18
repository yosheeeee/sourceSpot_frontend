"use client";
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
import { AuthorLink, Tag } from "@/components/some_sheet/ui";
import { projects } from "@/data/projects";
import { useParams, useSearchParams } from "next/navigation";
import { IComment } from "@/models/types";
import { useState } from "react";

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id == projectId);
  if (!project) return <div>Project not found</div>;
  const {
    name,
    description,
    imageSrc,
    tags,
    comments,
    gitHubUrl,
    author,
    likes,
    views,
  } = project;

  const [newComments, setNewComments] = useState<IComment[]>(comments ?? []);

  const [commentValue, setCommentValue] = useState<string>("");

  const handleCommentSubmit = () => {
    if (!commentValue) return;
    const newComment: IComment = {
      author: {
        nickname: "yoshee",
      },
      content: commentValue,
    };
    setNewComments((prev) => [newComment, ...prev]);
    setCommentValue("");
  };

  return (
    <div className="grid grid-cols-[7fr_3fr] gap-x-[20px] gap-y-[40px]">
      <div className="col-main">
        <h1 className="text-3xl">{name}</h1>
        {!!imageSrc && <img src={imageSrc} alt={name} />}

        <p className="readme text-lg">{description}</p>
      </div>
      <section className="comment-section col-span-2 flex flex-col gap-3">
        <h4 className="text-2xl font-bold">Comments:</h4>
        <div className="comment-input flex flex-col gap-2 items-end">
          <TextField
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
            type="textarea"
            className="w-full"
          />
          <Button onClick={handleCommentSubmit}>Submit</Button>
        </div>
        <div className="comments flex flex-col gap-2">
          {newComments.map((c) => (
            <Comment {...c} />
          ))}
        </div>
      </section>
      <div className="col-side row-span-full col-start-2 flex flex-col gap-4">
        <div className="author flex items-center gap-2 flex-wrap">
          <Avatar src={author.avatarSrc} />{" "}
          <AuthorLink nickname={author.nickname} />
        </div>
        <div className="tags flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag name={t} />
          ))}
        </div>
        <div className="description">
          <h3 className="text-xl mb-2">Description:</h3>
          <p className="text-sm">{description}</p>
        </div>

        <a
          href={gitHubUrl}
          className="flex cursor-pointer items-center gap-2 hover:underline transition-colors hover:text-blue-400 source-link text-m text-blue-500"
        >
          <GitHubIcon />
          Source Code
        </a>

        <div className="stats flex items-center gap-2 justify-between">
          <div className="views flex items-center gap-1 text-gray-400">
            <VisibilityRounded /> {views}
          </div>
          <div className="likes items-center gap-1 text-gray-400">
            <FavoriteRounded className="text-red-400" /> {likes}
          </div>
          <div className="comments items-center gap-1 text-gray-400">
            <CommentRounded /> {comments?.length}
          </div>
        </div>
      </div>
    </div>
  );
}

function Comment({ author: { nickname, avatarSrc }, content }: IComment) {
  return (
    <div className="comment p-3 border-2 border-gray-400 rounded-md">
      <div className="flex items-center gap-2 mb-2">
        <Avatar src={avatarSrc} />{" "}
        <p className="cursor-pointer text-blue-500 hover:underline hover:text-blue-400 transition-colors">
          {nickname}
        </p>
      </div>
      <p className="comment-content text-sm">{content}</p>
    </div>
  );
}
