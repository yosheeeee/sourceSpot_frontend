export default function Logo({
  type,
  className,
}: {
  type: "horizontal" | "vertical" | "mobile" | "workmark";
  className?: string;
}) {
  const logoLinks = {
    horizontal: "/logos/horizontal-logo.png",
    vertical: "/logos/vertical-logo.png",
    workmark: "/logos/wordmark-logo.png",
    mobile: "/logos/mobile-logo.png",
  };
  return (
    <div className={`app-logo ${className ?? ""}`}>
      <img
        src={logoLinks[type]}
        alt="app-logo"
        className="object-contain w-full h-full"
      />
    </div>
  );
}
