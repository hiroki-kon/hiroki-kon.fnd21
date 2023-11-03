import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type Props = {
  limitTime: number;
  currentTime: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  className?: string;
};

export function Timer(props: Props) {
  const { currentTime, difficulty, limitTime, className = "" } = props;
  const progress = (currentTime / limitTime) * 100;

  const progressColor = ((
    difficulty: "beginner" | "intermediate" | "advanced",
  ) => {
    switch (difficulty) {
      case "beginner":
        return "bg-blue-500";
      case "intermediate":
        return "bg-green-700";
      case "advanced":
        return "bg-red-900";
      default:
        throw new Error();
    }
  })(difficulty);

  return <Progress value={progress} className={cn(className, progressColor)} />;
}
