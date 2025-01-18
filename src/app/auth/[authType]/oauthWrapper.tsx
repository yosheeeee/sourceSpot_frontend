import Button from "@mui/material/Button";
import React from "react";

export default function OAuthButton({
  onClick,
  children,
}: {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode[];
}) {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      className="oauth-item p-4 flex items-center justify-center w-full gap-2 text-xl"
    >
      {...children}
    </Button>
  );
}
