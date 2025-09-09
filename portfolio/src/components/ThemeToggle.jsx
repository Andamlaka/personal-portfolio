import React, { useState, useEffect } from "react";
import { getInitialDark, applyTheme } from "../utils/theme";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return getInitialDark();
  });

  useEffect(() => {
    applyTheme(isDark);
  }, [isDark]);

  return (
    <button
      aria-label="Toggle dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-full bg-amber-100 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      onClick={() => setIsDark(prev => !prev)}
    >
      <span className="text-black dark:text-white text-2xl">
        {isDark ? "🌛" : "🔆"}
      </span>
    </button>
  );
}
