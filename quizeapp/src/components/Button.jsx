export default function Button({ children }) {
  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-2 mt-2
        bg-linear-to-r from-blue-500 to-purple-600
        text-white font-semibold py-3 rounded-2xl
        hover:scale-102  transition-all duration-300 shadow-md cursor-pointer"
    >
      {children}
    </button>
  );
}
