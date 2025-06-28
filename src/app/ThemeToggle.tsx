"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set initial theme on mount
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed top-4 left-6 z-50">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="bg-gray-800 text-white px-4 py-2 rounded shadow hover:bg-gray-600 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-400 transition"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "🌙 Dark" : "☀️ Light"} Mode
      </button>
    </div>
  );
}
