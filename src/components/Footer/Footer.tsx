"use client";
import { HomeRounded, PersonRounded } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

interface INavigationButton {
  title: string;
  matchPath: string;
  icon: React.ReactNode;
}

const navButtons: INavigationButton[] = [
  {
    title: "Dashboard",
    matchPath: "dashboard",
    icon: <HomeRounded />,
  },
  {
    title: "Profile",
    matchPath: "profile",
    icon: <PersonRounded />,
  },
];

export default function Footer() {
  const path = usePathname();
  const currentPath = useMemo(() => path.split("/")[1], [path]);
  const router = useRouter();

  return (
    <footer>
      <BottomNavigation
        value={currentPath}
        showLabels
        onChange={(e, value) => router.push(`/${value}`)}
      >
        {navButtons.map((btn) => (
          <BottomNavigationAction
            key={btn.matchPath}
            label={btn.title}
            icon={btn.icon}
            value={btn.matchPath}
          />
        ))}
      </BottomNavigation>
    </footer>
  );
}
