"use client";

import { BACKEND_PATH } from "@/constants/backend_path";
import { Login, Logout } from "@mui/icons-material";
import {
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import UserAvatar from "@/ui/avatar";

interface IMenuItem {
	text: string;
	onClick: () => void;
	icon?: React.ReactNode;
}

interface IProfileData {
	ID: number;
	Name: string;
	Mail: string;
	IsAvatarLocal: boolean;
	AvatarPath: string;
}

export default function ProfileMenu() {
	const isAuthenticated = useIsAuthenticated();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const router = useRouter();
	const signOut = useSignOut();
	const authHeader = useAuthHeader();
	const [profileData, setProfileData] = useState<IProfileData | null>(null);

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
				router.refresh();
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

	useEffect(() => {
		if (isAuthenticated) {
			fetch(`${BACKEND_PATH}/user/header-data`, {
				method: "GET",
				headers: {
					Authorization: authHeader,
				},
			})
				.then((res) => res.json() as IProfileData)
				.then((data) => {
					setProfileData(data);
				})
				.catch((e) => console.log(e));
		} else {
			setProfileData(null);
		}
	}, [isAuthenticated]);

	return (
		<div className="profile-menu-container flex-1 flex justify-end">
			<button
				className="avatar-button flex gap-3 items-center"
				onClick={handleMenuClick}
			>
				<UserAvatar
					local={profileData?.IsAvatarLocal}
					src={profileData?.AvatarPath}
				/>
				{profileData && (
					<Typography variant="body1">{profileData.Name}</Typography>
				)}
			</button>
			<Menu
				open={Boolean(anchorEl)}
				id="profile-menu"
				anchorEl={anchorEl}
				onClose={handleClose}
			>
				{getMenuItems(
					isAuthenticated
						? authenticatedMenuItems
						: notAuthenticatedMenuItems,
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
