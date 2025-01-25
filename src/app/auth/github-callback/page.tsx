"use client";
import { BACKEND_PATH } from "@/constants/backend_path";
import { generateZodSchema } from "@/functions/generateZodSchema";
import { IInputField } from "@/types/inputs";
import { IUserAuthorizationResponce } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Error } from "@mui/icons-material";
import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IPasswordForm {
  password: string;
}
const inputFields: IInputField[] = [
  {
    name: "password",
    label: "Password",
    required: true,
    type: "password",
  },
];

export default function GitHubCallBackPage() {
  const params = useSearchParams();
  const router = useRouter();
  const gitHubCode = params.get("code");
  const [error, setError] = useState("");
  const signIn = useSignIn();
  const [needPassrowd, setNeedPassword] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const inputs = generateZodSchema(inputFields);

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
        return res.json() as IUserAuthorizationResponce;
      })
      .then((data) => {
        if (data.NeedPassword) {
          setNeedPassword(true);
          setAccessToken(data.AccessToken);
        } else {
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
        }
      })
      .catch((e) => {
        console.log(e);
        setError("Server error, please try again");
      });
  }

  const addUserPassword: SubmitHandler<IPasswordForm> = async (data) => {
    if (!accessToken) {
      return;
    }
    fetch(`${BACKEND_PATH}/auth/add-password`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
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
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IPasswordForm>({
    resolver: zodResolver(inputs),
  });

  return (
    <div className="flex flex-col gap-20 items-center h-auto justify-between">
      <Typography variant="h4" textAlign={"center"}>
        {needPassrowd ? "Continue registration" : "Authorizing in our app"}
      </Typography>

      {needPassrowd == true && (
        <form
          className="flex flex-col gap-3 p-6  max-w-full overflow-hidden"
          onSubmit={handleSubmit(addUserPassword)}
        >
          {error?.length != 0 && <Typography color="error">{error}</Typography>}
          {inputFields.map((f) => (
            <Controller
              name={f.name}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required={f.required}
                  type={f.type}
                  placeholder={f.placeholder}
                  label={f.label}
                  className="w-[400px]"
                  error={!!errors[f.name]}
                  helperText={errors[f.name]?.message ?? ""}
                />
              )}
              key={f.name}
            />
          ))}
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      )}

      {error.length != 0 ? (
        <Button
          variant="contained"
          color="error"
          className="flex gap-2 items-center"
          onClick={fetchLogin}
        >
          <Error></Error> {error}
        </Button>
      ) : needPassrowd ? null : (
        <CircularProgress />
      )}
    </div>
  );
}
