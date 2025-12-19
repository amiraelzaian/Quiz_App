import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Theme() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="absolute right-4 top-4 p-2 rounded-full 
                 bg-white/70 backdrop-blur shadow-md
                 hover:scale-105 transition-all duration-300"
    >
      {theme === "light" ? (
        <Sun className="w-6 h-6 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-6 text-indigo-500" />
      )}
    </button>
  );
}
