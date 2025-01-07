import Button from "@mui/material/Button";
import React from "react";

export default function OAuthButton({
  children,
}: {
  children: React.ReactNode[];
}) {
  return (
    <Button
      variant="outlined"
      className="oauth-item p-4 flex items-center justify-center w-full gap-2 text-xl"
    >
      {...children}
    </Button>
  );
}
