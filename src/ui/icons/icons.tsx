"use client";
import { useTheme } from "@mui/material";
import Image from "next/image";

export const GitHubIcon = ({ className }: { className?: string }) => {
	const theme = useTheme();
	return (
		<Image
			alt="github-logo"
			src={`/github-mark${theme.palette.mode == "dark" ? "-white" : ""}.svg`}
			className={`${className} size-5 `}
			width={24}
			height={24}
		/>
	);
};
