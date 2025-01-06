"use client";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";

export default function AuthPage() {
  const params = useParams<{ authType: string }>();
  if (params.authType != "login" && params.authType != "registration") {
    redirect("./login");
  }
  return (
    <div className="flex gap-3 flex-col">
      <h1>{params.authType} page</h1>
      <Link
        href={`./${params.authType === "login" ? "registration" : "login"}`}
      >
        Change
      </Link>
    </div>
  );
}
