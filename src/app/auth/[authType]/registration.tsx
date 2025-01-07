import { IInputField } from "@/types/inputs";
import { SubmitHandler } from "react-hook-form";
import AuthForm from "./authForm";
import { useState } from "react";
import { IUserAuthorizationResponce } from "@/types/user";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { BACKEND_PATH } from "@/constants/backend_path";
import { useRouter } from "next/navigation";

interface IRegistrationForm {
  name: string;
  email: string;
  password: string;
}

const inputFields: IInputField[] = [
  {
    name: "name",
    label: "Name",
    required: true,
    type: "text",
  },
  {
    name: "mail",
    label: "Email",
    required: true,
    type: "mail",
  },
  {
    name: "password",
    label: "Password",
    required: true,
    type: "password",
  },
];

export default function Registration() {
  const [error, setError] = useState("");
  const signIn = useSignIn();
  const router = useRouter();
  const onSubmit: SubmitHandler<IRegistrationForm> = async (data) => {
    console.log(data);
    try {
      let res = await fetch(`${BACKEND_PATH}/auth/register`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const resData = (await res.json()) as IUserAuthorizationResponce;
      if (res.status == 200) {
        if (
          signIn({
            auth: {
              token: resData.AccessToken,
              type: "Bearer",
            },
            refresh: resData.RefreshToken,
            userState: {
              name: resData.User.Name,
              mail: resData.User.Mail,
              id: resData.User.ID,
            },
          })
        ) {
          router.push("/");
        }
      } else {
        if (resData.error != undefined) {
          setError(resData.error);
        }
      }
    } catch (e) {
      setError("Error, please, try again");
      console.log(e);
    }
  };

  return (
    <AuthForm
      headingText="Sign Up"
      afterfFromText={{
        text: "Already have account?",
        linkText: "Sign in",
        rerdirectLink: "./login",
      }}
      onSubmit={onSubmit}
      inputFields={inputFields}
      submitButtonText={"Submit"}
      error={error}
    />
  );
}
