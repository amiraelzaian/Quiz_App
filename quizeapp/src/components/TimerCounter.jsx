import { Clock } from "lucide-react";

export default function TimerCounter({ time }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1 rounded-full">
      <Clock className="w-4 h-4 text-purple-600" />
      <span className="text-sm font-semibold text-gray-500">{time} sec</span>
    </div>
  );
}
