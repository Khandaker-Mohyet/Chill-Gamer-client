import React from "react";
import useDarkMode from "../Firebas/useDarkMode";

const ThemeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
    >
      {isDarkMode ? "☀️ " : "🌙 "}
    </button>
  );
};

export default ThemeToggle;