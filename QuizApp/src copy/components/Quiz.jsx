import Option from "./Option";
import Button from "./Button";
import Message from "./Message";
import { ArrowRight } from "lucide-react";

export default function Quiz({
  question,
  isTrue,
  setIsTrue,
  handleNext,
  language,
  timeOut,
}) {
  if (!question) return null;

  const isLocked = isTrue !== null || timeOut;

  const handleOptionClick = (option) => {
    if (isLocked) return;
    setIsTrue(option === question.answer);
  };

  return (
    <main className="w-[90%] sm:w-[80%] md:w-[60%] flex flex-col gap-4 p-7 bg-white shadow-md rounded-2xl">
      <section
        className={`font-semibold text-lg md:text-xl ${
          language === "ar" ? "text-right" : "text-left"
        }`}
      >
        {question.question}
      </section>

      <ul className="flex flex-col gap-2">
        {question.options.map((opt) => (
          <Option
            key={opt}
            onClick={() => handleOptionClick(opt)}
            language={language}
            locked={isLocked}
            isCorrect={opt === question.answer}
            showResult={isLocked}
          >
            {opt}
          </Option>
        ))}
      </ul>

      {isLocked && (
        <>
          <Message success={isTrue} timeOut={timeOut}>
            {timeOut
              ? "⏳ Time Out!"
              : isTrue
              ? "🎉 Correct! Great job!"
              : "❌ Wrong Answer!"}
          </Message>

          <Button onClick={handleNext}>
            Next Question <ArrowRight className="w-5 h-5 text-white" />
          </Button>
        </>
      )}
    </main>
  );
}
