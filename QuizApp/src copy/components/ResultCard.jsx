import Score from "./Score";
import Button from "./Button";
import { RotateCcw } from "lucide-react";
export default function ResultCard({ setScreen, questionNo, score }) {
  function handleClick() {
    setScreen("start");
  }
  return (
    <main
      className="
        flex flex-col gap-6
        w-[90%] sm:w-[70%] md:max-w-md
        bg-white p-6 rounded-3xl
        shadow-lg border border-gray-200
        text-center
      "
    >
      <h1 className="text-3xl font-semibold text-gray-800">
        Quiz Completed! 🎉
      </h1>

      <p className="text-gray-600">Good Effort 💪</p>

      <Score solved={score} total={questionNo} />

      <Button onClick={handleClick}>
        <RotateCcw className="w-5 h-5  text-white" />
        Try Again
      </Button>
    </main>
  );
}
