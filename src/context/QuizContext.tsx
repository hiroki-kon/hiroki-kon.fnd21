import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
} from "react";

export type QuizState = {
  id: string;
  question: string;
  answers: {
    id: string;
    answer: string;
    isCorrectAnswer: boolean;
  }[];
  actualAnswer: string | undefined;
};

type Action = { type: "ANSWER"; quiz: QuizState } | { type: "INIT_ANSWER" };

const initialState: QuizState[] = [];

// レデューサーの定義
const quizReducer = (state: QuizState[], action: Action): QuizState[] => {
  switch (action.type) {
    case "ANSWER":
      return [
        ...state,
        {
          question: action.quiz.question,
          id: action.quiz.id,
          answers: action.quiz.answers,
          actualAnswer: action.quiz.actualAnswer,
        },
      ];
    case "INIT_ANSWER":
      return [];
    default:
      return state;
  }
};

type QuizContextProps = {
  state: QuizState[];
  dispatch: Dispatch<Action>;
};

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

type QuizProviderProps = {
  children: ReactNode;
};

export function QuizProvider({ children }: QuizProviderProps) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useQuizContext = (): QuizContextProps => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
