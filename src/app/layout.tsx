import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "@/ui/theme";
import { AuthProviderWithStore } from "@/stores/auth";

const font = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "SourceSpot",
  description: "Spot for your pet projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-[100vw] h-[100vh]">
      <body
        className={`${font.className} antialiased w-full h-full overflow-hidden`}
      >
        <AuthProviderWithStore>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </AuthProviderWithStore>
      </body>
    </html>
  );
}
