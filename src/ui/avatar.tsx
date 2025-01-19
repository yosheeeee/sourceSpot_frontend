import { BACKEND_PATH } from "@/constants/backend_path";
import { PersonRounded } from "@mui/icons-material";
import { Avatar, AvatarOwnProps } from "@mui/material";

export default function UserAvatar({
  src,
  local,
  avatarOwnProps,
}: {
  src?: string;
  local?: boolean;
  avatarOwnProps?: AvatarOwnProps;
}) {
  if (src) {
    return (
      <Avatar
        {...avatarOwnProps}
        src={`${local ? BACKEND_PATH + "/" : ""}${src}`}
      ></Avatar>
    );
  } else {
    return (
      <Avatar {...avatarOwnProps}>
        <PersonRounded color="action" />
      </Avatar>
    );
  }
}
