import { useEffect, useState } from "react";
import Progress from "./Progress";
import Quiz from "./Quiz";
import { Loader } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "./Footer";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function QuizScreen({
  setScreen,
  questionNo,
  difficulty,
  setScore,
  language,
}) {
  const [questions, setQuestions] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTrue, setIsTrue] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [timeOut, setTimeOut] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  // Fetch once on mount
  useEffect(() => {
    async function getQuestionsData() {
      setIsloading(true);
      setScore(0);
      try {
        const res = await fetch(
          language === "en" ? "/questions-en.json" : "/questions-ar.json"
        );
        if (!res.ok) throw new Error("Can't fetch data, please try again :(");
        const data = await res.json();
        setQuestions(data);
        setIsloading(false);
      } catch (err) {
        console.log(err.message);
        setIsloading(false);
      }
    }
    getQuestionsData();
  }, [language]);

  // Filter, shuffle, select questions
  useEffect(() => {
    if (questions.length === 0) return;

    const filtered = questions.filter((q) => q.difficulty === difficulty);
    const shuffledQuestions = shuffleArray(filtered);

    const finalQuestions = shuffledQuestions.map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));

    setQuizQuestions(finalQuestions.slice(0, questionNo));
  }, [questions, difficulty, questionNo]);

  // Timer effect
  useEffect(() => {
    if (quizQuestions.length === 0 || isTrue !== null) return;

    setTimeLeft(15);
    setTimeOut(false);

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          setIsTrue(false);
          setTimeOut(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, quizQuestions, isTrue]);

  const handleNext = () => {
    if (isTrue) {
      setScore((s) => s + 1);
    }

    setTimeOut(false);
    setIsTrue(null);

    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setScreen("result");
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
        <Loader className="animate-spin w-12 h-12 text-blue-500" />
        <p className="text-gray-500 font-semibold">Loading questions...</p>
      </div>
    );
  }

  if (quizQuestions.length === 0) return null;

  const currentQuestion = quizQuestions[currentIndex];

  return (
    <motion.div
      className="w-full flex flex-col justify-center items-center gap-6"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <Progress
        current={currentIndex + 1}
        total={quizQuestions.length}
        progress={((currentIndex + 1) / quizQuestions.length) * 100}
        time={timeLeft}
      />

      <Quiz
        question={currentQuestion}
        isTrue={isTrue}
        setIsTrue={setIsTrue}
        handleNext={handleNext}
        language={language}
        timeOut={timeOut}
      />
      <Footer>Challenge Yourself 💪</Footer>
    </motion.div>
  );
}
