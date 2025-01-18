"use client";
import { BACKEND_PATH } from "@/constants/backend_path";
import { IUserAuthorizationResponce } from "@/types/user";
import { Error } from "@mui/icons-material";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";

export default function GitHubCallBackPage() {
  const params = useSearchParams();
  const router = useRouter();
  const gitHubCode = params.get("code");
  const [error, setError] = useState("");
  const signIn = useSignIn();

  useEffect(() => {
    if (!gitHubCode) {
      router.replace("./login");
    }
    fetchLogin();
  }, []);

  function fetchLogin() {
    setError("");
    fetch(`${BACKEND_PATH}/auth/github/callback?code=${gitHubCode}`, {
      method: "GET",
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        if (
          signIn({
            auth: {
              token: data.AccessToken,
              type: "Bearer",
            },
            refresh: data.RefreshToken,
            userState: {
              name: data.User.Name,
              mail: data.User.Mail,
              id: data.User.ID,
            },
          })
        ) {
          router.replace("/");
        }
      })
      .catch((e) => {
        console.log(e);
        setError("Server error, please try again");
      });
  }

  return (
    <div className="flex flex-col gap-20 items-center h-auto justify-between">
      <Typography variant="h4" textAlign={"center"}>
        Authorizing in our app
      </Typography>

      {error.length != 0 ? (
        <Button
          variant="contained"
          color="error"
          className="flex gap-2 items-center"
          onClick={fetchLogin}
        >
          <Error></Error> {error}
        </Button>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
