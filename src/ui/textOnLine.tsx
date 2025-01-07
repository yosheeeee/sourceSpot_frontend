export default function TextOnLine({ text }: { text: string }) {
  return (
    <div className="flex items-center my-4 w-full">
      <div className="grow border-t border-gray-300"></div>
      <span className="mx-4 text-gray-500">{text}</span>
      <div className="grow border-t border-gray-300"></div>
    </div>
  );
}
