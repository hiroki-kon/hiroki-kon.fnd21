import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  data: {
    id: string;
    question: string;
    answers: { id: string; answer: string; isCorrectAnswer: boolean }[];
    actualAnswer: string | undefined;
  }[];
};

export function ResultTable(props: Props) {
  const { data } = props;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">問題番号</TableHead>
          <TableHead>問題文</TableHead>
          <TableHead>あなたの回答</TableHead>
          <TableHead className="w-16">正答</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((quiz, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <TableRow key={index}>
            <TableCell className="text-center font-medium">
              {index + 1}
            </TableCell>
            <TableCell>{quiz.question}</TableCell>
            <TableCell>
              {quiz.actualAnswer === undefined
                ? "未回答"
                : quiz.answers.filter(
                    (answer) => answer.id === quiz.actualAnswer,
                  )[0].answer}
            </TableCell>
            <TableCell className="text-center">
              {/* eslint-disable-next-line no-nested-ternary */}
              {quiz.actualAnswer === undefined
                ? "x"
                : quiz.answers.filter(
                    (answer) => answer.id === quiz.actualAnswer,
                  )[0].isCorrectAnswer
                ? "◯"
                : "✕"}
            </TableCell>
            {/* <TableCell className="w-3">
              <Button variant="outline">詳細</Button>
            </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
