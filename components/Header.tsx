'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import PasswordModal from './PasswordModal';

export default function Header() {
  const pathname = usePathname();
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 backdrop-blur-sm" style={{ backgroundColor: '#454560' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:grid md:grid-cols-3 items-center justify-between md:justify-center h-[2.88rem] relative">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl font-bold">
                <span className="text-white">KISE</span>
                <span style={{ color: '#dc2626' }}>40</span>
                <span className="text-white">ET</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center justify-center space-x-4">
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
          </nav>

          {/* Mobile Menu Button - Right side */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Empty space for grid alignment on desktop */}
          <div className="hidden md:block"></div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-300/20">
            <div className="flex flex-col space-y-2">
              <Link
                href="/photos"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors uppercase whitespace-nowrap ${
                  pathname === '/photos'
                    ? 'bg-blue-600 text-white'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                ТЕСТ НА СЕНИЛЬНОСТЬ
              </Link>
              <button
                onClick={() => {
                  setIsPasswordModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors uppercase whitespace-nowrap text-left ${
                  pathname === '/congratulations'
                    ? 'bg-blue-600 text-white'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                Поздравления
              </button>
            </div>
          </nav>
        )}
      </div>

      <PasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
      />
    </header>
  );
}

