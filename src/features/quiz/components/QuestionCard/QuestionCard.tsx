import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  number: number;
  limitNumberOfQuestion: number;
  text: string;
  className?: string;
};

export const QuestionCard = memo((props: Props) => {
  const { number, text, limitNumberOfQuestion, className = "" } = props;
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Q: {number} / {limitNumberOfQuestion}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p>{text}</p>
      </CardContent>
    </Card>
  );
});
