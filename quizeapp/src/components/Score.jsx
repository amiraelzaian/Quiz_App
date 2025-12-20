import { Star } from "lucide-react";

export default function Score({ solved, total }) {
  let score = Math.round((solved / total) * 100);
  // حساب عدد النجوم
  const stars = Math.round((score / 100) * 5);

  return (
    <main className="bg-purple-100 p-6 rounded-2xl flex flex-col items-center gap-3">
      {/* Percentage */}
      <h1 className="text-6xl font-normal text-purple-700">{score}%</h1>

      {/* Text */}
      <p className="text-gray-600">
        {solved} out of {total} correct
      </p>

      {/* Stars */}
      <section className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-6 h-6 ${
              i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </section>
    </main>
  );
}
