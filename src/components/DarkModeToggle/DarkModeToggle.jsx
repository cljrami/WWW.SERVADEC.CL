import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Alternar el modo oscuro
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Efecto para actualizar la clase `dark` en el <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Botón para alternar el modo oscuro */}
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md shadow"
      >
        {isDarkMode ? "Alternar a Modo Claro" : "Alternar a Modo Oscuro"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
