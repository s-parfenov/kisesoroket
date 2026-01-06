'use client';

import { Question as QuestionType } from '@/types/quiz';
import MediaDisplay from './MediaDisplay';
import AnswerOption from './AnswerOption';

interface QuestionProps {
  question: QuestionType;
  selectedAnswer: number | null;
  showFeedback: boolean;
  onAnswerSelect: (answerIndex: number) => void;
}

export default function Question({
  question,
  selectedAnswer,
  showFeedback,
  onAnswerSelect,
}: QuestionProps) {
  const handleAnswerClick = (index: number) => {
    if (!showFeedback) {
      onAnswerSelect(index);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <MediaDisplay type={question.type} media={question.media} />
      
      <h2 className="text-2xl font-bold mb-6 text-center text-white px-4 py-3 rounded-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
        {question.question}
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            index={index}
            isSelected={selectedAnswer === index}
            isCorrect={showFeedback ? index === question.correctAnswer : null}
            showFeedback={showFeedback}
            onClick={() => handleAnswerClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

