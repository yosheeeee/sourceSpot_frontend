import { GitHubIcon } from "@/ui/icons/icons";
import OAuthButton from "./oauthWrapper";
import { useParams } from "next/navigation";

export default function GitHubOauthItem() {
  const params = useParams<{ authType: string }>();
  return (
    <OAuthButton>
      <GitHubIcon />
      <p>
        {params.authType == "registration"
          ? "Sign up with GitHub"
          : "Sign in with GitHub"}
      </p>
    </OAuthButton>
  );
}
