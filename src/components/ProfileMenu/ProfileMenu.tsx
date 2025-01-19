"use client";

import { Login, Logout, PersonRounded } from "@mui/icons-material";
import {
  Avatar,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignOut from "react-auth-kit/hooks/useSignOut";

interface IMenuItem {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

export default function ProfileMenu() {
  const isAuthenticated = useIsAuthenticated();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const signOut = useSignOut();

  const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const authenticatedMenuItems: IMenuItem[] = [
    {
      text: "Logout",
      icon: <Logout />,
      onClick: () => {
        signOut();
        router.push("/");
        setAnchorEl(null);
      },
    },
  ];
  const notAuthenticatedMenuItems: IMenuItem[] = [
    {
      text: "Login",
      icon: <Login />,
      onClick: () => router.push("/auth/login"),
    },
  ];

  const getMenuItems = (items: IMenuItem[]) =>
    items.map((item) => <ProfileMenuItem key={item.text} {...item} />);

  return (
    <div className="profile-menu-container">
      <button className="avatar-button" onClick={handleMenuClick}>
        <Avatar>
          <PersonRounded color="action" />
        </Avatar>
      </button>
      <Menu
        open={Boolean(anchorEl)}
        id="profile-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {getMenuItems(
          isAuthenticated ? authenticatedMenuItems : notAuthenticatedMenuItems,
        )}
      </Menu>
    </div>
  );
}

function ProfileMenuItem({ text, icon, onClick }: IMenuItem) {
  return (
    <MenuItem onClick={onClick}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText>{text}</ListItemText>
    </MenuItem>
  );
}
