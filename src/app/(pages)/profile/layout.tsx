import { INavigationButton } from "@/components/Footer/Footer";
import {
  ManageAccountsRounded,
  SecurityRounded,
  ShieldRounded,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import ProfileNavigationLink from "./profileNavigationLink";
import { GitHubIcon } from "@/ui/icons/icons";
import { Schibsted_Grotesk } from "next/font/google";

const profileNavigationLinks: INavigationButton[] = [
  {
    title: "Main",
    icon: <ManageAccountsRounded />,
    matchPath: "/profile/main",
  },
  {
    title: "My Projects",
    icon: <GitHubIcon />,
    matchPath: "/profile/github",
  },
  {
    title: "Privacy",
    icon: <SecurityRounded />,
    matchPath: "/profile/privacy",
  },
];

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="profile-section flex gap-[10%] w-full h-full">
      <div className="navigation flex flex-col gap-2">
        {profileNavigationLinks.map((l) => (
          <ProfileNavigationLink {...l} key={l.matchPath} />
        ))}
      </div>
      <div className="tab-content flex-1">{children}</div>
    </section>
  );
}
