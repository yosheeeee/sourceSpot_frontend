"use client";

import { IComment } from "@/models/types";
import Avatar from "@/ui/avatar";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

function Comment({ author, content }: IComment) {
	return (
		<div className="comment p-3 border-2 border-gray-400 rounded-md">
			<div className="flex items-center gap-2 mb-2">
				<Avatar src={author.avatarSrc} />{" "}
				<p className="cursor-pointer text-blue-500 hover:underline hover:text-blue-400 transition-colors">
					{author.username}
				</p>
			</div>
			<p className="comment-content text-sm">{content}</p>
		</div>
	);
}

export default function Comments({
	comments: initialComments,
}: {
	comments: IComment[];
}) {
	const [comments, setComments] = useState(initialComments);
	const [commentValue, setCommentValue] = useState<string>("");

	const onSubmit = () => {
		if (!commentValue) return;
		const newComment: IComment = {
			author: {
				username: "yoshee",
				name: "",
				avatarSrc: "",
				description: "",
				email: "",
				github: "",
				city: "",
				timezone: "",
				likes: 0,
				githubStars: 0,
			},
			content: commentValue,
		};
		setComments((prev) => [newComment, ...prev]);
		setCommentValue("");
	};

	return (
		<section className="comment-section col-span-2 flex flex-col gap-3">
			<h4 className="text-2xl font-bold">Comments:</h4>
			<div className="comment-input flex gap-2 items-center">
				<TextField
					value={commentValue}
					onChange={(e) => setCommentValue(e.target.value)}
					type="textarea"
					className="w-full"
				/>
				<Button variant="contained" size="large" onClick={onSubmit}>
					Submit
				</Button>
			</div>
			<div className="comments flex flex-col gap-2">
				{comments?.map((c, idx) => <Comment key={idx} {...c} />)}
			</div>
		</section>
	);
}
