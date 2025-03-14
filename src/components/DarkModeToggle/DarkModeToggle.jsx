import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") === "dark"
      : false
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative flex items-center p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition duration-300 shadow-lg"
    >
      {/* Icono de Sol */}
      <i
        className={`fas fa-sun text-yellow-500 text-xl transform transition-all duration-500 ${
          darkMode ? "scale-0" : "scale-100"
        }`}
      ></i>

      {/* Icono de Luna */}
      <i
        className={`fas fa-moon text-blue-400 text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
          darkMode ? "scale-100" : "scale-0"
        }`}
      ></i>
    </button>
  );
}
