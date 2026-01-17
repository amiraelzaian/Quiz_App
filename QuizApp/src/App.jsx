import { useState } from "react";

import StartScreen from "./components/StartScreen";
import Theme from "./components/Theme";
import Footer from "./components/Footer";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import { useQuiz } from "./contexts/QuizContext";

function App() {
  const {
    screen,
    setScreen,
    questionNo,
    setQuestioinsNo,
    difficulty,
    setDifficulty,
    language,
    setLanguage,
    score,
    setScore,
  } = useQuiz();

  return (
    <div className="min-h-screen bg-linear-to-br from-[#EEF2FF] to-[#e8dbfe]">
      {/* <Theme /> */}

      {screen === "start" && (
        <StartScreen
          setScreen={setScreen}
          questionNo={questionNo}
          setQuestioinsNo={setQuestioinsNo}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          language={language}
          setLanguage={setLanguage}
        />
      )}
      {screen === "quiz" && (
        <QuizScreen
          setScreen={setScreen}
          questionNo={questionNo}
          difficulty={difficulty}
          language={language}
          setScore={setScore}
        />
      )}
      {screen === "result" && (
        <ResultScreen
          setScreen={setScreen}
          score={score}
          questionNo={questionNo}
        />
      )}
    </div>
  );
}

export default App;
