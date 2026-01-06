'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import PasswordModal from './PasswordModal';

export default function Header() {
  const pathname = usePathname();
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 backdrop-blur-sm" style={{ backgroundColor: '#454560' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-[2.88rem]">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-white">40</span>
            </Link>
          </div>

          {/* Navigation - Center */}
          <nav className="flex items-center justify-center space-x-4">
            <Link
              href="/photos"
              className={`px-4 py-1.5 rounded-lg font-medium transition-colors uppercase whitespace-nowrap ${
                pathname === '/photos'
                  ? 'bg-blue-600 text-white'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              ТЕСТ НА СЕНИЛЬНОСТЬ
            </Link>
            <button
              onClick={() => setIsPasswordModalOpen(true)}
              className={`px-4 py-1.5 rounded-lg font-medium transition-colors uppercase whitespace-nowrap ${
                pathname === '/congratulations'
                  ? 'bg-blue-600 text-white'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              Поздравления
            </button>
            <PasswordModal
              isOpen={isPasswordModalOpen}
              onClose={() => setIsPasswordModalOpen(false)}
            />
          </nav>

          {/* Empty space for grid alignment */}
          <div></div>
        </div>
      </div>
    </header>
  );
}

