import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex justify-between px-[7.25rem] py-[4rem] bg-gray-300">
      <p className="font-bold text-[1rem]">Home</p>
      <div className="bg-white rounded-full border w-[5rem] h-[5rem] flex items-center justify-center">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
