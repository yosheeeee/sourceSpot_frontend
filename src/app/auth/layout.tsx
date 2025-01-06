import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="auth-section"
      className="w-full h-full flex items-center justify-center"
    >
      {children}
    </section>
  );
}
