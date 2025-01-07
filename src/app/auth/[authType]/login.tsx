"use client";
import { SubmitHandler } from "react-hook-form";
import AuthForm from "./authForm";
import { IInputField } from "@/types/inputs";

interface ILoginForm {
  email: string;
  password: string;
}

const onSubmit: SubmitHandler<ILoginForm> = (data) => {
  console.log(data);
};

const inputFields: IInputField[] = [
  {
    name: "email",
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

export default function Login() {
  return (
    <AuthForm
      headingText="Sign in"
      afterfFromText={{
        text: "Don't have account?",
        linkText: "Sign up",
        rerdirectLink: "./registration",
      }}
      onSubmit={onSubmit}
      inputFields={inputFields}
      submitButtonText={"Submit"}
    />
  );
}
