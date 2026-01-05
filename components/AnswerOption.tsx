'use client';

interface AnswerOptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  isCorrect: boolean | null;
  showFeedback: boolean;
  onClick: () => void;
}

export default function AnswerOption({
  option,
  index,
  isSelected,
  isCorrect,
  showFeedback,
  onClick,
}: AnswerOptionProps) {
  const getButtonStyles = () => {
    let baseStyles = 'w-full px-4 py-2.5 rounded-lg font-medium text-left transition-all duration-200 border-2 ';
    
    if (showFeedback && isCorrect !== null) {
      if (isCorrect) {
        return baseStyles + 'bg-green-100 border-green-500 text-green-800 dark:bg-green-900 dark:border-green-400 dark:text-green-200';
      } else if (isSelected && !isCorrect) {
        return baseStyles + 'bg-red-100 border-red-500 text-red-800 dark:bg-red-900 dark:border-red-400 dark:text-red-200';
      }
      return baseStyles + 'bg-gray-100 border-gray-300 text-gray-600 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400';
    }
    
    if (isSelected) {
      return baseStyles + 'bg-blue-100 border-blue-500 text-blue-800 dark:bg-blue-900 dark:border-blue-400 dark:text-blue-200';
    }
    
    return baseStyles + 'bg-white border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700';
  };

  return (
    <button
      onClick={onClick}
      disabled={showFeedback}
      className={getButtonStyles()}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="mr-3 font-bold text-lg">{String.fromCharCode(65 + index)}.</span>
          <span>{option}</span>
        </div>
        {isSelected && !showFeedback && (
          <span className="ml-2 text-blue-600 dark:text-blue-400 text-xl">✓</span>
        )}
        {showFeedback && isCorrect && (
          <span className="ml-2 text-green-600 dark:text-green-400 text-xl">✓</span>
        )}
        {showFeedback && isSelected && !isCorrect && (
          <span className="ml-2 text-red-600 dark:text-red-400 text-xl">✗</span>
        )}
      </div>
    </button>
  );
}

