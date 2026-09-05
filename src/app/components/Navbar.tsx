"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Sparkles } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 dark:bg-[#050814]/85 border-b border-slate-300 dark:border-blue-900/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
          <span>Sanjesh<span className="text-blue-600 dark:text-cyan-400">.Shakya</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-800 dark:text-slate-200">
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">GitHub Projects</a>
          <a href="#frameworks" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Marketing Frameworks</a>
          <a href="#experience" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#certifications" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Certifications</a>
        </nav>

        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Theme"
          className="p-2.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-amber-400 border border-slate-300 dark:border-slate-700 hover:scale-110 transition-all duration-300 shadow-md"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-blue-900" />}
        </button>
      </div>
    </header>
  );
}
