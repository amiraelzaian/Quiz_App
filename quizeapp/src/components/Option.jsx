export default function Option({
  children,
  onClick,
  language,
  locked,
  isCorrect,
  showResult,
}) {
  let stateStyle = `
    border-2 border-gray-200 bg-gray-100
    cursor-pointer
    hover:bg-linear-to-r hover:from-blue-200 hover:to-purple-200
  `;

  if (showResult) {
    stateStyle = isCorrect
      ? "bg-green-400 text-white border-green-500"
      : "bg-red-200 text-red-800 border-red-300";
  }

  return (
    <div
      onClick={!locked ? onClick : undefined}
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`
        p-3 rounded-2xl font-semibold text-base sm:text-lg
        transition-all duration-300
        ${stateStyle}
        ${language === "ar" ? "text-right" : "text-left"}
        ${locked ? "cursor-not-allowed opacity-80" : ""}
      `}
    >
      {children}
    </div>
  );
}
