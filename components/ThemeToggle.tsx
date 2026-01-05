'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-[26.67px] h-[26.67px] rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center bg-white dark:bg-gray-800">
        <div className="w-5 h-5" />
      </button>
    );
  }

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-[26.67px] h-[26.67px] rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center bg-white dark:bg-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        // Crown icon (dark mode)
        <svg
          className="w-5 h-5 text-gray-700 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          {/* Crown with classic peaks */}
          <path d="M5 15V9M5 9l2.5-3 1.5 1.5 1.5-1.5 1.5 1.5 1.5-1.5 1.5 1.5 2.5-3M5 9h14M19 9v6M3 15h18" />
          {/* Decorative circles on peaks */}
          <circle cx="7" cy="7" r="0.8" fill="currentColor" />
          <circle cx="12" cy="5" r="0.8" fill="currentColor" />
          <circle cx="17" cy="7" r="0.8" fill="currentColor" />
        </svg>
      ) : (
        // Number 40 icon (light mode)
        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">40</span>
      )}
    </button>
  );
}

