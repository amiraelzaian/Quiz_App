export default function Option({ children }) {
  return (
    <div
      className="
        p-3 rounded-2xl font-semibold text-gray-700 text-base sm:text-lg
        border-2 border-gray-200 bg-gray-100
        cursor-pointer
        transition-all duration-300
        hover:border-transparent hover:bg-linear-to-r hover:from-blue-200 hover:to-purple-200
        hover:shadow-md  hover:scale-102 active:scale-104
        active:border-purple-500 active:bg-linear-to-r active:from-blue-300 active:to-purple-300
      "
    >
      {children}
    </div>
  );
}
