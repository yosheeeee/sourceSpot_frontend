"use client";
import { SubmitHandler } from "react-hook-form";
import AuthForm from "./authForm";
import { IInputField } from "@/types/inputs";
import { useState } from "react";
import { BACKEND_PATH } from "@/constants/backend_path";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { IUserAuthorizationResponce } from "@/types/user";
import { useRouter } from "next/navigation";

interface ILoginForm {
	email: string;
	password: string;
}

const inputFields: IInputField[] = [
	{
		name: "mail",
		label: "Email",
		required: true,
		type: "mail",
		helperText: "Email is not correct",
	},
	{
		name: "password",
		label: "Password",
		required: true,
		type: "password",
		helperText: "Password should be more than 6 symbols",
	},
];

export default function Login() {
	const [error, setError] = useState("");
	const router = useRouter();
	const signIn = useSignIn();
	const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
		try {
			let res = await fetch(`${BACKEND_PATH}/auth/login`, {
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
			headingText="Sign in"
			afterfFromText={{
				text: "Don't have account?",
				linkText: "Sign up",
				rerdirectLink: "./registration",
			}}
			error={error}
			onSubmit={onSubmit}
			inputFields={inputFields}
			submitButtonText={"Submit"}
		/>
	);
}
