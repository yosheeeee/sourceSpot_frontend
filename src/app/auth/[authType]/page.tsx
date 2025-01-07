"use client";
import { redirect, useParams } from "next/navigation";
import Login from "./login";
import Registration from "./registration";

const AuthPages = {
  login: <Login />,
  registration: <Registration />,
};

export default function AuthPage() {
  const params = useParams<{ authType: string }>();
  if (params.authType != "login" && params.authType != "registration") {
    redirect("./login");
  }
  return (
    <div className="flex gap-3 flex-col">{AuthPages[params.authType]}</div>
  );
}
