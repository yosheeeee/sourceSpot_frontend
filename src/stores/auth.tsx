"use client";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit/AuthProvider";
import createRefresh from "react-auth-kit/createRefresh";
import { BACKEND_PATH } from "@/constants/backend_path";
import { IUserAuthorizationResponce } from "@/types/user";

const refresh = createRefresh({
  interval: 840,
  refreshApiCallback: async (
    param,
  ): Promise<{
    isSuccess: boolean;
    newAuthToken: string;
    newAuthTokenExpireIn: number;
    newRefreshTokenExpiresIn: number;
  }> => {
    try {
      const response = await fetch(`${BACKEND_PATH}/auth/refresh`, {
        method: "POST",
        body: JSON.stringify({ refresh_token: param.refreshToken }),
      });
      console.log("Refreshing");
      const resData = (await response.json()) as IUserAuthorizationResponce;
      return {
        isSuccess: true,
        newAuthToken: resData.AccessToken,
        newAuthTokenExpireIn: 900,
        newRefreshTokenExpiresIn: 604800,
      };
    } catch (error) {
      console.error(error);
      return {
        isSuccess: false,
        newAuthToken: "",
        newAuthTokenExpireIn: 0,
        newRefreshTokenExpiresIn: 0,
      };
    }
  },
});

const authStore = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
  refresh: refresh,
});

export const AuthProviderWithStore = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <AuthProvider store={authStore}>{children}</AuthProvider>;
};
