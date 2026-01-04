'use client';

import { useState } from 'react';
import { questions, totalQuestions } from '@/data/questions';
import { QuizState } from '@/types/quiz';
import Question from './Question';
import Link from 'next/link';

export default function QuizContainer() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: new Map(),
    score: 0,
    isComplete: false,
  });
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = questions[quizState.currentQuestionIndex];
  const selectedAnswer = quizState.answers.get(quizState.currentQuestionIndex) ?? null;
  const isLastQuestion = quizState.currentQuestionIndex === totalQuestions - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = new Map(quizState.answers);
    newAnswers.set(quizState.currentQuestionIndex, answerIndex);
    
    setQuizState((prev) => ({
      ...prev,
      answers: newAnswers,
    }));
    
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Calculate final score
      let score = 0;
      quizState.answers.forEach((answerIndex, questionIndex) => {
        if (answerIndex === questions[questionIndex].correctAnswer) {
          score++;
        }
      });
      
      setQuizState((prev) => ({
        ...prev,
        score,
        isComplete: true,
      }));
    } else {
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
      setShowFeedback(false);
    }
  };


  if (quizState.isComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Quiz Complete! 🎉
          </h1>
          <p className="text-2xl mb-8 text-gray-600 dark:text-gray-400">
            Your score: {quizState.score} / {totalQuestions}
          </p>
          <div className="space-y-4">
            <Link
              href="/quiz"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Retake Quiz
            </Link>
            <br />
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-gray-600 text-white rounded-lg font-semibold text-lg hover:bg-gray-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Question {quizState.currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {Math.round(((quizState.currentQuestionIndex + 1) / totalQuestions) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${((quizState.currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <Question
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          showFeedback={showFeedback}
          onAnswerSelect={handleAnswerSelect}
        />

        {/* Next button - only show when feedback is shown */}
        {showFeedback && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg"
            >
              {isLastQuestion ? 'Finish Quiz' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

