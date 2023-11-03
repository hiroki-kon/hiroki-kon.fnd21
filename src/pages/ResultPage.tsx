import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ResultTable } from "@/features/result/components/ResultTable/ResultTable";
import { useQuizContext } from "@/context/QuizContext";

export function ResultPage() {
  const { state, dispatch } = useQuizContext();

  if (state.length === 0) {
    return <Navigate replace to="/" />;
  }

  // console.log({ state });
  return (
    <div className="flex h-screen flex-col justify-center px-4">
      <h1 className="pb-5 text-center text-3xl font-bold">結果</h1>
      <div className="p-20">
        <ResultTable data={state} />
      </div>
      <Button asChild onClick={() => dispatch({ type: "INIT_ANSWER" })}>
        <Link to="/">TOPに戻る</Link>
      </Button>
    </div>
  );
}
