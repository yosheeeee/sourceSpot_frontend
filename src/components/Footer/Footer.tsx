"use client";
import { HomeRounded, PersonRounded } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

export interface INavigationButton {
  title: string;
  matchPath: string;
  icon: React.ReactNode;
}

export default function Footer() {
  const path = usePathname();
  const currentPath = useMemo(() => path.split("/")[1], [path]);
  const router = useRouter();
  const isAuthenticated = useIsAuthenticated();

  const navButtons = useMemo(() => {
    const buttons: INavigationButton[] = [
      {
        title: "Dashboard",
        matchPath: "dashboard",
        icon: <HomeRounded />,
      },
    ];

    if (isAuthenticated) {
      buttons.push({
        title: "Profile",
        matchPath: "profile",
        icon: <PersonRounded />,
      });
    }
    return buttons;
  }, [isAuthenticated]);

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
