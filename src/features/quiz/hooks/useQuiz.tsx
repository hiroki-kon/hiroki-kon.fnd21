import { useCallback, useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import { beginnerQuiz } from "@/const/beginnerQuiz";
import { intermediateQuiz } from "@/const/intermediateQuiz";
import { advancedQuiz } from "@/const/advancedQuiz";
import { range } from "@/lib/utils";
import { Quiz } from "../types/type";
import { useQuizContext } from "@/context/QuizContext";

// eslint-disable-next-line react-hooks/rules-of-hooks
const getQuizzes = (
  num: number,
  difficulty: "beginner" | "intermediate" | "advanced",
): Quiz[] => {
  const alreadyAskedQuestionIds: string[] = [];

  // ランダムな問題を取得
  const getQuestionAndAnswers = (
    quizArray: Quiz[],
    alreadyAskedId: string[],
  ) => {
    const notAskedQuestions = quizArray.filter(
      (item) => alreadyAskedId.includes(item.id) === false,
    );

    const randomIndex = Math.floor(Math.random() * notAskedQuestions.length);
    return notAskedQuestions[randomIndex];
  };

  const quizArray = ((difficulty: "beginner" | "intermediate" | "advanced") => {
    switch (difficulty) {
      case "beginner":
        return beginnerQuiz;
      case "intermediate":
        return intermediateQuiz;
      case "advanced":
        return advancedQuiz;
      default:
        throw new Error();
    }
  })(difficulty);

  // TODO:答えの順番がランダムになるように

  return range(0, num).map(() => {
    const question = getQuestionAndAnswers(quizArray, alreadyAskedQuestionIds);
    alreadyAskedQuestionIds.push(question.id);
    return question;
  });
};

export const useQuiz = ({
  numberOfQuestion,
  limitTime,
  startTime,
  difficult,
  onQuizFinish,
}: {
  numberOfQuestion: number;
  limitTime: number;
  startTime: Date;
  difficult: "beginner" | "intermediate" | "advanced";
  onQuizFinish: () => void;
}) => {
  const { dispatch } = useQuizContext();
  const [isFinish, setIsFinish] = useState<boolean>(false);

  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);

  const [quizzes] = useState<Quiz[]>(getQuizzes(numberOfQuestion, difficult));

  startTime.setSeconds(startTime.getSeconds() + limitTime);
  const { seconds, restart, pause } = useTimer({
    expiryTimestamp: startTime,
  });

  const nextQuestion = useCallback(() => {
    setCurrentQuestionNumber((preState) => preState + 1);
    const time = new Date();
    time.setSeconds(time.getSeconds() + limitTime);
    restart(time);
  }, [limitTime, restart]);

  const answerQuestion = useCallback(
    (
      quiz: Quiz,
      answer: {
        id: string | undefined;
        answer: string | undefined;
        isCorrectAnswer: boolean | undefined;
      },
    ) => {
      dispatch({ type: "ANSWER", quiz: { ...quiz, actualAnswer: answer.id } });
      nextQuestion();
    },
    [dispatch, nextQuestion],
  );

  useEffect(() => {
    if (seconds <= 0 && !isFinish) {
      answerQuestion(quizzes[currentQuestionNumber - 1], {
        id: undefined,
        answer: undefined,
        isCorrectAnswer: undefined,
      });
    }
  }, [
    seconds,
    isFinish,
    currentQuestionNumber,
    numberOfQuestion,
    quizzes,
    answerQuestion,
    nextQuestion,
  ]);

  useEffect(() => {
    if (currentQuestionNumber > numberOfQuestion && !isFinish) {
      setIsFinish(true);
      pause();
    }
    if (isFinish) {
      onQuizFinish();
    }
  }, [currentQuestionNumber, numberOfQuestion, isFinish, onQuizFinish, pause]);

  return {
    quiz:
      currentQuestionNumber <= numberOfQuestion
        ? quizzes[currentQuestionNumber - 1]
        : quizzes[numberOfQuestion - 1],
    currentQuestionNumber:
      currentQuestionNumber <= numberOfQuestion
        ? currentQuestionNumber
        : numberOfQuestion,
    answerQuestion,
    time: seconds,
    isFinish,
  };
};
