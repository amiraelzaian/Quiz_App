import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

function QuizProvider({ children }) {
  const [screen, setScreen] = useState("start");
  const [questionNo, setQuestioinsNo] = useState(5);
  const [difficulty, setDifficulty] = useState("easy");
  const [language, setLanguage] = useState("en");
  const [score, setScore] = useState(0);

  return (
    <QuizContext
      value={{
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
      }}
    >
      {children}
    </QuizContext>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("context accessed out the provider");
  return context;
}
export { useQuiz, QuizProvider };
