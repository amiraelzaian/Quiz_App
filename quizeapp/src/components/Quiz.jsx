import Option from "./Option";
import Message from "./Message";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
export default function Quiz() {
  return (
    <main className="w-[90%] sm:w-[80%] md:w-[60%] flex flex-col gap-2 p-7 bg-white shadow-md rounded-2xl ">
      <section className="question-text font-semibold text-lg md:text-xl">
        Which of the following Argentinian presidents was elected in 2015?
      </section>
      <ul className="options flex flex-col gap-2">
        <Option>Juan Domingo Peron</Option>
        <Option>Mauricio Macri</Option>
        <Option>Cristina Fernandez do Kirchner</Option>
        <Option>Nestor Kirchner</Option>
      </ul>
      <Message success={true} timeOut={false}>
        🎉 Correct! Greet job!
      </Message>
      <Button>
        Next Question <ArrowRight className="w-5 h-5 text-white" />
      </Button>
    </main>
  );
}
