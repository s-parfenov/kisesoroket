'use client';

import { useState } from 'react';
import { congratulations } from '@/data/questions';

export default function CongratulationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % congratulations.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + congratulations.length) % congratulations.length);
  };

  const current = congratulations[currentIndex];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Carousel Container */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 relative">
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center transition-colors z-10"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center transition-colors z-10"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Content */}
          <div className="min-h-[400px] flex flex-col justify-center">
            <div className="text-lg md:text-xl text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed mb-8 text-center">
              {current.text}
            </div>
            <div className="text-right text-lg font-semibold text-gray-700 dark:text-gray-300 mt-auto">
              — {current.signature}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {congratulations.map((_congrats, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-blue-600 dark:bg-blue-400'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
            {currentIndex + 1} / {congratulations.length}
          </div>
        </div>
      </div>
    </div>
  );
}

