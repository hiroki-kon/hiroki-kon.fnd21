import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  text: string;
  index: number;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export const AnswerCard = memo((props: Props) => {
  const { text, index, className = "", onClick } = props;

  const choices = ((index: number): "A" | "B" | "C" | "D" => {
    // eslint-disable-next-line default-case
    switch (index) {
      case 1:
        return "A";
      case 2:
        return "B";
      case 3:
        return "C";
      case 4:
        return "D";
      default:
        throw new Error();
    }
  })(index);

  return (
    <Card
      className={cn("cursor-pointer hover:bg-gray-300", className)}
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle>{choices}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="break-all">{text}</div>
      </CardContent>
    </Card>
  );
});
