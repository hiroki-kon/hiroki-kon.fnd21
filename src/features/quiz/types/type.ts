export type Quiz = {
  id: string;
  question: string;
  answers: { id: string; answer: string; isCorrectAnswer: boolean }[];
};
