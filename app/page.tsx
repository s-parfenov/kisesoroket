'use client';

import Link from 'next/link';
import { useState } from 'react';
import PasswordModal from '@/components/PasswordModal';

export default function Home() {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm -mt-24">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-white">
            Неужели нашему Малышу 40 лет?!
          </h1>
          <p className="text-center text-base sm:text-lg mb-6 md:mb-8 text-white">
            По этому случаю - поздравления! Но сначала{' '}
            <Link href="/photos" className="text-blue-300 hover:underline">
              проверим его на сенильность и склероз
            </Link>
            .<br />
            Возраст все-таки.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => setIsPasswordModalOpen(true)}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors"
            >
              Поздравления
            </button>
          </div>
        </div>
      </div>
      <PasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
      />
    </main>
  );
}

