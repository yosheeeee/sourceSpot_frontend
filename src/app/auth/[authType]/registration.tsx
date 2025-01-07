import { IInputField } from "@/types/inputs";
import { SubmitHandler } from "react-hook-form";
import AuthForm from "./authForm";

interface IRegistrationForm {
  name: string;
  email: string;
  password: string;
}

const onSubmit: SubmitHandler<IRegistrationForm> = (data) => {
  console.log(data);
};

const inputFields: IInputField[] = [
  {
    name: "name",
    label: "Name",
    required: true,
    type: "text",
  },
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
export default function Registration() {
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
    />
  );
}
