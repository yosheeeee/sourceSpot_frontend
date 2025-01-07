import {
  Link,
  RocketLaunch,
  Search,
  TipsAndUpdates,
} from "@mui/icons-material";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      id="auth-section"
      className="w-full h-full flex items-center justify-center gap-[10vw]"
    >
      <section className="auth-text-section w-[400px]">
        <h1 className="text-6xl mb-6">SourceSpot</h1>
        <ul className="list-none flex flex-col justify-between gap-3">
          <li className="flex gap-2">
            <Search />
            <p>
              Find the perfect pet projects with ease, saving time and inspiring
              your next big idea.
            </p>
          </li>
          <li className="flex gap-2">
            <Link />
            <p>
              Connect, share, and collaborate effortlessly with built-in GitHub
              support for streamlined workflows.
            </p>
          </li>
          <li className="flex gap-2">
            <TipsAndUpdates />
            <p>
              Showcase your projects and explore innovative ideas from a
              community of passionate developers.
            </p>
          </li>
          <li className="flex gap-2">
            <RocketLaunch />
            <p>
              Scale your portfolio and connect with like-minded creators, making
              every project a step forward in your journey.
            </p>
          </li>
        </ul>
      </section>
      {children}
    </main>
  );
}
