import CupIcon from "./CupIcon";
import ResultCard from "./ResultCard";

export default function ResultScreen({ setScreen, questionNo, score }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8">
      <CupIcon />
      <ResultCard setScreen={setScreen} questionNo={questionNo} score={score} />
    </main>
  );
}
