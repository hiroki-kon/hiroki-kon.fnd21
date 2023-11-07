import { Link } from "react-router-dom";
// eslint-disable-next-line import/extensions
import video from "@/assets/background.mp4";
import { Button } from "@/components/ui/button";

export function StartPage() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        className="fixed z-[-1] h-screen w-screen object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="flex h-screen w-full  items-center justify-center">
        <div className="flex h-fit flex-col  items-center justify-center bg-slate-400/[.5] p-10">
          <h1 className="mb-4 text-4xl font-bold">Quiz Script</h1>
          <div className="flex flex-col space-y-4">
            <Button asChild className="bg-blue-500 px-10">
              <Link to="/quiz/beginner">初級</Link>
            </Button>
            <Button asChild className="bg-green-700 px-10">
              <Link to="/quiz/intermediate">中級</Link>
            </Button>
            <Button asChild className="bg-red-900 px-10">
              <Link to="/quiz/advanced">上級</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
