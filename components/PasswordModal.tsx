'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PasswordModal({ isOpen, onClose }: PasswordModalProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password === '0901') {
      router.push('/congratulations');
      onClose();
    } else {
      setError('Ну нет, без справки нельзя, сначала провериться');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div 
        className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
        style={{ margin: 'auto' }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          А тесты ты прошел?! Введи пароль!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Пароль"
              autoFocus
            />
          </div>
          {error && (
            <div className="mb-4 text-red-600 text-sm text-center">
              {error}
            </div>
          )}
          <div>
            <button
              type="submit"
              className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Прошел!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

