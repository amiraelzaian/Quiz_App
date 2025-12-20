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
}) {
  if (!question) return null; // لو لسه مفيش سؤال

  const handleOptionClick = (option) => {
    if (isTrue !== null) return; // منع تغيير الإجابة بعد الاختيار
    setIsTrue(option === question.answer);
    console.log(option === question.answer);
  };

  return (
    <main className="w-[90%] sm:w-[80%] md:w-[60%] flex flex-col gap-4 p-7 bg-white shadow-md rounded-2xl">
      <section
        className={`question-text font-semibold text-lg md:text-xl  ${
          language === "ar" ? "text-right" : "text-left"
        }`}
      >
        {question.question}
      </section>

      <ul className="options flex flex-col gap-2 ">
        {question.options.map((opt) => (
          <Option
            key={opt}
            onClick={() => handleOptionClick(opt)}
            language={language}
          >
            {opt}
          </Option>
        ))}
      </ul>
      {isTrue !== null && (
        <>
          <Message success={isTrue} timeOut={false}>
            {isTrue ? "🎉 Correct! Great job!" : "❌ Wrong Answer!"}
          </Message>
          <Button onClick={handleNext}>
            Next Question <ArrowRight className="w-5 h-5 text-white" />
          </Button>
        </>
      )}
    </main>
  );
}
