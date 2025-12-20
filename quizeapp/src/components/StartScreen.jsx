import Header from "./Header";
import StartSettings from "./StartSettings";
import { motion } from "framer-motion";
import Footer from "./Footer";
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
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen gap-8"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
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
      <Footer>Start And Have Fun 🎉</Footer>
    </motion.main>
  );
}
