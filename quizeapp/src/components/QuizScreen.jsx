import Progress from "./Porgress";
import Quiz from "./Quiz";

export default function QuizScreen() {
  return (
    <div className="w-full flex flex-col justify-center items-center mx-0  gap-6">
      <Progress current={6} total={10} progress={50} />

      <Quiz />
    </div>
  );
}
