import { Play } from "lucide-react";
import Button from "./Button";
export default function StartSettings() {
  return (
    <form
      className="flex flex-col gap-6 w-[90%] sm:w-[70%] md:w-105
      bg-white p-6 rounded-3xl shadow-lg border border-gray-200"
    >
      {/* Number of Questions */}
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="questionNum"
          className="text-sm font-medium text-gray-700"
        >
          Number of Questions
        </label>
        <select
          id="questionNum"
          className="w-full px-4 py-2 rounded-xl border border-gray-300 
          bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="5">5 Questions</option>
          <option value="10">10 Questions</option>
          <option value="15">15 Questions</option>
          <option value="20">20 Questions</option>
        </select>
      </div>

      {/* Difficulty */}
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="level" className="text-sm font-medium text-gray-700">
          Difficulty Level
        </label>
        <select
          id="level"
          className="w-full px-4 py-2 rounded-xl border border-gray-300 
          bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      {/* Language */}
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="lang" className="text-sm font-medium text-gray-700">
          Quiz Language
        </label>
        <select
          id="lang"
          className="w-full px-4 py-2 rounded-xl border border-gray-300 
          bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
      </div>
      {/* Button */}

      <Button>
        {" "}
        <Play className="w-5 h-5" />
        Start Quiz
      </Button>
    </form>
  );
}
