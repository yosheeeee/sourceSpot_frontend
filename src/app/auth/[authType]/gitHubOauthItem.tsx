import { GitHubIcon } from "@/ui/icons/icons";
import OAuthButton from "./oauthWrapper";
import { useParams, useRouter } from "next/navigation";

export default function GitHubOauthItem() {
  const params = useParams<{ authType: string }>();
  const router = useRouter();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(
      `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`,
    );
  };

  return (
    <OAuthButton onClick={clickHandler}>
      <GitHubIcon />
      <p>
        {params.authType == "registration"
          ? "Sign up with GitHub"
          : "Sign in with GitHub"}
      </p>
    </OAuthButton>
  );
}
