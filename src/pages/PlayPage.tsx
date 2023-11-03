import { useNavigate, useParams } from "react-router-dom";

import { useCallback } from "react";
import { AnswerCard } from "@/features/quiz/components/AnswerCard";
import { QuestionCard } from "@/features/quiz/components/QuestionCard";
import { Timer } from "@/features/quiz/components/Timer";
import { useQuiz } from "@/features/quiz/hooks/useQuiz";

export function PlayPage() {
  const limitTime = 10;
  const navigate = useNavigate();

  const { difficulty } = useParams();
  const difficult = difficulty as "beginner" | "intermediate" | "advanced"
  const onQuizFinish = () => {
    navigate("/result");
  };

  const { quiz, currentQuestionNumber, time, isFinish, answerQuestion } =
    useQuiz({
      numberOfQuestion: 3,
      limitTime,
      startTime: new Date(),
      difficult,
      onQuizFinish,
    });
  return (
    <div className="flex h-screen flex-col justify-center px-4">
      <div className="px-6 py-10">
        <h3 className="pb-2 text-center text-4xl font-bold">
          {isFinish === false ? time : "終了"}
        </h3>
        <Timer
          currentTime={time}
          limitTime={limitTime}
          difficulty={difficult }
        />
      </div>
      <div className="flex h-72 max-h-72 justify-center py-3">
        <div className="w-2/3">
          <QuestionCard
            text={quiz.question}
            number={currentQuestionNumber}
            limitNumberOfQuestion={3}
          />
        </div>
      </div>
      <div className="flex">
        {quiz.answers.map((answer, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const handleAnswerClick = useCallback(
            () => answerQuestion(quiz, answer),
            [answer],
          );
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className="w-1/4 px-3">
              <AnswerCard
                index={index + 1}
                text={answer.answer}
                onClick={handleAnswerClick}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
