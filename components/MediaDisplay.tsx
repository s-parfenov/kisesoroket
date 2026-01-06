'use client';

import Image from 'next/image';
import { QuestionType } from '@/types/quiz';
import { useState } from 'react';

interface MediaDisplayProps {
  type: QuestionType;
  media: string;
}

export default function MediaDisplay({ type, media }: MediaDisplayProps) {
  const [imageError, setImageError] = useState(false);

  if (type === 'image') {
    if (imageError) {
      return (
        <div className="w-full max-w-2xl mx-auto mb-6">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Image not found</p>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full max-w-2xl mx-auto mb-6 flex justify-center">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={media}
            alt="Question image"
            width={800}
            height={600}
            className="max-w-full max-h-[500px] h-auto w-auto object-contain"
            style={{ borderRadius: '0.5rem' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            onError={() => setImageError(true)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
          {media}
        </p>
      </div>
    </div>
  );
}

