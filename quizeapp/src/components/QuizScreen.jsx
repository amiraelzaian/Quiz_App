import { useEffect, useState } from "react";
import Progress from "./Progress";
import Quiz from "./Quiz";
import { Loader } from "lucide-react";
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
  const [timeLeft, setTimeLeft] = useState(15); // وقت لكل سؤال بالثواني
  const [isLoading, setIsloading] = useState(false);

  // Fetch once on mount
  useEffect(() => {
    async function getQuestionsData() {
      setIsloading(true);
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
      }
    }
    getQuestionsData();
  }, []);

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

  useEffect(() => {
    if (quizQuestions.length === 0) return;

    setTimeLeft(15); // reset timer for each question
    setIsTrue(null); // reset answer for new question

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          if (isTrue === null) setIsTrue(false); // وقت انتهى → خطأ تلقائي
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // cleanUp function
  }, [currentIndex, quizQuestions]);

  const handleNext = () => {
    if (isTrue) {
      setScore((s) => s + 1);
    }

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
  const currentQuestion = quizQuestions[currentIndex];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
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
      />
    </div>
  );
}
