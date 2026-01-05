'use client';

import Link from 'next/link';
import { useState } from 'react';
import PasswordModal from '@/components/PasswordModal';

export default function Home() {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm -mt-24">
        <div className="bg-black/50 dark:bg-black/70 backdrop-blur-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">
            Неужели нашему Малышу 40 лет?!
          </h1>
          <p className="text-center text-lg mb-8 text-white">
            По этому случаю - поздравления! Но сначала проверим его на{' '}
            <Link href="#" className="text-blue-300 hover:underline">
              сенильность
            </Link>
            {' '}и{' '}
            <Link href="/photos" className="text-blue-300 hover:underline">
              склероз
            </Link>
            . Возраст все-таки.
          </p>
          <div className="text-center space-y-4">
            <div>
              <button
                onClick={() => setIsPasswordModalOpen(true)}
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Поздравления
              </button>
            </div>
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

