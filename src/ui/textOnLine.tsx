import { useTheme } from "@mui/material";

export default function TextOnLine({ text }: { text: string }) {
  const theme = useTheme();
  return (
    <div className={"flex items-center my-4 w-full"}>
      <div className={`grow border-t border-[${theme.palette.grey}]`}></div>
      <span className={`mx-4 text-[${theme.palette.grey}]`}>{text}</span>
      <div className={`grow border-t border-[${theme.palette.grey}]`}></div>
    </div>
  );
}
