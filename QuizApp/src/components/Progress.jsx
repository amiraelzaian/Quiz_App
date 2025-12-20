import TimerCounter from "./TimerCounter";

export default function Progress({
  current = 1,
  total = 10,
  progress = 10,
  time = 30,
}) {
  // progress: 0-100 (percentage)
  return (
    <main className="w-[90%] sm:w-[80%] md:w-[60%] flex flex-col gap-2 mt-4 ">
      {/* Progress Bar */}
      <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden shadow-sm">
        <div
          className="h-3 bg-linear-to-r from-blue-500 to-purple-600 transition-all duration-500 "
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {/* Info: Question number + Timer */}
      <section className="flex justify-between items-center ">
        <p className="font-semibold text-gray-500">
          Question {current} / {total}
        </p>
        <TimerCounter time={time} />
      </section>
    </main>
  );
}
