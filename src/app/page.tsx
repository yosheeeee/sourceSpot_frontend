"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignOut from "react-auth-kit/hooks/useSignOut";

export default function Home() {
  const isAuth = useIsAuthenticated();
  const logout = useSignOut();
  const router = useRouter();
  if (isAuth) {
    return (
      <Button
        variant="contained"
        onClick={() => {
          logout();
          router.refresh();
        }}
      >
        Logout
      </Button>
    );
  } else {
    return (
      <Button variant="contained" onClick={() => router.push("./auth/login")}>
        Login
      </Button>
    );
  }
}
