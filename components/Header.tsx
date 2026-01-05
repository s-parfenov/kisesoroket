'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-[3.6rem]">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-gray-800 dark:text-gray-200">40</span>
            </Link>
          </div>

          {/* Navigation - Center */}
          <nav className="flex items-center justify-center space-x-4">
            <Link
              href="/congratulations"
              className={`px-4 py-1.5 rounded-lg font-medium transition-colors ${
                pathname === '/congratulations'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Поздравления
            </Link>
            <Link
              href="/photos"
              className={`px-4 py-1.5 rounded-lg font-medium transition-colors ${
                pathname === '/photos'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Фотогалерея
            </Link>
          </nav>

          {/* Theme Toggle - Right */}
          <div className="flex items-center justify-end">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

