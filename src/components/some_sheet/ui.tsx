import Link from "next/link";

export function Tag({ name }: { name: string }) {
  return (
    <div className="cursor-pointer bg-blue-950 text-blue-400 rounded-3xl text-sm py-1 px-4 transition-colors hover:bg-blue-900 hover:text-blue-300">
      {name}
    </div>
  );
}

export function AuthorLink({ nickname }: { nickname: string }) {
  return (
    <Link
      href={"/users/" + nickname}
      className="transition-colors text-blue-500 hover:text-blue-400 hover:underline"
    >
      @{nickname}
    </Link>
  );
}
