export type QuestionType = 'image' | 'text';

export interface Question {
  id: string;
  type: QuestionType;
  media: string; // URL for image or text content
  question: string;
  options: string[]; // Array of 4 answer options
  correctAnswer: number; // Index of correct answer (0-3)
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: Map<number, number>; // questionIndex -> selectedAnswerIndex
  score: number;
  isComplete: boolean;
}

