import Image from "next/image";
export const GitHubIcon = ({ theme }: { theme: "dark" | "light" }) => (
  <Image
    alt="github-logo"
    src={`/github-mark${theme == "dark" ? "-white" : ""}.svg`}
    className="w-5 h-5"
    width={24}
    height={24}
  />
);
