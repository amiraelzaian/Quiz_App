import { Brain } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center mx-0  gap-5">
      <div className="w-20 h-20 mt-2 sm:mt-4 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center">
        <Brain className="w-10 h-10 text-white" />
      </div>

      <h1 className="sans text-4xl font-bold bg-linear-to-r from-[#4f1e8a] via-[#3B82F6] to-[#d493fd] bg-clip-text text-transparent">
        Quiz Master
      </h1>
      <p className="text-gray-500 -py-3">Test your knowledge and have fun</p>
    </div>
  );
}
