"use client";
import { useRouter, useParams, permanentRedirect } from "next/navigation";
import Login from "./login";
import Registration from "./registration";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

const AuthPages = {
  login: <Login />,
  registration: <Registration />,
};

export default function AuthPage() {
  const params = useParams<{ authType: string }>();
  const router = useRouter();
  const isAuth = useIsAuthenticated();
  if (isAuth) {
    permanentRedirect("/");
  }
  if (params.authType != "login" && params.authType != "registration") {
    router.push("./login");
  }
  return (
    <div className="flex gap-3 flex-col">{AuthPages[params.authType]}</div>
  );
}
