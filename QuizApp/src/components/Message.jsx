export default function Message({ children, success, timeOut }) {
  return (
    <div
      className={`
        w-full px-4 py-2 rounded-lg font-medium text-center
        transition-all duration-300 shadow-md
        ${
          timeOut
            ? "bg-gradient-to-r from-amber-200 to-amber-400 text-amber-900"
            : success
            ? "bg-gradient-to-r from-green-400 to-green-600 text-white"
            : "bg-gradient-to-r from-red-400 to-red-600 text-white"
        }
      `}
    >
      {children}
    </div>
  );
}
