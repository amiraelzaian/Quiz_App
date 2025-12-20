import Header from "./Header";
import StartSettings from "./StartSettings";

export default function StartScreen({
  setScreen,
  questionNo,
  setQuestioinsNo,
  difficulty,
  setDifficulty,
  language,
  setLanguage,
}) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8">
      <Header />
      <StartSettings
        setScreen={setScreen}
        questionNo={questionNo}
        setQuestioinsNo={setQuestioinsNo}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        language={language}
        setLanguage={setLanguage}
      />
    </main>
  );
}
